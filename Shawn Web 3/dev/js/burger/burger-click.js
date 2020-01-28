var lineToX = gsap.timeline({paused:true});
lineToX.to("#burger-container",{duration:0.25, rotate:-180},"create-x")
.to("#top-line",{duration:0.25, rotate:45},"create-x")
.to("#middle-line",{duration:0.2, alpha:0},"create-x")
.to("#bottom-line",{duration:0.25, rotate:-45},"create-x");
// .from("#burger-outline",{duration:0.5, alpha:0},"create-x");

$("#burger-container").on("click", function(){
    console.log("click");
    if(canYouSeeNav === false){
        gsap.set("#burger-outline",{alpha:1});
        lineToX.play();
        canYouSeeNav = true;
    }else{
        gsap.to("#burger-outline",{duration:0.2, alpha:0});

        lineToX.reverse();
        canYouSeeNav = false;
    }
});
