const CheckPromiseFunction=()=>{

// Promise is an object.
// we write code inside Promise which may take time.i.e. async oprations
// it always perform a completion or failure of an async opration
// There is not pending state i.e. A promise always returns Success or Failure result. i.e. Resolve or Reject result.
// 

    const p=new Promise((resolve,reject)=>{
        let x = 4+5;
        if(x== 19)
            resolve("Data-Success");
        else
            reject("Data-Failure");
    });

//     console.log(p);

//     p.then((msg)=>{
// console.log(`promise state : ${msg}. \n  new msg : ${msg}`);
//     }).catch((msg)=>{
//         console.log(`promise state : ${msg}. \n new msg : ${msg}`);
//     })

// const onSuccess=(msg)=>{
//     console.log(`Success Section : ${msg}`);
// }

// const onFailure=(msg)=>{
//     console.log(`Failed Section : ${msg}`);
// }



// p
// .then((msg)=>onSuccess(msg))
// .catch((msg)=>onFailure(msg));

// You can call as below

p
.then(onSuccess)
.catch(onFailure);

}



const onSuccess=(msg)=>{
    console.log(`Success Section : ${msg}`);
}

const onFailure=(msg)=>{
    console.log(`Failed Section : ${msg}`);
}
