//1. stergere imprumut in functie de utilizator si carte
use('proiect');
db.imprumuturi.deleteOne(
    {"id_utilizator": 110, "id_carte": 1}
);

//2. stergerea tuturor imprumuturilor realizate de un utilizator
use('proiect');
db.imprumuturi.deleteMany(
    {"id_utilizator": 111}
);

//3. stergerea imprumuturilor nereturnate
use('proiect');
db.imprumuturi.deleteMany(
    {"stare": "nereturnat"}
);

//4. stergerea imprumuturilor returnate la timp
use('proiect');
db.imprumuturi.deleteMany(
    {
        $expr: {
            $lte: ["$data_returnare", "$data_scadenta"]
        }
    }
);

//5. stergere imprumuturi returnate dupa data scadentei
use('proiect');
db.imprumuturi.find({
    $expr: {
        $gt: ["$data_returnare", "$data_scadenta"]
    }
});

