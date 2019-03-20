const $body = $('body');
const $eye = $('.eye');
const $pupil = $('.pupil');
const $switchWrapper = $('.switch-wrapper');
const $animalBody = $('#animal-body');


const swing = () => {
  $switchWrapper.addClass('swing');

  setTimeout(() => {
    $switchWrapper.removeClass('swing');
  }, 1000);
};

const randomAnimal = () => {
  let arr = ['https://res.cloudinary.com/tinachangcodes/image/upload/v1549635328/bear_wgyw8f.png','https://res.cloudinary.com/tinachangcodes/image/upload/v1549635293/bunny_kpofl4.png'];
  return arr[Math.floor(Math.random() * arr.length)];
};

$('.switch').on('click', () => {
  if ($body.hasClass('lightsOn')) {
    $body.removeClass('lightsOn').addClass('lightsOff');
    $pupil.removeClass('center');
    $animalBody.addClass('hide');

  } else {
    $('.lightsOff').find('.eye').css('transform', 'rotate(0deg)'); 
    $body.addClass('lightsOn').removeClass('lightsOff');
    $pupil.addClass('center');
    $animalBody.removeClass('hide').attr('src', randomAnimal());
  }

  swing();
});

$('.string').on('mouseenter', swing);


//the following code is referencing from Codewoofy: https://codepen.io/Codewoofy/pen/VeBJEP
$body.mousemove(event => {
  event.preventDefault();
  let x = ($eye.offset().left) + ($eye.width() / 2);
  let y = ($eye.offset().top) + ($eye.height() / 2);
  let rad = Math.atan2(event.pageX - x, event.pageY - y);
  let rot = (rad * (180 / Math.PI) * -1) + 180;
  $('.lightsOff').find('.eye').css({'transform': 'rotate(' + rot + 'deg)'});
});

$('.tab .menus li').each(function(){
    $('.tab .menus li').mouseover(function(){
        $('.tab .menus li').removeClass('bg');
        $(this).addClass('bg');
        var index = $(this).index();
        var arr = [
            '../img/a1.png',
            '../img/a2.png',
            '../img/a3.png',
            '../img/a4.png',
            '../img/a5.png',
            '../img/a6.png',
            '../img/a7.png',
            '../img/a5.png',
            '../img/a4.png'
        ] // 背景图片  不需要注释即可
        $('.tab .scroll').css('margin-top',-index*800+'px');
        $('.tab').css('background-image','url('+arr[index]+')')// 背景图片  不需要注释即可
    })
})