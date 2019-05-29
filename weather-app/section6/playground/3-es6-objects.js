// Object property shorthand

const name = 'Thiago'
const userage = 20

const user = {
    name,
    age: userage,
    locatoin: 'Curitiba'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    // rating: 22
}

// const label = product.label
// const stock = product.stock

const { label: productLabel, stock, rating = 10 } = product
console.log(productLabel, stock, rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)