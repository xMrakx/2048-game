var game = new Array(4);

$(document).ready(function(){
	$("#game").append("<table id='gametable'>");
	for(var i = 0; i < 4; i++){
		$("#game table").append("<tr>");
		for(var j = 0; j < 4; j++){
			$("#game tr").last().append("<td id='" + i + "-" + j + "'>")
		}
	}
	beginGame();
	updateColors();
	gameloop();
});

function beginGame(){
	var rand1, rand2;
	while(rand1 == rand2){
		rand1 = Math.floor(Math.random() * 12);
		rand2 = Math.floor(Math.random() * 12);
	}
	var row1 = Math.floor(rand1/4);
	var col1 = rand1%4;
	var row2 = Math.floor(rand2/4);
	var col2 = rand2%4;
	$("#"+row1+"-"+col1).html("2");
	$("#"+row2+"-"+col2).html("2");
	for(var i = 0; i < 4; i++){
		var innerarray = new Array(4);
		game[i] = innerarray;
		for(var j = 0; j < 4; j++){
			game[i][j] = 0;
		}
	}
	game[row1][col1] = 2;
	game[row2][col2] = 2;
}

function updateColors(){
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			switch(game[i][j]){
				case 4:
					$("#"+i+"-"+j).html("4");
					$("#"+i+"-"+j).css("background-color", "Tan");
					break;
				case 2:
					$("#"+i+"-"+j).html("2");
					$("#"+i+"-"+j).css("background-color", "LightGrey");
					break;
				default:
					$("#"+i+"-"+j).html("");
					$("#"+i+"-"+j).css("background-color", "White");
					break;
			}
		}
	}
}

function gameloop(){
	$(document).on('keyup', function(e){
		if(e.keyCode == 37){
			moveLeft();
		}else if(e.keyCode == 38){
			moveUp();
		}else if(e.keyCode == 39){
			moveRight();
		}else if(e.keyCode == 40){
			moveDown();
		}
	});
}

function moveLeft(){
	var didmove = false;
	for(var i = 0; i < 4; i++){
		for(var j = 1; j < 4; j++){
			if(game[i][j] != 0){
				var k = 1;
				while(game[i][j - k] == 0 && (j-k) >= 0){
					k++;
				}
				if(k > 1){
					game[i][j-k+1] = game[i][j];
					game[i][j] = 0;
					didmove = true;
				}
			}
		}
	}
	updateColors();
	addBlock(didmove);
}

function moveRight(){
	var didmove = false;
	for(var i = 0; i < 4; i++){
		for(var j = 2; j >= 0; j--){
			if(game[i][j] != 0){
				var k = 1;
				while(game[i][j + k] == 0 && (j+k) <= 3){
					k++;
				}
				if(k > 1){
					game[i][j+k-1] = game[i][j];
					game[i][j] = 0;
					didmove = true;
				}
			}
		}
	}
	updateColors();
	addBlock(didmove);
}

function moveUp(){
	var didmove = false;
	for(var i = 0; i < 4; i++){
		for(var j = 1; j < 4; j++){
			if(game[j][i] != 0){
				var k = 1;
				while((j-k) >= 0 && game[j - k][i] == 0){
					k++;
				}
				if(k > 1){
					game[j-k+1][i] = game[j][i];
					game[j][i] = 0;
					didmove = true;
				}
			}
		}
	}
	updateColors();
	addBlock(didmove);
}

function moveDown(){
	var didmove = false;
	for(var i = 0; i < 4; i++){
		for(var j = 2; j >= 0; j--){
			if(game[j][i] != 0){
				var k = 1;
				while((j+k) <= 3 && game[j+k][i] == 0){
					k++;
				}
				if(k > 1){
					game[j+k-1][i] = game[j][i];
					game[j][i] = 0;
					didmove = true;
				}
			}
		}
	}
	updateColors();
	addBlock(didmove);
}

function addBlock(didmove){
	open = [];
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			if(game[i][j] == 0){
				open.push((i*4)+j);
			}
		}
	}
	console.log(open);
	if(open.length == 0){
		console.log("Game over");
	}else{
		if(didmove){
			var rand = Math.floor(Math.random() * open.length);
			console.log(open[rand]);
			var r = Math.floor(open[rand]/4);
			console.log(r);
			var c = open[rand]%4;
			console.log(c);
			var rand1 = Math.floor(Math.random() * 10);
			if(rand1 == 9){
				game[r][c] = 4;
			}else{
				game[r][c] = 2;
			}
			updateColors();
		}
	}
}