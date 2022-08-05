let count = 0;
window.onload=function(){
    let incr=document.getElementById("inc");
    let dec=document.getElementById("dec");
    let rese=document.getElementById("res");

    if(incr){incr.addEventListener("click", increment);}
    if(dec){dec.addEventListener("click", decrement);}
    if(rese){rese.addEventListener("click", reset);}

}

function increment(){
   
    count+=1;
        document.getElementById("countlabel").innerHTML=count;
    }
function decrement(){
    
    count-=1;
        document.getElementById("countlabel").innerHTML=count;
    }

    function reset(){
        
        count=0;
            document.getElementById("countlabel").innerHTML=count;
        }