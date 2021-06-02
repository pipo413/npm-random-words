const messages = [
    "Jose",
    "Sergio",
    "Maria",
    "Carlos"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
    // console.log("ESTOY FUNCIONANDO");
};
let variable = randomMsg()

module.exports = {variable}

