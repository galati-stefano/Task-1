function newRow(){
    let inputText = document.getElementById("inputText");
    //read text
    let text = inputText.value;
    //check if there is content, otherwise do nothing

    if(text != ""){

        //empty the input
        inputText.value = "";
        
        let bigBox = document.getElementById("box");

        var box = document.createElement("div");
        box.className = "boxRow";

        var line = document.createElement("p"); 
        line.className = "textRow";

        let size = bigBox.children.length;
        line.innerHTML = text;

        var button1 = document.createElement("input");
        button1.type = "button";
        button1.classList.add("buttonRow");
        button1.classList.add("col1");
        button1.value = "X";
        button1.onclick = function(){delRow(box)};

        var button2 = document.createElement("input");
        button2.type = "button";
        button2.classList.add("buttonRow");
        button2.classList.add("col2");
        button2.value = "M";
        button2.onclick = function(){modifyRow(box, line)};

        var checkBox3 = document.createElement("input");
        checkBox3.type = "checkbox";
        checkBox3.classList.add("checkBox");
        checkBox3.onclick = function(){taskCompleted(line, checkBox3)};
        
        var boxForButtons = document.createElement("div");
        boxForButtons.className = "boxForButtons";

        box.appendChild(line);

        boxForButtons.appendChild(button1);
        boxForButtons.appendChild(button2);   
        boxForButtons.appendChild(checkBox3);
        box.appendChild(boxForButtons);
        
        /*
        box.appendChild(line);
        box.appendChild(button1);
        box.appendChild(button2);
        box.appendChild(checkBox3);
        */

        bigBox.appendChild(box);
    }
}



function delRow(elem){
    let bigBox = document.getElementById("box");
    bigBox.removeChild(elem);
}



function modifyRow(box, line){
    let inputText = document.getElementById("inputText");
    let bigBox = document.getElementById("box");
    inputText.value = line.innerHTML;
    bigBox.removeChild(box);
}



function taskCompleted(line, checkBox){
    if(checkBox.checked){
        let text = line.innerHTML;
        line.innerHTML = "";
        let deletedText = document.createElement("del");
        deletedText.innerHTML = text;
        
        line.appendChild(deletedText);
    }
    else{
        let deletedText = line.children[0];
        line.innerHTML = deletedText.innerHTML;
        line.removeChild(deletedText);
    }
}



function clearItems(){
    let bigBox = document.getElementById("box");
    let size = bigBox.children.length;

    for(var i = 0; i < size; i++){
        bigBox.removeChild(bigBox.children[0]);
    }
}
