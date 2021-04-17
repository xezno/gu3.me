<template>
  <div id="footer">
    <div id="left">
      <toggle-switch></toggle-switch>
    </div>
    <div id="right">
      <a href="https://github.com/xezno/gu3.me">
        <fa :icon="faGithub"></fa> Explore Source on GitHub
      </a>
    </div>
  </div>
</template>

<script>
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import ToggleSwitch from './ToggleSwitch.vue';
  export default {
    components: {
      ToggleSwitch
    },
    computed: {
      faGithub() {
        return faGithub;
      }
    }
  }

</script>

<style lang="scss" scoped>
  #footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    padding: 20px 25px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    user-select: none;

    font-size: 12pt;

    & .fa-github {
      font-size: 24px;
      vertical-align: bottom;
      margin-right: 6px !important;
    }

    & #left,
    #right {
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      margin: 0;
      padding: 0;

      & * {
        margin: 0;
        padding: 0;
      }
    }
  }
</style>
