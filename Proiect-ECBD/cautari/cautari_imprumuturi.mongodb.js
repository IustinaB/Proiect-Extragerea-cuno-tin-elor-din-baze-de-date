//1. cautare carti nereturnate
use('proiect');
db.imprumuturi.find(
    {"stare":"nereturnat"}
);
//sau
use('proiect');
db.imprumuturi.find(
    {"data_returnare":null}
);

//2. cautare carti returnate inainte de o anumita data
use('proiect');
db.imprumuturi.find(
    {"data_returnare":{$lt:new Date("2024-01-01")}},
    {
        "_id":0,
        "id_carte":1,
        "data_returnare":1
    }
);

//3. cautare carti returnate
use('proiect');
db.imprumuturi.find(
    {"data_returnare": { $ne: null }}
);

//4. cautare imprumuturi dupa id ul cartii
use('proiect');
db.imprumuturi.find(
    {"id_carte":"9786066096133"},
    {
        "_id":0,
        "id_carte":1,
        "data_imprumut":1,
        "data_returnare":1
    }
);

//5. cautare carti imprumutate de un singur utilizator
use('proiect');
db.imprumuturi.find(
    {"id_utilizator":114},
    {
        "_id":0,
        "id_carte":1
    }
);

//6. cautare imprumuturi dintr-un interval de timp
use('proiect');
db.imprumuturi.find(
    {"data_imprumut": { "$gte": new Date("2024-01-01"), "$lt": new Date("2024-06-01") }},
    {"_id":0,
    "id_carte":1,
    "data_imprumut":1
    }
);

//7. cautare carti care nu au fost returnate la timp
use('proiect');
db.imprumuturi.find({
    $expr: {
        $gt: ["$data_returnare", "$data_scadenta"]
    }
});

//8. cautare imprumuturi dupa id ul cartii si dupa cum au fost returnare
use('proiect');
db.imprumuturi.find(
    {"id_carte":"9780451524935"},
    {
        "_id":0,
        "id_carte":1,
        "data_returnare":1
    }
).sort({"data_returnare":1});

//9. cautare carti pt un utilizator in ordinea in care au fost imprumutate
use('proiect');
db.imprumuturi.find(
    {"id_utilizator":113},
    {
        "_id":0,
        "id_carte":1,
        "data_imprumut":1
    }
).sort({"data_imprumut":1});