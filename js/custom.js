new LazyLoad({threshold: 0});
lazyframe('.lazyframe');

/* AUTOCOMPLETE GOOGLE SEARCH */
var ul = document.getElementById('searchAutocomplete');

window.JSONP = (function (document) {
    var requests = 0,
        callbacks = {};

    return {
        /**
         * makes a JSONP request
         *
         * @param {String} src
         * @param {Object} data
         * @param {Function} callback
         */
        get: function (src, data, callback) {
            // check if data was passed
            if (!arguments[2]) {
                callback = arguments[1];
                data = {};
            }

            // determine if there already are params
            src += (src.indexOf('?') + 1 ? '&' : '?');

            var head = document.getElementsByTagName('head')[0],
                script = document.createElement('script'),
                params = [],
                requestId = requests,
                param;

            // increment the requests
            requests++;

            // create external callback name
            data.callback = 'JSONP.callbacks.request_' + requestId;

            // set callback function
            callbacks['request_' + requestId] = function (data) {
                // clean up
                head.removeChild(script);
                delete callbacks['request_' + requestId];

                // fire callback
                callback(data);
            };

            // traverse data
            for (param in data) {
                params.push(param + '=' + encodeURIComponent(data[param]));
            }

            // generate params
            src += params.join('&');

            // set script attributes
            script.type = 'text/javascript';
            script.src = src;

            // add to the DOM
            head.appendChild(script);
        },

        /**
         * keeps a public reference of the callbacks object
         */
        callbacks: callbacks
    };
})(document);

window.onload = function () {
    const q = document.querySelector('[name="q"]')
    q.addEventListener('keyup', function (event) {
        if (q.value.length && event.which !== 40 && event.which !== 38 && event.which !== 13) {
            // var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
            // window[callbackName] = function(data) {
            //     delete window[callbackName];
            //     document.body.removeChild(script);
            //     callback(data);
            // };
            // const xhttp = new XMLHttpRequest();

            // xhttp.open("GET", "https://clients1.google.com/complete/search?callback="+callbackName+"&q=a&nolabels=t&client=youtube&ds=yt&_="+Date.now(), true);
            // xhttp.setRequestHeader('Content-Type','application/json; charset=utf-8')
            // xhttp.setRequestHeader('accept','*/*')
            // xhttp.setRequestHeader('Access-Control-Allow-Origin','*')
            // xhttp.setRequestHeader('sec-fetch-mode','no-cors')
            // xhttp.setRequestHeader('sec-fetch-site','cross-site')
            // xhttp.send();
            window.JSONP.get("https://clients1.google.com/complete/search?callback=" + 'callbackName' + "&q=" + document.getElementById('q').value + "&nolabels=t&client=youtube&ds=yt&_=" + Date.now(), function (data) {
                if (typeof data[1] != 'undefined') {
                    ul.innerHTML = '';
                    let html = '';
                    for (let i = 0; i < data[1].length; i++) {
                        html += '<li onclick="window.applySearchAutocomplete(this.textContent);document.getElementById(\'searchAutocomplete\').innerHTML = \'\';" class="px-2 hover:bg-gray-100 pt-2 pb-1 rounded-lg">' + data[1][i][0] + '</li>';
                    }
                    ul.innerHTML = html
                }
            })
        } else if (event.which === 13) {
            ul.innerHTML = ''
        }
    })

    var liSelected;
    var index = -1;

    document.addEventListener('keydown', function (event) {
        var len = ul.getElementsByTagName('li').length - 1;

        if (event.which === 40) {
            index++;
            //down
            if (liSelected) {
                removeClass(liSelected, 'selected');
                removeClass(liSelected, 'bg-gray-100');
                next = ul.getElementsByTagName('li')[index];
                if (typeof next !== undefined && index <= len) {

                    liSelected = next;
                } else {
                    index = 0;
                    liSelected = ul.getElementsByTagName('li')[0];
                }
                addClass(liSelected, 'selected');
                addClass(liSelected, 'bg-gray-100');
            } else {
                index = 0;

                liSelected = ul.getElementsByTagName('li')[0];
                addClass(liSelected, 'selected');
                addClass(liSelected, 'bg-gray-100');
            }

            applyAutocomplete()
        } else if (event.which === 38) {

            //up
            if (liSelected) {
                removeClass(liSelected, 'selected');
                removeClass(liSelected, 'bg-gray-100');
                index--;
                next = ul.getElementsByTagName('li')[index];
                if (typeof next !== undefined && index >= 0) {
                    liSelected = next;
                } else {
                    index = len;
                    liSelected = ul.getElementsByTagName('li')[len];
                }
                addClass(liSelected, 'selected');
                addClass(liSelected, 'bg-gray-100');
            } else {
                index = 0;
                liSelected = ul.getElementsByTagName('li')[len];
                addClass(liSelected, 'selected');
                addClass(liSelected, 'bg-gray-100');
            }

            applyAutocomplete()
        }
    }, false);

    window.JSONP.get('/token', function (data) {
        const token = data.token
        document.querySelector('[name="_csrf"]').value = token;
    })
}

function applyAutocomplete() {
    var selectedAutocomplete = ul.querySelector('li[class*="selected"]')
    window.applySearchAutocomplete(selectedAutocomplete.textContent)
}

window.applySearchAutocomplete = function (value) {
    document.getElementById('q').value = value
}

function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
};
/* .AUTOCOMPLETE GOOGLE SEARCH */
