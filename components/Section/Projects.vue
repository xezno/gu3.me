<template>
  <BaseArea title="My Projects">
    <div class="container">

      <Project title="Alex's Instagib" role="Everything" link="https://github.com/xezno/sbox-instagib"
        image="/projects/Instagib.png">
        <p>An homage to classic arena shooters.</p>
      </Project>

      <Project title="FortWars" role="Project Lead" link="https://github.com/apetavern/sbox-fortwars"
        image="/projects/Fortwars.png">
        <p>A spiritual successor to the classic 'SourceForts' Source mod.</p>
      </Project>

      <Project title="Frost Fight" role="Programmer" link="https://github.com/apetavern/sbox-frostfight"
        image="/projects/Frost Fight.png">
        <p>A game made in under a week for the Jambox Winter Jam 2021.</p>
      </Project>

      <Project title="Mocha Engine" role="Everything" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        image="/projects/Mocha.png" comingSoon>
        <p>A toy game engine written in C++ with C# interop.</p>
      </Project>

    </div>
  </BaseArea>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 40px;
    margin-bottom: 20px;

    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;

    gap: 10px;
  }

</style>
