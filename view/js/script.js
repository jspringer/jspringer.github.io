var lnStickyNavigation;

$(document).ready(function()
{ 
  // applyHeader();
  // pageScrollToId();
  safariFontIssueFix();
  fadeInBlock();
  hoverAnimations();
  applyNavigation(); 
  applyMailTo();
  applyResize();
  checkHash();
  checkBrowser();
  fadeOutOnScrollDown();

});

/* HEADER FUNCTIONS */

function applyHeader()
{
  $('.jumbotron').css({ height: ($(window).height()) +'px' });
  
  lazyLoad($('.jumbotron'));
} 

function lazyLoad(poContainer)
{
  /*var lstrSource   = poContainer.attr('data-src');
  var lstrPosition = poContainer.attr('data-position');

  $('<img>').attr('src', lstrSource).load(function()
  {
    poContainer.css('background-image', 'url("'+ lstrSource +'")');
    poContainer.css('background-position', lstrPosition);
    poContainer.css('-ms-filter', '"progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + lstrSource + '\', sizingMethod=\'scale\')"');
    poContainer.css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + lstrSource + '\', sizingMethod=\'scale\'');
  });*/
}

/* NAVIGATION FUNCTIONS */

function applyNavigation()
{
  // applyClickEvent();
  applyNavigationFixForPhone();
  // applyScrollSpy(); 
  applyStickyNavigation();
}

function applyClickEvent()
{
  $('a[href*=#]').on('click', function(e)
  {
    e.preventDefault();
    
    if( $( $.attr(this, 'href') ).length > 0 )
    {
      $('html, body').animate(
      {
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 400);
    }
    return false;
  });
}

function applyNavigationFixForPhone()
{
  $('.navbar li a').click(function(event) 
  {
    $('.navbar-collapse').removeClass('in').addClass('collapse');
  });
}

function applyScrollSpy()
{
  $('#navbar-example').on('activate.bs.scrollspy', function() 
  {
    window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
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

function stickyNavigation()
{         
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

function applyMailTo()
{
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
  
function searchVersion(pstrDataString) {
  var lnIndex = pstrDataString.indexOf(this.versionSearchString);
  
  if(lnIndex == -1) 
  {
    return;
  }
  
  return parseFloat(pstrDataString.substring(lnIndex + this.versionSearchString.length + 1));
} 

function hoverAnimations() {
      $(function() {
          $('#linkedin').hover(function(){  
              $('#nav-icon-linkedin').addClass('animated tada color-linkedin');     
          },
          function(){ 
              $('#nav-icon-linkedin').removeClass('animated tada color-linkedin');  
          });
          $('#github').hover(function(){     
              $('#nav-icon-github').addClass('animated rubberBand color-github'); 
          },
          function(){ 
              $('#nav-icon-github').removeClass('animated rubberBand color-github');  
          });
          /* $('#codepen').mouseenter(function(){     
              $('.codepen').transition('jiggle');    
          },
          function(){ 
              $('.').removeClass('teal');  
          }); */
          $('#twitter').hover(function(){     
              $('#nav-icon-twitter').addClass('animated tada color-twitter');    
          },
          function(){ 
              $('#nav-icon-twitter').removeClass('animated tada color-twitter');  
          });
          $('#music').hover(function(){     
              $('#nav-icon-music').addClass('animated rubberBand color-music');    
          },
          function(){ 
              $('#nav-icon-music').removeClass('animated rubberBand color-music');  
          });
  });
}

function fadeInBlock() {
  $(window).scroll( function(){
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 300;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},600);
                    
            }
        }); 
    
    });
}

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

function fadeOutOnScrollDown() {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    $('.fadeOutOnScrollDown').css({
        'opacity': ((height - scrollTop) / height)
    }); 
  });
}

(function($){
    $(window).on("load",function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({ scrollSpeed: 1200 });
    });
})(jQuery);