"use strict";$(document).ready(function(){$(".arrowTrigger-js").on("click",function(){$(".dropMnu-js").slideToggle()}),$(".registration-js").on("click",function(){$(".registration").fadeIn()}),$("#registration-tab").on("click",function(){$(".registration__modalWindow").css("flex-direction","row-reverse"),$(".closeBtn").addClass("closeBtnLeft")}),$("#signIn-tab").on("click",function(){$(".registration__modalWindow").css("flex-direction","row"),$(".closeBtn").removeClass("closeBtnLeft")}),$(".registration-js").on("click",function(){$("#autorization").css("display","flex")}),$(".closeBtn").on("click",function(){$(".blurEffect").hide()}),$(".hamburger").click(function(){$(this).toggleClass("openClose"),$(".mnu-js").toggleClass("mobileMnu-js"),$(".hamburger__line").toggleClass("lineBg")}),$(".mnu-js").click(function(){$(".hamburger").removeClass("openClose"),$(".hamburger__line").removeClass("lineBg")}),$(document).mouseup(function(e){var i=$(".hamburger");i.is(e.target)||0!==i.has(e.target).length||i.removeClass("openClose")}),$(".header__mnuFirstLvl").clone().appendTo(".mmenu-nav"),$(".autorization").clone().appendTo("navbar");var e=$(".mmenu-nav").mmenu({navbar:{title:"IshuInfo"},extensions:["fx-menu-slide","fx-listitems-slide","border-full","pagedim-black","position-right"],offCanvas:{},counters:!0}),i=$(".hamburger"),n=e.data("mmenu");i.on("click",function(){n.open()}),$(function(){$("li").on("click",function(){var e=$(this);e.siblings(".selected").removeClass("selected"),e.addClass("selected").parent().addClass("vote-cast")})});var s=new Swiper(".gallery-thumbs",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,direction:"vertical",breakpoints:{767:{direction:"horizontal"},575:{direction:"horizontal",slidesPerView:2}}});new Swiper(".gallery-top",{spaceBetween:10,thumbs:{swiper:s}}),new Swiper(".serviceSlider-js",{slidesPerView:4,spaceBetween:20,loop:!0,loopFillGroupWithBlank:!0,breakpoints:{767:{slidesPerView:3},575:{slidesPerView:1,spaceBetween:0}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});$(".favorites").on("click",function(){$(this).toggleClass("addTofavorites")})});