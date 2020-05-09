//INTRO CHOICE FUNCTIONS
function acceptChallenge() {
  var challengeAccepted = document.body.querySelector('#paragraph1');
  challengeAccepted.innerHTML += 'You have accepted the challenge! You walk outside and prepare to walk 10 paces.<br>';
  firstQuestion();
}

function declineChallenge() {
  var challengeDeclined = document.body.querySelector('#paragraph1');
  challengeDeclined.innerHTML += 'You declined the challenge. Bandit Bob pulls out his gun and shoots you on the spot. You are dead.<br>';
  challengeDeclined.src = "https://www.legendsofamerica.com/wp-content/uploads/2018/10/cowboyhat.jpg";
}

//FIRST SCENARIO
function firstQuestion() {
  var question1 = document.body.querySelector('#paragraph2');
  question1.innerHTML += 'Bandit Bob asks you if you have any last wishes. You say in a gruff voice that you wish the coyotes will raid his shallow grave. Bandit Bob laughs.<br>You walk out to the street and begin pacing 10 steps. Do you look over your shoulder to watch Bandit Bob?<br><br><button id="button3" type="button" value="button3" onclick="lookOverBack()">Watch Him</button>&nbsp;<button id="button4" type="button" value="button4" onclick="doNotLookOverBack()">Do not watch him</button>';
  
}

//LOOK OVER BACK CHOICE
function lookOverBack() {
  var playItSafe = document.body.querySelector('#paragraph3');
  playItSafe.innerHTML += 'You look over your back to see Bandit Bob reaching for his gun. He realizes you are watching, chuckles, and pulls his arm away from his gun while continuing his paces. Good call!';
  secondQuestion();
}

function doNotLookOverBack() {
  var doNotPlayItSafe = document.body.querySelector('#paragraph3');
  doNotPlayItSafe.innerHTML += 'You completely trust Bandit Bob. That trust has betrayed you. Bandit Bob, without you watching, reaches for his gun halfway through his paces, turns around, and shoots you dead.';
}

//SECOND SCENARIO
function secondQuestion() {
  var question2 = document.body.querySelector('#paragraph4');
  question2.innerHTML += 'At the end of your 10 paces, you turn around and stare at Bandit Bob. He turns at the same time you do. You both stare at each other intensely. You decide to say something to Bandit Bob:<br><br><button id="button5" type="button" value="button5" onclick="letsBeFriends()">Why can we not be friends?</button>&nbsp;<button id="button6" type="button" value="button6" onclick="intimidation()">This is the end for you</button>';
}

//WHAT DO YOU SAY TO BANDIT BOB?
function letsBeFriends() {
  var beStupid = document.body.querySelector('#paragraph5');
  beStupid.innerHTML += 'You ask Bandit Bob why you two cannot simply be friends. He says he agrees and begins to put his gun down. You holster your gun and walk towards him to hug him. He pulls his gun out and shoots you dead...because he\'s a bad guy and that was stupid.';
}

function intimidation() {
  var beAwesome = document.body.querySelector('#paragraph5');
  beAwesome.innerHTML += 'You spit on the ground as you glare straight at Bandit Bob. You tell Bob his days of being a criminal are over, that once and for all you will put an end to his tyranny, and that you have spent hours shooting bottles in the back yard of your remote cabin preparing for this moment.<br>You start to see a nervous sweat coming over Bandit Bob.';
  theShootOut();
}

//THIRD SCENARIO
function theShootOut() {
  var storyClimax = document.body.querySelector('#paragraph6');
  storyClimax.innerHTML += 'The moment has come! You both reach for your guns at the same time and point them at each other. Where do you aim?<br><br><button id="button7" type="button" value="button7" onclick="shootingHand()">Aim for shooting hand</button>&nbsp;<button id="button8" type="button" value="button8" onclick="rightLeg()">Aim for leg</button>';
}

//WHERE DO YOU AIM?
function shootingHand() {
  var aimForHand = document.body.querySelector('#paragraph7');
  aimForHand.innerHTML += 'You aim for Bandit Bob\'s shooting hand. But it was such a small target and it was moving. You were forced to take a split second longer to aim and fire. Bandit Bob aims for your leg and hits it. You fall to the ground and completely miss your shot at Bandit Bob\'s leg. Bandit Bob walks over to you, takes your gun, and shoots you.';
}

function rightLeg() {
  var aimForLeg = document.body.querySelector('#paragraph7');
  aimForLeg.innerHTML += 'You aim for Bandit Bob\'s right leg and narrowly shoot quicker than him. You hit his leg and throw him off balance, and he falls backwards shooting into the sky, completely missing you. You run over to him, take his gun, and tie him up. The town\'s sheriff hauls him off to jail. Congratulations you win!';
}
