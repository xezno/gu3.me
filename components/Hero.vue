<template>
  <div class="overflow-hidden plus-bg">
    <div class="flex justify-center items-center h-screen m-auto">
      <article class="bg-default-800 border border-solid border-default-700 absolute z-0 
        inset-48 md:inset-x-1/4 rounded-lg flex items-center overflow-hidden shadow-xl animate-in">

        <section class="w-1/2 h-full mr-1">
          <div style="background: url('https://source.unsplash.com/random/?landscape')"
            class="w-full h-full bg-cover bg-center shadow-md overflow-hidden"
          ></div>
        </section>
        
        <section class="p-4 flex w-1/2 min-w-350 z-10 h-auto ml-1">
          <div class="w-auto">
            <h1 class="text-3xl mb-12">Alex Guthrie</h1>
            <p>Hey! I'm Alex.</p>
            <p>I'm a 19 year old Computer Science student and software engineer from the United Kingdom interested in reverse 
              engineering, computer graphics, and game development.</p>
            <p>I love programming, playing video games, tennis, piña coladas, and getting caught in the rain.</p>
            <social-links></social-links>
          </div>
        </section>
      </article>
    </div>

    <div class="absolute left-0 right-0 bottom-0 flex justify-center">
      <p class="uppercase font-bold p-2 bg-default-800 rounded-lg border border-solid border-default-700
        text-sm animate-in">
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

<style type="css">
.plus-bg {
  background-color: #00000000;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23364149' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>