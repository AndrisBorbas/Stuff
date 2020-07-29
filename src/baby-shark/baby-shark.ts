function babySharkLyrics(): string {
  const names = [
    { name: 'Baby', isShark: true },
    { name: 'Mommy', isShark: true },
    { name: 'Daddy', isShark: true },
    { name: 'Grandma', isShark: true },
    { name: 'Grandpa', isShark: true },
    { name: "Let's go hunt", isShark: false },
  ];
  let lyrics = '';
  function write(object: { name: string; isShark: boolean }) {
    for (let i = 0; i < 3; i++) {
      lyrics += object.name + (object.isShark ? ' shark,' : ',');
      for (let j = 0; j < 6; j++) {
        lyrics += ' doo';
      }
      lyrics += '\n';
    }
    lyrics += object.name + (object.isShark ? ' shark!\n' : '!\n');
  }
  names.forEach((element) => {
    write(element);
  });
  lyrics += 'Run away,…';
  console.log(lyrics);
  return lyrics;
}

babySharkLyrics();
