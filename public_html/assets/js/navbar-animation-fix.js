$('#menu-nav').on('show.bs.collapse', function (){
    $('#e-delivery-banner').css('transform', 'translate(-50%, 10%)');
});

$('#menu-nav').on('hide.bs.collapse', function (){
    $('#e-delivery-banner').css('transform', 'translate(-50%, -50%)');
});
