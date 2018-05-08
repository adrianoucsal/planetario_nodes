var oracledb = require('oracledb')
var createDBConnection = require('./connectionDB')()

function PlanetarioDAO() {
}

PlanetarioDAO.prototype.listPlaneta = async function(callback){
    console.log('DB Connection' + createDBConnection)
    var connection = await createDBConnection()
    console.log('Connection' + connection)
    connection.execute('select * from planeta'
    ,{}
    ,{outFormat: oracledb.OBJECT}
    ,(erro, resultado) => {
        callback(erro,resultado)
        releaseConnection(connection)
    });
}

PlanetarioDAO.prototype.listGalaxia = async function(callback){
    console.log('DB Connection' + createDBConnection)
    var connection = await createDBConnection()
    console.log('Connection' + connection)
    connection.execute('select * from galaxia'
    ,{}
    ,{outFormat: oracledb.OBJECT}
    ,(erro, resultado) => {
        callback(erro,resultado)
        releaseConnection(connection)
    });
}

PlanetarioDAO.prototype.getPlanetasGalaxia = async function(id, callback){
    var connection = await createDBConnection()
    connection.execute('select * from planeta where ID_GALAXIA = :id'
    ,[id]
    ,{outFormat: oracledb.OBJECT}
    ,callback);
}

PlanetarioDAO.prototype.getContinentesPlaneta = async function(id, callback){
    var connection = await createDBConnection()
    connection.execute('select * from continente where ID_PLANETA = :id'
    ,[id]
    ,{outFormat: oracledb.OBJECT}
    ,callback);
}


module.exports = function(){
    return PlanetarioDAO
}

/* Release Connection */
function releaseConnection(connection){
    connection.release(
        function (err){
            if(err){
                console.error(err)
            } else {
                console.log('Conexão Liberada')   
            }
        }
    )    
}