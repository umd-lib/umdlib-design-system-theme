import { LitElement, css, html, nothing } from "lit";

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
  `;

  static properties = {
    environment: {},
  };

  constructor() {
    super();
    this.environment = "production";
  }

  render() {
    switch (this.environment) {
      case "test":
        return html`<div class="banner banner--test" role="status">Test</div>`;
      case "qa":
        return html`<div class="banner banner--qa" role="status">QA</div>`;
      case "production":
        return html`<div class="banner banner--production" role="status">Production</div>`;
      default:
        return nothing;
    }
  }
}

customElements.define("umd-environment-banner", UmdEnvironmentBanner);
