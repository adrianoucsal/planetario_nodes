module.exports = function(app) {
    
    app.get('/planetario/', function(req, res) {
        console.log('Teste de Acesso.')
        res.send('OK')
    })

    app.post('/planetario/planeta/', function(req, res) {
        console.log('retorna os planetas')
        var retorno = req.body
        retorno.nome='Terra'
        retorno.quadrante='XPTO'
        res.status(200).json(retorno);
    })

}