var $body = $ ('body');
var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
var $btnMove = $('.btn-move');
var $diamond = $('.diamond');
var $btnCol = $('.btn-collapse-expand');
var $panel = $('.panel');
var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');
var $btnAppend = $('.btn-append');
var $list = $('.list');


$btnShowHide.on('click', function () {
	$box.toggleClass('box-show');
});

$btnMove.on('click', function () {
	$diamond.toggleClass('diamond-move');
});

$btnCol.on('click', function () {
	$panel.toggleClass('panel-collapse');
});

$btnBounce.on('click', function () {
	$circle.toggleClass('bounce');
});

$btnAppend.on('click', function () {
	$list.toggleClass('expand');
});

