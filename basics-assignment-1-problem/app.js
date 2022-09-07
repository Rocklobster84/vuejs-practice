const app = Vue.createApp({
 data() {
  return {
    myName: 'Steph',
    myAge: 38,
    miscImg: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_1280.jpg',
  }
 },
 methods: {
  calcAge() {
   return this.myAge + 5;
  },
  calcRando() {
   return Math.random;
  }
 }
});

app.mount('#assignment');