new Vue({
  el: '#app',
  data: {
    title: 'VueJS Instance'
  },
  beforeCreate: function() {
    console.log('beforeCreate()');
  },
  created: function() {
    console.log('created()');
  },
  beforeMount: function() {
    console.log('beforeMount()');
  },
  mounted: function() {
    console.log('mounted()');
  },
  beforeCreated: function() {
    console.log('beforeCreated()');
  },
  beforeUpdate: function() {
    console.log('beforeUpdated()');
  },
  updated: function() {
    console.log('updated()');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy()');
  },
  destroyed: function() {
    console.log('destroyed()');
  },
  methods: {
    destroy: function() {
      this.$destroy();
    }
  }
});
