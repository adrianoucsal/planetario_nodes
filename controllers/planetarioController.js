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

            var planetarioDAO = new app.model.PlanetarioDAO;
    
            planetarioDAO.listPlaneta(function(erro, resultado){
                if(erro){
                    console.log('Erro ao consultar no banco:' + erro);
                    res.status(500).send(erro);
                } else {          
                    res.location('/planetario/planeta/');    
                    res.status(200).json(resultado.rows);                        
                }
            })    
        })

        app.post('/planetario/galaxia/', function(req, res) {
            console.log('retorna os galaxiass')
    
            res.setHeader('Access-Control-Allow-Origin', "*");
            res.setHeader('Access-Control-Allow-Methods', 'POST');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');        
    
            var retorno = req.body        
            console.log('retorno : ' + JSON.stringify(retorno))
    
                var planetarioDAO = new app.model.PlanetarioDAO;
        
                planetarioDAO.listGalaxia(function(erro, resultado){
                    if(erro){
                        console.log('Erro ao consultar no banco:' + erro);
                        res.status(500).send(erro);
                    } else {          
                        res.location('/planetario/galaxia/');    
                        res.status(200).json(resultado.rows);                        
                    }
                })    
            })

        app.post('/planetario/getPlanetasGalaxia/', function(req, res) {
            console.log('retorna os planetas')
    
            res.setHeader('Access-Control-Allow-Origin', "*");
            res.setHeader('Access-Control-Allow-Methods', 'POST');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');        
    
            var body = req.body        
            console.log('body : ' + JSON.stringify(body))
    
                var planetarioDAO = new app.model.PlanetarioDAO;
        
                planetarioDAO.getPlanetasGalaxia(body.id, function(erro, resultado){
                    if(erro){
                        console.log('Erro ao consultar no banco:' + erro);
                        res.status(500).send(erro);
                    } else {          
                        res.location('/planetario/galaxia/');    
                        res.status(200).json(resultado.rows);                        
                    }
                })    
        })

        
        app.post('/planetario/getContinentesPlaneta/', function(req, res) {
            console.log('retorna os continente')
    
            res.setHeader('Access-Control-Allow-Origin', "*");
            res.setHeader('Access-Control-Allow-Methods', 'POST');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');        
    
            var body = req.body        
            console.log('body : ' + JSON.stringify(body))
    
                var planetarioDAO = new app.model.PlanetarioDAO;
        
                planetarioDAO.getContinentesPlaneta(body.id, function(erro, resultado){
                    if(erro){
                        console.log('Erro ao consultar no banco:' + erro);
                        res.status(500).send(erro);
                    } else {          
                        res.location('/planetario/continente/');    
                        res.status(200).json(resultado.rows);                        
                    }
                })    
        })

            
}