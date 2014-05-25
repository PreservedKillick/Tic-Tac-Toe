Tic-Tac-Toe
===========

February 27, 2014

Epicodus: Week2, Day4 

Continuing on object-oriented JS with BDD/TDD.

Progress: partial tic tac toe objects (through game w/ players and board)

****************
Lesson:

Let's make a page that's a little bit harder than anything we've worked on so far: a tic-tac-toe game. Start off by making a game that two people play against each other; if you finish early, make a game that a person can play against the computer.

Make four prototypes: Player, Space, Board, and Game. Here are a few things (but not all!) the instances of these prototypes should do:

A player should know whether it's an X or an O.
A space should know its coordinates and be able to be marked by a player (e.g., space.markBy(playerX)). The Space prototype should be able to return a space by its coordinates (e.g., Space.find(1, 2)).
A board should create 9 spaces with the proper coordinates, and tell if there are three in a row marked by the same player.
A game should create 2 players and a board, be able to move to the next turn, know which player's turn it is, and be able to tell if the game is over or not.

Remember to keep using the BDD process: red, green refactor!
