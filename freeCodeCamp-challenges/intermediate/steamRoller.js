function steamrollArray(arr) {
    let copy = [].concat(...arr);
    return copy.some(Array.isArray) ? steamrollArray(copy) : copy
}

