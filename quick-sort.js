const quickSort = (arr, left = 0,right = arr.length - 1) => {
    // implement quick sort..
    if (left >= right){
        return;
    }
    const pivot = arr[Math.floor((left+right)/2)]
    const index = partition(arr, left, right, pivot)

    quickSort(arr, left, index - 1)
    quickSort(arr, index, right)
    return arr
}

const partition = (arr, left, right, pivot)=>{
    while(left <= right){
        while(arr[left] < pivot){
            left++;
        }
        while(arr[right] > pivot){
            right--;
        }
        if (left <= right){
            [arr[left], arr[right]] = 
                   [arr[right], arr[left]];
            left++;
            right--
        }
    }
    return left
}

let arr = [1,5,6,7,9,2,4,5,6,7]
console.log(quickSort(arr))