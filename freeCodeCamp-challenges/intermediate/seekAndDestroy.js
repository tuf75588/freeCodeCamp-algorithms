
function destroyer(arr) {
    let args = [...arguments].findIndex(x => typeof x !== 'object');
    let func = [...arguments].slice(args);
    arr = arr.filter(x =>  {
       return !func.includes(x)
    })
    return arr
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
