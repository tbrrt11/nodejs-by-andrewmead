/* 1 */

// const square = function (x) {
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = x => {
//     return x*x
// }

// const square = x => x*x

// console.log(square(34))

/* 2 */

// const event1 = {
//     name: 'Birthday Party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name)
//     }
// }
// event1.printGuestList()

// const event2 = {
//     name: 'Birthday Party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name)
//     }
// }
// event2.printGuestList()

//CONCLUSÃO: não use arrow functions como métodos,
// que acessam propriedades do objeto (ele não reconhece
// a variável 'this'

/* 3 */
const event1 = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach(function(guest) {
            console.log(guest + 'is attending ' + this.name)
        })
    }
}
event1.printGuestList()

const event2 = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach(guest => console.log(guest + 'is attending ' + this.name))
    }
}
event2.printGuestList()

/* CONCLUSÃO: use arrow functions para acessar variáveis "globais"
=> arrow functions dont bind their own 'this' value */