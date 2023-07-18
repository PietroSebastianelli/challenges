var maxIncreaseKeepingSkyline = function(grid) {
    const n = grid[0].length;
    // build columns
    let columns = [];
    for( let i = 0; i < n; i++){
        columns[i]=[];
        for(let j = 0; j < n; j++){
            columns[i].push(grid[j][i]);
        }
    }
    // calculate maximums
    let rowMax = [];
    let colMax = [];

    for ( row of grid ){
        rowMax.push((row.reduce((a,b) => Math.max(a,b), -Infinity)));
    }
    for ( col of columns){
        colMax.push((col.reduce((a,b) => Math.max(a,b), -Infinity))); 
    }

    let totVar = 0;
    
    for( let i = 0; i <n ; i++){
        for(let j = 0; j < n; j++){
            if (grid[i][j] < rowMax[i] && grid[i][j] < colMax[j])
                totVar += Math.min(rowMax[i],colMax[j]) - grid[i][j];
        }
    }

    return totVar;
}

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]))