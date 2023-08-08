// Code your solutions in this file
function writeCards(array) {
    const newArray = array ;
    for (let count = 0;count < array.length;count++) {
        newArray[count] = `Thank you, ${array[count]}, for the wonderful surprise gift!`;
    }
    return newArray;
}

writeCards(["Bob", "Simp", "Cougar"])

function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }

}