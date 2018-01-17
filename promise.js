//Creating Promises

const p = new Promise((resolve,reject) => 
    {
        setTimeout(() => 
        {
            resolve("Promise Done.!");
            //reject("In this case catch block runs")
        } 
        ,2000) 
    })

    p.then(
        data => {
            console.log(data)
        }
    )

    p.catch(err => {
        console.log(err)
    })

// Creating Another Promise
const o1 = [ { title : "Shagun Sharma",  id : 1  } , { title : "Mitin Sharma",  id : 2  } , { title : "Arti Sharma",  id : 3  } ];

function getPosts(id){
    //creating promise
    return new Promise((resolve,reject) => 
    {
        setTimeout(() => { 
            const t1=o1.find(t1 =>  t1.id === id)
            if(t1){
                resolve(t1);
            }
            else{
                reject(Error("Not found"))
            }
        },2000)
    })
}

getPosts(2).then( data => console.log(data))

//getPosts(2).catch(err => console.log("err"));

// Creating multiple Promises
const pp1=new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1"),2000);
})

const pp2=new Promise((resolve) => {
    setTimeout(() => resolve("Promise 2"),2000);
})

Promise
.all([pp1,pp2])
.then(data => {
    console.log(" Promises Running ");
    console.log(data)
})