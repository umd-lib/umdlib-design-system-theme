import { LitElement, html, unsafeCSS } from "lit";
import sdcStyles from "../../../components/umd-libraries-heading/umd-libraries-heading.css?inline";
import { umdStaticStyles } from "../styles/umd-static.js";

export class UmdHeading extends LitElement {
  static styles = [...umdStaticStyles, unsafeCSS(sdcStyles)];

  static properties = {
    variant: {},
    pageTitle: { type: Boolean, attribute: "page-title" },
    topMargin: {
      type: Boolean,
      attribute: "top-margin",
      converter: {
        fromAttribute: (value) => value !== null && value !== "false",
      },
    },
    screenReaderOnly: { type: Boolean, attribute: "screen-reader-only" },
    linkUrl: { attribute: "link-url" },
    componentid: {},
    hasSubtitle: { state: true },
    hasDate: { state: true },
  };

  constructor() {
    super();
    this.variant = "h2";
    this.pageTitle = false;
    this.topMargin = true;
    this.screenReaderOnly = false;
    this.linkUrl = "";
    this.componentid = "";
    this.hasSubtitle = false;
    this.hasDate = false;
  }

  firstUpdated() {
    this.shadowRoot.querySelectorAll("slot[name=subtitle], slot[name=date]").forEach((slot) => {
      slot.addEventListener("slotchange", this.updateOptionalSlots);
    });
  }

  updateOptionalSlots = () => {
    this.hasSubtitle = this.slotHasContent("subtitle");
    this.hasDate = this.slotHasContent("date");
  };

  slotHasContent(name) {
    const slot = this.shadowRoot.querySelector(`slot[name=${name}]`);
    return slot?.assignedNodes({ flatten: true }).some((node) =>
      node.nodeType === Node.ELEMENT_NODE || node.textContent.trim()
    ) || false;
  }

  updated() {
    const link = this.shadowRoot.querySelector(".heading--link");
    const icon = link?.querySelector(".icon-span");
    if (!link || !icon) return;

    const isInternal = link.host === window.location.host;
    icon.classList.toggle("internal", isInternal);
    icon.classList.toggle("i-external-arrow", !isInternal);
  }

  render() {
    const headingLevel = this.pageTitle
      ? "h1"
      : (/^h[1-6]$/.test(this.variant) ? this.variant : "h2");
    const headingClasses = [
      "c-content-primary",
      this.pageTitle ? "s-stack-small" : "",
      this.screenReaderOnly ? "sr-only" : "",
    ].filter(Boolean).join(" ");
    const containerClasses = [
      "umd-lib",
      "heading",
      `heading--${headingLevel}`,
      this.pageTitle || !this.topMargin ? "s-margin-general-medium" : "s-margin-heading-medium",
      this.pageTitle ? "page-title" : "",
    ].filter(Boolean).join(" ");

    return html`
      <div class=${containerClasses} id=${this.componentid}>
        ${this.renderHeading(headingLevel, headingClasses)}
        <p
          class="c-content-secondary t-title-medium s-stack-small"
          ?hidden=${!this.pageTitle || !this.hasSubtitle}
        ><slot name="subtitle"></slot></p>
        <p
          class="c-content-secondary t-body-small"
          ?hidden=${!this.pageTitle || !this.hasDate}
        ><slot name="date"></slot></p>
      </div>
    `;
  }

  renderHeading(level, classes) {
    const content = this.linkUrl
      ? html`<a href=${this.linkUrl} class="c-content-primary heading--link">
          <slot name="heading-text"></slot>
          <span class="icon-span i-external-arrow" aria-hidden="true"></span>
        </a>`
      : html`<slot name="heading-text"></slot>`;

    switch (level) {
      case "h1": return html`<h1 class=${classes}>${content}</h1>`;
      case "h3": return html`<h3 class=${classes}>${content}</h3>`;
      case "h4": return html`<h4 class=${classes}>${content}</h4>`;
      case "h5": return html`<h5 class=${classes}>${content}</h5>`;
      case "h6": return html`<h6 class=${classes}>${content}</h6>`;
      default: return html`<h2 class=${classes}>${content}</h2>`;
    }
  }
}

customElements.define("umd-heading", UmdHeading);
