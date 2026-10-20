import { LitElement, html, unsafeCSS } from "lit";
import sdcStyles from "../../../components/umd-libraries-emphasized-link/umd-libraries-emphasized-link.css?inline";
import { umdStaticStyles } from "../styles/umd-static.js";

export class UmdEmphasizedLink extends LitElement {
  static styles = [...umdStaticStyles, unsafeCSS(sdcStyles)];

  static properties = {
    linkText: { attribute: "link-text" },
    linkUrl: { attribute: "link-url" },
    bottomMargin: { type: Boolean, attribute: "bottom-margin" },
    componentid: {},
  };

  constructor() {
    super();
    this.linkText = "";
    this.linkUrl = "";
    this.bottomMargin = false;
    this.componentid = "";
  }

  updated() {
    const link = this.shadowRoot.querySelector("a");
    const icon = link?.querySelector("span");
    if (!link || !icon) return;

    icon.classList.toggle("i-chevron", link.host === window.location.host);
    icon.classList.toggle("i-external-arrow", link.host !== window.location.host);
  }

  render() {
    if (!this.linkText || !this.linkUrl) return "";

    return html`
      <div
        class="umd-lib emphasized-link ${this.bottomMargin ? "s-margin-general-medium" : ""}"
        id=${this.componentid}
      >
        <a
          href=${this.linkUrl}
          class="emphasized-link--text t-body-small t-bold c-content-primary c-underline-primary ani-underline"
        >
          <span class="i-chevron" aria-hidden="true"></span>${this.linkText}
        </a>
      </div>
    `;
  }
}

customElements.define("umd-emphasized-link", UmdEmphasizedLink);
