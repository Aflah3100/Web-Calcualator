//Startup Security
let password=3600;


for(var i=0;i<3;i+=1){
    
    var res=window.prompt("Enter Pin.")
    if(res==password ){
        window.alert("Login Authenticated")
        break;
    }else{
        continue;

    }
    
}if(i==3){
    window.alert("Session Terminated")
    window.close()

}



//Login Function Security
function logout(){
    
    

let password=3600;


for(var i=0;i<3;i+=1){
    
    var res=window.prompt("Enter Pin.")
    if(res==password ){
        window.alert("Login Authenticated")
        break;
    }else{
        continue;

    }
    
}if(i==3){
    window.alert("Session Terminated")
    window.close()
}

}

// Fuctional Code Block.
function show(val){
    document.getElementById('input').value+=val  
     
}

function clr(){
    document.getElementById('input').value=""
    
}

function execute(){

    var res=document.getElementById('input').value
    var ans=eval(res)
    document.getElementById('input').value=ans;

}
    


    






