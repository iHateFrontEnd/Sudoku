function whenipressGenerate(){
    var minAndMax = document.getElementById('min&Max')

    for(let mainLoop = 1; mainLoop <= minAndMax.value; mainLoop++){  
        //making a div in which the gridTable will rest 
        let gridDiv = document.createElement('div');
        gridDiv.setAttribute('id', 'girdDiv');
        gridDiv.setAttribute('class', 'gridDiv');
        document.body.appendChild(gridDiv);

        //making the main table
        let tableGrid = document.createElement('table');
        tableGrid.setAttribute('class', 'tableGrid');
        tableGrid.setAttribute('id', 'tableGrid');
        gridDiv.appendChild(tableGrid);

        //making the <tr></tr> for the table, first row
        let tableGridTr1 = document.createElement('tr');
        tableGridTr1.setAttribute('id', 'tableGridTr1');
        tableGrid.appendChild(tableGridTr1);

        //babyLoop
        for(let babyLoop = 1; babyLoop <= minAndMax.value; babyLoop++){
            //making the the <td></td> for the table 
            let tableGridTd1 = document.createElement('td');
            tableGridTd1.setAttribute('id', 'tableGridTd1');
            tableGridTr1.appendChild(tableGridTd1);

            //making the <input> for the table
            let number1 = document.createElement('input');
            number1.setAttribute('id', 'number');
            number1.setAttribute('class', 'number');
            number1.setAttribute('type', 'number');
            tableGridTd1.appendChild(number1);
        }
    }
}

