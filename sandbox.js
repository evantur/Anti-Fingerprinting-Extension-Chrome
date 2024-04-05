var inject = document.createElement('script');
inject.src = chrome.runtime.getURL('disguise.js');
inject.onload = function() {
    inject.remove();
};
(document.head || document.documentElement).appendChild(inject);