$(document).ready(function(){
	var totalCharAllowed = 100;
	
	 $("#wordCountResult").html('0 Words Written');
	 $("#charCountResult").html(totalCharAllowed + '/'+ totalCharAllowed + ' Characters Remaining');
    
    $("#wordCountTextarea").keyup(function(){

    var inputStr = $("#wordCountTextarea").val();
    var inputLength = inputStr.length;
    var charRemain = totalCharAllowed - inputLength;
    var words = $. trim($("#wordCountTextarea"). val()). split(" ");
    var wordsCount = words.length;
    if(inputStr.length!=0)
    {
    	if(wordsCount!=1){
 			$("#wordCountResult").html(wordsCount + ' Words Written');
    	}
    	else{
    		 $("#wordCountResult").html(wordsCount + ' Word Written');
    	}

    }
    else{
 		$("#wordCountResult").html('0 Words Written');
    }
    $("#charCountResult").html(charRemain + '/'+ totalCharAllowed + ' Characters Remaining ');
  });
 });