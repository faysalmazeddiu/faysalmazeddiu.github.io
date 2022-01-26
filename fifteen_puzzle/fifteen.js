"use strict";

$(document).ready(function () {
  let emptyX_exis = 3;
  let emptyY_exis = 3;
  const rows_columns_number = 4;
  basicInitialization();
  $("#shufflebutton").on('click', buttonClickForShuffle);



  


  function unhighlightCallBack() {
    if (checkNextMove(this)) {
      this.classList.remove("movablepiece");
    }
  }

  


  function swapPeice(tile) {
    var tempEX = emptyX_exis;
    var tempEY = emptyY_exis;
    if (checkNextMove(tile)) {
      emptyX_exis = parseInt(tile.style.left) / 100;
      emptyY_exis = parseInt(tile.style.top) / 100;
      tile.style.top = 100 * tempEY + "px";
      tile.style.left = 100 * tempEX + "px";
      tile.setAttribute("id", "peice_" + tempEX + "_" + tempEY);
    }
  }

  
  function buttonClickForShuffle() {
    for (var i = 0; i < 1000; i++) {
      var relative = checkSurroundingPeice();
      var rand = parseInt(Math.random() * relative.length);
      var tile = document.getElementById(relative[rand]);
      swapPeice(tile);
    }
  }


  
  function checkNextMove(tile) {
    var relative = checkSurroundingPeice();
    if (relative.indexOf(tile.getAttribute("id")) != -1) {
      return true;
    } else {
      return false;
    }
  }

  function basicInitialization() {
    var num = 1;
    for (var i = 0; i < rows_columns_number; i++) {
      for (var j = 0; j < rows_columns_number; j++) {
        let content = num++;
        var tile = document.createElement("div");
        tile.classList.add("puzzlepiece");
        tile.style.left = 100 * j + "px";
        tile.style.top = 100 * i + "px";
        tile.style.backgroundPosition = (0 - 100 * j) + "px" + " " + (0 - 100 * i) + "px";
        tile.setAttribute("id", "peice_" + j + "_" + i);
        tile.innerHTML = content;
        tile.onmouseover = highlightCallBack;
        tile.onmouseout = unhighlightCallBack;
        tile.onclick = clickPeice;
        if (i != 3 || j != 3) {
          document.getElementById("puzzlearea").appendChild(tile);
        }
      }
    }
  }


  function checkSurroundingPeice() {
    var up = "peice_" + emptyX_exis + "_" + (emptyY_exis - 1);
    var down = "peice_" + emptyX_exis + "_" + (emptyY_exis + 1);
    var left = "peice_" + (emptyX_exis - 1) + "_" + emptyY_exis;
    var right = "peice_" + (emptyX_exis + 1) + "_" + emptyY_exis;

    var peice = [up, down, left, right];
    var realpeice = [];

    for (var i = 0; i < peice.length; i++) {
      if (document.getElementById(peice[i]) != null) {
        realpeice.push(peice[i]);
      }
    }
    return realpeice;
  }





  function highlightCallBack() {
    if (checkNextMove(this)) {
      this.classList.add("movablepiece");
    }
  }


  

 
  function clickPeice() {
    swapPeice(this);
  }

});