import parse from 'html-react-parser';

const badHtml = 'Some user input malformed HTML</strong></p>';

export const InconsistentHtmlRender = () => parse(badHtml);