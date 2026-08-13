export interface PostAuthor {
  name: string;
  role: string;
  bio: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: PostAuthor;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  keyTakeaways: string[];
  recommendedRacketIds?: string[];
  content: string[];
}

export const posts: Post[] = [
  {
    slug: 'padel-regeln-fuer-anfaenger',
    title: 'Padel Regeln für Anfänger: Alles, was du zum Start wissen musst',
    excerpt:
      'Vom Aufschlag bis zur Zählweise erklären wir dir die wichtigsten Padel-Regeln ganz einfach. So kannst du bereits nach zehn Minuten problemlos dein erstes Match auf dem Court starten.',
    category: 'Regeln',
    author: {
      name: 'Redaktion Padel-Pilot',
      role: 'Padel-Redaktion',
      bio: 'Wir testen und erklären Padel seit 2024. Unser Ziel lautet kompakt, verständlich und ohne Marketingfloskeln. So stehst du schneller auf dem Court.',
    },
    date: '12. Juli 2026',
    readTime: '7 Min.',
    image: 'https://images.pexels.com/photos/38155778/pexels-photo-38155778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Moderne Padel-Courts mit blauem Boden und Glaswänden',
    keyTakeaways: [
      'Padel wird immer im Doppel auf einem 10 mal 20 Meter großen Court gespielt',
      'Die Zählweise entspricht dem klassischen Tennis mit 15, 30, 40 und Game bei zwei Gewinnsätzen',
      'Der Aufschlag muss zwingend als Unterhandschlag ausgeführt werden',
      'Bälle dürfen von den Glaswänden abprallen und bleiben dadurch im Spiel',
    ],
    content: [
      'Padel ist eine faszinierende Mischung aus Tennis und Squash. Der Sport wird grundsätzlich im Doppel auf einem von Glaswänden umgebenen Feld gespielt. Die Padel-Regeln sind erstaunlich schnell gelernt. Die meisten Anfänger stehen nach einer kurzen Einweisung direkt im Match und haben sofort Spaß.',
      '<h2>Das Padel-Spielfeld und die Glaswände</h2><p>Ein regulärer Padel-Court ist exakt 20 Meter lang und 10 Meter breit. Er ist damit etwa ein Drittel kleiner als ein herkömmlicher Tennisplatz. Ein Netz teilt die Spielfläche in der Mitte. An den Längsseiten sowie den beiden Stirnseiten befinden sich Glaswände oder Gitter. Diese Wände sind ein aktiver Teil des Spielfelds. Bälle dürfen von der Scheibe abprallen und bleiben im Spiel, solange sie vorher im gegnerischen Feld auf dem Boden gelandet sind.</p>',
      '<h2>Padel Zählweise: Wer gewinnt das Match?</h2><p>Padel wird exakt wie Tennis gezählt. Die Punkteabfolge lautet 15, 30, 40 und Game. Ein Satz geht bis sechs gewonnene Spiele. Bei einem Spielstand von 6 zu 6 entscheidet ein Tiebreak über den Satzgewinn. Ein klassisches Match besteht in der Regel aus zwei Gewinnsätzen. Wer also zwei Sätze für sich entscheidet, verlässt den Platz als Sieger.</p>',
      '<h2>Die Aufschlag-Regeln im Padel</h2><p>Der Aufschlag erfolgt von hinten hinter der Aufschlaglinie und muss zwingend unterhand gespielt werden. Der Schläger darf den Ball also maximal auf Hüfthöhe treffen. Du musst den Ball diagonal in das Aufschlagfeld der gegnerischen Seite spielen. Dort darf der Ball genau einmal auf dem Boden aufkommen. Prallt er danach an die Glaswand, ist der Aufschlag absolut gültig. Trifft er jedoch direkt das metallene Gitter, gilt dies als Fehler.</p><p>Sollte der erste Versuch nicht im korrekten Feld landen oder im Netz hängen bleiben, hast du genau wie beim Tennis einen zweiten Aufschlag.</p>',
      '<h2>Bälle von der Wand spielen</h2><p>Der größte und spannendste Unterschied zum Tennis liegt in der Nutzung der Wände. Du darfst den Ball strategisch gegen deine eigene Glaswand spielen, um ihn über das Netz zu befördern. Außerdem darf dein Gegner den Ball von der Scheibe abprallen lassen. Wichtig ist dabei nur eine Grundregel. Der Ball darf auf deiner Seite maximal einmal auf dem Boden aufkommen, bevor du ihn schlägst. Du kannst ihn auch direkt aus der Luft als Volley nehmen.</p><p>Trifft der Ball jedoch die gegnerische Wand, bevor er auf dem Boden war, geht der Punkt sofort an die andere Seite. Diese spezielle Dynamik sorgt für die typischen langen und packenden Ballwechsel im Padel.</p>',
      '<h2>Wichtige Sonderregeln: Netzberührung und doppelter Aufprall</h2><p>Wenn der Ball zweimal auf deiner Seite auf dem Boden aufdotzt, verlierst du den Punkt. Berührt der Ball beim Spiel über das Netz die Netzkante und landet danach noch gültig im gegnerischen Feld, läuft das Spiel ganz normal weiter. Berührt jedoch ein Spieler das Netz mit seinem Schläger oder einem Körperteil, führt das zum direkten Punktverlust.</p><p>Mit diesen grundlegenden Padel-Regeln bist du bestens für dein allererstes Match gerüstet. Die taktischen Feinheiten kommen ganz von allein mit der nötigen Spielpraxis und dem passenden Schläger in der Hand.</p>',
    ],
  },
  {
    slug: 'padel-vs-tennis-die-unterschiede',
    title: 'Padel vs. Tennis: Die 7 wichtigsten Unterschiede einfach erklärt',
    excerpt:
      'Fester Schläger statt Saiten, spielbare Glaswände und Unterhand-Aufschlag. Wir vergleichen Padel und Tennis in den sieben entscheidenden Punkten und zeigen dir, welcher Sport besser zu dir passt.',
    category: 'Vergleich',
    author: {
      name: 'Redaktion Padel-Pilot',
      role: 'Padel-Redaktion',
      bio: 'Wir testen und erklären Padel seit 2024. Unser Ziel lautet kompakt, verständlich und ohne schnörkeligen Marketingtext. So stehst du schneller auf dem Court.',
    },
    date: '28. Juli 2026',
    readTime: '6 Min.',
    image: 'https://images.pexels.com/photos/18883859/pexels-photo-18883859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Padel-Schläger und Bälle im Vergleich auf dem Spielfeld',
    keyTakeaways: [
      'Padel-Schläger besitzen keine Saiten, sondern bestehen aus festem Schaumstoff mit Carbon-Oberfläche',
      'Das Spielfeld ist von Glaswänden umgeben, die aktiv als Bande in den Ballwechsel eingebunden werden',
      'Padel wird im Gegensatz zum Tennis fast ausschließlich zu viert im Doppel gespielt',
      'Der Aufschlag erfolgt unterhand auf Hüfthöhe und dient primär als ruhiger Eröffnungsschlag',
      'Einsteiger erzielen im Padel deutlich schneller erste Erfolge und lange Ballwechsel',
    ],
    content: [
      'Auf den ersten Blick wirken Padel und Tennis wie nahe Verwandte. Beide Sportarten nutzen ein Netz in der Mitte, ähnlich aussehende Filzbälle und dieselbe Zählweise von 15 bis Game. Wer jedoch zum ersten Mal von Tennis auf Padel wechselt, merkt schnell, dass sich das Spielgefühl komplett unterscheidet. Hier sind die sieben wichtigsten Unterschiede, die du vor deinem Start kennen solltest.',
      '<h2>1. Schlägerkonstruktion: Fester Carbon-Kopf statt Bespannung</h2><p>Im Tennis spielst du mit einem besaiteten Schläger, der durch die Saitenspannung viel Eigenkatapult erzeugt. Der Padel-Schläger besitzt dagegen keinerlei Saiten. Er besteht aus einem kompakten Schaumstoffkern mit gelochter Carbon- oder Glasfaseroberfläche. Dadurch spielst du den Ball nicht mit großer Ausholbewegung und Schwung, sondern mit kurzem, präzisem Ballkontakt und viel Gefühl.</p>',
      '<h2>2. Das Spielfeld und die Glaswände</h2><p>Ein Tennisplatz misst knapp 24 mal 11 Meter und ist nach außen hin offen. Fliegt der Ball über die weiße Linie, ist der Punkt vorbei. Ein Padel-Court ist mit 20 mal 10 Metern spürbar kleiner und komplett von transparenten Glaswänden sowie Metallgittern umschlossen. Das Geniale daran ist, dass die Scheiben aktiv bespielt werden dürfen. Der Ball bleibt im Spiel, wenn er nach dem Aufkommen am Boden gegen die Wand prallt.</p>',
      '<h2>3. Teamdynamik: Immer im Doppel auf dem Platz</h2><p>Während Tennis vor allem durch das klassische Einzel zwischen zwei Spielern geprägt ist, wird Padel fast ausnahmslos zu viert im Doppel gespielt. Das macht die Sportart extrem gesellig und erfordert viel Abstimmung mit dem Partner. Da das Feld kleiner ist und vier Spieler auf dem Platz stehen, fällt die reine Laufstrecke kürzer aus. Reaktionsschnelligkeit und gute Kommunikation sind hier wichtiger als reine Kondition.</p>',
      '<h2>4. Der Aufschlag: Taktischer Anstoß statt harter Waffe</h2><p>Im Tennis ist der Aufschlag von oben oft eine dominante Offensivwaffe mit sehr hohen Ballgeschwindigkeiten. Im Padel wird der Aufschlag zwingend unterhand auf oder unterhalb der Hüfthöhe ausgeführt. Der Ball muss vorher einmal auf dem Boden aufdotzen. Der Aufschlag dient im Padel lediglich als kontrollierter Eröffnungsschlag, um den Ballwechsel sicher in Gang zu bringen. Ein direktes Aufschlagass gibt es im Padel extrem selten.</p>',
      '<h2>5. Ballwechsel und Bandenspiele</h2><p>Im Tennis endet ein Ballwechsel sofort, sobald der Ball die Grundlinie überschreitet. Im Padel fängt der Spaß an der Glaswand erst richtig an. Du kannst den Ball abprallen lassen und ihn im Nachfassen spielen oder ihn sogar direkt von hinten gegen deine eigene Scheibe schlagen, um ihn über das Netz zu befördern. Das sorgt für erstaunlich lange Ballwechsel und spektakuläre Rettungsaktionen.</p>',
      '<h2>6. Die Lernkurve: Schneller Einstieg für Anfänger</h2><p>Tennis verlangt Anfängern eine lange Lernphase ab, da saubere Schlagtechniken, Fußarbeit und die Ballkontrolle auf dem großen Feld viel Training erfordern. Padel zeichnet sich durch eine extrem flache Lernkurve aus. Durch den kürzeren Schläger und den verzeihenden Court bekommen selbst Neulinge bereits in der ersten Stunde flüssige Ballwechsel hin. Das sorgt für einen extrem hohen Spaßfaktor ab Minute eins.</p>',
      '<h2>7. Bewegungsmuster und körperliche Belastung</h2><p>Tennis fordert lange Sprintwege an der Grundlinie und weite Ausholbewegungen, was vor allem die Schulter stark beansprucht. Padel ist ein extrem reflexorientierter Stop-and-Go-Sport mit vielen kurzen Ausfallschritten und Volleys direkt am Netz. Die körperliche Belastung verteilt sich durch das Doppel gleichmäßiger, weshalb Padel auch für Quereinsteiger oder ältere Sportler extrem attraktiv ist.</p>',
      '<h2>Fazit: Welche Sportart passt besser zu dir?</h2><p>Wenn du taktische Ballwechsel im Team liebst, gerne am Netz agierst und schnelle Erfolgserlebnisse ohne jahrelanges Techniktraining suchst, wirst du Padel absolut lieben. Wer dagegen das direkte Eins-gegen-Eins, maximale Laufarbeit und kräftige Grundlinienschläge bevorzugt, bleibt beim Tennis. Beide Sportarten ergänzen sich allerdings hervorragend und schulen gegenseitig das Ballgefühl.</p>',
    ],
  },
  {
    slug: 'welche-schuhe-brauche-ich-fuer-padel',
    title: 'Welche Schuhe brauche ich für Padel? Der komplette Guide',
    excerpt:
      'Normale Laufschuhe sind auf dem Court gefährlich. Wir erklären dir genau, worauf du bei Padel-Schuhen achten musst, damit du perfekten Grip hast und Verletzungen vermeidest.',
    category: 'Ausrüstung',
    author: {
      name: 'Redaktion Padel-Pilot',
      role: 'Padel-Redaktion',
      bio: 'Wir testen und erklären Padel seit 2024. Unser Ziel lautet kompakt, verständlich und ohne schnörkeligen Marketingtext. So stehst du schneller auf dem Court.',
    },
    date: '3. August 2026',
    readTime: '5 Min.',
    image: 'https://images.pexels.com/photos/5739154/pexels-photo-5739154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Spezielle Sportschuhe und Schläger auf dem Court',
    keyTakeaways: [
      'Normale Laufschuhe sind auf dem Court tabu, da ihnen die nötige Seitenstabilität fehlt',
      'Ein spezielles Omni-Profil bietet die beste Traktion auf Kunstrasen mit Quarzsand',
      'Verstärkte Seitenwände und Fersenkappen schützen effektiv vor schmerzhaftem Umknicken',
      'Padel-Schuhe sollten eng am Fuß anliegen und ein Gesamtgewicht von unter 350 Gramm aufweisen',
      'Gute Einsteiger-Modelle starten bereits ab ca. 60 Euro',
    ],
    content: [
      'Die Wahl der passenden Schuhe ist beim Padel keineswegs nur eine Frage des persönlichen Komforts. Padel verlangt deinen Füßen extrem abrupte Stopps, schnelle Richtungswechsel und seitliche Ausfallschritte ab. Wer hier mit ungeeignetem Schuhwerk auf den Platz geht, büßt spürbar an Performance ein und erhöht das Verletzungsrisiko drastisch.',
      '<h2>Warum normale Laufschuhe auf dem Padel-Court gefährlich sind</h2><p>Laufschuhe wurden ausschließlich für die geradlinige Vorwärtsbewegung entwickelt. Sie besitzen eine dicke, nach vorne abrollende Sohle und bieten so gut wie keine seitliche Führung. Auf dem Padel-Platz führt das schnell zu Problemen. Bei schnellen Seitwärtsschritten oder abrupten Stopps auf dem sandigen Kunstrasen rutscht der Fuß im Schuh weg oder knickt nach außen um. Das Risiko für Bänderdehnungen im Sprunggelenk steigt dadurch enorm an.</p>',
      '<h2>Das optimale Sohlenprofil für Sand und Kunstrasen</h2><p>Die meisten modernen Padel-Courts bestehen aus einem Kunstrasen, der mit einer feinen Schicht aus Quarzsand eingestreut ist. Für diesen speziellen Untergrund benötigst du das richtige Profil an der Unterseite deines Schuhs:</p><ul><li><strong>Omni-Profil (Stollen):</strong> Kleine, pfeilartige Stollen sorgen für exzellenten Grip in alle Richtungen. Diese Sohle gilt als die absolute Allround-Empfehlung für klassische Padel-Courts.</li><li><strong>Fischgrätenprofil (Herringbone):</strong> Dieses Zickzack-Muster kennst du vielleicht vom Sandplatz-Tennis. Es bietet extrem starken Halt bei Vorwärts- und Rückwärtsbewegungen und lässt dich kontrolliert in den Ball rutschen.</li><li><strong>Gemischte Sohlen (Hybrid):</strong> Viele Hersteller wie Asics, Bullpadel oder Babolat kombinieren heute Omni-Elemente im Vorfußbereich mit einem Fischgrätenmuster an der Ferse für perfekte Traktion.</li></ul>',
      '<h2>Dämpfung und Schutz vor Umknicken</h2><p>Padel ist ein intensiver Stop-and-Go-Sport. Bei jedem Sprung und jedem abrupten Ausfallschritt wirken hohe Kräfte auf deine Gelenke. Eine gut abgestimmte Gel- oder Schaumdämpfung im Fersenbereich fängt diese Stöße zuverlässig ab. Noch wichtiger ist allerdings die Seitenstabilität. Achte beim Kauf auf eine hochgezogene Außensohle sowie eine feste Fersenkappe. Diese Elemente halten deinen Fuß fest in der Spur und verhindern schmerzhaftes Umknicken.</p>',
      '<h2>Passform und Gewicht: So findest du die richtige Größe</h2><p>Padel-Schuhe müssen deutlich fester und kompakter sitzen als normale Freizeitschuhe. Wenn dein Fuß im Schuh hin und her rutscht, verlierst du wertvolle Bruchteile einer Sekunde beim Antritt und riskierst schmerzhafte Blasen an den Zehen. Das Gewicht sollte im Idealfall unter 350 Gramm liegen, um deine Beinarbeit nicht unnötig zu verlangsamen. Ein bewährter Praxistipp lautet: Probiere neue Schuhe am besten am späten Nachmittag an. Deine Füße sind dann durch die alltägliche Belastung leicht angeschwollen, was der Situation nach einer Stunde auf dem Court sehr nahekommt.</p>',
      '<h2>Preisklassen: Wie viel musst du ausgeben?</h2><p>Solide Einsteiger-Modelle bekannter Sportmarken starten bereits zwischen 60 und 80 Euro und bieten alle wichtigen Sicherheitsmerkmale. Wer zwei bis drei Mal pro Woche auf dem Platz steht, sollte etwa 100 bis 130 Euro investieren. In diesem Bereich bekommst du deutlich langlebigere Sohlenmischungen und höherwertige Dämpfungssysteme. Premium-Schuhe ab 150 Euro richten sich an Turnierspieler, die das absolute Maximum an Stabilität und Haltbarkeit suchen.</p><p>Mit dem passenden Padel-Schuh schützt du deine Gesundheit, bewegst dich spürbar schneller über den Platz und holst das Beste aus deinem Spiel heraus.</p>',
    ],
  },
  {
    slug: 'padel-schlaegerformen-vergleich-diamant-tropfen-rund',
    title: 'Padel Schlägerformen im Vergleich: Diamant, Tropfen oder Rund',
    recommendedRacketIds: ['1', '3'],
    excerpt:
      'Welche Schlägerform passt zu deinem Spielstil? Wir vergleichen Diamant, Tropfen und Rund in puncto Power, Kontrolle und Sweet Spot.',
    category: 'Kaufberatung',
    author: {
      name: 'Redaktion Padel-Pilot',
      role: 'Padel-Redaktion',
      bio: 'Wir testen und erklären Padel seit 2024. Unser Ziel: kompakt, verständlich und ohne Marketing-Blabla — damit du schneller auf dem Court stehst.',
    },
    date: '5. August 2026',
    readTime: '6 Min.',
    image: 'https://images.pexels.com/photos/35646550/pexels-photo-35646550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Padel-Spieler mit Schläger und Ball auf blauem Court',
    keyTakeaways: [
      'Runde Form: maximale Kontrolle, großer Sweet Spot — ideal für Anfänger',
      'Diamantform: maximale Power, kleiner Sweet Spot — für Fortgeschrittene',
      'Tropfenform: vielseitiger Allrounder aus Kontrolle und Power',
      'Die Gewichtsverteilung (grifflastig vs. kopflastig) bestimmt das Spielgefühl',
    ],
    content: [
      'Die Kopfform deines Padel-Schlägers ist die wichtigste Entscheidung beim Kauf. Sie bestimmt, wo das Hauptgewicht des Schlägers liegt, wie groß der Sweet Spot ausfällt und wie viel Kontrolle oder Power du auf den Ball bekommst.',
      '<h2>1. Die runde Form: Maximale Kontrolle &amp; großer Sweet Spot</h2><p>Runde Schläger besitzen einen zentral gelegenen, sehr großzügigen Sweet Spot. Das bedeutet: Auch Bälle, die nicht exakt in der Mitte getroffen werden, fliegen noch kontrolliert über das Netz.</p><p>Die Balance liegt meist nah am Griff (grifflastig), was den Schläger extrem wendig und armschonend macht. Runde Schläger sind die perfekte Wahl für Anfänger, defensive Taktiker und alle, die Ballkontrolle über rohe Power stellen.</p>',
      '<h2>2. Die Diamantform: Maximale Power für Angriffslustige</h2><p>Schläger in Diamantform sind auf kompromisslose Offensivkraft ausgelegt. Der Sweet Spot wandert weit nach oben an die Spitze des Schlägers und fällt deutlich kleiner aus.</p><p>Durch die kopflastige Gewichtsverteilung entsteht bei Smashes und Banderas ein enormer Hebel. Allerdings verzeiht diese Form kaum Treffunsicherheiten. Wir empfehlen Diamant-Schläger daher ausschließlich fortgeschrittenen Spielern mit sauberer Schlagtechnik.</p>',
      '<h2>3. Die Tropfenform (Teardrop): Der vielseitige Allrounder</h2><p>Die Tropfenform ist der goldene Mittelweg zwischen Rund und Diamant. Der Sweet Spot liegt leicht oberhalb der Mitte, und die Balance ist ausgewogen verteilt.</p><p>Mit einem Tropfen-Schläger bekommst du genug Wumms für Angriffsschläge am Netz, behältst aber in der Defensive an der Grundlinie die volle Kontrolle. Ein idealer Allrounder für ambitionierte Spieler.</p>',
      '<h2>Fazit: Welche Form solltest du wählen?</h2><p>Anfänger und Spieler mit Armproblemen fahren mit einer <strong>runden Form</strong> (wie der <em>Head Motion Pro</em>) am sichersten. Wer Allround-Eigenschaften sucht, wählt die <strong>Tropfenform</strong>. Aggressive Netzspieler mit solider Technik holen mit der <strong>Diamantform</strong> (wie der <em>Babolat Technical Viper</em>) das Maximum heraus.</p>',
    ],
  },
  {
    slug: 'padel-schlagarten-bandeja-vibora-chiquita-erklaert',
    title: 'Die wichtigsten Padel Schlagarten: Bandeja, Vibora & Chiquita einfach erklärt',
    excerpt:
      'Was unterscheidet eine Bandeja von einer Vibora? Wir erklären dir die typischen Padel-Schläge, wann du sie taktisch einsetzt und wie du damit das Netz kontrollierst.',
    category: 'Technik',
    author: {
      name: 'Redaktion Padel-Pilot',
      role: 'Padel-Redaktion',
      bio: 'Wir testen und erklären Padel seit 2024. Unser Ziel lautet kompakt, verständlich und ohne schnörkeligen Marketingtext. So stehst du schneller auf dem Court.',
    },
    date: '21. Juli 2026',
    readTime: '6 Min.',
    image: 'https://images.pexels.com/photos/8007133/pexels-photo-8007133.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Padel-Spieler bereitet einen Überkopfschlag am Netz vor',
    keyTakeaways: [
      'Die Bandeja ist ein defensiver Überkopfschlag, der dir hilft, die wichtige Netzposition zu halten',
      'Die Vibora erzeugt extremen Seitwärtsspin, wodurch der Ball an der gegnerischen Glaswand flach abtaucht',
      'Die Chiquita ist ein weicher Präzisionsschlag direkt vor die Füße der gegnerischen Netzspieler',
      'Klassische Smashes werden im Padel gezielt für Kick-Schläge über die Außenwand genutzt',
    ],
    content: [
      'Wer vom Tennis zum Padel wechselt, versucht anfangs oft, hohe Bälle mit einem klassischen, harten Schmetterball zu beantworten. Auf dem Padel-Court führt das meistens dazu, dass der Ball von der gegnerischen Scheibe abprallt und dem Gegner als Einladung für einen leichten Gegenangriff dient. Um auf dem Platz erfolgreich zu sein, musst du die speziellen Padel-Schlagarten kennen. Wir stellen dir die wichtigsten Schläge und ihre taktische Nutzung vor.',
      '<h2>1. Die Bandeja: Der unverzichtbare Sicherheitsschlag</h2><p>Das spanische Wort Bandeja bedeutet übersetzt Tablett. Diese Bezeichnung beschreibt die Bewegung perfekt. Bei diesem Überkopfschlag triffst du den Ball seitlich auf Kopf- oder Schulterhöhe mit leicht geöffneter Schlägerfläche, als würdest du ein Tablett tragen. Die Bandeja wird gespielt, wenn der Gegner einen mittelhohen Lob ansetzt, der nicht tief genug für einen harten Smash ist.</p><p>Das Hauptziel der Bandeja ist nicht der direkte Punktgewinn, sondern die Verteidigung der Netzposition. Durch den leichten Rückwärtsdrall fliegt der Ball kontrolliert tief in das gegnerische Feld und springt an der Glaswand nur sehr niedrig ab. Dadurch kann der Gegner nicht angreifen und du behältst zusammen mit deinem Partner die Kontrolle am Netz.</p>',
      '<h2>2. Die Vibora: Der giftige Schlangenbiss mit Seitwärtsspin</h2><p>Die Vibora ist die aggressive Schwester der Bandeja. Das Wort steht im Spanischen für Viper oder Kreuzotter. Während die Bandeja primär der Sicherheit dient, setzt du die Vibora als echten Angriffsschlag ein. Du triffst den Ball seitlich auf Kopfhöhe und gibst ihm durch eine wischende Bewegung aus dem Handgelenk extremen Seitwärtsspin mit.</p><p>Wenn eine gut platzierte Vibora die gegnerische Glaswand trifft, verspringt der Ball unberechenbar zur Seite und taucht nach unten weg. Für die Verteidiger ist es extrem schwer, diesen flach abtauchenden Ball noch kontrolliert über das Netz zu heben.</p>',
      '<h2>3. Die Chiquita: Der sanfte Aushebler aus der Defensive</h2><p>Das Wort Chiquita bedeutet klein oder winzig. Genau so wird dieser Schlag auch ausgeführt. Wenn du an der Grundlinie unter Druck stehst und die gegnerischen Spieler fest am Netz stehen, spielst du einen sehr weichen, feinfühligen Ball kurz über das Netz direkt vor die Füße der Gegner.</p><p>Da der Ball direkt hinter dem Netz nach unten fällt, können die Gegner ihn nicht nach unten wegdrücken. Sie sind gezwungen, den Ball von unten nach oben zu spielen. Das gibt dir und deinem Partner das perfekte Zeitfenster, um von der Grundlinie nach vorne ans Netz zu rücken und die Initiative im Ballwechsel zu übernehmen.</p>',
      '<h2>4. Der Padel-Smash: Mehr als nur rohe Gewalt</h2><p>Ein harter Schmetterball wird im Padel ganz anders eingesetzt als im Tennis. Wenn du einfach nur fest draufschlägst, prallt der Ball an der Rückwand ab und fliegt in hohem Bogen zurück in die Platzmitte. Ein Smash lohnt sich vor allem in zwei speziellen Varianten:</p><ul><li><strong>Por Tres (Por 3):</strong> Du triffst den Ball mit viel Topspin so tief im Feld, dass er nach dem Aufprall an der Scheibe über die drei Meter hohe Seitenwand aus dem Platz springt.</li><li><strong>Rückhand-Smash in den eigenen Platz:</strong> Der Ball wird so hart auf die gegnerische Seite geschlagen, dass er von der Scheibe zurück über das Netz auf deine eigene Spielfeldseite fliegt, ohne dass der Gegner ihn erreichen kann.</li></ul>',
      '<h2>Fazit: Schritt für Schritt die Schläge ins eigene Spiel integrieren</h2><p>Als Anfänger und Fortgeschrittener solltest du deine Energie zuerst in eine saubere Bandeja und eine präzise Chiquita stecken. Diese beiden Schläge bilden das Fundament für ein erfolgreiches taktisches Spiel. Wenn die Sicherheit da ist, kannst du die risikoreichere Vibora und spezielle Smash-Varianten ergänzen, um deinen Gegnern das Leben am Netz schwer zu machen.</p>',
    ],
  },
  {
    slug: 'padel-overgrip-griffstaerke-anpassen-guide',
    title: 'Padel Overgrip & Griffstärke: So verhinderst du Fehler & Armschmerzen',
    excerpt:
      'Zu dünner Griff, rutschige Hände oder Ellenbogenschmerzen? Warum fast kein Padel-Schläger im Originalzustand gespielt wird und wie du die Griffstärke perfekt anpasst.',
    category: 'Ausrüstung',
    author: {
      name: 'Redaktion Padel-Pilot',
      role: 'Padel-Redaktion',
      bio: 'Wir testen und erklären Padel seit 2024. Unser Ziel: kompakt, verständlich und ohne Marketing-Blabla — damit du schneller auf dem Court stehst.',
    },
    date: '4. August 2026',
    readTime: '6 Min.',
    image: 'https://images.pexels.com/photos/32896996/pexels-photo-32896996.jpeg',
    imageAlt: 'Hand umgreift einen Padel-Schlägergriff mit frischem Overgrip',
    keyTakeaways: [
      'Originalgriffe ab Werk sind fast immer zu dünn und führen zum Verkrampfen',
      'Zeigefinger-Test: Zwischen Fingerspitzen und Handballen muss ein Zeigefinger passen',
      'Overgrips sorgen für klebrigen Grip, Schweißaufnahme und Vibrationsdämpfung',
      'Faustregel: So oft du pro Woche spielst, so oft solltest du im Monat das Griffband wechseln',
    ],
    content: [
      'Wer seinen nagelneuen Padel-Schläger auspackt und direkt so auf den Court geht, macht einen der häufigsten Anfängerfehler. Anders als beim Tennis werden Padel-Schläger fast ausnahmslos in einer Einheits-Griffgröße geliefert. Für 90 % aller Spieler ist dieser Werksgriff schlichtweg zu dünn.',
      '<h2>1. Warum der Basisgriff alleine fast nie reicht</h2><p>Der ab Werk montierte Basisgriff (Basegrip) dient vor allem als Polsterung über dem nackten Carbon des Schlägerherzens. Er saugt Schweiß jedoch schlecht auf und nutzt sich extrem schnell ab. Ein zusätzlicher <strong>Overgrip</strong> erfüllt drei wesentliche Aufgaben:</p><ul><li>Er baut die nötige Griffdicke auf, damit deine Hand entspannt schließen kann.</li><li>Er bietet klebrigen Halt (Tacky) oder hohe Saugfähigkeit bei schwitzigen Händen.</li><li>Er dämpft feine Vibrationen ab, bevor sie im Unterarm ankommen.</li></ul>',
      '<h2>2. Der Zeigefinger-Test: Ist dein Griff zu dünn?</h2><p>Ein zu dünner Griff ist der Hauptauslöser für den gefürchteten <strong>Padel-Ellenbogen (Tennisarm)</strong>. Wenn der Griff zu schmal ist, musst du die Finger krampfhaft zusammendrücken, um das Verdrehen des Schlägers bei Off-Center-Hits zu verhindern. Diese Dauerfehlbelastung geht direkt auf die Sehnenansätze im Unterarm.</p><p><strong>So testest du die richtige Dicke:</strong> Umfasse den Schläger ganz normal mit deiner Spielhand. Zwischen deinen Fingerspitzen und dem Handballen sollte exakt der Zeigefinger deiner anderen Hand hineinpassen. Berühren die Fingerspitzen deinen Handballen, ist der Griff definitiv zu dünn – du brauchst mindestens einen weiteren Overgrip.</p>',
      '<h2>3. Overgrip richtig wickeln: Schritt für Schritt</h2><p>Das Aufwickeln ist kein Hexenwerk, erfordert aber etwas Übung:</p><ol><li><strong>Start am Griffende:</strong> Entferne die Schutzfolie vom Overgrip. Das schmale, meist angeschrägte Ende mit dem kleinen Klebestreifen kommt ganz unten an die Griffkappe.</li><li><strong>Zug &amp; Überlappung:</strong> Wickle den Grip rechtshändig (für Rechtshänder) von unten nach oben. Halte das Band leicht auf Zug und überlappe die vorherige Runde um etwa 3 bis 4 Millimeter.</li><li><strong>Abschluss:</strong> Wenn du oben am Schlägerherz ankommst, schneidest du das Band schräg ab und fixierst es mit dem mitgelieferten Klebestreifen (Finishing Tape).</li></ol>',
      '<h2>4. Spezialfall Hesacore &amp; Waben-Grips: Lohnt sich das?</h2><p>Immer beliebter werden strukturierte Ergonomie-Griffe wie das <em>Hesacore-Grip</em>. Hierbei wird der originale Basisgriff entfernt und durch ein Silikon-Wabengitter ersetzt. Darüber kommt dann wie gewohnt ein dünner Overgrip.</p><p>Diese Wabenstruktur vergrößert die Kontaktfläche der Handinnenfläche und verhindert, dass der Schläger in der Hand rutscht oder verdreht – ohne dass du fester zudrücken musst. Für Spieler mit Neigung zu Sehnenentzündungen oder sehr schwitzigen Händen ist das eine der besten Investitionen auf dem Markt.</p>',
      '<h2>5. Wie oft muss ein Overgrip gewechselt werden?</h2><p>Ein abgenutzter Overgrip verliert seine Klebrigkeit. Du fängst unbewusst wieder an, fester zuzudrücken – das Spielgefühl leidet und der Arm ermüdet schneller.</p><p><strong>Als Faustregel gilt:</strong> So oft, wie du pro Woche auf dem Court stehst, so oft solltest du den Overgrip pro Monat wechseln. Spielst du 2-mal die Woche Padel, wechselst du dein Griffband also alle 14 Tage. Profis und Vielspieler wechseln das Band sogar nach jedem zweiten Match.</p>',
      '<h2>Fazit: Kleine Investition, riesige Wirkung</h2><p>Ein guter Overgrip kostet 2 bis 3 Euro, verändert das Spielgefühl aber dramatisch. Wer mit der richtigen Griffstärke spielt, schont seine Gelenke, hat mehr Ballgefühl bei Touch-Schlägen am Netz und verhindert krampfbedingte Armschmerzen. Teste bei deinem nächsten Match einfach mal, ob du mit einem zweiten Overgrip entspannter greifen kannst!</p>',
    ],
  },
  {
  slug: 'padel-ellenbogen-ursachen-vorbeugen-behandeln',
  title: 'Padel-Ellenbogen: Ursachen, Symptome und die besten Übungen zur Vorbeugung',
     recommendedRacketIds: ['2', '3'],
  excerpt:
    'Der Padel-Ellenbogen ist die häufigste Verletzung im Padel überhaupt. Wir erklären dir, wie die Reizung entsteht, woran du sie früh erkennst und mit welchen Übungen und Anpassungen du dauerhaft schmerzfrei spielst.',
  category: 'Gesundheit',
  author: {
    name: 'Redaktion Padel-Pilot',
    role: 'Padel-Redaktion',
    bio: 'Wir testen und erklären Padel seit 2024. Unser Ziel: kompakt, verständlich und ohne Marketing-Blabla, damit du schneller auf dem Court stehst.',
  },
  date: '13. August 2026',
  readTime: '7 Min.',
  image: 'https://images.pexels.com/photos/37980449/pexels-photo-37980449.jpeg',
  imageAlt: 'Spieler hält sich nach einem Padel-Match den schmerzenden Ellenbogen',
  keyTakeaways: [
    'Der Ellenbogen ist laut einer systematischen Review aus dem Jahr 2023 die mit Abstand häufigste Verletzungsstelle im Padel',
    'Bei italienischen Freizeitspielern betrifft die Beschwerde etwa 14 Prozent aller registrierten Verletzungen',
    'Die Reizung entsteht fast immer schleichend durch Überlastung, nicht durch einen einzelnen Schlag oder Sturz',
    'Ein zu dünner Griff, ein kopflastiger Schläger und eine gebogene Handgelenksposition beim Treffpunkt erhöhen das Risiko deutlich',
    'Exzentrisches Training der Unterarmstrecker gilt in der Sportmedizin als eine der am besten belegten Vorbeugemaßnahmen',
  ],
  content: [
    'Es beginnt meist unauffällig. Nach dem Training zieht es kurz am äußeren Ellenbogen, am nächsten Tag ist es wieder weg und du denkst dir nichts dabei. Wochen später tut plötzlich schon das Kaffeetasse-Heben weh und an einen Aufschlag mit voller Kraft ist gar nicht mehr zu denken. Der Padel-Ellenbogen zählt zu den unterschätztesten Problemen im gesamten Sport, dabei lässt er sich mit dem richtigen Wissen in den meisten Fällen gut in den Griff bekommen.',
    '<h2>Was genau ist der Padel-Ellenbogen?</h2><p>Medizinisch handelt es sich um eine Epicondylitis lateralis, besser bekannt unter dem Namen Tennisarm. Dabei entzünden sich die Sehnenansätze der Unterarm-Streckmuskulatur am äußeren Knochenvorsprung des Ellenbogens, der sogenannten lateralen Epikondyle. Jede Streckbewegung des Handgelenks, wie sie bei praktisch jedem Padel-Schlag vorkommt, belastet genau diese Sehnenansätze. Wiederholt sich diese Belastung oft genug ohne ausreichende Erholung, entstehen winzige Mikroverletzungen im Gewebe, die sich mit der Zeit zu einer echten Reizung auswachsen.',
    '<h2>Wie verbreitet ist das Problem wirklich?</h2><p>Die Zahlen sprechen eine klare Sprache. Eine systematische Review, die 2023 im Fachjournal BMJ Open Sport & Exercise Medicine erschienen ist, wertete mehrere Studien zu Padel-Verletzungen aus und kam zu dem Ergebnis, dass der Ellenbogen die häufigste Verletzungsregion im gesamten Sport darstellt. Eine italienische Untersuchung unter Freizeitspielern bezifferte den Anteil der Ellenbogenbeschwerden an allen Verletzungen auf rund 14 Prozent, andere Schätzungen gehen von etwa jeder fünften Padel-Verletzung aus, die den Ellenbogen betrifft.</p><p>Wichtig zur Einordnung: Padel gilt insgesamt als vergleichsweise sicherer Sport mit relativ wenigen Verletzungen pro gespielter Stunde. Das Tückische am Padel-Ellenbogen ist eher die schleichende Entstehung. In einer ausgewerteten Kohorte begannen etwa 86 Prozent der Fälle graduell, also ohne ein einzelnes auslösendes Ereignis. Genau das macht die Beschwerde so gefährlich, weil sie lange ignoriert wird, bevor sie ernst genommen wird.</p>',
    '<h2>Warum trifft es Padel-Spieler besonders häufig?</h2><p>Ein wesentlicher Unterschied zum klassischen Tennisarm liegt in der Schlägerkonstruktion. Ein Tennisschläger federt den Ballaufprall über die gespannten Saiten spürbar ab. Der Padel-Schläger besitzt keine Saiten, sondern eine feste, gelochte Fläche aus Carbon oder Glasfaser über einem Schaumstoffkern. Ohne die dämpfende Bespannung wandert ein deutlich größerer Anteil der Aufprallenergie als Vibration direkt in Handgelenk und Unterarm.</p><p>Hinzu kommt die Spielcharakteristik. Im Padel dominieren kurze Hebelbewegungen aus dem Handgelenk, häufige Reaktionsschläge nach Wandabprallern und lange Ballwechsel im Doppel. Ein intensives Match bringt es locker auf mehrere hundert Schlagkontakte, und jede einzelne Vibration summiert sich am selben Sehnenansatz. Mehrere Risikofaktoren treten dabei besonders häufig gemeinsam auf:</p><ul><li><strong>Gebogenes Handgelenk beim Treffpunkt:</strong> Viele Einsteiger treffen den Ball mit angewinkeltem statt stabilisiertem Handgelenk, was die Belastung auf den Ellenbogen deutlich erhöht.</li><li><strong>Zu fester Griffdruck:</strong> Ein dünner Originalgriff oder Nervosität führen dazu, dass der Schläger die ganze Zeit über fest umklammert wird, statt locker gehalten zu werden.</li><li><strong>Kopflastige Schläger:</strong> Liegt das Gewicht stark am Kopf des Schlägers, wirkt er wie ein längerer Hebel auf den noch untrainierten Unterarm.</li><li><strong>Schnelle Belastungssteigerung:</strong> Wer von null auf drei oder vier Einheiten pro Woche springt, überfordert seine Sehnen, die sich viel langsamer anpassen als Muskeln und Kondition.</li><li><strong>Schlagen statt Schieben:</strong> Anfänger neigen dazu, den Ball mit viel Arm- und Schlägeraktion zu treffen, statt die Kraft aus der Rumpfrotation und den Beinen zu holen.</li></ul>',
    '<h2>Die typischen Symptome im Verlauf</h2><p>Der Padel-Ellenbogen entwickelt sich fast immer in Stufen, und je früher du reagierst, desto kürzer bleibt die Ausfallzeit.</p><ul><li><strong>Frühphase:</strong> Ein leichtes Ziehen am äußeren Ellenbogen, das nur nach dem Spiel auftritt und meist bis zum nächsten Tag wieder verschwindet.</li><li><strong>Mittlere Phase:</strong> Der Schmerz tritt schon während des Spiels bei bestimmten Schlägen auf, etwa bei der Rückhand oder beim Smash, und die Kraft in der Hand lässt spürbar nach.</li><li><strong>Fortgeschrittene Phase:</strong> Alltagsbewegungen wie Händeschütteln, eine Flasche öffnen oder eine Tasse heben tun weh, der Schmerz kann in den Unterarm ausstrahlen und bleibt auch in Ruhephasen bestehen.</li></ul><p>Solltest du Schmerzen bemerken, die länger als zwei Wochen bestehen, trotz Pause wiederkehren oder bereits den Alltag einschränken, ist der Gang zum Arzt oder zur Physiotherapie sinnvoll. Nächtliche Schmerzen, sichtbare Schwellungen, deutlicher Kraftverlust oder Kribbeln in den Fingern sollten zeitnah abgeklärt werden, da Letzteres auch auf eine Nervenbeteiligung hinweisen kann.</p>',
    '<h2>Die richtige Ausrüstung als erste Verteidigungslinie</h2><p>Bevor du überhaupt an Übungen denkst, lohnt sich ein Blick auf dein Material. Drei Stellschrauben machen hier den größten Unterschied:</p><ul><li><strong>Schlägergewicht:</strong> Einsteiger und Spieler mit Vorbelastung fahren mit leichteren Modellen zwischen 350 und 365 Gramm deutlich besser als mit schweren Turnierschlägern.</li><li><strong>Balance und Kernhärte:</strong> Ein ausgewogen balancierter Schläger mit weicherem Schaumkern dämpft Vibrationen spürbar besser als ein kopflastiges, auf maximale Power ausgelegtes Modell.</li><li><strong>Griffstärke:</strong> Ein zu dünner Griff zwingt zu festerem Zupacken und erhöht damit die Dauerspannung im Unterarm. Ein zusätzlicher Overgrip schafft hier oft schon merkliche Entlastung.</li></ul><p>Wer sich unsicher ist, welche Schlägerform und Griffstärke zu ihm passt, findet in unserem Vergleich der Padel-Schlägerformen und unserem Overgrip-Guide die passenden Grundlagen dazu.</p>',
    '<h2>Vier Übungen, die deinen Ellenbogen wirklich schützen</h2><p>In der Sportmedizin gilt exzentrisches Krafttraining der Unterarmstrecker als eine der am besten belegten Maßnahmen gegen Tennisarm-Beschwerden. Die folgenden vier Übungen lassen sich ohne Studio und mit wenig Zeitaufwand zu Hause umsetzen.</p><ul><li><strong>Exzentrisches Handgelenk-Strecken:</strong> Halte eine leichte Hantel oder Wasserflasche mit dem Handrücken nach oben, hebe das Handgelenk mit der freien Hand an und lasse es dann langsam über drei bis vier Sekunden von selbst absinken. Drei Sätze mit fünfzehn Wiederholungen, drei Mal pro Woche, gelten als Standardprotokoll.</li><li><strong>Unterarmrotation mit Band:</strong> Fixiere ein Widerstandsband und drehe den Unterarm langsam von der Handfläche nach unten zur Handfläche nach oben und zurück. Das kräftigt die tief liegende Rotationsmuskulatur, die beim Treffpunkt von Vibora und Bandeja stark gefordert wird.</li><li><strong>Griffkraft-Training:</strong> Ein einfacher Handtrainer oder ein zusammengeknüllter Ball für zehn bis fünfzehn Wiederholungen baut die Grundkraft auf, die für einen entspannten statt verkrampften Griff auf dem Court nötig ist.</li><li><strong>Mobilisation vor dem Spiel:</strong> Kreise Handgelenke und Schultern jeweils zehn Mal in beide Richtungen und schlage dich fünf Minuten locker ein, bevor du das Tempo steigerst. Strukturiertes Aufwärmen ist die in Studien am klarsten empfohlene Einzelmaßnahme zur Vorbeugung von Ellenbogenproblemen.</li></ul>',
    '<h2>Technik anpassen: Schieben statt schlagen</h2><p>Ein entscheidender, oft übersehener Unterschied zwischen Tennis und Padel liegt darin, wie der Ball getroffen wird. Im Tennis wird der Ball häufig mit viel Schwung geschlagen, im Padel dagegen eher aus der Rumpfrotation heraus geschoben. Wer stattdessen versucht, mit reiner Arm- und Handgelenkskraft Tempo zu erzeugen, überlastet genau die Strukturen, die den Padel-Ellenbogen verursachen.</p><p>Zwei einfache technische Anpassungen bringen oft schon deutliche Entlastung. Erstens den Ball möglichst nah vor dem Körper treffen statt seitlich mit ausgestrecktem Arm, wodurch der Hebelarm zwischen Schläger und Schulter kürzer wird. Zweitens das Handgelenk während des Treffpunkts stabil und leicht gestreckt halten, statt es einknicken zu lassen. Wer unsicher ist, ob die eigene Technik hier saubere Muster zeigt, profitiert von ein oder zwei gezielten Trainerstunden, die oft günstiger sind als eine spätere Physiotherapie-Behandlung.</p>',
    '<h2>Belastung sinnvoll steuern</h2><p>Der häufigste Fehler bei Neueinsteigern ist die zu schnelle Steigerung der Spielmenge. Muskeln und Kondition passen sich innerhalb von Wochen an, Sehnengewebe braucht dafür oft mehrere Monate. Wer neu einsteigt, sollte mit ein bis zwei Einheiten pro Woche beginnen und die Menge erst nach einigen Wochen behutsam erhöhen. Zwischen intensiven Matches lohnt sich mindestens ein voller Tag Pause, damit sich die Unterarmstrukturen erholen können. Auch das Alter spielt eine Rolle, da die Regenerationsfähigkeit von Sehnen mit den Jahren nachlässt und ältere Spieler entsprechend etwas vorsichtiger dosieren sollten.</p>',
    '<h2>Fazit: Kleine Gewohnheiten schlagen große Wehwehchen</h2><p>Der Padel-Ellenbogen ist kein Schicksal, sondern in den meisten Fällen die Summe vermeidbarer Kleinigkeiten: ein zu dicker Griff, zu wenig Aufwärmen, eine hastige Steigerung der Spielmenge. Wer konsequent auf passendes Material achtet, seine Unterarme gezielt kräftigt und beim ersten wiederkehrenden Ziehen im Ellenbogen die Reißleine zieht statt einfach weiterzuspielen, verliert erfahrungsgemäß nur wenige Spieltage statt wochenlanger Zwangspause. Dein Ellenbogen merkt sich jede Einheit, in der du es richtig gemacht hast.</p><p>Dieser Artikel dient ausschließlich der Information und ersetzt keine ärztliche Beratung. Bei anhaltenden oder starken Beschwerden konsultiere bitte einen Arzt oder eine Physiotherapeutin.</p>',
  ],
},
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
