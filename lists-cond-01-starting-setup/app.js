const app = Vue.createApp({
  data() {
    return {
      enteredGoalVal: '',
      goals: [] };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoVal);
    }
  }
});

app.mount('#user-goals');
