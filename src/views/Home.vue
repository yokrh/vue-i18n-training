<template>
  <div class="home">
    <br>
    <img alt="Vue logo" src="../assets/logo.png">

    <br>
    <ul>
      <router-link tag="li" :to="`/${lang}/cart`"><a>CART</a></router-link>
      <router-link tag="li" to="/zh/cart"><a>zh CART</a></router-link>
      <router-link tag="li" to="/en/cart"><a>en CART</a></router-link>
      <router-link tag="li" to="/ja/cart"><a>ja CART</a></router-link>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState([
      'lang',
    ]),
    // lang() {
    //   return this.$route.params.lang;
    // },
  },
}
</script>
