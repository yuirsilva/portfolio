const THEMES = ["default", "red"];
type Theme = (typeof THEMES)[number];

const getTheme = () => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
    }
    return "default";
};

const setTheme = (theme: Theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
};

// Set initial theme
let currentThemeIndex = THEMES.findIndex((theme) => theme === getTheme());

setTheme(THEMES[currentThemeIndex] ?? "default");

export const toggleTheme = () => {
    currentThemeIndex = (currentThemeIndex + 1) % THEMES.length;
    setTheme(THEMES[currentThemeIndex] ?? "default");
};
