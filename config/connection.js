const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socilaNetworkAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;