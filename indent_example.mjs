import prettier from 'prettier';
import {ps} from './ps.mjs';

const {group, indent, concat, line} = prettier.doc.builders;

const doc = concat(['[', indent(concat([line, 'hello'])), line, ']']);

ps(group(doc));          // 单行显示
ps(group(doc), 2); // 多行显示