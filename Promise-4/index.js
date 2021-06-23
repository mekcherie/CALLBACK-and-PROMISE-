const food = new Promise((resolve, reject) => {
    resolve('Injera')
    reject('Bread')
  })
  
  
  // resolve food here: 
  food.then((faveFood) => {
    console.log(`${faveFood} ummmm delicious!`)
  })

// resolve food here: 



// **Challenge 1** Resolve your promise with the name of your favorite food. 
// Do this by calling the `resolve` with an argument. 

// **Challenge 2** Resolve the `food` promise with that `.then()` syntax 
// and print your favorite food to the console. 