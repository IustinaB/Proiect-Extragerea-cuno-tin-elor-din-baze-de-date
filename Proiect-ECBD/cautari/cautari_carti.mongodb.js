//1. cautare carte dupa titlu
use('proiect');
db.carti.find(
    {"titlu":"Hotul de carti"},
    {"_id":0}
);

//2. cautare carte dupa autor
use('proiect');
db.carti.find(
    {"autor.nume":"J. K. Rowling"},
    {
        "_id":0,
        "autor.nume":1,
        "titlu":1
    }
);

//3. cautare carti cu mai mult de 500 de pagini
use('proiect');
db.carti.find(
    {"pagini":{$gt:500}},
    {
        "_id":0,
        "titlu":1,
        "pagini":1
    }
);

//4. cautare carti cu anul aparitiei mai mic de 2000
use('proiect');
db.carti.find(
    {"anul_aparitiei":{$lt:2000}},
    {
        "_id":0,
        "titlu":1,
        "anul_aparitiei":1
    }
);

//5. cautare carti cu un anumit gen
use('proiect');
db.carti.find(
    {"genuri":"Fantezie"},
    {
        "_id":0,
        "titlu":1,
        "genuri":1
    }
);

//6. cautare carti care se incadreaza in aceste genuri
use('proiect');
db.carti.find(
    {"genuri":{ $in: ["Aventura", "Fictiune"] }},
    {
        "_id":0,
        "titlu":1,
        "genuri":1
    }
);

//7. cautare carti indisponibile
use('proiect');
db.carti.find(
    {"disponibilitate":false},
    {
        "_id":0,
        "titlu":1,
        "disponibilitate":1
    }
);

//8. cautare carti in ordinea descrescatoare a paginilor
use('proiect');
db.carti.find(
    {},
    {
        "_id":0,
        "titlu":1,
        "pagini":1
    }
).sort({"pagini":-1});

//9. cautare carti dupa anul aparitiei, crescator
use('proiect');
db.carti.find(
    {},
    {
        "_id":0,
        "titlu":1,
        "anul_aparitiei":1
    }
).sort({"anul_aparitiei":1});

//10. cautare descrierea unei carti, dupa titlu
use('proiect');
db.carti.find(
    {"titlu":"Harry Potter si Pocalul de Foc"},
    {
        "_id":0,
        "titlu":1,
        "descriere":1
    }
);