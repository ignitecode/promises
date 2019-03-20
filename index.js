
/**
 * Creates a new promise which sometimes resolves and sometimes rejects but
 * always takes 5 seconds for a response.
 */
let rnd = Math.floor(Math.random() * 6) + 1;
const asyncNonBlocking = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // This won't be called until 5 seconds into the future (it mimicks an API call)
      let rnd = Math.floor(Math.random() * 6) + 1;

      if(rnd > 2)
         resolve({ num: rnd, message: 'It resolved successfully!'});
      else
         reject({ num: rnd, message: 'Not quite right...'});
    }, 5000);
  });
}
// Async we fire off 20 promises in literally a second
console.log('Starting promises');
for(let i = 0; i < 20; i++) {
  asyncNonBlocking().then(value => {
    console.log(value);
  }).catch(err => {
    console.log('Oh no there was an error!', err);
  });
}
