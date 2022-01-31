const { app , session, BrowserWindow } = require('electron');
const path = require('path');

// Habilita o live reload
try {
    require('electron-reloader')(module)
} catch (_) {}

let win;

app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');
app.commandLine.appendSwitch('disable-site-isolation-trials')

const createWindow = () =>{
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname+'logo_-mock.ico',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
            slashes:true
        }
    });


    win.webContents.session.webRequest.onBeforeSendHeaders(
        (details, callback) => {
            callback({ requestHeaders: { Origin: '*', ...details.requestHeaders } });
        },
    );

    win.webContents.session.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
                'Access-Control-Allow-Origin': ['*'],
                ...details.responseHeaders,
            },
        });
    });
    win.loadFile('index.html');
}
app.whenReady().then(()=>{

   createWindow();

   // gerencia as janelas no Linux/Mac
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

// fecha o app no windows
app.on('window-all-closed', ()=>{
   if(process.platform !== 'darwin') app.quit();
});

