var workerFarm = require('../../')
  , workers    = workerFarm(require.resolve('./child'))
  , ret        = 0

for (var i = 0; i < 2; i++) {
  workers(function (err, outp) {   });
}

setTimeout(() => {
    workerFarm.kill(workers);
}, 2000);

