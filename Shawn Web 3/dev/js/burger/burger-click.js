var lineToX = gsap.timeline({paused:true});
lineToX.to("#burger-container",{duration:burgerSpeed, rotate:-90},"create-x")
.to("#top-line",{duration:burgerSpeed, rotate:45},"create-x")
.to("#middle-line",{duration:burgerSpeed, alpha:0},"create-x")
.to("#bottom-line",{duration:burgerSpeed, rotate:-45},"create-x");
// .from("#burger-outline",{duration:0.5, alpha:0},"create-x");

$("#burger-container").on("click", function(){
    console.log("click");
    if(canYouSeeNav === false){
        gsap.set("#burger-outline",{duration:burgerSpeed, alpha:1});
        // lineToX.invalidate().restart();

        lineToX.play();
        canYouSeeNav = true;
    }else{
        gsap.to("#burger-outline",{duration:burgerSpeed, alpha:0});

        lineToX.reverse();
        canYouSeeNav = false;
    }
});
