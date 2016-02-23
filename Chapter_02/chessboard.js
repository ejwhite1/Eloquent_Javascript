// adding line to test pulling from kiln. ejw

// upon further review I don't believe this is correct. the 2nd try code is similar but correct.
// this prints out one line at a time where v2 prints out one string across multiple lines, using line breaks, per the instructions in the exercise
var board = "";
size = 4;

for (var rows = 0; rows <= size; rows += 1) {
    board = "";
    for (var columns = 0; columns <= size; columns += 1) {
        if (rows % 2 != 0) 
            if (columns % 2 != 0) 
                board = "#" + board;
            else
                board = " " + board;
        else 
            if (columns % 2 != 0) 
                board = " " + board;
            else
                board = "#" + board;
    }        
    console.log(board);
}