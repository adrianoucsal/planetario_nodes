var App = require('./config/custom')()

const port = 4000
App.listen(port, function(){
    console.log('Servidor rodando na porta [' + port + ']');
  });
