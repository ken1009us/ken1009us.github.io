export function getCompletions(input: string, commands: string[]): string[] {
  if (!input) return [];
  const lower = input.toLowerCase();
  return commands.filter(cmd => cmd.startsWith(lower)).sort();
}

export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return '';
    }
  }
  return prefix;
}
