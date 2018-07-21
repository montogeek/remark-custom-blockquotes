const visit = require('unist-util-visit');

module.exports = function customBlockquotes(options) {
  let { mapping } = options;

  return function transformer(tree, file) {
    visit(tree, 'paragraph', visitor);

    function visitor(node) {
      const { children } = node;
      const textNode = children[0].value;

      if (!textNode) return;

      const substr = textNode.substr(0, 2);
      const className = mapping[substr];

      if (className) {
        node.type = 'blockquote';
        node.data = {
          hName: 'blockquote',
          hProperties: {
            className
          }
        };

        const r = new RegExp(`^\\${substr}\\s`, 'gm');

        visit(node, 'text', function (cld) {
          cld.value = cld.value.replace(r, ' ');
        });
      }
    }
  };
};
