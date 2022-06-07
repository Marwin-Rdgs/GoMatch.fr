<script>
import sportindex from "../components/sportindex.vue"
import pub from "../components/pub.vue"

export default {
  name: "homeView",
  // data: function {
  //   return {
  //       affiche:'',
  //       indexMot:0,
  //       posMot:0,
  //       monteMot:true,
  //   }
  // },
  components: { sportindex, pub }
};

/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = ["Football", "Basketball", "Pétanque", "Tennis"];
// const typingDelay = 100;
// const erasingDelay = 100;
// const newTextDelay = 50; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//   	setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
// 	if (charIndex > 0) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if(textArrayIndex>=textArray.length) textArrayIndex=0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

// document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//   if(textArray.length) setTimeout(type, newTextDelay + 100);
// });

// window.addEventListener('DOMContentLoaded', event => {

//     // Navbar shrink function
//     var navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#mainNav');
//         if (!navbarCollapsible) {
//             return;
//         }
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink')
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink')
//         }

//     };

//     // Shrink the navbar 
//     navbarShrink();

//     // Shrink the navbar when page is scrolled
//     document.addEventListener('scroll', navbarShrink);

//     // Activate Bootstrap scrollspy on the main nav element
//     const mainNav = document.body.querySelector('#mainNav');
//     if (mainNav) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#mainNav',
//             offset: 72,
//         });
//     };

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });

</script>

<template>
<div class="screen w-full">
            <h1 class="title_minia font-impact text-2xl text-center"> <br> <br> GoMatch!</h1>
            <div class="container fw-bolder">
                <p class="title_anim font-impact text-xl text-center lg:ml-4"> Go <br>
                <span class="typed-text"></span><span class="cursor">&nbsp;Football</span>
                </p>
                <a href=#down><img src="../components/icones/arrow_down.svg" alt="Icône descendre" class="arrow_down py-9"></a>
            </div>
        </div>
        <p class="text-center font-bold text-xs font-Open Sans" id="down">Choisissez votre sport : </p>

            <sportindex 
    type="foot"
    txt="Football"
    url="/searchfoot"/>

    <hr class="w-1/6 m-auto"/>

    <sportindex 
    type="petanque"
    txt="Pétanque"
    url="/searchpetanque" />

    <hr class="w-1/6 m-auto">

    <sportindex 
    type="bascket"
    txt="Basketball"
    id="/searchbasket" />

    <hr class="w-1/6 m-auto">

    <sportindex 
    type="tennis"
    txt="Tennisball"
    id="/searchtennis" />

    
    <pub/>

</template>

<style scoped>

hr { color:#6B7280; background-color:#6B7280; height:3px; border:0; }

@media (min-width: 1000px) {

.first_header {
    height: 115px; 
    overflow: hidden;   
    margin-bottom: 0px;
}

.title
{
    text-align: center;
}

.screen {
    margin-top: 0px;
    background-image:url("../assets/img/Minia.jpg");
    background-size: cover;
    width: 100%;
    margin-bottom: 35px;
}

.arrow_down {
    display: block;
    margin-left: 780px;
}

.logo_gomatch {
    margin-top: 15px;
    margin-left: 15px;
}

.title_minia
{
    margin-top: 0px;
    font-size: 100px;
    color: #FFFFFF;
}

.title_anim {
    color: #FFFFFF;
    margin-bottom: 260px;
}
}

@media (max-width: 1000px) {

    .title
    {
        text-align: center;
        margin-left: 115px;
    }

    .screen {
        margin-top: 0px;
        background-image:url("../assets/img/minia-phone.png");
        background-size: cover;
        margin-bottom: 35px;
    }

    .arrow_down {
        display: block;
        width: 15%;
        margin-left: 160px;
    }

    .logo_gomatch {
        margin-top: 20px;
        margin-left: 18px;
        width: 15%;
    }

    .title_minia
{
    margin-top: 0px;
    text-align: center;
    color: #FFFFFF;
}

.title_anim {
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 260px;
}

}
</style>