import prettier from 'prettier';

const {concat, group, line, softline, hardline} = prettier.doc.builders;

function demo(label, width) {
    const map = {line, softline, hardline};
    const separator = map[label];

    let doc = concat(['A', separator, 'B']);
    doc = group(doc); // 只有加上本行才能看出区别
    const result = prettier.doc.printer.printDocToString(doc, {
        printWidth: width,
    });

    console.log(`=== ${label}, width=${width} ===`);
    console.log(result.formatted);
}

demo('line', 80);
demo('softline', 80);
demo('hardline', 80);

demo('line', 1);
demo('softline', 1);
demo('hardline', 1);