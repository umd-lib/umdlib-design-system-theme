import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const packageRoot = path.resolve(new URL("..", import.meta.url).pathname);
const repositoryRoot = path.resolve(packageRoot, "..");
const strict = process.argv.includes("--strict");

const components = [
  "separator",
  "image",
  "text",
  "text-callout",
  "accordion",
  "alert",
  "scroll-to-top",
  "tabs",
  "hero",
  "navigation",
  "footer",
  "card",
  "list",
];

function read(relativePath) {
  return fs.readFileSync(path.join(repositoryRoot, relativePath), "utf8");
}

function stripComments(source) {
  return source
    .replace(/\{#[\s\S]*?#\}/g, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "");
}

function normalizeSource(source, isTwig) {
  let normalized = stripComments(source);

  if (isTwig) {
    // The final Twig else branch is the SDC validation/error output, not the
    // component's normal DOM contract.
    const finalElse = normalized.lastIndexOf("{% else %}");
    if (finalElse >= 0) normalized = normalized.slice(0, finalElse);
    normalized = normalized
      .replace(/\{%[\s\S]*?%\}/g, " ")
      .replace(/\{\{[\s\S]*?\}\}/g, " ");
  }

  return normalized;
}

function extractElements(source, isTwig = false) {
  const elements = new Set();
  const tagPattern = /<([a-z][a-z0-9-]*)(?=\s|\/?>)/gi;

  for (const match of normalizeSource(source, isTwig).matchAll(tagPattern)) {
    let element = match[1].toLowerCase();
    if (element === "h" || /^h[2-6]$/.test(element)) element = "heading";
    if (element !== "slot") elements.add(element);
  }

  return elements;
}

function extractClasses(source, isTwig = false) {
  const classes = new Set();
  const classPattern = /\bclass\s*=\s*(["'`])([\s\S]*?)\1/g;

  for (const match of normalizeSource(source, isTwig).matchAll(classPattern)) {
    for (const token of match[2].split(/\s+/)) {
      if (/^[a-z][a-z0-9_-]*$/i.test(token) && !token.endsWith("--")) classes.add(token);
    }
  }

  return classes;
}

function extractAttributes(source, isTwig = false) {
  const attributes = new Set();
  const attributePattern = /\b(aria-[a-z-]+|data-[a-z-]+|role)\s*=\s*/gi;

  for (const match of normalizeSource(source, isTwig).matchAll(attributePattern)) {
    attributes.add(match[1].toLowerCase());
  }

  return attributes;
}

function difference(left, right) {
  return [...left].filter((value) => !right.has(value)).sort();
}

function formatValues(values) {
  return values.length ? values.join(", ") : "none";
}

let deviations = 0;
console.log("UMD Libraries markup audit");
console.log("Static source comparison only; dynamic Twig/Lit expressions and slots require rendered DOM tests.");

for (const component of components) {
  const twigPath = `components/umd-libraries-${component}/umd-libraries-${component}.twig`;
  const litPath = `web-components/src/elements/umd-${component}.js`;
  const twig = read(twigPath);
  const lit = read(litPath);
  const twigContract = {
    elements: extractElements(twig, true),
    classes: extractClasses(twig, true),
    attributes: extractAttributes(twig, true),
  };
  const litContract = {
    elements: extractElements(lit),
    classes: extractClasses(lit),
    attributes: extractAttributes(lit),
  };
  const missing = {
    elements: difference(twigContract.elements, litContract.elements),
    classes: difference(twigContract.classes, litContract.classes),
    attributes: difference(twigContract.attributes, litContract.attributes),
  };
  const added = {
    elements: difference(litContract.elements, twigContract.elements),
    classes: difference(litContract.classes, twigContract.classes),
    attributes: difference(litContract.attributes, twigContract.attributes),
  };
  const hasDeviation = Object.values(missing).some((values) => values.length) || Object.values(added).some((values) => values.length);

  if (hasDeviation) deviations += 1;
  console.log(`\n${component}: ${hasDeviation ? "REVIEW" : "MATCH"}`);
  console.log(`  Twig-only elements: ${formatValues(missing.elements)}`);
  console.log(`  Lit-only elements: ${formatValues(added.elements)}`);
  console.log(`  Twig-only classes: ${formatValues(missing.classes)}`);
  console.log(`  Lit-only classes: ${formatValues(added.classes)}`);
  console.log(`  Twig-only ARIA/data attributes: ${formatValues(missing.attributes)}`);
  console.log(`  Lit-only ARIA/data attributes: ${formatValues(added.attributes)}`);
}

console.log(`\n${deviations} component contract(s) need review.`);
if (strict && deviations) process.exitCode = 1;
