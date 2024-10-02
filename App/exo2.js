
function getMostPopularPlaces() {
    const testCases2 = [
        {
            input: ["Analamahitsy","Analamahitsy","Itaosy","Itaosy","Andoharanofotsy","Itaosy","Alasora" ["Itaosy", "Analamahitsy"]],
            expect: "Itaosy Analamahitsy",
            describe: "Doit selectionner 'Analamahitsy' et 'Itaosy'"
        },
        
        ];

    testCases2.forEach(({ input, expect, describe }) => {
        const result = removeWords(...input);
        console.log(`${describe}: ${result === expect ? 'oui' : 'non'} (Attendu: "${expect}", Obtenu: "${result}")`);
    });
}getMostPopularPlaces();
