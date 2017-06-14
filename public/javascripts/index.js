	

//var notify = $('#notify');

if ('serviceWorker' in navigator && 'PushManager' in window){
		console.log("chlo ji pushworker to hai");
  navigator.serviceWorker.register('sw.js')
	  .then(function(swReg) {
	      console.log('Service Worker is registered', swReg);
	  
	      swRegistration = swReg;
	    })
	  .catch(function(error) {
	      console.error('Service Worker Error', error);
	    });
	
}

