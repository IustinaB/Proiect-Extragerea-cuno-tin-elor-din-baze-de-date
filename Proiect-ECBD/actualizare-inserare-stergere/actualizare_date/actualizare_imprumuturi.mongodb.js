//1. actualizare data scadenta
use('proiect');
db.imprumuturi.updateOne(
    {"id_utilizator":113, "id_carte":"9786063311673"},
    {$set:{"data_scadenta":new Date("2024-05-30")}}
);

//2. actualizare data returnare
use('proiect');
db.imprumuturi.updateOne(
    {"id_utilizator":114, "id_carte":"9786068754468"},
    {$set:{"data_returnare":new Date("2024-05-21")}}
);

//3. adaugare camp care sa instiinteze ne/returnarea in functie de data_returnare 
use('proiect');
db.imprumuturi.updateMany(
    { "data_returnare": null },
    { $set: { "stare": "nereturnat" } }
);
  

