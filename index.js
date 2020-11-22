
let drivers = ["Milo", "Otis", "Garfield"]

const destructivelyAppendDriver = (name) => {
    drivers.push(name);
}
const destructivelyPrependDriver = (name) => {
    drivers.unshift(name);
}
const destructivelyRemoveLastDriver = (name) => {
    drivers.pop(name);
}
const destructivelyRemoveFirstDriver = (name) => {
    drivers.shift(name);
}
const appendDriver = (name) => {
    return [...drivers, name]
}
const prependDriver = (name) => {
    return [name, ...drivers]
}
const removeLastDriver = () => {
    return drivers.slice(0, 2)
}
const removeFirstDriver = () => {
    return drivers.slice(1)
}