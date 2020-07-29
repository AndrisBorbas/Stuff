function babySharkLyrics() {
  return `${[
    ...['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa'].map(
      (n) => `${n} shark`,
    ),
    "Let's go hunt",
  ]
    .map((n) => `${`${n},${' doo'.repeat(6)}\n`.repeat(3)}${n}!\n`)
    .join('')}Run away,…`;
}

console.log(babySharkLyrics());
