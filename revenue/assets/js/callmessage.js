$(document).ready(function() {
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

    $('body').on('click', '#btn-chat', function(event) {
        event.preventDefault();
        var event_name = $(this).data('event-name');
        var pMess = {
          event_name : $(this).data('event-name').toString(),
          personal_first_name : $(this).data('customer-fname').toString(),
          personal_last_name : $(this).data('customer-lname').toString(),
          idcard : $(this).data('idcard').toString(),
          email : $(this).data('email').toString(),
          doc_number : $(this).data('doc-number').toString(),
          doc_topic : $(this).data('doc-topic').toString(),
        };
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            window.postMessage(JSON.stringify(pMess));
        }else{
            window.location = "redirect.html?"+$.param( pMess );
            console.log("Click Chat", $.param( pMess ));
        }
    });
    
    if ($('body').hasClass("redirect")) {
        console.log("Page redirect");
        let params = new URL(window.location).searchParams;
        $('#event_name').val(params.get('event_name'));
        $('#personal_first_name').val(params.get('personal_first_name'));
        $('#personal_last_name').val(params.get('personal_last_name'));
        $('#idcard').val(params.get('idcard'));
        $('#email').val(params.get('email'));
        $('#doc_number').val(params.get('doc_number'));
        $('#doc_topic').val(params.get('doc_topic'));
        $('form.redirectchat').submit();
//         window.addEventListener("message", function(event) {
//             console.log("Received post message", event);
//             try{
//               var el2 =  document.createElement("span")
//               el2.style.display="block";
//               el2.style.width="100%";
//               // el2.innerHTML = "Some arb text3";
//               el2.innerHTML = event.data;
//               messageFi.appendChild(el2);
//             }catch(e){
//               alert(e);
//             }

//         }, false);
      
    }
});