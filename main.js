$(".slider_area").owlCarousel({
    animateOut:"fadeOut",
    animateIn: true,
    loop:true,
    nav:true,
    autoplay:false,
    autoplayTimeout:5000,
    items:1,
    dots:false,
    navText: [
    '<i class="fas fa-arrow-left"></i>',
    '<i class="fas fa-arrow-right"></i>',
    ],  
});

// product column of 4 activation
$(".product-column4").on("changed.owl.carousel initialized.owl.carousel",function( event ){
    $(event.target).find(".owl-item").removeClass("last").eq(event.item.index+event.page.size-1).addClass("last");
}).owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    autoplayTimeout: 5000,
    item:4,
    dots:false,
    navText:[
        '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>', 
    ],
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        768:{
            items:3,
        },
        992:{
            items:4,
        },
    },

}),
(jquery)