# Configuration of ESLINT With PRETTIER in REACT
## Source: [Youtube Video](https://youtu.be/1tYJqTDkvUQ)
### Installing ES lint plugin
- First in vscode we needo to import ESLINT plugin
- After must be added ESLINT into vscode configuration json file
1. Preferences: Open setting JSON
```json
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```
2. Install Prettier plugin and tse up like follows into the json of vscod config
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
### Installing eslint like development dependency
```bash
npm install eslint -D
```
### Starting the package with eslint
```bash
npx eslint --init
```
### Options selected
  - To check syntax, find problems, and enforce code style
  - JavaScript modules (import/export)
  - React
  - Does your project use TypeScript? ‣ No
  - Browser
  - Use a popular style guide
  - Airbnb: https://github.com/airbnb/javascript
  - JSON
  - Would you like to install them now with npm? ‣ Yes

### Generated configuration file
- .eslintrc.json

### Adding rule to recognice extensions jsx 
- Inside rules of .eslintrc.json we add
- [Source](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)
```json
  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
```
### Extending to deppendencies of the package
```json
"extends":[
  "plugin:react/recommended",
  "airbnb",
  "plugin:jsx-a11y/recommended",
  "plugin:react-hooks/recommended"
]
"plugins":[
  "react",
  "react-hooks"
]
```


### Install deppendencies to link prettier with eslint like Development dependencies

```shell
npm i eslint-plugin-prettier eslint-config-prettier babel-eslint -D
```
### Add prettier rules inside eslin config file

```json
    "rules": {
        "prettier/prittier": "error",
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ]
    }
```
```json
    "plugins": [
        "react",
        "react-hooks",
        "prettier"
    ],
```
```json
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
```

### At the end is created another file name .prettierrc to handle prettier rules like follows

```json
{
  "singleQuote": true,
  "trailingComa": "none",
  "endOfLine": "auto",
  "tabWidth": 2
}
```

## Auxiliar plugin

- Install one of the best plugins ever: **Error Lens**