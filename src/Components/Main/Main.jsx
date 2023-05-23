import React, { useEffect } from "react";
import "./Main.css";
import { Box } from "@mui/material";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],

    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    // ["clean"], // remove formatting button
];

const Main = () => {
    useEffect(() => {
        const quillServer = new Quill("#editor", {
            theme: "snow",
            modules: { toolbar: toolbarOptions },
        });
    }, []);

    return <div id="editor" className="main"></div>;
};

export default Main;
