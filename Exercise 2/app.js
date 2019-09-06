new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    alertMe: () => {
      alert('danger danger danger!!!');
    },
    // this will not work with arrow functions!!!
    // in ES6 arrow function the this. refers to the parrent object wich holds the object, in this case the window object... ;)
    type: function(event) {
      console.log(this.value);
      this.value = event.target.value;
    }
  }
});
