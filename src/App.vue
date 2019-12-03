<template>
  <div id="app">
    <div>LANG: {{lang}}</div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState([
      'lang',
    ]),
  },
  watch: {
    '$route' (to) {  // path updated
      const lang = to.params.lang;
      if (!lang) return;

      this.setLang(lang); // vuex
      this.$i18n.locale = lang; // i18n message
    },
  },
  mounted() {
    const lang = this.getBrowserLang();
    this.setLang(lang); // vuex
  },
  methods: {
    ...mapActions([
      'setLang',
    ]),
    getBrowserLang() {
      return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2);
    },
  }
}
</script>

<style></style>
