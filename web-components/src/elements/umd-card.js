import { LitElement, html, unsafeCSS } from "lit";
import sdcStyles from "../../../components/umd-libraries-card/umd-libraries-card.css?inline";
import { umdStaticStyles } from "../styles/umd-static.js";

const lucideScriptUrl = "https://unpkg.com/lucide@latest";
let lucideScriptPromise;

function loadLucide() {
  if (window.lucide?.createIcons) return Promise.resolve(window.lucide);

  if (!lucideScriptPromise) {
    lucideScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = lucideScriptUrl;
      script.async = true;
      script.addEventListener("load", () => {
        if (window.lucide?.createIcons) {
          resolve(window.lucide);
        } else {
          lucideScriptPromise = undefined;
          reject(new Error("Lucide loaded but its createIcons API was not found."));
        }
      }, { once: true });
      script.addEventListener("error", () => {
        script.remove();
        lucideScriptPromise = undefined;
        reject(new Error(`Failed to load Lucide from ${lucideScriptUrl}.`));
      }, { once: true });
      document.head.append(script);
    });
  }

  return lucideScriptPromise;
}

export class UmdCard extends LitElement {
  static styles = [...umdStaticStyles, unsafeCSS(sdcStyles)];

  static properties = {
    variant: {},
    headingLevel: { attribute: "heading-level" },
    cardUrl: { attribute: "card-url" },
    imageUrl: { attribute: "image-url" },
    imageAlt: { attribute: "image-alt" },
    cardDate: { attribute: "card-date" },
    iconName: { attribute: "icon-name" },
    componentid: {},
  };

  constructor() {
    super();
    this.variant = "standard";
    this.headingLevel = "h3";
    this.cardUrl = "";
    this.imageUrl = "";
    this.imageAlt = "";
    this.cardDate = "";
    this.iconName = "info";
    this.componentid = "";
  }

  updated(changedProperties) {
    if (this.variant !== "icon" || (!changedProperties.has("variant") && !changedProperties.has("iconName"))) {
      return;
    }

    loadLucide()
      .then((lucide) => lucide.createIcons({ root: this.shadowRoot }))
      .catch((error) => {
        this.dispatchEvent(new CustomEvent("umd-card-icon-error", {
          bubbles: true,
          composed: true,
          detail: { error, src: lucideScriptUrl },
        }));
      });
  }

  render() {
    const variant = ["standard", "overlay", "icon"].includes(this.variant) ? this.variant : "standard";
    return html`
      <div id=${this.componentid} class="umd-lib card card--${variant} ${variant === "standard" ? "" : "c-bg-secondary"} c-content-primary s-margin-general-medium">
        ${variant === "standard" && this.imageUrl ? html`<div class="card--image"><img alt=${this.imageAlt} src=${this.imageUrl} loading="lazy"></div>` : ""}
        <div class="card--content s-box-medium-v ${variant === "standard" ? "" : "s-box-medium-h"}">
          ${variant === "icon" ? html`<div class="card--content-text">${this.renderContent(variant)}</div>` : this.renderContent(variant)}
          ${variant === "icon" ? html`<div class="card--content-icon"><i data-lucide=${this.iconName} class="card--icon-lucide" aria-hidden="true"></i></div>` : ""}
        </div>
      </div>
    `;
  }

  renderContent(variant) {
    const heading = this.renderHeading(html`${this.cardUrl ? html`<a href=${this.cardUrl} class="card--link"><slot name="title"></slot><span></span></a>` : html`<slot name="title"></slot>`}`);
    return html`
      <div class="card--title">
        ${variant !== "icon" ? html`<p class="card--eyebrow t-eyebrow"><slot name="eyebrow"></slot></p>` : ""}
        ${heading}
      </div>
      <div class="card--details">
        <div class="card--text t-body-small c-content-secondary wysiwyg-editor"><slot name="description"></slot></div>
        ${this.cardDate && variant !== "icon" ? html`<div class="card--date t-label c-content-tertiary">${this.cardDate}</div>` : ""}
      </div>
    `;
  }

  renderHeading(content) {
    const classes = "card--headline t-title-medium";
    switch (this.headingLevel) {
      case "h2": return html`<h2 class=${classes}>${content}</h2>`;
      case "h4": return html`<h4 class=${classes}>${content}</h4>`;
      case "h5": return html`<h5 class=${classes}>${content}</h5>`;
      case "h6": return html`<h6 class=${classes}>${content}</h6>`;
      default: return html`<h3 class=${classes}>${content}</h3>`;
    }
  }
}

customElements.define("umd-card", UmdCard);
