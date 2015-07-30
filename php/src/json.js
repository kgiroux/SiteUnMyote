define((function () {
    "use strict";
    return {
        load: function (name, require, load) {
            require(['libs/require-text/text!' + name], function (file) {
                load(JSON.parse(file));
            });
        }
    };
})());
