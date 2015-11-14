

$(document).ready(function() {  

$('.arrow').hide();

$('header').addClass('animated bounceInDown');
$('.hi-icon-wrap').addClass('animated bounceInUp');

setTimeout(function() {
    $('.arrow').show();
}, 800);

$(function() {

$(".roll").css("opacity","0");
 

$(".roll").hover(function () {
 

$(this).stop().animate({
opacity: .7
}, "350");
},
 

function () {
 

$(this).stop().animate({
opacity: 0
}, "350");
});
});

$("#back-top").hide();
	

$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});


$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

$('.menu #item_1, .arrow').click(function () {
			$('body,html').animate({
				scrollTop: $('#content').offset().top
			}, 800);
			return false;
		});

$('.menu #item_2').click(function () {
			$('body,html').animate({
				scrollTop: $('#content1').offset().top
			}, 800);
			return false;
		});

$('.menu #item_3').click(function () {
			$('body,html').animate({
				scrollTop: $('#content3').offset().top
			}, 800);
			return false;
		});
	});
    

$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 600) {
				$('#nav').css('margin-top','0px');
			} else {
				$('#nav').css('margin-top','-110px');;
			}
		});


$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});


$(document).scroll(function(){
   
    var docScroll = $(document).scrollTop(), 
        boxCntOfset1 = $("#content").offset().top - 5,
        boxCntOfset2 = $("#content1").offset().top - 5,
        boxCntOfset4 = $("#content3").offset().top - 5,
        boxCntOfset5 = $("#content4").offset().top - 5,
        boxCntOfset6 = $("#content").position().top + 100,
        boxCntOfset7 = $("#content1").position().top + 100,
        boxCntOfset9 = $("#content3").position().top + 100;
 
    
    // if((docScroll >= boxCntOfset1) && (docScroll <= boxCntOfset2)) {
    //     $(".menu #item_1").css('color','#32323c');
    // } else {
    //     $(".menu #item_1").css('color','#f2f2f2');
    // }
    
    //  if((docScroll >= boxCntOfset2) && (docScroll <= boxCntOfset4)) {
    //     $(".menu #item_2").css('color','#32323c');
    // } else {
    //     $(".menu #item_2").css('color','#f2f2f2');
    // }
    
    // if((docScroll >= boxCntOfset4) && (docScroll <= boxCntOfset4)) {
    //     $(".menu #item_3").css('color','#32323c');
    // } else {
    //     $(".menu #item_3").css('color','#f2f2f2');
    // }
    
    if(docScroll >= boxCntOfset6) {
        $("#content").css('padding-top','100px');
        $("#content").css('padding-bottom','100px');
    } else {
        $("#content").css('padding-top','200px');
        $("#content").css('padding-bottom','0px');
    }
    
    if(docScroll >= boxCntOfset7) {
        $("#content1").css('padding-top','100px');
        $("#content1").css('padding-bottom','100px');
    } else {
        $("#content1").css('padding-top','200px');
        $("#content1").css('padding-bottom','0px');
    }
    
    // if(docScroll >= boxCntOfset8) {
    //     $("#content2").css('padding-top','100px');
    //     $("#content2").css('padding-bottom','100px');
    // } else {
    //     $("#content2").css('padding-top','200px');
    //     $("#content2").css('padding-bottom','0px');
    // }

    if(docScroll >= boxCntOfset9) {
        $("#content3").css('padding-top','100px');
        $("#content3").css('padding-bottom','100px');
    } else {
        $("#content3").css('padding-top','200px');
        $("#content3").css('padding-bottom','0px');
    }    
  

  });      
    

/*

Responsive Mobile Menu v1.0
Plugin URI: responsivemobilemenu.com

Author: Sergio Vitov
Author URI: http://xmacros.com

License: CC BY 3.0 http://creativecommons.org/licenses/by/3.0/

*/

//Make navbar scroll down after scrolling
      $(function() {
        var bar = $('#nav');
        var top = bar.css('top');
        $(window).scroll(function() {
          if($(this).scrollTop() > 500) {
            bar.stop().animate({'top' : '0px'}, 500);
          } else {
            bar.stop().animate({'top' : top}, 500);
          }
        });
      });

function responsiveMobileMenu() { 
    $('.menu').each(function() {
        
      $(this).children('ul').addClass('menu-main-list');  // mark main menu list
      
      
      var $style = $(this).attr('data-menu-style'); // get menu style
        if ( typeof $style == 'undefined' ||  $style == false )
          {
            $(this).addClass('minimal'); 
          }
        else {
            $(this).addClass($style);
          }
          
          
      /*  width of menu list (non-toggled) */
      
      var $width = 0;
        $(this).find('ul li').each(function() {
          $width += $(this).outerWidth();
        });
        
      // if modern browser
      
      if ($.support.leadingWhitespace) {
        $(this).css('max-width' , $width*1.90+'px');
      }
      // 
      else {
        $(this).css('width' , $width*1.90+'px');
      }
    
    });
}
function getMobileMenu() {

  /*  build toggled dropdown menu list */
  
  $('.menu').each(function() {  
        var menutitle = $(this).attr("data-menu-title");
        if ( menutitle == "" ) {
          menutitle = "Menu";
        }
        else if ( menutitle == undefined ) {
          menutitle = "Menu";
        }
        var $menulist = $(this).children('.menu-main-list').html();
        var $menucontrols ="<div class='menu-toggled-controls'><div class='menu-toggled-title'>" + menutitle + "</div><div class='menu-button'><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div></div>";
        $(this).prepend("<div class='menu-toggled menu-closed'>"+$menucontrols+"<ul>"+$menulist+"</ul></div>");

    });
}

function adaptMenu() {
  
  /*  toggle menu on resize */
  
  $('.menu').each(function() {
      var $width = $(this).css('max-width');
      $width = $width.replace('px', ''); 
      if ( $(this).parent().width() < $width*1.00 ) {
        $(this).children('.menu-main-list').hide(0);
        $(this).children('.menu-toggled').show(0);
      }
      else {
        $(this).children('.menu-main-list').show(0);
        $(this).children('.menu-toggled').hide(0);
      }
    });
    
}

$(function() {

   responsiveMobileMenu();
   getMobileMenu();
   adaptMenu();
   
   /* slide down mobile menu on click */
   
   $('.menu-toggled, .menu-toggled .menu-button').click(function(){
    if ( $(this).is(".menu-closed")) {
       $(this).find('ul').stop().show(300);
       $(this).removeClass("menu-closed");
    }
    else {
      $(this).find('ul').stop().hide(300);
       $(this).addClass("menu-closed");
    }
    
  }); 

});
  /*  hide mobile menu on resize */
$(window).resize(function() {
  adaptMenu();
});



(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-masonry-projects').cubeportfolio({
        filters: '#js-filters-masonry-projects',
        loadMore: '#js-loadMore-masonry-projects',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 5
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 10000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },
    });
})(jQuery, window, document);


}); 