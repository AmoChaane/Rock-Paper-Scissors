let user = 0;
let com = 0;
let arr = [1];

function winner() {
  let winner = document.createElement('div');
  winner.classList.add('winner');
  winner.classList.add('result');
  winner.textContent = 'YOU WON THE GAME!';


  let again = document.createElement('button');
  again.classList.add('again');
  again.textContent = 'PLAY AGAIN?';

  document.body.append(winner, again);

  again.addEventListener('click', () => {
    arr = [1];
    user = 0;
    com = 0;
    again.remove();
    winner.remove();
    makeContainer();
  });
}

function loser() {
  let loser = document.createElement('div');
  loser.classList.add('loser');
  loser.classList.add('result');
  loser.textContent = 'YOU LOST THE GAME!';

  let again = document.createElement('button');
  again.classList.add('again');
  again.textContent = 'PLAY AGAIN?';

  document.body.append(loser, again);

  again.addEventListener('click', () => {
    arr = [1];
    user = 0;
    com = 0;
    again.remove();
    loser.remove();
    makeContainer();
  });
}



function computerPlay() {
    let [min, max] = [1, 3]
    let randomNumber =  Math.floor(Math.random() * (max - min + 1)) + min;
    if(randomNumber == 1) return 'ROCK'
    else if(randomNumber == 2) return 'PAPER'
    else return 'SCISSORS'
  }
  
  function play(playerSelection, computerSelection) {
    let move = playerSelection;
      let com = computerSelection;
      if(move == 'ROCK' &&  com == 'SCISSORS') return 'ROCK beats SCISSORS';
      else if(move == 'ROCK' && com == 'PAPER') return 'PAPER beats ROCK'
      else if(move == 'SCISSORS' && com == 'ROCK') return 'ROCK beats SCISSORS'
      else if(move == 'SCISSORS' && com == 'PAPER') return 'SCISSORS beat PAPER'
      else if(move == 'PAPER' && com == 'SCISSORS') return 'SCISSORS beat PAPER'
      else if(move == 'PAPER' && com == 'ROCK') return 'PAPER beats ROCK'
      else if(move == com) return 'DRAW'
  }


let playBtn = document.querySelector('.play-btn');
let container1 = document.querySelector('.container1');
playBtn.addEventListener('click', makeContainer);






// This is the function that creates the page that needs the player's input(rock, paper or scissors)
function makeContainer() {

  container1.remove();

  let con = document.createElement('div');
  con.classList.add('container');
  let h1 = document.createElement('h1');
  h1.classList.add('one');
  h1.textContent = 'ROCK PAPER SCISSORS';
  let h12 = document.createElement('h1');
  h12.classList.add('two');
  h12.textContent = `ROUND ${arr.length}`;
  let h13 = document.createElement('h1');
  h13.classList.add('three');
  h13.textContent = 'FIRST TO 5';

  let buttons = document.createElement('div');
  buttons.classList.add('buttons');

  let btn1 = document.createElement('div');
  btn1.classList.add('rock');
  let span = document.createElement('span');
  span.textContent = 'ROCK';
  btn1.append(span);

  let btn2 = document.createElement('div');
  btn2.classList.add('paper');
  let span2 = document.createElement('span');
  span2.textContent = 'PAPER';
  btn2.append(span2);

  let btn3 = document.createElement('div');
  btn3.classList.add('scissors');
  let span3 = document.createElement('span');
  span3.textContent = 'SCISSORS';
  btn3.append(span3);
  // btn3.append();

  buttons.append(btn1, btn2, btn3);

  const score2 = document.createElement('div');
  const div1 = document.createElement('div');
  div1.style.display = 'flex';
  div1.style.flexDirection = 'column';
  const div2 = document.createElement('div');
  div2.style.display = 'flex';
  div2.style.flexDirection = 'column';
  score2.classList.add('score');
  const span5 = document.createElement('span');
  span5.classList.add('player');
  span5.textContent = user;
  div1.style.marginRight = '10px';
  div1.append('YOU', span5);
  const span6 = document.createElement('span');
  span6.classList.add('colon');
  span6.textContent = ':';
  span6.style.height = '100px';
  const span7 = document.createElement('span');
  span7.classList.add('com');
  span7.style.display = 'flex';
  span7.textContent = com;
  div2.style.marginLeft = '10px';
  div2.append('COM', span7);
  score2.style.display = 'flex';
  score2.style.justifyContent = 'center';
  score2.style.alignItems = 'center';
  score2.append(div1, span6, div2);


  con.append(h1, h12, h13, buttons, score2);


  document.body.append(con);


  const container = document.querySelector('.container');
  const rock = document.querySelector('.rock');
  const paper = document.querySelector('.paper');
  const scissors = document.querySelector('.scissors');
  [rock, paper, scissors].forEach((c) => c.addEventListener('click', (e) => {
    // console.log(e.target);
    containerDisappear(container, c)
  }));
}





// This function removes the makeContainer page(the one that shows rock paper scissors) and adds a transition to it
function containerDisappear(con, r) {
  let choi = r;
  con.style.transitionProperty = 'opacity';
  con.style.transitionDuration = '1s';
  con.style.opacity = '0';
  setTimeout(() => con.remove('container'), 1000); 
  animation(choi);
}


// This function displays the animation that pops up after the the makeContainer page has disappeared
function animation(r) {
  let o = [];
  let choic = r;
  const waitdiv = document.createElement('div');
    waitdiv.classList.add('waitdiv');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');    
    div1.classList.add('div1');
    div2.classList.add('div2');        
    div3.classList.add('div3');
    div1.textContent = 'ROCK...';
    div2.textContent = 'PAPER...';
    div3.textContent = 'SCISSORS...';

    // let skip = document.createElement('kbd');
    // skip.classList.add('skip');
    // skip.textContent = 'Press ENTER to skip...';
    // skip.setAttribute('data-key', 13);
    // console.log(skip);


    waitdiv.append(div1, div2, div3);
    document.body.append(waitdiv);
    // document.body.append(waitdiv);   
 
  document.addEventListener('keydown', e => {
      if(e.key == 'Enter') {
        o.push(1);
        skip.remove();
        waitdiv.remove();
        results(choic);
      }
      // o.push(1);
      //   skip.remove();
      //   waitdiv.remove();
      //   results(choic);
    });

  // function key() {

  // }
  
    
      setTimeout(() => {
        div1.style.transitionProperty = 'opacity';
        div1.style.transitionDuration = '.6s';
        div1.style.opacity = '1';
    }, 600);
  

    setTimeout(() => {
        div2.style.transitionProperty = 'opacity';
        div2.style.transitionDuration = '.6s';
        div2.style.opacity = '1';
    }, 1200);
  
    setTimeout(() => {
        div3.style.transitionProperty = 'opacity';
        div3.style.transitionDuration = '.6s';
        div3.style.opacity = '1';
    }, 1800); 
    
    
    setTimeout(() => {
        waitdiv.style.transitionProperty = 'opacity';
        waitdiv.style.transitionDuration = '.3s';
        waitdiv.style.opacity = '0';
        waitdiv.remove();
        skip.remove();
    }, 2400);
    
    setTimeout(() => {
      if(o.length == 0) results(choic)
      // results(choic)
    }, 2400);
  

}



// This function displays the player's move vs the computer's move and then displays information about who lost
/* Theres a 0:1 right at the bottom of this page, it's static, it doesn't update after each move, it's actually one of the things I'm
struggling with */
function results(c) {


  const cShoot = document.createElement('div');
    cShoot.classList.add('container-shoot');
    const shoot = document.createElement('h1');
    shoot.classList.add('shoot');
    const round = document.createElement('h1');
    round.classList.add('round');
    const versus = document.createElement('div');
    versus.classList.add('versus');
    const v = document.createElement('div');
    v.classList.add('v');
    const h6 = document.createElement('h6');
    const choice = document.createElement('div');
    choice.classList.add('choice');
    const vs = document.createElement('div');
    vs.classList.add('v');
    const v2 = document.createElement('div');
    v2.classList.add('v');
    const choice2 = document.createElement('div');
    choice2.classList.add('choice');
    const h62 = document.createElement('h6');
  
    // ----------------second part---------------------------------------
    const info = document.createElement('div');
    info.classList.add('info');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const span = document.createElement('span');
  
  
    // ---------------------third part------------------------------------
    // const score = document.createElement('div');
    // score.classList.add('score');
    // const span2 = document.createElement('span');
    // span2.classList.add('player');
    // const span3 = document.createElement('span');
    // span3.classList.add('colon');
    // const span4 = document.createElement('span');
    // span4.classList.add('com');


    const score = document.createElement('div');
    const div1 = document.createElement('div');
    div1.style.display = 'flex';
    div1.style.flexDirection = 'column';
    const div2 = document.createElement('div');
    div2.style.display = 'flex';
    div2.style.flexDirection = 'column';
    score.classList.add('score');
    const span2 = document.createElement('span');
    span2.classList.add('player');
    span2.textContent = user;
    div1.style.marginRight = '10px';
    div1.append('YOU', span2);
    const span3 = document.createElement('span');
    span3.classList.add('colon');
    span3.textContent = ':';
    span3.style.height = '100px';
    const span4 = document.createElement('span');
    span4.classList.add('com');
    span4.style.display = 'flex';
    span4.style.marginLeft = '5px';
    span4.textContent = com;
    div2.style.marginLeft = '10px';
    div2.append('COM', span4);
    score.style.display = 'flex';
    score.style.justifyContent = 'center';
    score.style.alignItems = 'center';
    score.append(div1, span3, div2);


    // ---------------------time to append stuff--------------------------------------------
    cShoot.append(shoot, round, versus, info, score);
    versus.append(v, vs, v2);
    v.append(h6, choice);
    vs.textContent = 'VS';
    v2.append(choice2, h62);
    info.append(h2, h3);
    h3.append(span);

  
    // ----------------adding text--------------------------------------------
    shoot.textContent = 'SHOOT!!!';
    round.textContent = `ROUND ${arr.length}`;
    h6.textContent = 'YOU';
    choice.textContent = (c.classList.value == 'rock') ? 'ROCK' :
    c.classList.value == 'paper' ? 'PAPER' : 
    c.classList.value == 'scissors' ? 'SCISSORS' : null;
    vs.textContent = 'VS';
    choice2.textContent = computerPlay();
    h62.textContent = 'COM';
    h2.textContent = play(choice.textContent, choice2.textContent);
    span.textContent = s();
    if(span.textContent == 'YOU WIN THIS ROUND') span.style.color = 'green';
    else span.style.color = 'red';

    span3.textContent = ':'
    if(s() == 'YOU WIN THIS ROUND') {
      user += 1;
      span2.textContent = user;
      span4.textContent = com;
    } else if(s() == 'YOU LOSE THIS ROUND') {
      com += 1;
      span2.textContent = user;
      span4.textContent = com;
    } else {
      span2.textContent = user;
      span4.textContent = com;
    }
    // score.append(span2, span3, span4);



    // -------------------------function-------------------------------------------------
    function s() {
      if(choice.textContent == 'ROCK' && choice2.textContent == 'SCISSORS') {
        return 'YOU WIN THIS ROUND'
      }
      else if(choice.textContent == 'ROCK' && choice2.textContent == 'PAPER') {
        return 'YOU LOSE THIS ROUND'
      }
      else if(choice.textContent == 'SCISSORS' && choice2.textContent == 'ROCK') {
        return 'YOU LOSE THIS ROUND'
      }
      else if(choice.textContent == 'SCISSORS' && choice2.textContent == 'PAPER') {
        return 'YOU WIN THIS ROUND'
      }
      else if(choice.textContent == 'PAPER' && choice2.textContent == 'SCISSORS') {
        return 'YOU LOSE THIS ROUND'
      }
      else if(choice.textContent == 'PAPER' && choice2.textContent == 'ROCK') {
        return 'YOU WIN THIS ROUND'
      }
    }
    // --------------------------------------------------------------------------


    

    document.body.append(cShoot);
    // cShoot is the first variable that was created inside this function, it's the div tha holds everything on this page



   if(user !== 5 && com !== 5) {
    let next = document.createElement('button');
    next.classList.add('next');
    next.textContent = 'Next Round';
    next.addEventListener('click', () => {
      arr.push(1);
      cShoot.remove();
      makeContainer();
    });
    cShoot.append(next);
   } else if(user == 5) {
    setTimeout(() => {
      cShoot.remove();
      winner();

    }, 2300);
   } else if(com == 5) {
    setTimeout(() => {
      cShoot.remove();
      loser();

    },2300);
   }


}



