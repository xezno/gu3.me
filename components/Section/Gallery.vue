<template>
  <BaseArea title="My Stuff">
    <div class="container">
    
      <BaseCard class="video-container">
        <div class="video-container">
          <video class="video" autoplay loop muted playsinline>
            <source src="videos/test.mp4" type="video/mp4">
          </video>
        </div>
        <div class="video-info">
          <p>Description blah blah blah.</p>
        </div>
      </BaseCard>
    
      <BaseCard class="video-container">
        <div class="video-container">
          <video class="video" autoplay loop muted playsinline>
            <source src="videos/test.mp4" type="video/mp4">
          </video>
        </div>
        <div class="video-info">
          <p>Description blah blah blah.</p>
        </div>
      </BaseCard>
    
      <BaseCard class="video-container">
        <div class="video-container">
          <video class="video" autoplay loop muted playsinline>
            <source src="videos/test.mp4" type="video/mp4">
          </video>
        </div>
        <div class="video-info">
          <p>Description blah blah blah.</p>
        </div>
      </BaseCard>
    
      <BaseCard class="video-container">
        <div class="video-container">
          <video class="video" autoplay loop muted playsinline>
            <source src="videos/test.mp4" type="video/mp4">
          </video>
        </div>
        <div class="video-info">
          <p>Description blah blah blah.</p>
        </div>
      </BaseCard>
    
      <BaseCard class="video-container">
        <div class="video-container">
          <video class="video" autoplay loop muted playsinline>
            <source src="videos/test.mp4" type="video/mp4">
          </video>
        </div>
        <div class="video-info">
          <p>Description blah blah blah.</p>
        </div>
      </BaseCard>

    </div>
  </BaseArea>
</template>

<style lang="scss" scoped>
@import "~assets/variables.scss";

.video-container {
  position: relative;
  min-height: 300px;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;

    transform: translate( -50%, -50% );
    transition: all 150ms ease;
  }

  .video-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 30px;
    opacity: 0;
    transition: all 150ms ease;

    background: linear-gradient( to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100% );
  }

  &.card {
    flex: 1 1 25%;

    margin: 5px;
    transition: all 150ms ease;
  }

  &.card:hover { 
    border: 1px solid $accent-500;
    box-shadow: 0 0 20px rgba( $accent-500, 0.75 );
    flex-basis: 40%;

    video {
      width: 230%;
    }

    .video-info {
      opacity: 1;
    }
  }

  *:not(video) {
    position: relative;
    z-index: 1;
  }
}

.container {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
}
</style>