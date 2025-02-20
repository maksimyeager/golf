import { useTranslation } from "react-i18next";

const MobileLanguageSelector = () => {
    const { i18n } = useTranslation("global");

    const changeLanguage = (lng) => {
        document.documentElement.lang = lng;
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    // Список доступных языков
    const languages = ["ru", "en"];

    return (
        <div className="mobile-language-selector">
            <ul>
                {languages.map((lang) => (
                    <li
                        key={lang}
                        className={`language-option ${
                            lang === i18n.language ? "active" : ""
                        }`}
                        onClick={() => changeLanguage(lang)}
                    >
                        {lang.toLocaleUpperCase()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileLanguageSelector;
