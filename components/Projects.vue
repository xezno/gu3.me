<template>
  <BaseArea title="My Projects">
    <div class="container">
      <Project title="Alex's Instagib" role="Everything" link="https://github.com/xezno/sbox-instagib">Veniam aliqua
        minim Lorem qui irure ipsum quis commodo nostrud laborum.</Project>
      <Project title="FortWars" role="Project Lead" link="https://github.com/apetavern/sbox-fortwars">Deserunt Lorem do
        voluptate magna quis in.</Project>
      <Project title="Frost Fight" role="Programmer" link="https://github.com/apetavern/sbox-frostfight">Aliqua amet
        velit minim consequat ullamco do adipisicing.</Project>
      <Project title="Moyai Engine" role="Everything" link="https://github.com/xezno/moyai-engine">Pariatur in duis est
        irure est reprehenderit officia exercitation fugiat officia ipsum adipisicing quis.</Project>
    </div>
  </BaseArea>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-between;
    margin: 40px auto;
    margin-bottom: 20px;

    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
  }

</style>
