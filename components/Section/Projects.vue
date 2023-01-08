<template>
  <main>
    <BaseArea title="My Projects">
      <div class="container">
        <template v-for="(project, index) in projects" v-if="index < 3">
          <Project v-bind="project"></Project>
        </template>
        
        <nuxt-link to="/projects">
          <BaseCard>
            See More...
          </BaseCard>
        </nuxt-link>
      </div>
    </BaseArea>
  </main>
</template>

<script>
import { projects } from '~/projects';

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
  justify-content: space-between;
  align-items: stretch;
  margin-top: 40px;
  margin-bottom: 20px;

  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;

  gap: 10px;
}

a {
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  width: 100%;

  .card {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
