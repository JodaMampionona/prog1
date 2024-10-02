
function removeWord() {
    const testCases = [
        {
            input: ["Hello, ceci est un test", ["ceci", "un"]],
            expect: "Hello, est test",
            describe: "Doit enlever 'ceci' et 'un'"
        },
        {
            input: ["Hello Java", ["java"]],
            expect: "Hello Java",
            describe: "Doit ne rien enlever, 'java' est différent de 'Java'"
        },
        ];

    testCases.forEach(({ input, expect, describe }) => {
        const result = removeWords(...input);
        console.log(`${describe}: ${result === expect ? 'oui' : 'non'} (Attendu: "${expect}", Obtenu: "${result}")`);
    });
}
removeWord();
