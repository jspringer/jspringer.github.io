var lnStickyNavigation;

$(document).ready(function()
{ 
  // safariFontIssueFix();
  // activateStellarParallax();
  fadeInBlock();
  applyNavigation();
  fadeOutOnScrollDown(); 
  slideInOnScrollDown();
  slideUpOnScrollDown();
  titleToggle();
  downArrowToggle();
  navBarSlideDownOnScrollDown();
  iconAnimationOnScrollDown();
  applyMailTo();
  applyResize();
  checkHash();
  checkBrowser();
});

/* HEADER FUNCTIONS */

function applyHeader()
{
  $('.jumbotron').css({ height: ($(window).height()) +'px' });
  
  lazyLoad($('.jumbotron'));
} 

/* NAVIGATION FUNCTIONS */

function applyNavigation()
{
  applyNavigationFixForPhone();
  applyStickyNavigation();
}

function applyNavigationFixForPhone()
{
  $('.navbar li a').click(function(event) 
  {
    $('.navbar-collapse').removeClass('in').addClass('collapse');
  });
}

function applyStickyNavigation()
{
  lnStickyNavigation = $('.scroll-down').offset().top + 25;
  
  $(window).on('scroll', function() 
  {  
    stickyNavigation();  
  });  
  
  stickyNavigation();
}

function stickyNavigation() {         
  if($(window).scrollTop() > lnStickyNavigation) 
  {   
    $('body').addClass('fixed');  
  } 
  else 
  {  
    $('body').removeClass('fixed');   
  }  
}

/* MAILTO FUNCTION */

function applyMailTo() {
  $('a[href*=mailto]').on('click', function(e)
  {
    var lstrEmail = $(this).attr('href').replace('mailto:', '');
    
    lstrEmail = lstrEmail.split('').reverse().join('')
    
    $(this).attr('href', 'mailto:' + lstrEmail);
  });
}

/* RESIZE FUNCTION */

function applyResize()
{
  $(window).on('resize', function() 
  {  
    lnStickyNavigation = $('.scroll-down').offset().top + 20;
  
    $('.jumbotron').css({ height: ($(window).height()) +'px' });
  }); 
}

/* HASH FUNCTION */

function checkHash()
{
  lstrHash = window.location.hash.replace('#/', '#');
  
  if($('a[href='+ lstrHash +']').length > 0)
  {
    $('a[href='+ lstrHash +']').trigger('click');
  }
}

/* SAFARI FONT ISSUE FIX FUNCTION */

function safariFontIssueFix(){
    is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    is_safari = navigator.userAgent.indexOf("Safari") > -1;
    is_opera = navigator.userAgent.indexOf("Presto") > -1;
    is_mac = (navigator.userAgent.indexOf('Mac OS') != -1);
    is_windows = !is_mac;

    if (is_chrome && is_safari){
      is_safari=false;
    }

    if (is_safari || is_windows){
      $('.safari-font-fix').css('-webkit-text-stroke', '0.5px');  
      $('h1').css('letter-spacing', '-0.2px');  
      $('h2').css('letter-spacing', '-0.2px'); 
      $('h3').css('letter-spacing', '-0.2px');
      $('h4').css('letter-spacing', '-0.2px');
      $('h5').css('letter-spacing', '-0.2px');
      $('h6').css('letter-spacing', '-0.2px');
      // $('#title').css('-webkit-text-stroke', '1px'); 
    }

}

/* IE7- FALLBACK FUNCTIONS */

function checkBrowser()
{
  var loBrowserVersion = getBrowserAndVersion();
  
  if(loBrowserVersion.browser == 'Explorer' && loBrowserVersion.version < 8)
  { 
    $('#upgrade-dialog').modal({
      backdrop: 'static',
      keyboard: false
    });
  }
}

function getBrowserAndVersion() 
{
  var laBrowserData = [{
    string:     navigator.userAgent,
    subString:    'MSIE',
    identity:     'Explorer',
    versionSearch:  'MSIE'
  }];
  
  return {
    browser: searchString(laBrowserData) || 'Modern Browser',
    version: searchVersion(navigator.userAgent) || searchVersion(navigator.appVersion) || '0.0'
  };
}

function searchString(paData) 
{
  for(var i = 0; i < paData.length; i++)  
  {
    var lstrDataString  = paData[i].string;
    var lstrDataProp  = paData[i].prop;
    
    this.versionSearchString = paData[i].versionSearch || paData[i].identity;
    
    if(lstrDataString) 
    {
      if(lstrDataString.indexOf(paData[i].subString) != -1)
      {
        return paData[i].identity;
      }
    }
    else if(lstrDataProp)
    {
      return paData[i].identity;
    }
  }
}

/* FADE OUT ON SCROLL DOWN FUNCTION */

function fadeOutOnScrollDown() {
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    $('#title-container, .down-arrow').css({
        'opacity': ((height - (scrollTop*1.9)) / height)
    }); 
});
}

/* PAGE SCROLL TO ID FUNCTION */

(function($){
    $(window).on("load",function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({ scrollSpeed: 1200 });
    });
})(jQuery);


/* FADE IN DIV BLOCK FUNCTION */

function fadeInBlock() {
  $(window).scroll( function(){
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 100;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
        }); 
    
    });
}

/* SLIDE IN DIV ON SCROLL DOWN FUNCTION */

function slideInOnScrollDown() {
  $(window).scroll( function(){
       
        $('.slideInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 200;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).addClass('animated slideInLeft');
                    
            }
        }); 
    
    });
}

/* SLIDE IN UP DIV ON SCROLL DOWN FUNCTION */

function slideUpOnScrollDown() {
  $(window).scroll( function(){
       
        $('.slideUpBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window + 200;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).addClass('animated slideInUp');
                    
            }
        }); 
    
    });
}

/* ROTATE IN DIV ON SCROLL DOWN FUNCTION */

function iconAnimationOnScrollDown() {
  $(window).scroll( function(){
       
        $('.iconAnimation').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window + 200;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).addClass('animated rotateIn');
                    
            }
        }); 
    
    });
}

function navBarSlideDownOnScrollDown() {
  $(window).scroll(function () {
      if($(this).scrollTop() > ($(window).height() - 51))
      {
          if (!$('.navbar').hasClass('navbar-show'))
          {
              $('.navbar').stop().addClass('navbar-show').css('top', '-50px').animate(
                  {
                      'top': '0px'
                  }, 400);
          }
      }
      else
      {
          $('.navbar').removeClass('navbar-show');
      }
  });
}

function titleToggle() {
  $(window).scroll(function () {
      if($(this).scrollTop() > ($(window).height() + ($(window).height() * 0.8)))
      {
          if (!$('#fadeOutOnScrollDown').hasClass('hide'))
          {
              $('#fadeOutOnScrollDown').addClass('hide');
          }
      }
      else
      {
          $('#fadeOutOnScrollDown').removeClass('hide');
      }
  });
}

function downArrowToggle() {
  $(window).scroll(function () {
      if($(this).scrollTop() > ($(window).height() - ($(window).height()/1.06)))
      {
          if (!$('#down-arrow').hasClass('hide'))
          {
              $('#down-arrow').addClass('hide');
          }
      }
      else
      {
          $('#down-arrow').removeClass('hide');
      }
  });
}

/* STELLAR PARALLAX  
function activateStellarParallax() {
  $.stellar();
} */