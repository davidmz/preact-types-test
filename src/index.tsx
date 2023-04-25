import { render } from "preact";


const appEl = document.getElementById("app");
appEl && render(<p>Hello</p>, appEl);

