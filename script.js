function convertTemp() {
    const temInput = document.getElementById("temInput").value;
    const unitInput = document.getElementById("unitInput").value;
    const unitOutput = document.getElementById("unitOutput").value;
    const resultOutput = document.getElementById("resultOutput");


if(temInput === "" || isNaN(temInput)){
    resultOutput.innerHTML = " Please enter a valid number!!!";
    return;
}

let tem = parseFloat(temInput);
let convTemp;


if(unitInput === "F"){
    tem = (tem - 32)*(5/9);
}
else if(unitInput === "K"){
    tem = tem - 273.15;
}


if(unitOutput === "C"){
    convTemp = tem;
}
else if(unitOutput === "F"){
    convTemp = (tem * 9/5 ) + 32;
}
else if(unitOutput === "K"){
    convTemp = tem + 273.15;
}

resultOutput.innerHTML  = `Converted Temperature :${convTemp.toFixed(2)} ${unitOutput}`;
}

