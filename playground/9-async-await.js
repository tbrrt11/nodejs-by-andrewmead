const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    throw new Error('Something went wrong')
    return "Thiago"
}

doWork().then((result) => {
    console.log('result', result)
}).catch((error) => {
    console.log('e', error)
})