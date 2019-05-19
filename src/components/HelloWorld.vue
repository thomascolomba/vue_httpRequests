<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<button v-on:click="loadMyObjectBusinessThroughHttpRequest">click me to see infos related to MyBusinessObject</button>
	<button v-on:click="loadMyOtherObjectBusinessThroughHttpRequest">click me to see infos related to MyOtherBusinessObject</button>
	<p>{{myHttpResponse}}</p>
  </div>
</template>

<script>
import MyBusinessObjectService from '../services/MyBusinessObject.service.js'
import MyOtherBusinessObjectService from '../services/MyOtherBusinessObject.service.js';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      myHttpResponse: ''
    }
  },
  methods: {
    loadMyObjectBusinessThroughHttpRequest: function () {
		var that = this;
		MyBusinessObjectService.getMyBusinessObject()
		.then(function (response) {
			that.$data.myHttpResponse = response
		})
		.catch(function (error) {
			that.$data.myHttpResponse = error
		})
		.then(function () {
			// always executed
		})
    },
	loadMyOtherObjectBusinessThroughHttpRequest: function () {
		var that = this;
		MyOtherBusinessObjectService.getMyOtherBusinessObject()
		.then(function (response) {
			that.$data.myHttpResponse = response
		})
		.catch(function (error) {
			that.$data.myHttpResponse = error
		})
		.then(function () {
			// always executed
		})
    },
  }
}
</script>
