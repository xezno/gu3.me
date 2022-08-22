<template>
  <BaseArea title="My Skills">
    <BaseCard>
      <table>
        <tr>
          <td>
            <h4>C#</h4>
          </td>
          <td>
            I've written tons of C# code for use within games (s&amp;box, Unity) and desktop applications
          </td>
        </tr>
        <tr>
          <td>
            <h4>Rust, C++</h4>
          </td>
          <td>
            I've written high-performance native desktop code using Rust as well as C++
          </td>
        </tr>
        <tr>
          <td>
            <h4>OpenGL, DirectX</h4>
          </td>
          <td>
            I've written OpenGL and DirectX 11/12 graphics code for desktop applications and games
          </td>
        </tr>
        <tr>
          <td>
            <h4>HTML, CSS/SCSS, JavaScript</h4>
          </td>
          <td>
            I've made cool webapp experiences, ranging from websites to games using WebGL
          </td>
        </tr>
        <tr>
          <td>
            <h4>Node - JavaScript, TypeScript</h4>
          </td>
          <td>
            I have experience writing node-based backend applications using both JavaScript and TypeScript
          </td>
        </tr>
      </table>
    </BaseCard>
  </BaseArea>
</template>

<style lang="scss" scoped>
@import "~assets/variables.scss";

table {
  border-collapse: collapse;
  width: 100%;

  tr:nth-child(even) {
    background-color: $dark-700;
  }

  tr:nth-child(odd) {
    background-color: $dark-800;
  }

  td:first-of-type {
    width: 200px;
  }

  td, th {
    padding: 10px;
  }
}
</style>
