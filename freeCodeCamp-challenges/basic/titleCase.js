function titleCase(str) {
    return [...str.toLowerCase().split(' ')].map(x => x.replace(x.charAt(0), x.charAt(0).toUpperCase())).join(' ')
  }

titleCase("I'm a little tea pot");