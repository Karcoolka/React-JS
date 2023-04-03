export const options = [
    { value: "ADD", label: "Sčítání" },
    { value: "SUBTRACT", label: "Odčítání" },
    { value: "MULTIPLY", label: "Násobení" },
    { value: "DIVIDE", label: "Dělení" },
];

export let calculate = (x, y, operation) => {
    let numberX = parseFloat(x);
    let numberY = parseFloat(y);

    switch (operation) {
        case "ADD":
            return numberX + numberX;
        case "SUBTRACT":
            return numberX - numberY;
        case "MULTIPLY":
            return numberX * numberY;
        case "DIVIDE":
            return numberX / numberY;
        default:
            return null;
    }
};