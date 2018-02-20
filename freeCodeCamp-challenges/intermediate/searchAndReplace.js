function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
        after = after.split('')
        after[0] = after[0].toUpperCase()
        after = after.join('')
        return [...str.split(' ')].map(word => word === before? word = after : word).join(' ')
    }
    return [...str.split(' ')].map(word => word === before? word = after : word).join(' ')
}

