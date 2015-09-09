$(window).load(function(){
    var windowHeight = $(window).height();
    var headerHeight = $('.headerNav').height();
    var sidebarHeight = (windowHeight - headerHeight) - 50;
    $('.sideBarLeft').css("height",sidebarHeight + "px");
    $('.mainDashborad').css("min-height",sidebarHeight + "px");
});