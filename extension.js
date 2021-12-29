const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand(
		'glowingblue-composer-package-name.getName',
		async function () {
			// get composer.json file
			const files = await vscode.workspace.findFiles('composer.json');

			if (files.length > 0) {
				// Get package name from composer.json
				const composerJsonPath = files[0].fsPath;
				const composerJsonDoc = await vscode.workspace.openTextDocument(composerJsonPath);
				const composerJsonContent = composerJsonDoc.getText();
				const packageName = JSON.parse(composerJsonContent).name;

				return packageName;
			}

			vscode.window.showWarningMessage('No composer.json file found.');
		},
	);

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate,
};
