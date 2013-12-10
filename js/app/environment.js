var envData = { "items": [
	{//DEVELOPMENT ENVIRONMENT WITHOUT APIGEE
		"name": "Dev",
		"direct": "http://VMSDWCSP004/connection/v1",
		"apigee": "http://VMSDWCSP004/connection/v1",
		"oauth2L": "https://int.api.intel.com/oauth20/token",
		"oauth3L": "https://int.api.intel.com/identity/v2/token",
		"xmpp": "http://54.244.251.54/http-bind/",
		"ice": {iceServers: [{ url:"stun:54.214.20.152:3478"}, { url:"turn:54.214.20.152:3478", username: "db9144cc-80d4-4ff1-aee7-176f1228b064.kpaa2@east.jabber.intel.com", credential:"6a80ade0da64d072918a26003848804"}]}
	},
	{//QA ENVIRONMENT                                                                                                       
		"name": "QA",
		"direct": "https://qa-connection.api.intel.com/connection/v1",
		"apigee": "https://qa.api.intel.com/connection/v1",
		"oauth2L": "https://int.api.intel.com/oauth20/token",
		"oauth3L": "https://int.api.intel.com/identity/v2/token",
		"xmpp": "http://qa-xmpp.adsdcsp.com/http-bind/",
		"ice": {iceServers: [{ url:"stun:54.236.116.172:3478"}, { url:"turn:54.236.116.172:3478", username: "db9144cc-80d4-4ff1-aee7-176f1228b064.kpaa2@east.jabber.intel.com", credential:"b1f0ce1d57010a4c2a9348da15af1ceb"}]}
	},
	{//INT ENVIRONMENT                                                                                                       
		"name": "INT",
		"direct": "https://int-connection.api.intel.com/connection/v1",
		"apigee": "https://int.api.intel.com/connection/v1",
		"oauth2L": "https://int.api.intel.com/oauth20/token",
		"oauth3L": "https://int.api.intel.com/identity/v2/token",
		"xmpp": "http://int-xmpp.adsdcsp.com/http-bind/",
		"ice": {iceServers: [{ url:"stun:54.214.20.152:3478"}, { url:"turn:54.214.20.152:3478", username: "user", credential:"myPassword"}]}
	},
	{//DEVTEST ENVIRONMENT
		"name": "DevTest",
		"direct": "https://test-connection.api.adspcsp.com/connection/v1",
		"apigee": "https://devtest.api.intel.com/connection/v1",
		"oauth2L": "https://devtest.api.intel.com/oauth20/token",
		"oauth3L": "https://devtest.api.intel.com/identity/v2/token",
		"xmpp": "http://test-xmpp.adsdcsp.com/http-bind/",
		"ice": {iceServers: [{ url:"stun:54.214.20.152:3478"}, { url:"turn:54.214.20.152:3478", username: "user", credential:"myPassword"}]}
	},
	{//PRODUCTION ENVIRONEMT
		"name": "Prod",
		"direct": "https://connection.api.intel.com/connection/v1",
		"apigee": "https://api.intel.com/connection/v1",
		"oauth2L": "https://api.intel.com/oauth20/token",
		"oauth3L": "https://api.intel.com/identity/v2/token",
		"xmpp": "https://xmpp.api.intel.com/http-bind/",
		"ice": {iceServers: [{ url:"stun:54.214.20.152:3478"}, { url:"turn:54.214.20.152:3478", username: "user", credential:"myPassword"}]}
	},
	{//LOCAL ENVIRONMENT WITHOUT APIGEE                                                                                                 
		"name": "localhost",
		"direct": "http://localhost:28777/connection/v1", 
		"apigee": "http://localhost:28777/connection/v1",
		"oauth2L": "https://int.api.intel.com/oauth20/token",
		"oauth3L": "https://int.api.intel.com/identity/v2/token",
		"xmpp": "http:///http-bind/",
		"ice": {iceServers: [{ url:"stun:54.214.20.152:3478"}, { url:"turn:54.214.20.152:3478", username: "user", credential:"myPassword"}]}
	}
]
};