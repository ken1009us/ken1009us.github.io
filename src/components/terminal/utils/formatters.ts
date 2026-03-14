export function renderBar(level: number, width: number = 20): [string, string] {
  const filled = Math.round((level / 100) * width);
  const empty = width - filled;
  return ['█'.repeat(filled), '░'.repeat(empty)];
}
