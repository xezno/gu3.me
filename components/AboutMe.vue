<template>
  <BaseArea title="About Me">
    <div class="container">
      <BaseCard title="Things I Like" class="left">
        <ul>
          <li>
            <h4>Game Development</h4>
            <p>Skills creating fun video game experiences tailored to video game enthusiasts</p>
          </li>
          <li>
            <h4>Virtual Reality</h4>
            <p>Experienced in writing gameplay systems for virtual reality games from the ground up</p>
          </li>
          <li>
            <h4>Computer Graphics</h4>
            <p>Skills writing OpenGL and Vulkan graphics code for desktop applications and games</p>
          </li>
          <li>
            <h4>Web Development</h4>
            <p>Experienced in creating small- and large-scale websites, for both organisations and individuals</p>
          </li>
        </ul>
      </BaseCard>
      <BaseCard title="My Programming Experience" class="right">
        <ul>
          <li>
            <h4>C#</h4> 
            <p>Experienced in writing C# code for use within game engines (s&amp;box, Unity) and as desktop applications</p>
          </li>
          <li>
            <h4>JavaScript</h4> 
            <p>Skills creating interactive webapps and providing functionality to otherwise static pages</p>
          </li>
          <li>
            <h4>CSS/SCSS</h4> 
            <p>Skills creating uniquely stylized webapps for mobile and desktop platforms</p>
          </li>
          <li>
            <h4>C++</h4> 
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