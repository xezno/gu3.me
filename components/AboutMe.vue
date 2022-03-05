<template>
  <BaseArea title="About Me">
    <BaseCard>
      <ul>
        <li>
          <h4>C#</h4> 
          <p>I've written tons of C# code for use within games (s&amp;box, Unity) and desktop applications</p>
        </li>
        <li>
          <h4>Node (JavaScript / TypeScript)</h4>
          <p>I have experience writing node-based backend applications using both JavaScript and TypeScript</p>
        </li>
        <li>
          <h4>HTML, CSS/SCSS, JavaScript</h4> 
          <p>I've made cool webapp experiences, ranging from websites to games using WebGL</p>
        </li>
        <li>
          <h4>Rust</h4>
          <p>I've written high-performance native desktop code using Rust</p>
        </li>
        <li>
          <h4>OpenGL</h4> 
          <p>I've written writing OpenGL and Vulkan graphics code for desktop applications and games</p>
        </li>
      </ul>
    </BaseCard>
  </BaseArea>
</template>

<style lang="scss" scoped>
@import "~assets/variables.scss";

ul {
  li {
    margin-top: 16px;
  }

  list-style: none;
  padding: 0;
}

.container {
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: $screen-md) {
    flex-wrap: nowrap;
  }
}

.left {
  width: 100%;

  @media screen and (min-width: $screen-md) {
    width: 50%;
    margin-right: 8px !important;
  }
}

.right {
  width: 100%;

  @media screen and (min-width: $screen-md) {
    width: 50%;
    margin-left: 8px !important;
  }
}
</style>