const { app , BrowserWindow } = require('electron');
const path = require('path');

// Habilita o live reload
try {
    require('electron-reloader')(module)
} catch (_) {}

let win;

const createWindow = () =>{
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
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

