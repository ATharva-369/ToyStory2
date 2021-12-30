AFRAME.registerComponent("marker-handler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker Found!");
            this.markerFound();
        });
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker Lost!");
            this.markerLost();
        });    
    },  
    markerFound:function(){
        var button = document.getElementById("button1");
        button.style.display = "flex" ;
        var summaryButton = document.getElementById("summary-button");
        var orderButton = document.getElementById("order-button");
        summaryButton.addEventListener("click",()=>{  
            swal({
                icon : "warning",
                tite : "Order Summary",
                text : "Work In Progress..."
            });
        });
        orderButton.addEventListener("click",()=>{
            swal({
                icon : "https://i.imgur.com/4NZ6uLY.jpg",
                tite : "Thankyou For Ordering!",
                text : "Your Toy Will Be Delivered Soon"
            });
        });
    },
    markerLost:function(){
        var button = document.getElementById("button1");
        button.style.display = "none" ;

    }
})    