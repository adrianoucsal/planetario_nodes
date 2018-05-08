module.exports = function(app) {
    
    app.get('/planetario/', function(req, res) {
        console.log('Teste de Acesso.')
        res.setHeader('Access-Control-Allow-Origin', "*");
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');        
        res.status(200)
        res.send('OK')
    })

    app.post('/planetario/planeta/', function(req, res) {
        console.log('retorna os planetas')

        res.setHeader('Access-Control-Allow-Origin', "*");
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');        

        var retorno = req.body        
        console.log('retorno : ' + JSON.stringify(retorno))

        var connection = app.model.connectionDB(function (connection){
            var planetarioDAO = new app.model.PlanetarioDAO(connection);
    
            planetarioDAO.listPlaneta(function(erro, resultado){
                if(erro){
                    console.log('Erro ao consultar no banco:' + erro);
                    res.status(500).send(erro);
                } else {          
                    res.location('/planetario/planeta/');    
                    res.status(200).json(resultado.rows);                        
                }

                connection.release(
                    function (err){
                        if(err){
                            console.error(err)
                        } else {
                            console.log('Conexão Liberada')   
                        }
                    }
                )
            })    
        });
    })


    app.get('/planetario/planeta/', function(req, res) {
        console.log('retorna os planetas')

        res.setHeader('Access-Control-Allow-Origin', "*");
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');        

        var retorno = req.body        
        console.log('retorno : ' + JSON.stringify(retorno))

        var connection = app.model.connectionDB(function (connection){
            var planetarioDAO = new app.model.PlanetarioDAO(connection);
    
            planetarioDAO.listPlaneta(function(erro, resultado){
                if(erro){
                    console.log('Erro ao consultar no banco:' + erro);
                    res.status(500).send(erro);
                } else {          
                    res.location('/planetario/planeta/');    
                    res.status(200).json(resultado.rows);                        
                }

                connection.release(
                    function (err){
                        if(err){
                            console.error(err)
                        } else {
                            console.log('Conexão Liberada')   
                        }
                    }
                )
            })    
        });
    })

}