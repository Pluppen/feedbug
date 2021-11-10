"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
require("./styles/Button.css");
var CrossIcon = function () { return (react_1.default.createElement("svg", { version: "1.1", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "15px", height: "15px", viewBox: "0 0 94.926 94.926", xmlSpace: "preserve" },
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { d: "M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0\n\t\tc-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096\n\t\tc-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476\n\t\tc0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62\n\t\ts1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z" })),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null),
    react_1.default.createElement("g", null))); };
var Button = function (_a) {
    var text = _a.text, type = _a.type, action = _a.action, onSubmit = _a.onSubmit, githubToken = _a.githubToken, githubURL = _a.githubURL;
    var _b = (0, react_2.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_2.useState)(""), summary = _c[0], setSummary = _c[1];
    var _d = (0, react_2.useState)(""), description = _d[0], setDescription = _d[1];
    var _e = (0, react_2.useState)(""), stepsToReproduce = _e[0], setStepsToReproduce = _e[1];
    var _f = (0, react_2.useState)(""), result = _f[0], setResult = _f[1];
    var _g = (0, react_2.useState)(""), imgURL = _g[0], setImgURL = _g[1];
    var modalRef = (0, react_2.useRef)(null);
    var getCurrentBrowser = function () {
        var isOpera = (!!window['opr'] && !!window["opr"]["addons"]) || !!window['opera'] || navigator.userAgent.indexOf(' OPR/') >= 0;
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isSafari = /constructor/i.test(window["HTMLElement"]) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof window["safari"] !== 'undefined' && window['safari']["pushNotification"]));
        var isIE = /*@cc_on!@*/ false || !!window["document"]["documentMode"];
        var isEdge = !isIE && !!window["StyleMedia"];
        var isChrome = !!window["chrome"] && (!!window["chrome"]["webstore"] || !!window["chrome"]["runtime"]);
        var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
        var isBlink = (isChrome || isOpera) && !!window.CSS;
        if (isOpera) {
            return "Opera";
        }
        else if (isFirefox) {
            return "Firefox";
        }
        else if (isSafari) {
            return "Safari";
        }
        else if (isIE) {
            return "Internet Explorer";
        }
        else if (isEdge) {
            return "Edge";
        }
        else if (isChrome) {
            return "Chrome";
        }
        else if (isEdgeChromium) {
            return "Edge (based on chromium)";
        }
        else if (isBlink) {
            return "Blink";
        }
        else {
            return "Unknown";
        }
    };
    var submitGithubIssue = function (issueBody, labels) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(githubToken && githubURL)) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch(githubURL, {
                            method: "POST",
                            headers: {
                                'Authorization': "token " + githubToken
                            },
                            body: JSON.stringify({
                                "title": summary,
                                "body": issueBody,
                                "labels": labels
                            })
                        })];
                case 1:
                    result_1 = _a.sent();
                    console.log(result_1);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    (0, react_2.useEffect)(function () {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef]);
    var handleSubmit = function () {
        if (type === "bug") {
            submitBug();
        }
        else {
            submitFeedback();
        }
        setOpen(false);
        setSummary("");
        setDescription("");
    };
    var submitFeedback = function () {
        if (onSubmit && action === "custom") {
        }
        else {
            if (action === "github" && githubToken && githubURL) {
                var issueBody = "";
                issueBody += "# " + summary + "\n";
                issueBody += "## Description\n";
                issueBody += description + "\n";
                issueBody += "## Image\n";
                issueBody += "![" + summary + "](" + imgURL + ")\n";
                var labels = ["enhancement", "feature-request"];
                submitGithubIssue(issueBody, labels);
            }
        }
    };
    var submitBug = function () {
        var browser = getCurrentBrowser();
        var time = new Date().toLocaleString();
        var url = window.location.href;
        if (onSubmit && action === "custom") {
            onSubmit(summary, description, { browser: browser, time: time, url: url });
        }
        else {
            if (action === "github" && githubToken && githubURL) {
                var issueBody = "";
                issueBody += "# " + summary + "\n";
                issueBody += "## Description/Overview\n";
                issueBody += description + "\n";
                issueBody += "## Steps to reproduce\n";
                issueBody += stepsToReproduce + "\n";
                issueBody += "## Expected result and actual result\n";
                issueBody += result + "\n";
                issueBody += "## Metadata\n";
                issueBody += "**Browser**: " + browser + "\n";
                issueBody += "**Time**: " + time + "\n";
                issueBody += "**URL**: " + url + "\n";
                var labels = ["bug"];
                submitGithubIssue(issueBody, labels);
            }
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "background-blur " + (open ? "visible" : "") },
            react_1.default.createElement("div", { className: "modal", ref: modalRef },
                react_1.default.createElement("div", { className: "headline" },
                    react_1.default.createElement("h2", null, text),
                    react_1.default.createElement("div", { className: "close-icon", onClick: function () { return setOpen(false); } },
                        react_1.default.createElement(CrossIcon, null))),
                !type || type === "bug" ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("label", { htmlFor: "summary" }, "Summary *"),
                    react_1.default.createElement("input", { className: "input", placeholder: "Summarize what happend in one sentence.", id: "summary", type: "text", value: summary, onChange: function (e) { return setSummary(e.target.value); } }),
                    react_1.default.createElement("label", { htmlFor: "description" }, "Overview/Description *"),
                    react_1.default.createElement("textarea", { id: "description", className: "input", placeholder: "Explain what happend when this bug appeared.", value: description, onChange: function (e) { return setDescription(e.target.value); } }),
                    react_1.default.createElement("label", { htmlFor: "stepsToReproduce" }, "Steps to reproduce *"),
                    react_1.default.createElement("textarea", { id: "stepsToReproduce", className: "input", placeholder: "Explain the steps needed to reproduce this bug.", value: stepsToReproduce, onChange: function (e) { return setStepsToReproduce(e.target.value); } }),
                    react_1.default.createElement("label", { htmlFor: "stepsToReproduce" }, "Expected results and actual results *"),
                    react_1.default.createElement("textarea", { id: "stepsToReproduce", className: "input", placeholder: "Explain what should've happend and then what actually happend.", value: result, onChange: function (e) { return setResult(e.target.value); } }))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("label", { htmlFor: "featureTitle" }, "Title*"),
                    react_1.default.createElement("input", { className: "input", placeholder: "Type a short descriptive title of your feature", id: "featureTitle", type: "text", value: summary, onChange: function (e) { return setSummary(e.target.value); } }),
                    react_1.default.createElement("label", { htmlFor: "featureDesc" }, "Description*"),
                    react_1.default.createElement("textarea", { className: "input", placeholder: "Describe your feature: be specific and include important details.", id: "featureDesc", value: description, onChange: function (e) { return setDescription(e.target.value); } }),
                    react_1.default.createElement("label", { htmlFor: "featureImages" }, "Image url"),
                    react_1.default.createElement("input", { type: "text", className: "input", onChange: function (e) { return setImgURL(e.target.value); }, value: imgURL, placeholder: "Ex: https://example.com/image.png" }))),
                react_1.default.createElement("button", { onClick: handleSubmit }, "Send"))),
        react_1.default.createElement("button", { onClick: function () { return setOpen(!open); }, className: "open-button" }, text)));
};
exports.default = Button;
