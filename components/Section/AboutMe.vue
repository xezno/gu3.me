<template>
  <BaseArea title="My Skills">
    <BaseCard>
      <table>
        <tr>
          <td>
            C#
          </td>
          <td>
            I've written tons of C# code for use within games (s&amp;box, Unity) and desktop applications
          </td>
        </tr>
        <tr>
          <td>
            Node (JavaScript / TypeScript)
          </td>
          <td>
            I have experience writing node-based backend applications using both JavaScript and TypeScript
          </td>
        </tr>
        <tr>
          <td>
            HTML, CSS/SCSS, JavaScript
          </td>
          <td>
            I've made cool webapp experiences, ranging from websites to games using WebGL
          </td>
        </tr>
        <tr>
          <td>
            Rust
          </td>
          <td>
            I've written high-performance native desktop code using Rust
          </td>
        </tr>
        <tr>
          <td>
            OpenGL
          </td>
          <td>
            I've written writing OpenGL graphics code for desktop applications and games
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

  td, th {
    padding: 10px;
  }
}
</style>