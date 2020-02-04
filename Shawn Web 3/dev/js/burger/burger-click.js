var lineToX = gsap.timeline({paused:true});
lineToX.to("#burger-container",{duration:burgerSpeed, rotate:-90},"create-x")
.to("#top-line",{duration:burgerSpeed, rotate:45},"create-x")
.to("#middle-line",{duration:burgerSpeed, alpha:0},"create-x")
.to("#bottom-line",{duration:burgerSpeed, rotate:-45},"create-x");
// .from("#burger-outline",{duration:0.5, alpha:0},"create-x");

var staggerNav = gsap.timeline({paused:true});
staggerNav.to("#nav-bg", {duration: burgerSpeed+(burgerSpeed/3), scale: 45, alpha: 0.98})
.to("li", {duration:burgerSpeed/4, stagger:0.15, alpha:1, y: 10}, "-=0.15");


$("#burger-container").on("click", function(){
    console.log("click");
    if(canYouSeeNav === false){
        gsap.set("#burger-outline",{duration:burgerSpeed, alpha:1});
        lineToX.invalidate().restart();
        staggerNav.invalidate().restart();

        lineToX.play();
        staggerNav.play();
        canYouSeeNav = true;
    }else{
        gsap.to("#burger-outline",{duration:burgerSpeed, alpha:0});

        staggerNav.reverse();
        lineToX.reverse();
        canYouSeeNav = false;
    }
});
