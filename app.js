// const pounds = document.querySelector(".pound");
// const buttonConverter = document.querySelector(".btn");

// const kiloGram = document.querySelector(".kiloGram");
// const Gram = document.querySelector(".gram");
// const ounce = document.querySelector(".Ounce");


// const divPound = document.querySelector(".from-pound");
// const divKiloGram = document.querySelector(".from-kilGram");
// const divGram = document.querySelector(".from-Gram");
// const divOunce = document.querySelector(".from-ounce");

// buttonConverter.addEventListener("click", convert);

// function convert() {
//     if (pounds.value !== "") {
//         divPound.innerHTML =
//             `
//         <p> pound to klioGram   Equal = ${pounds.value * 0.45359237}</p>
//         <p> pound to gram   Equal = ${pounds.value * 453.59237}</p>
//         <p> pound to ounce  Equal = ${pounds.value * 16}</p>
//         `
//     } else {
//         divPound.innerHTML = "NO VALUE"
//     }

//     if (kiloGram.value !== "") {
//         divKiloGram.innerHTML =
//             `
//         <p> Kilo to gram = ${kiloGram.value * 1000}</p>
//         <p> Kilo to pound = ${kiloGram.value / 0.45359237}</p>
//         <p> Kilo to ounce = ${kiloGram.value / 0.02834952}</p>
//         `
//     } else {
//         divKiloGram.innerHTML = "NO VALUE"
//     }

//     if (Gram.value !== "") {
//         divGram.innerHTML =
//             `
//         <p> gram to Kilo ${Gram.value / 1000}</p>
//         <p> gram to pound ${Gram.value / 453.59237}</p>
//         <p> gram to ounce ${Gram.value / 28.34952}</p>
//         `
//     } else {
//         divGram.innerHTML = "NO VALUE"
//     }


//     if (ounce.value !== "") {
//         divOunce.innerHTML =
//             `
//         <p> ounce to kiloGram ${ounce.value * 0.028}</p>
//         <p> ounce to gram ${ounce.value * 28.34952}</p>
//         <p> ounce to pound ${ounce.value / 16}</p>
//         `
//     } else {
//         divOunce.innerHTML = "No VALUE"
//     }
// }

//////////////////////////////////////////////////////////////////////
// ${kiloGram.value = pounds.value * 1000}
const pounds = document.querySelector(".pound");
// const buttonConverter = document.querySelector(".btn");

const kiloGram = document.querySelector(".kiloGram");
const Gram = document.querySelector(".gram");
const ounce = document.querySelector(".Ounce");


const divPound = document.querySelector(".from-pound");
const divKiloGram = document.querySelector(".from-kilGram");
const divGram = document.querySelector(".from-Gram");
const divOunce = document.querySelector(".from-ounce");


pounds.addEventListener('keyup',function (){
    kiloGram.value= pounds.value * 0.45359237
})
// buttonConverter.addEventListener("click", convert);

function convert() {
    if (pounds.value !== "") {
        divPound.innerHTML =
            `
        <p> pound to klioGram   Equal = ${pounds.value * 0.45359237}</p>
        <p> pound to gram   Equal = ${pounds.value * 453.59237}</p>
        <p> pound to ounce  Equal = ${pounds.value * 16}</p>
        `
    } else {
        divPound.innerHTML = "NO VALUE"
    }

    if (kiloGram.value !== "") {
        divKiloGram.innerHTML =
            `
             <p> Kilo to gram = ${kiloGram.value * 1000}</p>  
        <p> Kilo to pound = ${kiloGram.value / 0.45359237}</p>
        <p> Kilo to ounce = ${kiloGram.value / 0.02834952}</p>

        `
    } else {
        divKiloGram.innerHTML = "NO VALUE"
    }

    if (Gram.value !== "") {
        divGram.innerHTML =
            `
        <p> gram to Kilo ${Gram.value / 1000}</p>
        <p> gram to pound ${Gram.value / 453.59237}</p>
        <p> gram to ounce ${Gram.value / 28.34952}</p>
        `
    } else {
        divGram.innerHTML = "NO VALUE"
    }


    if (ounce.value !== "") {
        divOunce.innerHTML =
            `
        <p> ounce to kiloGram ${ounce.value * 0.028}</p>
        <p> ounce to gram ${ounce.value * 28.34952}</p>
        <p> ounce to pound ${ounce.value / 16}</p>
        `
    } else {
        divOunce.innerHTML = "No VALUE"
    }
}



