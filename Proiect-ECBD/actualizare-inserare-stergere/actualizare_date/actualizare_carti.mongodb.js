
//1. actualizare titlu
use('proiect');
db.carti.updateOne(
    {"ISBN":"9786060863908"},
    {$set:{"titlu":"Harry Potter si Prizonierul din Azkaban"}}
);

//2. actualizare biografie pentru o carte
use('proiect');
db.carti.updateOne(
    {"ISBN":"9780451524935"},
    {$set:{"autor.biografie":"George Orwell (n. 25 iunie 1903 — d. 21 ianuarie 1950) a fost un romancier, eseist, nuvelist, critic literar si jurnalist britanic, comentator al radio BBC, editorialist si reporter. A scris romane, eseuri si critica literara."}}
);

//3. actualizare numar de pagini pentru o carte
use('proiect');
db.carti.updateOne(
    {"ISBN":"9786303210315"},
    {$inc:{"pagini":10}}
);

//4. actualizare disponibilitatea unei carti dupa id
use('proiect');
db.carti.updateOne(
    {"ISBN":"9786067761849"},
    {$set:{"disponibilitate":false}}
);

//5. actualizare biografie pentru mai multe carti care au acelasi autor
use('proiect');
db.carti.updateMany(
    {"autor.nume":"J. K. Rowling"},
    {$set:{"autor.biografie":"J. K. Rowling (n. 31 iulie 1965) este o scriitoare si filantropa britanica. Ea a scris Harry Potter, o serie fantasy in 7 volume publicate intre 1997 si 2007. Seria s-a vandut in peste 600 de milioane de exemplare, fiind tradusa in 84 de limbi."}}
);

//6. actualizare nume autor dupa titlul cartii
use('proiect');
db.carti.updateOne(
    {"titlu":"Hotul de carti"},
    {$set:{"autor.nume":"Markus Zusak"}}
);

