function verifyLatinSquare(array, m) {
    let l = array.length;
    for (let i = 0; i < l; i++){
        if (array[i].length != l) return 'Array not square';
    }
    if (l != m) return 'Array is wrong size';

    //checking rows for duplicates
    for (let i = 0; i < m; i++){
        let currentRow = array[i];
        for (let j = 0; j < m; j++){
            if (currentRow.filter( x => x == currentRow[j]).length > 1 ) return `${currentRow[j]} occurs more than once in row ${i+1}`;
        }
    }

    // checking columns for duplicates 
    for (let i = 0; i < m; i++){
        let currentColumn = [];
        for (let j = 0; j < m; j++){
            currentColumn[j]=array[j][i];
        }
        for (let j = 0; j < m; j++){
            if(currentColumn.filter( x => x == currentColumn[j]).length > 1) return `${currentColumn[j]} occurs more than once in column ${i+1}`;
        }
    }
    // checking if integers are within range
    for ( let i = 0; i < m; i++){
        for(let j = 0; j < m; j++){
            if (array[i][j] > m || array[i][j] < 1) return `${array[i][j]} at ${i+1},${j+1} is not between 1 and ${m}`;
        }
    }
    return `Valid latin square of size ${m}`;
    
}
