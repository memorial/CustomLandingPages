document.addEventListener("DOMContentLoaded", function() {
    var formInteractionStarted = false;
    var telSelectors = document.querySelectorAll('a[href^="tel"]');
    if (telSelectors != null && telSelectors.length > 0) {
        telSelectors.forEach(function(el, index) {
            el.addEventListener('click', function() {
                dataLayer.push({
                    'event': 'landing_callinteraction',
                    'formName': window.gtmFormName,
                    'pageCategory': 'Landing Page'
                });
            });
        });
    }
    var whatsappSelectors = document.querySelectorAll('a[href^="https://api.whatsapp.com"]');
    if (whatsappSelectors != null && whatsappSelectors.length > 0) {
        whatsappSelectors.forEach(function(el, index) {
            el.addEventListener('click', function() {
                dataLayer.push({
                    'event': 'landing_whatsappinteraction',
                    'formName': window.gtmFormName,
                    'pageCategory': 'Landing Page'
                });
            });
        });
    }
    var formSelectors = document.querySelectorAll('form');
    if (formSelectors != null && formSelectors.length > 0) {
        formSelectors.forEach(function(el, index) {
            el.addEventListener('click', function() {
                if (formInteractionStarted === false) {
                    dataLayer.push({
                        'event': 'landing_startForm',
                        'formName': window.gtmFormName,
                        'pageCategory': 'Landing Page'
                    });
                    formInteractionStarted = true;
                }
            });
        });
    }
});