export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "cta"; text: string; href: string; label: string };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  dateISO: string;
  category: string;
  readingTime: number;
  content: ContentBlock[];
}

const posts: BlogPost[] = [
  {
    slug: "sta-uraditi-kada-se-auto-pokvari-na-putu",
    title: "Šta uraditi kada vam se auto pokvari na putu – korak po korak",
    metaTitle:
      "Šta uraditi kada se auto pokvari na putu | Šlep služba Beograd – Živković",
    metaDescription:
      "Auto vam se pokvario na putu? Saznajte tačno šta da uradite – od osiguranja mesta do pozivanja šlep službe Beograd. Praktičan vodič korak po korak.",
    excerpt:
      "Kvar na putu uvek dolazi u najgorem mogućem trenutku. Evo tačno šta da uradite – od prvih sekundi do dolaska šlep službe i odlaska u servis.",
    date: "12. mart 2025.",
    dateISO: "2025-03-12",
    category: "Šlep služba",
    readingTime: 5,
    content: [
      {
        type: "p",
        text: "Kvar automobila na putu je jedna od najstresočnijih situacija za svakog vozača. Bez obzira da li ste na autoputu, na prometnoj gradskoj ulici ili na nekoj sporednoj seoskoj cesti, ista pravila važe: sačuvajte hladnokrvnost i postupajte korak po korak. U ovom vodiču objasnićemo tačno šta da radite od trenutka kada primetite problem pa sve do momenta kada vaše vozilo stigne u servis.",
      },
      {
        type: "h2",
        text: "1. Odmah bezbedno zaustavite vozilo",
      },
      {
        type: "p",
        text: "Čim primetite simptome kvara – neobičan zvuk, treptanje lampice, gubitak upravljivosti ili bilo šta što deluje nenormalno – postepeno usporite i skrenite na desnu stranu puta ili na parkiralište. Nikada naglo ne kočite niti secite saobraćaj. Cilj je da se zaustavite na mestu koje je što bezbednije za vas i za ostale učesnike u saobraćaju.",
      },
      {
        type: "h2",
        text: "2. Uključite sva četiri smernika",
      },
      {
        type: "p",
        text: "Čim stanete, odmah uključite sva četiri smernika (hazard). To je signal ostalim vozačima da je vaše vozilo u kvaru i da treba da ga zaobiđu. Ovo je obavezno bez obzira na doba dana, ali posebno je važno noću i po magli ili kiši.",
      },
      {
        type: "h2",
        text: "3. Izađite iz vozila i postavite trougao",
      },
      {
        type: "p",
        text: "Ako ste na putu gde vozila prolaze brzo, izađite na stranu dalje od saobraćaja. Otvorite gepek i postavite reflektujući trougao iza vozila – na autoputu ga postavite najmanje 100 metara iza auta, a na ostalim putevima najmanje 30 metara. Noću ili po lošem vremenu, nadodajte reflektujući prsluk ako ga imate.",
      },
      {
        type: "tip",
        text: "Obavezan sadržaj u autu: reflektujući trougao, reflektujući prsluk i osnovna kutija prve pomoći. Proverite da li ih imate pre nego što krenete na duži put.",
      },
      {
        type: "h2",
        text: "4. Procenite situaciju – da li možete sami da rešite problem?",
      },
      {
        type: "p",
        text: "Neke kvarove je moguće rešiti na licu mesta. Ako imate praznu gumu i rezervnu gumu, alat i znanje, možete da izvršite zamenu. Ako je problem prazan akumulator i imate kablove za paljenje, možete tražiti pomoć od drugog vozača. Međutim, za sve ostalo – motor koji se pregrejao, problem sa menjačem, slomljeni poluosovinski zglob ili bilo koji električni kvar – ne pokušavajte sami da popravljate vozilo na putu.",
      },
      {
        type: "h2",
        text: "5. Pozovite šlep službu",
      },
      {
        type: "p",
        text: "Kada ne možete sami da rešite kvar, vreme je da pozovete šlep službu. U Beogradu i okolini, Živković šlep služba je dostupna 0-24, svakog dana u godini. Kada zovete, recite: tačnu lokaciju (ulica i broj, ili naziv mesta na putu), marku i model vozila, i kratki opis problema. Što preciznije opišete situaciju, brže ćemo doći i biti bolje pripremljeni.",
      },
      {
        type: "cta",
        text: "Pokvario vam se auto? Pozovite odmah.",
        href: "tel:+381655703879",
        label: "065 570 3879 – Dostupni 0-24",
      },
      {
        type: "h2",
        text: "6. Sačekajte na bezbednom mestu",
      },
      {
        type: "p",
        text: "Dok čekate šlep službu, ne sedite u vozilu ako ste na prometnom putu – ostanite iza zaštitnih ograda ili na bezbednoj udaljenosti od saobraćajnice. Ako ste unutar vozila (loše vreme, noć), zakopčajte sigurnosni pojas i ostanite pažljivi.",
      },
      {
        type: "h2",
        text: "7. Šlep direktno u servis – jednosmerna usluga Živković",
      },
      {
        type: "p",
        text: "Kod nas ne morate da brinete o tome gde će vaše vozilo biti odveženo. Šlepamo vaš auto direktno u naš autoservis u Beogradu, gde majstori odmah pristupaju dijagnostici i popravci. Ne morate da tražite poseban servis, ne morate da koordinirate između dve firme – jedna firma rešava sve, od mesta kvara do završenog popravka.",
      },
      {
        type: "h2",
        text: "Rezime: Šta uraditi kada se auto pokvari",
      },
      {
        type: "list",
        items: [
          "Postepeno zaustavite vozilo na bezbednom mestu",
          "Uključite sva četiri smernika",
          "Postavite reflektujući trougao",
          "Proverite da li možete sami rešiti problem",
          "Pozovite šlep službu – Živković 065 570 3879",
          "Sačekajte na bezbednoj udaljenosti od saobraćaja",
        ],
      },
      {
        type: "p",
        text: "Kvar na putu nije kraj sveta – uz pravu reakciju i pouzdanu šlep službu u Beogradu, vaše vozilo će brzo biti u servisu i vraćeno u ispravno stanje.",
      },
    ],
  },
  {
    slug: "klima-u-autu-servis-punjenje-freona-beograd",
    title: "Klima u autu – kada je vreme za servis i punjenje freona",
    metaTitle:
      "Klima servis automobila Beograd – Kada napuniti freon | Živković",
    metaDescription:
      "Klima u autu ne hladi dovoljno? Saznajte kada je vreme za servis klime, kako funkcioniše punjenje freona i zašto je godišnji pregled važan. Klima servis Beograd.",
    excerpt:
      "Klima koja ne hladi, čudan miris ili buka iz sistema – sve su to znaci da je vreme za servis. Saznajte sve o servisiranju klime pre letnje sezone.",
    date: "5. mart 2025.",
    dateISO: "2025-03-05",
    category: "Klima servis",
    readingTime: 6,
    content: [
      {
        type: "p",
        text: "Klimatizacija automobila je sistem koji se koristi intenzivno tokom letnjih meseci, ali i u prelaznom periodu. Kao i svaki mehanički sistem, i klima zahteva redovno održavanje. Mnogi vozači zanemaruju servis klime sve dok sistem potpuno ne prestane da funkcioniše – a tada je popravka skuplja i duže traje. U ovom tekstu saznajte sve što treba da znate o servisiranju auto-klime u Beogradu.",
      },
      {
        type: "h2",
        text: "Kako funkcioniše klima u automobilu?",
      },
      {
        type: "p",
        text: "Klimatizacioni sistem automobila radi na principu rashladnog kruga: kompresor komprimuje rashladni gas (freon), koji zatim prolazi kroz kondenzator i isparivač, preuzimajući toplotu iz kabine i ispuštajući je napolje. Kada nivo freona padne ispod minimuma – bilo zbog prirodnog gubitka ili zbog curenja – sistem prestaje efikasno da hladi.",
      },
      {
        type: "h2",
        text: "5 znakova da klima treba servis",
      },
      {
        type: "list",
        items: [
          "Hlađenje je znatno slabije nego prošle godine",
          "Iz ventilacionih otvora dolazi neprijatan ili buđav miris",
          "Čujete neobičan zvuk (škripa, pucketanje) kada uključite klimu",
          "Stakla se sporo razmagljuju čak i uz klimu",
          "Temperatura u kabini oscilira bez promene podešavanja",
        ],
      },
      {
        type: "p",
        text: "Ako primetite bilo koji od ovih simptoma, preporučujemo da što pre zakažete pregled kod nas. Pravovremeni servis sprečava veće kvarove i skuplje popravke.",
      },
      {
        type: "h2",
        text: "Šta obuhvata servis klime automobila?",
      },
      {
        type: "h3",
        text: "1. Merenje pritiska sistema",
      },
      {
        type: "p",
        text: "Specijalizovanom opremom merimo pritisak u rashladnom krugu i utvrđujemo da li je nivo freona zadovoljavajući ili je sistem izgubio gas.",
      },
      {
        type: "h3",
        text: "2. Detekcija curenja",
      },
      {
        type: "p",
        text: "Ako je pritisak nizak, tragamo za mestom curenja pomoću UV lampice i detektora gasa. Curenje može biti na crevima, spojnicama, kompresoru ili kondenzatoru. Nalazimo uzrok i otklanjamo ga pre punjenja.",
      },
      {
        type: "h3",
        text: "3. Punjenje rashladnim sredstvom",
      },
      {
        type: "p",
        text: "Punjenje freona vršimo automatskom stanicom koja tačno odmeri količinu gasa prema specifikaciji proizvođača vašeg vozila. Koristimo R134a i noviji ekološki R1234yf freon, zavisno od sistema u vašem autu.",
      },
      {
        type: "h3",
        text: "4. Dezinfekcija sistema",
      },
      {
        type: "p",
        text: "Isparivač klime je idealno okruženje za razvoj plesni i bakterija – odavde dolazi onaj neprijatan miris. Dezinfekcijom sistema uklanjamo sve mikroorganizme i vraćamo svež vazduh u kabinu.",
      },
      {
        type: "tip",
        text: "Preporučujemo servis klime jednom godišnje, idealno pre letnje sezone – najkasnije u aprilu ili maju. Tada su termini slobodniji i jeftinije je nego u julu kada klima otkaže po vrućini.",
      },
      {
        type: "h2",
        text: "Razlika između R134a i R1234yf freona",
      },
      {
        type: "p",
        text: "Starija vozila (pre 2017. godine) uglavnom koriste freon R134a, dok novija koriste R1234yf koji ima manji uticaj na životnu sredinu. Ova dva gasa nisu kompatibilna i ne smeju se mešati. U našem servisu radimo sa oba tipa, a pravilan freon za vaše vozilo određujemo prema servisnoj knjižici ili etiketi na kompresoru klime.",
      },
      {
        type: "h2",
        text: "Koliko traje servis klime i koliko košta?",
      },
      {
        type: "p",
        text: "Standardni servis klime – pregled, detekcija curenja, punjenje i dezinfekcija – obično traje između 45 minuta i sat vremena. Cena zavisi od tipa freona i količine koja je potrebna. Za tačnu cenu pozovite nas ili dođite na pregled – informišemo vas o svemu pre nego što počnemo s radom.",
      },
      {
        type: "cta",
        text: "Zakažite servis klime pre letnje sezone.",
        href: "tel:+381655703879",
        label: "Pozovite: 065 570 3879",
      },
      {
        type: "h2",
        text: "Zašto ne treba odlagati servis klime?",
      },
      {
        type: "p",
        text: "Vožnja sa klimom kojoj nedostaje freon opterećuje kompresor – najskuplju komponentu sistema. Kada kompresor otkaže zbog rada na suvom, popravka može biti nekoliko puta skuplja od redovnog godišnjeg servisa. Redovnim održavanjem štedite novac na dugi rok i osiguravate da klima funkcioniše besprekorno baš kad vam je najpotrebnija.",
      },
    ],
  },
  {
    slug: "5-znakova-da-auto-treba-odmah-u-servis",
    title: "5 znakova da vaš auto treba odmah u servis – ne ignorišite ovo",
    metaTitle:
      "5 znakova da auto treba u servis | Autoservis Beograd – Živković",
    metaDescription:
      "Prepoznajte znakove kvara na vreme. Ovih 5 simptoma govore da auto treba odmah u autoservis Beograd. Ignorisanje može koštati višestruko više.",
    excerpt:
      "Vaš auto vam stalno nešto govori – ali da li slušate? Ovih 5 znakova su upozorenje da odmah idete u servis, pre nego što mala naprsotina postane veliki trošak.",
    date: "20. februar 2025.",
    dateISO: "2025-02-20",
    category: "Saveti",
    readingTime: 5,
    content: [
      {
        type: "p",
        text: "Automobil retko kad otkaže potpuno bez ikakvog upozorenja. U većini slučajeva, simptomi su prisutni danima ili nedeljama pre nego što dođe do ozbiljnog kvara. Problem je što mnogi vozači ignorišu rane znakove – bilo zbog zauzetosti, ili zato što se plaše troška popravke. Nažalost, čekanje gotovo uvek znači veći trošak. U nastavku su pet znakova kojima nikako ne treba okrenuti leđa.",
      },
      {
        type: "h2",
        text: "1. Neobičan zvuk – škripanje, lupanje, buka",
      },
      {
        type: "p",
        text: "Zdravo vozilo vozi se tiho i ravnomerno. Bilo koji novi zvuk – škripanje pri kočenju, lupanje iz ovjesa, zviždanje iz motora ili brujanje iz točkova – signal je da nešto nije u redu. Škripanje kočnica najčešće znači da su pločice potrošene do limita. Lupanje iz ovjesa može značiti istrošene amortizere ili stabilizatorske šipke. Ignorisanje ovih zvukova može dovesti do potpunog otkazivanja sistema i ozbiljne bezbednosne opasnosti.",
      },
      {
        type: "h2",
        text: "2. Lampice na kontrolnoj tabli",
      },
      {
        type: "p",
        text: "Kontrolna tabla vašeg automobila je direktna komunikacija između vozila i vas. Lampica motora (engine light), lampica ulja, temperature, baterije ili ABS sistema nisu ukrasi – one signaliziraju konkretan problem. Čak i ako auto naizgled vozi normalno, upaljenu lampicu treba dijagnostizovati što pre. Modernom kompjuterskom dijagnostikom u par minuta utvrđujemo tačan kôd greške i šta ga je izazvalo.",
      },
      {
        type: "tip",
        text: "Crvene lampice znače zaustavi se odmah. Žute lampice znače poseti servis uskoro. Nikada ne ignorišite crvenu lampicu – nastavak vožnje može dovesti do trajnog oštećenja motora.",
      },
      {
        type: "h2",
        text: "3. Promene u upravljanju ili kočenju",
      },
      {
        type: "p",
        text: "Da li vam auto vuce u stranu kada vozite ravno? Da li volan vibrira pri većim brzinama? Da li je kočni put duži nego što bi trebalo, ili vam auto \"klizi\" pri kočenju? Sve ovo su ozbiljni znakovi koji direktno utiču na bezbednost. Problemi sa geometrijom točkova, gumama, kočionim sistemom ili upravljačem ne smeju da čekaju – ovo su kvarovi koji mogu uzrokovati saobraćajnu nesreću.",
      },
      {
        type: "h2",
        text: "4. Tragovi tečnosti ispod automobila",
      },
      {
        type: "p",
        text: "Ako ispod parkiranog auta primetite fleku na tlu, to je znak curenja. Boja fleke govori dosta: ulje je tamnosmeđe do crne boje, rashladna tečnost je zelena ili roze, tečnost za kočnice je skoro bezbojna ili blago žuta, a gorivo ima karakterističan miris. Jedino bezopasno curenje je kondenzat iz klime – bistra voda pri visokim temperaturama. Svako drugo curenje treba odmah proveriti.",
      },
      {
        type: "h2",
        text: "5. Motor se teško pali ili se auto čudno ponaša pri paljenju",
      },
      {
        type: "p",
        text: "Ako auto ne pali u prvom pokušaju, pali sa zakašnjenjem, ili se neravnomerno trese dok je na mestu (rikverc), to su znaci problema sa svećicama, senzorom, gorivnim sistemom ili akumulatorom. Akumulator koji je na izmaku neće vas uvek ostaviti na cevčini – ali to je pitanje vremena. Redovnim servisom ovi problemi se hvataju pre nego što postanu hitni.",
      },
      {
        type: "h2",
        text: "Zašto je važno reagovati odmah?",
      },
      {
        type: "p",
        text: "Svaki od ovih znakova je upozorenje da nešto u sistemu ne funkcioniše kako treba. Mali kvar koji se pravovremeno popravi košta daleko manje od velikog kvara koji nastaje zbog zanemarivanja. Na primer, istrošene kočione pločice koštaju par hiljada dinara – ali ako se ishabaju do metala, oštete se i diskovi, a popravka se višestruko skuplja. Potrošena svećica je sitnica – ali ako je zanemarite, može doći do problema sa katalizatorom koji košta kao polovina auta.",
      },
      {
        type: "cta",
        text: "Primetili ste neki od ovih znakova?",
        href: "tel:+381655703879",
        label: "Zakažite pregled – 065 570 3879",
      },
      {
        type: "p",
        text: "U autoservisu Živković u Beogradu radimo kompjutersku dijagnostiku i pregled svih sistema vozila. Transparentno vam kažemo šta je problem i koliko košta popravka – pre nego što počnemo s radom. Nazovite nas ili dođite – i ne čekajte da mali problem postane veliki.",
      },
    ],
  },
  {
    slug: "kako-odabrati-autoservis-beograd",
    title: "Kako odabrati pouzdan autoservis u Beogradu – šta gledati?",
    metaTitle:
      "Kako odabrati autoservis Beograd – Vodič za vozače | Živković",
    metaDescription:
      "Tražite pouzdan autoservis u Beogradu? Evo 7 stvari koje treba proveriti pre nego što ostavite auto na servis. Saveti iskusnih mehaničara.",
    excerpt:
      "Postoji mnogo servisa u Beogradu, ali nisu svi isti. Evo kako da prepoznate pouzdan servis – i crvene zastavice koje treba da vas upozore.",
    date: "10. januar 2025.",
    dateISO: "2025-01-10",
    category: "Saveti",
    readingTime: 6,
    content: [
      {
        type: "p",
        text: "Pronalaženje pouzdanog autoservisa u Beogradu nije uvek lako – posebno ako ste novi u gradu ili tek kupili auto. Tržište je prepuno radionica svih veličina i specijalizacija, a cene i kvalitet usluge se znatno razlikuju. Loš izbor servisa može vas koštati novca, vremena i živaca. U ovom vodiču obraćamo se kao stručnjaci iz branše i dajemo vam konkretne savete šta da gledate.",
      },
      {
        type: "h2",
        text: "1. Proverite iskustvo i specijalizaciju",
      },
      {
        type: "p",
        text: "Nije svaki servis isti. Neki su specijalizovani za određene marke (BMW, Mercedes, Volkswagen), a drugi su generalni servisi koji rade sa svim markama. Za rutinski servis i opšte popravke, dobar generalni servis sa iskusnim majstorima je sasvim dovoljan i često jeftiniji od specijalizovanog. Pitajte koliko godina servis postoji i kakvo iskustvo imaju sa vašom markom vozila.",
      },
      {
        type: "h2",
        text: "2. Moderna dijagnostička oprema je obavezna",
      },
      {
        type: "p",
        text: "Moderni automobili su puni elektronike. Servis koji nema kompjutersku dijagnostiku radi naslepo – pogađa problem umesto da ga tačno identifikuje. To znači nepotrebno menjanje delova koji nisu u kvaru i veće troškove za vas. Pre nego što ostavite auto, pitajte da li rade kompjutersku dijagnostiku.",
      },
      {
        type: "h2",
        text: "3. Transparentne cene i predračun",
      },
      {
        type: "p",
        text: "Svaki ozbiljan servis pre početka rada treba da vam da predračun sa tačnim troškovima – cena rada i cena delova odvojeno. Budite oprezni sa servisima koji insistiraju na tome da ostave auto \"da vide šta ima\" bez ikakvog predračuna. Transparentnost u cenama je jedan od najvažnijih pokazatelja pouzdanosti servisa.",
      },
      {
        type: "tip",
        text: "Uvek tražite pismeni predračun pre nego što odobrite radove. Pouzdan servis to daje bez pogovora i ne počinje s radom bez vašeg odobrenja.",
      },
      {
        type: "h2",
        text: "4. Recenzije i usmene preporuke",
      },
      {
        type: "p",
        text: "Proverite recenzije na Google Maps-u – obraćajte pažnju ne samo na ocenu, već i na to kako servis odgovara na negativne recenzije. Servis koji ignoriše pritužbe ili odgovara agresivno nije siguran izbor. Preporuke od prijatelja i poznanika su još vrednije – lično iskustvo je najpouzdaniji izvor informacija.",
      },
      {
        type: "h2",
        text: "5. Komunikacija i objašnjenja",
      },
      {
        type: "p",
        text: "Dobar mehaničar treba da vam jasno objasni šta je problem, zašto je nastao i šta je potrebno uraditi. Ako vam majstor ne može da objasni problem razumljivim rečima, ili ako vas gledaju kao da postavljate glupo pitanje kada pitate za detalje – to je loš znak. Poverenje se gradi komunikacijom.",
      },
      {
        type: "h2",
        text: "6. Originalnost delova",
      },
      {
        type: "p",
        text: "Pitajte da li servis koristi originalne delove ili zamenske. Za novija vozila preporučujemo originalne ili delove priznatih brendova (Bosch, Mann, NGK, LUK). Jeftini nepoznati delovi mogu biti privlačni zbog cene, ali loš deo može dovesti do novog kvara u kratkom roku.",
      },
      {
        type: "h2",
        text: "7. Šlep + servis – prednost na jednom mestu",
      },
      {
        type: "p",
        text: "Posebna prednost autoservisa Živković u Beogradu je kombinacija šlep službe i servisa pod jednim krovom. Ako vam se auto pokvari na putu, ne morate da tražite posebnu šlep službu i poseban servis – pozovete nas, mi dođemo po auto i direktno ga odvedemo u naš servis. Ova integracija štedi vreme i novac, a vi ne morate da brinete ni o čemu.",
      },
      {
        type: "h2",
        text: "Crvene zastavice – servisi kojih treba da se klonite",
      },
      {
        type: "list",
        items: [
          "Servis koji ne daje predračun i traži plaćanje na kraju bez dogovora",
          "Majstori koji ne mogu da objasne šta su radili",
          "Cene koje su neuobičajeno niske (loši delovi ili loš rad)",
          "Nema garancije na urađene radove",
          "Servis koji ne pristaje da pozovete po auto dok nije gotovo bez obaveštavanja",
        ],
      },
      {
        type: "cta",
        text: "Tražite pouzdan autoservis u Beogradu?",
        href: "tel:+381655703879",
        label: "Pozovite Živković – 065 570 3879",
      },
      {
        type: "p",
        text: "U autoservisu Živković radimo transparentno, dajemo predračun pre svakog posla i ne počinjemo s radom bez vašeg odobrenja. Sa više od 15 godina iskustva i savremenom dijagnostičkom opremom, garantujemo kvalitet rada i koristimo proverene delove. Pozovite nas ili dođite – i vidite sami.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return posts.sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function generateStaticSlugs() {
  return posts.map((p) => ({ slug: p.slug }));
}
