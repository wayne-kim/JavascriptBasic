/**
 * Created by Napalm on 2016-01-18.
 */
/*
    문법을 익히기 이전에 해당 언어에서 지원하는 값의 종류에 대해 알아보자
    불리언, 숫자(부동소수), 문자열, 단순 객체, 배열
 */

//한줄 주석://
var x;
var y=5;
x = 3+y;
foo(x,y);
//06조건문 if
if(x===0){
    x=123;
}
//함수 정의
function foo(a,b){
    return a+b;
}
console.log(foo(x,y));

//06조건문
var a_man='woman';
if(a_man==='woman'){
    console.log("여자")
} else {
    console.log("남자")
}
var num1 = 10;
var num2 = 100;
var bignum = (num1>num2?num1:num2);
console.log("더 큰 숫자 : "+bignum);

//eval()을 통한 객체 리터럴 평가
console.log(eval('{foo:123}'));

//함수 즉시 호출
/*
(function () {
    return 'abc';
})
  :익명함수로 보고 에러 출력
function () {
    return 'abc';
}
*/

var obj = {function: 'abc'};
obj.function;

1..toString();
1 .toString();
(1).toString();
1.0.toString();