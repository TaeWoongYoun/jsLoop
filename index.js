// - 버튼0 누르면
// - 버튼0,1,2에 붙어있던 orange 클래스명 전부 제거하라고 코드 3줄 짜기
// - 버튼0에 orange 클래스명 부착
// - 박스0,1,2에 붙어있던 show 클래스명 전부 제거하라고 코드 3줄 짜기
// - 박스0에 show 클래스명 부착


// for(let i = 0; i < $('.tab-button').length; i++){

//     $('.tab-button').eq(i).on('click', function(){
//     탭열기(i)
//     })
// }

// $('.list').click(function(e){
    
//         탭열기(e.target.dataset.id)
    
// })

// function 탭열기(num){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(num).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(num).addClass('show');
// }

// // // array 자료형 + 자료간 정렬 가능, 중간에 자르기 가능
// // var car = ['소나타', 50000, 'white'];
// // //자료 추가 방법
// // car[3] = '아반떼';
// // console.log(car[3]);

// // //object 자료형
// var car2 = {name : '소나타', price : [50000, 3000, 40000]}
// // document.getElementById("name").innerHTML = car2.name;
// document.getElementById("price").innerHTML = car2.price[0];
// // car2.price = 60000; 
// console.log(car2.name);

var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];

document.querySelectorAll('.card-body h5')[0].innerHTML = products[0].title;
document.querySelectorAll('.card-body p')[0].innerHTML = ' 가격 : ' + products[0].price;

document.querySelectorAll('.card-body h5')[1].innerHTML = products[1].title;
document.querySelectorAll('.card-body p')[1].innerHTML = ' 가격 : ' + products[1].price;

document.querySelectorAll('.card-body h5')[2].innerHTML = products[2].title;
document.querySelectorAll('.card-body p')[2].innerHTML = ' 가격 : ' + products[2].price;

// `문자${a}문자`
// console.log(products[0].title);

// $('.tab-button').eq(1).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// })

// $('.tab-button').eq(2).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// })