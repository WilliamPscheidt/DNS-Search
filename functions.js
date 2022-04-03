function pegarDNS() {
    $("li").remove();

    var url = document.getElementById('dominio').value

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://networkcalc.com/api/dns/lookup/"+url,
    "method": "GET"
    }

    $.ajax(settings).done(function (response) {

        if (response.records.A.length == 0) {
            $( "#registros-a" ).append(`<li class="text-light"> Não possui </li>`);
        }

        if (response.records.CNAME.length == 0) {
            $( "#registros-cname" ).append( `<li class="text-light"> Não possui </li>`);
        }

        if (response.records.MX.length == 0) {
            $( "#registros-mx" ).append( `<li class="text-light"> Não possui </li>`);
        }

        if (response.records.NS.length == 0) {
            $( "#registros-ns" ).append( `<li class="text-light"> Não possui </li>`);
        }

        if (response.records.SOA.length == 0) {
            $( "#registros-soa" ).append( `<li class="text-light"> Não possui </li>`);
        }

        if (response.records.TXT.length == 0) {
            $( "#registros-txt" ).append( `<li class="text-light"> Não possui </li>`);
        }

        for(var numero = 0; numero < response.records.A.length; numero++){
            $( "#registros-a" ).append( `<li class="text-light">`+response.records.A[numero].address+`</li>`);
        }

        for(var numero = 0; numero < response.records.CNAME.length; numero++){
            
            $( "#registros-cname" ).append( `<li class="text-light">`+response.records.CNAME[numero]+`</li>`);
        }

        for(var numero = 0; numero < response.records.MX.length; numero++){
            $( "#registros-mx" ).append( `<li class="text-light">`+response.records.MX[numero].exchange+`</li>`);
        }

        for(var numero = 0; numero < response.records.NS.length; numero++){
            $( "#registros-ns" ).append( `<li class="text-light">`+response.records.NS[numero].nameserver+`</li>`);
        }

        for(var numero = 0; numero < response.records.SOA.length; numero++){
            $( "#registros-soa" ).append( `<li class="text-light">`+response.records.SOA[numero].hostmaster+`</li>`);
            $( "#registros-soa" ).append( `<li class="text-light">`+response.records.SOA[numero].nameserver+`</li>`);
        }

        for(var numero = 0; numero < response.records.TXT.length; numero++){
            $( "#registros-txt" ).append( `<li class="text-light">`+response.records.TXT[numero]+`</li>`);
        }
    }
    
    );
}


