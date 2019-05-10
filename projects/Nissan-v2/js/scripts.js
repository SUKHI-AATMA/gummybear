var DEFAULTVARS = {
  winWidth: $(window).width(),
  winWidthOuter: $(window).outerWidth(),
  winHei: $(window).height(),
  mobBreakpoint: 768,
  tabBreakPoint: 1024,
  dstBreakPoint: 1900,
  didScroll: false,
  lastScrollTop: 0,
  navbarHeight: $('header').outerHeight(),
};
var GL = {
  init: function() {
    GL.events();
    GL.lazyLoad();
    var contPadd = DEFAULTVARS.winWidth > 768 ? $('header').outerHeight(true) + 20 : $('header').outerHeight(true);
    $('.centerCont').css({
      height: DEFAULTVARS.winHei
    }).css({
      padding: contPadd + 'px 0px'
    });
    $('.car').css({
      height: (DEFAULTVARS.winHei - (($('header').outerHeight(true) + 20) * 2))
    });
    $('.fp-bg').css({
      height: DEFAULTVARS.winHei
    });
    (DEFAULTVARS.winWidth > 768) ? ($('body').attr('data-view', 'desktop'), $('section.mobile').remove()) : ($('body').attr('data-view', 'mobile'), $('section[data-sec="18.1"]').remove());
    $('section').each(function() {
      var _this = $(this);
      _this.attr('data-move', _this.index() + 1);
    });
    GL.fullPageJs();
    $('.lftSec .svgL1,.rgtSec .svgL1').toggleClass('play');
    $('.btmSec .svgL2').toggleClass('play');
    setTimeout(function() { $('.btmSec .svgL3').toggleClass('play'); }, 207);
    // setTimeout(function() {
    //   GL.vCenterCont();
    // }, 3000)
    // Hide Header on on scroll down
    // $(window).scroll(function(event) {
    //   DEFAULTVARS.didScroll = true;
    // });
    // setInterval(function() {
    //   if (DEFAULTVARS.didScroll) {
    //     GL.hasScrolled();
    //     DEFAULTVARS.didScroll = false;
    //   }
    // }, 250);
  },
  events: function() {
    $(".hamburger").on('click', 'label', function() {
      $('.nav-list').toggleClass('is-active');
      GL.lazyLoad();
      if (DEFAULTVARS.winWidth < 768) {
        setTimeout(function() { $('.nav-list .middle').css({ height: $(window).height() - $('.nav-list .top').outerHeight() - $('.nav-list .bottom').outerHeight() - 20 }) }, 500);
      }
    })
    $('.nav-list').on('click', 'a', function() {
      $('.hamburger #chkbox').prop('checked', false);
      $('.nav-list').toggleClass('is-active');
    });
    $(window).on('resize', function() {
      GL.resize();
    }).on('scroll', function() {}).on('load', function() {
      GL.changeBg();
    });
    $('.infIco, .playButton, .modelData, .redButton').on('click', function() {
      GL.openPopup($(this));
      GL.lazyLoad();
    });
    $('.infIco, .playButton, .modelData, .redButton, .nav-list a').on('click', function() {
      GL.gaEvents($(this));
    });
    $('.closePopup').on('click', function() {
      $('.mbPopup').removeAttr('style').attr('class', 'mbPopup').find('.popupBody').removeAttr('style');
      $('.mbPopup .scroll').html('').removeAttr('style');
      $('html,body').removeClass('overflowH')
      $('.popOverlay').hide()
      // $('a.redButton').removeClass('is-active')
    });
    $(document).keyup(function(e) {
      if (e.keyCode == 122) {
        GL.resize();
      }
    });
  },
  resize: function() {
    DEFAULTVARS.winHei = $(window).height();
    DEFAULTVARS.winWidth = $(window).width();
    $('.centerCont').css({
      height: DEFAULTVARS.winHei
    }).css({
      padding: ($('header').outerHeight(true) + 20) + 'px 0px'
    });
    $('.car').css({
      height: (DEFAULTVARS.winHei - (($('header').outerHeight(true) + 20) * 2))
    });
    $('.fp-bg').css({
      height: DEFAULTVARS.winHei
    });
    (DEFAULTVARS.winWidth > 768) ? ($('body').attr('data-view', 'desktop'), $('section.mobile').remove()) : ($('body').attr('data-view', 'mobile'), $('section[data-sec="18.1"]').remove());
    setTimeout(function() {
      GL.vCenterCont();
    }, 1000)
  },
  load: function() {},
  changeBg: function() {
    $('section').each(function() {
      // if ($(this).has('data-sec')) {
      //   (DEFAULTVARS.winWidth <= 768) ?
      //   (
      //     $(this).find('.fp-bg').css({
      //       'background-image': 'url("images/bg768/' + $(this).attr('data-sec') + '.png") ',
      //       'background-repeat': 'no-repeat',
      //       'background-position': 'center',
      //       "background-size": $(this).attr('data-bgsize')
      //     })
      //   ) :
      //   (
      //     ($(this).find('.fp-bg').css({
      //         'background-image': 'url("images/bg1900/' + $(this).attr('data-sec') + '.png")',
      //         'background-repeat': ' no-repeat',
      //         'background-position': 'center',
      //         "background-size": "cover"
      //       }),
      //       $(this).find('.triangles').css({
      //         "background-image": 'url(images/triangles/' + $(this).attr('data-sec') + '.png)',
      //         "background-repeat": "no-repeat",
      //         "background-position": $(this).attr('data-bgPos'),
      //       }).css({
      //         height: DEFAULTVARS.winHei + 200
      //       }))
      //   );
      // };
    });
  },
  vCenterCont: function() {
    $('section.vcenter').each(function() {
      var thisEle = $(this);
      var vcHei = thisEle.find('.vc').outerHeight(true)
      if ($('body').attr('data-view') == "desktop" && thisEle.attr('data-sec') == 24) {
        vcHei = thisEle.find('.desktop.vc').outerHeight(true)
      }
      var a = ((thisEle.height() - ($('header').outerHeight(true) * 2)) - vcHei) / 2;
      thisEle.find('.vc').css({
        margin: a + 'px 0 0'
      })
    })
  },
  popPos: function(tagPopPos, tagPos, tag) {
    // console.log(tagPopPos);
    // console.log(tagPos);
    // console.log(tag.outerHeight(true));
    // $('.redPop').css({
    //   top: (tagPos.top + (tag.outerHeight() / 2) - 10),
    //   right: (DEFAULTVARS.winWidth - (tagPos.left + (tag.outerWidth() / 2)))
    // });
    // switch (tagPopPos) {
    //   case 'tr':
    //     $('.redPop').css({
    //       top: (tagPos.top + (tag.outerHeight() / 2) - 10),
    //       right: (DEFAULTVARS.winWidth - (tagPos.left + (tag.outerWidth() / 2))),
    //       left: 'auto'
    //     });
    //     break;
    //   case 'tl':
    //     $('.redPop').css({
    //       top: (tagPos.top + (tag.outerHeight() / 2) - 10),
    //       left: ((tagPos.left + (tag.outerWidth() / 2)) - 10),
    //       right: 'auto'
    //     });
    //     break;
    //   case 'bc':
    //     $('.redPop').css({
    //       bottom: (DEFAULTVARS.winHei - tagPos.top - (tag.outerHeight() / 2)),
    //       left: ((DEFAULTVARS.winWidth - $('.redPop').outerWidth(true)) / 2),
    //       right: 'auto',
    //       top: 'auto'
    //     });
    //     break;
    //   case 'bl':
    //     $('.redPop').css({
    //       bottom: (DEFAULTVARS.winHei - tagPos.top - (tag.outerHeight() / 2)),
    //       left: ((tagPos.left + (tag.outerWidth() / 2)) - 150),
    //       right: 'auto',
    //       top: 'auto'
    //     });
    //     break;
    //   case 'br':
    //     $('.redPop').css({
    //       bottom: (DEFAULTVARS.winHei - tagPos.top - (tag.outerHeight() / 2)),
    //       left: 'auto',
    //       right: (DEFAULTVARS.winWidth - (tagPos.left + (tag.outerWidth() / 2)) - 150),
    //       top: 'auto'
    //     });
    //     break;
    // }
  },
  openPopup: function(tag) {
    var data, fWid, fHei, tagPos = tag.offset(),
      tagPopPos = tag.attr('data-popupPos');
    $('html,body').addClass('overflowH')
    //$('.popOverlay').show();
    if (tag.hasClass('redButton')) {
      //$('.popOverlay').hide();
      data = $(tag).attr('data-popup');
      if (DEFAULTVARS.winWidth > 768) {
        (tag.hasClass('is-active')) ? ($('html,body').removeClass('overflowH'), tag.removeClass('is-active'), tag.parents('section').find('.redPop').remove()) : ($('.mbPopup').removeAttr('style').attr('class', 'mbPopup').find('.popupBody').removeAttr('style'), $('.mbPopup .scroll').html('').removeAttr('style'), $('body,html').addClass('overflowH'), $('a.redButton.is-active').click(), tag.addClass('is-active'), tag.parents('.sec').append('<div class="redPop">' + data + '</div>'), GL.popPos(tagPopPos, tagPos, tag))
      } else {
        $('body,html').addClass('overflowH'),
          $('.mbPopup').addClass('red'),
          $('.mbPopup .scroll').html(data),
          $('.mbPopup .popupBody,.mbPopup .scroll').height(DEFAULTVARS.winHei - 110)
      }
    }
    if (tag.attr('class') == 'playButton') {
      $('a.redButton').removeClass('is-active');
      $('.redPop').remove();
      $('.mbPopup').show();
      (DEFAULTVARS.winWidth <= 768) ? (fwid = '100%', fHei = '200px') : ($('.mbPopup').css({
        width: 'auto'
      }), fWid = '600px', fHei = '400px'),
      $('.mbPopup .scroll').html('<iframe width="' + fWid + '" height="' + fHei + '" src="' + tag.attr('data-vidUrl') + '" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>');
      $('.mbPopup').css({
        top: ((DEFAULTVARS.winHei - $('.mbPopup').outerHeight()) / 2),
        left: ((DEFAULTVARS.winWidth - $('.mbPopup').outerWidth()) / 2)
      })
    }
    if (tag.attr('class') == 'infIco') {
      $('a.redButton').removeClass('is-active');
      $('.redPop').remove();
      $('.mbPopup').show();
      $('.mbPopup').removeClass('red');
      $('a.redButton').removeClass('is-active');
      data = $(tag).parent().html();
      $('.mbPopup .scroll').html(data);
      if (DEFAULTVARS.winWidth > 768) {
        $('.mbPopup').show().css({
          width: '600px',
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        })
      } else {
        $('.mbPopup .popupBody,.mbPopup .scroll').height(DEFAULTVARS.winHei - 110)
      }
    }
    if (tag.attr('class') == 'modelData') {
      $('.mbPopup').show();
      data = $(tag).attr('data-popup');
      $('.mbPopup').addClass('white');
      $('.mbPopup .scroll').html(data);
      $('.mbPopup .popupBody,.mbPopup .scroll').height(DEFAULTVARS.winHei - 110)
    }
  },
  isInViewport: function(elem) {
    var elementTop = elem.offset().top;
    var elementBottom = elementTop + elem.outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  },
  lazyLoad: function() {
    $('.lazy').each(function() {
      if (GL.isInViewport($(this)) == true) {
        $(this).attr('src', $(this).attr('data-src'))
        $(this).removeAttr('data-src').removeClass('lazy')
      };
    })
  },
  fixedHeaderButtons: function(nextIndex) {
    if (nextIndex > 1 && nextIndex < 7) {
      $('.topBar .fixedButtons[data-sec="' + nextIndex + '"]').fadeIn().addClass('is-active').siblings('.fixedButtons').hide().removeClass('is-active');
    } else {
      $('.topBar .fixedButtons').fadeOut().removeClass('is-active');
    }
    // if (parseInt(nextIndex) == 18) {
    //   $('.topBar .fixedButtons').fadeOut();
    // } else if (parseInt(nextIndex) > 1 && parseInt(nextIndex) < 12) {
    //   $('.topBar .fixedButtons[data-sec="2"]').fadeIn().addClass('is-active').siblings('.fixedButtons').hide().removeClass('is-active');
    // } else if (parseInt(nextIndex) > 12 && parseInt(nextIndex) < 16) {
    //   $('.topBar .fixedButtons[data-sec="13"]').fadeIn().addClass('is-active').siblings('.fixedButtons').hide().removeClass('is-active');
    // } else if (parseInt(nextIndex) > 15 && parseInt(nextIndex) < 18) {
    //   $('.topBar .fixedButtons[data-sec="16.0"]').fadeIn().addClass('is-active').siblings('.fixedButtons').hide().removeClass('is-active');
    // } else if (parseInt(nextIndex) > 19 && parseInt(nextIndex) < 22) {
    //   $('.topBar .fixedButtons[data-sec="20"]').fadeIn().addClass('is-active').siblings('.fixedButtons').hide().removeClass('is-active');
    // } else if (parseInt(nextIndex) > 21 && parseInt(nextIndex) < 24) {
    //   $('.topBar .fixedButtons[data-sec="23"]').fadeIn().addClass('is-active').siblings('.fixedButtons').hide().removeClass('is-active');
    // } else { $('.topBar .fixedButtons').fadeOut().removeClass('is-active'); }
    // $('.topBar').css({ width: (($('.topBar .is-active a.redBoxButton').outerWidth(true) * $('.topBar .is-active a.redBoxButton').length) + 25) })
  },
  fullPageJs: function() {
    $('.para').fullpage({
      anchors: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16.0", "16", "17", "18", "18.1", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
      normalScrollElements: '.scroll',
      onLeave: function(index, nextIndex, direction) {
        $('.mbPopup').removeClass('red').removeAttr('style');
        $('a.redButton.is-active').click(),
          GL.changeBg();
        GL.lazyLoad();
        $('.slider-wrapper .inner article').each(function() {
          var thisEle = $(this)
          thisEle.css({ padding: ($('.inner').outerHeight(true) - thisEle.outerHeight(true)) / 2 + 'px 0' });
        });
        var scrolledSec = 'scrolled to section' + window.location.hash.substr(1);
        ga('send', 'event', scrolledSec, '', '', 0);
        // var d1 = [1 , 4 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 16.0 , 18 , 19 , 21 , 23 , 25], 
        //     d2 = [2 , 3 , 5 , 14 , 15 , 16 , 17 , 20 , 22 , 24 , 26];
        var trans, transT;
        if (direction == 'down') {
          trans = -100, transT = -10;
        } else if (direction == 'up') {
          trans = 100, transT = 10
        }
        $('section[data-move="' + index + '"]').find('.centerCont').css({ 'transform': 'translateY(' + trans + 'px)', 'opacity': 0, 'transition': 'opacity 0.5s 0.3s ease, transform 0.5s ease' })
        // $('section[data-move="' + index + '"]').find('.triangles').css({ 'transform': 'translateY(' + transT + '%)', 'opacity': 0, 'transition': 'opacity 0.5s 0.3s ease, transform 0.5s ease' })
        // console.log(direction)
        // console.log(parseFloat(index))
        // console.log($('section').eq(index).attr('data-sec'))
        // console.log(trans)
        // console.log(nextIndex == index)
        // if(nextIndex == index)
        // {
        //   console.log(1)
        // }
        /* if (DEFAULTVARS.winWidth > 768) {*/
        // console.log('on leave: '+index)
        // index = index -1;
        // if(index < 0)
        // {
        //   index = 0;
        // }
        // } else {
        //   console.log(1);
        //$('section').eq(index).find('.centerCont').css({ 'transform': 'translateY(' + trans + 'px)', 'opacity': 0, 'transition': 'opacity 0.5s 0.3s ease, transform 0.5s ease' })
        // }
        // setTimeout(function() {
        //   $('[data-sec="' + index + '"] .lftSec .svgL1,[data-sec="' + index + '"] .rgtSec .svgL1,[data-sec="' + index + '"] .btmSec .svgL2,[data-sec="' + index + '"] .btmSec .svgL3').removeClass('play');
        // }, 1000);
        // console.log(1);
      },
      afterLoad: function(anchorLink, index) {
        GL.lazyLoad();
        var secActive = $('section.active').attr('data-sec');
        GL.fixedHeaderButtons(secActive);
        var nxtSec = 'section.active';
        if ($(nxtSec).hasClass('darkBg')) {
          $('nav').addClass('white')
        } else {
          $('nav').removeClass('white')
        }
        var contPadd = DEFAULTVARS.winWidth > 768 ? $('header').outerHeight(true) + 20 : $('header').outerHeight(true);
        
        $('section[data-move="' + index + '"]').find('.centerCont').css({ 'transform': 'translateY(0)', 'opacity': 1, 'transition': 'opacity 0.5s 0.3s ease, transform 1s ease', 'padding' : contPadd + 'px 0px' });
        // setTimeout(function() {
        //   $('[data-sec="' + index + '"] .lftSec .svgL1,[data-sec="' + index + '"] .rgtSec .svgL1').addClass('play');
        //   $('[data-sec="' + index + '"] .btmSec .svgL2').addClass('play');
        // }, 1000);
        // setTimeout(function() { $('[data-sec="' + index + '"] .btmSec .svgL3').addClass('play'); }, 200);
        // $('section[data-move="' + index + '"]').find('.triangles').css({ 'transform': 'translateY(0)', 'opacity': 0.5, 'transition': 'opacity 0.5s 0.3s ease, transform 1s ease' })
        // index = index -1;
        // if(index < 0)
        // {
        //   index = 0;
        // }
        /*if (DEFAULTVARS.winWidth > 768) {*/
        // $('section[data-move="' + index + '"]').find('.centerCont').css({ 'transform': 'translateY(0px)', 'opacity': 1, 'transition': 'opacity 0.5s 0.3s ease, transform 1s ease' })
        // } else {
        //$('section').eq(index).find('.centerCont').css({ 'transform': 'translateY(0px)', 'opacity': 1, 'transition': 'opacity 0.5s 0.3s ease, transform 1s ease' })
        // }
      },
      afterRender: function() {
        GL.vCenterCont();
      }
    })
    // $('section').eq(0).find('.centerCont').css({ 'transform': 'translateY(0px)', 'opacity': 1, 'transition': 'opacity 0.5s 0.5s ease, transform 0.5s 0.5s ease' })
    // $('section').eq(0).find('.triangles').css({ 'transform': 'translateY(0px)', 'opacity': 0.5, 'transition': 'opacity 0.5s 0.5s ease, transform 0.5s 0.5s ease' })
  },
  toggleFullScreen: function() {
    var doc = window.document;
    var docEl = doc.documentElement;
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
    } else {
      cancelFullScreen.call(doc);
    }
  },
  hasScrolled: function() {
    var st = $(window).scrollTop();
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > DEFAULTVARS.lastScrollTop) {
      // Scroll Down
      GL.toggleFullScreen(true);
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        GL.toggleFullScreen(false);
      }
    }
    DEFAULTVARS.lastScrollTop = st;
  },
  gaEvents: function(tag) {
    var section = window.location.hash.substr(1),
      btnType,
      xtraInfo = tag.attr('data-xtrainfo') || 'not-table',
      eve = $('body').attr('data-view');
    console.log(tag.attr('class'));
    switch (tag.attr('class')) {
      case 'playButton':
        btnType = 'video';
        break;
      case 'redButton':
        btnType = 'plus-close';
        break;
      case 'redButton is-active':
        btnType = 'plus';
        break;
      case 'modelData':
        btnType = 'table';
        break;
      case 'infIco':
        btnType = 'info';
        break;
      default:
        btnType = 'nav'
    }
    var clickEvent = eve + ' -- Clicked on ' + btnType + ' btn in section ' + section + ' is ' + xtraInfo;
    console.log(clickEvent);
    ga('send', 'event', clickEvent, btnType, xtraInfo, section);
  }
};
GL.init();
//GL.events();
// GL.changeBg();