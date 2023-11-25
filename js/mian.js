'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      img: 'img/Logo.png',
    };
  },
}).mount('#app');
