// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name)
}
destructivelyAppendCat("Ralph");

funtion destructiveluPrependCat(name){
    return cats.unshift(name);
}
destructiveluPrependCat("BOB");

function destructivelyRemoveLastCat() {
    return cats.pop();
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat() {
    return cats.shift()
}
destructivelyRemoveFirstCat();

function appendCat(name) {
    return [...cats, name];
}
appendCat("Broom");

function prependCat(name) {
    return [name, ...cats]
}
prependCat("Arnold");

function removeLastCat() {
    return cats.slice(0, cats.length - 1)
}
removeLastCat();

function removeFirstCat() {
    return cats.slice(1);
}
