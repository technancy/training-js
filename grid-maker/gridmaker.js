"use-strict";

class gridMaker {
  constructor(size) {
    this.name = 'Grid';
    this.size = size;
  }

  testing() {
    console.log(this.name + '. Size: ' + this.size);
  }

  createGrid() { 
    const container = document.querySelector('#grid');
    var tile = '';
    
    for(var i = 0; i < this.size; i++) {
      tile += this.getTileHtml(i,i);

      for(var x = 1; x < this.size; x++) {
        tile += this.getTileHtml(i,x);
      }
      if(container != null){
        container.innerHTML = tile;
      }
    }
  }

  getTileHtml(i,x) {
    var coords = `${i}-${x}`
    return `<span class='${coords} grid-${this.size}' data-coords='${coords}'>
              ${coords}
            </span>`;
  }
}

var grid = new gridMaker(14);
grid.testing();
grid.createGrid();