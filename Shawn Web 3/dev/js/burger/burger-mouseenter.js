
// timeline for the burger lines to become 1 line
var lineToLine = gsap.timeline({paused:true});
lineToLine.to("#top-line",{duration:burgerSpeed, y:8},"move-lines")
.to("#bottom-line",{duration:burgerSpeed, y:-8},"move-lines");


$("#burger-container").on("mouseenter", function(){
    console.log("mouse enter");

    if(canYouSeeNav === false){
        // play the timeline to combine the lines into 1 line
        lineToLine.play();
    }

});
