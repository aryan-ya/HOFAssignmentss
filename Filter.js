function filterAndCapitalize(books) {
    const filteredBooks = [];
    for (const book of books) {
      if (book.year >= 2010) {
        const capitalizedAuthor = book.author.toUpperCase();
        const capitalizedBook = {
          title: book.title,
          author: capitalizedAuthor,
          year: book.year
        };
        filteredBooks.push(capitalizedBook);
      }
    }
    return filteredBooks;
  }
  
  const books = [
    { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
    { title: 'Divergent', author: 'Veronica Roth', year: 2011 },
    { title: 'The Fault in Our Stars', author: 'John Green', year: 2012 }
  ];
  
  const filteredAndCapitalized = filterAndCapitalize(books);
  console.log(filteredAndCapitalized);
  