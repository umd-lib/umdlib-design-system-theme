import { LitElement, html, unsafeCSS } from "lit";
import sdcStyles from "../../../components/umd-libraries-accordion/umd-libraries-accordion.css?inline";
import { umdStaticStyles } from "../styles/umd-static.js";

let accordionCount = 0;

export class UmdAccordion extends LitElement {
  static styles = [umdStaticStyles, unsafeCSS(sdcStyles)];

  static properties = {
    componentid: {},
    headingLevel: { attribute: "heading-level" },
    defaultOpen: { type: Boolean, attribute: "default-open" },
    linkText: { attribute: "link-text" },
    linkUrl: { attribute: "link-url" },
    open: { state: true },
  };

  constructor() {
    super();
    this.componentid = "";
    this.headingLevel = "h3";
    this.defaultOpen = false;
    this.linkText = "";
    this.linkUrl = "";
    this.accordionId = `accordion-${++accordionCount}`;
  }

  willUpdate(changedProperties) {
    if (changedProperties.has("defaultOpen") && !changedProperties.has("open")) {
      this.open = this.defaultOpen;
    }
  }

  toggle = () => {
    this.open = !this.open;
  };

  render() {
    const accordionId = this.accordionId;
    const headingTag = /^h[2-6]$/.test(this.headingLevel) ? this.headingLevel : "h3";
    const bodyId = `${accordionId}-body`;

    return html`
      <div class="umd-lib accordion--container s-margin-general-medium" id=${this.componentid}>
        <div class="accordion-child--container">
          ${this.renderHeading(headingTag, html`
            <button
              type="button"
              id=${accordionId}
              class="accordion-child--headline c-bg-secondary s-box-medium-v s-box-medium-h"
              aria-expanded=${this.open}
              aria-controls=${bodyId}
              @click=${this.toggle}
            >
              <div class="t-interactive c-content-primary"><slot name="title"></slot></div>
            </button>
          `)}
          <div
            role="region"
            id=${bodyId}
            class="accordion-child--body-wrapper c-bg-secondary"
            aria-labelledby=${accordionId}
            aria-hidden=${!this.open}
            style=${this.open ? "height: auto;" : "display: none;"}
          >
            <div class="accordion-child--body s-box-medium-h s-box-medium-v-bottom wysiwyg-editor">
              <slot name="body"></slot>
              <p>Test</p>
            </div>
            ${this.linkText && this.linkUrl ? html`
              <div class="accordion-child--body-button s-box-medium-h s-box-medium-v-bottom">
                <a href=${this.linkUrl} class="emphasized-link--text t-body-small t-bold c-content-primary">
                  ${this.linkText}
                </a>
              </div>
            ` : ""}
          </div>
        </div>
      </div>
    `;
  }

  renderHeading(tag, content) {
    switch (tag) {
      case "h2": return html`<h2>${content}</h2>`;
      case "h4": return html`<h4>${content}</h4>`;
      case "h5": return html`<h5>${content}</h5>`;
      case "h6": return html`<h6>${content}</h6>`;
      default: return html`<h3>${content}</h3>`;
    }
  }
}

customElements.define("umd-accordion", UmdAccordion);
