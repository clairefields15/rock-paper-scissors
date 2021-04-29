# Rock Paper Scissors

## Introduction
Rock, Paper, Scissors is an application that allows users to play a classic game of rock, paper, scissors, or a more difficult "Elemental" game (featuring four choices) against a computer! This is the final solo project for module 1 of the front end engineering program at the Turing School of Software and Design. The basic layout and functionality of the site was provided in the project spec but students were given creative freedom in the design.

## Links  
- Ready to play? Click [here](https://clairefields15.github.io/rock-paper-scissors/)
- View the project specifications [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html)

## Features
When a user first visits Rock, Paper Scissors they are given the choice of two games- Classic or Elemental. The rules of the two games are described within the buttons. Two sidebars show the two players (Human and Computer) and their current number of wins.

![Image of the landing page for Rock, Paper, Scissors](https://imgur.com/XcrSDN3.jpg)

Once a user makes a game selection, the middle section of the screen displays their "fighter" choices. Once they select a fighter, the computer player selects a random fighter, and the user sees a new screen displaying the winner (or draw) and the matchup. The win count of the players increments and the game automatically resets for another round.

![Gif showing classic mode gameplay](https://media.giphy.com/media/COaUZMhM3v7yzI4y1U/giphy.gif)

On the choose your fighter screen, a button labeled "Change Game?" appears in the header, which takes the user back to the choose your game screen. As a preventative measure, the button is disabled during the 2 second timeout between rounds. You will notice that the number of wins does not reset when you toggle between the two games. In fact, wins do not reset when you refresh the page either as that information is stored in localStorage.

![Gif showing a user changing from classic to elemental game](https://media.giphy.com/media/D2aEPm59ZY7bm1oiWX/giphy.gif)

### Future Additions
Some features that might be added in the future include:
- A login screen for users to enter their own name instead of "Human".
- A way to clear local storage and reset the win count to zero.
- Some additional css animation in the game play, such as some animation that directs the user's attention to the incrementing wins.


## Contributors
This was a solo project by Mod 1 Front End Engineering student, Claire Fields.
- Project Manager: [Kayla Wood](https://github.com/kaylaewood)


## Languages
Vanilla JavaScript  
CSS  
HTML   
