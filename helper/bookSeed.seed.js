'use strict';

const bookModel = require('../models/book.model');

const seedBook = () => {


    const firstBook = new bookModel({
        title:'Jane Eyre' ,
        description: 'Jane Eyre is a first-person narrative of the title character, a small, plain-faced, intelligent and honest English orphan. The novel goes through five distinct stages: Jane\'s childhood at Gateshead, where she is abused by her aunt and cousins;her education at Lowood School, where she acquires friends and role models but also suffers privations; her time as the governess of Thornfield Manor, where she falls in love with her Byronic employer, Edward Rochester; her time with the Rivers family at Marsh\'s End (or Moor House) and Morton, where her cold clergyman-cousin St John Rivers proposes to her; and her reunion with and marriage to her beloved Rochester at his house of Ferndean. Partly autobiographical, the novel abounds with social criticism and sinister gothic elements.',
        status:'Available' ,
        email: 'salsabilmislat196@gmail.com'
  });
  firstBook.save();

  const secondBook = new bookModel({
    title:'The Lion\'s Game' ,
    description: 'Detective John Corey, last seen in Plum Island, now faces his toughest assignment yet: the pursuit and capture of the world\'s most dangerous terrorist -- a young Arab known as "The Lion" who has baffled a federal task force and shows no sign of stopping in his quest for revenge against the American pilots who bombed Libya and killed his family. Filled with unrelenting suspense and surprising plot twists at every terrifying turn, The Lion\'s Game is a heartstopping race against time and one of Nelson DeMille\'s most riveting thrillers.',
    status:'Available' ,
    email: 'salsabilmislat196@gmail.com'
});

secondBook.save();

const thirdBook = new bookModel({
    title:'The Da Vinci Code' ,
    description: 'The Da Vinci Code follows "symbologist" Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.',
    status:'Available' ,
    email: 'salsabilmislat196@gmail.com'
});

thirdBook.save();

console.log("Data seeded!");
};

module.exports = seedBook;