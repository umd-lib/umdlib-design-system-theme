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
    facebook: {},
    instagram: {},
    youtube: {},
    navigationColumns: { state: true },
    legalContent: { state: true },
  };

  constructor() {
    super();
    this.telephone = "";
    this.logoUrl = "https://www.lib.umd.edu/themes/contrib/umdlib-design-system-theme/logo-dark.svg";
    this.campaignLogoUrl = "https://www.lib.umd.edu/themes/contrib/umdlib-design-system-theme/fearlessly-forward.svg";
    this.depositoryLogoUrl = "https://www.lib.umd.edu/themes/contrib/umdlib-design-system-theme/rfdl.svg";
    this.facebook = "";
    this.instagram = "";
    this.youtube = "";
    this.footerId = `footer-${++footerCount}`;
    this.navigationColumns = [];
    this.legalContent = [];
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

  handleLegalSlotChange = (event) => {
    this.legalContent = event.target.assignedElements().map((element) => {
      const clone = element.cloneNode(true);
      clone.removeAttribute("slot");
      const links = [
        ...(clone.matches("a") ? [clone] : []),
        ...clone.querySelectorAll("a"),
      ];
      links.forEach((link) => {
        link.classList.add("ani-underline", "t-label", "c-underline-dark-primary");
      });
      return clone;
    });
  };

  render() {
    const telephoneUrl = this.telephone.replaceAll(".", "");
    const socialLinks = [
      {
        name: "Facebook",
        url: this.facebook,
        icon: html`
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M26.1539 16C26.1539 10.3923 21.6078 5.84619 16 5.84619C10.3923 5.84619 5.84619 10.3923 5.84619 16C5.84619 20.7618 9.12467 24.7575 13.5473 25.855V19.1031H11.4536V16H13.5473V14.663C13.5473 11.207 15.1114 9.60515 18.5044 9.60515C19.1477 9.60515 20.2577 9.73146 20.7118 9.85737V12.67C20.4722 12.6448 20.0559 12.6322 19.5389 12.6322C17.874 12.6322 17.2307 13.263 17.2307 14.9026V16H20.5473L19.9775 19.1031H17.2307V26.0796C22.2585 25.4724 26.1543 21.1915 26.1543 16H26.1539Z" fill="white"></path>
            <path d="M19.9771 19.1031L20.5469 16.0001H17.2303V14.9027C17.2303 13.263 17.8736 12.6323 19.5384 12.6323C20.0555 12.6323 20.4718 12.6449 20.7114 12.6701V9.85745C20.2573 9.73113 19.1473 9.60522 18.504 9.60522C15.1109 9.60522 13.5468 11.2071 13.5468 14.6631V16.0001H11.4531V19.1031H13.5468V25.855C14.3323 26.05 15.154 26.154 15.9996 26.154C16.4159 26.154 16.8265 26.1284 17.2299 26.0796V19.1031H19.9767H19.9771Z" fill="black"></path>
          </svg>
        `,
      },
      {
        name: "Instagram",
        url: this.instagram,
        icon: html`
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="6" width="20" height="20" rx="6" stroke="white" stroke-width="2"></rect>
            <circle cx="16" cy="16" r="5" stroke="white" stroke-width="2"></circle>
            <circle cx="22" cy="10" r="1.5" fill="white"></circle>
          </svg>
        `,
      },
      {
        name: "YouTube",
        url: this.youtube,
        icon: html`
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M25.7293 11.0954C25.4962 10.2162 24.8073 9.52388 23.9339 9.2885C22.3508 8.86157 16 8.86157 16 8.86157C16 8.86157 9.64927 8.86157 8.06619 9.2885C7.19273 9.52388 6.50388 10.2162 6.27081 11.0954C5.84619 12.69 5.84619 16.0154 5.84619 16.0154C5.84619 16.0154 5.84619 19.3408 6.27081 20.9354C6.50388 21.8146 7.19273 22.507 8.06619 22.7423C9.65042 23.1693 16 23.1693 16 23.1693C16 23.1693 22.3508 23.1693 23.9339 22.7423C24.8073 22.507 25.4962 21.8146 25.7293 20.9354C26.1539 19.342 26.1539 16.0154 26.1539 16.0154C26.1539 16.0154 26.1539 12.69 25.7293 11.0954Z" fill="white"></path>
            <path d="M13.9231 19.0351L19.2308 16.0155L13.9231 12.9958V19.0351Z" fill="black"></path>
          </svg>
        `,
      },
    ].filter(({ url }) => url);

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
              ${socialLinks.length ? html`
                <nav class="s-stack-large" aria-labelledby="${this.footerId}-social-heading">
                  <h3 id="${this.footerId}-social-heading" class="t-title-small c-content-dark-primary s-stack-medium">
                    Stay Connected
                  </h3>
                  <div class="social-media-content s-box-medium-h">
                    <ul class="social-media-list s-stack-small" aria-label="Social media links">
                      ${socialLinks.map(({ name, url, icon }) => html`
                        <li class="s-stack-small">
                          <a class="social-media-list-item c-bg-interactive-dark-primary ani-bg-interactive ani-icon-interactive" href=${url} aria-label=${name}>
                            <span class="sr-only">${name}</span>
                            ${icon}
                          </a>
                        </li>
                      `)}
                    </ul>
                  </div>
                </nav>
              ` : ""}
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
            ${this.legalContent}
            <div><p class="t-label c-content-dark-primary">© ${new Date().getFullYear()} UNIVERSITY OF MARYLAND</p></div>
          </div>
        </div>
      </footer>
      <slot name="navigation" @slotchange=${this.handleNavigationSlotChange} hidden></slot>
      <slot name="legal" @slotchange=${this.handleLegalSlotChange} hidden></slot>
    `;
  }
}

customElements.define("umd-footer", UmdFooter);
