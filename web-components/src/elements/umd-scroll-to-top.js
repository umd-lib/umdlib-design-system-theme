import { LitElement, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import sdcStyles from "../../../components/umd-libraries-scroll-to-top/umd-libraries-scroll-to-top.css?inline";

export class UmdScrollToTop extends LitElement {
  static styles = unsafeCSS(sdcStyles);

  @property({ type: Number }) threshold = 300;
  @property({ type: Boolean, state: true }) visible = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this.handleScroll);
    super.disconnectedCallback();
  }

  handleScroll() {
    this.visible = window.scrollY > this.threshold;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return html`
      <div class="umd-lib scroll-top--container ${this.visible ? "visible" : ""}">
        <button class="scroll-top--button c-bg-dark-primary" type="button" @click=${this.scrollToTop}>
          <svg title="arrow icon" aria-hidden="true" width="16" height="19" viewBox="0 0 16 19" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 6.86768L0.708333 12.5L0.708333 7.45542L7.90396 0.0985589L7.97502 0.169624L8.04608 0.0985618L15.2417 7.45542V12.5L9.66667 6.91771V18.9583H6.33333L6.33333 6.86768Z" fill="white"></path>
          </svg>
          <span class="sr-only">Scroll To Top</span>
        </button>
      </div>
    `;
  }
}

customElements.define("umd-scroll-to-top", UmdScrollToTop);
