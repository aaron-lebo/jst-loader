var escodegen = require('escodegen');

module.exports = function(source) {
    console.log(source);
    var ast = JSON.parse(source);
    return escodegen.generate(ast);
};
