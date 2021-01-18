<template>
  <div class="about content">
    <div class="content-container">
      <div class="main-content">
        <div class="showcase">
          <span class="header">Fraser Donaldson</span>
          <h3 class="body">
            I'm a 17 year old software developer from Cumbria, UK. I started web development when I was 11 and never slowed down.
            <br>
            <br>
            I specialize in the Laravel & Vue ecosystem with NodeJS
          </h3>
        </div>

        <div class="image-container">
          <img src="~@/assets/me.webp" alt="Me" draggable="false" preload>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="label">
        <span class="page">About Me</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      header: '{{ About Me }}',
    }
  }
}
</script>
