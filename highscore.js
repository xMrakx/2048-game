$(document).ready(function(){
	function parseHighScores(){
		var hs = [];
		$("#highscores").load("highscores.txt", function(responseText, statusText, xhr){
			hs = responseText.split('\n');
			high = 0;
			for(var i = 0; i < hs.length; i++){
				if(hs[i] > high){
					high = hs[i];
				}
			}
			$("#highscore").html(high);
		});
	}
	parseHighScores();
});

function recordHighScore(newscore){
	var hs = [];
	$("#highscores").load("highscores.txt", function(responseText, statusText, xhr){
		hs = responseText.split('\n');
		min = hs[0];
		index = 0;
		for(var i = 1; i < hs.length; i++){
			if(hs[i] < min){
				min = hs[i];
				index = i;
			}
		}
		if(newscore < min){
			hs[index] = newscore;
		}
	});
}