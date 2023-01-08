<template>
  <main>
    <div class="main-container">
      <BaseArea title="My Projects">
        <p>Here are some notable projects I've worked on.</p>
        <div class="container">
          <template v-for="project in projects">
            <Project v-bind="project" class="small"></Project>
          </template>
        </div>
      </BaseArea>
    </div>
  </main>
</template>

<script>
import { projects } from '~/projects';

console.dir( projects );

export default {
  data() {
    return {
      projects
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/variables.scss";

.container {
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;

  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}

p {
  text-align: center;
}
</style>
