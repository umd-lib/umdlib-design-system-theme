import { LitElement, css, html, unsafeCSS } from "lit";
import sdcStyles from "../../../components/umd-libraries-info-card/umd-libraries-info-card.css?inline";
import { umdStaticStyles } from "../styles/umd-static.js";

export class UmdInfoCard extends LitElement {
  static styles = [...umdStaticStyles, unsafeCSS(sdcStyles), css`
    .card--text ::slotted(p) {
      margin-bottom: 0;
    }

    .card--info:not(:has(.card--footer:not([hidden]))) .card--details {
      margin-bottom: 0 !important;
    }
  `];

  static properties = {
    componentid: {},
    headingLevel: { attribute: "heading-level" },
    hasTitle: { state: true },
    hasDescription: { state: true },
    hasLinks: { state: true },
  };

  constructor() {
    super();
    this.componentid = "";
    this.headingLevel = "h3";
    this.hasTitle = false;
    this.hasDescription = false;
    this.hasLinks = false;
  }

  firstUpdated() {
    this.shadowRoot.querySelectorAll("slot").forEach((slot) => {
      slot.addEventListener("slotchange", this.updateSlots);
    });
  }

  updateSlots = () => {
    this.hasTitle = this.slotHasContent("card-title");
    this.hasDescription = this.slotHasContent("description");
    this.hasLinks = this.slotHasContent("links");
  };

  slotHasContent(name) {
    const slot = this.shadowRoot.querySelector(`slot[name=${name}]`);
    return slot?.assignedNodes({ flatten: true }).some((node) =>
      node.nodeType === Node.ELEMENT_NODE || node.textContent.trim()
    ) || false;
  }

  render() {
    return html`
      <div
        class="umd-lib www card card--info c-content-primary c-bg-secondary s-margin-general-medium s-box-medium-v s-box-medium-h"
        id=${this.componentid}
      >
        <div class="card--content">
          <div class="card--title" ?hidden=${!this.hasTitle}>
            ${this.renderHeading(html`<slot name="card-title"></slot>`)}
          </div>
          <div class="card--details s-stack-medium" ?hidden=${!this.hasDescription}>
            <div class="card--text t-body-small c-content-secondary wysiwyg-editor">
              <slot name="description"></slot>
            </div>
          </div>
        </div>
        <div class="card--footer" ?hidden=${!this.hasLinks}><slot name="links"></slot></div>
      </div>
    `;
  }

  renderHeading(content) {
    const classes = "card--headline s-stack-small t-title-medium";
    switch (/^h[2-6]$/.test(this.headingLevel) ? this.headingLevel : "h3") {
      case "h2": return html`<h2 class=${classes}>${content}</h2>`;
      case "h4": return html`<h4 class=${classes}>${content}</h4>`;
      case "h5": return html`<h5 class=${classes}>${content}</h5>`;
      case "h6": return html`<h6 class=${classes}>${content}</h6>`;
      default: return html`<h3 class=${classes}>${content}</h3>`;
    }
  }
}

customElements.define("umd-info-card", UmdInfoCard);
