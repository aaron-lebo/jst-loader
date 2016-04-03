var escodegen = require('escodegen');

module.exports = function(source) {
    var ast = JSON.parse(source);
    return escodegen.generate(ast);
};
