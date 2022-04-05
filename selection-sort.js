// In selection sort we will select the minimum value for every element..
// from next element to last element.. 
const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++){
        let min = i;
        for (let j = i + 1; j < array.length; j++){
            // if any value is lesser than currant value than we will change it..
            if (array[min] > array[j]){
                min = j;
            }
        }
        if (min != i){
            let temp = array[min];
            array[min] = array[i];
            array[i] = temp;
        }
    }
    return array
}


console.log(selectionSort([1,5,6,7,9,2,4,5,6,7]))


