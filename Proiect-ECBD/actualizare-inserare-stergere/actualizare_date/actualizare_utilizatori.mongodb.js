//1. actualizare nume
use('proiect');
db.utilizatori.updateOne(
    {"id_utilizator":114},
    {$set:{"nume_utilizator":"David Andrei Puscasu"}}
);

//2. actualizare email
use('proiect');
db.utilizatori.updateOne(
    {"id_utilizator":111},
    {$set:{"email":"vasileandrei.12@gmail.com"}}
);

//3. actualizare nota acordata din carti_imprumutate (modificare vector de subdocumente)
use('proiect');
db.utilizatori.updateOne(
    {"id_utilizator":114, "carti_imprumutate.id_carte":"9780451524935"},
    {$set:{"carti_imprumutate.$.nota_acordata":10}}
);

//4. actualizare poza de profil
use('proiect');
db.utilizatori.updateOne(
    {"id_utilizator":110},
    {$set:{"poza_profil":new BinData(0, "Z3RTF15YABniooyblABBAHElQI12P4")}}
);

//5. actualizare preferinte pentru utilizatorii cu id-ul mai mic sau egal cu 111
use('proiect');
db.utilizatori.updateMany(
    {"id_utilizator":{$lte:111}},
    { $addToSet: { "preferinte": { $each: ["Fictiune", "Drama istorica", "Fantezie", "Romance"] } } }
);