/**
 * @fileoverview No abbreviating component, event, helper
 * @author Erin Jane
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "No abbreviating component, event, helper",
            category: "Fill me in",
            recommended: false
        },
        fixable: "code",  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {
            Identifier(node) {
                if (node.name === 'cmp') {
                    context.report({
                        node,
                        message: 'Abbreviation of {{ identifier }} not allow',
                        data: {
                            identifier: node.name
                        },
                        fix: function(fixer) {
                            return fixer.replaceText(node, 'component');
                        }
                    });
                }
                if (node.name === 'evt' || node.name === 'e') {
                    context.report({
                        node,
                        message: 'Abbreviation of {{ identifier }} not allow',
                        data: {
                            identifier: node.name
                        },
                        fix: function(fixer) {
                            return fixer.replaceText(node, 'event');
                        }
                    });
                }
                if (node.name === 'h') {
                    context.report({
                        node,
                        message: 'Abbreviation of {{ identifier }} not allow',
                        data: {
                            identifier: node.name
                        },
                        fix: function(fixer) {
                            return fixer.replaceText(node, 'helper');
                        }
                    });
                }
            }
        };
    }
};
