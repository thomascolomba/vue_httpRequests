<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<button v-on:click="loadMyObjectBusinessThroughHttpRequest">click me to see infos related to MyBusinessObject</button>
	<button v-on:click="loadMyOtherObjectBusinessThroughHttpRequest">click me to see infos related to MyOtherBusinessObject</button>
	<p>{{myHttpResponse}}</p>
  </div>
</template>

<script>
import MyBusinessObjectService from '../services/MyBusinessObject.service.js';
import MyOtherBusinessObjectService from '../services/MyOtherBusinessObject.service.js';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
		myHttpResponse:''
	};
  },
  methods: {
    loadMyObjectBusinessThroughHttpRequest: function (event) {
		var that = this;
		MyBusinessObjectService.getMyBusinessObject()
		.then(function (response) {
			that.$data.myHttpResponse = response;
		})
		.catch(function (error) {
			that.$data.myHttpResponse = error;
		})
		.then(function () {
			// always executed
		});
    },
	loadMyOtherObjectBusinessThroughHttpRequest: function (event) {
		var that = this;
		MyOtherBusinessObjectService.getMyOtherBusinessObject()
		.then(function (response) {
			that.$data.myHttpResponse = response;
		})
		.catch(function (error) {
			that.$data.myHttpResponse = error;
		})
		.then(function () {
			// always executed
		});
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
