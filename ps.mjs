import prettier from 'prettier';

export function ps(doc, printWidth = 80, log = true) {
    const {formatted} = prettier.doc.printer.printDocToString(doc, {
        printWidth,
        tabWidth: 4,
    });

    if (log) console.log(formatted);

    return formatted;
}