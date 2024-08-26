//1. afisare titluri grupate pe autori
use('proiect');
db.carti.aggregate([
    { 
        $group: { 
            _id: "$autor.nume", 
            carti_scrise: { $push: "$titlu" } 
        } 
    }
]);

//2. cate carti a scris un autor, afisat in ordine descrescatoare
use('proiect');
db.carti.aggregate(
    {
        $group:{
            _id:"$autor.nume",
            numar_carti:{$sum:1}
        }
    },
    {
        $sort:{numar_carti:-1}
    }
);

//3. listare primele 5 carti disponibile, dupa anul aparitiei
use('proiect');
db.carti.aggregate([
    {
      $match: { "disponibilitate": true }
    },
    {
      $sort: { "anul_aparitiei": -1 }
    },
    {
      $limit: 5
    }
]);

//4. numarul total de pagini pentru fiecare editura
use('proiect');
db.carti.aggregate([
    {
      $group: {
        _id: "$editura",
        total_pagini: { $sum: "$pagini" }
      }
    },
    {
      $project: {
        editura: "$_id",
        total_pagini: 1,
        _id: 0
      }
    },
    {
      $sort: { total_pagini: -1 }
    }
]);

//5. cate carti sunt din fiecare gen disponibile si indisponibile
use('proiect');
db.carti.aggregate([
  {
    $unwind: "$genuri"
  },
  {
    $group: {
      _id: "$genuri",
      total_carti: { $sum: 1 },
      disponibile: { $sum: { $cond: ["$disponibilitate", 1, 0] } },
      indisponibile: { $sum: { $cond: ["$disponibilitate", 0, 1] } }
    }
  },
  {
    $project: {
      gen: "$_id",
      total_carti: 1,
      disponibile: 1,
      indisponibile: 1,
      _id: 0
    }
  }
]);

//6. numarul de imprumuturi facut de fiecare utilizator, descrescator
use('proiect');
db.imprumuturi.aggregate([
    {
      $group: {
        _id: "$id_utilizator",
        total_imprumuturi: { $sum: 1 }
      }
    },
    {
        $project:{
            cod_utilizator:"$_id",
            total_imprumuturi:1,
            _id:0
        }
    },
    {
      $sort: { total_imprumuturi: -1 }
    }
]);  

//7. de cate ori a fost imprumutata fiecare carte
use('proiect');
db.imprumuturi.aggregate([
    {
      $group: {
        _id: "$id_carte",
        total_imprumuturi: { $sum: 1 }
      }
    },
    {
        $project:{
            id_carte:"$_id",
            total_imprumuturi:1,
            _id:0
        }
    },
    {
      $sort: { total_imprumuturi: -1 }
    }
]); 

//8. numarul de imprumuturi din fiecare an
use('proiect');
db.imprumuturi.aggregate([
    {
      $group: {
        _id: { $year: "$data_imprumut" },
        total_imprumuturi: { $sum: 1 }
      }
    },
    {
      $sort: { "_id": 1 }
    }
]);

//9. numarul de utilizatori inscrisi in fiecare an
use('proiect');
db.utilizatori.aggregate([
    {
      $group: {
        _id: { $year: "$data_inscrierii" },
        total_inscrieri: { $sum: 1 }
      }
    },
    {
        $project:{
            data_inscriere:"$_id",
            total_inscrieri:1,
            _id:0
        }
    },
    {
      $sort: { "_id": 1 }
    }
]);

//10. numarul de utilizatori dupa preferinte
use('proiect');
db.utilizatori.aggregate([
    {
      $unwind: "$preferinte"
    },
    {
      $group: {
        _id: "$preferinte",
        total_utilizatori: { $sum: 1 }
      }
    },
    {
        $project:{
            preferinta:"$_id",
            total_utilizatori:1,
            _id:0
        }
    },
    {
      $sort: { total_utilizatori: -1 }
    }
]);

//11. primele 2 genuri de carti preferate de utilizatori
use('proiect');
db.utilizatori.aggregate([
    {
      $unwind: "$preferinte"
    },
    {
      $group: {
        _id: "$preferinte",
        total_utilizatori: { $sum: 1 }
      }
    },
    {
        $project:{
            preferinta:"$_id",
            total_utilizatori:1,
            _id:0
        }
    },
    {
      $sort: { total_utilizatori: -1 }
    },
    {
        $limit:2
    }
]);

//12. primele 5 carti care au primit cele mai mari note
use('proiect');
db.utilizatori.aggregate([
    {
      $unwind: "$carti_imprumutate"
    },
    {
      $match:{
        "carti_imprumutate.nota_acordata":{$ne:null}
      }
    },
    {
      $sort: { "carti_imprumutate.nota_acordata": -1 }
    },
    {
        $limit:5
    },
    {
        $project:{
            _id:0,
            "nume_utilizator":1,
            "id_carte":"$carti_imprumutate.id_carte",
            "nota_acordata":"$carti_imprumutate.nota_acordata"
        }
    }
]);
