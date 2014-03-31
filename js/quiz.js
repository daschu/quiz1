window.onload = function(){

                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");
				var quizbg = new Image();
				var Question = new String;
				var Option1 = new String;
				var Option2 = new String;
				var Option3 = new String;
				var mx=0;
				var my=0;
				var CorrectAnswer = 0;
				var qnumber = 0;
				var rightanswers=0;
				var wronganswers=0;
				var QuizFinished = false;
				var lock = false;
				var textpos1=45;
				var textpos2=145;
				var textpos3=230;
				var textpos4=325;
				var Questions = ["Was bedeutet BDSG?","Welche Daten werden durch das \nBundesdatenschutzgesetz (BDSG) geschuetzt?","Wer muss sich an das BDSG halten?"];
				var Options = [["Bundesdatenschutzgesetz","Bundesdienstleistungsgesetz","Bundesdomaingesetz"],["personenbezogene Daten","Alle Daten","Firmendaten"],["Firmen und Behoerden in Deutschland","Amerikanische Konzerne","Firmen in Russland"]];


				quizbg.onload = function(){
			      context.drawImage(quizbg, 0, 0);
				  SetQuestions();
				}//quizbg
				quizbg.src = "quizbg.png";



				SetQuestions = function(){

					Question=Questions[qnumber];
					CorrectAnswer=1+Math.floor(Math.random()*3);

					if(CorrectAnswer==1){Option1=Options[qnumber][0];Option2=Options[qnumber][1];Option3=Options[qnumber][2];}
					if(CorrectAnswer==2){Option1=Options[qnumber][2];Option2=Options[qnumber][0];Option3=Options[qnumber][1];}
					if(CorrectAnswer==3){Option1=Options[qnumber][1];Option2=Options[qnumber][2];Option3=Options[qnumber][0];}

					context.textBaseline = "middle";
					context.font = "18px Arial";
					context.fillText(Question,20,textpos1);
					context.font = "14px Arial";
					context.fillText(Option1,20,textpos2);
					context.fillText(Option2,20,textpos3);
					context.fillText(Option3,20,textpos4);


				}//SetQuestions

				canvas.addEventListener('click',ProcessClick,false);

				function ProcessClick(ev) {

				my=ev.y-canvas.offsetTop;

				if(ev.y == undefined){
					my = ev.pageY - canvas.offsetTop;
				}

			if(lock){
				ResetQ();
			}//if lock

			else{

			if(my>110 && my<180){GetFeedback(1);}
			if(my>200 && my<270){GetFeedback(2);}
			if(my>290 && my<360){GetFeedback(3);}

			}//!lock

				}//ProcessClick



		GetFeedback = function(a){

		  if(a==CorrectAnswer){
		  	context.drawImage(quizbg, 0,400,75,70,480,110+(90*(a-1)),75,70);
			rightanswers++;
			//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
		  }
		  else{
		    context.drawImage(quizbg, 75,400,75,70,480,110+(90*(a-1)),75,70);
			wronganswers++;
		  }
		  lock=true;
		  context.font = "0.9em";
		  context.fillText("Click again to continue",20,380);
		}//get feedback


		ResetQ= function(){
		lock=false;
		context.clearRect(0,0,550,400);
		qnumber++;
		if(qnumber==Questions.length){EndQuiz();}
		else{
		context.drawImage(quizbg, 0, 0);
		SetQuestions();}
		}


		EndQuiz=function(){
		canvas.removeEventListener('click',ProcessClick,false);
		context.drawImage(quizbg, 0,0,550,90,0,0,550,400);
		context.font = "18px Arial";
		context.fillText("Dein Ergebnis!",20,100);
		context.font = "14px Arial";
		context.fillText("richtige Antworten: "+String(rightanswers),20,140);
		context.fillText("falsche Antworten: "+String(wronganswers),20,160);
		}
			};//windowonload
