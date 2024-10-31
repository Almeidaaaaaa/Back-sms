const knex = require ('../../database/index');

module.exports = {
    async getDoacao(req, res) {
        try {
            const { doaid } = req.params;
            const result = await knex('doacao')
                .join('doador', 'doacao.dodcpf', 'doador.dodcpf') 
                .join('hemonucleo', 'doacao.hemcnpj', 'hemonucleo.hemcnpj') 
                .select('doacao.*', 'doador.dodcpf as doador_cpf', 'hemonucleo.cnpj as hemonucleo_cnpj')
                .where('doacao.doaid', doaid); 
            if (result.length === 0) {
                return res.status(404).json({ message: 'Doação não encontrada' });
            }

            return res.json(result[0]);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async specifydoacao(req, res) {
        try {
            const { nome, dodcpf } = req.params; 
            const result = await knex('doador')
                .where('nome', 'like', '%' + nome + '%')
                .andWhere('doodcpf', dodcpf); 
    
            return res.json(result);
        } catch (error) {
            return res.status(400).json({ 'error': error }); 
        }
    }
};

