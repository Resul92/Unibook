$(document).ready(function(){
//Loader
	$(window).on('load', function(){
		$('.loader-block').delay(500).fadeOut('slow');
		$('body').css('overflow', 'visible');
	});

	$(window).scroll(function(){
		var mainSectionHeight = $('.main-section').height() - 200,
			navScrollTop = $(this).scrollTop();

		if(navScrollTop > mainSectionHeight) {
			$('.nav').addClass('scrolled');
		} else {
			$('.nav').removeClass('scrolled');
		}
	});

//nav-trigger
	$('.nav-trigger').on('click', function(e){
		e.preventDefault();
		var nav = $('nav'),
			_this = $(this),
			_thisActive = _this.hasClass('active-trigger');

		if(_thisActive) {
			nav.fadeOut(200);
		} else {
			nav.fadeIn(200);
		}

		_this.toggleClass('active-trigger');		
	});


// Input
	$('.field-input').focus(function() {
		$(this).parent().addClass('is-focused has-label');
	})

	$('.field-input').blur(function() {
		$parent = $(this).parent();
		if($(this).val() ==''){
			$parent.removeClass('has-label');
		}

		$parent.removeClass('is-focused');
	})

// aside-nav
	$('.selected-structure .structure-btn').on('click', function(e){
		e.preventDefault();
		$(this).siblings('.aside-nav-list').slideToggle(300);
	});

// Active left-aside
	$('.aside-trigger').on('click', function(e){
		e.preventDefault();

		$(this).toggleClass('active-aside-trigger');
		if( $(this).hasClass('active-aside-trigger') ) {
			$('.left-aside').addClass('active-left-aside');
		} else {
			$('.left-aside').removeClass('active-left-aside');
		}
	});
	

// Popup
	
	$('.open-popup').on('click', function(e){
		e.preventDefault();

		var thisPopup = $(this).attr('data-popup');
		$('.popup').removeClass('opened-popup');
		if(!$('#' + thisPopup).hasClass('opened-popup')){
			$('#' + thisPopup).addClass('opened-popup');	
		}
		
	});

	$(document).mouseup(function (e) {
		var popup = $(".popup");
		if (!popup.is(e.target) && popup.has(e.target).length == 0) {
			popup.removeClass('opened-popup');
		}
	});

// Custom select
$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});


// grid
	var $grid = $('.grid').masonry({
		columnWidth: '.grid-sizer',
		itemSelector: '.grid-item',
		percentPosition: true
	});

	$grid.imagesLoaded().progress(function(){
		$grid.masonry();
	});
});

// select2
$(".student-faculty").select2();










