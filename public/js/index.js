/**
 * Created by Administrator on 2016/12/7 0007.
 */
document.getElementsByClassName('md')[0]
	.addEventListener('touchstart', function(e){
	console.log('touchstart',e)
});

document.getElementsByClassName('md')[0]
	.addEventListener('touchmove', function(e){
	console.log('touchmove',e)
});

document.getElementsByClassName('md')[0]
	.addEventListener('touchend', function(e){
	console.log('touched',e)
});