
// filter using map method

const filterAndCapitalize = books => books
  .filter(({ year }) => year >= 2010)
  .map(({ title, author, year }) => ({ title, author: author.toUpperCase(), year}));

const books = [
  { title: 'The Hunger Games', author: 'Suzanne Collins', year: 20011 },
  { title: 'Divergent', author: 'Veronica Roth', year: 2011 },
  { title: 'The Fault in Our Stars', author: 'John Green', year: 2012 }
];

const filteredAndCapitalized = filterAndCapitalize(books);
console.log(filteredAndCapitalized);



