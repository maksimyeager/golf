import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import i18next from "i18next";
import global_en from "./translation/en/global.json";
import global_ru from "./translation/ru/global.json";
import { I18nextProvider } from "react-i18next";

i18next.init({
    interpolation: { escapeValue: false },
    lng: localStorage.getItem("lng") || "en",
    resources: {
        ru: {
            global: global_ru,
        },
        en: {
            global: global_en,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter basename={"/"}>
            <I18nextProvider i18n={i18next}>
                <App />
            </I18nextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
