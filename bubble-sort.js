
const bubbleSort = (n,arr) => {
    for (let i = 0; i < n-1; i++){
        for (let j = 0; j < n-i-1; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr)
}

let arr = [1,5,6,7,9,2,4,5,6,7]
bubbleSort(arr.length,arr)