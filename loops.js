function forLoop(alpha) {
  for( let i = 0; i < 25; i++ ) {
    if(i < 0 || i >= 25 ) {
      alpha.push("I am  \i strange loops.")
    }
    else {
      alpha.push("I am ${ i }  strange loop.")
    }
  }
  return alpha
}