var oracle  = require('oracledb');
var connectionArgs ={
    "connectString": "10.202.61.200:1521/patosdsv",
    "user": "inovacao",
    "password": "INOVACAO"
}

function createDBConnection(callback){
		return oracle.getConnection(connectionArgs, function(err, connection){
            if(err){
                console.error('Erro: ' + err)
                return
            } else {
                console.error('Conexao: ' + connection )
                callback(connection)
                return connection    
            }            
        });
}

module.exports = function() {
	return createDBConnection;
}
