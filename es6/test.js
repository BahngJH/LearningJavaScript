'use strict';
//es6 기능: 블록 스코프 변수 선언
const sentences = [
    {subject:'JavaScript', verb:'is', object:'great'},
    {subject:'Elephants', verb:'are', object:'large'}
];

//es6 기능: 객체 분해
function say({subject, verb, object}) {
    //노트북에서 git clone 테스트 하고 푸시 테스트
    //es6기능 : 템플릿 문자열
    //아래 사용한 것은 따옴표가 아니라 백틱(`), 즉 키보드의 탭 키 위에 있는 문자
    console.log(`${subject} ${verb} ${object}`);
}

//es6 기능: for..of
for(let s of sentences){
    say(s);
}