/*global jQuery:false */
jQuery(document).ready(function($) {
"use strict";

	
		//add some elements with animate effect

		$(".big-cta").hover(
			function () {
			$('.cta a').addClass("animated shake");
			},
			function () {
			$('.cta a').removeClass("animated shake");
			}
		);
		$(".box").hover(
			function () {
			$(this).find('.icon').addClass("animated fadeInDown");
			$(this).find('p').addClass("animated fadeInUp");
			},
			function () {
			$(this).find('.icon').removeClass("animated fadeInDown");
			$(this).find('p').removeClass("animated fadeInUp");
			}
		);
		
		
		$('.accordion').on('show', function (e) {
		
			$(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
			$(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
			$(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
		});
		
		$('.accordion').on('hide', function (e) {
			$(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
			$(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
			$(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
		});	

		
		// tooltip
		$('.social-network li a, .options_box .color a').tooltip();

		// fancybox
		$(".fancybox").fancybox({				
				padding : 0,
				autoResize: true,
				beforeShow: function () {
					this.title = $(this.element).attr('title');
					this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
				},
				helpers : {
					title : { type: 'inside' },
				}
			});



		
		//scroll to top
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
				} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});
    $('#post-slider').flexslider({
        // Primary Controls
        controlNav          : false,             
        directionNav        : true,              
        prevText            : "Previous",        
        nextText            : "Next",            
         
        // Secondary Navigation
        keyboard            : true,              
        multipleKeyboard    : false,             
        mousewheel          : false,             
        pausePlay           : false,             
        pauseText           : 'Pause',           
        playText            : 'Play',            
         
        // Special properties
        controlsContainer   : "",               
        manualControls      : "",                
        sync                : "",                
        asNavFor            : "",                
    });
	
    $('#main-slider').flexslider({
        namespace           : "flex-",           
        selector            : ".slides > li",   
        animation           : "fade",            
        easing              : "swing",           
        direction           : "horizontal",     
        reverse             : false,             
        animationLoop       : true,             
        smoothHeight        : false,            
        startAt             : 0,                 
        slideshow           : true,              
        slideshowSpeed      : 7000,              
        animationSpeed      : 600,              
        initDelay           : 0,                
        randomize           : false,            
         
        // Usability features
        pauseOnAction       : true,            
        pauseOnHover        : false,            
        useCSS              : true,             
        touch               : true,              
        video               : false,            
         
        // Primary Controls
        controlNav          : true,              
        directionNav        : true,              
        prevText            : "Previous",        
        nextText            : "Next",            
         
        // Secondary Navigation
        keyboard            : true,             
        multipleKeyboard    : false,             
        mousewheel          : false,             
        pausePlay           : false,             
        pauseText           : 'Pause',           
        playText            : 'Play',            
         
        // Special properties
        controlsContainer   : "",                
        manualControls      : "",                
        sync                : "",                
        asNavFor            : "",                
    });
    
	

});
function showquantitycap() {
    var orderic1 = document.getElementById("orderic1");
    var numberorderic1 = document.getElementById("numberorderic1");
    if (orderic1.checked == true) {
        numberorderic1.style.display = "inline";
    }
    else
        {numberorderic1.style.display = "none";}
}

function showquantitylat() {
    var orderic2 = document.getElementById("orderic2");
    var numberorderic2 = document.getElementById("numberorderic2");
    if (orderic2.checked == true) {
        numberorderic2.style.display = "inline";
    }
    else
        {numberorderic2.style.display = "none";}
}

function showquantitymoc() {
    var orderic3 = document.getElementById("orderic3");
    var numberorderic3 = document.getElementById("numberorderic3");
    if (orderic3.checked == true) {
        numberorderic3.style.display = "inline";
    }
    else
        {numberorderic3.style.display = "none";}
}

function showquantityame() {
    var orderic4 = document.getElementById("orderic4");
    var numberorderic4 = document.getElementById("numberorderic4");
    if (orderic4.checked == true) {
        numberorderic4.style.display = "inline";
    }
    else
        {numberorderic4.style.display = "none";}
}

function showquantityother() {
    var orderic5 = document.getElementById("orderic5");
    var coffeeNameInput = document.getElementById("coffee_name");
    var numberorderic5 = document.getElementById("numberorderic5");
    if (orderic5.checked == true) {
        numberorderic5.style.display = "inline";
    } else {
        numberorderic5.style.display = "none";
    }
}

function showquantityool() {
    var orderic6 = document.getElementById("orderic6");
    var numberorderic6 = document.getElementById("numberorderic6");
    if (orderic6.checked == true) {
        numberorderic6.style.display = "inline";
    }
    else
        {numberorderic6.style.display = "none";}
}

function showquantitybla() {
    var orderic7 = document.getElementById("orderic7");
    if (orderic7.checked == true) {
        numberorderic7.style.display = "inline";
    }
    else
        {numberorderic7.style.display = "none";}
}

function showquantityher() {
    var orderic8 = document.getElementById("orderic8");
    if (orderic8.checked == true) {
        numberorderic8.style.display = "inline";
    }
    else
        {numberorderic8.style.display = "none";}
}

function showquantitycha() {
    var orderic9 = document.getElementById("orderic9");
    if (orderic9.checked == true) {
        numberorderic9.style.display = "inline";
    }
    else
        {numberorderic9.style.display = "none";}
}

function showquantityothertea() {
    var orderic10 = document.getElementById("orderic10");
    var teaNameInput = document.getElementById("tea_name");
    var numberorderic10 = document.getElementById("numberorderic10");
    if (orderic10.checked == true) {
        numberorderic10.style.display = "inline";
    } else {
        numberorderic10.style.display = "none";
    }
}

function showquantitycup() {
    var orderic11 = document.getElementById("orderic11");
    if (orderic11.checked == true) {
        numberorderic11.style.display = "inline";
    }
    else
        {numberorderic11.style.display = "none";}
}

function showquantitycoo() {
    var orderic12 = document.getElementById("orderic12");
    if (orderic12.checked == true) {
        numberorderic12.style.display = "inline";
    }
    else {
        numberorderic12.style.display = "none";}
}

function showquantitypud() {
    var orderic13 = document.getElementById("orderic13");
    if (orderic13.checked == true) {
        numberorderic13.style.display = "inline";
    }
    else {
        numberorderic13.style.display = "none";}
}

function showquantityice() {
    var orderic14 = document.getElementById("orderic14");
    var iceNameInput = document.getElementById("icecream_name");
    var numberorderic14 = document.getElementById("numberorderic14");
    if (orderic14.checked == true) {
        numberorderic14.style.display = "inline";
    } else {
        numberorderic14.style.display = "none";
    }
}

function showquantityotherdes() {
    var orderic15 = document.getElementById("orderic15");
    var desNameInput = document.getElementById("dessert_name");
    var numberorderic15 = document.getElementById("numberorderic15");
    if (orderic15.checked == true) {
        numberorderic15.style.display = "inline";
    } else {
        numberorderic15.style.display = "none";
    }
}

// Show Payment Online
function showPaymentOption() {
    var crecard = document.getElementById("crecard");
    var deli = document.getElementById("deli");
    var pick = document.getElementById("pick");

    if (deli.checked) {
        crecard.style.display = "inline";
    } else if (pick.checked) {
        crecard.style.display = "none";
    }
}

function pickoron() {
    var cardnumber = document.getElementById("cardnumber");
    var pickup = document.getElementById("pickup");
    var online = document.getElementById("online");

    if (online.checked) {
        cardnumber.style.display = "inline";
    } else if (pickup.checked) {
        cardnumber.style.display = "none";
    }
}

function validate () {
    var postcode = document.getElementById("postcode").value;
    var pw = document.getElementById("pw").value;
    var email = document.getElementById("email").value;
    var uname = document.getElementById("uname").value;
    var address = document.getElementById("address").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var errMsg = "";		    
    var result = true;
        if (postcode == "") {
            errMsg += "Postcode cannot be empty.\n";
        }
        if (pw == "") {
            errMsg += "Password cannot be empty.\n";
        }
        if (email == "") {
            errMsg += "Email password cannot be empty.\n";
        }
        if (uname == "") {
            errMsg += "User name cannot be empty.\n";
        }
        if (address == "") {
            errMsg += "Address cannot be empty.\n";
        }
        if ((male == "") && (female == "")) {
            errMsg += "A gender must be selected.\n";
        }
        if (pw.length < 9) {
            errMsg += "Your password must have at least 6 characters.\n";
        }
        if (postcode.length < 4) {
            errMsg += "Your postcode must have at least 4 characters.\n";
        }
        if (errMsg != "") {
            alert(errMsg);
            result = false;
        }
        return result;
}

function init () {
    var regform = document.getElementById("regform");
    regform.onsubmit = validate;
}

window.onload = init;
