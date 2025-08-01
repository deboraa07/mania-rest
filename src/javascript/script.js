$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-x');
    });

    const sections = $('section');
    const navItens = $('.nav-itens');

    $(window).on('scroll', function (){
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        console.log(scrollPosition);
    });
});