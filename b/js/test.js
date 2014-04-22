

$("#button").click(function(e) {
    $(this).addClass('Transparent').delay(5000).queue(function(d) {
        $(this).removeClass('Transparent');
        $(this).dequeue();
    });
});