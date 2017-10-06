$(document).ready(function(){
    var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var states, substringRegex;

    // an array that will be populated with substring matches
    states = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        states.push(str);
      }
    });

    cb(states);
  };
};

var states = ['AL', 'AS', 'AZ', 'AK', 'CA',
  'CO', 'CT', 'DE', 'FL', 'GA', 'HI',
  'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
  'ME', 'MD', 'MA', 'MI', 'MN',
  'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
  'NJ', 'NM', 'NY', 'NC', 'ND',
  'OH', 'OK', 'OR', 'PA', 'RI',
  'SC', 'SD', 'TN', 'TX', 'UT', 'VT',
  'VA', 'WA', 'WV', 'WI', 'WY'
];

$('#states .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(states)
});
    
   var substringMatcher2 = function(strs) {
  return function findMatches2(q, cb) {
    var publications, substringRegex;

    // an array that will be populated with substring matches
    publications = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        publications.push(str);
      }
    });

    cb(publications);
  };
};

var publications = ["NPRTraining Team", 
"CNNDigital", 
"CNNDigital Worldwide", 
"CNNNewsource", 
"CNNPolitics", 
"CNNWorldwide", 
"NPR", 
"NPR", "Washington Desk", 
"Fan Va Turmush Magazine", 
"Tv Globo  ", 
"1/ Guardian Us; 2/ Risd And The New School", 
"100 Days In Appalachia", 
"11Alive - Tegna", 
"12 News / Tegna", 
"13News Now (Wvec)", 
"13Wmaz / Tegna", 
"180476-0643", 
"1A", 
"5280 Magazine", 
"7 News Sydney", 
"9News", 
"9News", "KUSA-Tv", 
"Aaas", 
"Aaja", 
"ABC (Australian Broadcasting Corporation)", 
"ABC News", 
"ABC Owned Televsion Stations", 
"ABC10", 
"ABC11-Wtvd", 
"ABC15 Arizona", 
"Acast", 
"Accelerate Prosperity", 
"Access Intelligence", 
"Accuweather", 
"Aci Prensa", 
"Action News Jax", 
"Adam@Adammarton.Com", 
"Advance Digital", 
"Advance Digital", "Inc.", 
"Afp", 
"Afp/Relaxnews", 
"Agora Journalism Center", 
"Aj+", 
"Aj+ - Al Jazeera", 
"Aj+ (Al Jazeera)", 
"Ajc.Com", 
"Al DÃƒÂ­a / Dallas Morning News", 
"Al Jazeera Digital", 
"Al Jazeera International", 
"Al Jazeera", "Aj+ EspaÃƒÂ±ol", 
"Alabama Media Group", 
"Alabama State University", 
"Alaska Dispatch News", 
"Alley Interactive", 
"Alley Interactive Llc", 
"Alresmi", 
"Amazon Alexa", 
"America Media / Tjp", 
"American Association For The Advancement Of Science", 
"American City Business Journals", 
"American Pharmacists Association", 
"American Press Insitute", 
"American Press Institute", 
"American Society Of News Editors", 
"American Sociological Association", 
"American University", 
"American University | The Washington Post", 
"American University School Of Communication", 
"American University", "Soc", 
"Ancestry", 
"Andina News", 
"Annenberg Media", 
"Aol/Oath", 
"Ap", 
"Api", 
"Apm Reports", 
"Apple", 
"Apple News", 
"Apple", "Inc.", 
"Argus Leader Media", 
"Arizona Republic/Azcentral.Com", 
"Arizona State University", 
"Arkansas Democrat-Gazette", 
"Arkansas Tech University", 
"Artear - Grupo Clarin", 
"Asae", 
"Asbury Park Press", 
"Associated Press", 
"Associated Press Enps", 
"Association Of Alternative Newsmedia", 
"Asu / Cronkite School", 
"Athletes In Action", 
"Atlanta Journal-Constitution", 
"Atlantic Media", 
"Atlantic Media Strategies", 
"Atlantic Media'S Defense One", 
"Atlas Obscura", 
"Au", 
"Audible", 
"Audible/Amazon", 
"Austin American-Statesman", 
"Austin American-Statesman / Cox Media", 
"Australian Broadcasting Corporation (ABC)", 
"Auto Bild Digital", 
"Automotive News", 
"Average Bear Media", 
"Aviation Queen Llc", 
"Axel Springer Se", 
"Axios", 
"Azcentral.Com/USA Today Network", 
"Bain Media", 
"Balkan Investigative Reporting Network", 
"Ball State University", 
"Baltimore Business Journal", 
"Banjo", 
"Bankrate", 
"Bay Area News Group", 
"Bbc", 
"Bbc Editor Digital Content Hub", 
"Bbc Monitoring", 
"Bbc News", 
"Bbc News Online", 
"Bea", 
"Bell Media", 
"Belmont University", 
"Benton Foundation", 
"Bergen Record", 
"Berkeleyside", 
"Berlingske Media", 
"Bill & Melinda Gates Foundation", 
"Billings Gazette / Lee Enterprises", 
"Billy Penn", 
"Bing News", 
"Bing News @ Msft", 
"Black Press", 
"Black Press Media", 
"Bloomberg", 
"Bloomberg Bna", 
"Bloomberg Media Distribution", 
"Bloomberg News", 
"Boisedev.Com", 
"Boost Marketing", 
"Boston Globe", 
"Boston Magazine", 
"Boston University", 
"Boston University College Of Communication", 
"Boundless", 
"Bread For The World", 
"Brooklyn College", 
"Brrlog.Com", 
"Brunet-GarcÃƒÂ­a", 
"Bucks County Courier Times", 
"Burness", 
"Buzzfeed", 
"Byu-Idaho", 
"C&En", "American Chemical Society", 
"Cable Public Affairs Channel", 
"Cair-Florida", 
"Cal Poly", 
"Cal Poly State University Journalism", 
"California State University Los Angeles", 
"Calmatters", 
"Canadian Broadcasting Corporation (Cbc)", 
"Canadian Journalism Foundation", 
"Capital Public Radio", 
"Capital Weather Gang/Washington Post", 
"Carbonated.Tv", 
"Case Foundation", 
"Catholic News Agency", 
"Catholic News Agency/Ewtn News", 
"Cbc", 
"Cbc New Media", 
"Cbc New Media Group", "Llc", 
"Cbc News", 
"CBS Local", 
"CBS Local Digital Media", 
"CBS13/Cw31", 
"Cedars-Sinai", 
"Center For American Progress", 
"Center For Cooperative Media", 
"Center For Investigative Reporting", 
"Center For Public Integrity", 
"Center For Responsive Politics", 
"Central Connecticut State University", 
"Centre1.Com", 
"Cfr", 
"Cgtn America", 
"Chai Khana", 
"Chalkbeat", 
"Channel 4 News", 
"Channel 7", 
"Chartbeat", 
"Chatfuel", 
"Cheetah Mobile", 
"Chemical & Engineering News", 
"Chemical & Engineering News/American Chemical Society", 
"Chewonthis", 
"Chicago Sun-Times", 
"Chicago Tribune", 
"Chicas Poderosas", 
"Chromatic", 
"Chronicle Of Higher Education", 
"Cinamaker", 
"Cincinnati Enquirer", 
"Cincinnati.Com/The Cincinnati Enquirer", 
"Circa", 
"Circle @ Tisch College", "Tufts University", 
"Circle At The Tisch College Of Civic Life", 
"City Bureau", 
"City University Of Ny", "Graduate School Of Journalism", 
"Citylab", 
"Civic Matters", 
"Civimpact Labs", 
"Civitta Moldova", 
"Clearhealthcosts.Com", 
"CNN", 
"CNNmoney", 
"Coda Media", 
"Coda Story", 
"Code For Africa", 
"Collegiate Times", 
"Colorado Public Radio", 
"Colorlines", 
"Columbia College Chicago", 
"Columbia Journalism School", 
"Columbia Missourian", 
"Columbia University Graduate School Of Journalism", 
"Communications Daily", 
"Community Impact Newspaper", 
"Community Information Districts", 
"Community Journals", 
"CondÃƒÂ© Nast International", 
"Content Insights Ad", 
"Cordillera Digital", 
"Corpus Christi Caller-Times", 
"Council On Foreign Relations", 
"Cox Inc", 
"Cox Media Group", 
"Cox Media Group - Tv", 
"Cox Media Group (Wsb-Tv)", 
"Cox Media Group Jacksonville", 
"Cox Media Group Ohio", 
"Cox Media Group", "Inc.", 
"Cq Roll Call", 
"Crain'S Detroit Business", 
"Croma", 
"Cronkite News At Arizona Pbs", 
"Cronkite School Of Journalism", 
"Cronkite School", "Asu / Knight Foundation", 
"Crowdtangle", 
"Cs Monitor", 
"Cues", 
"Cuny Graduate School Of Journalism", 
"Cuny/Tow-Knight/Nii", 
"Current", 
"Current.Org", 
"Dagbladet Politiken", 
"Dagens Nyheter", 
"Daily Blast Live", 
"Daily Emerald", 
"Daily Freeman/Digital First Media", 
"Dallas Morning News", 
"Danish Broadcasting Coorporation", 
"Data.World", 
"Dataminr", 
"Davidson And Associates", 
"De Correspondent", 
"Defense One", 
"Define American", 
"Delfi News Portal", 
"Democracy Fund", 
"Democrat & Chronicle", 
"Denverite", 
"Deseret News", 
"Desk-Net", 
"Detroit Free Press", 
"Deutsche Welle", 
"Deutsche Welle (Dw)", 
"Devex", 
"Dhruv", 
"Dia.Uz", 
"Dig Deeper Media", 
"Digiday", 
"Digital First Media", 
"Digital First Media/Morning Sun", 
"Digital Media Consulting", 
"Digital News", 
"Discourse Media", 
"Disney ABC Television", 
"Disney Parks & Resorts", 
"Disneyland Resort", 
"Dnainfo New York", 
"Dolan Media Management", 
"Dong-A Ilbo", 
"Dow Jones News Fund", 
"Dr Kultur", 
"Drury University", 
"Drzavljan D (Citizen D) Ngo", 
"Duke Reporters' Lab", 
"Duke University", 
"E-Commentary", 
"E. W. Scripps - Wftx", 
"E.W. Scripps", 
"E.W. Scripps Company", 
"E.W. Scripps School Of Journalism", "Ohio University", 
"E&E News", 
"Earwolf/Stitcher", 
"East Bay Times & Mercury News", 
"Ebs (The Korean Education Broadcasting System)", 
"Echobox", 
"Economia A.S.", 
"Edaily", 
"Edsurge", 
"Education Week", 
"Education Week/Epe", 
"Efi", 
"Egmont Publishing", 
"Ehrlich Media", 
"El Observador", 
"Elon University", 
"Emblematic Group", 
"Emerson College", 
"Emily Griffith Technical College", 
"Endowmentforjournalism.Org", 
"Energy Futures Initiative", 
"Engaging News Project", 
"Entertainment Weekly", 
"Epoch Times", 
"Espn", 
"Espn - The Undefeated", 
"Espn The Undefeated", 
"Esri", 
"Ethics And Excellence In Journalism Foundation", 
"Eurocomm", 
"European Journalism Centre", 
"Ew Scripps (Rtv6)", 
"Ewtn News", 
"Expert Ra Kazakhstan", 
"Expertise Finder", 
"Facebook", 
"Faieta & Associates", 
"Famu Sjgc", 
"Fans 1St Media", 
"Fans 1St Media/ Cox Media Group", 
"Farm Journal Media", 
"Fast Company", 
"Federal News Radio", 
"Fiercemarkets", 
"Financial Times", 
"Finnish Broadcastin Co. Yle", 
"Finnish Broadcasting Co / Yle", 
"Finnish Broadcasting Company", 
"First Coast News", 
"First Draft", 
"First Draft News", 
"First Look Media", 
"First Look Media Works / The Intercept / Field Of Vision", 
"Fivethirtyeight", 
"Flint Beat/Brown Impact Media Group", 
"Florida International University", 
"Florida State University", 
"Florida Today", 
"Fokus", 
"Folha De S.Paulo", 
"Forbes", 
"Forbes Kazakhstan", 
"Foreign Policy", 
"Fort Collins Coloradoan", 
"Fort Worth Star-Telegram", 
"Four Kitchens", 
"Four Kitchens Llc", 
"FOX 5 San Diego", 
"FOX 8 News Cleveland", 
"FOX 8 News Wjw", 
"FOX News", 
"FOX News Channel", 
"FOX News Channel/FOX Business Network", 
"FOX News/FOX Business", 
"FOX Sports Midwest", 
"FOX Television Station Group", 
"FOX Television Stations", 
"FOX Television Stations", "Inc.", 
"FOX23", 
"France TÃƒÂ©lÃƒÂ©visions", 
"France Televisions", 
"Frankly", 
"Free Thought Politics", 
"Freelance", 
"Freelance Journalist And Photographer", 
"Freelance Photojournalist", 
"Freelancer", 
"Frontline", 
"Frontline Medical Communications", 
"Frontline/Wgbh", 
"Full Frontal With Samantha Bee", 
"Fund For Investigative Journalism", 
"Fusion Media Group", 
"Future Today Institute", 
"Gannett", 
"Gannett Co.", "Inc.", 
"Gannett Co.", "Inc. Digital", 
"Gannett Co.", "Inc./Asbury Park Press", 
"Gannett Co.", "Inc./USA Today Network", 
"Gannett Co.", "Inc./York Daily Record", 
"Gatehouse Media", 
"Gates Foundation", 
"Gazet", "Inc.", 
"Gedi Gruppo Editoriale", 
"Gemius Latvia", 
"Gen", 
"George C Marshall High School", 
"Georgetown University", 
"Georgia News Lab", 
"Georgian Public Broadcast", 
"Getty Images", 
"Ghazala Irshad/Cuny Journalism", 
"Gizmodo Media Group", 
"Global Editors Network", 
"Global Media Partnersihps", 
"Global News", 
"Global News/Corus Entertainment", 
"Globalmediagroup", 
"Globe And Mail", 
"Gode Vfx", 
"Google", 
"Google (Search)", 
"Google Inc.", 
"Google Play Newsstand", 
"Google", "Inc", 
"Google", "Inc.", 
"Gordon And Betty Moore Foundation", 
"Grady College", "University Of Georgia", 
"Graham Media Group", 
"Granat", 
"Greenville News/Independent Mail", 
"Grist", 
"Grist.Org", 
"Groundsource", 
"Groundtruth/ Report For America", 
"Grupo De Diarios America (Gda.Com)", 
"Guardian Mobile Innovation Lab", 
"Guardian Us Mobile Innovation Lab", 
"Gw School Of Media And Pubic Affairs", 
"Gwangyang Citizen Newspaper", 
"Hackpack.Press", 
"Hankyoreh", 
"Hartford Courant Media Group", 
"Harvard Business Review", 
"Harvard Business School", 
"Harvard'S Shorenstein Center", 
"Hearken", 
"Hearst Newspapers", 
"Hearst Newspapers", "Digital", 
"Hearst Television", 
"Hgtv/Scripps Networks Interactive", 
"Hhmi", 
"Hhs", 
"High Country News", 
"Home Page Media Group", 
"Honolulu Civil Beat", 
"Honoulu Civil Beat", 
"Hot Pod Media", 
"Hour Media", 
"Howard University", 
"Hpe", 
"Huffpost", 
"Huffpost Canada", 
"Huffpost Quebec", 
"Human Constanta Ngo", 
"Human Made", 
"Humber College", 
"I Advance Senior Care", 
"Ibd", 
"Icfj", 
"Icij", 
"Idaho Statesman", 
"Ieee Spectrum", 
"Ifg", 
"Il Tirreno", 
"In Your Shoes Media", 
"Independent", 
"Independent And Drone Journalism Lab", 
"Independent Television", 
"Indiana Public Broadcasting", 
"Indianapolis Star / USA Today Network", 
"Industry Dive", 
"Indystar", 
"Insertlearning", 
"Inside Edition", 
"Inside.Com", 
"Insta360", 
"Instagram", 
"Institute For No NPRofit News", 
"Insurance Information Institute", 
"Int'L Center For Journalists (Icfj)", 
"International Center For Journalists", 
"International Center For Journalists", "Icfj", 
"International Centre For Investigative Reporting", 
"International Centre For Journalists", 
"International Committee Of The Red Cros", 
"Internet Archive", 
"Internet Society", 
"Internews", 
"Intrepid Media", 
"Investigative Reporters And Editors", 
"Iowa State Daily", 
"Iowa State University", 
"Ipolitics", 
"Ipsos", 
"Irex", 
"Iris.Tv", 
"Issue Media Group", 
"Issue One", 
"Itn/Channel 4 News", 
"Itp Media Group", 
"J-Lab", 
"James L. Knight School Of Communication", "Queens University Of Charlotte", 
"Japan Broadcasting Company(Nhk)", 
"John S. Knight Journalism Fellowships", 
"John S. Knight Journalism Fellowships At Stanford", 
"Johns Hopkins University", 
"Joongang Daily Newspaper", 
"Journal-Isms", 
"Journalism & Women Symposium", 
"Journalism + Design At The New School", 
"Journalism Education Association", 
"Journalism That Matters", 
"Journalismnext/Medianexttalent", 
"Journalist'S Resource", 
"Jovrnalism + Invstg8.Net", 
"Jsk", 
"Jsk Fellowships", 
"Jsk Fellowships At Stanford", 
"Jsk Fellowships", "Stanford University", 
"Jsk Journalism Fellowship", 
"Jsk Journalism Fellowships", 
"Jsk Journalism Fellowships At Stanford University", 
"Jsk Stanford", 
"Jstor Daily", 
"Jtrust", 
"Kaiser Family Foundation", 
"Kaiser Health News", 
"Kansas State University", 
"Kcpt", 
"Kcrw", 
"Kcrw", "Freelance", 
"Kdaf Tribune Broadcasting", 
"Kdaf Tribune Media", 
"Keller Williams Realty International", 
"Kens 5 / Tegna", 
"Kent State", 
"Kentucky Center For Investigative Reporting", 
"Kentwired", 
"Kentwired.Com", 
"Kera", 
"Kettering Foundation", "Poynter", 
"Kfor Tribune Media", 
"Kgw", 
"Kgw Media Group", 
"Khou 11", 
"King 5", 
"King Features Syndicate", 
"King-Tv", 
"King5/Tegna", 
"Kingrail Consulting", 
"Kiro 7/Cox Media Group", 
"Kjzz 91.5 Fm | Kjzz.Org", 
"Klein College", "Temple University", 
"Kloop Media", 
"Kloopmedia", 
"Kmtv 3 News Now", 
"Knight Center At University Of Texas", 
"Knight Center For Journalism In The Americas", 
"Knight Digital Media Center", 
"Knight Foundation", 
"Knoxville News Sentinel", 
"Knsd", 
"Koller Search Partners", 
"Koller Search.Partners", 
"Komu", 
"Korea Press Foundation", 
"Kpcc", "Southern California Public Radio", 
"Kpho/Ktvk", 
"Kqed", 
"Kqed Education", 
"Krem/Tegna", 
"Kristen Jeffers Media", 
"Krwg Public Media", 
"Krzana", 
"Ksdk Newschannel 5", 
"Kshb-Tv", 
"Ksl", 
"Ksl Newsradio", 
"Ksl.Com", 
"Ktla", 
"Kuow", 
"Kuow Puget Sound Public Radio", 
"KUSA-Tv 9News", 
"KUSA/Denver", 
"Kut", 
"Kut News", 
"Kuzzle", 
"Kvox Media", 
"Kvue", 
"Kwtv/News9.Com", 
"Kxan | Nexstar", 
"Kyungnam Ilbo", 
"La Nacion", 
"La Nacion (Argentina)", 
"La Presse Canadienne", 
"La Repubblica", 
"La Repubblica  / Gruppo Espresso", 
"Lakana", 
"Lakana/Nexstar Digital", 
"Lansing State Journal/USA Today Network", 
"Law360", 
"Le Parisien / Aujourd'Hui En France", 
"Lehigh University", 
"Lenfest Institute", 
"Lenfest Institute For Journalism", 
"Lexisnexis", 
"Liberty University", 
"Lindy Institute", 
"Linfield College", 
"Linkedin", 
"Lion Publishers", 
"Livingly Media", 
"Llc Info Xizmati", 
"Llp Europa Plus Kazakhstan", 
"Lo Media", 
"Local Media Consortium", 
"Lohud.Com (USA Today Network)", 
"London Trust Media", "Inc. (Private Internet Access)", 
"Los Angeles County Department Of Beaches And Harbors", 
"Los Angeles Times", 
"Louisiana Weekly", 
"Louisville Public Media", 
"Loyola Marymount Univ.", 
"Luma Touch Llc", 
"Lutman & Associates", 
"M", 
"Macarthur Foundation", 
"Macleay College", 
"Madison.Com/Lee Enterprises", 
"Mapcreator", 
"March On Washington Film Festival", 
"Mark Little Media", 
"Marketplace From Apm", 
"Marquette Wire (Marquette'S Student Media)", 
"MartÃƒÂ­n GonzÃƒÂ¡lez", 
"Mashable", 
"Master Of Code", 
"Matrix Group", 
"Mayborn School Of Journalism", "Univ. Of North Texas", 
"McClatchy", 
"McClatchy Video Lab", 
"Media", 
"Media Center Sarajevo", 
"Media Impact Funders", 
"Media Literacy Now", 
"Media Mobilize", 
"Media Now", 
"Mediahub/Mtv News", 
"Mediashift", 
"Mediaweek Australia", 
"Medill / Northwestern", 
"Medill News Service", 
"Medill School Of Journalism", 
"Medium", 
"Meedan", 
"Membership Puzzle Project", "Nyu", 
"Mental Floss", 
"Mercer University", 
"Meredith Corp.", 
"Meredith Corporation", 
"Meridian International", 
"Merrill College", 
"Metrowest Daily News", 
"Metrowest Daily News/Gatehouse Media", 
"Metrowest Daily News/Milford Daily News", 
"Miami Herald", 
"Miami Herald Media Company", 
"Miami University", 
"Mic", 
"Michigan Radio", 
"Michigan State University School Of Journalism", 
"Microsoft", 
"Microsoft Corporation", 
"Middle Tennessee State University", 
"Milwaukee Journal Sentinel", 
"Mindshift/Kqed", 
"Minneapolis Star Tribune", 
"Mississippi Today", 
"Missouri School Of Journalism", 
"Missouri Western State University", 
"Mit", 
"Mlk50: Justice Through Journalism", 
"Money-Media/Financial Times", 
"Montreal Gazette", 
"Morgan State University", 
"Moriba Media", 
"Morrison Productions", 
"Mother Jones", 
"Move.Bg Foundation", 
"Mozilla", 
"Mpr", 
"Ms", 
"Msn", 
"Msu J-School/North Central Michigan College", 
"Mtg Media Group", 
"Muck Rack", 
"Muck Rack", "Shorty Awards", 
"MUSAshi University", 
"N/A", 
"Na", 
"Nabj", 
"Naples Daily News", 
"Nasdaq.Com", 
"Nashville Public Radio", 
"National Associaiton Of Hispanic Journalists", 
"National Association Of Black Journalists", 
"National Association Of Broadcasters", 
"National Association Of Hispanic Journalists", 
"National Association Of Realtors", 
"National Endowment For Financial Education", 
"National Geographic", 
"National Geographic Partners", 
"National Geographic Travel", 
"National Press Club", 
"National Public Media", 
"Nationall Press Foundation", 
"Naytev", 
"NBC Bay Area", 
"NBC Connecticut", 
"NBC Dfw", 
"NBC Los Angeles", 
"NBC New York", 
"NBC News", 
"NBC News / Meet The Press", 
"NBC News & MsNBC", 
"NBC News Digital", 
"NBC Owned Television Stations", 
"NBC San Diego", 
"NBC Universal", 
"NBC Universal Owned Television Stations", 
"NBC Washington", 
"NBC10 Philadelphia", 
"NBCuniversal", 
"Nepr/Wfcr", 
"Nerdwallet", 
"Nettavisen", 
"Neva Labs", 
"New America", 
"New Cave Media", 
"New Hampshire Public Radio", 
"New Michigan Media", 
"New York Daily News", 
"New York Post", 
"New York Public Radio", 
"New York Times", 
"New York University", 
"Newco", 
"News Deeply", 
"News Integrity Initiative / Cuny Graduate School Of Journalism", 
"News Revenue Hub", 
"Newsbroke", "Aj+", 
"Newschannel 5 Nashville", 
"Newscheckmedia", 
"Newscycle Solutions", 
"Newsday", 
"Newsday.Com", 
"Newseum", 
"Newsflare", 
"Newsguild Of Ny", 
"Newsguild-Cwa", 
"Newspicks", "USA", 
"Newspim", 
"Newsweek Media Group/Ibtimes Uk", 
"Newswhip", 
"Newswise", 
"Nexo Jornal", 
"Next City", 
"Nhk", 
"Nhk-Japan Tv", 
"Nieman Journalism Lab", 
"Nieman Lab", 
"Nikkei", 
"Nikkei America", "Inc.", 
"Nj Advance Media", 
"Nj Advance Media / Nj.Com", 
"Nj Spotlight", 
"Nlgja - The Association Of Lgbtq Journalists", 
"Nola.Com/The Times-Picayune", 
"None Listed", 
"Norc At The University Of Chicago", 
"Nordot Inc.", 
"Northeastern U", 
"Northwestern University", 
"Northwestern University Knight Lab", 
"Northwestern University Medill School Of Journalism", 
"Norwegian Broadcast Corporation", 
"Norwegian Broadcasting Corporation (Nrk)", 
"Norwegian News Agency", 
"Note To Self", "Wnyc Studios", 
"Noticiero MÃƒÂ³vil", 
"Noticiero MÃƒÂ³vil", "University Of Nevada", "Reno", 
"Now This News", 
"Nowthis", 
"Nppa", 
"Nyt", 
"Nytimes", 
"Nyu", 
"Nyu Journalism", 
"O Globo", 
"Oc Business Journal", 
"Offercraft", 
"Ohio University", 
"Ona", 
"Ona At Uga", 
"Online News Association", 
"Opb", 
"Open Society Foundations", 
"Opennews", 
"Opinary", 
"Orb Media", 
"Oregon Public Broadcastin", 
"Oregon Public Broadcasting", 
"Oregonian Media Group", 
"Otekomachi", 
"Out Of The Binders Inc", 
"Outspoken Media", 
"Oyla Magazine", 
"PÃƒÂºblico", 
"Page Six / New York Post", 
"Palitra Media", 
"Palm Beach Post", 
"Panarmneian Media Group", 
"Parse.Ly", 
"Pbs", 
"Pbs Newshour", 
"Pbs Newshour Weekend", 
"Penn State", 
"Penn State University", 
"Pensacola News Journal / Pnj.Com", 
"Petoskey News-Review", 
"Pew Research Center", 
"Philadelphia Inquirer", 
"Philadelphia Inquirer", "Daily News", "Philly.Com", 
"Philadelphia Media Network", 
"Philip Merrill College Of Journalism", 
"Pine Crest School", 
"Pink Triangle Press", 
"Pittsburgh Post-Gazette", 
"Plain Dealer Publishing Co.", 
"Planned Parenthood", 
"Plex", 
"Pnj.Com", 
"Pocket", 
"Podcast Movement", 
"Politico", 
"Politico New York", 
"Politifact", 
"Popular Science", 
"Portland Business Journal", 
"Post & Courier", 
"Poynter Institute", 
"Prensa Libre", 
"Pri Public Radio International", 
"Pri'S The World", 
"Private Internet Access", 
"Project Rosie", 
"Projet Facet", 
"Projor", 
"ProPublica", 
"Proquest", 
"Prose Hacking", "Llc", 
"Psych Congress Network", 
"Public Foundation Institute Of Media Standards", 
"Public Good", 
"Public Narrative", 
"Public News Service", 
"Public Radio International", 
"Publicaffairs", 
"Publico", 
"Punto Y Aparte", 
"Purch", 
"Purple", 
"Qatar Tribune", 
"Qcitymetro.Com", 
"Quanta Magazine", 
"Quartz", 
"Questex", 
"Questex/Fiercemarkets", 
"Racked", 
"Racked.Com", "Vox Media", 
"Radio Free Asia", 
"Radio Free Europe / Radio Liberty", 
"Radio Free Europe/Radio Liberty", 
"Radio-Canada", 
"Radix", 
"Railbird Media", 
"Rally", 
"Rare", 
"Rare Local", 
"Rare.Us", "Cox Media Group", 
"Raycom Media", 
"Read Across The Aisle", 
"Readersight", 
"Recode", 
"Recroom", 
"Red Bull Media House", 
"Reddit", 
"Religion News Service", 
"Reno Gazette-Journal", 
"Reno Gazette-Journal/USA Today Network", 
"Reporter", 
"Reporters Committee For Freedom Of The Press", 
"Reporters Without Borders", 
"Repubhub/Icopyright", 
"Reubhub", 
"Reuters", 
"Reuters News Agency", 
"Reveal From The Center For Investigative Reporting", 
"Rewire", 
"Reynolds Journalism Institute", 
"Reynolds School Of Journalism", 
"Rfe/Rl", 
"Richmond Free Press", 
"Righters Magazine", 
"Rivard Report", 
"Rji Futures Lab", 
"Robert R. Mccormick Foundation", 
"Rochester Democrat & Chronicle", 
"Rogers Media", 
"Rogers Media (680 News And Citynews)", 
"Roll Call", 
"Romsdals Budstikke", 
"Rotary International/Aces: The Society For Editing", 
"Rowan University", 
"Rt America", 
"Rtdna", 
"Rtp", 
"Rtv Slovenija", 
"Rutgers University | Big World Multimedia", 
"S.I. Newhouse School Of Public Communications", 
"S&P Global Market Intelligence", 
"Sacramento Business Journal", 
"Salon Media Group", 
"Salt River Pima-Maricopa Indian Community", 
"Sam", 
"San Angelo Standard-Times", 
"San Antonio Express-News", 
"San Diego State", 
"San Francisco Chronicle", 
"San Francisco Public Press", 
"Sandusky Newspaper Group", 
"Santa Monica College", 
"Savannah State University", 
"Sb Nation", 
"Scholars Strategy Network", 
"Schuster Institute For Investigative Journalism", 
"Science", 
"Science Friday", 
"Science Magazine", 
"Science News", 
"Science News For Students", 
"Science News Magazine", 
"Scotusblog", 
"Scribblelive", 
"Scripps - Wfts", 
"Scripps Howard Foundation", 
"Scripps News/Washington Bureau", 
"Scroll", 
"Seattle Met Magazine", 
"Seattle Pacific University", 
"Seattle Times", 
"Self", 
"Self Employed", 
"Self-Employed", 
"Sembramedia", 
"Senior Communications Officer", 
"Sharp Things", 
"Shenandoah University", 
"Shephard Media", 
"Shorenstein Center At The Harvard Kennedy School", 
"Shout!", 
"Sierra Nevada Media Group/Swift Communications", 
"Sinclair Broadcast Group", 
"Siriusxm Politics", 
"Slate", 
"Smartbrief", 
"Smartnews", 
"Smartnews Inc", 
"Smartnews Inc.", 
"Smartnews", "Inc.", 
"Smartnews", "Inc.", 
"Smithgeiger", 
"Snj Today", 
"Social News Desk", 
"Socialcompany", "Inc.", 
"Socialflow", 
"Sojourners", 
"Solomon", 
"Solutions Journalism Network", 
"Sonder", 
"Sortable", 
"South China Morning Post", 
"South Florida Black Journalists Association", 
"Southern California News Group", 
"Southern California Public Radio/Kpcc", 
"Southern Methodist University", 
"Southern Oregon University", 
"Sparks", 
"Spectrum", 
"Spectrum News", 
"Spherica Vr", 
"Spirited Media", 
"Spj / Gnl", 
"Srf - Swiss Broadcasting Corporation", 
"St Louis Public Radio", 
"St. Cloud Times", 
"St. Louis Post-Dispatch", 
"St. Louis Public Radio", 
"Stanford", 
"Stanford Gsb", 
"Stanford Journalism Program", 
"Stanford University", 
"Stanford University - Jsk Fellowships", 
"Star Tribune", 
"Starnews Media", 
"Startland News", 
"Startup Southerner", 
"Stat", 
"State House News Service", 
"Statesman Journal", 
"Steele Wars Podcast & I Love Green Guide Letters Podcast", 
"Stimuli Vr", 
"Stn49", "Ud Student Television", 
"Stopfake.Org", 
"Storyful", 
"Storyful", "Div Of News Corp", 
"Storyhunter", 
"Stre.Am", 
"Stream Live", 
"Strike Social", 
"Student", 
"Student Loan Hero", 
"Student Press Law Center", 
"Studio Gannett Co.", "Inc.", 
"Subtext Media", "Ltd.", 
"Sunlight Foundation", 
"Suny College At Old Westbury", 
"Svenska Dagbladet", "Schibsted", 
"Svt Swedish Broadcasting", 
"Swarthmore College", 
"Swedish National Tv Broadcaster", 
"Swedish Television", 
"Swiss Radio And Tv Srf", 
"Synacor", 
"Syracuse University", 
"Taboola", 
"Tampa Bay Times", 
"Taylor Media/The Penny Hoarder", 
"Taza Koom Digital Transformation Program", 
"Tegna", 
"Tegna | Kpnx", 
"Tegna Inc", 
"Tegna Inc.", 
"Tegna/Wxia", 
"Telemundo Station Group", 
"Temple University", 
"Texas Nurses Association", 
"Texas Public Radio", 
"Texas State University", 
"Texas Tribune", 
"The 21St", "Illinois Public Media", 
"The Advocate", 
"The Ajc", 
"The Annie E. Casey Foundation", 
"The Arab Weekly", 
"The Arizona Republic", 
"The Asahi Shimbun", 
"The Associated Press", 
"The Atlanta Journal Constitution", 
"The Atlanta Journal-Constitution", 
"The Atlanta Journal-Constitution", "Cox Media Group", 
"The Atlantic", 
"The Ball State Daily News", 
"The Baltimore Sun", 
"The Beacon", 
"The Beacon", "University Of Portland", 
"The Blackprint", 
"The Boston Globe", 
"The Brookings Institution", 
"The Canadian Journalism Foundation", 
"The Canadian Press", 
"The Canadian Press/La Presse Canadienne", 
"The Center For Investigative Reporting", 
"The Charlotte Observer", 
"The Chief Of Style", 
"The Christian Science Monitor", 
"The Chronicle Of Higher Education", 
"The Chronicle Of Philanthropy", 
"The Cincinnati Enquirer", 
"The Clarion-Ledger", 
"The Cojo List", 
"The Collective Pac", 
"The Columbus Dispatch", 
"The Commercial Appeal", 
"The Conversation Media Group", 
"The Conversation Us", 
"The Coral Project", 
"The Corporation For Public Broadcasting", 
"The Courier-Journal", 
"The Courier-Journal/Gannett Co.", "Inc.", 
"The Courier-Journal/USA Today Network", 
"The Daily Advertiser", 
"The Daily Beast", 
"The Daily Line", 
"The Daily Record", 
"The Daily Show", 
"The Daily Times", 
"The Dallas Morning News", 
"The Denver Post", 
"The Des Moines Register", 
"The Desert Sun", 
"The Detroit News", 
"The Devil Strip", 
"The E. W. Scripps Company", 
"The Eagle Online", 
"The Economic Times", 
"The Economist", 
"The Evergrey", 
"The Famuan / Florida A&M University", 
"The Financial Times", 
"The Fiscal Times", 
"The Franklin Institute", 
"The George Washington University", 
"The Getty", 
"The Globe And Mail", 
"The Guardian", 
"The Guardian Us", 
"The Herald (Jasper", "Ind.)", 
"The Herald-Sun", 
"The Hill", 
"The Hilton Head Island Packet", 
"The Incline", 
"The Independent/Sherman Publishing Co.", 
"The Indianapolis Star", 
"The Intercept", 
"The Journal News", 
"The Kent Stater", 
"The King'S College", 
"The Know", "The Denver Post", 
"The Korea Economic Daily", 
"The Lens", 
"The Maroon Tiger", 
"The Maynard Institute", 
"The McClatchy Company", 
"The Miami Times", 
"The New Food Economy", 
"The New York Times", 
"The New York Times Magazine", 
"The New Yorker", 
"The Newguild-Cwa", 
"The News & Observer", 
"The News Journal", 
"The News Journal/USA Today Network", 
"The News Leader", 
"The News Record", 
"The Newsguild-Cwa", 
"The Orange County Register/Scng", 
"The Oregonian", 
"The Palm Beach Post", 
"The Penny Hoarder", 
"The Pew Charitable Trusts", 
"The Philadelphia Inquirer", 
"The Poynter Institute", 
"The Poynter Institute & News University", 
"The Public Editors Project", 
"The Record", 
"The Record At Bergen", 
"The Review", 
"The Rival", 
"The Salinas Californian", 
"The Santa Fe New Mexican", 
"The Seattle Times", 
"The Splice Newsroom", 
"The Spokesman-Review", 
"The Telegraph", 
"The Tennessean", 
"The Texas Tribune", 
"The Toronto Star", 
"The Tylt / Advance Digital", 
"The Undefeated/Espn", 
"The Union", 
"The University Of North Carolina At Chapel Hill", 
"The Virginian-Pilot", 
"The Wall Street Journal", 
"The Washington Post", 
"The Weather Company / Ibm", 
"The West Australian", 
"The Yomiuri Shimbun", 
"The Young Turks", 
"Thinking.Media", 
"Thinkprogress", 
"This Is Tucson / Arizona Daily Star", 
"Thomson Reuters", 
"Thv11", 
"Thv11/Tegna", 
"Time", 
"Time Inc.", 
"Timeline", 
"Times Citizen", 
"Tiny Collaborative", 
"Tiny World Productions / Fusion", 
"Top Ten Reviews", 
"Toroev.Com", 
"Toronto Star", 
"Tow Center", 
"Tow-Knight Center For Entrepreneurial Journalism", 
"Tow-Knight/Bing News", 
"Towson University", 
"Trace Media", "Inc.", 
"Transport Topics", 
"Travel + Leisure", 
"Treasure Coast Newspapers", 
"Tri", 
"Tribune Broadcasting", 
"Tribune Broadcasting Company", 
"Tribune Content Agency", 
"Tribune Media", 
"Tribune Media (Ktxl-Tv)", 
"Tribune Media Company", 
"Tribune-Review", 
"Trinity Mirror Plc", 
"Trint", 
"Trisolute News Dashboard", 
"Trisolute Software News Dashboard", 
"Tronc", 
"Tronc", "Inc.", 
"Truckbeat/Air + Wyso Public Radio", 
"True Anthem", 
"Trust Project", 
"Tunnelbear", 
"Turner Sports", 
"Tv 2", 
"Tv 2 / Denmark", 
"Tv 2 Denmark", 
"Tv 2 Nyheder", 
"Tv Globo", 
"Tv2 Ksu", 
"Tvo", 
"Twitter", 
"Twitter Canada", 
"Twitter Japan", 
"Twitter Spain", 
"Tycsports.Com", 
"U.S. Consulate Almaty/Msa Fund", 
"U.S. Holocaust Memorial Museum", 
"U.S. News & World Report", 
"U.S. News & World Report", "Billboard", 
"U.S. News And World Report", 
"Ubc", 
"Ubc School Of Journalism", 
"Ucla", 
"Uga/Journalism", 
"Unc", 
"Unc School Of Media And Journalism", 
"Unc-Chapel Hill", 
"Undark Magazine", 
"Unesco Crossings Institute", 
"United States Digital Service", 
"United States Holocaust Memorial Museum", 
"University Of Arizona", 
"University Of Arizona/Pbs Newshour", 
"University Of Arkansas Journalism Department", 
"University Of British Columbia", 
"University Of Colorado Boulder Cmci", 
"University Of Delaware", 
"University Of Florida", 
"University Of Georgia", 
"University Of Kansas", 
"University Of King'S College", "School Of Journalism", 
"University Of Maryland", 
"University Of Maryland", "Philip Merrill College Of Journalism", 
"University Of Massachusetts", 
"University Of Massachusetts Amherst", 
"University Of Missouri", 
"University Of Nevada", "Reno", 
"University Of New Mexico", 
"University Of North Carolina", 
"University Of North Carolina At Chapel Hill", 
"University Of North Texas", 
"University Of Notre Dame", 
"University Of Oregon", 
"University Of Oregon Sojc", 
"University Of Portland", 
"University Of South Dakota", 
"University Of Southern California", 
"University Of Texas At Austin", 
"University Of Texas At San Antonio", 
"University Of Toronto", 
"University Of Toronto Communications", 
"University Of Wisconsin", 
"University Of Wisconsin-Madison", 
"Univision", 
"Univision News", 
"Unt", 
"Uol", 
"Uptown Collective", 
"Upworthy / Good Worldwide", 
"Upworthy + Good", 
"Upworthy + Good Worldwide", 
"Upworthy.Com", 
"Urban Airship", 
"Urban Institute", 
"Us Department Of State", 
"Us Holocaust Memorial Museum", 
"Us News And World Report", 
"USA", 
"USA Today", 
"USA Today Network", 
"USA Today Network - Louisiana", 
"USA Today Network - Tennessee", 
"USA Today Network / Gannett Co.", "Inc.", 
"USA Today Network Ã¢Â€Â¢ Gannett Co.", "Inc.", 
"USA Today Network-Tennessee", 
"USA Today Network-Wisconsin", 
"USA Today Network/Sports Media Group", 
"USA Today/ Gannett Co.", "Inc.", 
"USAtoday Network/Gannett Co.", "Inc.", 
"USAtoday/Gannett Co.", "Inc.", 
"Usc", 
"Usc Annenberg Media", 
"Usc Rossier School Of Education", 
"Ut Austin Moody College Of Communication", 
"Utep", 
"Val Hoeppner Media And Consulting", 
"Vcr", 
"Ventura County Star", 
"Verdens Gang", 
"Verizon", 
"Vermont Public Radio", 
"Verse", 
"Vg", 
"Vg / Faktisk.No", 
"Viafoura", 
"Viar Inc.", 
"Vice", 
"Videoship", 
"Vigilant", 
"Vignette Interactive", 
"Virginia Commonwealth University", 
"Vizrt Inc.", 
"Vlast.Kz Online Magazine", 
"Voa", 
"Voice Of America", 
"Vox", 
"Vox Media", 
"Vox Media", "Inc.", 
"Vox.Com", 
"Vpro", 
"Vtdigger.Org", 
"W NPR", 
"Wabe", 
"Walking Media", 
"Wall Street Journal", 
"Wallace House", "University Of Michigan", 
"Walt Disney Company", 
"Walter Cronkite School Of Journalism And Mass Communication (Arizona State Unive", 
"Wamu", 
"Wamu 88.5-American University", 
"Wamu 885", 
"Wamu-American University", 
"Wan-Ifra", 
"War On The Rocks", 
"Washington And Lee University", 
"Washington Business Journal", 
"Washington Examiner", 
"Washington Post", 
"Waterman Broadcasting", 
"Wayne State University", 
"Wbns 10Tv", 
"Wbns-10Tv", 
"Wbur", 
"Wbur", "Boston'S   NPRNews Station At Boston University", 
"Wcpo", 
"Wdiv Local 4", 
"Weber Shandwick", 
"Webmd", 
"Webmd - Medscape", 
"Wemap", 
"West Virginia University", 
"Western Michigan University", 
"Wfaa Tv", 
"Wfaa-Tv", "Tegna", 
"Wfae", 
"Wfae-Fm", 
"Wfiu/Wtiu News", 
"Wfsb", 
"Wftv- Cox Media Group", 
"Wfyi Public Media", 
"Wgbh Boston", 
"Wgbh News", 
"What The Fuck Just Happened Today", 
"What'S Up Prince William", 
"Whereby.Us", 
"Whyy", 
"Wibbitz", 
"Wikitribune", 
"Wired", 
"Wisc-Tv", 
"Wisc-Tv/Morgan Murphy Media", 
"Wisconsin Center For Investigative Journalism", 
"Wisconsin Public Radio", 
"Wisconsin Public Television", 
"Witf", 
"Wkbw / Wmar (Scripps)", 
"Wkmg-Tv", 
"Wkrc", "Sinclair Broadcast Group", 
"Wlrn", 
"Wlrn Public Media", 
"Wnet", 
"Wnyc", 
"Wnyc - New York Public Radio", 
"Wochit", 
"Wolf Pack Radio", 
"Wonderhowto", 
"Wordpress.Com Vip", 
"World Learning", 
"Wosu Public Media", 
"Wptv", 
"Wpvi-Tv/ABC Otv", 
"Wpxi", 
"Wpxi-Tv", 
"Wral-Tv", 
"Wral-Tv/Capitol Broadcasting", 
"Writer For Italian Press & Student At Pasadena City College", 
"Wsb-Tv", 
"Wsbtv.Com", 
"Wsoc-Tv", 
"Wthr", 
"Wtkr/Wgnt", 
"Wtop", 
"Wuft", 
"Wuft/University Of Florida", 
"WUSA9", 
"WUSA9 | Tegna", 
"WUSA9/Tegna", 
"Wuwm 89.7 Fm - Milwaukee Public Radio", 
"Wvu Reed College Of Media", 
"Wvxu-Fm", "Wmub-Fm", "Cincinnati Public Radio", 
"Www.The-Steppe.Com", 
"Wxia/ Tegna", 
"Wxin-Tv", 
"Wypr", 
"Xavier University Of Louisiana", 
"Xtra (Published By Pink Triangle Press)", 
"Yahoo", 
"Yahoo Japan Corporation", 
"Yahoo News", 
"Yahoo Sports", 
"Yahoo! Japan", 
"Yle", 
"Yle Finnish Broadcasting Co", 
"Yomiuri Tv", 
"York Daily Record", 
"Youth Radio", 
"Youtube", 
"Yuframe", 
"Zeit Digital Gmbh", 
"Zeit Online"
];

$('#publications .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'publications',
  source: substringMatcher(publications)
});
    });
 
  