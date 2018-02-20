
function mutation(arr) {
    let checkElement = [...arr[0].toLowerCase()];
    let second = [...arr[1].toLowerCase()];
    return second.every(x => {
      return checkElement.indexOf(x) >= 0
    })
  }

  mutation(["hello", "hey"]);
