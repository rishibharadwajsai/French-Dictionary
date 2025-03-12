export interface DictionaryWord {
  word: string;
  meaning: string;
  contexts: Array<{
    context: string;
    meaning?: string;
    usage?: string[];
    usage1?: {
      usage: string;
      example: string;
    };
    notUsed?: {
      where: string;
      example: string;
    };
    examples?: string[];
    note?: string;
    additional_examples?: string[];
  }>;
}

export const dictionaryData: DictionaryWord[] = [
  {
    word: "Accepter",
    meaning: "accept, admit, allow",
    contexts: [
      {
        context: "Accept",
        meaning:
          "Willingly receiving or taking something offered. It focuses on acknowledging and consenting to take possession of something.",
        examples: [
          "J'accepte ton invitation avec plaisir. – I gladly accept your invitation",
          "L'université a accepté sa candidature. – The university accepted his application",
        ],
      },
      {
        context: "Admit",
        meaning:
          "It implies agreeing to a situation or reality, often reluctantly or after some consideration.",
        examples: [
          "Elle a accepté la vérité après avoir vu les preuves. – She admitted the truth after seeing the evidence",
        ],
        notUsed: {
          where:
            "Not focuses on acknowledging something as true or granting permission. It often implies a formal or intellectual acknowledgment rather than an emotional acceptance.",
          example:
            "Il a admis avoir menti pendant l’interrogatoire. – He admitted to lying during the interrogation",
        },
      },
      {
        context: "Allow",
        meaning:
          "Indicates agreement or consent to something, often after some consideration or reluctance.",
        examples: [
          "Elle a accepté de lui pardonner. – She allowed herself to forgive him.",
        ],
        notUsed: {
          where:
            "Not indicate giving permission or enabling something to happen.",
          example:
            "Ses parents lui ont permis de sortir tard le soir. – Her parents allowed her to go out late at night.",
        },
      },
    ],
  },
  {
    word: "Accorder",
    meaning: "agree to, grant/give/offer, reconcile, tune",
    contexts: [
      {
        context: "Agree to",
        meaning:
          "It implies granting, conceding, or bestowing something, rather than just agreeing in the sense of sharing an opinion.",
        examples: [
          "Le directeur a accordé un jour de congé à son employé. – The manager agreed to give a day off to his employee",
        ],
      },
      {
        context: "Tune",
        meaning:
          "Adjusting instruments so that they produce the correct pitch or are in harmony with other instruments.",
        examples: [
          "Ils ont pris quelques minutes pour accorder leurs guitares. – They took a few minutes to tune their guitars",
        ],
      },
      {
        context: "Reconcile",
        meaning:
          "Refers to bringing things (e.g., ideas, opinions, or actions) into harmony or agreement.",
        examples: [
          "Ils ont réussi à accorder leurs intérêts pour signer le contrat. – They managed to reconcile their interests to sign the contract",
        ],
        notUsed: {
          where:
            "Not between people or groups after a conflict.",
          example:
            "Je dois me réconcilier avec mon frère. – I need to make peace with my brother.",
        },
      },
    ],
  },
  {
    word: "Accueillir",
    meaning: "welcome/greet/host, take/receive, meet, accommodate",
    contexts: [
      {
        context: "Welcome/greet/host",
        meaning: "It often implies hospitality, warmth, and acceptance.",
        examples: [
          "Ils nous ont accueillis avec le sourire. – They welcomed us with a smile",
        ],
      },
      {
        context: "Take/receive",
        meaning: "It focuses on receiving or taking someone or something warmly, hospitably, or with acceptance.",
        examples: [
          "Victor a mal accueilli l'annonce du divorce de sa mère. – Victor took the news of his mother's divorce badly.",
        ],
        notUsed: {
          where: "Not physically taking something.",
          example: "Il a pris un livre sur la table. – He took a book from the table.",
        },
      },
      {
        context: "Meet",
        meaning: "Focuses on receiving someone with hospitality, warmth, or acceptance.",
        examples: [
          "Le maire a accueilli les nouveaux habitants de la ville. – The mayor met the new residents of the town.",
        ],
        notUsed: {
          where: "Not to meet or encounter.",
          example: "J’ai rencontré mon professeur au marché – I met my teacher at the market.",
        },
      },
      {
        context: "Accommodate",
        meaning: "It focuses on the act of welcoming or hosting someone.",
        examples: [
          "L’école accueille 500 élèves chaque année. – The school accommodates 500 students each year.",
        ],
        notUsed: {
          where: "Not providing a place to stay or physical accommodation.",
          example: "Les étudiants logent dans des résidences universitaires. – The students live in university dormitories.",
        },
      },
    ],
  },
  {
    word: "Adresser",
    meaning: "send/address, express",
    contexts: [
      {
        context: "Send/address",
        meaning: "Commonly used in formal or specialized situations.",
        examples: [
          "J’ai adressé une lettre à l’ambassade. – I addressed a letter to the embassy.",
        ],
        notUsed: {
          where: "Not in everyday use.",
          example: "J’ai envoyé une lettre à mon ami. – I sent a letter to my friend.",
        },
      },
      {
        context: "Express",
        meaning: "Use adresser when the recipient is the key element.",
        examples: [
          "Il a adressé ses excuses à sa collègue. – He expressed his apologies to his colleague.",
        ],
        notUsed: {
          where: "Not when the focus is on articulating thoughts, feelings, or ideas.",
          example: "Il a exprimé ses excuses avec beaucoup d’émotion. – He expressed his apologies with a lot of emotion.",
        },
      },
    ],
  },
  {
    word: "Agir",
    meaning: "Act/take action, behave, impel/drive",
    contexts: [
      {
        context: "Act/take action",
        meaning: "Agir is used to refer to taking action, behaving, or operating with purpose",
        examples: [
          "Il faut agir maintenant – We must take action now"
        ],
        notUsed: {
          where: "Not referring to acting as a performance.",
          example: "La troupe va jouer quelques scènes de Shakespeare. – The troupe will act a few scenes from Shakespeare"
        }
      },
      {
        context: "Behave",
        meaning: "A specific, one-time action. Did in this moment, not his usual behavior.",
        examples: [
          "Victor a mal agi en parlant de sa collègue ainsi – Victor behaved badly by talking about his colleague like that"
        ],
        notUsed: {
          where: "Not in consistent and habitual conduct. Not for a more long-term or consistent pattern of behavior, not just a single action",
          example: "Il se comporte toujours poliment. – He always behaves politely"
        }
      },
      {
        context: "Impel/drive",
        meaning: "It is more about motivation and passion — something that inspires action and keeps her going.",
        examples: [
          "L'enthousiasme qui l'agit emporte l'adhésion de tous. - The enthusiasm that impels her gets everyone on board"
        ],
        notUsed: {
          where: "Not suggests pressure or compulsion, means to push or force someone toward an outcome",
          example: "La dépendance l'a poussé à une vie faite de délits et de souffrances – The addiction drove him to a life of crime and misery."
        }
      }
    ]
  },
  {
    word: "Aider",
    meaning: "Help/assist, support",
    contexts: [
      {
        context: "Help/assist",
        meaning: "It often involves actively doing something to solve a problem or ease a task. Direct and hands-on",
        examples: [
          "Je vais t'aider à déménager. – I'll help you move."
        ],
        notUsed: {
          where: "Not implied in a supportive, less hands-on way",
          example: "Le médecin a assisté l'opération – The doctor assisted the surgery."
        }
      }
    ]
  },
  {
    word: "Aimer",
    meaning: "like/love, enjoy",
    contexts: [
      {
        context: "Like/love",
        meaning: "A mild affection or preference for things, activities, or people",
        examples: [
          "J'aime le chocolat. – I like chocolate",
          "J'aime beaucoup mes amis. –  I love my friends very much"
        ]
      },
      {
        context: "Enjoy",
        meaning: "Pleasure in an activity or experience",
        examples: [
          "Il aime lire des romans historiques. – He enjoys reading historical novels"
        ],
        notUsed: {
          where: "Not to entertain, have fun or benefit from something",
          example: "Je me suis bien amusé à la fête – I had fun at the party"
        },
        additional_examples: [
          "Il jouit d'une excellente réputation. – He enjoys an excellent reputation"
        ]
      }
    ]
  },
  {
    word: "Ajouter",
    meaning: "Add",
    contexts: [
      {
        context: "Add",
        meaning: "Used in everyday language, whether for ideas, objects, words, or ingredients. It's about combining, including, or attaching.",
        examples: [
          "Je voudrais ajouter quelque chose à cette discussion – I'd like to add something to this discussion"
        ],
        notUsed: {
          where: "Not to combine numbers or quantities through arithmetic addition. Not used in mathematics or when summing things up.",
          example: "Il a additionné toutes les dépenses du mois – He added up all the expenses for the month"
        }
      }
    ]
  },
  {
    word: "Aller",
    meaning: "go, lead",
    contexts: [
      {
        context: "Go",
        meaning: "Moving from one location to another, physically changing position",
        examples: [
          "Je vais à Paris demain – I'm going to Paris tomorrow"
        ]
      },
      {
        context: "Lead",
        meaning: "Describes movement toward a destination",
        examples: [
          "Ce chemin va au village. – This path leads to the village"
        ],
        notUsed: {
          where: "Not implies guiding or directing",
          example: "Il mène son équipe à la victoire. – He leads his team to victory"
        }
      }
    ]
  },
  {
    word: "Allumer",
    meaning: "light/switch/turn on",
    contexts: [
      {
        context: "Light/switch/turn on",
        meaning: "Allumer refers to starting or activating a source of light (lamps, candles, etc)",
        examples: [
          "Peux-tu allumer la lumière ? – Can you turn on the light?"
        ],
        notUsed: {
          where: "Not describing how light transforms a space, making something metaphorically shine",
          example: "Les lampadaires illuminent la rue la nuit. – The streetlights illuminate the street at night"
        },
        additional_examples: [
          "Son sourire illumine son visage. – Her smile lights up her face",
          "Le vent a enflammé la forêt. – The wind set the forest on fire",
          "Il s'est enflammé de colère. – He became inflamed with anger"
        ]
      }
    ]
  },
  {
    word: "Améliorer",
    meaning: "improve, upgrade",
    contexts: [
      {
        context: "Improve",
        meaning: "Used for skills, quality of life, health, situations",
        examples: [
          "Je veux améliorer mon niveau en français. –I want to improve my level of French"
        ]
      },
      {
        context: "Upgrade",
        meaning: "Used for concrete and abstract improvements. Used for technology, infrastructure, products, services, conditions, skills, and situations.",
        examples: [
          "Ce logiciel a été amélioré avec de nouvelles fonctionnalités – This software has been upgraded with new features"
        ],
        notUsed: {
          where: "Not used for people, causes, ideas, and products — spreading awareness, advancing careers, or advocating.",
          example: "Elle a été promue au poste de directrice – She was upgraded to the position of director"
        }
      }
    ]
  },
  {
    word: "Amener",
    meaning: "bring/take/carry, steer/lead, cause",
    contexts: [
      {
        context: "Bring/take/carry",
        meaning: "Used when bringing a person, animal, or vehicle to a place",
        examples: [
          "Elle a amené son chien chez le vétérinaire. – She brought her dog to the vet"
        ],
        notUsed: {
          where: "Not an object, something that cannot move by itself",
          example: "J'ai apporté mon ordinateur au bureau. – I brought my computer to the office"
        }
      },
      {
        context: "Steer/lead",
        meaning: "Can apply to situations, consequences, discussions, and changes in a gradual or intentional way",
        examples: [
          "Ce problème pourrait amener une discussion plus large. – This issue could lead to a broader discussion"
        ],
        notUsed: {
          where: "Not accompanying or guiding someone along a path",
          example: "Elle mène une vie paisible – She leads a peaceful life"
        }
      },
      {
        context: "Cause",
        meaning: "Used for accidents, disasters, conflicts, emotions, or health issues",
        examples: [
          "Ce médicament peut amener des effets secondaires. – This medication can cause side effects"
        ],
        notUsed: {
          where: "Not direct cause-and-effect relationship — something produces a result, often negative.",
          example: "Cette erreur a causé un problème sérieux. – This mistake caused a serious problem"
        }
      }
    ]
  },
  {
    word: "Annoncer",
    meaning: "Announce/break/call, forecast",
    contexts: [
      {
        context: "Announce",
        meaning: "Used when making a statement, prediction, or proclamation",
        examples: [
          "Le président a annoncé sa démission. – The president announced his resignation"
        ]
      },
      {
        context: "Break",
        meaning: "Suggests revealing something significant, often surprising or emotional.",
        examples: [
          "Je ne savais pas comment lui annoncer la mauvaise nouvelle. – I didn't know how to break the bad news to him."
        ]
      },
      {
        context: "Call",
        meaning: "Used when officially declaring a result, prediction, or decision.",
        examples: [
          "On a annoncé le vainqueur de l'élection. – They called the winner of the election"
        ]
      },
      {
        context: "Forecast",
        meaning: "Used in weather reports and predicting future",
        examples: [
          "La météo annonce de la pluie pour demain. – The weather forecast announces rain for tomorrow"
        ]
      }
    ]
  },
  {
    word: "Apporter",
    meaning: "bring, bear, provide",
    contexts: [
      {
        context: "Bring",
        meaning: "Used for an object, something that cannot move by itself",
        examples: [
          "J'ai apporté mon ordinateur au bureau. – I brought my computer to the office"
        ],
        notUsed: {
          where: "Not for a person, animal, or vehicle",
          example: "Elle a amené son chien chez le vétérinaire. – She brought her dog to the vet"
        }
      },
      {
        context: "Bear",
        meaning: "Implies physically transmitting a message",
        examples: [
          "Le facteur n'apporte pas toujours de bonnes nouvelles. – The postman doesn't always bear good news."
        ],
        notUsed: {
          where: "Not used for supporting",
          example: "Le pont doit supporter le poids des voitures et des camions. – The bridge must bear the weight of the cars and trucks."
        }
      }
    ]
  },
  {
    word: "Apprécier",
    meaning: "Appreciate, like",
    contexts: [
      {
        context: "Appreciate",
        meaning: "Used for acknowledging worth, or being grateful",
        examples: [
          "J'apprécie vraiment ton aide. – I really appreciate your help"
        ],
        notUsed: {
          where: "Not about understanding situations",
          example: "Il ne comprend pas l'importance de ce problème. – He doesn't appreciate the importance of this issue."
        }
      },
      {
        context: "Like",
        meaning: "Used for enjoying an experience, respecting someone, or acknowledging quality",
        examples: [
          "J'apprécie ce restaurant, mais ce n'est pas mon préféré. – I like this restaurant, but it's not my favorite"
        ],
        notUsed: {
          where: "Not for liking things passionately, loving people",
          example: "J'aime le chocolat. – I like chocolate"
        }
      }
    ]
  },
  {
    word: "Apprendre",
    meaning: "Learn, hear about/find out about",
    contexts: [
      {
        context: "Learn",
        meaning: "The subject actively gains knowledge through study, experience, or practice.",
        examples: [
          "J'apprends le français depuis un an. – I have been learning French for a year"
        ]
      },
      {
        context: "Hear about/find out about",
        meaning: "Used when receiving new information, whether good or bad news.",
        examples: [
          "J'ai appris que tu déménages à Paris. – I heard that you are moving to Paris"
        ]
      }
    ]
  },
  {
    word: "Assaisonner",
    meaning: "Dress/season, salt",
    contexts: [
      {
        context: "Dress/season",
        meaning: "Implies enhancing the taste of food by adding spices, salt, pepper, herbs, or sauces and Implies adding a liquid dressing (vinaigrette, oil, sauce) to a dish, especially for salads or cold dishes.",
        examples: [
          "Elle a oublié d'assaisonner la soupe, elle manque de goût. – She forgot to season the soup; it lacks flavor",
          "J'ai assaisonné ma salade avec une vinaigrette maison. – I dressed my salad with a homemade vinaigrette."
        ]
      },
      {
        context: "Salt",
        meaning: "To \"salt\" something means to add extra, often unnecessarily or deceptively",
        examples: [
          "Eh bien, le restaurateur a rudement assaisonné l'addition ! – Well, the restaurateur really salted the bill!"
        ]
      }
    ]
  },
  {
    word: "Attacher",
    meaning: "Attach/fasten/tie/connect",
    contexts: [
      {
        context: "Attach/fasten/tie/connect",
        meaning: "Use attacher when something is secured, tied, or fastened, whether physically or emotionally but not when something is technically or functionally connected",
        examples: [
          "Attache ta ceinture de sécurité avant de partir. – Fasten your seatbelt before leaving",
          "Je suis très attaché à mes souvenirs d'enfance. – I am very attached to my childhood memories"
        ],
        notUsed: {
          where: "Not when something is technically or functionally connected",
          example: "Il faut raccorder ces deux câbles électriques. – We need to connect these two electrical cables."
        },
        additional_examples: [
          "Le réalisateur a bien raccordé les scènes du film. – The director smoothly linked the scenes of the movie."
        ]
      }
    ]
  },
  {
    word: "Attendre",
    meaning: "wait/await, expect",
    contexts: [
      {
        context: "Wait/await",
        meaning: "Focus on time and delay",
        examples: [
          "J'attends le bus depuis dix minutes. – I have been waiting for the bus for ten minutes."
        ]
      },
      {
        context: "Expect",
        meaning: "Focus on anticipation",
        examples: [
          "Nous attendons une réponse de votre part. – We are expecting a response from you"
        ]
      }
    ]
  },
  {
    word: "Attribuer",
    meaning: "Assign/allocate, attribute",
    contexts: [
      {
        context: "Attribute",
        meaning: "To believe that something was caused or done by somebody/something.",
        examples: [
          "A quoi attribues-tu ton succès précoce de chanteur - To what do you attribute your early success as a singer?"
        ]
      },
      {
        context: "Assign/allocate",
        meaning: "Giving something specific like a task, role, prize, or quality.",
        examples: [
          "Le professeur a attribué les sujets de dissertation – The teacher assigned the essay topics"
        ],
        notUsed: {
          where: "Not Placing someone or something in a specific role, position, or location",
          example: "Il a été affecté au service marketing. – He was assigned to the marketing department"
        }
      }
    ]
  },
  {
    word: "Avancer",
    meaning: "move forward, progress, claim",
    contexts: [
      {
        context: "Move forward",
        meaning: "It implies moving forward in a straight or directional manner",
        examples: [
          "Le train avance lentement vers la gare – The train is moving forward slowly towards the station."
        ],
        notUsed: {
          where: "Not moving from one place to another.",
          example: "Elle se déplace souvent pour son travail. – She moves often for work"
        }
      },
      {
        context: "Progress",
        meaning: "Progressing in work, projects",
        examples: [
          "Nous avons bien avancé sur notre recherche. – We have made good progress on our research."
        ],
        notUsed: {
          where: "Not refers to gaining skills and knowledge",
          example: "Mon niveau de français progresse chaque jour. – My French level progress every day"
        }
      }
    ]
  },
  {
    word: "Avoir",
    meaning: "Have/contain/own/possess",
    contexts: [
      {
        context: "Have/contain/own/possess",
        meaning: "Possession or Ownership. Expresses physical or abstract possession",
        examples: [
          "J'ai un livre. – I have a book"
        ]
      },
      {
        context: "Be",
        meaning: "In French, age is expressed with \"avoir\", unlike English which uses \"to be.\"",
        examples: [
          "J'ai 25 ans – I am 25 years old"
        ],
        note: "Describes experiences, feelings, and states",
        additional_examples: [
          "J'ai faim. – I am hungry"
        ]
      }
    ]
  }
];
