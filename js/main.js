$(document).ready(function(){

	$('.dog').on('click', function(){
  		var sound = new Audio("http://www.animal-sounds.org/farm/Dog%20bark%20animals079.wav");
			sound.play();
			sound.currentTime=0;
			var newTop = Math.floor(Math.random() * 100) + 0;
			var newLeft = Math.floor(Math.random() * 300) + 0;
			$(this).css('top', newTop);
			$(this).css('left', newLeft);
	});

	$('.cow').on('click', function(){
  		var sound = new Audio("http://www.animal-sounds.org/farm/Cow%20animals055.wav");
			sound.play();
			sound.currentTime=0;
			var newTop = Math.floor(Math.random() * 200) + 0;
			var newLeft = Math.floor(Math.random() * 400) + 0;
			$(this).css('top', newTop);
			$(this).css('left', newLeft);
	});

	$('.rooster').on('click', function(){
  		var sound = new Audio("http://www.animal-sounds.org/farm/Rooster%20animals070.wav");
			sound.play();
			sound.currentTime=0;
			var newTop = Math.floor(Math.random() * 300) + 0;
			var newLeft = Math.floor(Math.random() * 400) + 0;
			$(this).css('top', newTop);
			$(this).css('left', newLeft);
	});

	$('.pony').on('click', function(){
  		var sound = new Audio("http://www.animal-sounds.org/farm/Pony%20whinny%20animals127.wav");
			sound.play();
			sound.currentTime=0;
			var newTop = Math.floor(Math.random() * 400) + 0;
			var newLeft = Math.floor(Math.random() * 500) + 0;
			$(this).css('top', newTop);
			$(this).css('left', newLeft);
	});

	$('.pig').on('click', function(){
  		var sound = new Audio("http://www.animal-sounds.org/farm/Pigs%20eating%20animals113.wav");
			sound.play();
			sound.currentTime=0;
			var newTop = Math.floor(Math.random() * 300) + 0;
			var newLeft = Math.floor(Math.random() * 500) + 0;
			$(this).css('top', newTop);
			$(this).css('left', newLeft);
	});

});
