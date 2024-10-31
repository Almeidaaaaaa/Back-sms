const knex = require ('../../database/index');

module.exports ={
    async getDoador(req, res){

        try {
            const doadores = await knex('doador');
            return res.status(200).send(doadores);
          } catch (erro) {
            return res.status(400).send(erro);
          }
        },

    async createDoador(req, res){
        try{
            const {dodcpf} = req.params;
            const {dodnome} = req.body;
            const {dodend} = req.body;
            const {dodnum} = req.body;
            const {dodcomp} = req.body;
            const {dodbairro} = req.body;
            const {dodmunic} = req.body;
            const {dodcep} = req.body;
            const {doduf} = req.body;
            const {dodtiposang} = req.body;
            const {doddtnasc} = req.body;
            const {dodtel} = req.body;
            const {dodemail} = req.body;
            const {dodgenero} = req.body;


            await knex('doador').insert({
              dodcpf,
              dodnome,
              dodend,
              dodnum,
              dodcomp,
              dodbairro,
              dodmunic,
              dodcep,
              doduf,
              dodtiposang,
              doddtnasc,
              dodtel,
              dodemail,
              dodgenero
            });
            return res.status(201).send(
              {
                msg: 'Cadastro efetuado com sucesso!'
              }
            )   
          }catch (error){
           return res.status(400).json({'error': error})
          }
          
        },

        async specifydoador(req, res) {
         // try {
              const { dodnome, dodcpf } = req.body;
                          
              const result = await knex('doador')
                  .where('dodnome', 'like', '%' + dodnome + '%')
                  .andWhere('dodcpf', dodcpf)
                
      
              return res.json(result);
      //    } catch (error) {
              return res.status(400).json({ 'error': error }); 
      //    }
      },
      
        async updateDoador(req, res){
            const {dodcpf} = req.params;
            const {dodend} = req.body;
            const {dodnum} = req.body;
            const {dodcomp} = req.body;
            const {dodbairro} = req.body;
            const {dodmunic} = req.body;
            const {dodcep} = req.body;
            const {doduf} = req.body;
            const {dodtel} = req.body;
            const {dodemail} = req.body;

            await knex('doador').update({
              dodcpf,
              dodend,
              dodnum,
              dodcomp,
              dodbairro,
              dodmunic,
              dodcep,
              doduf,
              dodtel,
              dodemail
            }).where({dodcpf});
            return res.status(201).send({
              msg: 'Perfil atualizado com sucesso!'
            })
        },
        async deleteDoador(req, res){
          const {dodcpf} = req.params;
          try{
            const response = await knex('doador').where({dodcpf});
            if(response.length !=0){
              return res.status(409).send({msg:'O perfil não pode ser apagado, dados incorretos'})
            }else{
              await knex('doador')
              .where({dodcpf})
              .del();
              return res.status(200).send({msg:'Perfil deletado com sucesso'});
            }
          } catch(error){
            console.error(error);
            return res.status(500).send({msg: error})
            
          }
        }
    }

 

       