/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {

    "use strict";

    var CrownConnection = require("CrownConnection");


    var lastModKeysState = {
            altKey: false,
            ctrlKey: false,
            shiftKey: false
        },

        touchState = false,

        ctrlKeyCode,

        eventHandlers = {
            change: []
        };

    CrownConnection.on("crown_touch_event", function (crownMsg) {

        touchState = !!crownMsg.touch_state;
    });

    function possibleChange() {

        if (lastModKeysState.altKey !== exports.altKey || lastModKeysState.ctrlKey !== exports.ctrlKey || lastModKeysState.shiftKey !== exports.shiftKey) {

            eventHandlers.change.forEach(function (handlerFn) {
                handlerFn(exports.ctrlKey, exports.altKey, exports.shiftKey);
            });

            lastModKeysState.altKey = exports.altKey;
            lastModKeysState.ctrlKey = exports.ctrlKey;
            lastModKeysState.shiftKey = exports.shiftKey;
        }
    }

    function onKeyHandler(event) {

        if ([16, 17, 18, 91, 93].indexOf(event.which) === -1) {

            return;
        }

        if (touchState) {

            event.preventDefault();
        }

        exports.shiftKey = event.shiftKey;

        if (event.type === "keydown") {

            if (event.code.match(/^Alt/)) {

                exports.altKey = true;

                if (event.code.match(/^AltRight/) && ctrlKeyCode === "ControlLeft") {

                    exports.ctrlKey = false;
                }
            }

            if (event.code.match(/^Control|^OSLeft$|^OSRight$/)) {

                exports.ctrlKey = true;
                ctrlKeyCode = event.code;
            }
        } else {

            if (event.code.match(/^Alt/)) {

                exports.altKey = false;
            }

            if ((event.code.match(/^Control/) && (ctrlKeyCode !== "ControlRight" || event.code === "ControlRight")) || event.code.match(/^OSLeft$|^OSRight$/)) {

                exports.ctrlKey = false;
                ctrlKeyCode = null;
            }
        }

        possibleChange();
    }

    exports.altKey = false;
    exports.ctrlKey = false;
    exports.shiftKey = false;

    exports.on = function (event, handler) {

        if (eventHandlers[event]) {

            eventHandlers[event].push(handler);
        }
    };

    exports.reset = function () {

        exports.altKey = false;
        exports.ctrlKey = false;
        exports.shiftKey = false;

        ctrlKeyCode = null;

        possibleChange();
    };

    window.addEventListener("keydown", onKeyHandler, true);
    window.addEventListener("keyup", onKeyHandler, true);

});
