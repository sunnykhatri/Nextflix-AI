import React from "react";
import Body from "./components/Body";
import ReactDOM from "react-dom/client";


const AppLayout = () => {
    return (
        <Body />
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);