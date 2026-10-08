import { css, unsafeCSS } from "lit";
import baseStyles from "../../../css/base.css?inline";
import utilityStyles from "../../../css/utilities.css?inline";

export const umdStaticStyles = [
  unsafeCSS(baseStyles),
  unsafeCSS(utilityStyles),
  css`
    :host {
      display: block;
    }

    .wysiwyg-editor ::slotted(*) {
      margin-block: 0 var(--space-sm);
    }

    .wysiwyg-editor ::slotted(*:last-child) {
      margin-bottom: 0;
    }
  `,
];
