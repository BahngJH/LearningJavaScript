const x = 3;

function f(){
    console.log(x);
    //console.log(y);
}

{
    const y =5;
    f();
}

{
    //외부블록
    let x = 'blue';
    console.log(x);
    {
        //내부 블록
        let x = 3;
        console.log(x);
    }
    console.log(x);
}