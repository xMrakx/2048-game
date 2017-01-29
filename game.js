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

}

function updateColors(){
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			switch($("#"+i+"-"+j).text()){
				case '2':
					$("#"+i+"-"+j).css("background-color", "LightGrey");
				default:
					
			}
		}
	}
}