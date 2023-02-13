<template>
  <div :class="['site-menu', { 'site-menu--open': isMenuOpen }]">
    <div :class="['site-menu-body', { 'site-menu-body--active': isMenuOpen }]">
      <nav class="site-menu-secondary-nav">
        <div class="contact">
          <a href="mailto:info@beniuslab.com">info@beniuslab.com</a>
          <span>Dubai</span>
          <div class="social">
            <ul>
              <li>
                <a target="_blank" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    fill="none"
                  >
                    <path
                      d="M11.046 18.66H6.812V6.077h4.234v1.781l-.014.02-.015.021h.029v-.041c.385-.662.944-1.207 1.617-1.573s1.433-.542 2.198-.506a4.61 4.61 0 0 1 3.481 1.38c.996 1.196 1.494 2.729 1.393 4.282v7.219h-4.233v-6.734c0-1.865-.741-2.846-2.143-2.846-.475.006-.937.155-1.325.428s-.685.657-.851 1.102c-.111.328-.158.674-.14 1.02v7.03h.004zm-6.574 0H.24V6.075h4.231V18.66h.001zM2.356 4.361h-.028c-.301.02-.602-.022-.885-.125S.9 3.975.681 3.767.289 3.31.172 3.033-.004 2.456 0 2.155s.07-.598.194-.873.304-.52.528-.722.487-.355.773-.45.588-.13.888-.102c.301-.023.604.016.89.116s.547.257.768.463.397.456.517.733.181.577.179.879-.067.601-.19.877-.303.523-.526.726-.487.358-.774.454-.59.131-.891.104h.001z"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#fff"
                  >
                    <path
                      d="M10.286 2.51l3.769.054a5.15 5.15 0 0 1 1.733.319c.405.15.772.39 1.073.7.311.302.55.67.7 1.077a5.18 5.18 0 0 1 .317 1.733l.054 3.769-.054 3.769a5.18 5.18 0 0 1-.317 1.733 3.07 3.07 0 0 1-.699 1.075 3.09 3.09 0 0 1-1.075.699c-.555.204-1.141.311-1.733.317l-3.769.054c-2.491 0-2.786 0-3.769-.054-.592-.006-1.178-.113-1.733-.317-.405-.151-.772-.39-1.073-.7-.311-.302-.55-.67-.7-1.077a5.18 5.18 0 0 1-.317-1.733l-.057-3.768.054-3.769a5.15 5.15 0 0 1 .319-1.733c.15-.405.39-.772.7-1.073.302-.311.67-.55 1.077-.7.555-.204 1.141-.311 1.733-.317l3.768-.058zm0-1.679L6.44.887a6.86 6.86 0 0 0-2.265.433 4.58 4.58 0 0 0-1.654 1.076A4.58 4.58 0 0 0 1.445 4.05a6.86 6.86 0 0 0-.433 2.265l-.056 3.846.056 3.845a6.86 6.86 0 0 0 .433 2.265 4.58 4.58 0 0 0 1.077 1.653A4.58 4.58 0 0 0 4.175 19a6.86 6.86 0 0 0 2.265.433l3.846.058 3.845-.056a6.86 6.86 0 0 0 2.265-.433 4.77 4.77 0 0 0 2.73-2.73 6.86 6.86 0 0 0 .433-2.265l.057-3.846-.056-3.845a6.86 6.86 0 0 0-.433-2.265 4.58 4.58 0 0 0-1.077-1.653 4.58 4.58 0 0 0-1.654-1.078A6.86 6.86 0 0 0 14.13.887L10.286.831zm0 4.537a4.79 4.79 0 0 0-3.388 8.18 4.79 4.79 0 0 0 8.18-3.388 4.79 4.79 0 0 0-4.792-4.792zm0 7.902a3.11 3.11 0 0 1-2.199-5.309 3.11 3.11 0 0 1 5.309 2.199 3.11 3.11 0 0 1-3.11 3.11zm4.979-6.97a1.12 1.12 0 1 0 0-2.24 1.12 1.12 0 1 0 0 2.24z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="20"
                    fill="#fff"
                  >
                    <path
                      d="M13.194 9.265c.62-.312 1.088-.659 1.409-1.034.571-.675.853-1.571.853-2.681 0-1.08-.282-2.004-.845-2.778C13.67 1.51 12.079.864 9.828.831H.912V19.03h8.313a13 13 0 0 0 2.607-.244c.802-.166 1.496-.47 2.084-.914.522-.386.959-.866 1.306-1.431.549-.855.823-1.823.823-2.902 0-1.045-.241-1.935-.718-2.666-.483-.731-1.192-1.267-2.133-1.607zM4.59 3.992h4.016c.883 0 1.61.095 2.181.284.661.274.991.832.991 1.683 0 .763-.252 1.297-.75 1.597s-1.153.452-1.952.452H4.59V3.992zm6.35 11.56c-.444.215-1.069.321-1.87.321H4.59V11.02h4.542c.791.006 1.407.11 1.847.306.784.354 1.174 1.004 1.174 1.954 0 1.12-.403 1.874-1.213 2.273zM27.897 1.68h-7.906v2.265h7.906V1.68zm2.745 8.94c-.164-1.054-.526-1.982-1.09-2.782-.618-.907-1.401-1.571-2.355-1.991s-2.019-.633-3.21-.631c-1.998 0-3.622.625-4.878 1.866s-1.879 3.034-1.879 5.367c0 2.487.692 4.284 2.084 5.387 1.386 1.105 2.987 1.655 4.805 1.655 2.2 0 3.911-.655 5.133-1.961.782-.825 1.224-1.636 1.321-2.433h-3.642c-.211.394-.455.702-.735.925-.508.411-1.168.616-1.978.616-.771 0-1.424-.17-1.969-.508-.899-.541-1.37-1.489-1.429-2.838h9.94c.015-1.162-.022-2.056-.119-2.672zm-9.731.349c.131-.875.448-1.569.952-2.082s1.217-.769 2.129-.771c.841 0 1.545.241 2.118.724.565.487.884 1.194.95 2.129h-6.148z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="20"
                    fill="none"
                  >
                    <path
                      d="M13.075 18.842l.046-.016C22.616 15.054 19.989.831 9.69.831 4.521.831.361 5.044.361 10.159c0 6.473 6.556 11.092 12.713 8.683zm-8.608-2.418c.662-1.113 2.806-4.254 6.464-5.337a19.65 19.65 0 0 1 1.354 6.806 8.11 8.11 0 0 1-7.818-1.468h0zm8.965.982a20.93 20.93 0 0 0-1.329-6.582c1.618-.253 3.492-.084 5.616.767-.452 2.535-2.072 4.666-4.287 5.815h0zm4.409-7.02c-2.34-.879-4.402-.989-6.187-.648a21.85 21.85 0 0 0-.873-1.77c2.739-1.094 4.357-2.427 5.082-3.133 1.279 1.48 2.038 3.396 1.978 5.551h0zm-2.806-6.381c-.659.627-2.212 1.894-4.866 2.931-1.301-2.058-2.693-3.511-3.574-4.324 2.82-1.161 6.073-.665 8.441 1.393h0zm-9.555-.823c.665.585 2.126 1.991 3.535 4.164-1.936.623-4.363 1.081-7.314 1.146.47-2.25 1.872-4.156 3.779-5.31h0zM1.552 9.662c3.304-.054 5.978-.575 8.092-1.281a21.34 21.34 0 0 1 .836 1.65C6.8 11.203 4.499 14.23 3.619 15.596c-1.421-1.586-2.205-3.655-2.066-5.934h0z"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div class="copy">
              © {{ currentYear }} Benius lab. All rights reserved.
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.site-menu {
  visibility: hidden;
  transition: visibility 0.6s ease-in-out;
  &--open {
    visibility: visible;
    transition: visibility 0.6s ease-in-out;
  }
}
.site-menu-body {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background-color: #161618;
  color: #fff;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
  }
  &--active {
    opacity: 1;
    transition: opacity 0.6s ease-in-out;
  }
}
.site-menu-main-nav {
  padding-right: 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    padding-right: 90px;
  }
  @media screen and (max-width: 767px) {
    padding-left: 38px;
    margin-top: auto;
    margin-bottom: auto;
    padding-top: 90px;
  }
  ul {
    li {
      text-align: center;
      @media screen and (min-width: 768px) {
        text-align: right;
      }
      a {
        font-size: 45px;
        font-weight: bold;
        font-stretch: condensed;
        line-height: 1.91;
        letter-spacing: 0.9px;
        color: #fff;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        @media screen and (min-width: 768px) {
          font-size: 80px;
          line-height: 1.43;
          letter-spacing: 1.6px;
          text-align: right;
        }
      }
    }
  }
}
.site-menu-secondary-nav {
  display: flex;
  flex-direction: column;
  padding-left: 38px;
  @media screen and (min-width: 768px) {
    padding-left: 90px;
  }
  @media screen and (max-width: 767px) {
    padding-right: 38px;
  }
  .download-resume {
    display: none;
    @media screen and (min-width: 768px) {
      position: relative;
      top: 24%;
      display: flex;
      align-items: center;
    }
    a {
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
      font-stretch: condensed;
      letter-spacing: 0.28px;
      color: #fff;
    }
    svg {
      fill: #ff0651;
      margin-left: 5px;
    }
  }
  .copy {
    font-size: 10px;
    font-weight: 300;
    line-height: 1.36;
    letter-spacing: 0.2px;
    color: #fff;
    margin-top: 29px;
    @media screen and (max-width: 767px) {
      text-align: center;
    }
  }
}
</style>
