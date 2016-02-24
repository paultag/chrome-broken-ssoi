(function() {
    /* For some reason, the SSOi servers won't take my password, because
     * the max length can only be 30. This restriction is harmful, silly
     * and entirely not enforced. Remove this from the "UI" */
    var el = document.getElementById("PASSWORDINPUT");
    if (el !== null) {
        el.removeAttribute("maxlength");
    }

    /* connect.eop.gov does the same thing for equally inexplicable reasons */
    var els = document.getElementsByClassName("CTXMSAM_ContentFont");
    Array.prototype.forEach.call(els, function(el) {
        el.removeAttribute("maxlength");
    });
})();
