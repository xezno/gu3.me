<template>
  <div>
    <header>
      <Nav></Nav>
    </header>

    <Nuxt />

    <footer>
      <div class="inner">
        <div class="left">
          &copy; Alex Guthrie 2022
        </div>
        <div class="right">
          <SocialLinks></SocialLinks>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "~assets/variables.scss";

footer {
  text-align: center;
  font-weight: bold;
  padding: 0;
  text-transform: uppercase;
  background-color: $dark-1000;
  padding: 10px 0;

  @media (min-width: $screen-md) {
    justify-content: space-around;
  }

  .inner {
    display: flex;
    max-width: $max-width;
    width: 100%;
    align-items: center;
    margin: auto;
    justify-content: space-between;
    padding: 0 1rem;
    align-items: center;
    min-height: 50px;
  }

  .left {
    width: 100%;
    margin: 0 auto;

    @media (min-width: $screen-md) {
      text-align: left;
      width: fit-content;
      margin: 0;
    }
  }

  .right {
    display: none;
    margin: 0 auto;
    width: 0;

    @media (min-width: $screen-md) {
      display: block;
      width: auto;
      margin: 0;
      text-align: right;
    }
  }
}

* {
  box-sizing: border-box;
}

html {
  height: 100vh;
}

body {
  font-family: $font-sans;
  font-weight: 400;

  height: 100vh;

  overflow-y: auto;

  padding: $padding-safe;
  margin: 0;

  line-height: 1.5;
  font-size: 16px;

  font-weight: 400;

  color: $text;
  background-color: $dark-900;
}

a {
  text-decoration: none;
  color: $text;

  &:hover {
    color: $accent-500;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: 800;
  font-family: $font-title;
}

p {
  margin: 8px 0;
}

h1 {
  font-size: 38px;
}

h2 {
  font-size: 32px;
}

h3 {
  font-size: 20px;
}

h4 {
  font-size: 16px;
}

h5 {
  font-size: 14px;
}

h6 {
  font-size: 12px;
}

hr {
  width: 33%;
  border: 1px solid rgba($accent-500, 0.25);
  margin: 20px 0;
}

svg {
  display: inline-block;
  width: 1em;
  height: 1em;
  overflow: visible;
  vertical-align: -.125em;
}

.main-container {
  width: 100%;
  max-width: $max-width;
  margin: 0 auto;
  padding: 32px 1rem;
}

::-webkit-scrollbar {
  width: 8px;
  height: 3px;
}

::-webkit-scrollbar-track {
  background-color: #4F4F4F;
}

::-webkit-scrollbar-track-piece {
  background-color: #333333;
}

::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #4F4F4F;
}
</style>