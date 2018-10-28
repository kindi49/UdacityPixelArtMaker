var pickedColor = "";   // declaring a varible for selected color
var color = document.getElementById("colorPicker"); //store the color element
color.addEventListener("input", function(){   //change the value of pickedColor varible to the selected color
pickedColor = color.value;     
}) ;
var submit = document.getElementById("submit");   // store the submit botton
submit.addEventListener("click", makeGrid);   // make a grid by clicking the submit button
function makeGrid() {                   
    var formInput = document.getElementById("sizePicker"); //storing input data to formInput varible
    var hight = parseInt(formInput.elements[0].value); // extracting the hight from the submitted form and changing it to integer
    var width = parseInt(formInput.elements[1].value); // extracting the width from the submitted form and changing it to integer
    var table = document.getElementById('pixelCanvas'); // assigning the table to "table" varible
    table.innerHTML="";                                 // resetting the table to empty any existing painting
    var column = [];                                    // declaring the column array
    var row = [];                                       // declaring the column array
    for (var l = 0; l < hight; l++){                    // looping for each row
        column[l] = document.createElement('tr');       // creating a row element
        for (var w = 0; w < width; w++){                // looping for each column
            row[w] = document.createElement('td');      // creating a column element
            var cell = l + "*" + w;                     // giving each cell an ID
            row[w].setAttribute('id', cell);            
            column[l].appendChild(row[w]);              // linking each cell in all rows to a column
        }
    }
    for (var c = 0; c < column.length ; c++){           // linking each column to the main table
        table.appendChild(column[c]);
    }
    for (var h = 0; h < hight; h++){
        for (var j = 0; j < width; j++){
            var cellTable = h + "*" + j;
            var box = document.getElementById(cellTable);
            box.addEventListener('click', function(){   // adding an EventListener to each cell 
                this.style.backgroundColor = pickedColor;   //changing the background color of selected cell to the predetermined color
            });
        }
    }       
}
function changeDefault(){                                   // change the color of all the cell 
    var tdElements = document.getElementsByTagName("td");
    for(var i = 0; i < tdElements.length; i++) {
        tdElements[i].style.backgroundColor = pickedColor;
    }
}
