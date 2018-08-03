var workerFarm = require('../../')
  , workers    = workerFarm(require.resolve('./child'))
  , ret        = 0

for (var i = 0; i < 1; i++) {
  workers('#' + i + ' FOO', function (err, outp) {   });
}

workerFarm.kill(workers);
