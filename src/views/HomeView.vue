<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <button @click="vehicleApi">/api/map/vehicle</button>
    <button @click="sendXhr">sendXhr</button>
    <button @click="testApi">testApi</button>
    <button @click="getAllVehicleApi">getAllVehicleApi</button>
    <button @click="getDesignResourceListApi">getDesignResourceListApi</button>
    <button @click="getDesignResourceDetailApi">getDesignResourceDetailApi</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

import { 
  getAllVehicleApi,
  testApi,
  getDesignResourceListApi,
  getDesignResourceDetailApi
} from "@/utils/umiRequest/api/test";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  mounted() {

  },
  methods: {
    vehicleApi() {
      var xhr;
      xhr = new XMLHttpRequest();
      
      // 给xhr绑定状态改变事件
      xhr.onreadystatechange = function () {
        console.log("vehicleApi xhr", xhr);
      }

      // xhr建立连接
      xhr.open('GET', '/api/map/vehicle', true);
      // 
      xhr.send(null)
    },
    sendXhr() {
      var xhr;
      xhr = new XMLHttpRequest();
      
      // 给xhr绑定状态改变事件
      xhr.onreadystatechange = function () {
        console.log("sendXhr xhr", xhr);
      }

      // xhr建立连接
      xhr.open('GET', 'http://192.145.23.1/agent/agentStatusList', true);
      // 
      xhr.send(null)
    },
    testApi() {
      testApi().then(res => {
        console.log("testApi res", res)
      }).catch(err => {
        console.log("testApi err", err);
      })
    },
    getAllVehicleApi() {
      getAllVehicleApi().then(res => {
        console.log("getAllVehicleApi res", res)
      }).catch(err => {
        console.log("getAllVehicleApi err", err);
      })
    },
    getDesignResourceListApi() {
      getDesignResourceListApi().then(res => {
        console.log("getDesignResourceListApi res", res)
      }).catch(err => {
        console.log("getDesignResourceListApi err", err);
      })
    },
    getDesignResourceDetailApi() {
      getDesignResourceDetailApi().then(res => {
        console.log("getDesignResourceDetailApi res", res)
      }).catch(err => {
        console.log("getDesignResourceDetailApi err", err);
      })
    }
  }
};
</script>
