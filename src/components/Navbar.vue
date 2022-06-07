<template>
 <header>
        <!--Navigation-->
        <nav class="navbar navbar-top-default navbar-expand-lg navbar-simple nav-line">
            <a href="#home" title="Logo" class="logo">
                <!--Logo Default-->
                <div class="mega-logo">
                    <img src="../assets/images/logo-full.png" alt="logo" class="ml-lg-3 m-0" style="height:auto;">
                </div>
            </a>

            <!--Side Menu Button-->
            <div class="navigation-toggle">
                <ul class="slider-social toggle-btn my-0">
                    <li>
                        <a @click="toggle()" class="sidemenu_btn" id="sidemenu_toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <!--Side Nav-->
        <div :class="{'side-menu-active':isactive}" class="side-menu">
            <span id="btn_sideNavClose">
                <i class="las la-times btn-close" @click="toggle()"></i>
            </span>
            <div class="inner-wrapper">
                <nav class="side-nav w-100">
                    <a href="#home" title="Logo" class="logo navbar-brand">
                        <img src="../assets/images/logo-img.png" alt="logo">
                    </a>
                    <ul class="navbar-nav text-capitalize">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">Services Provided</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#gallery">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#ourteam">Our Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div class="side-footer w-100">
                    <ul class="social-icons-simple">
                        <li><a class="social-icon" href="https://facebook.com/profile.php?id=100080923608288" target="_blank"><i class="fab fa-facebook-f"></i> </a> </li>
                        <li><a class="social-icon" href="https://instagram.com/vachana642" target="_blank"><i class="fab fa-instagram"></i> </a> </li>
                        <!--<li><a class="social-icon" href="javascript:void(0)"><i class="fab fa-twitter"></i> </a> </li>
                        <li><a class="social-icon" href="javascript:void(0)"><i class="fab fa-linkedin-in"></i> </a> </li>-->
                    </ul>
                    <p>&copy; 2022 Vachana Child Development Centre</p>
                </div>
            </div>
        </div>
        <a id="close_side_menu" href="javascript:void(0);"></a>
    </header>
</template>
<script>
export default {
    name:'NavBar',
    data(){
        return{
            name:"",

            isactive:false,
        }
    },
    methods:{
        toggle(){
               this.isactive=!this.isactive 
        }
    }

}
</script>