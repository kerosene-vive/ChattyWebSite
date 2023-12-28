import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const parseMd = (content) => {
    return marked.parse(content)
};

export default {
    parseMd
};
