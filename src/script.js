var _Name = GetURLParameter('_Name') || "JoeBloggs";
document.getElementById("_Name").innerHTML = _Name;

var _Mail = GetURLParameter('_Mail') || "JoeBloggs@thevitagroup.com";
document.getElementById("_Mail").innerHTML = _Mail;

var _Phone = GetURLParameter('_Phone') || "+44";
document.getElementById("_Phone").innerHTML = _Phone;


function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
	sPageURL = decodeURI(sPageURL);	
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}