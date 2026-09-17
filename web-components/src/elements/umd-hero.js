import { LitElement, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import sdcStyles from "../../../components/umd-libraries-hero/umd-libraries-hero.css?inline";
import { umdStaticStyles } from "../styles/umd-static.js";

export class UmdHero extends LitElement {
  static styles = [umdStaticStyles, unsafeCSS(sdcStyles)];

  @property() variant = "minimal";
  @property() theme = "light";
  @property() image = "";
  @property({ attribute: "image-alt" }) imageAlt = "";

  render() {
    const variant = ["minimal", "overlay"].includes(this.variant) ? this.variant : "minimal";
    const themeClass = this.theme === "dark" ? "c-bg-primary c-content-primary dark-theme" : "c-bg-secondary c-content-primary";

    return html`
      <div class="umd-lib hero--${variant} ${themeClass}" role="none">
        <div class="hero--container s-center">
          <div class="hero--content ${this.image ? "" : "text-only"} s-box-page-medium-h s-box-page-medium-v">
            <div class="hero--content-inner">
              <div class="hero--eyebrow ${variant === "minimal" ? "c-content-secondary" : ""} t-eyebrow s-stack-small">
                <slot name="eyebrow"></slot>
              </div>
              <h1 class="hero--headline t-display s-stack-medium"><slot name="title"></slot></h1>
              <div class="hero--description c-content-secondary t-body-medium wysiwyg-editor">
                <slot name="description"></slot>
              </div>
            </div>
          </div>
          ${this.image ? html`
            <div class="hero--image">
              <figure>
                <img alt=${this.imageAlt} src=${this.image} loading="lazy">
                <figcaption class="t-label wysiwyg-editor"><slot name="caption"></slot></figcaption>
              </figure>
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }
}

customElements.define("umd-hero", UmdHero);
