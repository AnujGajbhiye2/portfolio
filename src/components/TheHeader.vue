<template>
  <header class="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp" id="mh-header" :class="scrollValue > 100 ?'nav-strict': ''">
                <div class="overlay" :class="isNavbar ? 'active': '' " @click="overlayClicked()"></div>
                <div class="container">
                    <div class="row">
                        <nav class="navbar navbar-expand-lg mh-nav nav-btn">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" @click="openNavBar()" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                                :class="isNavbar ? 'active collapsed': ''"
                            >
                                <span class="navbar-toggler-icon icon"></span>
                            </button>
                        
                            <div class="collapse navbar-collapse" :class="isNavbar ? 'active show': ''" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto ml-auto">
                                    <li class="nav-item" :class="currentHash() == '#mh-home'? 'active': ''">
                                        <a class="nav-link" :style="currentHash() == '#mh-home'? 'color: #E91E63': ''" href="#mh-home">Home</a>
                                    </li>
                                    <li class="nav-item" :class="currentHash() == '#mh-about'? 'active': ''">
                                        <a class="nav-link" :style="currentHash() == '#mh-about'? 'color: #E91E63': ''" href="#mh-about">About</a>
                                    </li>
                                    <li class="nav-item" :class="currentHash() == '#mh-skills'? 'active': ''">
                                    <a class="nav-link" :style="currentHash() == '#mh-skills'? 'color: #E91E63': ''" href="#mh-skills">Skills</a>
                                    </li>                                
                                    <li class="nav-item" :class="currentHash() == '#mh-experience'? 'active': ''">
                                    <a class="nav-link" :style="currentHash() == '#mh-experience'? 'color: #E91E63': ''" href="#mh-experience">Experiences</a>
                                    </li>                                
                                    <li class="nav-item" :class="currentHash() == '#mh-portfolio'? 'active': ''">
                                        <a class="nav-link" :style="currentHash() == '#mh-portfolio'? 'color: #E91E63': ''" href="#mh-portfolio">Portfolio</a>
                                    </li>                               
                                    <li class="nav-item" :class="currentHash() == '#mh-contact'? 'active': ''">
                                    <a class="nav-link" :style="currentHash() == '#mh-contact'? 'color: #E91E63': ''" href="#mh-contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
</template>

<script>
    export default {
        data : () => ({
            scrollValue: 0,
            isNavbar: false
        }),
        methods: {
            currentHash() {
                return window.location.hash;
            },
            openNavBar() {
                this.isNavbar = !this.isNavbar;
            },
            overlayClicked() {
                if( this.isNavbar ) {
                    this.openNavBar();
                }
            }
        },
        mounted() {
            
            window.addEventListener("scroll", () => {
                let scroll = window.scrollY;
                this.scrollValue = scroll;
            });
            
        }

        
    }
</script>

<style>
@media only screen and (max-width: 991px)
{
    .mh-xs-mobile-nav .navbar-collapse {
        background-color: #100e17 !important;
    }

}

</style>