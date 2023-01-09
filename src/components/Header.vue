<template>
  <div>
    <header>
      <div class="container">
        <div class="logo">
          <router-link to="/"><h4> 247 Property Fix </h4></router-link>
            <!-- <img src="@/assets/logo.png" alt="logo" class="img-fluid"> -->
        </div>
        <nav>
            <button class="float-right d-md-none" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <i class="fa fa-bars"></i>
            </button>
            <div class="nav-bar d-md-block collapse" id="collapsibleNavbar">
              <router-link to="/" @click="this.parent.classList.remove('show')">Home</router-link>
              <router-link to="/services" @click="this.parent.classList.remove('show')">Services</router-link>
              <router-link to="/about" @click="this.parent.classList.remove('show')">About</router-link>
              <router-link to="/contact" @click="this.parent.classList.remove('show')">Contact</router-link>
            </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped>

header{
  position: fixed;
  top: 0px;
  width: 100%;
  height: 60px;
  z-index: 999;
  padding: 14px 0px;
  box-shadow: 0px 0px 10px 2px #404040;
  background-color:#006aff;
  background: linear-gradient(#006aff,#00fafa);
}
header .logo{
  float: left;
  color: #ffffff;
}
header nav button{
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border-color: #ffffff;
  outline: none !important;
}
header nav button i{
  color: #ffffff;
}

.nav-bar{
  float: right;
  text-align: right;
}
.nav-bar a {
  color: #ffffff;
  font-size: 20px;
  padding: 0px 20px;
}
.nav-bar a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

@media screen and (max-width: 767px){
  .nav-bar{
    position: absolute;
    left: 0px;
    right: 0px;
    top: 60px;
    background: linear-gradient(#00fafa,#006aff);
  }
  .nav-bar a{
    display: block;
    width: 100%;
    margin: 0px auto 20px;
    text-align: center;
  }
  .nav-bar a:first-child{
    margin-top: 20px;
  }
}

a {
  color: #ffffff;
}
</style>