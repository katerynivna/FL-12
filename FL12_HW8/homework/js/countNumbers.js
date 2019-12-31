function countNumbers(arr) {
    let n = arr.length;
    let resObj = {};
    for (let i = 0; i < n; i++) {
        if(arr[i] >= '0' || arr[i] <= '9') {
            resObj[arr[i]] = (resObj[arr[i]]) ? resObj[arr[i]] + 1 : 1;
        } 
    }
    return resObj;
}

alert(countNumbers('jdjjka000466588kkkfs662555'));