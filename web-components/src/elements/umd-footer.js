import { LitElement, html, unsafeCSS } from "lit";
import sdcStyles from "../../../components/umd-libraries-footer/umd-libraries-footer.css?inline";
import { umdStaticStyles } from "../styles/umd-static.js";

let footerCount = 0;

export class UmdFooter extends LitElement {
  static styles = [...umdStaticStyles, unsafeCSS(sdcStyles)];

  static properties = {
    telephone: {},
    logoUrl: { attribute: "logo-url" },
    campaignLogoUrl: { attribute: "campaign-logo-url" },
    depositoryLogoUrl: { attribute: "depository-logo-url" },
    navigationColumns: { state: true },
  };

  constructor() {
    super();
    this.telephone = "";
    this.logoUrl = "https://www.lib.umd.edu/themes/contrib/umdlib-design-system-theme/logo-dark.svg";
    this.campaignLogoUrl = "https://www.lib.umd.edu/themes/contrib/umdlib-design-system-theme/fearlessly-forward.svg";
    this.depositoryLogoUrl = "https://www.lib.umd.edu/themes/contrib/umdlib-design-system-theme/rfdl.svg";
    this.footerId = `footer-${++footerCount}`;
    this.navigationColumns = [];
  }

  handleNavigationSlotChange = (event) => {
    this.navigationColumns = event.target.assignedElements()
      .filter((element) => element.localName === "nav")
      .map((nav, index) => ({
        heading: nav.getAttribute("aria-label") || "",
        headingId: `${this.footerId}-navigation-${index + 1}`,
        links: [...nav.children]
          .filter((element) => element.localName === "a")
          .map((link) => {
            const clone = link.cloneNode(true);
            clone.classList.add("ani-underline", "t-body-small", "c-underline-dark-primary");
            return clone;
          }),
      }));
  };

  render() {
    const telephoneUrl = this.telephone.replaceAll(".", "");
    return html`
      <footer class="umd-lib footer c-bg-dark-primary c-content-dark-primary">
        <div class="footer--content s-box-page-medium-h s-box-page-medium-v s-center">
          <div class="footer--header s-stack-large">
            <div class="footer--logo"><img alt="University Libraries" loading="lazy" width="270" height="81" src=${this.logoUrl}></div>
            <div class="footer--title">
              <h2 class="t-title-small c-content-dark-primary"><slot name="institution"></slot></h2>
              <address>
                <p class="c-content-dark-secondary t-body-medium"><slot name="address"></slot></p>
                <a href=${`tel:+${telephoneUrl}`} class="c-content-dark-secondary t-body-medium">${this.telephone}</a>
              </address>
            </div>
          </div>
          <div class="footer--columns">
            <div class="footer--columns-main s-stack-large">
              ${this.navigationColumns.map((column) => html`
                <nav aria-labelledby=${column.headingId} class="s-stack-large">
                  <h3 id=${column.headingId} class="t-title-small c-content-dark-primary s-stack-medium">
                    <span>${column.heading}</span>
                  </h3>
                  <ul class="s-box-medium-h">
                    ${column.links.map((link) => html`<li class="s-stack-small">${link}</li>`)}
                  </ul>
                </nav>
              `)}
              <slot name="social"></slot>
            </div>
            <div class="footer--columns-secondary">
              <a class="footer--columns-secondary-item s-stack-medium" href="https://fearlesslyforward.umd.edu/" target="_blank" rel="noreferrer noopener" aria-label="Link to the Fearlessly Forward Brand website">
                <img alt="University of Maryland Fearlessly Forward Campaign Logo" loading="lazy" width="156" height="67" src=${this.campaignLogoUrl}>
              </a>
              <div class="footer--columns-secondary-item">
                <img alt="" loading="lazy" width="37" height="33" src=${this.depositoryLogoUrl}>
                <p class="t-body-small c-content-dark-primary">Regional Federal Depository Library</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer--sub c-bg-dark-secondary">
          <div class="footer--sub-content s-box-page-small-v s-box-page-medium-h s-center">
            <slot name="legal"></slot>
            <div><p class="t-label c-content-dark-primary">© ${new Date().getFullYear()} UNIVERSITY OF MARYLAND</p></div>
          </div>
        </div>
      </footer>
      <slot name="navigation" @slotchange=${this.handleNavigationSlotChange} hidden></slot>
    `;
  }
}

customElements.define("umd-footer", UmdFooter);
