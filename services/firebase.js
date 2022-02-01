let foneNumberInit = 100;
const init = "11000000";
let numberEND = 300;
const axios = require('axios');

async function updateStatus(num) {
    const phoneNumber = `${init}${num}`;
    foneNumberInit = 100
    numberEND = 300;

    await axios
        .put(
            `${process.env.MOCK_URL}${phoneNumber}`
        )
        .then(function (response) {
            console.log(response.data, `${phoneNumber}`);
        })
        .catch(function (error) {
            console.log(error, `${phoneNumber}`);
        });
}

async function runUpdateQA() {
    console.log("INICIO");
    for (let i = foneNumberInit; i <= numberEND; i++) {
        await updateStatus(i);
    }
    console.log("FIM");
}

async function runtUpdateOthers(){
    foneNumberInit = 301;
    numberEND = 400;
    console.log("INICIO");
    for (let i = foneNumberInit; i <= numberEND; i++) {
        await updateStatus(i);
    }
    console.log("FIM");
}