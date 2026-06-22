let display = document.getElementById("display");
let historyBox = document.getElementById("history");
function addvalue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){

    try{

        let result = eval(display.value);

        historyBox.innerHTML += 
        `<p>${display.value} = ${result}</p>`;

        display.value = result;

    }

    catch{

        display.value = "Error";

    }

}

function percentage(){
    display.value = eval(display.value) / 100;
}
function deleteLast(){
    display.value = display.value.slice(0, -1);
}
document.addEventListener("keydown", function(event){
    let key = event.key;

    if((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/'){
        addvalue(key);
    }
    else if(key === 'Enter'){
        calculate();
    }
    else if(key === 'Backspace'){
        deleteLast();
    }
    else if(key === 'Escape'){
        clearDisplay();
    }
    else if(key === '%'){
        percentage();
    }
});

function sqrt(){
    display.value = Math.sqrt(display.value);
}
function power(){
    display.value = Math.pow(display.value, 2);
}
function sin(){

    display.value = Math.sin(display.value * Math.PI / 180);

}


function cos(){

    display.value = Math.cos(display.value * Math.PI / 180);

}


function tan(){

    display.value = Math.tan(display.value * Math.PI / 180);

}
function pi(){
    display.value += Math.PI;
}