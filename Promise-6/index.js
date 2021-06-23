function whatToEat(timeOfDay) {
  return new Promise((resolve, reject) => {
    if (timeOfDay === 'breakfast') {
      resolve('egg')
    } else if (timeOfDay === 'lunch') {
      resolve('soup')
    } else if (timeOfDay === 'dinner') {
      resolve('pizza')
    } else {
      reject('Not hungry right now.')
    }
  })
}


// Call yout function and resolve the promise here! 
whatToEat('lunch')
.then(food => console.log(food))
.catch(err => console.log(err))
.finally(() => console.log('All done!'))


// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 

// If the `timeOfDay` is anything else reject the promise with 
// the 'message' I'm not hungry right now.  