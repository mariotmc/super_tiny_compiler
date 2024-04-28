const tokenizer = require("./tokenizer");
const parser = require("./parser");
const transformer = require("./transformer");
const generateCode = require("./generateCode");

module.exports = function compiler(input) {
  // 1. Lexical Analysis - breaks the input code (string) into the basic syntax of the language (array of objects)
  const tokens = tokenizer(input);

  // 2. Syntactic Analysis - transforms the tokens (array of objects) into an AST (tree of objects) which represents our program
  const lispAST = parser(tokens);

  // 3. Transformation - transforms the original Lisp AST into the target Javascript AST
  const jsAST = transformer(lispAST);

  // 4. Code Generation - transforms our target AST (object of objects) into actual code (string)
  const jsCode = generateCode(jsAST);

  return jsCode;
};
