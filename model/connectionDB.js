var oracle  = require('oracledb');
var connectionArgs ={
    "connectString": "10.202.61.200:1521/patosdsv",
    "user": "inovacao",
    "password": "INOVACAO"
}

async function createDBConnection(){
    console.log('Create DB Connection')
    return new Promise((resolve, reject) => {
        oracle.getConnection(connectionArgs, function(err, connection){
        if(err){
            console.error('Erro: ' + err)
            // reject(err)
        } else {
            console.error('Conexao: ' + connection )
            resolve(connection)    
        }            
        })
    })
}

module.exports =  function() {
	return createDBConnection;
}
