import React from "react";
import ReactDOM from "react-dom";
import { HelloWorld } from "../components/HelloWorld";

const Application = () => <HelloWorld text="テスト" />;

ReactDOM.render(<Application />, document.getElementById("app"));
