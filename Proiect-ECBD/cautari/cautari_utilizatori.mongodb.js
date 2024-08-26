//1.cautare dupa nume
use('proiect');
db.utilizatori.find(
    {"nume_utilizator":"Ivona Andries"}
);

//2. cautare dupa email
use('proiect');
db.utilizatori.find(
    {"email":"bia_petrisor@gmail.com"}
);

//3. cautare dupa data inscrierii mai mica de o anume data
use('proiect');
db.utilizatori.find(
    {"data_inscrierii":{$lt:new Date("2023-05-05")}},
    {
        "_id":0,
        "nume_utilizator":1,
        "data_inscrierii":1
    }
);

//4. cautare dupa o preferinta
use('proiect');
db.utilizatori.find(
    {"preferinte":"Fictiune"},
    {
        "_id":0,
        "nume_utilizator":1,
        "preferinte":1
    }
);

//5. cautare dupa preferinte (sa fie ambele)
use('proiect');
db.utilizatori.find(
    {"preferinte": { $all: ["Fictiune istorica", "Roman politic"] }},
    {
        "_id":0,
        "nume_utilizator":1,
        "preferinte":1
    }
);

//6. cautare dupa cel putin 2 din preferinte
use('proiect');
db.utilizatori.find(
    {"preferinte": { $in: ["Roman politic", "Fictiune istorica"] }},
    {
        "_id":0,
        "nume_utilizator":1,
        "preferinte":1
    }
);


//7. cautare utilizatori dupa anul in care s-au inscris la biblioteca
use('proiect');
db.utilizatori.find(
    {},
    {
        "_id":0,
        "nume_utilizator":1,
        "data_inscrierii":1
    }
).sort({"data_inscrierii":1});


