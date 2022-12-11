var soundstate = false;



function playsta(){//function that plays sound

var sound = document.getElementById("sound");//gets reference to audio file already loaded into webpage

  sound.play();
  //plays the sound from element containing audio
  document.getElementById("data").innerHTML = "reading data";
  
  

}








function startStop(){

  document.getElementById("stopBt").disabled = true;
  document.getElementById("startBt").disabled = false;
  


}






// this function validates the login information
async function loginValidation() {
  console.log("function called");//checks if i called the funtion for debugging
  var fnametext = document.getElementById("fname").value;//sets a var to the first name element
  var lnametext = document.getElementById("lname").value;//sets a var to the last name element
  var badgeametext = document.getElementById("badge").value;//sets a var to the badge number element
  var directions = document.getElementById("directionText");//gets the direction element

  console.log(fnametext);//checks value of first name for debugging
  console.log(lnametext);//checks value of last name for debugging
  if (fnametext.length + lnametext.length <= 20 && badgeametext <1000) { // validates names are not over 20 char
    // and badge is less than 1000

    directions.innerHTML = "Welcome " + fnametext + " " + lnametext; // changes text above login to welcome + name
    await new Promise(resolve => setTimeout(resolve, 3000));// waits 3 seconds before redirecting
    window.location = 'index.html';// sets new url location
  }

  else {// if the input is not validated succesfully

    console.log("name to long");// tells me there was an error for debugging
    directions.innerHTML = "Name is too long must be <20 Characters!  or badge too long and not an integer!";
    // tells the user the possible problems with the input
  }


}







async function countdown50() {

    


  // below is a way more efficient way of doing this.
  
  

  console.log('start timer'); //lets me know the timer started
  var count = 50; // sets a int var to 50
  for (let step = 0; step < 10; step++) { // loop 0 through 10
    document.getElementById("CountDis").innerHTML = count; // display new count var value
    await new Promise(resolve => setTimeout(resolve, 5000)); // wait 5 seconds

    count = count - 5; // subtract 5 from count var
    // display new count var value



    if (count == 0) { // if count is zero do this
      document.getElementById("CountDis").innerHTML = 'Blast Off'; // set timer to blastoff
      document.alert("BlastOff"); // blastoff


    }

    else if (count <= 25) {//if the count is at 25

      var newMessage = "Warning Less than ½ way to launch, time left = " + count;// sets new var to the message and the count var
      document.getElementById("newMessage").innerText = newMessage;//writes variable to web page

    }
  }
  //await new Promise(resolve => setTimeout(resolve, 1000));


}



function CountDownTimer() {
  // count down timer 50 to 0 by 5
  document.getElementById("stopBt").disabled = false;
  document.getElementById("startBt").disabled = true;
  console.log("countdown started");
  //var count = 50;
  countdown50();
  //count - 1;
  //document.getElementById("CountDis").innerHTML = count;
  document.getElementById("data").innerText = "Reading Data....";
  updateDisplay();
  index = 0;
  timer = setInterval(updateDisplay,time_interval);
}


function playCraps() {//plays when button pressed

  console.log("play?");
  // gets random number 1-6
  die1 = Math.ceil(Math.random() * 6);//gets random number 1-6
  die2 = Math.ceil(Math.random() * 6);//gets random number 1-6
  console.log('die1', die1, 'die2', die2);//logs all random numbers to console
  //sets both player values to random number to be displayed
  document.getElementById("dieres1").innerHTML = die1;//writes new variable values to console
  document.getElementById("dieres2").innerHTML = die2;//writes new variable values to console


  //check if craps 7 or 11
  var sum = die1 + die2;

  if (sum == 7 || sum == 11) {
    //check for lost
    console.log("lose");
    document.getElementById("gameresult").innerHTML = 'Lose :(';//writes reult to webpage

  }

  else if (die1 % 2 == 0 && die1 == die2) {
    // check for win
    console.log("win")
    document.getElementById("gameresult").innerHTML = 'You Win!';
  }

  else {
    // if neither win or lose tie
    console.log("Tie")
    document.getElementById("gameresult").innerHTML = 'Tie! so close 0-0';
  }



  //check for win


  //check for tie









}