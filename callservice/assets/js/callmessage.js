$('body').on('click', '#btn-call', function(event) {
    event.preventDefault();
    var event_name = $(this).data('event-name');
    var extension_number = $(this).data('extension-number');
    var pMess = {
      event_name : event_name.toString(),
      extension_number : extension_number.toString()
    };
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.postMessage(JSON.stringify(pMess));
    }else{
        console.log("Click Call", pMess);
    }
});