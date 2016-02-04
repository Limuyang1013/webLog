require.config({
    paths: {
        'jquery': 'jquery.min',
        'draw': 'draw'
    }
});

require(['draw'], function(draw) {
    draw.setText().css('color', '#f00');
});
