/**
 * A DAY TO PLAY — POP CULTURE CROSSWORD
 * Premier draft de la banque de personnages Game of Thrones (série HBO uniquement).
 *
 * Base de travail : sélection validée avec l'utilisateur dans la conversation.
 * Ce fichier est autonome : il ne modifie pas l'ancienne banque multi-univers.
 *
 * Structure :
 * - name : réponse principale à privilégier dans les grilles
 * - aliases : véritables autres appellations/noms alternatifs, pas les surnoms
 * - group : classement éditorial de la fiche
 * - category : personnage ou creature
 * - status : major / conditional / archive
 * - clues : faits, titres, surnoms et relations utilisables pour rédiger des indices
 * - spoiler : présence possible de révélations majeures de la série
 *
 * Les indices sont des pistes factuelles brèves, pas des formulations finales.
 * Les réponses seront normalisées au moment de la génération de grille.
 */

export const gameOfThronesCharacters = [
  {
    "id": "STK-001",
    "name": "Rickard Stark",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Père de Ned Stark",
      "Seigneur de Winterfell avant la rébellion de Robert"
    ],
    "spoiler": true
  },
  {
    "id": "STK-002",
    "name": "Brandon Stark",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Frère aîné de Ned",
      "Fiancé de Catelyn Tully"
    ],
    "spoiler": true
  },
  {
    "id": "STK-003",
    "name": "Eddard Stark",
    "aliases": [
      "Ned Stark"
    ],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Seigneur de Winterfell",
      "Main du Roi Robert"
    ],
    "spoiler": true
  },
  {
    "id": "STK-004",
    "name": "Lyanna Stark",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Sœur de Ned",
      "Enlevée par Rhaegar selon la version officielle initiale"
    ],
    "spoiler": true
  },
  {
    "id": "STK-005",
    "name": "Benjen Stark",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Premier Patrouilleur de la Garde de Nuit",
      "Oncle de Jon, Robb, Sansa, Arya, Bran et Rickon"
    ],
    "spoiler": true
  },
  {
    "id": "STK-006",
    "name": "Catelyn Stark",
    "aliases": [
      "Catelyn Tully"
    ],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Née Tully",
      "Épouse de Ned Stark"
    ],
    "spoiler": true
  },
  {
    "id": "STK-007",
    "name": "Robb Stark",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Le Jeune Loup",
      "Roi du Nord"
    ],
    "spoiler": true
  },
  {
    "id": "STK-008",
    "name": "Sansa Stark",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Dame de Winterfell puis reine du Nord"
    ],
    "spoiler": true
  },
  {
    "id": "STK-009",
    "name": "Arya Stark",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Apprentie des Sans-Visage",
      "Utilise l'identité de Personne"
    ],
    "spoiler": true
  },
  {
    "id": "STK-010",
    "name": "Bran Stark",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Devient la Corneille à trois yeux",
      "Roi des Six Couronnes"
    ],
    "spoiler": true
  },
  {
    "id": "STK-011",
    "name": "Rickon Stark",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Plus jeune enfant de Ned et Catelyn"
    ],
    "spoiler": true
  },
  {
    "id": "STK-012",
    "name": "Jon Snow",
    "aliases": [
      "Aegon Targaryen"
    ],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Fils de Lyanna Stark et Rhaegar Targaryen",
      "Ancien Lord Commandant de la Garde de Nuit"
    ],
    "spoiler": true
  },
  {
    "id": "STK-013",
    "name": "Theon Greyjoy",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Pris en otage puis élevé à Winterfell",
      "Héritier des Îles de Fer"
    ],
    "spoiler": true
  },
  {
    "id": "STK-014",
    "name": "Rodrik Cassel",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Maître d'armes de Winterfell"
    ],
    "spoiler": true
  },
  {
    "id": "STK-015",
    "name": "Jory Cassel",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Capitaine de la garde de Ned Stark"
    ],
    "spoiler": true
  },
  {
    "id": "STK-016",
    "name": "Mestre Luwin",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Mestre de Winterfell",
      "Conseiller de la maison Stark"
    ],
    "spoiler": true
  },
  {
    "id": "STK-017",
    "name": "Septa Mordane",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Préceptrice de Sansa et Arya"
    ],
    "spoiler": true
  },
  {
    "id": "STK-018",
    "name": "Osha",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Sauvageonne capturée par les Stark",
      "Aide Bran et Rickon à fuir Winterfell"
    ],
    "spoiler": true
  },
  {
    "id": "STK-019",
    "name": "Hodor",
    "aliases": [
      "Wylis"
    ],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Serviteur de Winterfell",
      "Protège Bran"
    ],
    "spoiler": true
  },
  {
    "id": "STK-020",
    "name": "Vieille Nan",
    "aliases": [
      "Old Nan"
    ],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Raconte des histoires aux enfants Stark"
    ],
    "spoiler": true
  },
  {
    "id": "STK-021",
    "name": "Syrio Forel",
    "aliases": [],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Première Épée de Braavos",
      "Maître d'escrime d'Arya"
    ],
    "spoiler": true
  },
  {
    "id": "STK-022",
    "name": "Talisa Maegyr",
    "aliases": [
      "Talisa Stark"
    ],
    "group": "Maison Stark et entourage de Winterfell",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Guérisseuse rencontrée par Robb",
      "Épouse de Robb Stark"
    ],
    "spoiler": true
  },
  {
    "id": "STK-025",
    "name": "Jeor Mormont",
    "aliases": [],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Lord Commandant de la Garde de Nuit",
      "Père de Jorah"
    ],
    "spoiler": true
  },
  {
    "id": "STK-026",
    "name": "Jorah Mormont",
    "aliases": [],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Chevalier exilé",
      "Conseiller et protecteur de Daenerys"
    ],
    "spoiler": true
  },
  {
    "id": "STK-027",
    "name": "Lyanna Mormont",
    "aliases": [],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Jeune dame de l'Île-aux-Ours",
      "Soutient Jon comme Roi du Nord"
    ],
    "spoiler": true
  },
  {
    "id": "STK-028",
    "name": "Howland Reed",
    "aliases": [],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Père de Jojen et Meera",
      "Présent à la Tour de la Joie"
    ],
    "spoiler": true
  },
  {
    "id": "STK-029",
    "name": "Jojen Reed",
    "aliases": [],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Frère de Meera",
      "Guide Bran vers la Corneille à trois yeux"
    ],
    "spoiler": true
  },
  {
    "id": "STK-030",
    "name": "Meera Reed",
    "aliases": [],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Sœur de Jojen",
      "Accompagne Bran au-delà du Mur"
    ],
    "spoiler": true
  },
  {
    "id": "STK-031",
    "name": "Rickard Karstark",
    "aliases": [],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Seigneur de la maison Karstark",
      "Exécuté par Robb"
    ],
    "spoiler": true
  },
  {
    "id": "STK-032",
    "name": "Harald Karstark",
    "aliases": [],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Membre de la maison Karstark"
    ],
    "spoiler": true
  },
  {
    "id": "STK-033",
    "name": "Alys Karstark",
    "aliases": [],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Héritière de la maison Karstark",
      "Épouse de Sigorn"
    ],
    "spoiler": true
  },
  {
    "id": "STK-034",
    "name": "Roose Bolton",
    "aliases": [],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Seigneur de Fort-Terreur",
      "Père de Ramsay"
    ],
    "spoiler": true
  },
  {
    "id": "STK-035",
    "name": "Ramsay Bolton",
    "aliases": [],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Bâtard légitimé de Roose",
      "Surnommé le Bâtard de Bolton dans les indices"
    ],
    "spoiler": true
  },
  {
    "id": "STK-036",
    "name": "Grandjon Omble",
    "aliases": [
      "Greatjon Umber"
    ],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Seigneur de la maison Omble",
      "Soutient Robb Stark"
    ],
    "spoiler": true
  },
  {
    "id": "STK-037",
    "name": "Petitjon Omble",
    "aliases": [
      "Smalljon Umber"
    ],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Fils du Grandjon",
      "Livre Rickon à Ramsay"
    ],
    "spoiler": true
  },
  {
    "id": "STK-038",
    "name": "Wyman Manderly",
    "aliases": [],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Seigneur de Blancport",
      "Soutient secrètement la cause Stark"
    ],
    "spoiler": true
  },
  {
    "id": "STK-039",
    "name": "Robett Glover",
    "aliases": [],
    "group": "Maisons du Nord",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Seigneur de la maison Glover"
    ],
    "spoiler": true
  },
  {
    "id": "STK-040",
    "name": "Lady",
    "aliases": [],
    "group": "Loups géants",
    "category": "creature",
    "status": "major",
    "clues": [
      "Louve géante de Sansa Stark"
    ],
    "spoiler": true
  },
  {
    "id": "STK-041",
    "name": "Nymeria",
    "aliases": [],
    "group": "Loups géants",
    "category": "creature",
    "status": "major",
    "clues": [
      "Louve géante d'Arya Stark"
    ],
    "spoiler": true
  },
  {
    "id": "STK-042",
    "name": "Vent Gris",
    "aliases": [
      "Grey Wind"
    ],
    "group": "Loups géants",
    "category": "creature",
    "status": "major",
    "clues": [
      "Loup géant de Robb Stark"
    ],
    "spoiler": true
  },
  {
    "id": "STK-043",
    "name": "Été",
    "aliases": [
      "Summer"
    ],
    "group": "Loups géants",
    "category": "creature",
    "status": "major",
    "clues": [
      "Loup géant de Bran Stark"
    ],
    "spoiler": true
  },
  {
    "id": "STK-044",
    "name": "Broussaille",
    "aliases": [
      "Shaggydog"
    ],
    "group": "Loups géants",
    "category": "creature",
    "status": "major",
    "clues": [
      "Loup géant de Rickon Stark"
    ],
    "spoiler": true
  },
  {
    "id": "STK-045",
    "name": "Fantôme",
    "aliases": [
      "Ghost"
    ],
    "group": "Loups géants",
    "category": "creature",
    "status": "major",
    "clues": [
      "Loup géant de Jon Snow",
      "Loup au pelage blanc"
    ],
    "spoiler": true
  },  {
    "id": "LAN-001",
    "name": "Tywin Lannister",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Seigneur de Castral Roc",
      "Main du Roi sous Aerys puis Joffrey"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-002",
    "name": "Joanna Lannister",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Épouse de Tywin",
      "Mère de Cersei, Jaime et Tyrion"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-003",
    "name": "Jaime Lannister",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Surnommé le Régicide dans les indices",
      "Membre de la Garde royale"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-004",
    "name": "Cersei Lannister",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Reine des Sept Couronnes",
      "Mère de Joffrey, Myrcella et Tommen"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-005",
    "name": "Tyrion Lannister",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Surnommé le Lutin dans les indices",
      "Main de Daenerys"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-006",
    "name": "Kevan Lannister",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Frère de Tywin",
      "Main de Cersei"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-007",
    "name": "Lancel Lannister",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Cousin de Cersei, Jaime et Tyrion",
      "Membre de la Foi Militante"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-008",
    "name": "Sandor Clegane",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Surnommé le Limier dans les indices",
      "Frère de Gregor"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-009",
    "name": "Gregor Clegane",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Surnommé la Montagne dans les indices",
      "Champion de Cersei"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-010",
    "name": "Ilyn Payne",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Exécuteur royal",
      "Exécute Ned Stark"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-011",
    "name": "Podrick Payne",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Écuyer de Tyrion puis de Brienne"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-012",
    "name": "Qyburn",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Ancien mestre déchu",
      "Devient Grand Mestre et Main de Cersei"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-013",
    "name": "Bronn",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Mercenaire devenu chevalier",
      "Seigneur de Hautjardin à la fin"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-014",
    "name": "Shae",
    "aliases": [],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Compagne de Tyrion",
      "Servante de Sansa à Port-Réal"
    ],
    "spoiler": true
  },
  {
    "id": "LAN-015",
    "name": "Brienne de Torth",
    "aliases": [
      "Brienne of Tarth"
    ],
    "group": "Maison Lannister et personnages associés",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Originaire de Torth",
      "Chevalière de la Garde royale"
    ],
    "spoiler": true
  },
  {
    "id": "BAR-001",
    "name": "Robert Baratheon",
    "aliases": [],
    "group": "Maison Baratheon et entourage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Roi des Sept Couronnes",
      "A renversé la dynastie Targaryen"
    ],
    "spoiler": true
  },
  {
    "id": "BAR-002",
    "name": "Stannis Baratheon",
    "aliases": [],
    "group": "Maison Baratheon et entourage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Seigneur de Peyredragon",
      "Prétendant au Trône de Fer"
    ],
    "spoiler": true
  },
  {
    "id": "BAR-003",
    "name": "Renly Baratheon",
    "aliases": [],
    "group": "Maison Baratheon et entourage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Seigneur d'Accalmie",
      "Frère cadet de Robert et Stannis"
    ],
    "spoiler": true
  },
  {
    "id": "BAR-004",
    "name": "Selyse Florent",
    "aliases": [],
    "group": "Maison Baratheon et entourage",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Épouse de Stannis",
      "Mère de Shireen"
    ],
    "spoiler": true
  },
  {
    "id": "BAR-005",
    "name": "Shireen Baratheon",
    "aliases": [],
    "group": "Maison Baratheon et entourage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Fille de Stannis",
      "Atteinte de grisécaille"
    ],
    "spoiler": true
  },
  {
    "id": "BAR-006",
    "name": "Joffrey Baratheon",
    "aliases": [],
    "group": "Maison Baratheon et entourage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Roi des Sept Couronnes",
      "Fils biologique de Jaime et Cersei"
    ],
    "spoiler": true
  },
  {
    "id": "BAR-007",
    "name": "Myrcella Baratheon",
    "aliases": [],
    "group": "Maison Baratheon et entourage",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Princesse",
      "Fille biologique de Jaime et Cersei"
    ],
    "spoiler": true
  },
  {
    "id": "BAR-008",
    "name": "Tommen Baratheon",
    "aliases": [],
    "group": "Maison Baratheon et entourage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Roi des Sept Couronnes",
      "Fils biologique de Jaime et Cersei"
    ],
    "spoiler": true
  },
  {
    "id": "BAR-009",
    "name": "Gendry",
    "aliases": [],
    "group": "Maison Baratheon et entourage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Fils illégitime de Robert",
      "Forgeron puis héritier légitimé de la maison Baratheon"
    ],
    "spoiler": true
  },
  {
    "id": "BAR-010",
    "name": "Davos Mervault",
    "aliases": [],
    "group": "Maison Baratheon et entourage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Chevalier et conseiller de Stannis",
      "Surnommé le Chevalier Oignon dans les indices"
    ],
    "spoiler": true
  },
  {
    "id": "BAR-011",
    "name": "Mélisandre",
    "aliases": [],
    "group": "Maison Baratheon et entourage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Prêtresse rouge d'Asshaï", 
      "Prêtresse rouge de R'hllor",
      "Conseillère de Stannis"
    ],
    "spoiler": true
  },
  {
    "id": "TYR-001",
    "name": "Olenna Tyrell",
    "aliases": [],
    "group": "Maisons Tyrell et Tarly",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Surnommée la Reine des Épines dans les indices",
      "Grand-mère de Margaery et Loras"
    ],
    "spoiler": true
  },
  {
    "id": "TYR-002",
    "name": "Mace Tyrell",
    "aliases": [],
    "group": "Maisons Tyrell et Tarly",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Seigneur de Hautjardin",
      "Père de Margaery et Loras"
    ],
    "spoiler": true
  },
  {
    "id": "TYR-003",
    "name": "Margaery Tyrell",
    "aliases": [],
    "group": "Maisons Tyrell et Tarly",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Reine par ses mariages avec Renly, Joffrey et Tommen"
    ],
    "spoiler": true
  },
  {
    "id": "TYR-004",
    "name": "Loras Tyrell",
    "aliases": [],
    "group": "Maisons Tyrell et Tarly",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Surnommé le Chevalier des Fleurs dans les indices",
      "Frère de Margaery"
    ],
    "spoiler": true
  },
  {
    "id": "TYR-005",
    "name": "Samwell Tarly",
    "aliases": [
      "Sam"
    ],
    "group": "Maisons Tyrell et Tarly",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Ancien frère de la Garde de Nuit",
      "Devient mestre"
    ],
    "spoiler": true
  },
  {
    "id": "TYR-006",
    "name": "Randyll Tarly",
    "aliases": [],
    "group": "Maisons Tyrell et Tarly",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Père de Samwell et Dickon",
      "Seigneur de Corcolline"
    ],
    "spoiler": true
  },
  {
    "id": "TYR-007",
    "name": "Dickon Tarly",
    "aliases": [],
    "group": "Maisons Tyrell et Tarly",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Frère de Samwell",
      "Fils de Randyll"
    ],
    "spoiler": true
  },
  {
    "id": "GRE-001",
    "name": "Balon Greyjoy",
    "aliases": [],
    "group": "Maison Greyjoy",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Seigneur des Îles de Fer",
      "Père de Yara et Theon"
    ],
    "spoiler": true
  },
  {
    "id": "GRE-002",
    "name": "Yara Greyjoy",
    "aliases": [],
    "group": "Maison Greyjoy",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Fille de Balon",
      "Capitaine et prétendante au trône salé"
    ],
    "spoiler": true
  },
  {
    "id": "GRE-003",
    "name": "Euron Greyjoy",
    "aliases": [],
    "group": "Maison Greyjoy",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Oncle de Yara et Theon",
      "Roi des Îles de Fer"
    ],
    "spoiler": true
  },
  {
    "id": "GRE-004",
    "name": "Aeron Greyjoy",
    "aliases": [],
    "group": "Maison Greyjoy",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Prêtre du Dieu Noyé",
      "Surnommé Tifs-Trempés dans les indices"
    ],
    "spoiler": true
  },
  {
    "id": "MAR-001",
    "name": "Doran Martell",
    "aliases": [],
    "group": "Maison Martell et entourage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Prince de Dorne",
      "Frère d'Oberyn et d'Elia"
    ],
    "spoiler": true
  },
  {
    "id": "MAR-002",
    "name": "Oberyn Martell",
    "aliases": [],
    "group": "Maison Martell et entourage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Surnommé la Vipère Rouge dans les indices",
      "Prince de Dorne"
    ],
    "spoiler": true
  },
  {
    "id": "MAR-003",
    "name": "Trystane Martell",
    "aliases": [],
    "group": "Maison Martell et entourage",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Fils de Doran",
      "Fiancé de Myrcella"
    ],
    "spoiler": true
  },
  {
    "id": "MAR-004",
    "name": "Elia Martell",
    "aliases": [],
    "group": "Maison Martell et entourage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Première épouse de Rhaegar Targaryen",
      "Mère de Rhaenys et Aegon"
    ],
    "spoiler": true
  },
  {
    "id": "MAR-005",
    "name": "Ellaria Sand",
    "aliases": [],
    "group": "Maison Martell et entourage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Compagne d'Oberyn",
      "Mère de Tyene"
    ],
    "spoiler": true
  },
  {
    "id": "MAR-006",
    "name": "Obara Sand",
    "aliases": [],
    "group": "Maison Martell et entourage",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Aspic des Sables",
      "Fille d'Oberyn"
    ],
    "spoiler": true
  },
  {
    "id": "MAR-007",
    "name": "Nymeria Sand",
    "aliases": [],
    "group": "Maison Martell et entourage",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Aspic des Sables",
      "Fille d'Oberyn"
    ],
    "spoiler": true
  },
  {
    "id": "MAR-008",
    "name": "Tyene Sand",
    "aliases": [],
    "group": "Maison Martell et entourage",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Aspic des Sables",
      "Fille d'Oberyn et d'Ellaria"
    ],
    "spoiler": true
  },
  {
    "id": "MAR-009",
    "name": "Areo Hotah",
    "aliases": [],
    "group": "Maison Martell et entourage",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Capitaine de la garde de Doran Martell"
    ],
    "spoiler": true
  },
  {
    "id": "TUL-001",
    "name": "Hoster Tully",
    "aliases": [],
    "group": "Maisons Tully et Arryn",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Seigneur de Vivesaigues",
      "Père de Catelyn, Lysa et Edmure"
    ],
    "spoiler": true
  },
  {
    "id": "TUL-002",
    "name": "Edmure Tully",
    "aliases": [],
    "group": "Maisons Tully et Arryn",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Seigneur de Vivesaigues",
      "Époux de Roslin Frey"
    ],
    "spoiler": true
  },
  {
    "id": "TUL-003",
    "name": "Brynden Tully",
    "aliases": [],
    "group": "Maisons Tully et Arryn",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Surnommé le Silure dans les indices",
      "Oncle de Catelyn et Edmure"
    ],
    "spoiler": true
  },
  {
    "id": "ARR-001",
    "name": "Jon Arryn",
    "aliases": [],
    "group": "Maisons Tully et Arryn",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Main du Roi Robert",
      "Époux de Lysa Arryn"
    ],
    "spoiler": true
  },
  {
    "id": "ARR-002",
    "name": "Robin Arryn",
    "aliases": [],
    "group": "Maisons Tully et Arryn",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Seigneur du Val",
      "Fils de Jon et Lysa Arryn"
    ],
    "spoiler": true
  },
  {
    "id": "ARR-003",
    "name": "Lysa Arryn",
    "aliases": [],
    "group": "Maisons Tully et Arryn",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Sœur de Catelyn",
      "Épouse de Jon Arryn"
    ],
    "spoiler": true
  },  {
    "id": "TAR-001",
    "name": "Aerys II Targaryen",
    "aliases": [],
    "group": "Maison Targaryen et dragons",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Surnommé le Roi Fou dans les indices",
      "Dernier roi Targaryen avant Robert"
    ],
    "spoiler": true
  },
  {
    "id": "TAR-002",
    "name": "Rhaegar Targaryen",
    "aliases": [],
    "group": "Maison Targaryen et dragons",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Prince héritier",
      "Père biologique de Jon Snow"
    ],
    "spoiler": true
  },
  {
    "id": "TAR-003",
    "name": "Viserys Targaryen",
    "aliases": [],
    "group": "Maison Targaryen et dragons",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Frère de Daenerys",
      "Prétendant au trône en exil"
    ],
    "spoiler": true
  },
  {
    "id": "TAR-004",
    "name": "Daenerys Targaryen",
    "aliases": [],
    "group": "Maison Targaryen et dragons",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Mère des Dragons",
      "Khaleesi puis reine de Meereen"
    ],
    "spoiler": true
  },
  {
    "id": "TAR-005",
    "name": "Rhaella Targaryen",
    "aliases": [],
    "group": "Maison Targaryen et dragons",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Épouse d'Aerys II",
      "Mère de Viserys et Daenerys"
    ],
    "spoiler": true
  },
  {
    "id": "TAR-006",
    "name": "Drogon",
    "aliases": [],
    "group": "Maison Targaryen et dragons",
    "category": "creature",
    "status": "major",
    "clues": [
      "Dragon noir et rouge",
      "Nommé en hommage à Khal Drogo"
    ],
    "spoiler": true
  },
  {
    "id": "TAR-007",
    "name": "Rhaegal",
    "aliases": [],
    "group": "Maison Targaryen et dragons",
    "category": "creature",
    "status": "major",
    "clues": [
      "Dragon vert et bronze",
      "Nommé en hommage à Rhaegar"
    ],
    "spoiler": true
  },
  {
    "id": "TAR-008",
    "name": "Viserion",
    "aliases": [],
    "group": "Maison Targaryen et dragons",
    "category": "creature",
    "status": "major",
    "clues": [
      "Dragon crème et or",
      "Nommé en hommage à Viserys"
    ],
    "spoiler": true
  },
  {
    "id": "GAR-001",
    "name": "Mestre Aemon",
    "aliases": [],
    "group": "Garde de Nuit",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Targaryen ayant renoncé au trône",
      "Frère juré de la Garde de Nuit"
    ],
    "spoiler": true
  },
  {
    "id": "GAR-002",
    "name": "Alliser Thorne",
    "aliases": [],
    "group": "Garde de Nuit",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Maître d'armes de Châteaunoir",
      "S'oppose à Jon Snow"
    ],
    "spoiler": true
  },
  {
    "id": "GAR-003",
    "name": "Eddison Tollett",
    "aliases": [
      "Edd la Douleur"
    ],
    "group": "Garde de Nuit",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Frère juré de la Garde de Nuit",
      "Ami de Jon"
    ],
    "spoiler": true
  },
  {
    "id": "GAR-004",
    "name": "Yoren",
    "aliases": [],
    "group": "Garde de Nuit",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Recruteur de la Garde de Nuit",
      "Conduit Arya vers le Nord"
    ],
    "spoiler": true
  },
  {
    "id": "GAR-005",
    "name": "Qhorin Mimain",
    "aliases": [],
    "group": "Garde de Nuit",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Patrouilleur expérimenté",
      "Conduit une mission au-delà du Mur"
    ],
    "spoiler": true
  },
  {
    "id": "GAR-006",
    "name": "Grenn",
    "aliases": [],
    "group": "Garde de Nuit",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Frère juré",
      "Ami de Jon Snow"
    ],
    "spoiler": true
  },
  {
    "id": "GAR-007",
    "name": "Pyp",
    "aliases": [],
    "group": "Garde de Nuit",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Frère juré",
      "Ami de Jon Snow"
    ],
    "spoiler": true
  },
  {
    "id": "GAR-008",
    "name": "Janos Slynt",
    "aliases": [],
    "group": "Garde de Nuit",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Ancien commandant du Guet de Port-Réal",
      "Exécuté par Jon"
    ],
    "spoiler": true
  },
  {
    "id": "GAR-009",
    "name": "Bowen Marsh",
    "aliases": [],
    "group": "Garde de Nuit",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Premier intendant de la Garde de Nuit",
      "Participe à la mutinerie contre Jon"
    ],
    "spoiler": true
  },
  {
    "id": "GAR-010",
    "name": "Olly",
    "aliases": [],
    "group": "Garde de Nuit",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Jeune garçon de Châteaunoir",
      "Participe à la mutinerie contre Jon"
    ],
    "spoiler": true
  },
  {
    "id": "SAU-001",
    "name": "Mance Rayder",
    "aliases": [],
    "group": "Sauvageons",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Roi d'au-delà du Mur",
      "Ancien frère de la Garde de Nuit"
    ],
    "spoiler": true
  },
  {
    "id": "SAU-002",
    "name": "Tormund Fléau-d'Ogres",
    "aliases": [
      "Tormund Giantsbane"
    ],
    "group": "Sauvageons",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Guerrier sauvageon",
      "Compagnon de Jon Snow"
    ],
    "spoiler": true
  },
  {
    "id": "SAU-003",
    "name": "Ygritte",
    "aliases": [],
    "group": "Sauvageons",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Archère sauvageonne",
      "Compagne de Jon Snow"
    ],
    "spoiler": true
  },
  {
    "id": "SAU-004",
    "name": "Orell",
    "aliases": [],
    "group": "Sauvageons",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Sauvageon capable de voir à travers un aigle"
    ],
    "spoiler": true
  },
  {
    "id": "SAU-005",
    "name": "Craster",
    "aliases": [],
    "group": "Sauvageons",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Vit au-delà du Mur",
      "Livre ses fils aux Marcheurs blancs"
    ],
    "spoiler": true
  },
  {
    "id": "SAU-006",
    "name": "Vère",
    "aliases": [
      "Gilly"
    ],
    "group": "Sauvageons",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Compagne de Samwell Tarly",
      "Ancienne épouse de Craster"
    ],
    "spoiler": true
  },
  {
    "id": "SAU-007",
    "name": "Styr",
    "aliases": [],
    "group": "Sauvageons",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Magnar de Thenn"
    ],
    "spoiler": true
  },
  {
    "id": "SAU-008",
    "name": "Seigneur des Os",
    "aliases": [
      "Rattleshirt"
    ],
    "group": "Sauvageons",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Chef sauvageon",
      "Porte une armure faite d'ossements"
    ],
    "spoiler": true
  },
  {
    "id": "TRA-001",
    "name": "Varys",
    "aliases": [],
    "group": "Figures politiques et de cour",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Maître des Chuchoteurs",
      "Affirme servir le royaume"
    ],
    "spoiler": true
  },
  {
    "id": "TRA-002",
    "name": "Petyr Baelish",
    "aliases": [
      "Littlefinger"
    ],
    "group": "Figures politiques et de cour",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Maître de la Monnaie",
      "Surnommé Littlefinger dans les indices"
    ],
    "spoiler": true
  },
  {
    "id": "TRA-003",
    "name": "Grand Mestre Pycelle",
    "aliases": [
      "Pycelle"
    ],
    "group": "Figures politiques et de cour",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Membre du Petit Conseil",
      "Grand Mestre sous plusieurs rois"
    ],
    "spoiler": true
  },
  {
    "id": "TRA-004",
    "name": "Grand Moineau",
    "aliases": [
      "High Sparrow"
    ],
    "group": "Figures politiques et de cour",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Chef de la Foi Militante",
      "Influence le roi Tommen"
    ],
    "spoiler": true
  },
  {
    "id": "TRA-005",
    "name": "Septa Unella",
    "aliases": [],
    "group": "Figures politiques et de cour",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Membre de la Foi Militante",
      "Participe à l'emprisonnement de Cersei"
    ],
    "spoiler": true
  },
  {
    "id": "TRA-006",
    "name": "Barristan Selmy",
    "aliases": [],
    "group": "Figures politiques et de cour",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Surnommé Barristan le Hardi dans les indices",
      "Ancien Lord Commandant de la Garde royale"
    ],
    "spoiler": true
  },
  {
    "id": "TRA-007",
    "name": "Illyrio Mopatis",
    "aliases": [],
    "group": "Figures politiques et de cour",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Marchand de Pentos",
      "Accueille Viserys et Daenerys en exil"
    ],
    "spoiler": true
  },
  {
    "id": "TRA-008",
    "name": "Ros",
    "aliases": [],
    "group": "Figures politiques et de cour",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Prostituée de Winterfell puis de Port-Réal",
      "Informatrice de Varys"
    ],
    "spoiler": true
  },
  {
    "id": "FRA-001",
    "name": "Beric Dondarrion",
    "aliases": [],
    "group": "Fraternité sans Bannière",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Surnommé le Seigneur de la Foudre dans les indices",
      "Ressuscité plusieurs fois par Thoros"
    ],
    "spoiler": true
  },
  {
    "id": "FRA-002",
    "name": "Thoros de Myr",
    "aliases": [],
    "group": "Fraternité sans Bannière",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Prêtre rouge",
      "Ressuscite Beric Dondarrion"
    ],
    "spoiler": true
  },
  {
    "id": "FRA-003",
    "name": "Anguy",
    "aliases": [],
    "group": "Fraternité sans Bannière",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Archer de la Fraternité sans Bannière"
    ],
    "spoiler": true
  },
  {
    "id": "SAV-001",
    "name": "Jaqen H'ghar",
    "aliases": [],
    "group": "Sans-Visage",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Homme sans visage",
      "Initie Arya à Braavos"
    ],
    "spoiler": true
  },
  {
    "id": "SAV-002",
    "name": "Gamine abandonnée",
    "aliases": [
      "La Gamine"
    ],
    "group": "Sans-Visage",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Sans-Visage chargée d'entraîner Arya",
      "Rivale d'Arya à Braavos"
    ],
    "spoiler": true
  },
  {
    "id": "ESS-001",
    "name": "Khal Drogo",
    "aliases": [],
    "group": "Entourage de Daenerys à Essos",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Khal dothraki",
      "Époux de Daenerys"
    ],
    "spoiler": true
  },
  {
    "id": "ESS-002",
    "name": "Daario Naharis",
    "aliases": [],
    "group": "Entourage de Daenerys à Essos",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Commandant des Puînés",
      "Compagnon de Daenerys"
    ],
    "spoiler": true
  },
  {
    "id": "ESS-003",
    "name": "Missandei",
    "aliases": [],
    "group": "Entourage de Daenerys à Essos",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Conseillère et interprète de Daenerys",
      "Ancienne esclave d'Astapor"
    ],
    "spoiler": true
  },
  {
    "id": "ESS-004",
    "name": "Ver Gris",
    "aliases": [
      "Grey Worm"
    ],
    "group": "Entourage de Daenerys à Essos",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Commandant des Immaculés",
      "Compagnon de Missandei"
    ],
    "spoiler": true
  },
  {
    "id": "ESS-005",
    "name": "Irri",
    "aliases": [],
    "group": "Entourage de Daenerys à Essos",
    "category": "personnage",
    "status": "archive",
    "clues": [
      "Servante dothraki de Daenerys"
    ],
    "spoiler": true
  },
  {
    "id": "ESS-006",
    "name": "Hizdahr zo Loraq",
    "aliases": [],
    "group": "Entourage de Daenerys à Essos",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Noble de Meereen",
      "Époux de Daenerys pendant une partie de la série"
    ],
    "spoiler": true
  },
  {
    "id": "ESS-007",
    "name": "Mirri Maz Duur",
    "aliases": [],
    "group": "Entourage de Daenerys à Essos",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Maegi de Lhazar",
      "Intervient dans la mort de Khal Drogo"
    ],
    "spoiler": true
  },
  {
    "id": "ESS-008",
    "name": "Kinvara",
    "aliases": [],
    "group": "Entourage de Daenerys à Essos",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Grande prêtresse rouge de Meereen",
      "Soutient Daenerys"
    ],
    "spoiler": true
  },
  {
    "id": "FRE-001",
    "name": "Walder Frey",
    "aliases": [],
    "group": "Maison Frey",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Seigneur des Jumeaux",
      "Organisateur des Noces Pourpres"
    ],
    "spoiler": true
  },
  {
    "id": "FRE-002",
    "name": "Roslin Frey",
    "aliases": [],
    "group": "Maison Frey",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Épouse d'Edmure Tully",
      "Mariage conclu avant les Noces Pourpres"
    ],
    "spoiler": true
  },
  {
    "id": "AUT-001",
    "name": "Roi de la Nuit",
    "aliases": [],
    "group": "Figures liées au Nord et aux derniers événements",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Chef des Marcheurs blancs",
      "Détruit une partie du Mur avec un dragon mort-vivant"
    ],
    "spoiler": true
  },
  {
    "id": "AUT-002",
    "name": "Feuille",
    "aliases": [
      "Leaf"
    ],
    "group": "Figures liées au Nord et aux derniers événements",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Enfant de la Forêt",
      "Protège Bran dans la grotte"
    ],
    "spoiler": true
  },
  {
    "id": "AUT-003",
    "name": "Corneille à trois yeux",
    "aliases": [
      "Three-Eyed Raven"
    ],
    "group": "Figures liées au Nord et aux derniers événements",
    "category": "personnage",
    "status": "major",
    "clues": [
      "Guide Bran dans ses visions",
      "Ancien détenteur du pouvoir de vervue"
    ],
    "spoiler": true
  },
  {
    "id": "AUT-004",
    "name": "Arthur Dayne",
    "aliases": [],
    "group": "Figures liées au Nord et aux derniers événements",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Épée du Matin",
      "Chevalier de la Garde royale sous Aerys II"
    ],
    "spoiler": true
  },
  {
    "id": "AUT-005",
    "name": "Yohn Royce",
    "aliases": [],
    "group": "Figures liées au Nord et aux derniers événements",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Seigneur du Val",
      "Allié de Sansa Stark"
    ],
    "spoiler": true
  },
  {
    "id": "AUT-006",
    "name": "Locke",
    "aliases": [],
    "group": "Figures liées au Nord et aux derniers événements",
    "category": "personnage",
    "status": "conditional",
    "clues": [
      "Homme de Roose Bolton",
      "Traque Bran et Rickon"
    ],
    "spoiler": true
  }
];

export default gameOfThronesCharacters;
