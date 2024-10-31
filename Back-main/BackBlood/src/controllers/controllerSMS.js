const accountSid = process.env.accountSid;
const authToken =  process.env.authToken;
const client = require('twilio')(accountSid, authToken);


module.exports = {
    async sendSMS(req,res){

        try{
            const {mensagem , number} = req.body;
            const response = await client.mensagem
            .create({
                body: '*O SEU SANGUE ESTÁ EM FALTA NO HEMONÚCLEO MAIS PRÓXIMO* Olá sangue bom🩸! Venha doar e ajude a salvar vidas!',
                from: process.env.number,
                to: `+55${number}`
            })
            res.status(200).json(response);
        } catch(error){
            res.status(400).json(error);
            console.log(error);
            
        }
    }
}

