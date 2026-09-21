import { LitElement, html, unsafeCSS } from "lit";
import sdcStyles from "../../../components/umd-libraries-separator/umd-libraries-separator.css?inline";

export class UmdSeparator extends LitElement {
  static styles = unsafeCSS(sdcStyles);

  static properties = {
    variant: {},
    margin: {},
    componentid: {},
  };

  variant = "red";
  margin = "medium";
  componentid = "";

  render() {
    return html`<hr
      id=${this.componentid}
      class="separator separator--${this.variant} separator--${this.margin}"
      aria-hidden="true"
    >`;
  }
}

customElements.define("umd-separator", UmdSeparator);
