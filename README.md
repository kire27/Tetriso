# Tetriso

A personal project of Tetris like web optimized game.

**Commands:**
#### `npm start`
#### `npm test`
#### `npm run eject`
#### `npm run build`
#### `gh-pages -d build`
#### `git add .`
#### `git commit -m "smt"`
#### `git push origin master`
#### `npm run build`
#### `gh-pages -d build`
##
## Website

[Tetriso](https://www.tetriso.haam.space/).



a


TODO

# cosmetic

add license notice in footer

make the background stop flickering (resizing) on changing sub page (when clicked single player or multiplayer)
    or make it repeatable

change the color scheme on high scores global and local table

on main homepage make the text shorter and more visible with styling. 
[play singleplayer] and [play multiplayer] buttons could have neon like styling to glow on hover with circling animation around the border

replace all icons with svg react icons

in game add animation when block piece drops 


# interface 

remove settings button. there will be no settings as a option

remove contact us and support us buttons in footer

remove twitter link in footer

in game remove settings and question mark icons

make the whole game horizontal for originality.
    playground1 (score and block holder) will be above main playground
    playground2 (next blocks) will be under main playground 
playground will be separated on 2 halves 
    user can clear rows in each half separately, but when both halves are cleared at the same time user will get double the score

local score will show only top 10

global score will show top 100


# gameplay

improve scoring and leveling system

on multiplayer add options to create or join room
    - in the room you will paste an ID with which you can use to join another room
    - or you can get ID so others can join you

in multiplayer in match there will be two playground next to each other
    - on right the users playground 
    - on left is a smaller playground mirroring opponents moves

add a delay in which the next pieces will start to fall
    the delay will get shorter as the level goes up


# database

add cache for local score history (SWR)

tetriso database:
    how to save user info system
    how to save relay of rooms for people to connect (the relays must be created or deleted, before or after the match) 
        in multiplayer how to save each player moves so they can be mirrored from opponent to opponent  

in database save random pixel images as user profile pictures


# others

find used material and tetris tutorial, add them into github readme resources for this project 

