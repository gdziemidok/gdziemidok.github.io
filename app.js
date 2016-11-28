
/*rozwiniecie kółek na wstępie*/
$(function(){

	var cv = $('.cv');
	var skills = $('.skills');
	var portfolio = $('.portfolio');
	var favour = $('.favour');
	var width = cv.width();
	var height = cv.height();
	var text = $('.text');
	var widthtext = text.width();
	var heighttext = text.height();

cv.delay(500).animate({width: 5*width+'px', height: 5*height+'px'},2000);
cv.animate({left:'-=100px'},1000);

skills.delay(600).animate({width: 4*width, height: 4*height},3000);
skills.animate({left:'-=50px'},1000);

portfolio.delay(400).animate({width: 3*width, height: 3*height},4000);
portfolio.animate({left:'-=30px'},1000);

favour.delay(300).animate({width: 2*width, height: 2*height},5000);




});

/* pokazanie logotypów technologi*/
$(function(){

	
	var skills  = $('.skills');
	var textskil = $('.content2');
	var obrazek = $('.obrazek');
				console.log(obrazek);
	
		skills.on('click',function(){
			console.log(obrazek);

			obrazek.animate({top:'-=200px'},1500);

				obrazek.fadeOut(5000, function(){

				$(this).animate({top:'+=200px'},1000).fadeIn(1000)
			});
		});
	});

/*Uruchomienie animacji*/
$(function(){

	var animcss=$('.animcss')
	var name = $('.name');
	var width = name.width();
	var height = name.height();
	var portfolio = $('.portfolio');
	var skills  = $('.skills');
	var cv = $('.cv');
	var favour = $('.favour');
	favour.on('click',function(){
		favour.animate({ top: '+=300px' }, 4000, 'easeOutBounce');
	cv.animate({ top: '+=150px' }, 1000, 'easeOutBounce');
	portfolio.animate({ top: '+=250px' }, 2000, 'easeOutBounce');
	skills.animate({ top: '+=200px' }, 3000, 'easeOutBounce');
	name.animate({width: 1.3*width +'px', height: 1.3*height +'px'},1000);
	name.animate({ top: '+=400px' }, 2000, 'easeOutBounce',function(){
		name.animate({left:'+=5px'},500);
	cv.addClass('animcss');	
	cv.animate({left:'+=50px'},800,function(){
		skills.addClass('animcss'),
	skills.animate({left:'+=50px'}),
	portfolio.addClass('animcss'),
	portfolio.animate({left:'+=30px'},800,function(){
		favour.animate({left:'+=800px'},500);
		favour.animate({left:'-=800px'},500);
		favour.animate({top:'-=149px', left:'-=120px'},300);
		favour.animate({top:'-=450px'},500);
	favour.animate({top:'+=450px'},300,function(){
		portfolio.animate({top:'+=150px'},300, function(){
	favour.animate({top:'-=450px'},500);	
	favour.animate({top:'+=450px',left:'-=100px'},300,function(){
		skills.animate({top:'+=200px',left:'-=50px'},300, function(){
			favour.animate({top:'-=450px'},500);	
	favour.animate({top:'+=430px',left:'-=250px'},300,function(){
		cv.animate({top:'+=250px'},300, function(){
			favour.animate({top:'-=440px'},500);
	favour.animate({top:'+=700px',left:'-=280px'},500, function(){
		name.animate({ top: '-=400px' },1000);	
	name.animate({ top: '+=200px',left:'+=550px' },1000, function(){
		name.animate({width: 2*width +'px', height: 2*height +'px'},1000,function(){
			name.toggle( "explode" );
	});	


	});	
	});	

	});

	});	
	});	

	});
		

	});	

	});
		
	});
	
	

	  });
	

	});

});	

});
	/*uruchomienie animacji star wars za pomocą click oraz muzyki*/

	$(function(){

		var cv = $('.cv');
		var scroll = $('.scroll');
		var content1 = $('.content1');
		var audio = document.querySelector('audio');

		cv.on('click',function(){

		audio.play();

		content1.addClass('scroll');

			});

	});

// zamiana klass w portfolio

	$(function(){

		var portfolio = $('.portfolio');
		var portfolioshow =$('.portfolioshow')
		var text1 = $('.text1');
		portfolio.on('click',function(){

		if (portfolio.hasClass('portfolio'))

			{ portfolio.removeClass('portfolio');
			  portfolio.addClass('portfolioshow');
			  text1.text( 'Prace na githubie');

	}	else {

			portfolio.removeClass('portfolioshow');
			portfolio.addClass('portfolio');
			text1.text( 'Co zrobiłem');

	}	
			

		});

    		
	});	

/*uruchomienie zegara*/
		
   $(function(){ 		
			
function odliczanie(){

		var dzisiaj = new Date();
		
		var dzien = dzisiaj.getDate();
		var miesiac = dzisiaj.getMonth()+1;
		var rok = dzisiaj.getFullYear();
		
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		
		document.querySelector(".time").innerHTML = 
		 dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda;
		 
		 setTimeout("odliczanie()",1000);
	}

});







