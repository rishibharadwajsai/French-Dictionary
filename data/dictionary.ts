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
    usage2?: {
      usage: string;
      example: string;
    };
    examples?: string[];
    note?: string;
    additional_examples?: string[];
  }>;
}

export const dictionaryData: DictionaryWord[] = [
  {
    word: "Adorer",
    meaning: "to love, to worship",
    contexts: [
      {
        context: "To love",
        meaning:
          "A stronger, more enthusiastic form of liking or loving, often close to adoration or passion.",
        usage: [
          "Used in non-romantic affection",
          "Often for family and friends",
        ],
        examples: [
          "J'adore ma meilleure amie. – I adore my best friend",
          "J'adore le chocolat. – I love chocolate",
        ],
      },
      {
        context: "To worship",
        usage1: {
          usage:
            'Adorer is used as "worship" only when referring to the worship of a deity (God) in a theological sense.',
          example:
            "Les chrétiens adorent Dieu. – The Christians worship the god (Worship the god)",
        },
        usage2: {
          usage:
            "Not to a figure who is not divine but is still highly esteemed or sacred.",
          example:
            "Les bouddhistes vénèrent les statues de Bouddha dans les temples. – The Buddhists worship the buddha statues in the temples (worship who is not divine)",
        },
      },
    ],
  },
  {
    word: "Acheter",
    meaning: "to buy/to purchase, to bribe",
    contexts: [
      {
        context: "To buy/to purchase",
        meaning: "Exchanging money for goods or services.",
        examples: [
          "J'ai acheté une nouvelle voiture. – I bought a new car",
          "Tu devrais acheter du pain pour le dîner. – You should buy some bread for dinner",
        ],
      },
      {
        context: "To bribe",
        meaning:
          "It carries the nuance of influencing someone's behavior or decision through material offerings.",
        examples: [
          "Il a essayé d'acheter la faveur des juges avec des compliments exagérés. – He tried to bribe the judges' favor with exaggerated compliments (influencing in someone's decision)",
        ],
        note: "Not refers to the illegal or unethical act of offering money or favors to influence someone's behavior, decisions, or actions. Used to describe corrupt or unethical practices.",
        additional_examples: [
          "Il a soudoyé un fonctionnaire pour éviter les taxes. – He bribed an official to avoid taxes (illegal act)",
        ],
      },
    ],
  },
  {
    word: "Connecter",
    meaning: "connect/link",
    contexts: [
      {
        context: "Connect/link",
        meaning:
          "Implies a direct, physical, or electronic link between two systems, devices, or networks.",
        examples: [
          "Le téléphone est connecté à Bluetooth. – The phone is connected to Bluetooth",
        ],
      },
      {
        context:
          "Not for physical connections, conceptual links, or relationships between ideas",
        examples: [
          "Cette route relie deux villages. – This road connects two villages",
        ],
      },
    ],
  },
];
