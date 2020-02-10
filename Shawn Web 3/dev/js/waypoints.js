var inviewGallery = new Waypoint.Inview({
    element: $('#section-3')[0],
    enter: function(direction) {
        // $.notify('Gallery enter triggered with direction ' + direction, { globalPosition: 'right middle', className: "success" })
        headerBarChange(direction, scrollDirection = "enter");
    },
    entered: function(direction) {
        // $.notify('Gallery entered triggered with direction ' + direction, { globalPosition: 'right middle', className: "success" })
        headerBarChange(direction, scrollDirection = "entered");
    },
    exit: function(direction) {
        // $.notify('Gallery exit triggered with direction ' + direction, { globalPosition: 'right middle', className: "info" })
        headerBarChange(direction, scrollDirection = "exit");
    },
    exited: function(direction) {
        // $.notify('Gallery exited triggered with direction ' + direction, { globalPosition: 'right middle', className: "info" })
        headerBarChange(direction, scrollDirection = "exited");
    },
    offset: {
        top: 60
        // bottom: 60
    }
})

var inviewFamousPlayers = new Waypoint.Inview({
    element: $('#section-2')[0],
    enter: function(direction) {
        // $.notify('Famous Players enter triggered with direction ' + direction, { globalPosition: 'right middle', className: "success" })
        famousCardsFloatUp(direction, scrollDirection = "enter");
    },
    entered: function(direction) {
        // $.notify('Famous Players entered triggered with direction ' + direction, { globalPosition: 'right middle', className: "success" })
        famousCardsFloatUp(direction, scrollDirection = "entered");
    },
    exit: function(direction) {
        // $.notify('Famous Players exit triggered with direction ' + direction, { globalPosition: 'right middle', className: "info" })
        famousCardsFloatUp(direction, scrollDirection = "exit");
    },
    exited: function(direction) {
        // $.notify('Famous Players exited triggered with direction ' + direction, { globalPosition: 'right middle', className: "info" })
        famousCardsFloatUp(direction, scrollDirection = "exited");
    },
    offset: {
        top: 60
        // bottom: 60
    }
})

function headerBarChange(direction, scrollDirection){

    if(direction === "up" & scrollDirection === "enter"){
        gsap.to("header",{duration:0.5,backgroundColor:"#211712"});
        // change the burger
        gsap.to(".burger-lines",{duration:0.25, scaleX:0,stagger:0.15});
        gsap.to("#burger-outline",{duration:0.25,stagger:0.15, stroke:"#FCFCFC"});
        gsap.to(".burger-lines",{duration:0.25, scaleX:1, stroke:"#FCFCFC",stagger:0.15,delay:0.25});
    }

    else if(direction === "up"& scrollDirection === "entered"){
        gsap.to("header",{duration:0.25,backgroundColor:"#FCFCFC"});
        // change the burger
        gsap.to(".burger-lines",{duration:0.25, scaleX:0,stagger:0.15});
        gsap.to("#burger-outline",{duration:0.25,stagger:0.15, stroke:"#211712"});
        gsap.to(".burger-lines",{duration:0.25, scaleX:1, stroke:"#211712",stagger:0.15,delay:0.25});
    }

    else if(direction === "down"& scrollDirection === "exit"){
        gsap.to("header",{duration:0.25,backgroundColor:"#211712"});
        // change the burger
        gsap.to(".burger-lines",{duration:0.25, scaleX:0,stagger:0.15});
        gsap.to("#burger-outline",{duration:0.25,stagger:0.15, stroke:"#FCFCFC"});
        gsap.to(".burger-lines",{duration:0.25, scaleX:1, stroke:"#FCFCFC",stagger:0.15,delay:0.25});
    }

    else if(direction === "down"& scrollDirection === "exited"){
        gsap.to("header",{duration:0.25,backgroundColor:"#FCFCFC"});
        // change the burger
        gsap.to(".burger-lines",{duration:0.25, scaleX:0,stagger:0.15});
        gsap.to("#burger-outline",{duration:0.25,stagger:0.15, stroke:"#211712"});
        gsap.to(".burger-lines",{duration:0.25, scaleX:1, stroke:"#211712",stagger:0.15,delay:0.25});
    }

}

function famousCardsFloatUp(direction, scrollDirection){
    if(direction === "down" & scrollDirection === "enter"){
        gsap.from("#section-2 div ul .cardFamous", {duration: 0.25, alpha: 0, y:-10, stagger: 0.15, delay: 1});
    }

}
