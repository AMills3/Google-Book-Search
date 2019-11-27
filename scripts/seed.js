let mongoose = require("mongoose");
let Book = require("../models/book");

// Connecting to database

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        family: 4
    }
);

let bookSeed = [
    {
        author: ["Suzanne Collins"],
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games"
    },
    {
        author: ["Steve McMichael"],
        description: "Former Bears star Steve McMichael takes a front row seat in this collection of stories. Readers get an opportunity to relive the glory years of a charter NFL franchise—as seen through the eyes of a legendary player. McMichael covers it all, from training camp misadventures in Lake Forest, Illinois, and Platteville, Wisconsin, and Ditka’s locker room tirades to nights on the town with teammates, and behind-the-scenes glimpses of historic moments. From first kick-off to overtime play, Amazing Tales from the Chicago Bears Sideline covers some of the franchise’s greatest moments, and is a must-have for any true Bears fan.",
        image: "https://books.google.com/books/content/images/frontcover/8zGCDwAAQBAJ?fife=w200-h300",
        link: "https://play.google.com/store/books/details/Steve_McMichael_Amazing_Tales_from_the_Chicago_Bea?id=8zGCDwAAQBAJ",
        title: "Amazing Tales from the Chicago Bears Sideline: A Collection of the Greatest Bears Stories Ever Told"
      },
      {
        author: ["Louis Sachar"],
        description: "Stanley Yelnats is under a curse. A curse that began with his no-good-dirty-rotten-pig-stealing-great-great-grandfather and has since followed generations of Yelnatses. Now Stanley has been unjustly sent to a boys’ detention center, Camp Green Lake, where the boys build character by spending all day, every day digging holes exactly five feet wide and five feet deep. There is no lake at Camp Green Lake. But there are an awful lot of holes.",
        image: "https://books.google.com/books/content/images/frontcover/U_zINMa9cAAC?fife=w200-h300",
        link: "https://play.google.com/store/books/details/Louis_Sachar_Holes?id=U_zINMa9cAAC",
        title: "Holes"
    },
    {
        author: ["Fred L. Johnson"],
        description: "In 1996 Tupac Shakur, one of the most talented artists of his time, was murdered by an unknown gunman. Fred L. Johnson and Tayannah Lee McQuillar examine the theories surrounding his death and the story of Tupac's lost legacy in this definitive biography. For millions, Shakur gave voice to their stories, but there was also another side to him, revealed as his life spun out of control, as the whispered warnings from friends went unheeded and the denunciations of critics grew louder. Disturbingly, he sang and wrote about his impending death. When it came, it brought the music industry to its knees and ended an era when American rappers were leaders in using their art to speak the truth to corporate, government, and judicial power.",
        image: "https://books.google.com/books/content/images/frontcover/IjsycSVeoh8C?fife=w200-h300",
        link: "https://play.google.com/store/books/details/Tayannah_Lee_McQuillar_Tupac_Shakur?id=IjsycSVeoh8C",
        title: "Tupac Shakur: The Life and Times of an American Icon"
    }   
];

async function seed() {
    await mongoose
    .connect(
        MONGODB_URI,
        options
    )
    .then(() => {
        console.log("You are connected.");
    })
    .catch(err => {
        console.log("Error, not connected.");
    });

    for (let book of bookSeed) {
        let { _id: bookId } = await new Book({
            title: book.title,
            author: book.author,
            link: book.link,
            description: book.description,
            image: book.image
        }).save();
    }

    mongoose.disconnect();
    console.info("Done.");
};

seed();