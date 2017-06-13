function initMap() {
    $('body').find('#googleMapIntercon').each(function () {
        var uluru = {lat: 13.745341, lng: 100.541338};
        var mapProp= {
            center: uluru,
            zoom:14,
        };
        var map=new google.maps.Map(
                document.getElementById("googleMapIntercon"),
                mapProp
            );
        var marker = new google.maps.Marker({
              position: uluru,
              map: map
            });
    });
    
    $('body').find('#googleMapsd').each(function () {
        var uluru = {lat: 13.663512, lng: 100.651516};
        var mapProp= {
            center: uluru,
            zoom:14,
        };
        var map=new google.maps.Map(
                document.getElementById("googleMapsd"),
                mapProp
            );
        var marker = new google.maps.Marker({
              position: uluru,
              map: map
            });
    });
    
    $('body').find('#googleMapIns').each(function () {
        var uluru = {lat: 13.870099, lng: 100.485727};
        var mapProp= {
            center: uluru,
            zoom:14,
        };
        var map=new google.maps.Map(
                document.getElementById("googleMapIns"),
                mapProp
            );
        var marker = new google.maps.Marker({
              position: uluru,
              map: map
            });
    });
    
    $('body').find('#googleMapseacon').each(function () {
        var uluru = {lat: 13.693732, lng: 100.647614};
        var mapProp= {
            center: uluru,
            zoom:14,
        };
        var map=new google.maps.Map(
                document.getElementById("googleMapseacon"),
                mapProp
            );
        var marker = new google.maps.Marker({
              position: uluru,
              map: map
            });
    });
}