<template>
  <BaseArea title="My Projects">
    <div class="container">

      <Project title="Alex's Instagib" role="Everything" link="https://github.com/xezno/sbox-instagib"
        image="https://cdn.discordapp.com/attachments/839155256964284459/949648693273956422/Instagib_Thumbnail.png">
        <p>An homage to classic arena shooters.</p>
      </Project>

      <Project title="FortWars" role="Project Lead" link="https://github.com/apetavern/sbox-fortwars"
        image="https://cdn.discordapp.com/attachments/839155256964284459/949648760366055474/Fortwars_Thumb.png">
        <p>A spiritual successor to the classic 'SourceForts' Source Engine mod.</p>
      </Project>

      <Project title="Frost Fight" role="Programmer" link="https://github.com/apetavern/sbox-frostfight"
        image="https://cdn.discordapp.com/attachments/839155256964284459/949649131373211688/thumb.png">
        <p>A game made in under a week for the Jambox Winter Jam 2021.</p>
      </Project>

      <Project title="Moyai Engine" role="Everything" link="https://github.com/xezno/moyai-engine"
        image="https://cdn.discordapp.com/attachments/839155256964284459/949648926888329217/unknown.png">
        <p>A toy game engine made in C#.</p>
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
