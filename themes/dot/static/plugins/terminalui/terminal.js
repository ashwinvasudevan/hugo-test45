require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Terminal = void 0;
    const utils_1 = require("./utils");
    class Terminal {
        constructor(containers, options) {
            this.containers = containers;
            this.options = options;
        }
        init() {
            if (this.containers.length === 0) {
                return;
            }
            if (this.options.prompt) {
                utils_1.applyCustomPrompt(this.containers, this.options.prompt);
            }
        }
    }
    exports.Terminal = Terminal;
    
    },{"./utils":3}],2:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.terminalui = exports.DEFAULT_SELECTOR = void 0;
    const Terminal_1 = require("./Terminal");
    exports.DEFAULT_SELECTOR = '[data-terminalui]';
    const DEFAULT_OPTIONS = {
        failSilently: true,
    };
    /**
     * TerminalUI
     *
     * @param options TerminalUI options
     * @returns terminal instance
     */
    const terminalui = (options) => {
        const opts = Object.assign(Object.assign({}, DEFAULT_OPTIONS), (options || {}));
        const selector = `${opts.selector || exports.DEFAULT_SELECTOR}:not([data-terminaluihandled])`;
        const containers = document.querySelectorAll(selector);
        if (!opts.failSilently && (!containers || containers.length === 0)) {
            throw new Error('No TerminalUI objects found');
        }
        containers.forEach((container) => {
            container.dataset.terminaluihandled = 'true';
        });
        const terminal = new Terminal_1.Terminal(containers, opts);
        return terminal;
    };
    exports.terminalui = terminalui;
    
    },{"./Terminal":1}],3:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.applyCustomPrompt = void 0;
    const PROMPT_CSS_VARIABLE = '--prompt';
    const applyCustomPrompt = (containers, prompt) => {
        containers.forEach((container) => {
            container.style.setProperty(PROMPT_CSS_VARIABLE, `'${prompt}'`);
        });
    };
    exports.applyCustomPrompt = applyCustomPrompt;
    
    },{}],"@piopli/terminal-ui":[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    var terminal_ui_1 = require("./lib/terminal-ui");
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return terminal_ui_1.terminalui; } });
    
    },{"./lib/terminal-ui":2}]},{},[]);
    