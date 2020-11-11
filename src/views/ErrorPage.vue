<template>
  <div class="home content error">
    <div class="blank"></div>
    <div class="content-container">
      <div class="main-content">
        <div class="showcase">

          <span class="header">console.error("Oh no!")</span>
          <h3 class="body">Well this is Awkward!<br>We couldn't find that one!</h3>
          <router-link to="/" tag="button" class="contact">
            Go Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Error',
}
</script>
