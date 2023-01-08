<template>
  <BaseArea title="My Skills">
    <ul>
      <li>Unity</li>
      <li>Unreal</li>
      <li>C#</li>
      <li>C++</li>
      <li>SCSS</li>
      <li>TypeScript</li>
      <li>JavaScript</li>
      <li>Docker</li>
      <li>Visual Studio</li>
      <li>Visual Studio Code</li>
      <li>PostgreSQL</li>
      <li>Vue</li>
    </ul>

    <BaseCard>
      <table>
        <tr>
          <td>
            <h4>2D and 3D game development</h4>
            Experienced in writing C# code for use in game engines (such as s&box and Unity) and as desktop applications
          </td>
        </tr>
        <tr>
          <td>
            <h4>Desktop application development using C++ and C#</h4>
            Experienced in writing efficient native code for desktop applications
          </td>
        </tr>
        <tr>
          <td>
            <h4>Responsive web design using HTML, CSS, and JavaScript</h4>
            Skilled in creating uniquely styled web apps for mobile and desktop platforms
          </td>
        </tr>
        <tr>
          <td>
            <h4>Server-side development using Node.js</h4>
            Skilled in creating backends for web applications
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

  td,
  th {
    padding: 10px;
  }
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    margin: 5px;
    padding: 10px 20px;
    background-color: $dark-800;
    border-radius: 5px;
    border: 1px solid rgba($dark-600, 0.2);
    text-align: center;
  }
}
</style>
