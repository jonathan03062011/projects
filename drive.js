AFRAME.registerComponent('drive',{
    init: function()
    {
        this.drivecar()
    },
    drivecar: function()
    {
        var wheelrotation=0
        var speed=10
        window.addEventListener("keydown",function(e)
        {
            var steering=document.querySelector('#carentity')
            if(e.code=='ArrowRight')
            {
                console.log("inside")
                wheelrotation-=5
                steering.setAttribute("rotation",{x:0,y:0,z:wheelrotation})
            }
            if(e.code=="ArrowLeft")
            {
                wheelrotation+=5
                steering.setAttribute("rotation",{x:0,y:0,z:wheelrotation})
            }
            var camerarig=document.querySelector("#camera-rig")
            var camerarotation=camerarig.getAttribute("rotation")
            var cameraposition=camerarig.getAttribute("position")
            var carspeed=camerarig.getAttribute("movement-controls")
            camerarig.setAttribute("movement-controls",{"speed":carspeed.speed+0.05})
            var cameradirection=new THREE.Vector3()
            camerarig.object3D.getWorldDirection(cameradirection)
            if(e.code=="ArrowRight")
            {
                camerarotation.y-=5
                camerarig.setAttribute("rotation",{x:0,y:camerarotation.y,z:0})
                camerarig.setAttribute("movement-controls",{"speed":carspeed.speed+0.05})

            }
            if(e.code=="ArrowLeft")
            {
                camerarotation.y+=5
                camerarig.setAttribute("rotation",{x:0,y:camerarotation.y,z:0})
                camerarig.setAttribute("movement-controls",{"speed":carspeed.speed+0.05})
            }
            if(e.code=="ArrowUp")
            {
                speed+=0.5
                if(speed<=100 && cameraposition.z>-500)
                {
                    var accelator=document.querySelector("#accelator")
                    accelator.setAttribute("material","color","green")
                    camerarig.setAttribute("movement-controls",{"speed":carspeed.speed+0.05})
                    var speedtext=document.querySelector("#speed")
                    speedtext.setAttribute("text",{value:speed})
                }
               
               
            }
            if(e.code=="Space")
            {
                
                var brake=document.querySelector("#break")
                brake.setAttribute("material","color","red")
                camerarig.setAttribute("movement-controls",{"speed":0})
            }
        })
        window.addEventListener("keyup",function(e)
        {
            if(e.code=="Space")
            {
                var brake=document.querySelector("#break")
                brake.setAttribute("material","color","gray")
            }
            if(e.code=="ArrowUp")
            {
                var accelator=document.querySelector("#accelator")
                accelator.setAttribute("material","color","gray")
            }
        }
        )
    }
})