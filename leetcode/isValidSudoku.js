function getBlock(h,k, board)
{
    let block = [];
    if (Math.max(h,k) > 2 || Math.min(h,k) < 0)
    {
        console.log('incorrect indices');
        return block;
    }
    for ( let i = h*3; i < (h+1)*3; i++)
    {
        block = block.concat(board[i].slice(k*3,(k+1)*3));
    }
    return block;
}

function getColumn(j, board)
{
    let column = [];
    if (j > 8 || j < 0)
        return column;
    for(let i = 0; i < 9; i++)
    {
        column.push(board[i][j]);
    }
    return column;
}

function isValid(array)
{
    if (array.length != 9)
    {
        console.log('invalid array length');
        return;
    }

    const foundNumbers = new Array(9).fill(false);
    let num;
    for (let i = 0; i < 9; i++)
    {
        num = parseInt(array[i]);
        if (Number.isNaN(num))
            continue;
        else if (foundNumbers[num-1] == false)
            foundNumbers[num-1] = true;
        else 
            return false;
    }
    return true;
}

var isValidSudoku = function(board) {
    let h,k;
    for (let i = 0; i < 9; i++){
        if (isValid(board[i]) == false)
            return false;
        if (isValid(getColumn(i,board)) == false)
            return false;
        h = i % 3;
        k = Math.floor(i / 3);
        if (isValid(getBlock(h,k, board)) == false)
            return false;
    }
    return true;
};
