angular.module('contactsApp')
.service('DavClient', function() {
	'use strict';

	var client = new dav.Client({
		baseUrl: OC.linkToRemote('dav/addressbooks'),
		xmlNamespaces: {
			'urn:ietf:params:xml:ns:carddav': 'card',
			'DAV:': 'd',
			'http://owncloud.org/ns': 'oc'
		}
	});

	angular.extend(client, {
		NS_CARDDAV: 'urn:ietf:params:xml:ns:carddav',
		NS_DAV: 'DAV:',
		NS_OWNCLOUD: 'http://owncloud.org/ns',
		
		buildUrl: function(path) {
			return window.location.protocol + '//' + window.location.host + path;
		},

		wasRequestSuccessful: function(status) {
			return (status >= 200 && status <= 299);
		}
	});

	return client;
});
