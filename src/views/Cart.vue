<template>
  <div>
    <br>
    <router-link tag="a" to="/">HOME</router-link>

    <br>
    <br>
    <div>{{ $t('message.cart.product') }}</div>

    <br>
    <div v-if="databaseData.price" style="display:flex;">
      <div>{{ $t('message.cart.price') }}:</div>
      <div>{{ databaseData.price[lang] }}</div>
    </div>
    
    <br>
    <div v-if="databaseData.campaign" style="display:flex;">
      <div>{{ $t('message.cart.campaign') }}:</div>
      <div>{{ databaseData.campaign[lang] }}</div>
    </div>
  </div>
</template>

<script>
const MOCK_SERVER_RESPONSE_JSON = {
  "price": {
    "zh": "100元",
    "en": "15 dallers",
    "ja": "1600円"
  },
  "campaign": {
    "zh": "买一送一！",
    "en": "Buy one get one!",
    "ja": "1つ購入すると1つおまけ！"
  }
};

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
  data() {
    return {
      databaseData: {},
    };
  },
  async mounted() {
    this.databaseData = await this.fetchDatabaseData();
  },
  methods: {
    fetchDatabaseData() {
      return MOCK_SERVER_RESPONSE_JSON;
    }
  },
}
</script>

<style></style>
