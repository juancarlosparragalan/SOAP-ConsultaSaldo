const {
    faker
} = require('@faker-js/faker'),
    express = require('express'),
    router = express.Router();

router.post('/', response);

//generate ramdom number
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//console.log(getRandomInt(10000))
async function response(req, res, next) {
    const  numberVar = getRandomInt(10000);
    const xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="http://www.banco.com/esb/services/consultaSaldo/"><soapenv:Header/><soapenv:Body><con:consultaSaldoRs><con:responseHeader><con:status><con:statusCode>200</con:statusCode><con:statusDesc>Success</con:statusDesc></con:status></con:responseHeader><con:saldoRs><con:disponible>true</con:disponible><con:saldo>saldito</con:saldo></con:saldoRs></con:consultaSaldoRs></soapenv:Body></soapenv:Envelope>'
      const xmlResp = xml.replace('numberVar', numberVar)
    res.status(200).send(xmlResp);
}

module.exports = response;