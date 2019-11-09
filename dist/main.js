
//브라우저가 html을 전부 불러들였는지 확인하고 자바스크립트 파일을 실행시킨다.
$(document).ready(function(){
    //자바스크립트 인터프리터에서 코드를 더 엄격하게 처리하라는 명령어
    'use strict';

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    //TODO (그림 그리는 코드가 들어갈 자리)
    //원을 만들고 x,y좌표와 원의 반지름이 매개변수로 3개 들어간다.
    // var c = Shape.Circle(200,200,50);
    // c.fillColor = 'green';

    //위에서 만든 원을 크기를 줄여서 64개로 만들기
    // var c;
    // for(var x=25; x<400; x+=50){
    //     for(var y=25;y<400; y+=50){
    //         c = Shape.Circle(x,y,20);
    //         c.fillColor = 'green';
    //     }
    // }
    
    //tool 객체를 사용해 사용자 입력처리하기
    // var tool = new Tool();
    // tool.onMouseDown = function(e) {
    //     var c = Shape.Circle(e.point.x, e.point.y, 20);
    //     c.fillColor = 'blue';
    // }

    //tool 객체를 좀더 짧게 사용하기
    var tool = new Tool();

    var c = Shape.Circle(200,200,80);
    c.fillColor = 'black';

    var text = new PointText(200,200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.Size = 20;
    text.content = 'hello world';

    tool.onMouseDown = function(e) {
        var c = Shape.Circle(e.point, 20);
        c.fillColor = 'green';
    }

    paper.view.draw();
    console.log("main.js loaded");
});
    
