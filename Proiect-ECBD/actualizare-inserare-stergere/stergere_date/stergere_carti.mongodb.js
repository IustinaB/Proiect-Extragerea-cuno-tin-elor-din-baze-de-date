//1. stergere carte dupa titlu
use('proiect');
db.carti.deleteOne(
    {"titlu":"Privighetoarea"}
);
use('proiect');
db.carti.find();

//2. stergere carti care au mai putin de 400 de pagini
use('proiect');
db.carti.deleteMany(
    {"pagini":{$lte:400}}
);

//3. stergere carte dupa id
use('proiect');
db.carti.deleteOne(
    {"ISBN":"9786060863908"}
);

//4. stergere carte de la o anumita editura cu un anume id
use('proiect');
db.carti.deleteOne(
    {"editura":"Bloomsbury", "ISBN":"9786060865988"}
);

//5. stergerea cartilor indisponibile
use('proiect');
db.carti.deleteOne(
    {"disponibilitate":false}
);

//6. stergere carti de un anumit gen
use('proiect');
db.carti.deleteMany(
    {"genuri": "Fictiune"}
);