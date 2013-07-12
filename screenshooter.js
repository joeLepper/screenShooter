var spawn = require('child_process').spawn,
    ls    = spawn('git', ['log']);

ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
  console.log(typeof data.toString());
  var lines = data.toString().split('\n');
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

ls.on('close', function (code) {
  console.log('child process exited with code ' + code);
});