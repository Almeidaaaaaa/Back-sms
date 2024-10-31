const knex = require ('../../database/index');


module.exports ={
    async getHemonucleo(req,res){
        try {const hemonucleos = await knex('hemonucleo').select('*');
        return res.status(200).json(hemonucleos);
    } catch(error){
        return res.status(400).json({'error': 'Erro ao obter hemonúcleos'});
    }
},

    async createHemonucleo(req,res){
        try {
            const {hemcnpj} = req.body;
            const {hemnome} = req.body;
            const {hememail} = req.body;
            const {hemtel} = req.body;
            const {hemend} = req.body;
            const {hemnum} = req.body;
            const {hemcomp} = req.body;
            const {hembairro} = req.body;
            const {hemmunic} = req.body;
            const {hemcep} = req.body;
            const {hemuf} = req.body;
            const {hemresptec} = req.body;
            
            await knex('hemonucleo').insert({
                hemcnpj,
                hemnome,
                hememail,
                hemtel,
                hemend,
                hemnum,
                hemcomp,
                hembairro,
                hemmunic,
                hemcep,
                hemuf,
                hemresptec 
            });
            return res.status(201).send(
                {
                    msg: 'Cadastro efetuado'
                }
            )
        }catch(error){
            return res.status(400).json({'error':error})
        }
    },
    async specificyhemonucleo(req, res) {
        try {
            const { nome, hemcnpj } = req.params; 
            const result = await knex('hemonucleos')
                .where('nome', 'like', '%' + nome + '%')
                .andWhere('hemcnpj', hemcnpj); 
    
            return res.json(result);
        } catch (error) {
            return res.status(400).json({ 'error': error.message });
        }
    },
    

    async updateHemonucleo(req,res){
        const {hemcnpj} = req.body;
            const {hemnome} = req.body;
            const {hememail} = req.body;
            const {hemtel} = req.body;
            const {hemend} = req.body;
            const {hemnum} = req.body;
            const {hemcomp} = req.body;
            const {hembairro} = req.body;
            const {hemmunic} = req.body;
            const {hemcep} = req.body;
            const {hemuf} = req.body;
            const {hemresptec} = req.body;
            
            await('hemonucleo').update({
                hemcnpj,
                hemnome,
                hememail,
                hemtel,
                hemend,
                hemnum,
                hemcomp,
                hembairro,
                hemmunic,
                hemcep,
                hemuf,
                hemresptec 
            }).where({hemcnpj});
            return res.status(201).send({
                msg: 'Perfil atualizado'
            })
    },
    async deleteHemonucleo(req,res){
        const {hemcnpj} = req.params;
        try{
            const response = await knex('hemonucleo').where(hemcnpj);
            if(response.length != 0){
                return res.status(409).send(
                    {
                        msg: 'Perfil deletado'
                    }
                );
            }
        }catch(error){
            console.error(error);
            return res.status(500).send({msg: error})
            
        }
    }
}