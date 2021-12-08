//let은 변화가능한 변수 const는 바뀔수 없는 변수
const c = 5;
const d = 7;

// 배열
const e = ["a", "b", "c"];
console.log(e[1]);

// 클래스는 이렇게 생성한다.
const calculator = {
    add: function (a, b) {
        return (a + b);
    },
    name: "star"


};

const value = calculator.add(c, d);
console.log(calculator.name);
console.log(value);

const human = {
    body: "big",
    hand: "small",
    leg: "long"
}

const value2 = power(c, d);
console.log(value2);
console.log(human)

// 함수는 이렇게 만든다.
function power(a, b) {
    return (a ** b);
}


//조건문은 이렇게 설정한다.

const age = parseInt(prompt("write your age"));
if (isNaN(age)) {
    alert("다시 입력하세요");
} else {
    alert("your age is" + age);
}
//document 객체를 사용하여 html에 있는 요소를 끌고올수 있다.
const title = document.getElementById("title");
title.innerText = "hi!";