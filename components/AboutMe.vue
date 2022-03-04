<template>
  <BaseArea title="About Me">
    <div class="container">
      <BaseCard title="Things I Like" class="left">
        <ul>
          <li>
            <b>Game Development</b>
            <p>Skills creating fun video game experiences tailored to video game enthusiasts</p>
          </li>
          <li>
            <b>Virtual Reality</b>
            <p>Experienced in writing gameplay systems for virtual reality games from the ground up</p>
          </li>
          <li>
            <b>Computer Graphics</b>
            <p>Skills writing OpenGL and Vulkan graphics code for desktop applications and games</p>
          </li>
          <li>
            <b>Web Development</b>
            <p>Experienced in creating small- and large-scale websites, for both organisations and individuals</p>
          </li>
        </ul>
      </BaseCard>
      <BaseCard title="My Programming Experience" class="right">
        <ul>
          <li>
            <b>C#</b> 
            <p>Experienced in writing C# code for use within game engines (s&amp;box, Unity) and as desktop applications</p>
          </li>
          <li>
            <b>JavaScript</b> 
            <p>Skills creating interactive webapps and providing functionality to otherwise static pages</p>
          </li>
          <li>
            <b>CSS/SCSS</b> 
            <p>Skills creating uniquely stylized webapps for mobile and desktop platforms</p>
          </li>
          <li>
            <b>C++</b> 
            <p>Experienced in writing high-performance native desktop code</p>
          </li>
        </ul>
      </BaseCard>
    </div>
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