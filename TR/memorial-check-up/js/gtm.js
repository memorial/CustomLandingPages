window.gtm_form = function gtm_form(eventAction) {
    dataLayer.push({
        'event': 'formGonderme',
        'eventCategory': 'Form Submit',
        'eventAction': eventAction,
        'eventLabel': 'Form gönderildi'
    });

    console.log(dataLayer);
}

