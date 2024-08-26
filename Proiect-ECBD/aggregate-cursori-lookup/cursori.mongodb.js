//1. afisare carti in ordine alfabetica
var cursorCarti = db.carti.find().sort({ titlu: 1 });  
while (cursorCarti.hasNext()) {
  var carte = cursorCarti.next();
  print(carte.titlu);
}

//2. afisare pentru fiecare carte titlu, autor, numar de pagini
var cursorCarti = db.carti.find();
while (cursorCarti.hasNext()) {
    var carte = cursorCarti.next();
    print("Titlu carte: "+carte.titlu);
    print("Autor carte: "+carte.autor.nume);
    print("Numar de pagini: "+carte.pagini);
  }

 
  