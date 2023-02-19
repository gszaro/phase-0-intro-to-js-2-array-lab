// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
function appendCat(name) {
    const moreCats = [...cats, name];
    return moreCats;
}
function prependCat(name) {
    const moreCats = [name, ...cats];
    return moreCats;
}
function removeLastCat() {
    const lessCats = cats.slice(0,cats.length-1);
    return lessCats;
}
function removeFirstCat() {
    const lessCats = cats.slice(1);
    return lessCats;
}