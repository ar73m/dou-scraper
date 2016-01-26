var page = require('webpage').create(),
  system = require('system'),
  t, address;

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>');
  phantom.exit();
}

t = Date.now();
address = system.args[1];
page.open(address, function(status) {
  if (status !== 'success') {
    console.log('FAIL to load the address');
  } else {
    console.log('Loading ' + system.args[1]);
    
    var val = page.evaluate(function() {
            console.log('test');
            var val = document.querySelector('div.profile_info').textContent; // innerHTML or innerText
            return val;
        });
    console.log(val);  
  }
  page.render('ex.png');
  phantom.exit();
});
