<template>
  <div class="overflow-hidden">
    <article class="flex justify-center items-center h-screen m-auto">
      <div class="w-full h-1/2 mr-4 md:w-3/12 md:min-w-350">
        <div
          style="background: url('https://source.unsplash.com/random/?landscape')"
          class="w-full h-full bg-cover bg-center shadow-md bg-default-700 border-default-600 border-solid border 
            rounded-lg p-5 overflow-hidden"
        ></div>
      </div>
      <div class="w-full p-4 flex md:w-4/12 md:min-w-350">
        <div>
          <h1 class="text-3xl mb-12">Alex Guthrie</h1>
          <p>Hey! I'm Alex.</p>
          <p>I'm a 19 year old Computer Science student and software engineer interested in reverse engineering, 
            computer graphics, and machine learning.</p>
          <p>I love programming, playing video games, tennis, piña coladas, and getting caught in the rain.</p>
          <social-links></social-links>
        </div>
      </div>
    </article>
    <p class="absolute left-0 right-0 bottom-0 text-center ">Scroll for More <fa class="animate-push-down" :icon="faArrowDown"></fa></p>
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