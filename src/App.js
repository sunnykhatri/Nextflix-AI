import React from "react";
import ReactDOM from "react-dom/client";


const AppLayout = () => {
    return (
        <div className="app-layout">
            <h1>Welcome to Netflix AI</h1>
            <p>This is a simple HTML page for the Netflix AI project.</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);