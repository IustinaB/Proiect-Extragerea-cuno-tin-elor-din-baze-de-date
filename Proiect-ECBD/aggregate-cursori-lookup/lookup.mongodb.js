//cartile si informatiile despre imprumuturi
use('proiect');
db.carti.aggregate([
    {
      $lookup: {
        from: "imprumuturi",
        localField: "ISBN",
        foreignField: "id_carte",
        as: "imprumuturi"
      }
    },
    {
        $project:{
            _id:0,
            titlu:1,
            imprumuturi:1
        }
    }
]);
  
//utilizatorul si titlul cartilor pe care le-a citit
use('proiect');
db.utilizatori.aggregate([
    {
        $lookup:{
            from:"carti",
            localField:"carti_imprumutate.id_carte",
            foreignField:"ISBN",
            as:"carti_citite"
        }
    },
    {
        $project:{
            _id:0,
            nume_utilizator:1,
            carti_citite: "$carti_citite.titlu"
        }
    }
]);

//cartile si utilizatorii care le-au imprumutat
use('proiect');
db.carti.aggregate([
  {
    $lookup: { //legatura intre carti si imprumuturi
      from: "imprumuturi",
      localField: "ISBN",
      foreignField: "id_carte",
      as: "imprumuturi"
    }
  },
  {
    $lookup: { //merg in utilizatori luang id-ul din imprumuturi
      from: "utilizatori",
      localField: "imprumuturi.id_utilizator",
      foreignField: "id_utilizator",
      as: "utilizatori"
    }
  },
  {
    $project: {
      _id: 0,
      titlu: 1,
      utilizatori: "$utilizatori.nume_utilizator" 
    }
  }
]);
