// const cards = document.querySelectorAll('.card');
//
// function flipCard() {
//   this.classList.toggle('flip');
// }
//
// cards.forEach(card => card.addEventListener('click', flipCard));


$( ".strelka1" ).click(function() {
  $( "#ss2" ).removeClass("hidden");
  $( "#ss1" ).addClass("hidden");
});
$( ".strelka2" ).click(function() {
  $( "#ss1" ).removeClass("hidden");
  $( "#ss2" ).addClass("hidden");
});
$( ".buttonstart" ).click(function() {
  $( ".startscreen, .phon" ).addClass("hidden");
  $( "body" ).css("overflow", "visible");
});
$(".buttonrestart").click(function() {
   location.reload();
});


// дрожание карточки
$("#r1").click(function()
{
  $("#n1").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n1").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r2").click(function()
{
  $("#n2").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n2").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r4").click(function()
{
  $("#n4").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n4").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r7").click(function()
{
  $("#n7").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n7").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r8").click(function()
{
  $("#n8").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n8").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r10").click(function()
{
  $("#n10").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n10").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r12").click(function()
{
  $("#n12").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n12").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r13").click(function()
{
  $("#n13").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n13").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r14").click(function()
{
  $("#n14").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n14").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r17").click(function()
{
  $("#n17").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n17").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r19").click(function()
{
  $("#n19").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n19").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r20").click(function()
{
  $("#n20").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n20").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r21").click(function()
{
  $("#n21").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n21").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r23").click(function()
{
  $("#n23").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n23").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);
$("#r25").click(function()
{
  $("#n25").toggle("shake", {times:1, mode:"hide"}, 300, function(){
    $("#n25").toggle("shake", {times:1, mode:"show"}, 300);
    });
  }
);

// удаление карточки
$( "#r3" ).click(function() {
  $( "#n3" ).remove();
});
$( "#r5" ).click(function() {
  $( "#n5" ).remove();
});
$( "#r6" ).click(function() {
  $( "#n6" ).remove();
});
$( "#r9" ).click(function() {
  $( "#n9" ).remove();
});
$( "#r11" ).click(function() {
  $( "#n11" ).remove();
});
$( "#r15" ).click(function() {
  $( "#n15" ).remove();
});
$( "#r16" ).click(function() {
  $( "#n16" ).remove();
});
$( "#r18" ).click(function() {
  $( "#n18" ).remove();
});
$( "#r22" ).click(function() {
  $( "#n22" ).remove();
});
$( "#r24" ).click(function() {
  $( "#n24" ).remove();
});

// прогресс бар
$(function() {
  let count = 0;
  $("#r3, #r5, #r6, #r9, #r11, #r15, #r16, #r18, #r22, #r24").click(function() {
    count += 1;
    if (count ==1) {
      $("#pr1").removeClass("hidden");
    }
    else if (count ==2) {
      $("#pr2").removeClass("hidden");
    }
    else if (count ==3) {
      $("#pr3").removeClass("hidden");
    }
    else if (count ==4) {
      $("#pr4").removeClass("hidden");
    }
    else if (count ==5) {
      $("#pr5").removeClass("hidden");
    }
    else if (count ==6) {
      $("#pr6").removeClass("hidden");
    }
    else if (count ==7) {
      $("#pr7").removeClass("hidden");
    }
    else if (count ==8) {
      $("#pr8").removeClass("hidden");
    }
    else if (count ==9) {
      $("#pr9").removeClass("hidden");
    }
    else if (count ==10) {
      $("#pr10").removeClass("hidden");
      setTimeout(function(){
        $(".buttondone").css("background-color","black");
        $( ".buttondone" ).click(function() {
          $( ".finalscreen, .phon" ).removeClass("hidden");
          $( "body" ).css("overflow", "hidden");
        });
      }, 1);
    }
  }
);
})

// перевод слова
$('#k1').click(function(){
  if (!$("#w1").data('status')) {
    $("#w1").html('car');
    $("#w1").data('status', true);
  }
  else {
    $("#w1").html('машина');
    $("#w1").data('status', false);
  }
});
$('#k2').click(function(){
  if (!$("#w2").data('status')) {
    $("#w2").html('lápiz');
    $("#w2").data('status', true);
  }
  else {
    $("#w2").html('карандаш');
    $("#w2").data('status', false);
  }
});
$('#k3').click(function(){
  if (!$("#w3").data('status')) {
    $("#w3").html('熊');
    $("#w3").data('status', true);
  }
  else {
    $("#w3").html('медведь');
    $("#w3").data('status', false);
  }
});
$('#k4').click(function(){
  if (!$("#w4").data('status')) {
    $("#w4").html('chiave');
    $("#w4").data('status', true);
  }
  else {
    $("#w4").html('ключ');
    $("#w4").data('status', false);
  }
});
$('#k5').click(function(){
  if (!$("#w5").data('status')) {
    $("#w5").html('orasan');
    $("#w5").data('status', true);
  }
  else {
    $("#w5").html('часы');
    $("#w5").data('status', false);
  }
});
$('#k6').click(function(){
  if (!$("#w6").data('status')) {
    $("#w6").html('鍵');
    $("#w6").data('status', true);
  }
  else {
    $("#w6").html('ключ');
    $("#w6").data('status', false);
  }
});
$('#k7').click(function(){
  if (!$("#w7").data('status')) {
    $("#w7").html('kẹo');
    $("#w7").data('status', true);
  }
  else {
    $("#w7").html('конфета');
    $("#w7").data('status', false);
  }
});
$('#k8').click(function(){
  if (!$("#w8").data('status')) {
    $("#w8").html('가위');
    $("#w8").data('status', true);
  }
  else {
    $("#w8").html('ножницы');
    $("#w8").data('status', false);
  }
});
$('#k9').click(function(){
  if (!$("#w9").data('status')) {
    $("#w9").html('şemsiye');
    $("#w9").data('status', true);
  }
  else {
    $("#w9").html('зонт');
    $("#w9").data('status', false);
  }
});
$('#k10').click(function(){
  if (!$("#w10").data('status')) {
    $("#w10").html('balloon');
    $("#w10").data('status', true);
  }
  else {
    $("#w10").html('шар');
    $("#w10").data('status', false);
  }
});
$('#k11').click(function(){
  if (!$("#w11").data('status')) {
    $("#w11").html('nudle');
    $("#w11").data('status', true);
  }
  else {
    $("#w11").html('лапша');
    $("#w11").data('status', false);
  }
});
$('#k12').click(function(){
  if (!$("#w12").data('status')) {
    $("#w12").html('蘋果');
    $("#w12").data('status', true);
  }
  else {
    $("#w12").html('яблоко');
    $("#w12").data('status', false);
  }
});
$('#k13').click(function(){
  if (!$("#w13").data('status')) {
    $("#w13").html('nouilles');
    $("#w13").data('status', true);
  }
  else {
    $("#w13").html('лапша');
    $("#w13").data('status', false);
  }
});
$('#k14').click(function(){
  if (!$("#w14").data('status')) {
    $("#w14").html('saat');
    $("#w14").data('status', true);
  }
  else {
    $("#w14").html('часы');
    $("#w14").data('status', false);
  }
});
$('#k15').click(function(){
  if (!$("#w15").data('status')) {
    $("#w15").html('太陽');
    $("#w15").data('status', true);
  }
  else {
    $("#w15").html('солнце');
    $("#w15").data('status', false);
  }
});
$('#k16').click(function(){
  if (!$("#w16").data('status')) {
    $("#w16").html('水');
    $("#w16").data('status', true);
  }
  else {
    $("#w16").html('вода');
    $("#w16").data('status', false);
  }
});
$('#k17').click(function(){
  if (!$("#w17").data('status')) {
    $("#w17").html('dveře');
    $("#w17").data('status', true);
  }
  else {
    $("#w17").html('дверь');
    $("#w17").data('status', false);
  }
});
$('#k18').click(function(){
  if (!$("#w18").data('status')) {
    $("#w18").html('drzwi');
    $("#w18").data('status', true);
  }
  else {
    $("#w18").html('дверь');
    $("#w18").data('status', false);
  }
});
$('#k19').click(function(){
  if (!$("#w19").data('status')) {
    $("#w19").html('regnbue');
    $("#w19").data('status', true);
  }
  else {
    $("#w19").html('радуга');
    $("#w19").data('status', false);
  }
});
$('#k20').click(function(){
  if (!$("#w20").data('status')) {
    $("#w20").html('auge');
    $("#w20").data('status', true);
  }
  else {
    $("#w20").html('глаз');
    $("#w20").data('status', false);
  }
});
$('#k21').click(function(){
  if (!$("#w21").data('status')) {
    $("#w21").html('cipő');
    $("#w21").data('status', true);
  }
  else {
    $("#w21").html('ботинок');
    $("#w21").data('status', false);
  }
});
$('#k22').click(function(){
  if (!$("#w22").data('status')) {
    $("#w22").html('아이스크림');
    $("#w22").data('status', true);
  }
  else {
    $("#w22").html('мороженое');
    $("#w22").data('status', false);
  }
});
$('#k23').click(function(){
  if (!$("#w23").data('status')) {
    $("#w23").html('στόμα');
    $("#w23").data('status', true);
  }
  else {
    $("#w23").html('рот');
    $("#w23").data('status', false);
  }
});
$('#k24').click(function(){
  if (!$("#w24").data('status')) {
    $("#w24").html('ลูกบอล');
    $("#w24").data('status', true);
  }
  else {
    $("#w24").html('мяч');
    $("#w24").data('status', false);
  }
});
$('#k25').click(function(){
  if (!$("#w25").data('status')) {
    $("#w25").html('bear');
    $("#w25").data('status', true);
  }
  else {
    $("#w25").html('медведь');
    $("#w25").data('status', false);
  }
});
