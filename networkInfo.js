NetworkInfoPromise = new P(function(resolve, reject) {
  new P(function(timerDone) {
    // wait for web3
    var timer = setInterval(function() {
      if (typeof web3 !== 'undefined') {
        clearInterval(timer);

        timerDone();
      }
    }, 100);    
  })
  .then(function() {
    web3.eth.getBlock(0, function(e, res) {
      if (e) {
        console.error('Error fetching Genesis block');

        return reject(e);
      } else {
        console.info('Genesis block: ' + res.hash);

        var network = 'private';

        switch(res.hash) {
            case '0x0cd786a2425d16f152c658316c423e6ce1181e15c3295826d7c9904cba9ce303':
                network = 'test';
                break;
            case '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3':
                network = 'main';
                break;
        }

        return resolve({
          type: network,
          uniqueId: res.hash,
          genesis: res,      
        });
      }
    });    
  })
});

