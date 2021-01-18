<template>
  <div class="hosting content">
    <div class="blank"></div>
    <div class="content-container">
      <div class="main-content">
        <div class="showcase">
          <h3 class="body">So, you're looking for a cheap and simple solution for custom image and file hosting?</h3>
          <div class="description">
            <p>Always wanted to have a custom file or image domain but found it too complicated? No worries!</p>
            <div class="features">
              <p>You've found the place! At only <b>£1.99</b> per month you could get the following:</p>

              <div class="list">
                <p class="item">4GB Storage</p>
                <p class="item">Worldwide Online Panel</p>
                <p class="item">Great Support</p>
              </div>
            </div>
          </div>

          <div class="interest-form" v-if="!successMessage">
            <div :class="{ 'input-group': true }">
              <label for="name">Name</label>
              <input name="name" id="name" type="text" v-model="name" autocomplete="first_name" required placeholder="John">
            </div>

            <div :class="{ 'input-group': true }">
              <label for="email">Email</label>
              <input name="email" id="email" type="email" autocomplete="email" v-model="email" required placeholder="example@mail.com">
            </div>

            <div class="input-group inline">
              <label for="extra_storage">Would you be interested in 8GB Storage?</label>
              <input name="extra_storage" id="extra_storage" v-model="extra_storage" type="checkbox">
            </div>

            <button class="submit" type="submit" @click="submitForm()">Register Interest</button>
          </div>

          <div class="sent interest-form" v-if="successMessage">
            <p>Submitted, thanks for your interest, we'll be in touch!</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="mail">
        <span class="email">fraser@ninjalabs.dev</span>
      </div>

      <div class="socials">
        <a href="https://github.com/NinjaLabs-Dev" target="_blank"><span class="github"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></span></a>
        <a href="https://twitter.com/NinjaLabs_" target="_blank"><span class="twitter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg></span></a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Hosting',
  data() {
    return {
      name: null,
      email: null,
      extra_storage: null,
      successMessage: false
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();

      axios.post('https://panel.ninjalabs.dev/api/interest', {
        name: this.name,
        email: this.email,
        extra_storage: this.extra_storage
      }).then((res) => {
        this.successMessage = res.data.message;
      }).catch((e) => {
        this.successMessage = e.message;
      });
    }
  }
}
</script>
