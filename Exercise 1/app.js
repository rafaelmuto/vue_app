new Vue({
  el: '#exercise',
  data: {
    name: 'Rafael',
    age: 33,
    img: 'https://vuejs.org/images/logo.png'
  },
  methods: {
    rand: () => {
      return Math.random();
    }
  }
});
