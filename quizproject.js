let currentQuestion = 0; //quesiton user is on
let score = 0; 			 // number of questions right
let timeLeft = -1;
let timer; // this will be the timer function

let numHintsLeft = 2; //alows ser to see 2 hints
let isCorrect = 0;
let questions = [
   {
	"question": "What is Gon's nen type?",
	"a": "Conjuration",
	"b": "Emission",
	"c": "Enhancer",
	"d": "Manipulation",
	"image":"quizimages/q1.png",
	"answer": "c",
	"hint": "His main ability improves his strength.",
   },
   {
	"question": "What is the name of Gon's hometown?",
	"a": "Sunset Island",
	"b": "Whale Island",
	"c": "Seagull Bay",
	"d": "Verintina City",
	"image":"quizimages/q2.jpg",
	"answer": "b",
	"hint": "It's an island.",
   },
   {
	"question": "Why did Killua originally take the Hunter Exam?",
	"a": "He wanted to crush rookies",
	"b": "His parents forced him to",
	"c": "He needed the hunter license for a mission",
	"d": "He wanted to see how hard it was",
	"image":"quizimages/q3.jpg",
	"answer": "d",
	"hint": "He went without the influence of his parents",
   },
   {
	"question": "What is the name of Isaac Netero's assitant?",
	"a": "Beans",
	"b": "Greeny",
	"c": "Mr. Helper",
	"d": "He does't have a name",
	"image":"quizimages/q4.jpg",
	"answer": "a",
	"hint": "He has a name.",
   },
   {
	"question": "How many punches did Netero do daily in his training?",
	"a": "1000",
	"b": "10 000",
	"c": "100 000",
	"d": "20 000",
	"image":"quizimages/q5.jpg",
	"answer": "b",
	"hint": "It took him more than 18 hours to complete on the first day.",
   },
   {
	"question": "What is the name of the bomb used in the Chimera Ant Arc?",
	"a": "The Swolen Tulip",
	"b": "Crimson Rose",
	"c": "Withered Tulip",
	"d": "Poor Man's Rose",
	"image":"quizimages/q6.jpg",
	"answer": "d",
	"hint": "These bombs were extremely cheap to produce.",
   },
   {
	"question": "What is the name of the main antagonist in the Greed Island Arc?",
	"a": "Genthru",
	"b": "Mr. Exploder",
	"c": "Sub",
	"d": "Bara",
	"image":"quizimages/q7.jpg",
	"answer": "a",
	"hint": "Sub and Bara were his teammates.",
   },
   {
	"question": "How many stages were in the hunter exam?",
	"a": "8",
	"b": "6",
	"c": "5",
	"d": "7",
	"image":"quizimages/q8.jpg",
	"answer": "c",
	"hint": "There were less than 7.",
   },
   {
	"question": "Which one is NOT a shadow beast who fought Uvogin?",
	"a": "Rabid Dog",
	"b": "Worm",
	"c": "Owl",
	"d": "Leech",
	"image":"quizimages/q9.jpg",
	"answer": "c",
	"hint": "Think of the shadow beast's abilities.",
   },
   {
	"question": "What is Chrollo's last name?",
	"a": "Lucifer",
	"b": "Lucius",
	"c": "Lucy",
	"d": "Lucilfer",
	"image":"quizimages/q10.jpg",
	"answer": "d",
	"hint": "His character has a lot of biblical significance.",
   }
 ];
 
 
 function loadQuestion() { //loads current question
     
	//if a timer is running from previous question, stop it
	if (timeLeft >= 0) {
		clearInterval(timer);
	}	
	 
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
	
	
	
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) { //checks to see if answer user clicked is = to answer, if yes up score and uses message
     
    let message = "";
    
	let isCorrect;

	if (ans == questions[currentQuestion].answer) {
	  isCorrect = true;
	} else {
	  isCorrect = false;
	}
	
    if (isCorrect) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       
    }//if
    



	if (currentQuestion==0) {
		if (isCorrect){
			message = "WELL DONE";
		} else {
			message = "He is an enhancer type" ;
		}
	}
	
	if (currentQuestion==1) {
		if (isCorrect){
			message = "NICELY DONE";
		} else {
			message = "The town is called Whale Island, named after the shape of the island" ;
		}
	}
	
	if (currentQuestion==2) {
		if (isCorrect){
			message = "GOOD";
		} else {
			message = "He joined to see how hard the exam is" ;
		}
	}
	
	if (currentQuestion==3) {
		if (isCorrect){
			message = "How could anyone forget this guy's name right?";
		} else {
			message = "He's named after jelly beans because of his similarity with them" ;
		}
	}
	
	else if (currentQuestion==4) {
		if (isCorrect){
			message = "YES";
		} else {
			message = "He did 10 000 punches and prayers daily" ;
		}
	}
	
	else if (currentQuestion==5) {
		if (isCorrect){
			message = "GOOD JOB";
		} else {
			message = "This bomb is called the Poor Man's Rose, this because it was very cheap to produce" ;
		}
	}
	
	else if (currentQuestion==6) {
		if (isCorrect){
			message = "That was a tough one, good job";
		} else {
			message = "I don't blame you for not forgetting this guy's name" ;
		}
	}
	 
	else if (currentQuestion==7) {
		if (isCorrect){
			message = "Nice, you counted all of them in the time limit";
		} else {
			message = "I don't blame you for forgetting a stage";
		}
	}
	
	else if (currentQuestion==8) {
		if (isCorrect){
			message = "GOOD JOB";
		} else {
			message = "Owl was not one of the shadow beasts who fought Uvogin" ;
		}
	}
   
	else if (currentQuestion==9) {
		if (isCorrect){
			message = "YAY";
		} else {
			message = "His last name is LUCILFER not Lucifer" ;
		}
	}
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "Good job, I'm sure you did your best, please re/watch this show it's perfect your score is " + score + "/" + questions.length;
    } else {
       loadQuestion();
    }
		
    
	
	
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
	
	// if  new question i loaded, start the timer when lightbox closes
	
 } // closeLightbox
 
 // start the timer for the current question

 
 
 
 function showHint() {
	let message = "";
	
	if (numHintsLeft > 0) {
		//get hint from currentQuestion
	    message = questions[currentQuestion].hint;
		numHintsLeft--; //substact 1 from numHintsLeft
	} else {
		message = "Sorry, all your hints are gone";
	}
	//unhide light box displaying 
	document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
	
 } //showHint
 
 
 
 
 
 
 
 
 
 
 
   
