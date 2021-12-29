# GB Composer package name

## Features

Adds a command to get the package name of the currently open project by parsing composer.json.

```json
"commands": [
	{
		"command": "glowingblue-composer-package-name.getName",
		"title": "GB Composer: Get Package Name"
	}
]
```

This commands just returns a string.

This can be used in configuration files to access the package name as a substitution variable
(`${command:glowingblue-composer-package-name.getName}`).

**Example:**

Path mapping for debugging JavaScript:

```json
"pathMappings": [
	{
		"url": "webpack://${command:glowingblue-composer-package-name.getName}/src/",
		"path": "${workspaceFolder}/js/src/"
	}
]
```
