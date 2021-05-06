<template>
  <BaseArea title="About Me">
    <div class="flex flex-wrap md:flex-nowrap">
      <BaseCard title="Things I Like" class="md:mr-5 md:w-1/2">
        <ul>
          <li>
            <b>Reverse Engineering</b>
            <p>Experienced in de-constructing and re-implementing various file formats for 
            abandonware titles</p>
          </li>
          <li>
            <b>Computer Graphics</b>
            <p>Skills writing OpenGL and Vulkan graphics code for desktop applications and games</p>
          </li>
          <li>
            <b>Game Development</b>
            <p>Skills creating fun video game experiences tailored to video game enthusiasts</p>
          </li>
          <li>
            <b>Web Development</b>
            <p>Experienced in creating small- and large-scale websites, for both organisations and individuals</p>
          </li>
        </ul>
      </BaseCard>
      <BaseCard title="My Programming Experience" class="md:ml-5 w-full md:w-1/2 leading-relaxed">
        <ul>
          <li>
            <b>C#</b> 
            <p>Experienced in writing C# code for use within Unity and as desktop applications</p>
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

<style lang="postcss" scoped>
@tailwind base;
@tailwind utilities;
@tailwind components;

@layer base {
  ul {
    & li {
      @apply mt-4;
    }
  }
}
</style>