
import React from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Clock, 
  HelpCircle, 
  FileText, 
  PiggyBank, 
  Smile, 
  CheckCircle2,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export const THEME_COLOR = "#1657e8";

export const SERVICES = [
  {
    title: "Rottamazione 5",
    description: "Gestione completa delle cartelle esattoriali e piani di rientro agevolati.",
    icon: <ShieldCheck className="w-8 h-8 text-[#1657e8]" />
  },
  {
    title: "Regime Forfettario",
    description: "Ottimizzazione fiscale per professionisti: paga meno tasse legalmente.",
    icon: <PiggyBank className="w-8 h-8 text-[#1657e8]" />
  },
  {
    title: "Modelli 730",
    description: "Assistenza per rimborsi fiscali veloci e sicuri sul tuo stipendio.",
    icon: <FileText className="w-8 h-8 text-[#1657e8]" />
  },
  {
    title: "Resto al Sud",
    description: "Accesso a contributi a fondo perduto per nuove attività nel Mezzogiorno.",
    icon: <TrendingUp className="w-8 h-8 text-[#1657e8]" />
  }
];

export const TESTIMONIALS = [
  {
    name: "Marco Rossi",
    role: "Freelance",
    content: "Fisco3 ha trasformato il mio incubo fiscale in una passeggiata. Professionisti seri e sempre disponibili.",
    image: "https://picsum.photos/seed/marco/100/100"
  },
  {
    name: "Elena Bianchi",
    role: "Proprietaria Negozio",
    content: "Finalmente un team che parla la mia lingua. La consulenza gratuita mi ha fatto risparmiare migliaia di euro.",
    image: "https://picsum.photos/seed/elena/100/100"
  },
  {
    name: "Giuseppe Verdi",
    role: "Startup Founder",
    content: "Grazie al loro aiuto con Resto al Sud ho finalmente aperto la mia attività. Consigliatissimi!",
    image: "https://picsum.photos/seed/giuseppe/100/100"
  }
];

export const FAQ_DATA = [
  {
    question: "Cos'è Fisco3 e come funziona?",
    answer: "Fisco3 è un servizio online che offre consulenze fiscali gratuite e supporto continuo per professionisti, freelance e imprenditori che vogliono gestire la loro Partita IVA in modo semplice e digitale."
  },
  {
    question: "Quanto costa il servizio?",
    answer: "La consulenza iniziale è sempre gratuita. Successivamente, offriamo diversi pacchetti annuali in base al regime fiscale e ai servizi richiesti, con prezzi trasparenti e senza sorprese."
  },
  {
    question: "Posso aprire la Partita IVA con voi?",
    answer: "Certamente. Uno dei nostri commercialisti ti guiderà passo-passo nell’apertura della Partita IVA, spiegandoti i costi, i tempi e le pratiche da seguire, il tutto in modo 100% digitale."
  },
  {
    question: "Seguite anche regimi forfettari, semplificati e ordinari?",
    answer: "Sì. Il nostro team di esperti segue clienti in ogni regime fiscale, incluso forfettario, semplificato, ordinario e speciali (agricolo, minimo, ecc.). Ti aiutiamo a scegliere quello più vantaggioso per te."
  },
  {
    question: "Fornite anche assistenza per fatturazione elettronica?",
    answer: "Assolutamente. Offriamo una piattaforma facile da usare per la creazione e l’invio di fatture elettroniche, compatibile con l’Agenzia delle Entrate, oltre a supporto per qualsiasi dubbio tecnico o fiscale."
  },
  {
    question: "Quanto tempo ci vuole per ricevere una risposta?",
    answer: "Rispondiamo di norma entro 24/48 ore lavorative. Durante l’orario di ufficio, potresti ricevere risposta anche entro poche ore. Puoi contattarci via email, telefono o direttamente tramite il nostro sito."
  },
  {
    question: "Posso fare una consulenza gratuita senza impegno?",
    answer: "Sì! La prima consulenza è sempre gratuita e non vincolante. Serve a capire le tue esigenze, valutare il regime fiscale più adatto e spiegarti come lavoriamo."
  },
  {
    question: "Cosa succede dopo la consulenza gratuita?",
    answer: "Dopo la consulenza puoi decidere in completa autonomia se attivare uno dei nostri piani. Se scegli di continuare con noi, ci occuperemo di tutto: dalla burocrazia alla gestione della tua contabilità."
  }
];
