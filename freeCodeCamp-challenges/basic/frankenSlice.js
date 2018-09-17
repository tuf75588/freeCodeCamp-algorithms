function frankenSplice(arr1, arr2, n) {
  const arrOne = [...arr1];
  const arrTwo = [...arr2].slice(0,n)
  const temp = [...arrTwo, ...arrOne, ...arr2.slice(n)]
  return temp
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);