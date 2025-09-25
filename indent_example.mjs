import prettier from 'prettier';

const {indent, concat, line} = prettier.doc.builders;

const doc = concat(['[', indent(concat([line, 'hello'])), line, ']']);

const ps = prettier.doc.printer.printDocToString(doc, {
    tabWidth: 4, // 缩进宽度
});

console.log(ps.formatted);