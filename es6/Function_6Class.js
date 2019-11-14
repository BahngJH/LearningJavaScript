console.log(`여기서 부터 6장 시작!!!!!!!`)
function f(o){
    o.msg = "f에서 수정함";

    o = {
        msg : "새로운 객체"
    };
    console.log(`f 내부: o.msg = "${o.msg}" 할당 후`);
}

let o = {
    msg : "초기값"
}

console.log(`f를 호출하기 전: o.msg = "${o.msg}"`);
f(o);
console.log(`f를 호출한 다음: o.msg = "${o.msg}"`);

const q = {
    name: "Julie",
    greetBackwards: function(){
        function getReverseName(){
            let nameBackwards = '';
            for(let i=this.name.length-1; i>=0;i--){
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return console.log(`${getReverseName()} si eman ym, ollH`);
    },
};
q.greetBackwards();

const w = {
    name: "Julie",
    greetBackwards: function(){
        const self = this;
        console.log(self);
        function getReverseName(){
            let nameBackwards = '';
            for(let i=self.name.length-1; i>=0;i--){
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return console.log(`${getReverseName()} si eman ym, ollH`);
    },
};
w.greetBackwards();

//둘이 같은 코드
const f1 = function() {return "hello";}
const f2 = () => "hello";
console.log(f1());
console.log(f2());

//둘이 같은 코드
const r1 = function(name) { return `Hello, ${name}`; }
const r2 = name => `Hello, ${name}`;
console.log(r1());
console.log(r2());

const z1 = function(a,b) {return a + b;}
const z2 = (a,b) => a+b;
console.log(z1());
console.log(z2());


//Call
const bruce = {name:"Bruce"};
const madeline = {name:"Madeline"};

//이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
function greet(){
    return `Hello I'm ${this.name}`;
}

console.log(greet());               //Hello I'm 
console.log(greet.call(bruce));     //Hello I'm Bruce
console.log(greet.call(madeline));  //Hello I'm Madeline

function update(birthYear, occupation){
    this.birthYear = birthYear,
    this.occupation = occupation
}

update.call(bruce, 1994,'singer');
update.call(madeline, 1990,'actress');
console.log(bruce);
console.log(madeline);

//bind
const updateBruce = update.bind(bruce);

updateBruce(1904, 'actor');
console.log(bruce);
updateBruce.call(madeline, 1274, 'king');
console.log(bruce);

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949('singer, songwriter');