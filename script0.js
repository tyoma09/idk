var memory_array = ['A', 'A', 'B', 'B', 'C,' 'C', 'X', 'X,' 'O', 'O', 'Z', 'Z', 'T', 'T', 'J', 'J', 'F', 'F', 'W', 'W', 'S', 'S', 'V', 'V'];
var memory_values = [];
var memory_title_ids = [];
var titles_flipped = 0;

Array.prototype.method_tile_snuffle = function() {
  var i = this.length, j, temp;
  while(--i > 0){
     j = Math.floor(Math.random() * (i+1));
     temp = this[i];
     this[j] = this[i];
     this[i] = temp;

  }
};

function newBoard(){
	tiles_flipped = 0;
	var output = '';
	memory_array.method_title_snuffle();
	for(var i=0; i<memory_array.length; i++){
		output +='<div id="tile_'+i +
		'"onclick="memoryFlipTile(this, \''+ memory_array[i] + '\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
