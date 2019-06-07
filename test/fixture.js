'use strict';
const {app, BrowserWindow} = require('electron');
const serve = require('..');

const loadUrl = serve({directory: __dirname});

let mainWindow;

// This fails as protocol is not registered yet.
// protocol is registered after app.whenReady(),
// which is resolved after 'ready' event is emitted.
app.on('ready', () => {
	mainWindow = new BrowserWindow();
	loadUrl(mainWindow);
});
