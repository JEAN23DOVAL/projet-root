// quiz.js
const questions = [
  // 1. Existence du business
  {
    id: 1,
    text: "Avez-vous un business ou une activité professionnelle ?",
    answers: [
      { text: "Oui, depuis longtemps", points: 5, next: 2 },
      { text: "Oui, récemment démarré", points: 3, next: 2 },
      { text: "Non, je veux en créer un", points: 1, next: 2 },
    ],
  },

  // 2. Type d’activité
  {
    id: 2,
    text: "Quel est le secteur principal de votre activité ?",
    answers: [
      { text: "Commerce (boutique, vente)", points: 5, next: 3 },
      { text: "Services (consulting, maintenance...)", points: 4, next: 3 },
      { text: "Technologie / Digital", points: 3, next: 3 },
      { text: "Autre", points: 2, next: 3 },
    ],
  },

  // 3. Communication & visibilité
  {
    id: 3,
    text: "Utilisez-vous des supports pour faire connaître votre activité ?",
    answers: [
      { text: "Flyers, brochures, affiches", points: 5, next: 4 },
      { text: "Publicité en ligne (Google, Facebook...)", points: 5, next: 4 },
      { text: "Réseaux sociaux (Facebook, Instagram...)", points: 5, next: 4 },
      { text: "Pas encore", points: 1, next: 4 },
    ],
  },

  // 4. Site web et boutique
  {
    id: 4,
    text: "Avez-vous un site internet ou une boutique en ligne ?",
    answers: [
      { text: "Oui, site complet et actif", points: 5, next: 5 },
      { text: "Oui, site simple ou en construction", points: 3, next: 5 },
      { text: "Non, pas encore", points: 1, next: 5 },
    ],
  },

  // 5. Publicité et marketing digital
  {
    id: 5,
    text: "Investissez-vous dans la publicité payante ?",
    answers: [
      { text: "Oui, régulièrement", points: 5, next: 6 },
      { text: "Oui, de temps en temps", points: 3, next: 6 },
      { text: "Non, pas encore", points: 1, next: 6 },
    ],
  },

  // 6. Gestion de la relation client
  {
    id: 6,
    text: "Utilisez-vous un CRM ou une base de contacts clients ?",
    answers: [
      { text: "Oui, un CRM complet", points: 5, next: 7 },
      { text: "Oui, une simple liste de contacts", points: 3, next: 7 },
      { text: "Non, pas encore", points: 1, next: 7 },
    ],
  },

  // 7. Fidélisation et suivi clients
  {
    id: 7,
    text: "Avez-vous des outils pour fidéliser vos clients (newsletters, programmes...) ?",
    answers: [
      { text: "Oui, newsletters régulières", points: 5, next: 8 },
      { text: "Oui, programmes de fidélité", points: 5, next: 8 },
      { text: "Non, pas encore", points: 1, next: 8 },
    ],
  },

  // 8. Capacité d’investissement
  {
    id: 8,
    text: "Êtes-vous prêt à investir pour développer votre communication et vos ventes ?",
    answers: [
      { text: "Oui, un budget défini chaque mois", points: 5, next: 9 },
      { text: "Oui, selon les opportunités", points: 3, next: 9 },
      { text: "Non, je cherche des solutions gratuites", points: 1, next: 9 },
    ],
  },

  // 9. Accompagnement souhaité
  {
    id: 9,
    text: "Souhaitez-vous être accompagné pour améliorer votre visibilité et vos ventes ?",
    answers: [
      { text: "Oui, par un expert ou une agence", points: 5, next: 10 },
      { text: "Oui, en autonomie avec formations", points: 3, next: 10 },
      { text: "Non, pas pour le moment", points: 1, next: 10 },
    ],
  },

  // 10. Disponibilité pour discuter
  {
    id: 10,
    text: "Accepteriez-vous un rendez-vous pour discuter de vos besoins ?",
    answers: [
      { text: "Oui, contactez-moi", points: 5, next: 11 },
      { text: "Peut-être plus tard", points: 3, next: 11 },
      { text: "Non, merci", points: 0, next: 11 },
    ],
  },

  // 11. Objectifs de croissance
  {
    id: 11,
    text: "Quels sont vos objectifs principaux pour cette année ?",
    answers: [
      { text: "Augmenter le chiffre d’affaires", points: 5, next: 12 },
      { text: "Améliorer la visibilité", points: 4, next: 12 },
      { text: "Fidéliser les clients existants", points: 4, next: 12 },
      { text: "Je ne sais pas encore", points: 2, next: 12 },
    ],
  },

  // 12. Difficultés rencontrées
  {
    id: 12,
    text: "Quelles sont vos principales difficultés aujourd’hui ?",
    answers: [
      { text: "Trouver de nouveaux clients", points: 5, next: 13 },
      { text: "Manque de visibilité", points: 4, next: 13 },
      { text: "Gérer la communication", points: 4, next: 13 },
      { text: "Manque de budget", points: 3, next: 13 },
      { text: "Autre", points: 2, next: 13 },
    ],
  },

  // 13. Formation & montée en compétences
  {
    id: 13,
    text: "Souhaitez-vous former votre équipe ou vous-même aux outils digitaux ?",
    answers: [
      { text: "Oui, formation personnalisée", points: 5, next: 14 },
      { text: "Oui, formations en ligne", points: 3, next: 14 },
      { text: "Non, pas pour le moment", points: 1, next: 14 },
    ],
  },

  // 14. Utilisation des outils numériques
  {
    id: 14,
    text: "Utilisez-vous des outils numériques pour la gestion quotidienne (facturation, planning...) ?",
    answers: [
      { text: "Oui, plusieurs outils intégrés", points: 5, next: 15 },
      { text: "Quelques outils simples", points: 3, next: 15 },
      { text: "Non, tout est manuel", points: 1, next: 15 },
    ],
  },

  // 15. Budget global marketing/com numérique
  {
    id: 15,
    text: "Quel budget global allouez-vous au marketing et digital chaque mois ?",
    answers: [
      { text: "Plus de 500 000 FCFA (~760€)", points: 5, next: null },
      { text: "Entre 100 000 et 500 000 FCFA", points: 4, next: null },
      { text: "Moins de 100 000 FCFA", points: 2, next: null },
      { text: "Pas de budget dédié", points: 0, next: null },
    ],
  },
];

let currentQuestionId = 1;
let score = 0;
let questionCount = 0;
const questionText = document.querySelector("#question-text");
const answersDiv = document.querySelector("#answers");
const progressBar = document.querySelector("#quiz-progress");

// Nombre total de questions du quiz
const TOTAL_QUESTIONS = 15;

function showQuestion(id) {
  const question = questions.find(q => q.id === id);
  if (!question) return;

  questionText.textContent = question.text;
  answersDiv.innerHTML = "";

  question.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.addEventListener("click", () => {
      score += answer.points;
      questionCount++;
      if (answer.next) {
        currentQuestionId = answer.next;
        showQuestion(currentQuestionId);
        updateProgressBar();
      } else {
        finishQuiz();
      }
    });
    answersDiv.appendChild(btn);
  });
}

function updateProgressBar() {
  progressBar.max = TOTAL_QUESTIONS;
  progressBar.value = questionCount;
}

function finishQuiz() {
  localStorage.setItem("quizScore", score);
  window.location.href = "/frontend/result.html"; // Redirige vers la page de résultats
}

showQuestion(currentQuestionId);
updateProgressBar();
