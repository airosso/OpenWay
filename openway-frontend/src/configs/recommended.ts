/**
 * @license
 * Copyright 2018 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const rules = {

};
export const jsRules = {
    "align": {
        options: ["parameters", "statements"],
    },
    "class-name": true,
    "curly": true,
    "eofline": true,
    "forin": true,
    "import-spacing": true,
    "indent": {
        options: ["spaces"],
    },
    "jsdoc-format": true,
    "label-position": true,
    "max-line-length": {
        options: [120],
    },
    "new-parens": true,
    "no-arg": true,
    "no-bitwise": true,
    "no-conditional-assignment": true,
    "no-consecutive-blank-lines": true,
    "no-console": true,
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-super": true,
    "no-duplicate-variable": true,
    "no-empty": true,
    "no-eval": true,
    "no-reference": true,
    "no-shadowed-variable": true,
    "no-string-literal": true,
    "no-string-throw": true,
    "no-switch-case-fall-through": false,
    "no-trailing-whitespace": true,
    "no-unused-expression": true,
    // disable this rule as it is very heavy performance-wise and not that useful
    "no-use-before-declare": false,
    "object-literal-sort-keys": true,
    "one-line": {
        options: [
            "check-catch",
            "check-else",
            "check-finally",
            "check-open-brace",
            "check-whitespace",
        ],
    },
    "one-variable-per-declaration": { options: ["ignore-for-loop"] },
    "quotemark": {
        options: ["double", "avoid-escape"],
    },
    "radix": true,
    "semicolon": { options: ["always"] },
    "space-before-function-paren": {
        options: {
            anonymous: "never",
            asyncArrow: "always",
            constructor: "never",
            method: "never",
            named: "never",
        },
    },
    "trailing-comma": {
        options: {
            multiline: "always",
            singleline: "never",
        },
    },
    "triple-equals": { options: ["allow-null-check"] },
    "use-isnan": true,
    "variable-name": {
        options: ["ban-keywords", "check-format", "allow-pascal-case"],
    },
    "whitespace": {
        options: [
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-type",
            "check-typecast",
        ],
    },
};
