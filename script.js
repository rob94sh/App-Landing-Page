var scrollOffset = 70;
$('body').scrollspy({ target: '#navBar', offset: scrollOffset });



$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy({top: -scrollOffset});    

});