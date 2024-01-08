function runScriptCosmetics() {
    document.getElementById("cosmeticsButton").click();
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('runScriptCosmetics')) {
        runScriptCosmetics();
    }
});

function runScriptNail() {
    document.getElementById("nailButton").click();
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('runScriptNail')) {
        runScriptNail();
    }
});

function runScriptEye() {
    document.getElementById("eyeButton").click();
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('runScriptEye')) {
        runScriptEye();
    }
});

function runScriptHair() {
    document.getElementById("hairButton").click();
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('runScriptHair')) {
        runScriptHair();
    }
});
function navbarExiter() {
    document.getElementById("navbarButton").click()
};

document.getElementById("navbarServices").addEventListener("click", function() {
    navbarExiter();
});

document.getElementById("navbarIntroduction").addEventListener("click", function() {
    navbarExiter();
});

document.getElementById("navbarRelationship").addEventListener("click", function() {
    navbarExiter();
});
