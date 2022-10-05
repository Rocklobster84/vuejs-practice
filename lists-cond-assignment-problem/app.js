const app = Vue.createApp ({
  data() {
   return {
    enteredTaskValue: '',
    tasks: [],
    tasksVisible: true
   }
  },
 computed: {
   buttonCaption() {
    return this.tasksVisible ? 'Hide List' : 'Show List';
   }
 },
methods: {
   addTask() {
    this.tasks.push(this.enteredTaskValue);
   },
   hideShowTasks(){
    this.tasksVisible = !this.tasksVisible;
   }
  }
});

app.mount('#assignment');