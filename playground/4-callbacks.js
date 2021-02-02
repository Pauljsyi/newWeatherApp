setTimeout(() => {
    console.log('Two seconds are up')
}, 10000)

const names = ['Ash', 'Jessie', 'James'];
const shortNames = names.filter((name) => {
    return name.length <= 4
})

console.log(names)