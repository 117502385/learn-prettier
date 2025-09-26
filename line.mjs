import {ps} from './ps.mjs';
import prettier from 'prettier';

const {concat, group, line, softline, hardline} = prettier.doc.builders;

function demo(label, width) {
    const map = {line, softline, hardline};
    const separator = map[label];

    let doc = concat(['A', separator, 'B']);
    doc = group(doc); // 只有加上本行才能看出区别

    console.log(`=== ${label}, width=${width} ===`);
    ps(doc, width);
}

demo('line', 80);
demo('softline', 80);
demo('hardline', 80);

demo('line', 1);
demo('softline', 1);
demo('hardline', 1);