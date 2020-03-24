str = "Two birds"

// function getLength() {
//     checkLength();
// }

function checkLength() {
    if (str.length < 5) {
        console.log("Too short")
    } else {
        console.log(str.length)
    }
}

checkLength()