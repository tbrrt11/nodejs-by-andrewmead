const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([54, 5, 4])
        reject('Things went wrong!')
        reject('Things went wrong!')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Sucess!', result)
}).catch((error) => {
    console.log('Error!', error)
})