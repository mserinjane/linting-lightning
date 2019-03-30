# linting-lightning
Adding linting for Salesforce Lightning components in Visual Studio Code (vscode)

To have custom linting for lightning components while using vscode for Salesforce development there are a few extra steps that need to be taken.

At the time of this writing, creating a project with a manifest (required if existing SF org is not a scratch org), a directory shows up (.vscode) containing a settings.json file which configures its own directory where Eslint should be read from.

Since Eslint requires custom plugins to be located in the same directory as the eslint installation being used (either global or local), custom plugins would need to be installed in the overridden directory.

Until the SFDX team fix this problem, the following steps can be taken to have get custom linting working.

1. Add the .eslintrc file from this repo to the project's root
2. Run `npm install eslint-plugin-linting-lightning eslint-config-linting-lightning requireindex confusing-browser-globals` to install these locally in the project's root
3. Create a symlink between the project's local node_modules and the location set in the .vscode settings.json file
`"eslint.nodePath": "[this will be specific to you]/.vscode/extensions/salesforce.salesforcedx-vscode-lwc-45.8.0/node_modules"`
`ln -s $PWD/node_modules /[this will be specific to you]/.vscode/extensions/salesforce.salesforcedx-vscode-lwc-45.8.0/node_modules`
4. Restart vscode, open a .js file, click on the PROBLEMS tab
