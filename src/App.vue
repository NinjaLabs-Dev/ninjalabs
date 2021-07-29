<template>
  <div id="app" class="container">
    <div class="noise-wrapper">
      <div class="noise"></div>
    </div>

    <div class="nav">
      <svg id="navButton" @click="isNavActive = true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48px" height="48px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>
    </div>

    <fade-transition>
      <div class="nav-overlay" v-if="isNavActive">
        <svg class="nav-close" @click="isNavActive = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48px" height="48px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
        <ul class="items">
          <router-link @click.native="isNavActive = false" to="/" tag="li" class="nav-item">Home</router-link>
          <router-link @click.native="isNavActive = false" to="about" tag="li" class="nav-item">About Me</router-link>
          <router-link @click.native="isNavActive = false" to="projects" tag="li" class="nav-item">Projects</router-link>
          <router-link @click.native="isNavActive = false" to="contact" tag="li" class="nav-item">Contact Me</router-link>
        </ul>
        <div class="copyright">
          <span>&copy; Fraser (NinjaLabs) 2019-{{new Date().getFullYear()}}</span>
        </div>
      </div>
    </fade-transition>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('~@/assets/css/app.css');
</style>

<script>
import { FadeTransition } from 'vue2-transitions'

export default {
  name: 'App',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | NinjaLabs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Creating simple, modern and intricate web designs and applications to power the world of real-time data.' },
      { name: 'og:image', content: 'https://i.imgur.com/oobGtbO.png' },
      { name: 'og:description', content: 'Creating simple, modern and intricate web designs and applications to power the world of real-time data.' },
      { name: 'og:title', content: 'NinjaLabs - Creating the Future' },
      { name: 'theme-color', content: '#FFFFFF' },
	  { name: 'wot-verification', content: 'e5b6993ec34ec8d414b5' }
    ]
  },
  data() {
    return {
      isNavActive: false
    }
  },
  components: {
    FadeTransition
  },
}
</script>