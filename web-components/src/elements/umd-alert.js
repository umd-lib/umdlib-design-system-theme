import { LitElement, css, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import sdcStyles from "../../../components/umd-libraries-alert/umd-libraries-alert.css?inline";
import { umdStaticStyles } from "../styles/umd-static.js";

export class UmdAlert extends LitElement {
  static styles = [umdStaticStyles, unsafeCSS(sdcStyles), css`
    .alert--description ::slotted(*) {
      margin-block: 0 var(--space-sm);
    }

    .alert--description ::slotted(*:last-child) {
      margin-bottom: 0;
    }

    .alert--button-close button {
      border: 0;
      background: transparent;
      cursor: pointer;
    }

    .alert--button-close svg {
      display: block;
    }
  `];

  @property() variant = "in_page";
  @property({ attribute: "heading-level" }) headingLevel = "h2";
  @property() componentid = "";
  @property() image = "";
  @property({ attribute: "image-alt" }) imageAlt = "";
  @property({ attribute: "link-text" }) linkText = "";
  @property({ attribute: "link-url" }) linkUrl = "";
  @property({ attribute: "customization-class" }) customizationClass = "";
  @property({ type: Boolean, state: true }) dismissed = false;

  get isSiteWide() {
    return this.variant === "site_wide";
  }

  dismiss() {
    this.dismissed = true;
  }

  render() {
    const alertId = this.componentid || "alert";
    const headingTag = /^h[2-6]$/.test(this.headingLevel) ? this.headingLevel : "h2";
    const titleId = `${alertId}-title`;
    const hasImage = this.isSiteWide && this.image && this.imageAlt;

    if (this.dismissed) return "";

    return html`
      <div
        id=${alertId}
        class="umd-lib alert alert--${this.variant} ${this.customizationClass}"
        role=${this.isSiteWide ? "region" : "note"}
        aria-labelledby=${titleId}
      >
        <div class="alert--container ${this.isSiteWide ? "s-box-page-medium-h s-center s-page-lock" : "s-margin-general-medium"}">
          <div class="alert--content s-box-medium-v ${this.isSiteWide ? "" : "s-box-medium-h"}">
            <div class="alert--title">
              ${this.isSiteWide
                ? html`<p id=${titleId} class="t-title-small c-content-primary s-stack-small"><slot name="title"></slot></p>`
                : this.renderHeading(headingTag, titleId)}
            </div>
            ${hasImage ? html`
              <div class="alert--content-with-image">
                <div class="alert--content-text">
                  ${this.renderDescription()}
                  ${this.renderLink()}
                </div>
                <div class="alert--image">
                  <img src=${this.image} alt=${this.imageAlt} loading="lazy">
                </div>
              </div>
            ` : html`
              ${this.renderDescription()}
              ${this.renderLink()}
            `}
            ${this.isSiteWide ? html`
              <div class="alert--button-close s-box-medium-v">
                <button type="button" aria-label="Close site notification" aria-controls=${alertId} @click=${this.dismiss}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="2" />
                  </svg>
                </button>
              </div>
            ` : ""}
          </div>
        </div>
      </div>
    `;
  }

  renderDescription() {
    return html`<div class="alert--description wysiwyg-editor"><slot name="description"></slot></div>`;
  }

  renderHeading(tag, titleId) {
    const heading = html`<slot name="title"></slot>`;
    const attributes = "t-title-small c-content-primary s-stack-small";
    switch (tag) {
      case "h3": return html`<h3 id=${titleId} class=${attributes}>${heading}</h3>`;
      case "h4": return html`<h4 id=${titleId} class=${attributes}>${heading}</h4>`;
      case "h5": return html`<h5 id=${titleId} class=${attributes}>${heading}</h5>`;
      case "h6": return html`<h6 id=${titleId} class=${attributes}>${heading}</h6>`;
      default: return html`<h2 id=${titleId} class=${attributes}>${heading}</h2>`;
    }
  }

  renderLink() {
    return this.linkText && this.linkUrl
      ? html`<a class="emphasized-link--text t-body-small t-bold c-content-primary" href=${this.linkUrl}>${this.linkText}</a>`
      : "";
  }
}

customElements.define("umd-alert", UmdAlert);
