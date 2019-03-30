/**
 * @fileoverview No abbreviating component, event, helper
 * @author Erin Jane
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-cmp-e-h"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-cmp-e-h", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "cmp, e, h",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
