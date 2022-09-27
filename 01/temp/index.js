/* 기존함수선언방식
function funPrint(){
    console.log(n);
console.log("외부 자바 스크립트");
console.log("버튼"+1);
}
*/


//ES6+ : 화살표 함수 사용
const funPrint = (n) => {
 //   console.log(n);
 //   console.log("외부 자바 스크립트");
 console.log(`버튼${n}`);
}
/* jQuery
$document.ready(){

}
*/


// document.addEventListener("DOMcontentLoaded",콜백함수);
// document.addEventListener("DOMcontentLoaded", function() {});

// Dom이 생성이 되고 난 후에 요소를 수정해야함
document.addEventListener("DOMcontentLoaded", ()=>{
//   console.log(document.getElementById("root").innerHTML);
//let bt = document.createElement("button")
//document.getElementById("bt").append(bt);             //버튼추가


//요소찾기
//결과 HTML Collection
const bts1 = document.getElementByClassName("bt1")
console.log(bts1)
//결과 HTML Collection
const bts2 = document.getElementByTagName("button")
console.log(bts2)
//결과 Node
const bt3 = document.querySelector(".bt1");
console.log(bt3)
//결과 NodeList
const bt4 = document.querySelectorAll("bt1")
console.log(bt4)
});

//console.log("Dom test")
//console.log(document.getElementById("bt"))
