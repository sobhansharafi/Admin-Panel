import fa_ir from './fa_ir';
import en_us from './en_us';

const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en";
export { lang };
const directions = {
    fa: "rtl",
    en: "ltr",
};
function getDirections() {
    return directions[lang];
};
export { getDirections };

// return fonts
const fonts = {
    fa: "IRANSans",
    en: "Muli",
};
function getFonts() {
    return fonts[lang];
};
export { getFonts }

const translates = {
    en: en_us,
    fa: fa_ir,
};
// return translate
function getTranslate() {
    return translates[lang];
};
export { getTranslate };
// function for change the language
function changeLanguage(newlang){
    if (newlang === lang ) {
        return;
    };
    localStorage.setItem("lang", newlang);
    window.location.reload();
};
export { changeLanguage };