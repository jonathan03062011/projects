AFRAME.registerComponent("game",{
    init:function()
    {
        var duration=60
        var timerel=document.querySelector("#timer")
        this.starttimer(duration,timerel)
    },
    starttimer:function(duration,timerel)
    {
        var minutes
        var seconds
        setInterval(()=>{
            if(duration>=0)
            {
                minutes=parseInt(duration/60)
                seconds=parseInt(duration%60)
                if(minutes<10)
                {
                    minutes="0"+minutes
                }
                if(seconds<10)
                {
                    seconds="0"+seconds
                }
                timerel.setAttribute("text",{value:minutes+":"+seconds})
                duration-=1
            }
            else
            {
                var cameraRig = document.querySelector("#camera-rig")
                cameraRig.setAttribute("velocity", { x: 0, y: 0, z: 0 })
                var over = document.querySelector("#text1");
                over.setAttribute("visible",true)


                var carSpeed = document.querySelector("#speed")
                carSpeed.setAttribute("text", { value: "0" });

            }
            
        },1000)
    }
})