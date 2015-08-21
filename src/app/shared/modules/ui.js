/*global UIColor */

'use strict';

let frameModule = require('ui/frame');
let applicationModule = require('application');

let customUi = {
	navbar: {
		setText: function(page, text) {
			// TODO, Implement for Android
			if (page.ios) {
				// Change the UIViewController's title property
				page.ios.title = text;

				// Get access to the native iOS UINavigationController
				let controller = frameModule.topmost().ios.controller;

				// Call the UINavigationController's setNavigationBarHidden method
				controller.navigationBarHidden = false;
			}
		},

		removeIOSNavBar: function() {
			var iosFrame = frameModule.topmost().ios;
			if (iosFrame) {
				iosFrame.navBarVisibility = 'never';
				iosFrame.controller.view.window.backgroundColor = UIColor.colorWithRedGreenBlueAlpha(0.945, 0.953, 0.953, 1);
			}
		},

		setColor: function() {
			if (applicationModule.ios) {
				var controller = frameModule.topmost().ios.controller;
				controller.navigationBarHidden = true;
			}
		}
	},

	setViewDefaults: function() {
		customUi.navbar.removeIOSNavBar();
//		customUi.navbar.setColor();
	}


};

export default customUi;
