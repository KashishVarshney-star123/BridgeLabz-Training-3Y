
//sync
//async : settimeout, setInterval, fetch, event
//web api-fetch, settimeout, call stack, enevt loop, microstack queue, macrostack queue,

console.log("start")

function getUser(callback){
    setTimeout(()=>{
        console.log("user data ....");
        callback();
    }, 2000);
}

function getUserBankDetails(){
    setTimeout(()=>{
        console.log("user bank details");
    }, 1000);
}

function getUserInc(){
    setTimeout(()=>{
        console.log("user insurence data");
    }, 2000);
}

// callback, promise, async await

// callback hell
getUser(()=>{
    getUserBankDetails(()=>{
        getUserInc()
    })
});

// setTimeout(()=>{
//     console.log("hello")
// },2000);

// setTimeout(()=>{
//     console.log("welcome")
// },1000);

console.log("end")

// // promise chain
// let mypromise = new Promise((resolve,reject)=>{
//     let age = 20;
//     if(age>18){
//         resolve("age is valid")
//     }else{
//         reject("age is invalid")
//     }
// });
// mypromise
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((err)=>{
//     console.log(err)
// })

console.log("start")

function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user data ....");
            resolve();
        }, 3000);
    })
}

function getUserBankDetails(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user bank details");
            resolve();
        }, 1000);
    })
}

function getUserInc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user insurence data");
            resolve();
        }, 2000);
    })
}
// getUser()
// .then(()=>{
//     return getUserBankDetails();
// }).then(()=>{
//     return getUserInc();
// }).then(()=>{
//     console.log("process...end");
// }).catch((err)=>{
//     console.log(err)
// })

// console.log("end")

//async await
async function call(){
    await getUser();
    await getUserBankDetails();
    await getUserInc();
}
call()

object creation: object literal, functional constructor, class,