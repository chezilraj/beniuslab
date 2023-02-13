<template>
  <section class="hero-wrapper">
    <Header />
    <video
      class="hero-video"
      src="../assets/images/blackbeniusbg.mp4"
      preload
      muted
      autoplay
      playsinline
      loop
    ></video>
    <div class="hero-content-holder">
      <div class="hero-content px-90">
        <h1 class="hero-content__title">
          We are team of<br />multidisciplinary, experimental
        </h1>
        <h2 class="hero-content__description">
          Research,<br />
          Development<br />
          and Design Wizards.
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.hero-wrapper {
  position: relative;
  min-height: 100vh;
  z-index: 5;
  background-color: #000;
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .hero-content-holder {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip: rect(auto, auto, auto, auto);
    color: #fff;
    z-index: 1;
  }
  .hero-content {
    position: fixed;
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    z-index: 1;
    bottom: 18px;
    @media screen and (min-width: 768px) {
      justify-content: center;
      bottom: auto;
      left: 115px;
    }
    &__title {
      font-size: 18px;
      letter-spacing: 1.26px;
      @media screen and (min-width: 768px) {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 1.62px;
      }
      @media screen and (max-width: 767px) {
        margin-bottom: 30px;
      }
    }
    &__description {
      font-family: $secondary-font-family;
      font-size: 45px;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.41px;
      @media screen and (min-width: 768px) {
        font-size: 90px;
        letter-spacing: -0.46px;
      }
    }
  }
}
</style>
