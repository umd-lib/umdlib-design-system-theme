import { LitElement, css, html, nothing } from "lit";
import { styleMap } from "lit/directives/style-map.js";

export class UmdEnvironmentBanner extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .banner {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 25px;
      border-top: 2px solid #000000;
      font-family: inherit;
      font-size: 14px;
      font-weight: 700;
      line-height: 1;
    }

    .banner--test {
      background-color: #ffd200;
      color: #000000;
    }

    .banner--qa {
      background-color: #0066cc;
      color: #ffffff;
    }

    .banner--production {
      background-color: #e21833;
      color: #ffffff;
    }

    .banner--sandbox {
      background-color: #00843d;
      color: #ffffff;
    }
  `;

  static properties = {
    environment: {},
    color: {},
    message: {},
  };

  constructor() {
    super();
    this.environment = "production";
    this.color = "";
    this.message = "";
  }

  render() {
    const environments = {
      test: { message: "Test", textColor: "#000000" },
      qa: { message: "QA", textColor: "#ffffff" },
      production: { message: "Production", textColor: "#ffffff" },
      sandbox: { message: "Sandbox", textColor: "#ffffff" },
    };
    const environment = environments[this.environment];
    const message = this.message || environment?.message;
    if (!message) return nothing;

    const className = environment ? `banner--${this.environment}` : "";
    const customStyles = this.color
      ? styleMap({ backgroundColor: this.color, color: environment?.textColor ?? "#ffffff" })
      : nothing;

    return html`<div class="banner ${className}" role="status" style=${customStyles}>${message}</div>`;
  }
}

customElements.define("umd-environment-banner", UmdEnvironmentBanner);
