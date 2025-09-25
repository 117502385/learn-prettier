import prettier from 'prettier';

const {group, indent, concat, line} = prettier.doc.builders;

const doc = concat(['[', indent(concat([line, 'hello'])), line, ']']);

const ps = prettier.doc.printer.printDocToString(group(doc), {
    tabWidth: 4,
    printWidth: 80,
});

console.log(ps.formatted);