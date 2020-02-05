var lineToX = gsap.timeline({paused:true});
lineToX.to("#burger-container",{duration:burgerSpeed, rotate:-90},"create-x")
.to("#top-line",{duration:burgerSpeed, rotate:45},"create-x")
.to("#middle-line",{duration:burgerSpeed, alpha:0},"create-x")
.to("#bottom-line",{duration:burgerSpeed, rotate:-45},"create-x");
// .from("#burger-outline",{duration:0.5, alpha:0},"create-x");

var staggerNav = gsap.timeline({paused:true});
staggerNav.to("#nav-bg", {duration: burgerSpeed+(burgerSpeed/8), scale: 35, alpha: 0.98}, "NavBG")
.from("#nav-bg svg path", {duration: burgerSpeed+(burgerSpeed/8), fill:"#FF5D00"}, "NavBG")
.to("nav ul li", {duration:burgerSpeed/4, stagger:0.1, alpha:1, y: 10}, "-=0.15");


$("#burger-container").on("click", function(){
    console.log("click");
    if(canYouSeeNav === false){
        gsap.set("#burger-outline",{duration:burgerSpeed, alpha:1});
        lineToX.invalidate().restart();
        staggerNav.invalidate().restart();

        lineToX.play();
        staggerNav.play();

        gsap.to(window, {duration: 1, scrollTo:{y:contentSections[$('nav ul li').index(this)], offsetY:60}});

        canYouSeeNav = true;
    }else{
        gsap.to("#burger-outline",{duration:burgerSpeed, alpha:0});

        lineToX.reverse();
        staggerNav.reverse();

        canYouSeeNav = false;
    }
});
