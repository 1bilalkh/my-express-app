
function Footer() {
  return (
    <>
      <footer className="bg-gray-100 text-gray-600 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex gap-16">
            <div>
              <h6 class=" text-[20px] md:text-base font-bold mb-5 text-black">Services</h6>
              <div class="flex flex-col items-start gap-1">
                <a class="transition-opacity duration-200" href="/services/product-design">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">Product Design</p>
                </a>
                <a class="transition-opacity duration-200" href="/services/seo">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">Web SEO</p>
                </a>
                <a class="transition-opacity duration-200" href="/services/cro">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">Conversion Rate Optimization</p>
                </a>
                <a class="transition-opacity duration-200" href="/services/web-development">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">Web Development</p>
                </a>
                <a class="transition-opacity duration-200" href="/services/project-maintenance">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">Project Maintenance &amp; Support</p>
                </a>
                <a class="transition-opacity duration-200" href="/services/platform-migration">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">Platform Migration</p>
                </a>
                <a class="transition-opacity duration-200" href="/services/saas-mvp">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">SaaS MVP</p>
                </a>
                <a class="transition-opacity duration-200" href="/services/ai-automations">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">AI Automations &amp; Insights</p>
                </a>
                <a className="transition-opacity duration-200" href="/services/branding">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">Branding</p>
                </a>
              </div>

            </div>
            <div>
              <h6 class="text-[20px] md:text-base font-bold mb-5 text-black">Company</h6>
              <div class="flex flex-col items-start gap-1">
                <a class="transition-opacity duration-200" href="/about">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">About Us</p>
                </a>
                <a class="transition-opacity duration-200" href="/work">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">Work</p>
                </a>
                <a class="transition-opacity duration-200" href="/pricing">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">Pricing</p>
                </a>
                <a class="transition-opacity duration-200" href="/contact">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">Contact</p>
                </a>
                <a class="transition-opacity duration-200" href="/careers">
                  <p class=" text-[15px] md:text-[15px] font-medium text-foreground opacity-70 hover:text-primary hover:opacity-100">Careers</p>
                </a>
              </div>
            </div>
          </div>
          <div class=" w-full flex items-center justify-center md:justify-between mt-16 pt-6 border-t border-gray-300">
            <span class=" text-sm md:text-[15px]">2025.</span>
            <div class=" hidden md:flex items-center">
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/example">
                <div class=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@example">
                <div class=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/example">
                <div class=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9887 11.5716C19.9029 9.94513 19.3313 8.44745 18.4163 7.22097C18.1749 7.48407 17.8785 7.7698 17.4957 8.09159C16.5881 8.85458 15.4887 9.54307 14.1834 10.101C14.3498 10.4506 14.5029 10.7899 14.6376 11.1098L14.6388 11.1125C14.6652 11.1742 14.6879 11.2306 14.7321 11.3418C14.7379 11.3562 14.7433 11.3697 14.7485 11.3825C16.2621 11.2122 17.8576 11.2749 19.4049 11.4845C19.6106 11.5123 19.805 11.5415 19.9887 11.5716ZM10.6044 4.1213C10.7783 4.36621 10.9602 4.62859 11.1803 4.95378C11.7929 5.8589 12.396 6.81391 12.9604 7.79507C13.0749 7.99416 13.187 8.19289 13.2964 8.39112C14.5193 7.90993 15.5296 7.30281 16.3438 6.62486C16.6731 6.35063 16.9383 6.093 17.1403 5.86972C15.7501 4.70277 13.9571 4 12 4C11.524 4 11.0576 4.04158 10.6044 4.1213ZM4.25266 9.99755C4.83145 9.98452 5.48467 9.94941 6.29303 9.87518C7.90024 9.72758 9.54141 9.46249 11.1549 9.05274C10.5719 8.03721 9.93888 7.02331 9.29452 6.05378C8.98479 5.58775 8.68357 5.14992 8.45484 4.82642C6.39541 5.84613 4.83794 7.72658 4.25266 9.99755ZM5.78366 17.036C6.17111 16.4693 6.68061 15.8314 7.35797 15.1374C8.81199 13.6478 10.5286 12.4878 12.5139 11.8473C12.5417 11.8391 12.5604 11.8336 12.576 11.829C12.411 11.4651 12.2562 11.1405 12.1003 10.8342C10.2643 11.3687 8.3303 11.703 6.40279 11.8762C5.46319 11.9606 4.62005 11.9981 4 12.0044C4.00102 13.9112 4.66915 15.662 5.78366 17.036ZM15.0045 19.4166C14.9001 18.8745 14.7669 18.2706 14.5899 17.574C14.2689 16.3112 13.8668 15.012 13.373 13.7078C11.3712 14.4343 9.77574 15.4974 8.54309 16.7649C7.94904 17.3757 7.51244 17.9537 7.22642 18.4203C8.55892 19.4127 10.2109 20 12 20C13.0626 20 14.0769 19.7928 15.0045 19.4166ZM16.8778 18.3414C18.4073 17.1632 19.4985 15.444 19.8652 13.4703C19.5253 13.3865 19.094 13.3005 18.6196 13.2346C17.5756 13.0897 16.5014 13.0655 15.4409 13.2018C15.8933 14.4764 16.2642 15.7332 16.5608 16.9361C16.6903 17.4614 16.7958 17.9358 16.8778 18.3414ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path>
                  </svg>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.threads.com/@example">
                <div class=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"></path>
                  </svg>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/example">
                <div class=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="26" width="26" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 11C8.60457 11 9.5 10.1046 9.5 9C9.5 7.89543 8.60457 7 7.5 7H3V11H7.5ZM8.5 13H3V17H8.5C9.60457 17 10.5 16.1046 10.5 15C10.5 13.8954 9.60457 13 8.5 13ZM10.5632 11.5725C11.7239 12.2726 12.5 13.5457 12.5 15C12.5 17.2091 10.7091 19 8.5 19H1V5H7.5C9.70914 5 11.5 6.79086 11.5 9C11.5 9.97964 11.1478 10.877 10.5632 11.5725ZM15.5 6H21V7.5H15.5V6ZM23 14.5H15.5V14.75C15.5 16.2688 16.7312 17.5 18.25 17.5C19.3187 17.5 20.245 16.8904 20.7001 16H22.8338C22.2851 18.0169 20.4407 19.5 18.25 19.5C15.6266 19.5 13.5 17.3734 13.5 14.75V13.25C13.5 10.6266 15.6266 8.5 18.25 8.5C20.8734 8.5 23 10.6266 23 13.25V14.5ZM20.8965 12.5C20.57 11.3457 19.5088 10.5 18.25 10.5C16.9912 10.5 15.93 11.3457 15.6035 12.5H20.8965Z"></path>
                  </svg>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/example/">
                <div class=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center border-r">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/acme">
                <div class=" text-foreground hover:text-primary w-12 h-9 flex items-center justify-center">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="26" width="26" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer