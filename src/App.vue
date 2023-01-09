<template>
  <Header />
  <router-view :key="$route.fullPath"/>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

html, body, #app{
  height: 100%;
}

main{
  position: absolute;
  width: 100%;
  height: 80%;
  height: calc(100% - 145px);
  top: 80px;
  padding: 0px 15px;
  background-color: #e3e3e3;
  background: linear-gradient(#ffffff, #e3e3e3, #ffffff);
}
.container-tr{
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 2px #cecece;
  background-color: #ffffff;
  overflow-x: hidden;
  overflow-y: scroll;
}
.container-tr::-webkit-scrollbar {
  width: 10px;
}
.container-tr::-webkit-scrollbar-track {
  box-shadow: 0px 0px 0px 0px #000000;
}
.container-tr::-webkit-scrollbar-thumb {
  background: linear-gradient(#006aff,#00fafa);
  border-radius: 10px;
}
.container-tr::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(#00fafa,#006aff);
}
.credits{
  display: none;
}
</style>
