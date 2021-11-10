import React from "react";
import {useRef, useState, useEffect } from "react";

import "./styles/Button.css";

type Action = "github" | "custom";
type ButtonType = "bug" | "feedback";

export interface ButtonProps {
    text: string,
    type?: ButtonType, // Defaults to bug
    action: Action,
    onSubmit?: (title: string, description: string, metaData: any) => void,
    githubToken?: string,
    githubURL?: string
}

declare const InstallTrigger: any;

const CrossIcon = () => (
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="15px" height="15px" viewBox="0 0 94.926 94.926"
	 xmlSpace="preserve">
<g>
	<path d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
		c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
		c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
		c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
		s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g><g></g><g></g></svg>
)

const Button = ({text, type, action, onSubmit, githubToken, githubURL}: ButtonProps) => {
    const [open, setOpen] = useState(false);

    const [summary, setSummary] = useState("");
    const [description, setDescription] = useState("");
    const [stepsToReproduce, setStepsToReproduce] = useState("");
    const [result, setResult] = useState("");

    const [imgURL, setImgURL] = useState("");

    const modalRef = useRef<HTMLDivElement | null>(null);

    const getCurrentBrowser = () => {

        var isOpera = (!!window['opr' as any] && !!window["opr" as any]["addons" as any]) || !!window['opera' as any] || navigator.userAgent.indexOf(' OPR/') >= 0;
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isSafari = /constructor/i.test(window["HTMLElement"] as any) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari' as any] || (typeof window["safari" as any] !== 'undefined' && window['safari' as any]["pushNotification" as any]));
        var isIE = /*@cc_on!@*/false || !!window["document" as any]["documentMode" as any];
        var isEdge = !isIE && !!window["StyleMedia" as any];
        var isChrome = !!window["chrome" as any] && (!!window["chrome" as any]["webstore" as any] || !!window["chrome" as any]["runtime" as any]); var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
        var isBlink = (isChrome || isOpera) && !!window.CSS;

        if(isOpera){
            return "Opera"
        } else if(isFirefox) {
            return "Firefox"
        } else if(isSafari) {
            return "Safari"
        } else if(isIE) {
            return "Internet Explorer"
        } else if(isEdge) {
            return "Edge"
        } else if(isChrome) {
            return "Chrome"
        } else if(isEdgeChromium) {
            return "Edge (based on chromium)"
        } else if(isBlink) {
            return "Blink"
        } else {
            return "Unknown"
        }
    }

    const submitGithubIssue = async (issueBody: string, labels: string[]) => {
        if(githubToken && githubURL) {
            const result = await fetch(githubURL, {
                method: "POST",
                headers: {
                    'Authorization': `token ${githubToken}`
                },
                body: JSON.stringify({
                    "title": summary,
                    "body": issueBody,
                    "labels": labels
                })
            });
            console.log(result);
        }
    }

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef]);

    const handleSubmit = () => {
        if(type === "bug") {
            submitBug();
        } else {
            submitFeedback();
        }

        setOpen(false);
        setSummary("");
        setDescription("");
    }

    const submitFeedback = () => {
        if (onSubmit && action === "custom") {
        } else {
            if(action === "github" && githubToken && githubURL) {
                let issueBody = ""
                issueBody += "# " + summary + "\n"
                issueBody += "## Description\n"
                issueBody += description + "\n"
                issueBody += "## Image\n"
                issueBody += "![" + summary + "](" + imgURL + ")\n"
                const labels = ["enhancement", "feature-request"];
                submitGithubIssue(issueBody, labels)
            }
        }
    }

    const submitBug = () => {
        const browser = getCurrentBrowser();
        const time = new Date().toLocaleString();
        const url = window.location.href;
        if (onSubmit && action === "custom") {
            onSubmit(summary, description, {browser, time, url});
        } else {
            if(action === "github" && githubToken && githubURL){
                let issueBody = ""
                issueBody += "# " + summary + "\n"
                issueBody += "## Description/Overview\n"
                issueBody += description + "\n"
                issueBody += "## Steps to reproduce\n"
                issueBody += stepsToReproduce + "\n"
                issueBody += "## Expected result and actual result\n"
                issueBody += result + "\n"
                issueBody += "## Metadata\n"
                issueBody += "**Browser**: " + browser + "\n"
                issueBody += "**Time**: " + time + "\n"
                issueBody += "**URL**: " + url + "\n"
                const labels = ["bug"];
                submitGithubIssue(issueBody, labels);
            }
        }

    }

    return (
        <div>
            <div className={"background-blur "+(open ? "visible" : "")}>
                <div className="modal" ref={modalRef}>
                    <div className="headline">
                        <h2>{text}</h2>
                        <div className="close-icon" onClick={() => setOpen(false)} ><CrossIcon /></div>
                    </div>

                    {!type || type === "bug" ? (
                        <>
                            <label htmlFor="summary">Summary *</label>
                            <input
                                className="input"
                                placeholder="Summarize what happend in one sentence."
                                id="summary"
                                type="text"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                            />

                            <label htmlFor="description">Overview/Description *</label>
                            <textarea
                                id="description"
                                className="input"
                                placeholder="Explain what happend when this bug appeared."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <label htmlFor="stepsToReproduce">Steps to reproduce *</label>
                            <textarea
                                id="stepsToReproduce"
                                className="input"
                                placeholder="Explain the steps needed to reproduce this bug."
                                value={stepsToReproduce}
                                onChange={(e) => setStepsToReproduce(e.target.value)}
                            />

                            <label htmlFor="stepsToReproduce">Expected results and actual results *</label>
                            <textarea
                                id="stepsToReproduce"
                                className="input"
                                placeholder="Explain what should've happend and then what actually happend."
                                value={result}
                                onChange={(e) => setResult(e.target.value)}
                            />
                        </>
                    ) : (
                        <>
                            <label htmlFor="featureTitle">Title*</label>
                            <input
                                className="input"
                                placeholder="Type a short descriptive title of your feature"
                                id="featureTitle"
                                type="text"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                            />

                            <label htmlFor="featureDesc">Description*</label>
                            <textarea
                                className="input"
                                placeholder="Describe your feature: be specific and include important details."
                                id="featureDesc"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <label htmlFor="featureImages">Image url</label>
                            <input type="text" className="input" onChange={(e) => setImgURL(e.target.value)} value={imgURL} placeholder="Ex: https://example.com/image.png" />
                        </>
                    )}

                    <button onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            </div>
            <button onClick={() => setOpen(!open)} className="open-button">
                {text}
            </button>
        </div>
    );
}

export default Button;