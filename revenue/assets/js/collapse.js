$(document).ready(function() {
    $('[data-toggle=collapse-next]').click(function(e){
        e.preventDefault();
        var heading = $(this);
        var $container = $(this).parents("#accordion");
        var $opencontainers = $container.find(".in");
        var $target = $(this).parent().find('.collapse');
        $target.collapse('toggle');

        $opencontainers.each(function() {
            $(this).collapse('toggle');
        });
    });
    
    $('.panel-collapse').on('show.bs.collapse', function () {
        $(this).siblings('.panel-heading').addClass('active');
    });

    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.panel-heading').removeClass('active');
    });
});