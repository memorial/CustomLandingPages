function setWithExpiryToLocalStorage(key, value, ttl) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item));
}
function getWithExpiryFromLocalStorage(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}
function removeURLParameter(url, parameters) {
    var urlparts = url.split('?');
    if (urlparts.length >= 2 && parameters.length > 0) {
        var pars = urlparts[1].split(/[&;]/g);
        parameters.forEach(function(item, index) {
            var prefix = encodeURIComponent(item) + '=';
            for (var i = pars.length; i-- > 0; ) {
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                    pars.splice(i, 1);
                }
            }
        });
        var joinedQueryString = pars.join('&');
        url = urlparts[0] + '?' + joinedQueryString;
        return [url, joinedQueryString];
    } else {
        return [url, ''];
    }
}
function getQueryString() {
    var urlParts = window.location.href.split('?');
    var queryStringsConcat = [];
    urlParts.forEach((item,index)=>{
        if (index == 0) {
            return;
        }
        queryStringsConcat.push(item);
    }
    )
    var allQueries = queryStringsConcat.join('&');
    return '?' + allQueries;
}
function saveUtmLink() {
    var baseUrl = document.location.origin + document.location.pathname;
    var utmLink = null;
    if (window.location.search.includes("utm") || window.location.search.includes("gclid")) {
        utmLink = getQueryString();
        if (utmLink != null) {
            history.pushState("", "", baseUrl + '' + utmLink);
            utmLink = removeURLParameter(baseUrl + '' + utmLink, ['arama', 'pg', 'tb', 'hastane', 'bolum']);
            localStorage.setItem('utmLink', utmLink[1]);
        }
    } else {
        utmLink = localStorage.getItem('utmLink');
        if (utmLink != null) {
            if (document.location.search != null && document.location.search != '') {
                utmLink = document.location.search + '&' + utmLink;
            } else {
                utmLink = '?' + utmLink;
            }
            history.pushState("", "", baseUrl + '' + utmLink);
        }
    }
}
$(window).on("load", function() {
    window.localLinkClicked = false;
    $(document).on("click", 'a', function() {
        var url = $(this).attr("href");
        if (!/^https?:\/\/./.test(url) || /https?:\/\/memorial\.com.tr/.test(url)) {
            window.localLinkClicked = true;
        }
    });
    window.onunload = window.onbeforeunload = (function(e) {
        if (!window.localLinkClicked) {
            localStorage.removeItem("utmLink");
        }
    }
    );
})
