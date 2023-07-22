const data = [
    {
      id: '1',
      category: 'TV Series',
      title: 'The Last of Us',
      rating: 8.8,
      ratingOutOf: 10,
      link: 'https://www.imdb.com/title/tt3581920/',
      image: 'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpg',        
      description: "The Last of Us: Created by Neil Druckmann, Craig Mazin. With Pedro Pascal, Bella Ramsey, Anna Torv, Lamar Johnson. After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope."
    },
    {
      id: '2',
      category: 'TV Series',
      title: 'Jury Duty',
      rating: 8.3,
      ratingOutOf: 10,
      link: 'https://www.imdb.com/title/tt22074164/',
      image: 'https://m.media-amazon.com/images/M/MV5BOGI4NjI2YzMtMWYzNS00OTI4LTkwM2MtZTEzNDU2MDhhNTY0XkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_FMjpg_UX1000_.jpg',        
      description: 'Jury Duty: Created by Lee Eisenberg, Gene Stupnitsky. With James Marsden, Alan Barinholtz, Susan Berger, Cassandra Blair. It follows the workings of an American jury trial through the eyes of Ronald Gladden, a juror who is unaware the entire case is fake. Everyone except him is an actor, and everything that happens is carefully planned.'
    },
    {
      id: '3',
      category: 'TV Series',
      title: 'Silo',
      rating: 8.1,
      ratingOutOf: 10,
      link: 'https://www.imdb.com/title/tt14688458/',
      image: 'https://m.media-amazon.com/images/M/MV5BNTk3MGJkZGItNzRjYy00MDhiLWExMjUtOWU2Njc3YWRmOWE3XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg',        
      description: 'Silo: Created by Graham Yost. With Rebecca Ferguson, Common, Tim Robbins, Harriet Walter. Men and women live in a giant silo underground with several regulations which they believe are in place to protect them from the toxic and ruined world on the surface.'
    },
    {
      id: '4',
      category: 'movies',
      title: "Guy Ritchie's The Covenant",
      rating: 7.5,
      ratingOutOf: 10,
      link: 'https://www.imdb.com/title/tt4873118/',
      image: 'https://m.media-amazon.com/images/M/MV5BNmQzOWZhOTMtZTcxNC00MTdkLWEwYmUtOWVmOTFhNTdkNjRkXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_FMjpg_UX1000_.jpg',        
      description: "Guy Ritchie's The Covenant: Directed by Guy Ritchie. With Jake Gyllenhaal, Dar Salim, Sean Sagar, Jason Wong. During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain."
    },
    {
      id: '5',
      category: 'TV Series',
      title: 'The Witcher',
      rating: 8.1,
      ratingOutOf: 10,
      link: 'https://www.imdb.com/title/tt5180504/',
      image: 'https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',        
      description: 'The Witcher: Created by Lauren Schmidt Hissrich. With Henry Cavill, Freya Allan, Anya Chalotra, Eamon Farren. Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.'
    },
    {
      id: '6',
      category: 'TV Series',
      title: 'Severance',
      rating: 8.7,
      ratingOutOf: 10,
      link: 'https://www.imdb.com/title/tt11280740/',
      image: 'https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',        
      description: 'Severance: Created by Dan Erickson. With Adam Scott, Zach Cherry, Britt Lower, Tramell Tillman. Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.'
    },
    {
      id: '61431922',
      category: 'books',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1666994927l/61431922.jpg',
      title: 'Fourth Wing (The Empyrean, #1)',
      rating: 4.65,
      ratingOutOf: 5,
      description: `Enter the brutal and elite world of a war college for dragon riders from USA Today bestselling author Rebecca YarrosTwenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders.But when you’re smaller than everyone else and your body is brittle, death is only a heartbeat away...because dragons don’t bond to “fragile” humans. They incinerate them.With fewer dragons willing to bond than cadets, most would kill Violet to better their own chances of success. The rest would kill her just for being her mother’s daughter—like Xaden Riorson, the most powerful and ruthless wingleader in the Riders Quadrant.She’ll need every edge her wits can give her just to see the next sunrise.Yet, with every day that passes, the war outside grows more deadly, the kingdom's protective wards are failing, and the death toll continues to rise. Even worse, Violet begins to suspect leadership is hiding a terrible secret.Friends, enemies, lovers. Everyone at Basgiath War College has an agenda—because once you enter, there are only two ways out: graduate or die"Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy." —Booklist, starred review“Dragons and war, passion and power…Fourth Wing is dazzling. Rebecca Yarros has created a world as compelling as it is deadly, and I can't wait to see where she takes it next.” ―Nalini Singh, New York Times bestselling author“An expertly woven tale in a riveting world of dragons, life-or-death competition, and betrayal, Rebecca Yarros hits all the high notes and delivers a thrilling new romantic fantasy that readers will devour.” ―K.A. Tucker, international bestselling author`,
      link: 'https://www.goodreads.com/book/show/61431922'
    },
    {
      id: '2767793',
      category: 'books',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628563911l/2767793._SY475_.jpg',
      title: 'The Hero of Ages (Mistborn, #3)',
      rating: 4.51,
      ratingOutOf: 5,
      description: `"Description contains spoilers for previous book in the series"Who is the Hero of Ages?To end the Final Empire and restore freedom, Vin killed the Lord Ruler. But as a result, the Deepness—the lethal form of the ubiquitous mists—is back, along with increasingly heavy ashfalls and ever more powerful earthquakes. Humanity appears to be doomed.Having escaped death at the climax of The Well of Ascension only by becoming a Mistborn himself, Emperor Elend Venture hopes to find clues left behind by the Lord Ruler that will allow him to save the world. Vin is consumed with guilt at having been tricked into releasing the mystic force known as Ruin from the Well. Ruin wants to end the world, and its near omniscience and ability to warp reality make stopping it seem impossible. Vin can't even discuss it with Elend lest Ruin learn their plans!`,
      link: 'https://www.goodreads.com/book/show/2767793'
    },
    {
      id: '49021976',
      category: 'books',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599911216l/49021976.jpg',
      title: 'Rhythm of War (The Stormlight Archive, #4)',
      rating: 4.59,
      ratingOutOf: 5,
      description: "The eagerly awaited sequel to the #1 New York Times bestselling Oathbringer, from epic fantasy author Brandon SandersonAfter forming a coalition of human resistance against the enemy invasion, Dalinar Kholin and his Knights Radiant have spent a year fighting a protracted, brutal war. Neither side has gained an advantage, and the threat of a betrayal by Dalinar's crafty ally Taravangian looms over every strategic move.Now, as new technological discoveries by Navani Kholin's scholars begin to change the face of the war, the enemy prepares a bold and dangerous operation. The arms race that follows will challenge the very core of the Radiant ideals, and potentially reveal the secrets of the ancient tower that was once the heart of their strength.At the same time that Kaladin Stormblessed must come to grips with his changing role within the Knights Radiant, his Windrunners face their own problem: As more and more deadly enemy Fused awaken to wage war, no more honorspren are willing to bond with humans to increase the number of Radiants. Adolin and Shallan must lead the coalition’s envoy to the honorspren stronghold of Lasting Integrity and either convince the spren to join the cause against the evil god Odium, or personally face the storm of failure.",  
      link: 'https://www.goodreads.com/book/show/49021976'
    },
    {
      id: '61439040',
      category: 'books',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1657781256l/61439040._SX318_.jpg',
      title: '1984',
      rating: 4.2,
      ratingOutOf: 5,
      description: `The new novel by George Orwell is the major work towards which all his previous writing has pointed. Critics have hailed it as his "most solid, most brilliant" work. Though the story of Nineteen Eighty-Four takes place thirty-five years hence, it is in every sense timely. The scene is London, where there has been no new housing since 1950 and where the city-wide slums are called Victory Mansions. Science has abandoned Man for the State. As every citizen knows only too well, war is peace.To Winston Smith, a young man who works in the Ministry of Truth (Minitru for short), come two people who transform this life completely. One is Julia, whom he meets after she hands him a slip reading, "I love you." The other is O'Brien, who tells him, "We shall meet in the place where there is no darkness." The way in which Winston is betrayed by the one and, against his own desires and instincts, ultimately betrays the other, makes a story of mounting drama and suspense.Alternate cover edition can be found here.`,
      link: 'https://www.goodreads.com/book/show/61439040'
    },
    {
      id: '23692271',
      category: 'books',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595674533l/23692271._SY475_.jpg',
      title: 'Sapiens: A Brief History of Humankind',
      rating: 4.36,
      ratingOutOf: 5,
      description: 'From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.” One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us? Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens integrates history and science to reconsider accepted narratives, connect past developments with contemporary concerns, and examine specific events within the context of larger ideas. Dr. Harari also compels us to look ahead, because over the last few decades humans have begun to bend laws of natural selection that have governed life for the past four billion years. We are acquiring the ability to design not only the world around us, but also ourselves. Where is this leading us, and what do we want to become? Featuring 27 photographs, 6 maps, and 25 illustrations/diagrams, this provocative and insightful work is sure to spark debate and is essential reading for aficionados of Jared Diamond, James Gleick, Matt Ridley, Robert Wright, and Sharon Moalem.',
      link: 'https://www.goodreads.com/book/show/23692271'
    },
    {
      id: '34002132',
      category: 'books',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1654573897l/34002132._SY475_.jpg',
      title: 'Oathbringer (The Stormlight Archive, #3)',
      rating: 4.6,
      ratingOutOf: 5,
      description: "In Oathbringer, the third volume of the New York Times bestselling Stormlight Archive, humanity faces a new Desolation with the return of the Voidbringers, a foe with numbers as great as their thirst for vengeance.Dalinar Kholin's Alethi armies won a fleeting victory at a terrible cost: The enemy Parshendi summoned the violent Everstorm, which now sweeps the world with destruction, and in its passing awakens the once peaceful and subservient parshmen to the horror of their millennia-long enslavement by humans. While on a desperate flight to warn his family of the threat, Kaladin Stormblessed must come to grips with the fact that the newly kindled anger of the parshmen may be wholly justified.Nestled in the mountains high above the storms, in the tower city of Urithiru, Shallan Davar investigates the wonders of the ancient stronghold of the Knights Radiant and unearths dark secrets lurking in its depths. And Dalinar realizes that his holy mission to unite his homeland of Alethkar was too narrow in scope. Unless all the nations of Roshar can put aside Dalinar's blood-soaked past and stand together--and unless Dalinar himself can confront that past--even the restoration of the Knights Radiant will not prevent the end of civilization.",
      link: 'https://www.goodreads.com/book/show/34002132'
    },
    {
      id: '68429',
      category: 'books',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619538925l/68429._SY475_.jpg',
      title: 'The Well of Ascension (Mistborn, #2)',
      rating: 4.38,
      ratingOutOf: 5,
      description: `"Description contains spoilers for previous book in the series"The impossible has been accomplished. The Lord Ruler—the man who claimed to be god incarnate and brutally ruled the world for a thousand years—has been vanquished. But Kelsier, the hero who masterminded that triumph, is dead too, and now the awesome task of building a new world has been left to his young protégé, Vin, the former street urchin who is now the most powerful Mistborn in the land, and to the idealistic young nobleman she loves.As Kelsier's protégé and slayer of the Lord Ruler she is now venerated by a budding new religion, a distinction that makes her intensely uncomfortable. Even more worrying, the mists have begun behaving strangely since the Lord Ruler died, and seem to harbor a strange vaporous entity that haunts her.Stopping assassins may keep Vin's Mistborn skills sharp, but it's the least of her problems. Luthadel, the largest city of the former empire, doesn't run itself, and Vin and the other members of Kelsier's crew, who lead the revolution, must learn a whole new set of practical and political skills to help. It certainly won't get easier with three armies - one of them composed of ferocious giants - now vying to conquer the city, and no sign of the Lord Ruler's hidden cache of atium, the rarest and most powerful allomantic metal.As the siege of Luthadel tightens, an ancient legend seems to offer a glimmer of hope. But even if it really exists, no one knows where to find the Well of Ascension or what manner of power it bestows.`,
      link: 'https://www.goodreads.com/book/show/68429'
    },
    {
      id: '7235533',
      category: 'books',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1659905828l/7235533._SY475_.jpg',
      title: 'The Way of Kings (The Stormlight Archive, #1)',
      rating: 4.65,
      ratingOutOf: 5,
      description: "From #1 New York Times bestselling author Brandon Sanderson, The Way of Kings, book one of The Stormlight Archive begins an incredible new saga of epic proportion.Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter.It has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars were fought for them, and won by them.One such war rages on a ruined landscape called the Shattered Plains. There, Kaladin, who traded his medical apprenticeship for a spear to protect his little brother, has been reduced to slavery. In a war that makes no sense, where ten armies fight separately against a single foe, he struggles to save his men and to fathom the leaders who consider them expendable.Brightlord Dalinar Kholin commands one of those other armies. Like his brother, the late king, he is fascinated by an ancient text called The Way of Kings. Troubled by over-powering visions of ancient times and the Knights Radiant, he has begun to doubt his own sanity.Across the ocean, an untried young woman named Shallan seeks to train under an eminent scholar and notorious heretic, Dalinar's niece, Jasnah. Though she genuinely loves learning, Shallan's motives are less than pure. As she plans a daring theft, her research for Jasnah hints at secrets of the Knights Radiant and the true cause of the war.The result of over ten years of planning, writing, and world-building, The Way of Kings is but the opening movement of the Stormlight Archive, a bold masterpiece in the making.Speak again the ancient oaths:Life before death.Strength before weakness.Journey before Destination.and return to men the Shards they once bore.The Knights Radiant must stand again.",
      link: 'https://www.goodreads.com/book/show/7235533'
    },
    {
      id: '17332218',
      category: 'books',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1659905768l/17332218._SY475_.jpg',
      title: 'Words of Radiance (The Stormlight Archive, #2)',
      rating: 4.75,
      ratingOutOf: 5,
      description: `Words of Radiance, Book Two of the Stormlight Archive, continues the immersive fantasy epic that The Way of Kings began.Expected by his enemies to die the miserable death of a military slave, Kaladin survived to be given command of the royal bodyguards, a controversial first for a low-status "darkeyes." Now he must protect the king and Dalinar from every common peril as well as the distinctly uncommon threat of the Assassin, all while secretly struggling to master remarkable new powers that are somehow linked to his honorspren, Syl.The Assassin, Szeth, is active again, murdering rulers all over the world of Roshar, using his baffling powers to thwart every bodyguard and elude all pursuers. Among his prime targets is Highprince Dalinar, widely considered the power behind the Alethi throne. His leading role in the war would seem reason enough, but the Assassin's master has much deeper motives.Brilliant but troubled Shallan strives along a parallel path. Despite being broken in ways she refuses to acknowledge, she bears a terrible burden: to somehow prevent the return of the legendary Voidbringers and the civilization-ending Desolation that will follow. The secrets she needs can be found at the Shattered Plains, but just arriving there proves more difficult than she could have imagined.Meanwhile, at the heart of the Shattered Plains, the Parshendi are making an epochal decision. Hard pressed by years of Alethi attacks, their numbers ever shrinking, they are convinced by their war leader, Eshonai, to risk everything on a desperate gamble with the very supernatural forces they once fled. The possible consequences for Parshendi and humans alike, indeed, for Roshar itself, are as dangerous as they are incalculable.`,
      link: 'https://www.goodreads.com/book/show/17332218'
    },
    {
      id: '68428',
      category: 'books',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617768316l/68428._SY475_.jpg',
      title: 'The Final Empire (Mistborn, #1)',
      rating: 4.46,
      ratingOutOf: 5,
      description: '\n' +
        '  What if the whole world were a dead, blasted wasteland?\n' +
        `MistbornFor a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear. For a thousand years the Lord Ruler, the "Sliver of Infinity," reigned with absolute power and ultimate terror, divinely invincible. Then, when hope was so long lost that not even its memory remained, a terribly scarred, heart-broken half-Skaa rediscovered it in the depths of the Lord Ruler's most hellish prison. Kelsier "snapped" and found in himself the powers of a Mistborn. A brilliant thief and natural leader, he turned his talents to the ultimate caper, with the Lord Ruler himself as the mark.Kelsier recruited the underworld's elite, the smartest and most trustworthy allomancers, each of whom shares one of his many powers, and all of whom relish a high-stakes challenge. Then Kelsier reveals his ultimate dream, not just the greatest heist in history, but the downfall of the divine despot.But even with the best criminal crew ever assembled, Kel's plan looks more like the ultimate long shot, until luck brings a ragged girl named Vin into his life. Like him, she's a half-Skaa orphan, but she's lived a much harsher life. Vin has learned to expect betrayal from everyone she meets. She will have to learn trust if Kel is to help her master powers of which she never dreamed.Brandon Sanderson, fantasy's newest master tale-spinner and author of the acclaimed debut Elantris, dares to turn a genre on its head by asking a simple question: What if the prophesied hero failed to defeat the Dark Lord? The answer will be found in the Misborn Trilogy, a saga of surprises that begins with the book in your hands. Fantasy will never be the same again.`,
      link: 'https://www.goodreads.com/book/show/68428'
    },
    {
      id: '2767052',
      category: 'books',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052._SY475_.jpg',
      title: 'The Hunger Games (The Hunger Games, #1)',
      rating: 4.32,
      ratingOutOf: 5,
      description: "Could you survive on your own in the wild, with every one out to make sure you don't live to see the morning?In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.",
      link: 'https://www.goodreads.com/book/show/2767052'
    }
  ]

  export default data