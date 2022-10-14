let i=0;
const timer= setInterval(() =>{
i++;
console.log("run...",i);

    if(i===10)
    {console.log("stop here...");
    clearInterval(timer);}

}, 30);