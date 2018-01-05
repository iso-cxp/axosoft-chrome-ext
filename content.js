var update_remaining_estimate_id = 'addEditWorkLog-update-remaining-estimate-checkbox';
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.target.classList.contains('update-remaining-estimate') && mutation.addedNodes.length) {
            document.getElementById(update_remaining_estimate_id).checked = false;
        }
    });
});

observer.observe(document, {childList: true, subtree: true});
