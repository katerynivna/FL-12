function getMin(arr) {
    let n = arr.length;
    let mainMin = arr[0];
    for (let i = 0; i < n; i++) {
        let min = arr[i];
        if (min < mainMin) {
            mainMin = min;
        }
    }
    return mainMin;
}

getMin([300, 9 , 8 , 7 , -11, 100, 0, 2, 3, 6]);