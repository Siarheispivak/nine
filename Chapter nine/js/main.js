// function pageLoadedHandler() {
//     alert("I'm Alive!");
// }
// window.onload = pageLoadedHandler;

// // window.onload = init;
// // function init() {
// //     let images = document.getElementsByTagName("img");
// //     for (let i = 0; i < images.length; i++) {
// //         images[i].onclick = showAnswer;
// //     }
// // };

// function showAnswer(e) {
//     let image = e.target;
//     let name = image.id;
//     name = name + ".jpg";
//     image.src = "pic/" + name;

//     setTimeout(reblur, 5000, image);
// };


// function reblur(image) {
//     let name = image.id;
//     name = name + "blur.jpg";
//     image.src = "pic/" + name;
// }



// let image0 = document.getElementById("zero");
// image0.onclick = showAnswer;
// let image1 = document.getElementById("one");
// image1.onclick = showImageOne;
// let image2 = document.getElementById("two");
// image2.onclick = showImageTwo;
// let image3 = document.getElementById("three");
// image3.onclick = showImageThree;
// let image4 = document.getElementById("four");
// image4.onclick = showImageFour;
// let image5 = document.getElementById("five");
// image5.onclick = showImageFive;


// function showImageZero() {
//     let image = document.getElementById("zero");
//     image.src = "pic/zero.jpg";
// }
// function showImageOne() {
//     let image = document.getElementById("one");
//     image.src = "pic/one.jpg";
// }
// function showImageTwo() {
//     let image = document.getElementById("two");
//     image.src = "pic/two.jpg";
// }
// function showImageThree() {
//     let image = document.getElementById("three");
//     image.src = "pic/three.jpg";
// }
// function showImageFour() {
//     let image = document.getElementById("four");
//     image.src = "pic/four.jpg";
// }
// function showImageFive() {
//     let image = document.getElementById("five");
//     image.src = "pic/five.jpg";
// }






///////////////////////////////////////////////////////////////



// window.onload = init;
// function init() {
//     let images = document.getElementsByTagName("img");
//     for (let i = 0; i < images.length; i++) {
//         images[i].onmouseover = showAnswer;
//         images[i].onmouseout = reblur;
//     }
// };

// function showAnswer(e) {
//     let image = e.target;
//     let name = image.id;
//     name += ".jpg";
//     image.src = "pic/" + name;

//     setTimeout(reblur, 3000, image);
// };


// function reblur(image) {
//     let name = image.id;
//     name += "blur.jpg";
//     image.src = "pic/" + name;
// }







/////////////////////////////////////////////////////////////////////








// let addOne = function (x) {
//     return x + 1;
// }
// let six = addOne(5);
// console.log(six);



// window.onload = function () {
//     alert("The page is loaded!");

// }



// let passengers = [
//     { name: "Jane Doloop", paid: true, ticket: "coach" },
//     { name: "petia", paid: true, ticket: "firstclass" },
//     { name: "JMary", paid: false, ticket: "firstclass" },
//     { name: "diablo", paid: true, ticket: "coach" },
//     { name: "lox", paid: false, ticket: "economUp" },
//     { name: "pablo", paid: true, ticket: "economUp" }
// ];
// function createDrinkOrder(passenger) {
//     let orderFunction;
//     if (passenger.ticket === 'firstclass') {
//         orderFunction = function () {
//             alert('would you like a cocktail or wine?');
//         };
//     } else if (passenger.ticket === 'economUp') {
//         orderFunction = function () {
//             alert('would you like a water, lemonade or wine?');
//         };
//     } else {
//         orderFunction = function () {
//             alert('Your choice is cola or water.');
//         };
//     }
//     return orderFunction;
// }


// function createDinnerOrderFunction(passenger) {
//     let orderFunction;
//     if (passenger.ticket === 'firstclass') {
//         orderFunction = function () {
//             alert('chicken or pasta?');
//         };
//     } else if (passenger.ticket === 'economUp') {
//         orderFunction = function () {
//             alert('snacks or platter of cheese?');
//         };
//     } else {
//         orderFunction = function () {
//             alert('nuts or cheaps?');
//         };
//     }
//     return orderFunction;
// }


// function serveCustomer(passenger) {
//     let getDrinkOrderFunction = createDrinkOrder(passenger);
//     let getDinnerOrderFunction = createDinnerOrderFunction(passenger);
//     getDrinkOrderFunction();
//     getDinnerOrderFunction();
// }

// function servePassengers(passengers) {
//     for (let i = 0; i < passengers.length; i++) {
//         serveCustomer(passengers[i]);
//     }
// }
// servePassengers(passengers);






















let products = [{ name: 'Grapefruit', calories: 170, color: 'red', sold: 8200 },
{ name: 'Orange', calories: 160, color: 'orange', sold: 12101 },
{ name: 'Cola', calories: 210, color: 'caramel', sold: 25412 },
{ name: 'Diet Cola', calories: 0, color: 'caramel', sold: 43922 },
{ name: 'Lemon', calories: 200, color: 'clear', sold: 14983 },
{ name: 'Raspberry', calories: 180, color: 'pink', sold: 9427 },
{ name: 'Root Beer', calories: 200, color: 'caramel', sold: 9909 },
{ name: 'Water', calories: 0, color: 'clear', sold: 62123 }
];

function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}


function compareName(colaA, colaB) {
    if (colaA.name < colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else {
        return -1;
    }
}


function compareCalories(colaA, colaB) {
    if (colaA.calories < colaB.calories) {
        return 1;
    } else if (colaA.calories === colaB.calories) {
        return 0;
    } else {
        return -1;
    }
}


function compareColor(colaA, colaB) {
    if (colaA.color < colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else {
        return -1;
    }
}

function printProducts(products) {
    for (let i = 0; i < products.length; i++) {
        console.log('Name: ' + products[i].name +
            ', Calories: ' + products[i].calories +
            ', Color: ' + products[i].color +
            ', Sold: ' + products[i].sold);
    }
}

products.sort(compareSold);
console.log('Products printed by sold:')
printProducts(products);
products.sort(compareName);
console.log('Products printed by name:')
printProducts(products);
products.sort(compareCalories);
console.log('Products printed by calories:')
printProducts(products);
products.sort(compareColor);
console.log('Products printed by colors:')
printProducts(products);




