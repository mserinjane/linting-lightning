# eslint-plugin-linting-lightning

Opinionated Lightning Linting

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-linting-lightning`:

```
$ npm install eslint-plugin-linting-lightning --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-linting-lightning` globally.

## Usage

Add `linting-lightning` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "linting-lightning"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "linting-lightning/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





