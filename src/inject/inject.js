(function() {
    /* For some reason, the SSOi servers won't take my password, because
     * the max length can only be 30. This restriction is harmful, silly
     * and entirely not enforced. Remove this from the "UI" */
    document.getElementById("PASSWORDINPUT").removeAttribute("maxlength")
})();
