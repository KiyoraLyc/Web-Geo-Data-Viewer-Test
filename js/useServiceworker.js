window.addEventListener('load', () => {
    registerSW();
});
// Register the Service Worker
function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            if ('launchQueue' in window && 'files' in LaunchParams.prototype) {
                console.log("files");
              }
            navigator.serviceWorker.register('serviceworker.js').then(function (reg) {

            });
        }
        catch (error) {
            console.log('SW registration failed');
            alert('SW registration failed');
        }
    }
}