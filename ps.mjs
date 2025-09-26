import prettier from 'prettier';

export function ps(doc, width = 80, mode = {log: true, ret: true}) {
    const {formatted} = prettier.doc.printer.printDocToString(doc, {
        printWidth: width,
        tabWidth: 4,
    });
    if (mode.log)
        console.log(formatted);

    return mode.ret ? formatted : undefined;
}
