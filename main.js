// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll('.like-glyph')
//picking out the like id that you found from HTML inspect.
//if youre selecting a class name, us . in the parenthesis. if youre using an id, use # in the parenthesis
  likes.forEach((pushLike) => {
    pushLike.addEventListener("click", () => {

      if (pushLike.textContent === EMPTY_HEART) {
        mimicServerCall()
        .then(() => {
          pushLike.textContent = FULL_HEART
          pushLike.className = 'activated-heart'
        })
        .catch((error) => {
          const err = document.getElementById("modal")
          err.className = ''
          err.textContent = error
          setTimeout(() => err.className = 'hidden', 3000)
          //3000 is miliseconds. means 3 seconds. this is making the error message disappear and then reappear for 3 seconds.
        })
      } else {
        pushLike.textContent = EMPTY_HEART
        pushLike.className = '.like-glyph'
      }
      //this is so the heart can be changed back to empty if you click it again

      //console.log(pushLike)
      //^ this is just a midway test to see if what youre 
      //doing is what you should be doing
    })
    
})
// to invoke a function, write the function with parenthesis

//console.log(likes)
//invoke the new function you just wrote



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
