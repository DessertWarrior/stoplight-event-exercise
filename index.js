(function() {
  'use strict';
  function addMouseEnteredAndExit(element)
  {
    element.addEventListener('mouseenter',()=> {
      console.log(`Entered ${element.innerText} button`);
    })
    element.addEventListener('mouseleave',()=>{
      console.log(`Exited ${element.innerText} button`);
    })
  }
  // YOUR CODE HERE
  let stopButton = document.getElementById('stopButton');
  let slowButton = document.getElementById('slowButton');
  let goButton = document.getElementById('goButton');
  stopButton.addEventListener('click', ()=>{
    let stopLight = document.getElementById('stopLight');
    stopLight.classList.toggle('stop');
    if (stopLight.classList.contains('stop'))
      console.log('stopLight bulb On');
    else
      console.log('stopLight bulb off')
  });
  slowButton.addEventListener('click', ()=>{
    let slowLight = document.getElementById('slowLight');
    slowLight.classList.toggle('slow');
    if (slowLight.classList.contains('slow'))
      console.log('slowLight bulb On');
    else
      console.log('slowLight bulb off');
  })
  goButton.addEventListener('click', ()=>{
    let goLight = document.getElementById('goLight');
    goLight.classList.toggle('go');
    if (goLight.classList.contains('slow'))
      console.log('slowLight bulb On');
    else
      console.log('slowLight bulb off');
  })
  document.body.
  addMouseEnteredAndExit(stopButton);
  addMouseEnteredAndExit(slowButton);
  addMouseEnteredAndExit(goButton);

})();
