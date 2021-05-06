<template>
  <div class="w-full">
    <h1>Blog Posts</h1>
    <div class="flex flex-wrap justify-evenly">
      <BaseCard
        title="Lorem Ipsum Dolor Sit Amet" 
        class="mr-5 w-card1/3"
        image="https://source.unsplash.com/random/?landscape" 
        link="https://blog.gu3.me/"
        date="13th Smarch 2021"
        :tags="['test', 'blog', 'entry']">
        Occaecat magna ex irure non laborum commodo ullamco mollit reprehenderit excepteur officia.
        Aliqua Lorem dolore eu quis velit ipsum aliquip est ea deserunt.
      </BaseCard>
      <BaseCard
        title="Lorem Ipsum Dolor Sit Amet" 
        class="mx-5 w-card1/3"
        image="https://source.unsplash.com/random/?landscape" 
        link="https://blog.gu3.me/"
        date="13th Smarch 2021"
        :tags="['test', 'blog', 'entry']">
        Occaecat magna ex irure non laborum commodo ullamco mollit reprehenderit excepteur officia.
        Aliqua Lorem dolore eu quis velit ipsum aliquip est ea deserunt.
      </BaseCard>
      <BaseCard 
        title="Lorem Ipsum Dolor Sit Amet" 
        class="ml-5 w-card1/3"
        image="https://source.unsplash.com/random/?landscape" 
        link="https://blog.gu3.me/"
        date="13th Smarch 2021"
        :tags="['test', 'blog', 'entry']">
        Occaecat magna ex irure non laborum commodo ullamco mollit reprehenderit excepteur officia.
        Aliqua Lorem dolore eu quis velit ipsum aliquip est ea deserunt.
      </BaseCard>
    </div>

    <!-- TODO: Eventually replace the blog entirely by combining this site with it, effectively making this website a front
    page to the blog, and making this a link to some sort of directory listing - i.e. https://gu3.me/articles -->
    <div class="w-full flex justify-center">
      <a class="uppercase font-bold text-default-300 p-1" href="https://blog.gu3.me/">View more...</a>
    </div>
  </div>
</template>