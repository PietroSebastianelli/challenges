
function pickPeaks(arr){
    let pickedPeaks = {
        pos : [],
        peaks : []
    };
    
    for(let i = 1; i < arr.length -1; i++ ){
    // simple (non - plateau) peaks 
        if (arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            pickedPeaks.pos.push(i);
            pickedPeaks.peaks.push(arr[i]);
        }

    // plateau peaks 
        if ( arr[i] > arr[i-1] && arr[i] == arr[i+1]){
            let j = i, plateau = arr[i];
            while (arr[j] == plateau){
                if (arr[j+1] < plateau){
                    pickedPeaks.pos.push(i);
                    pickedPeaks.peaks.push(arr[i]);
                }
                j++;
            }
            i=j-1;
         }
    }
    return pickedPeaks;
}
