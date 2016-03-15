//Below the board is set up using arrays and the nested arrays are used to group the pieces.

var checkerboard = [[null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null]];

var pieces = {
    "red": [],
    "black": []
};

//Functions setSquare and getPiece put pieces on the board and check to see which piece is on a specific space.

function setSquare(player, row, col) {
    checkerboard[row][col] = player;
    if(player === "R"){
        pieces["red"].push([row,col]);
    }else if(player === "B"){
        pieces["black"].push([row,col]);
    }
}

function getPieceAt(row, col) {
    return checkerboard[row][col];
}

//These functions set up the game and clean it the board.

function setUpBoard(){
    for(i=1;i<5;i++){
        setSquare("R",0,i*2-2);
        setSquare("R",2,i*2-2);
        setSquare("B",6,i*2-2);
    }for(i=1;i<5;i++){
        setSquare("R",1,i*2-1);
        setSquare("B",5,i*2-1);
        setSquare("B",7,i*2-1);
    }
}

function clearBoard(){
    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            setSquare(null,i,j);
        }
    }
}

setUpBoard();