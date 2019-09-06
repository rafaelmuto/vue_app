new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    alertMe: () => {
      alert('danger danger danger!!!');
    },
    type: event => {
      this.value = event.target.value;
      console.log(value);
      return;
    }
  }
});
