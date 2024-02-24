// - 버튼0 누르면
// - 버튼0,1,2에 붙어있던 orange 클래스명 전부 제거하라고 코드 3줄 짜기
// - 버튼0에 orange 클래스명 부착
// - 박스0,1,2에 붙어있던 show 클래스명 전부 제거하라고 코드 3줄 짜기
// - 박스0에 show 클래스명 부착

var 제거 = $('.tab-button').removeClass('orange');
var 삭제 = $('.tab-content').removeClass('show');

$('.tab-button').eq(0).on('click', function(){
    제거
    $('.tab-button').eq(0).addClass('orange');
    삭제
    $('.tab-content').eq(0).addClass('show');
})

$('.tab-button').eq(1).on('click', function(){
    제거
    $('.tab-button').eq(1).addClass('orange');
    삭제
    $('.tab-content').eq(1).addClass('show');
})

$('.tab-button').eq(2).on('click', function(){
    제거
    $('.tab-button').eq(2).addClass('orange');
    삭제
    $('.tab-content').eq(2).addClass('show');
})