// MERGE SORT IS BASED ON DIVIDE AND CONQUER..

// SO FIRST WE HAVE TO DIVIDE OUR ARRAY INTO SUBARRAYS..
// THEN WE WILL CONTINUE OUR DIVIDING PROCESS TILL subArray.length == 0;

const mergeSort = (array) => {
    // So this is our base condition whenever any array's length reaches one we will return it to processed our next step..
    if (array.length <= 1){
        return array;
    }
    // For dividing any array into two part we must need a mid..
    const mid = Math.floor(array.length/2);
    const leftArray = array.slice(0,mid);
    const rightArray = array.slice(mid);

    // we will call merge function to merge or conquer our divided array
    return merge(mergeSort(leftArray),mergeSort(rightArray))
}

const merge = (leftArr, rightArr) => {
    var output = [];
    var leftIndex = 0;
    var rightIndex = 0;
    // we will compare one by one every array elament from start..
    // whenever any array reaches it's last elements length we will stop loop 
         while(leftIndex < leftArr.length && rightIndex < rightArr.length){
               let leftEle = leftArr[leftIndex];
               let rightEle = rightArr[rightIndex];
               if (leftEle < rightEle){
                   output.push(leftEle);
                   leftIndex++;
               } else {
                    output.push(rightEle);
                    rightIndex++;
               }
         }
        //  at last we will return our output and we will spread our both array to take left elements..
         return [...output, ...leftArr.slice(leftIndex),...rightArr.slice(rightIndex)]
}
console.log(mergeSort([1,5,6,7,9,2,4,5,6,7]))