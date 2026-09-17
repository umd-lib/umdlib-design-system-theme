import { LitElement, css, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import { umdStaticStyles } from "../styles/umd-static.js";
import sdcStyles from "../../../components/umd-libraries-text/umd-libraries-text.css?inline";

export class UmdText extends LitElement {
  static styles = [umdStaticStyles, unsafeCSS(sdcStyles), css`
    .body {
      margin-bottom: var(--space-md);
    }

    .text--label {
      display: block;
      color: var(--dark-gray);
      margin-bottom: var(--space-xs);
    }
  `];

  @property() label = "";
  @property() componentid = "";
  @property({ attribute: "component-class" }) componentClass = "";

  render() {
    return html`
      <div
        id=${this.componentid}
        class="umd-lib body body--content wysiwyg-editor s-margin-general-medium ${this.componentClass}"
      >
        ${this.label ? html`<span class="text--label c-content-secondary">${this.label}</span>` : ""}
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("umd-text", UmdText);
