<template>
  <BaseArea title="Blog Posts">
    <div class="container">
      <div class="post" v-for="(item,index) in items.items.slice(0, 6)" v-bind:key="item.title"
        :class="index % 2 == 0 ? 'left' : 'right'">
        <a :href="item.link" target="_blank">
          <div class="inner">
              <h3>{{ item.title }}</h3>
              <h4>{{ item.pubDate | date }}</h4>
              <div class="background"
                :style="`background-image: url(${item.enclosure ? item.enclosure.url : 'https://source.unsplash.com/random/?landscape'})`"
              >
            </div>
            {{ item.content }}
          </div>
        </a>
      </div>
    </div>

    <div class="view-more-container">
      <a target="_blank" class="view-more" href="https://blog.gu3.me/">View more...</a>
    </div>
  </BaseArea>
</template>

<script>
export default {
  props: {
    items: Object
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/variables.scss";
@import "@/assets/scrimMask.scss";

.view-more-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.view-more {
  text-transform: uppercase;
  font-weight: bold;
  color: $dark-300;
}

.container {
  display: flex;
  justify-content: space-between;
  margin: 40px auto;
  margin-bottom: 20px;

  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}

.post {
  width: 100%;
  margin: 12px 0;
  
  @media screen and (min-width: $screen-md) {
    width: 50%;
    margin: 8px 0;
  }

  &.left {
    @media screen and (min-width: $screen-md) {
      padding-right: 8px;
    }
  }

  &.right {
    @media screen and (min-width: $screen-md) {
      padding-left: 8px;
    }
  }

  .inner {
    box-shadow: 0 0 20px rgba( black, 0.2 );
    width: 100%;
    z-index: -10;
    background: $dark-800;
    border-radius: 10px;
    padding: 24px;
    color: white;

    transition: all 150ms ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid rgba( $dark-600, 0.2 );

    height: 130px;
  }

  h3 {
    margin: 0;
    text-transform: uppercase;  
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-height: 25px;
  }

  h4 {
    margin: 4px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-height: 25px;
  }

  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    margin: 0;
    width: 25%;
    background-size: cover;
    background-position: center;
    transition: all 150ms ease;

    opacity: 0.4;

    transform: scale( 1.0 );

    @include scrimMask( black, "to left" );
    min-width: 200px;
  }
  
  &:hover { 
    .inner {
      border: 1px solid $orange-500;
      box-shadow: 0 0 20px rgba( $orange-500, 0.2 );
    }

    .background {
      opacity: 0.75;
      transform: scale( 1.1 );
    }
  }
}

</style>