import { LitElement, css, html, unsafeCSS } from "lit";
import { umdStaticStyles } from "../styles/umd-static.js";
import sdcStyles from "../../../components/umd-libraries-image/umd-libraries-image.css?inline";

export class UmdImage extends LitElement {
  static styles = [...umdStaticStyles, unsafeCSS(sdcStyles), css`
    figure {
      margin: 0 0 var(--space-md);
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    figcaption {
      color: var(--dark-gray);
    }
  `];

  static properties = {
    src: {},
    alt: {},
    variant: {},
    orientation: {},
    componentid: {},
  };

  src = "";
  alt = "";
  variant = "freeform";
  orientation = "landscape";
  componentid = "";

  render() {
    return html`
      <figure id=${this.componentid} class="umd-lib image ${this.orientation} s-margin-general-medium">
        <img
          class="image--image ${this.variant}"
          src=${this.src}
          alt=${this.alt}
          loading="lazy"
        >
        <figcaption class="image--caption s-box-medium-h t-body-small t-italic wysiwyg-editor">
          <slot name="caption"></slot>
        </figcaption>
      </figure>
    `;
  }
}

customElements.define("umd-image", UmdImage);
