// also known as brute force sorting
// in this we first select the min element from array and place it in its position
// an repeat the same again with remaining elements until all elements in array are sorted

function selectionSort(arrayOfNumbers){
    for(var j=0;j<arrayOfNumbers.length;j++){
        let min=null, minIndex=null;
        for(var i=j;i<arrayOfNumbers.length;i++){
            if(min==null){
                min=arrayOfNumbers[i];
                minIndex = i;
            }else if(arrayOfNumbers[i]<min){
                min = arrayOfNumbers[i];
                minIndex = i;
            }
        }
        var temp = arrayOfNumbers[j];
        arrayOfNumbers[j] = min;
        arrayOfNumbers[minIndex] = temp;
    }
    return arrayOfNumbers;
}
console.log(selectionSort([2,5,4,9,7]));