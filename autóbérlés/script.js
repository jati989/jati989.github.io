function runScriptSmall() {
    document.getElementById("small").click();
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('runScriptSmall')) {
        runScriptSmall();
    }
});

function runScriptLux() {
    document.getElementById("lux").click();
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('runScriptLux')) {
        runScriptLux();
    }
});

function runScriptBus() {
    document.getElementById("bus").click();
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('runScriptBus')) {
        runScriptBus();
    }
});

function runScriptWork() {
    document.getElementById("work").click();
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('runScriptWork')) {
        runScriptWork();
    }
});