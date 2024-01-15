// store gameboard as array inside gameboard object
//store players as objects
//object to control flow of game
//logic check for win/loss/tie (eg  [1] == [4] ==[7]   is a win/loss for someone)
//object to handle display/DOM logic -> function to display array as gameboard with markers
// function to click on dom to place marker (check if space is available to place marker)
//allow players to put names
//start/reset game buttons (declare winners)

const winState = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// once: true