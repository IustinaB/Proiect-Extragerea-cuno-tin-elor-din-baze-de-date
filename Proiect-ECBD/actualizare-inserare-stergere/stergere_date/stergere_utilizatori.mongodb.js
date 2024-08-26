//1. stergere dupa nume
use('proiect');
db.utilizatori.deleteOne(
    {"nume_utilizator":"Laura Macovei"}
);

//2. stergere utilizator dupa poza de profil
poza=new BinData(0, "iVBORw0KGgoAAAANSUhEUgAAAAUA");
use('proiect');
db.utilizatori.deleteOne(
    { poza_profil: poza }
);

//3. stergere utilizator dupa numarul de carti imprumutate (<=2)
use('proiect');
db.utilizatori.deleteMany(
    { 
        $expr: 
        { 
            $lte: 
            [{ $size: "$carti_imprumutate" }, 2] 
        } 
    }
);

//4. stergere utilizatori dupa email
use('proiect');
db.utilizatori.deleteOne(
    {"email":"bia_petrisor@gmail.com"}
);

//5. stergere utilizatori care au mai mult de 3 preferinte
use('proiect');
db.utilizatori.deleteMany(
    { 
        $expr: 
        { 
            $gt: [{ $size: "$preferinte" }, 3] 
        } 
    }
);
