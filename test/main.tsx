import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./TestApp.tsx";

import { registerAssetLocation } from "../src/asset.ts";

registerAssetLocation("/");

const root = createRoot(document.getElementById("-root-") as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
