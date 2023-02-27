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

## Website

[Tetriso](https://www.tetriso.haam.space/).





https://reactrouter.com/en/main/getting-started/tutorial
https://v5.reactrouter.com/web/guides/quick-start


https://firebase.google.com/docs/firestore/query-data/get-data
https://firebase.google.com/docs/firestore/manage-data/add-data




TODO


# cosmetic

change tetris block images

on main homepage make the text shorter and more visible with styling. 

replace all icons with svg react icons

in game add animation when block piece drops 

make a smooth small pop up in game menu that the text was copied

# interface 

user will join the mode depending on id key he will have available next to game. 

global score will show top 100

(maybe) on mobile screen the whole page will rotate
    https://w3c.github.io/screen-orientation/


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

be able to pause game

# database

add cache for local score history (SWR)

tetriso database:
    how to save user info system
    how to save relay of rooms for people to connect (the relays must be created or deleted, before or after the match) 
        in multiplayer how to save each player moves so they can be mirrored from opponent to opponent  

in database save random pixel images as user profile pictures


# others

find used material and tetris tutorial, add them into github readme resources for this project 





RESOURCES

text glitch effect
Tee Diang
https://codepen.io/acupoftee


clip path maker
https://bennettfeely.com/clippy/

generate random string
https://stackoverflow.com/a/27747377/15749280