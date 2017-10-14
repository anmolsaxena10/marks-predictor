function calculate(){
	
	var x = document.getElementById("form");
	var sess1 = x.elements[0].value;
	var sess2 = x.elements[1].value;
	var sess3 = x.elements[2].value;
	var pract = x.elements[5].value;
	var attd = x.elements[6].value;
	var sess = (parseInt(sess1,10)+parseInt(sess2,10)+parseInt(sess3,10))/3;
	var total=0;
	
	if(document.getElementById('practical').disabled == false){
		total = 150;
	}
	else if(document.getElementById('practical').disabled != false){
		total = 100;
	}
	
	var ptr;
	var minPer;
	var maxPer;
	var minExt;
	var maxExt;
	var result = new Array();
	
	for(ptr=10,minPer=84.5,maxPer=100 ; ptr>=5 ; ptr--,minPer-=10,maxPer-=10){
		if(total == 100){
			minExt = (minPer) - (sess+parseInt(attd,10));
			maxExt = (maxPer) - (sess+parseInt(attd,10));
		}
		else if(total == 150){
			minExt = (minPer*total/100) - (sess+parseInt(pract,10)+parseInt(attd,10));
			maxExt = (maxPer*total/100) - (sess+parseInt(pract,10)+parseInt(attd,10));
		}
		if(maxExt > 60){
			maxExt = 60;
		}
		if(maxExt < 0){
			maxExt = 0;
		}
		if(maxPer == 100){
			maxPer -= 5.51;
		}
		if(minPer == 44.5){
			minPer += 5;
		}
		if(minExt < 0){
			minExt = 0;
		}
		if(minExt > 60){
			minExt = 60;
		}
		
		result[result.length] = {pointer:ptr,minMarks:minExt,maxMarks:maxExt};
	}
	
	alert(
		"External Marks Required\n"+
		"For "+result[0].pointer+" :"+"  "+result[0].minMarks+" - "+result[0].maxMarks+"\n"+
		"For "+result[1].pointer+" :"+"  "+result[1].minMarks+" - "+result[1].maxMarks+"\n"+
		"For "+result[2].pointer+" :"+"  "+result[2].minMarks+" - "+result[2].maxMarks+"\n"+
		"For "+result[3].pointer+" :"+"  "+result[3].minMarks+" - "+result[3].maxMarks+"\n"+
		"For "+result[4].pointer+" :"+"  "+result[4].minMarks+" - "+result[4].maxMarks+"\n"+
		"For "+result[5].pointer+" :"+"  "+result[5].minMarks+" - "+result[5].maxMarks+"\n"
	);
	
}

function disablePractical(input){
	if(input==1){
		document.getElementById('practical').disabled = false;
	}
	else{
		document.getElementById('practical').disabled = true;
	}
}