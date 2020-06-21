var clip = new ClipboardJS('.fa-copy');



clip.on('success', function(event) {
    event.clearSelection();
    event.trigger.textContent = ' Copied';
    window.setTimeout(function() {
        event.trigger.textContent = '';
    }, 2000);
});

clip.on('error', function(event) { 
    event.trigger.textContent = 'Press "Ctrl + C" to copy';
    window.setTimeout(function() {
        event.trigger.textContent = 'Copy';
    }, 2000);
});


