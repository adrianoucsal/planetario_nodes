var oracledb = require('oracledb')
function PlanetarioDAO(connection) {
    this._connection = connection
}

PlanetarioDAO.prototype.listPlaneta = function(callback){
    this._connection.execute('select * from planeta'
    ,{}
    ,{outFormat: oracledb.OBJECT}
    ,callback);
}

PlanetarioDAO.prototype.getPlaneta = function(id, callback){
    this._connection.execute('select * from planeta where id = :id'
    ,[id]
    ,{outFormat: oracledb.OBJECT}
    ,callback);
}

module.exports = function(){
    return PlanetarioDAO
}