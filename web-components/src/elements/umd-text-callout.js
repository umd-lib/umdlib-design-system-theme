import { LitElement, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import { umdStaticStyles } from "../styles/umd-static.js";
import sdcStyles from "../../../components/umd-libraries-text-callout/umd-libraries-text-callout.css?inline";

export class UmdTextCallout extends LitElement {
  static styles = [umdStaticStyles, unsafeCSS(sdcStyles), css`
    .text-callout--feature {
      margin-bottom: var(--space-md);
    }

  `];

  @property() componentid = "";

  render() {
    return html`
      <div
        id=${this.componentid}
        class="umd-lib text-callout--feature c-bg-secondary s-box-medium-v s-box-medium-h s-margin-general-medium"
        role="note"
        aria-label="text callout"
      >
        <div class="text-callout--text wysiwyg-editor">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("umd-text-callout", UmdTextCallout);
