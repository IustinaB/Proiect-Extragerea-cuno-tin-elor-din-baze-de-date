//colectia carti 

use('proiect');
db.createCollection('carti');

use('proiect');
db.carti.insertMany([
    {
        "ISBN":"9786067761849",
        "titlu":"Baiatul cu pijamale in dungi",
        "autor":{
            "nume":"John Boyne",
            "biografie":"John Boyne este un scriitor irlandez, nascut la Dublin in 1971. A scris nenumarate carti si povestiri pentru copii. Cartea sa Baiatul cu pijamale in dungi s-a vandut in lumea intreaga in peste 2,5 milioane de exemplare si a fost ecranizata de curand de Miramax."
        },
        "editura":"David Fickling Books",
        "anul_aparitiei":2006,
        "genuri":["Fictiune istorica", "Drama istorica"],
        "pagini":224,
        "descriere":"Aceasta este povestea unui baietel german pe nume Bruno, al carui tata a primit o slujba foarte importanta, ceea ce inseamna ca toata familia trebuie sa se mute departe de oras, intr-un loc ciudat, unde casa lor e singura locuinta adevarata si unde in spatele unor garduri nesfarsite se afla sute, poate mii de oameni imbracati in pijamale in dungi. Bruno se straduieste sa inteleaga ce se intampla in jurul sau. Cititorul banuieste despre ce e vorba, dar bietul Bruno, nu. Porneste asadar sa exploreze imprejurimile si intrezareste un punct care devine o pata si pata, un baiat.",
        "disponibilitate":true
    },
    {
        "ISBN":"9786066096133",
        "titlu":"Hotul de carti",
        "autor":{
            "nume":"Markus Zusak",
            "biografie":"Markus Zusak (nascut la 23 iunie 1975) este un scriitor australian. El este foarte cunoscut pentru Hotul de carti si Mesagerul, doua romane care au devenit bestselleruri internationale. A castigat premiul Margaret A. Edwards în 2014."
        },
        "editura":"Picador",
        "anul_aparitiei":2005,
        "genuri":["Fictiune istorica"],
        "pagini":584,
        "descriere":"Este anul 1939. Germania nazista. Tara isi tine rasuflarea. Moartea nu a avut niciodata mai mult de lucru, si va deveni chiar mai ocupata. Liesel Meminger si fratele ei mai mic sunt dusi de catre mama lor sa locuiasca cu o familie sociala in afara orasului München. Tatal lui Liesel a fost dus departe sub soapta unui singur cuvant nefamiliar - Kommunist -, iar Liesel vede in ochii mamei sale teama unui destin similar. Pe parcursul calatoriei, Moartea ii face o vizita baietelului si o observa pe Liesel. Va fi prima dintre multe intalniri apropiate. Langa mormantul fratelui ei, viata lui Liesel se schimba atunci cand ea ridica un singur obiect, ascuns partial in zapada. Este Manualul Groparului, lasat acolo din greseala, si este prima ei carte furata. Astfel incepe o poveste despre dragostea de carti si de cuvinte, pe masura ce Liesel invata sa citeasca cu ajutorul tatalui ei adoptiv, care canta la acordeon. In curand, va fura carti de la incendierile de carti organizate de nazisti, din biblioteca sotiei primarului, si de oriunde le mai putea gasi.",
        "disponibilitate":true
    },
    {
        "ISBN":"9786063373107",
        "titlu":"O supradoza de moarte",
        "autor":{
            "nume":"Agatha Christie",
            "biografie":"Cunoscuta in intreaga lume drept Regina crimei, Agatha Christie este cel mai bine vandut autor al tuturor timpurilor, cartile sale fiind traduse in peste 100 de limbi si vandute in peste 2 miliarde de exemplare. A scris 80 de romane politiste si volume de povestiri, 19 piese de teatru (dintre care Cursa de soareci este cea mai longeviva din istorie) si sase romane publicate sub pseudonimul Mary Westmacott."
        },
        "editura":"Collins Crime Club",
        "anul_aparitiei":1940,
        "genuri":["Roman politist"],
        "pagini":288,
        "descriere":"In viata lui Hercule Poirot, nici macar o programare la dentist nu poate avea loc fara sa se intample o crima, si de data asta, cel ucis este insusi dentistul. Dar, in timp ce politia clasifica moartea acestuia drept sinucidere, Poirot stie mai bine care este adevarul, iar curand vor mai exista si alte victime. Sa fie aceste crime verigi ale lantului revolutionar menit sa rastoarne ordinea democratica din Marea Britanie in tulburele deceniu patru al secolului XX? Sa fie neatragatoarea si banala domnisoara Seale un geniu al crimei? Ca la un joc de carti, Poirot are sentimentul ca i se forteaza mana intr-o anume directie a investigatiei.",
        "disponibilitate":false
    },
    {
        "ISBN":"9786063311673",
        "titlu":"Privighetoarea",
        "autor":{
            "nume":"Kristin Hannah",
            "biografie":"Kristin Hannah (nascuta la 25 septembrie 1960) este o scriitoare americana. Cele mai notabile lucrari ale ei sunt Winter garden, Firefly Lane, The Great Alone, The Four Winds."
        },
        "editura":"Litera",
        "anul_aparitiei":2016,
        "genuri":["Roman de dragoste", "Fictiune istorica"],
        "pagini":467,
        "descriere":"Franta, 1939. in linistitul orasel Carriveau, Vianne Mauriac isi ia ramas-bun de la sotul ei, Antoine, intrucat acesta pleaca pe front. Ea nu crede ca nazistii vor invada Franta si totusi, soldatii isi fac aparitia, marsaluind in numar mare, in convoaie de camioane si tancuri, in avioane care innegresc vazduhul si bombardeaza tinuturile locuite de oameni nevinovati. Cand un capitan neamt isi stabileste cartierul general in casa lui Vianne, ea si fiica sa au doua optiuni: fie sa locuiasca sub acelasi acoperis cu dusmanul, fie sa piarda totul. Fara hrana si bani, deznadajduita in timp ce pericolul pandeste dupa fiecare colt, tot mai amenintator, Vianne e silita sa faca alegeri imposibil de indurat pentru a-si tine familia in viata.Sora sa, Isabelle, este o pustoaica rebela de optsprezece ani, aflata in cautarea unui tel in viata cu toata pasiunea necugetata specifica tineretii. Pe cand mii de parizieni se retrag din capitala, trecand prin ororile razboiului, ea il intalneste pe Gatan, un partizan care crede ca Franta poate lupta cu nazistii, si se indragosteste nebuneste de el. Dar cand el o tradeaza, Isabelle se alatura Rezistentei fara a se uita in urma, si, riscandu-si viata zilnic, o salveaza pe a altora.",
        "disponibilitate":false
    },
    {
        "ISBN":"9786067107173",
        "titlu":"Povestea slujitoarei",
        "autor":{
            "nume":"Margaret Atwood",
            "biografie":"Margaret Eleanor Atwood (n. 1939) este o bine-cunoscuta scriitoare canadiana, poeta, romanciera, eseista si critic literar, a carei operta a fost tradusa in peste patruzeci de limbi."
        },
        "editura":"ART",
        "anul_aparitiei":2020,
        "genuri":["Fictiune"],
        "pagini":464,
        "descriere":"Intr-o America dintr-un viitor deloc indepartat, instaurarea violenta a unui regim teocratic crestin si escaladarea abrupta a abuzurilor acestuia ajung sa priveze femeile de toate drepturile si libertatile. Ele sunt impartite in diverse categorii, avand roluri precise si sarcini stricte de indeplinit. Din cauza natalitatii scazute, exista o casta a Slujitoarelor carora le revine rolul de „utere umblatoare”, iar Offred face parte din prima lor generatie. Chinuita de o singuratate dureroasa, Offred se straduieste sa-si reprime fluxul amintirilor care provin de pe vremea cand avea o familie si o viata normala si incearca sa se resemneze pentru a supravietui in ingrozitoarea lume noua. Curand insa, descopera ca regulile sunt facute sa fie incalcate, si chiar de catre cei care le-au instaurat. Povestea Slujitoarei este o distopie sumbra si un roman rascolitor, considerat de multi capodopera scriitoarei canadiene.",
        "disponibilitate":true
    },
    {
        "ISBN":"9780451524935",
        "titlu":"1984",
        "autor":{
            "nume":"George Orwell",
            "biografie":"George Orwell (n. 25 iunie 1903 — d. 21 ianuarie 1950) a fost un romancier, eseist, nuvelist, critic literar si jurnalist britanic, comentator al radio BBC, editorialist si reporter. El a luptat ca voluntar in Razboiul Civil din Spania de partea comunistilor. A scris romane, eseuri si critica literara."
        },
        "editura":"Signet Classics",
        "anul_aparitiei":1950,
        "genuri":["Roman politic"],
        "pagini":326,
        "descriere":"Ascuns in maruntaiele Sectiei Documente din cadrul uriasului Minister al Adevarului, Winston Smith rescrie cu pricepere trecutul pentru a servi nevoilor Partidului. Totusi, el se revolta in sinea lui impotriva lumii totalitare in care traieste, ce pretinde ascultare absoluta si il controleaza prin intermediul tele-ecranelor, care transmit si receptioneaza totul simultan, si al ochiului atent al Fratelui cel Mare, conducatorul simbolic al Partidului. In dorinta sa de adevar si libertate, Smith incepe o relatie de dragoste secreta cu o colega de serviciu, Julia, dar curand descopera ca adevaratul pret al libertatii este tradarea.",
        "disponibilitate":true
    },
    {
        "ISBN":"9786068754468",
        "titlu":"Sa nu spui niciodata pentru totdeauna",
        "autor":{
            "nume":"Jennifer L. Armentrout",
            "biografie":"Jennifer Lynn Artmentrout (n. 11 iunie 1980) este o scriitoare americana de romantism contemporan si fantezie. Cateva din lucrarile ei s-au clasat pe lista celor mai bine vandute bestseller-uri The New York Times."
        },
        "editura":"Epica",
        "anul_aparitiei":2018,
        "genuri":["Romance"],
        "pagini":480,
        "descriere":"Ea a invatat ca tacerea era cea mai buna arma a sa. El a jurat ca o va proteja intotdeauna. Amandoi impartasesc un trecut ingrozitor, in urma caruia au creat o legatura indestructibila. Sau, cel putin, asa credeau ei. Pana cand drumurile lor s-au despartit brusc, in urma cu patru ani. Mallory si Rider incearca de ceva vreme sa-si depaseasca experientele infioratoare traite intr-un centru de plasament, sa-si cladeasca un viitor, sa uite. Dar chiar cand credeau ca au lasat trecutul in urma, Mallory si Rider se reintalnesc la liceu si descopera ca legatura puternica din copilarie n-a disparut... continua sa existe, la fel ca si ranile. In aceasta incercare de a se vindeca de trecut si de a-si depasi temerile si nesiguranta, amandoi descopera ca exista ceva ce-i poate ajuta: iubirea si prietenia. O poveste fermecatoare despre o tanara curajoasa care lupta pentru a-si exprima adevarul dintr-un refugiu al tacerii. Asculta vocea lui Mallory, o vei pastra in suflet PENTRU TOTDEAUNA!",
        "disponibilitate":false
    },
    {
        "ISBN":"9786303210315",
        "titlu":"Harry Potter si Piatra Filozofala",
        "autor":{
            "nume":"J. K. Rowling",
            "biografie":"J. K. Rowling (n. 31 iulie 1965) este o scriitoare si filantropa britanica. Ea a scris Harry Potter, o serie fantasy in 7 volume publicate intre 1997 si 2007. Seria s-a vandut in peste 600 de milioane de exemplare, a fost tradusa in 84 de limbi si a dat nastere unei francize media globale, inclusiv filme si jocuri video."
        },
        "editura":"Bloomsbury",
        "anul_aparitiei":1997,
        "genuri":["Fantezie", "Aventura"],
        "pagini":360,
        "descriere":"Viata lui Harry Potter se schimba pentru totdeauna in ziua aniversarii a unsprezece ani, cand uriasul Rubeus Hagrid ii aduce o scrisoare si cateva vesti uimitoare. Harry Potter nu-i vreun baiat obisnuit: e vrajitor. O aventura extraordinara sta sa inceapa...",
        "disponibilitate":true
    },
    {
        "ISBN":"9786303210322",
        "titlu":"Harry Potter si Camera Secretelor",
        "autor":{
            "nume":"J. K. Rowling",
            "biografie":"J. K. Rowling (n. 31 iulie 1965) este o scriitoare si filantropa britanica. Ea a scris Harry Potter, o serie fantasy in 7 volume publicate intre 1997 si 2007. Seria s-a vandut in peste 600 de milioane de exemplare, a fost tradusa in 84 de limbi si a dat nastere unei francize media globale, inclusiv filme si jocuri video."
        },
        "editura":"Bloomsbury",
        "anul_aparitiei":1998,
        "genuri":["Fantezie", "Aventura"],
        "pagini":400,
        "descriere":"Harry Potter are o vara plina: petrece o zi de nastere groaznica, primeste avertizari sinistre de la un elf de casa pe nume Dobby si fuge de la familia Dursley cu masina zburatoare a prietenului sau Ron. La Hogwarts incepe un nou an scolar, iar Harry aude niste soapte ciudate pe coridoarele goale. Apoi au loc mai multe atacuri misterioase - previziunile sumbre ale lui Dobby par sa se adevereasca...",
        "disponibilitate":true
    },
    {
        "ISBN":"9786060863908",
        "titlu":"Harry Potter si prizonierul din Azkaban",
        "autor":{
            "nume":"J. K. Rowling",
            "biografie":"J. K. Rowling (n. 31 iulie 1965) este o scriitoare si filantropa britanica. Ea a scris Harry Potter, o serie fantasy in 7 volume publicate intre 1997 si 2007. Seria s-a vandut in peste 600 de milioane de exemplare, a fost tradusa in 84 de limbi si a dat nastere unei francize media globale, inclusiv filme si jocuri video."
        },
        "editura":"Bloomsbury",
        "anul_aparitiei":1999,
        "genuri":["Fantezie", "Aventura","Fictiune"],
        "pagini":336,
        "descriere":"Cand Cavalerobuzul opreste brusc in fata lui, rasarind din intuneric, pentru Harry Potter incepe un nou an scolar care nu e nici pe departe unul obisnuit. Sirius Black, criminal in serie si discipol al Lordului Voldemort, a evadat de la Azkaban, inchisoarea vrajitorilor, si toata lumea spune ca ar fi pe urmele lui Harry. La prima ora de divinatie, profesoara Trelawney vede in frunzele de ceai din ceasca lui Harry un semn prevestitor de moarte... Dar mai infricosator decat orice e ca in jurul scolii patruleaza dementori, care pot sorbi suflete cu Sarutul lor mortal. ",
        "disponibilitate":false
    },
    {
        "ISBN":"9786060865988",
        "titlu":"Harry Potter si Pocalul de Foc",
        "autor":{
            "nume":"J. K. Rowling",
            "biografie":"J. K. Rowling (n. 31 iulie 1965) este o scriitoare si filantropa britanica. Ea a scris Harry Potter, o serie fantasy in 7 volume publicate intre 1997 si 2007. Seria s-a vandut in peste 600 de milioane de exemplare, a fost tradusa in 84 de limbi si a dat nastere unei francize media globale, inclusiv filme si jocuri video."
        },
        "editura":"Bloomsbury",
        "anul_aparitiei":2000,
        "genuri":["Fantezie", "Aventura","Fictiune"],
        "pagini":728,
        "descriere":"Scoala pentru Vrajitoare si Vrajitori Hogwarts se pregateste pentru Trimagiciada, o competitie la care au voie sa participe doar vrajitorii cu varsta de peste saptesprezece ani. Harry Potter are doar paisprezece ani, dar tot viseaza ca va castiga cumva Trimagiciada. Apoi, de Halloween, cand Pocalul de Foc hotaraste candidatii, Harry e uluit sa vada ca numele lui se gaseste printre cele alese de cupa magica. Va infrunta probe care sfideaza moartea, dragoni si vrajitori intunecati, dar cu ajutorul lui Ron si Hermione, s-ar putea s-o scoata la capat…",
        "disponibilitate":false
    },
    {
        "ISBN":"9786060865469",
        "titlu":"Harry Potter si Ordinul Phoenix",
        "autor":{
            "nume":"J. K. Rowling",
            "biografie":"J. K. Rowling (n. 31 iulie 1965) este o scriitoare si filantropa britanica. Ea a scris Harry Potter, o serie fantasy in 7 volume publicate intre 1997 si 2007. Seria s-a vandut in peste 600 de milioane de exemplare, a fost tradusa in 84 de limbi si a dat nastere unei francize media globale, inclusiv filme si jocuri video."
        },
        "editura":"Bloomsbury",
        "anul_aparitiei":2003,
        "genuri":["Fantezie", "Fictiune"],
        "pagini":990,
        "descriere":"La Hogwarts, Harry Potter nu invata doar sa foloseasca bagheta sau sa zboare pe matura: descopera ca binele ascunde o latura obscura si ca in rau salasluieste o farama de bine. Il impresioneaza pe Dumbledore, ii face fata lui Snape si ii rezista in mod miraculos lui Voldemort. Iar alaturi de Hermione, Ron si Hagrid, reuseste sa aduca lumina acolo unde s-a instapanit cel mai adanc intuneric.",
        "disponibilitate":true
    },
    {
        "ISBN":"9786066098656",
        "titlu":"Mesagerul",
        "autor":{
            "nume":"Markus Zusak",
            "biografie":"Markus Zusak (nascut la 23 iunie 1975) este un scriitor australian. El este foarte cunoscut pentru Hotul de carti si Mesagerul, doua romane care au devenit bestselleruri internationale. A castigat premiul Margaret A. Edwards în 2014."
        },
        "editura":"Picador",
        "anul_aparitiei":2002,
        "genuri":["Fictiune"],
        "pagini":400,
        "descriere":"Faceti cunostinta cu Ed Kennedy - sofer de taxi, jucator prost de carti si nepriceput la sex. Locuieste intr-o cocioaba, imparte cafeaua cu cainele sau, Portarul, si e ingrozitor de indragostit de Audrey. Viata lui este marcata de o rutina pasnica si de incompetent - asta pana cand nimereste din greseala in plin jaf bancar. Atunci apare si sansa lui. Atunci Ed devine mesagerul. Alege sa se implice, isi face traseul prin oras, ajutand sau ranind (cand e cazul) pana cand mai ramane o singura intrebare. Cine se afla in spatele misiunii lui Ed?",
        "disponibilitate":true
    }
]);
