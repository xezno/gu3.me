<template>
  <div>
    <Nuxt />

    <footer class="text-center md:text-left font-bold flex md:content-evenly p-5 uppercase bg-default-800">
      <div class="w-full md:w-96 m-auto">
        &copy; Alex Guthrie 2021
      </div>
      <div class="w-0 invisible md:visible md:w-96 m-auto text-right">
        <SocialLinks class="justify-end"></SocialLinks>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">

  h1, h2, h3 {
    font-family: "Poppins", sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: #0047A3;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #003375;
  }

  ::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #0047A3;
  }
</style>