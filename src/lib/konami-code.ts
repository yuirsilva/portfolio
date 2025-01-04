const KONAMI_CODE =
    "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA";

export function onKonamiCode(cheat: () => void) {
    let input = "";

    const konamiHandler = (e: KeyboardEvent) => {
        input += "" + e.code;

        if (input === KONAMI_CODE) {
            document.removeEventListener("keydown", konamiHandler);
            return cheat();
        }

        if (!KONAMI_CODE.indexOf(input)) return;
        input = "" + e.code;
    };

    document.addEventListener("keydown", konamiHandler);
}
