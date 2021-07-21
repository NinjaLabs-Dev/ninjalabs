<template>
  <div class="about projects content">
    <div class="content-container">

      <fade-transition>
        <div class="lightbox-container" v-if="lightboxOpen">
          <h4 class="title">{{ lightboxHeader }}</h4>
          <div class="lightboxImage">
            <img class="overlay" src="~@/assets/overlay.png" alt="Logo Overlay" draggable="false">
            <img :src="lightboxImage" class="lightboxImage" alt="Image Lightbox" draggable="false" preload>
          </div>
          <svg class="nav-close" @click="closeLightBox()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48px" height="48px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
        </div>
      </fade-transition>

        <div class="main-content">
          <slide-x-left-transition>
            <div class="showcase">
              <div class="header" :style="{'font-size': projects[selected].titleSize ? projects[selected].titleSize : '3em'}">
                {{ projects[selected].title }}
                <div class="featured-tag" v-show="projects[selected].featured" v-tooltip.top-center="projects[selected].featured">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48px" height="48px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 17.27l5.17 3.12c.38.23.85-.11.75-.54l-1.37-5.88 4.56-3.95c.33-.29.16-.84-.29-.88l-6.01-.51-2.35-5.54c-.17-.41-.75-.41-.92 0L9.19 8.63l-6.01.51c-.44.04-.62.59-.28.88l4.56 3.95-1.37 5.88c-.1.43.37.77.75.54L12 17.27z"/></svg>
                </div>
                <div class="wip-tag" v-show="projects[selected].wip" v-tooltip.top-center="projects[selected].wip">WIP</div>
                <a class="github-tag" :href="projects[selected].github" target="_blank" v-show="projects[selected].github" v-tooltip.top-center="githubTag">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
              <h3 class="body">
                {{ projects[selected].description }}
              </h3>
            </div>
          </slide-x-left-transition>

          <slide-x-left-transition>
            <div class="image-showcase">
              <div class="inner-container" v-for="(prod, id) in projects[selected].images" :key="id">
                <div class="item" @click="openLightBox(prod.src, prod.header)">
                  <img :src="prod.src" alt="Me" draggable="false">
                </div>
              </div>
            </div>
          </slide-x-left-transition>
      </div>
    </div>

    <div class="footer">
      <div class="label">
        <span class="page">Projects</span>
      </div>
      <div class="switcher">
        <div class="project-selector">
          <div class="back" @click="lastProject()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48px" height="48px"><path d="M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></div>
          <div class="selected">
            {{ projects[selected].title }}
          </div>
          <div class="forward" @click="nextProject()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48px" height="48px"><path d="M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></div>
        </div>
      </div>
      <div class="blank"></div>
    </div>
  </div>
</template>

<script>
import { FadeTransition, SlideXLeftTransition } from 'vue2-transitions'

export default {
  name: 'About',
  data() {
    return {
      header: '{{ About Me }}',
      selected: 0,
      lightboxOpen: false,
      githubTag: 'View on GitHub',
      lightboxImage: null,
      lightboxHeader: null,
      projects: [
        {
          title: 'TruckersFM Radiocloud',
	      titleSize: '2.5em',
          description: 'A modern and new panel for presenters at TruckersFM. Made with in collaboration with Joshua Blackman.',
          featured: 'This is Featured',
          images: [
            { src: 'https://cdn.ninjalabs.dev/60ova', header: 'Home Page'},
            { src: 'https://cdn.ninjalabs.dev/Q9Ukx', header: 'Show Overview Page'},
            { src: 'https://cdn.ninjalabs.dev/3CFtB', header: 'Clip Submission System'},
            { src: 'https://cdn.ninjalabs.dev/N207O', header: 'Recent Song System'}
          ],
        },
        {
          title: 'LLS MDTv1',
          description: 'A simple MDT system for a Fivem Server, using Laravel and Node.Js this was my first MDT which is still in use.',
	      featured: 'This is Featured',
	      archived: true,
          images: [
            { src: 'https://i.imgur.com/6HNEPar.png', header: 'Home Page'},
            { src: 'https://i.imgur.com/vLZqatm.png', header: 'User Profile (Dark)'},
            { src: 'https://i.imgur.com/zz2vFY0.png', header: 'User Profile (Light)'},
            { src: 'https://i.imgur.com/PfQ1Mkg.png', header: 'User Management'}
          ],
        },
        {
          title: 'Make Me FAQ',
          description: 'A quick and minimalist design making answering questions a quick and easy process. Using VueJS to create a reactive website.',
          images: [
            { src: 'https://cdn.ninjalabs.dev/wMqlg', header: 'Main Page'},
            { src: 'https://cdn.ninjalabs.dev/vlm6r', header: 'Searching Feature'},
            { src: 'https://cdn.ninjalabs.dev/sLcDw', header: 'Search Result Checking'},
            { src: 'https://cdn.ninjalabs.dev/RfHBG', header: 'Dropdown Answers'}
          ],
        },
        {
          title: 'Myriad Playing',
          description: 'A custom built script to take billboard information XML from Myriad and convert to a simple TXT that an encoding software can read.',
          github: 'https://github.com/NinjaLabs-Dev/myriad-5-now-playing',
          images: [
            { src: 'https://i.imgur.com/NZ2SUjm.png', header: 'Output File'},
            { src: 'https://i.imgur.com/uVR8ci6.png', header: 'Script Running'},
            { src: 'https://i.imgur.com/exEsqDa.png', header: 'Script Code'},
            { src: 'https://i.imgur.com/IbPFrup.png', header: 'Source File'}
          ],
        }
      ]
    }
  },
  mounted() {
    this.selected = Math.floor(Math.random() * this.projects.length)
  },
  methods: {
    openLightBox: function(img, header) {
      this.lightboxImage = img;
      this.lightboxHeader = header;
      this.lightboxOpen = true;
    },
    closeLightBox: function() {
      this.lightboxOpen = false;
      this.lightboxHeader = null;
      this.lightboxImage = null;
    },
    nextProject: function() {
      var next = this.selected + 1;
      if(next > this.projects.length - 1) {
        return this.selected = 0;
      }

      this.selected = next;
    },
    lastProject: function() {
      var next = this.selected - 1;
      console.log(next)
      console.log(next < 0)
      if(next < 0) {
        return this.selected = this.projects.length - 1;
      }

         console.log(next)
      this.selected = next;
    }
  },
  components: {
    FadeTransition,
    SlideXLeftTransition
  }
}
</script>
