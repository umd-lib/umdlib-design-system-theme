import { LitElement, css, html, unsafeCSS } from "lit";
import sdcStyles from "../../../components/umd-libraries-quote/umd-libraries-quote.css?inline";
import { umdStaticStyles } from "../styles/umd-static.js";

export class UmdQuote extends LitElement {
  static styles = [...umdStaticStyles, unsafeCSS(sdcStyles), css`
    .quote--text ::slotted(p) {
      color: var(--black) !important;
      font-family: Interstate !important;
      font-size: 1.125rem !important;
      font-style: normal !important;
      font-weight: 700 !important;
      line-height: 1.40625rem !important;
    }

    @media (min-width: 1024px) {
      .quote--text ::slotted(p) {
        font-size: 1.5rem !important;
        line-height: 1.875rem !important;
      }
    }
  `];

  static properties = {
    variant: {},
    theme: {},
    componentid: {},
    hasAuthorTitle: { state: true },
  };

  constructor() {
    super();
    this.variant = "simple";
    this.theme = "dark";
    this.componentid = "";
    this.hasAuthorTitle = false;
  }

  firstUpdated() {
    this.authorTitleSlot = this.shadowRoot.querySelector("slot[name=author-title]");
    this.authorTitleSlot.addEventListener("slotchange", this.updateAuthorTitle);
  }

  updateAuthorTitle = () => {
    this.hasAuthorTitle = this.authorTitleSlot.assignedNodes({ flatten: true }).some((node) =>
      node.nodeType === Node.ELEMENT_NODE || node.textContent.trim()
    );
  }

  render() {
    const theme = this.theme === "light" ? "light" : "dark";
    const variant = this.variant === "feature" ? "feature" : "simple";

    return html`
      <div
        class="umd-lib quote--feature ${theme === "light" ? "c-bg-secondary" : "c-bg-primary dark-theme"} s-box-large-v s-box-large-h s-margin-general-medium"
        role="region"
        aria-label="quote"
        id=${this.componentid}
      >
        ${variant === "feature" ? this.renderBackground(theme) : ""}
        <div class="quote--icon i-quote" aria-hidden="true"></div>
        <div class="quote--content">
          <div class="quote--text t-title-medium s-stack-small"><slot name="quote-text"></slot></div>
          <div class="quote--author c-content-secondary">
            <span class="quote--name t-body-medium"><slot name="author-name"></slot></span>
            <span class="quote--title t-label" ?hidden=${!this.hasAuthorTitle}>
              <slot name="author-title"></slot>
            </span>
          </div>
        </div>
      </div>
    `;
  }

  renderBackground(theme) {
    const opacity = theme === "light" ? ["0.04", "0.06"] : ["0.08", "0.16"];
    const color = theme === "light" ? "black" : "white";

    return html`
      <div class="quote--background" aria-hidden="true">
        <svg class="quote--background-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 684 288" fill="none" preserveAspectRatio="none">
          <path opacity=${opacity[0]} d="M-457.671 890.15L683.654 -212.015L566.325 -454L-575 648.165L-457.671 890.15Z" fill=${color}></path>
        </svg>
        <svg class="quote--background-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1034 288" fill="none" preserveAspectRatio="none">
          <path opacity=${opacity[1]} d="M-107.74 -424.511L1033.58 677.654L916.256 919.639L-225.07 -182.526L-107.74 -424.511Z" fill=${color}></path>
        </svg>
      </div>
    `;
  }
}

customElements.define("umd-quote", UmdQuote);
