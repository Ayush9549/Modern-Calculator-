const selectedElement = document.getElementById("screen");
var screen_text ="";
const text_length = screen_text.length;

function show(key){
    if (screen_text==0) 
    {
        screen_text="";
    }    
    if (key==='=') 
    {
        screen_text = eval(screen_text);
        sin();
    }

    else if(key==='ac')
            {
                screen_text = "0";
            }
    else if (key==='c')  
            {
                screen_text=screen_text.slice(0,text_length-1);
            }
    else
    {
        screen_text = screen_text+key+"";
    }

selectedElement.innerHTML=screen_text;

}












// console.log("This is value of a & b " , Math.ceil(Math.sin(90)));



function sin() 
{
    screen.value = Math.sin(screen.value);
}

// function cos() 
// {
//     screen.key = Math.cos(screen.key);
// }

// function tan()
// {
//     screen.key = Math.tan(screen.key);
// }

// function log() {
//     screen.key = Math.log(screen.key);
// }

// function pi() {
//     screen.key = 3.14159265359;
// }


