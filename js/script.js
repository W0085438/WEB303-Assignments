$(function () {
    $('#photo-viewer').photoViewer().show().on('click', '.photo-frame', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here
		var modal = (function() {
		var $window = $(window);
		var $modal = $('<div class="modal"/>');
		var $content = $('<div class=“modal-content"/>');
		var $close = $('<button role=“button” class=“modal-close">close</button>');
		$modal.append($content, $close);
		});
    });
});
