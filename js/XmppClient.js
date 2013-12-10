var connection;
var jabberId;

window.onload = function () {
	document.getElementById("connect").onclick = function() { connect() };
	document.getElementById("send").onclick = function() { send() };
};

/** Constants: Connection Status Constants
 *  Connection status constants for use by the connection handler
 *  callback.
 *
 *  Status.ERROR - An error has occurred
 *  Status.CONNECTING - The connection is currently being made
 *  Status.CONNFAIL - The connection attempt failed
 *  Status.AUTHENTICATING - The connection is authenticating
 *  Status.AUTHFAIL - The authentication attempt failed
 *  Status.CONNECTED - The connection has succeeded
 *  Status.DISCONNECTED - The connection has been terminated
 *  Status.DISCONNECTING - The connection is currently being terminated
 *  Status.ATTACHED - The connection has been attached
 *
 */
function onConnect(status) {
	switch(status) {
		case Strophe.Status.ERROR: 
			console.log('Strophe failed to connect.');
			failureCB("onConnect(error)");			
			break;
		case Strophe.Status.CONNECTING: 
			console.log('Strophe is connecting.');
			break;
		case Strophe.Status.CONNFAIL: 
			console.log('Strophe failed to connect.');
			failureCB("onConnect(error)");			
			break;
		case Strophe.Status.AUTHENTICATING: 
			console.log('Strophe is authenticating.');
			break;
		case Strophe.Status.AUTHFAIL: 
			console.log('Strophe is AUTHFAIL.');
			failureCB("onConnect(error)");			
			break;
		case Strophe.Status.CONNECTED: 
			console.log('Strophe is connected.');
			connection.addHandler(handleMessage, null, null, null, null,  null);
			connection.send($pres().tree());
			break;		
		case Strophe.Status.CONNECTING: 
			console.log('Strophe is connecting.');
			break;
		case Strophe.Status.DISCONNECTED: 
			console.log('Strophe is disconnected.');
			break;
		case Strophe.Status.ATTACHED: 
			console.log('Strophe is ATTACHED.');
			break;			
	}	
};

function handleMessage(msg) {   
	console.log('handleMessage');
	console.log(msg);
	
	var msgE = document.getElementById("inmessages");
	var converted = xmlToString(msg);	
	var fromated = formatXml(converted);
	console.log(fromated);
	msgE.innerHTML = fromated;
		
	// we must return true to keep the handler alive.  
	// returning false would remove it after it finishes.
	return true;
};

function connect() {
	var server = document.getElementById('server').value;
	console.log('connecting to ' + server);
	connection = new Strophe.Connection(server);
	
	// First, get the jabberId used to connect
	jabberId = document.getElementById("jabberId").value;
	var pass = document.getElementById("pass").value;	
	connection.connect(jabberId + '/rabbithole', pass, onConnect);
};

function send() {
	var msg = document.getElementById("message").value;	
	var stanza = xmlFromString(msg);
	
	console.log(stanza.firstChild);
	connection.sendIQ(stanza.firstChild);
};

function xmlFromString(sXML) {
	if (window.ActiveXObject) {
		var oXML = new ActiveXObject("Microsoft.XMLDOM");
		oXML.loadXML(sXML);
		return oXML;
	} else {
		return (new DOMParser()).parseFromString(sXML, "text/xml");
	}
};

function xmlToString(oXML) {
  if (window.ActiveXObject) {
    return oXML.xml;
  } else {
    return (new XMLSerializer()).serializeToString(oXML);
  }
};

function formatXml(xml) {
    var formatted = '';
    var reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    var pad = 0;
    jQuery.each(xml.split('\r\n'), function(index, node) {
        var indent = 0;
        if (node.match( /.+<\/\w[^>]*>$/ )) {
            indent = 0;
        } else if (node.match( /^<\/\w/ )) {
            if (pad != 0) {
                pad -= 1;
            }
        } else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
            indent = 1;
        } else {
            indent = 0;
        }
 
        var padding = '';
        for (var i = 0; i < pad; i++) {
            padding += '  ';
        }
 
        formatted += padding + node + '\r\n';
        pad += indent;
    });
 
    return formatted;
}
