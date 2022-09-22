const app = Vue.createApp({
  data() {
    return {
      enteredGoalVal: '',
      goals: [] };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalVal);
    }
  }
});

app.mount('#user-goals');
