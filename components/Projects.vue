<template>
  <BaseArea title="My Projects">
    <div class="container">
      <Project title="Alex's Instagib" role="Everything" link="https://github.com/xezno/sbox-instagib"
        image="https://cdn.discordapp.com/attachments/839155256964284459/949648693273956422/Instagib_Thumbnail.png">
        An homage to classic arena shooters.
      </Project>
      <Project title="FortWars" role="Project Lead" link="https://github.com/apetavern/sbox-fortwars"
        image="https://cdn.discordapp.com/attachments/839155256964284459/949648760366055474/Fortwars_Thumb.png">
        A spiritual successor to the classic 'SourceForts' Source Engine mod.
      </Project>
      <Project title="Frost Fight" role="Programmer" link="https://github.com/apetavern/sbox-frostfight"
        image="https://cdn.discordapp.com/attachments/839155256964284459/949649131373211688/thumb.png">
        A game made in under a week for the Jambox Winter Jam 2021.
      </Project>
      <Project title="Moyai Engine" role="Everything" link="https://github.com/xezno/moyai-engine"
        image="https://cdn.discordapp.com/attachments/839155256964284459/949648926888329217/unknown.png">
        A toy game engine made in C#.
      </Project>
    </div>
  </BaseArea>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 20px;

    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;

    gap: 10px;
  }

</style>
