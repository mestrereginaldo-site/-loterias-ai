export const LOTTERIES = [
  {
    id: 'megasena',
    name: 'Mega-Sena',
    numbers: 6,
    minNumber: 1,
    maxNumber: 60,
    color: 'from-green-500 to-emerald-600',
    price: 4.50,
    draws: ['Quarta', 'Sábado']
  },
  {
    id: 'lotofacil',
    name: 'Lotofácil',
    numbers: 15,
    minNumber: 1,
    maxNumber: 25,
    color: 'from-blue-500 to-cyan-600',
    price: 2.50,
    draws: ['Segunda', 'Quarta', 'Sexta']
  },
  {
    id: 'quina',
    name: 'Quina',
    numbers: 5,
    minNumber: 1,
    maxNumber: 80,
    color: 'from-purple-500 to-pink-600',
    price: 2.00,
    draws: ['Terça', 'Quinta', 'Sábado']
  },
  {
    id: 'lotomania',
    name: 'Lotomania',
    numbers: 20,
    minNumber: 0,
    maxNumber: 99,
    color: 'from-orange-500 to-red-600',
    price: 3.00,
    draws: ['Terça', 'Sexta']
  },
  {
    id: 'duplasena',
    name: 'Dupla Sena',
    numbers: 6,
    minNumber: 1,
    maxNumber: 50,
    color: 'from-yellow-500 to-amber-600',
    price: 3.50,
    draws: ['Terça', 'Quinta', 'Sábado']
  },
  {
    id: 'timemania',
    name: 'Timemania',
    numbers: 10,
    minNumber: 1,
    maxNumber: 80,
    color: 'from-indigo-500 to-purple-600',
    price: 3.00,
    draws: ['Terça', 'Quinta', 'Sábado']
  }
] as const;

export const PREMIUM_FEATURES = [
  'Desdobramentos com IA avançada',
  'Análises preditivas em tempo real',
  'Alertas personalizados por email',
  'Histórico completo ilimitado',
  'Dashboard estatístico avançado',
  'API para integrações',
  'Suporte prioritário 24/7',
  'Relatórios mensais detalhados'
];

export const STATS_DATA = {
  totalUsers: 50000,
  totalPrizes: 120000000,
  accuracy: 92,
  yearsData: 20,
  avgSavings: 40,
  satisfaction: 98
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/loterias-ai',
  twitter: 'https://twitter.com/loterias_ai',
  instagram: 'https://instagram.com/loterias.ai',
  youtube: 'https://youtube.com/@loterias-ai',
  email: 'contato@loterias-ai.com.br'
};
