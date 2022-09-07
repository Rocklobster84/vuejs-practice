const app = Vue.createApp({
 data() {
  return {
   inputText: '',
   liveName: '',
  }
 },
 methods: {
  showAlert() {
   alert('Here is my alert')
  },
  userIn(event) {
   this.inputText = event.target.value;
  },
  liveInput() {
   this.liveName = this.inputText;
  },
 }
});

app.mount('#assignment')