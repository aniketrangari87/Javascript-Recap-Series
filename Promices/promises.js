// There are the Promises 


/*  1. Promises Number 1   */

const promiceOne = new Promise(function (resolve, reject) {

    // Do an Async Task 

    // DB calls , cryptography , network 

    setTimeout(function () {
        console.log("Async Task is complete ");
        resolve();
    }, 2000)
});
promiceOne.then(function () {
    console.log("resolved Completed ")
})

/*  Promises Number 2  */


new Promise(function (resolve, reject) {

    setTimeout(() => {
        console.log("Async Task 2 ");
        resolve()
    }, 2000);
}).then(function () {
    console.log("Completed t2 ")
})


// 3rd Promise 

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "Chai", email: " aniket66@g.com" })

    }, 1000);

})
promiseThree.then((user) => {
    console.log(user)
})

// Promise 4 

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({ username: "Aniket Rangari ", id: 10002 });
        } else {
            reject(' ERROR : something went wrong ');
        }

    }, 1000);

})
promiseFour.then((user) => {
    console.log(user);
    return user.username;
})
    .then((username) => {
        console.log(username)
    })
    .catch((error) => {
        console.log(error);
    }).finally( () =>{
        console.log("The promise either resolved or rejected ")
    })


    // Promise five 

    const promiseFive = new Promise ( (resolve , reject ) =>{

        setTimeout(() => {
            let error = true ;

            if (!error) {
                resolve({ username: "Javascript  ", password : 1234  });
            } else {
                reject(' ERROR : something went wrong ');
            } 
            
        }, 1000);
    })

async function consumePromiseFive (){
  try {
    const response  = await promiseFive;
    console.log(response)
    
  } catch (error) {
      console.log(error );
  }
}

consumePromiseFive()

async function  getAllusers(){

try {
    const   response = await   fetch('https://www.google.com');

    const data = response.json
    
    console.log(data)
} catch (error) {

    console.log(error)
    
}
}
getAllusers()