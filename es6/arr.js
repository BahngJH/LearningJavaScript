console.log(`여기서 부터 8장 배열과 배열처리 시작!!!!!!!`);

const arr = [1,2,3];
var newArr = arr.concat([4,[5,6]],7);

console.log(arr);	//[1,2,3]
console.log(newArr);	//[1,2,3,4,[5,6],7

const arr3 = [1,2,3,4];

console.log(arr3.copyWithin(1,2));		//arr은 이제 [1,3,4,4]입니다.
console.log(arr3.copyWithin(2,0,2));		//arr은 이제 [1,3,1,3]입니다.
console.log(arr3.copyWithin(0,-3,-1));	//arr은 이제 [3,1,1,3]입니다.

const arr2 = new Array(5).fill(1);
console.log(arr2);
console.log(arr2.fill("a"));
console.log(arr2.fill("b",1));
console.log(arr2.fill("c",2,4));
console.log(arr2.fill(5.5,-4));
console.log(arr2.fill(0,-3,-1));

const objectSort = [{
        name: "Suzanne"
    },{
        name: "Jim"
    },{
        name: "Trvor"
    },{
        name:"Amanda"
    }
];

//정렬되지 않았음
objectSort.sort();
//name 프로퍼티의 알파벳 순으로 정렬, 
objectSort.sort((a,b) => a.name > b.name? 1 : -1);
//name 프로퍼티의 두 번째 글자의 알파벳 역순으로 정렬
objectSort.sort((a,b) => a.name[1] < b.name[1]);

const ar = [{ id:5, name:"Judith"}, {id:7, name:"Francis"},5,2];
ar.find(o => o.id === 5);
ar.find(o => o.id === 2);

const ar2 = [1,17,16,5,4,16,10,3,49];

arr.find((x,i) => i>2 && Number.isInteger(Math.sqrt(x)));

const someArr = [5,7,12,15,17];
someArr.some(x => x%2===0);

const cart = [{name:"Widget", price:9.95},{name:"Gadget", price:22.95}];
const names = cart.map(x => x.name);
const prices = cart.map(x => x.price);
const discount = cart.map(x => x.price*0.8);

const items = ["Widget","Gadget"];
const prices2 = [9.94, 22.94];
const cart2 = items.map((x,i) => ({name:x, price:prices2[i]}));
console.log(cart2);

//카드덱을 만들어보자
const cards = [];
for(let suit of ['H','C','D','S'])
    for(let value=1; value<13;value++)
        cards.push({suit,value});

console.log(cards.filter(c => c.value===2));

function cardToString(c){
    const suits = {'H':'\u2665', 'C':'\u2663', 'D':'\u2666', 'S':'\u2660'};
    const values = {1:'A', 11:'J', 12:'Q', 13:'K'};

    for(let i=2; i<=10; i++){
        values[i] = i;  
    }
    return values[c.value] + suits[c.suit];
}

console.log(cards.filter(c =>c.value===2).map(cardToString));

const wq = [5,7,2,4];
const sum = wq.reduce((a,x) => a +=x,1);
console.log(sum);

const attributes = ['Nimble', 'Perceptive', 'Generous'];
const html ='<ul><li>' + attributes.join('</li><li>') + '</li></ul>';   
