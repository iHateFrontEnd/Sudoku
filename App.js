import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import Challenge from './Challenge';
import './App.css';

function App(){
  return(
    <div className='startup' id='startup' onMouseOver={mouseOverForStartup} onMouseOut={mouseOutForStartup}>
      <h1>What do you want to do</h1>

      <br/>
      
      <button className='createBoard' onClick={createBoard}>Make your own board</button>

      &nbsp;

      <button className='startChallenge' onClick={startChallenge}>start levels</button>
    </div>
  );
}

function mouseOverForStartup(){
  let startup = document.getElementById('startup');
  startup.style.opacity = '1';
  startup.style.transition = '1s ease-in-out';
  startup.style.backgroundColor = 'rgb(255, 72, 0)';
  startup.style.marginTop = '70px';
  startup.style.paddingTop = '100px';
  startup.style.marginLeft = '200px';
  startup.style.marginRight = '200px';
  startup.style.paddingBottom = '100px';
  startup.style.borderRadius = '40px';
  startup.style.borderStyle = 'none';
  startup.style.textAlign = 'center';
}

function mouseOutForStartup(){
  let startup = document.getElementById('startup');
  startup.style.opacity = '0';
  startup.style.transition = '1s ease-out';
}

function createBoard(){
  document.getElementById('startup').style.display = 'none';

  const enterValues = (
    <div className="enterValues" id='enterValues' onMouseOver={mouseOverForEnterValues} onMouseOut={mouseOutForEnterValues}>
      <h2 id='enterValMessage'>Enter the number of rows you want</h2>

      <br/>

      <input type="number" id='enterRows' placeholder='Enter the amount of rows you want' className="enterColsRows" />

      <br/>

      <h2 id='enterValMessage'>Enter the number of columns you want</h2>

      <br/>

      <input type='number' id='enterColumns' className='enterColsRows' placeholder='Enter the amount of columns you want' />

      <br/>
      <br/>

      <button className="createBoard" id='createBoard' onClick={makeBoard}>Create board</button>
    </div>
  );

  ReactDOM.render(
    enterValues, document.getElementById('root')
  );  
}

function mouseOverForEnterValues(){
  let enterValues = document.getElementById('enterValues');
  enterValues.style.opacity = '1';
  enterValues.style.transition = '1s ease-in-out';
  enterValues.style.backgroundColor = 'rgb(255, 72, 0)';
  enterValues.style.marginTop = '10px';
  enterValues.style.marginBottom = '10px';
  enterValues.style.paddingTop = '20px';
  enterValues.style.paddingBottom = '20px';
  enterValues.style.marginLeft = '100px';
  enterValues.style.marginRight = '100px';
  enterValues.style.textAlign = 'center';
  enterValues.style.borderRadius = '40px';
  enterValues.style.borderStyle = 'none';
}

function mouseOutForEnterValues(){
  let enterValues = document.getElementById('enterValues');
  enterValues.style.opacity = '0';
  enterValues.style.transition = '1s ease-in-out';
}

function makeBoard(){
  document.getElementById('enterValMessage').style.display ='none';
  document.getElementById('enterRows').style.display = 'none';
  document.getElementById('enterColumns').style.display = 'none';
  document.getElementById('createBoard').style.display = 'none';

  var enterColsStr = document.getElementById('enterColumns').value;

  var enterRowsStr = document.getElementById('enterRows').value;

  const enterCols = parseInt(enterColsStr);

  const enterRows = parseInt(enterRowsStr);

  //this is the table to make the gird 
  const gameTable = (
    <table className='gameTable' id='gameTable'>
      <tr>
        <h1>make your board now</h1>
      </tr>
    </table>
  );

  ReactDOM.render(
    gameTable, document.getElementById('enterValues')
  );  

  //this is the for loop which will make the columns
  for(let createCols = 1; createCols <= enterCols; createCols++){
    const gameTr = document.createElement('tr');
    gameTr.setAttribute('id', 'gameTr');
    document.getElementById('gameTable').append(gameTr);

    let cols = document.createElement('input');
    cols.setAttribute('type', 'number');
    cols.setAttribute('class', 'grid');
    cols.setAttribute('id', 'cols' + createCols);
    gameTr.append(cols);

    //this is for loop creates the rows
    
    for(let createRows = 2; createRows <= enterRows; createRows++){
      let rows = document.createElement('input');
      rows.setAttribute('type', 'number');
      rows.setAttribute('class', 'grid');
      rows.setAttribute('id', 'rows' + createRows);
      gameTr.append(rows);
    }
  }

  const makeGame = document.createElement('button');
  makeGame.setAttribute('className', 'makeGame');
  makeGame.setAttribute('id', 'makeGame');
  makeGame.innerHTML = 'Make game';
  document.getElementById('enterValues').append(makeGame);

  document.getElementById('makeGame').addEventListener('click', function(){
    makeLevel()
  });
}

function makeLevel(){
  console.log('code is working');
}

//work on this function with yshantha
function startChallenge(){
  document.getElementById('startup').style.display = 'none';
}

export default App;