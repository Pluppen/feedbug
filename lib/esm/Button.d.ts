/// <reference types="react" />
import "./styles/Button.css";
declare type Action = "github" | "custom";
declare type ButtonType = "bug" | "feedback";
export interface ButtonProps {
    text: string;
    type?: ButtonType;
    action: Action;
    onSubmit?: (title: string, description: string, metaData: any) => void;
    githubToken?: string;
    githubURL?: string;
}
declare const Button: ({ text, type, action, onSubmit, githubToken, githubURL }: ButtonProps) => JSX.Element;
export default Button;
