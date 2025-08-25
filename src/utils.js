import chalk from "chalk";

export function printCheatSheet(topic, output, tokens) {
    console.log(chalk.green.bold(`\n📌 Cheat Sheet for ${topic}\n`));
    console.log(output);
    console.log(chalk.gray(`\n🔹 Tokens used: ${tokens}\n`));
}
