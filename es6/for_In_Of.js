console.log(`여기서 부터 For_In_Of 시작!!!!!!!`)
const player = {name:'Thomas', rank:'Midshipman', age:25};

for(let prop in player){
    if(!player.hasOwnProperty(prop)) continue;
    console.log(prop+ ':' + player[prop]);
}

function rand(m,n) {
    return m + Math.floor((n-m+1)*Math.random());
}

function randFace(){
    return ["crown", "anchor", "heart", "spade", "club", "diamond"] 
    [rand(0,5)];
}

const hand =[randFace(),randFace(),randFace()];

for(let face of hand){
    console.log(`You rolled...${face}`);
}
//문자열 병합
console.log(3+5+"8 > 3+5+'8'" );
console.log('3'+5+8 +" > '3'+5+8 ");

//해체 할당
const obj = {b:2,c:3,d:4}
const {a,b,c} = obj;
console.log(a,b,c);

