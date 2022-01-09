<template>
  <div class="overflow-hidden plus-bg">
    <div class="flex justify-center items-center h-screen m-auto md:px-4 container">
      <article class="bg-dark-800 border-opacity-20 md:border md:border-solid border-dark-600 md:my-16
        min-h-hero md:rounded-lg flex items-center overflow-hidden shadow-lg relative">
        <section class="invisible md:visible w-0 md:w-1/2 min-h-hero relative h-full mr-1">
          <div style="background: url('https://cdn.discordapp.com/attachments/839155256964284459/839820840659845120/70016038_473227283268995_7568323747035041244_n.png') center/cover"
            class="absolute w-full h-full overflow-hidden hero-image"
          ></div>
        </section>
        
        <section class="p-4 flex w-full md:w-1/2 min-w-350 z-10 h-auto mx-1">
          <div class="w-auto">
            <h1 class="text-3xl">Alex Guthrie</h1>
            <div class="w-48 h-1 bg-orange-500 mb-12"></div>

            <p>Hey! I'm Alex.</p>
            <p>I'm a 20 year old Computer Science student and software engineer from the United Kingdom interested in reverse 
              engineering, computer graphics, and game development.</p>
            <p>I'm currently working on projects involving s&amp;box, a game engine/framework designed around Source 2.</p>

            <hr class="mx-0" />

            <social-links></social-links>
          </div>
        </section>
      </article>
    </div>

    <div class="absolute left-0 right-0 bottom-8 md:bottom-0 flex justify-center">
      <p class="uppercase font-bold p-2 bg-dark-800 rounded-lg border border-solid border-dark-700
        text-sm">
        Scroll for More <fa class="animate-push-down ml-2" :icon="faArrowDown"></fa>
      </p>
    </div>
  </div>
</template>

<script>
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export default {
  data: function() {
    return {
      faArrowDown
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scrimMask.scss";

.plus-bg {
  @media (min-width:768px) {
    background-color: #00000000;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333333' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
}

.hero-image {
  @include scrimMask( black, "to right", 25, 100 );

  mask-repeat: no-repeat;
  mask-position: left;
}
</style>