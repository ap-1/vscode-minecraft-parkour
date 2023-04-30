import * as vscode from "vscode";

const getWebviewContent = () => `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			<style>
				body {
					height: 100vh;
					display: grid;
					overflow: hidden;
					place-items: center;
				}

				video {
					transform: scale(3);
					clip-path: polygon(
						33.33% 0%,
						66.67% 0%,
						66.67% 100%,
						33.33% 100%
					);
				}
			</style>
		</head>
		<body>
			<video autoplay muted>
				<source src="https://yewtu.be/latest_version?id=n_Dv4JMiwK8#t=11" />
			</video>
		</body>
	</html>
`;

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(
		"minecraft-parkour.overstimulate",
		() => {
			const panel = vscode.window.createWebviewPanel(
				"minecraft-parkour.video",
				"Overstimulate",
				{ viewColumn: vscode.ViewColumn.Beside, preserveFocus: true },
				{ enableScripts: true }
			);

			panel.webview.html = getWebviewContent();
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}
