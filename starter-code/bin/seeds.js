const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

mongoose.connect("mongodb://localhost/celebrity-lab", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



/*
const celebrities = [{
        name: "Tom Cruise",
        occupation: "actor",
        catchphrase: "Mission impossible."
    },
    {
        name: "Hugh Laurie",
        occupation: "comedian",
        catchphrase: "It's lupus."
    },
    {
        name: "Matthew Mcconaughey",
        occupation: "actor",
        catchphrase: "Alright, alright, alright."
    }
];


Celebrity.create(celebrities).then(data => {
    console.log(`Success! Imported ${data.length} celebrities!`);
    mongoose.connection.close();
});

*/

const movies = [{
        title: "mission impossible",
        genre: "action",
        plot: "something happens, Tom Cruise runs"
    },
    {
        title: "101 Dalmations",
        genre: "childres",
        plot: "Cruella wants a new jacket"
    },
    {
        title: "Wolf of Wall Street",
        genre: "biographie",
        plot: "Drugs and money happen."
    }
]

Movie.create(movies).then(data => {
    console.log(`Success! Imported ${data.length} movies!`);
    mongoose.connection.close();
});