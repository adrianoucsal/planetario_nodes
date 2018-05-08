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

PlanetarioDAO.prototype.getPlaneta = async function(id, callback){
    var connection = await createDBConnection()
    connection.execute('select * from planeta where id = :id'
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