const resultText = document.querySelector("#result-text");
const diagnosticDiv = document.querySelector("#diagnostic");
const restartBtn = document.querySelector("#restart-btn");
const sendContactBtn = document.querySelector("#send-contact");
const shareFriendBtn = document.querySelector("#share-friend");
const contactInput = document.querySelector("#contact");

const score = parseInt(localStorage.getItem("quizScore"), 10) || 0;

function getDiagnostic(score) {
  // Score max = 75 (15 questions x 5 points)
  if (score >= 60) {
    return `🎉 Excellent ! Votre entreprise est bien avancée. 
Vous pouvez aller encore plus loin avec des flyers, logos, sites internet ou applications mobiles professionnels à prix très abordable. 
Contactez-nous sur WhatsApp pour discuter de vos besoins, nous sommes disponibles 24h/24 et 7j/7 !`;
  } else if (score >= 40) {
    return `👍 Vous êtes sur la bonne voie. 
Pour booster votre visibilité, pensez à des supports marketing adaptés : flyers, logos, site web, appli mobile. 
Contactez-nous sur WhatsApp pour des solutions sur mesure, à petit prix et disponibles 24h/24 et 7j/7 !`;
  } else if (score > 20) {
    return `⚠️ Votre projet a besoin d’être mieux structuré. 
Un accompagnement personnalisé et des outils pros (flyers, logo, site internet, appli mobile) peuvent vous aider à décoller. 
Contactez-nous sur WhatsApp pour en parler, nous sommes là pour vous 24h/24 et 7j/7 !`;
  } else {
    return `❌ Vous démarrez ou rencontrez des difficultés. 
Nous pouvons vous aider à lancer votre projet avec des outils pros (flyers, logo, site web, appli mobile) à prix accessible. 
Contactez-nous sur WhatsApp pour discuter, nous sommes disponibles 24h/24 et 7j/7 !`;
  }
}

resultText.textContent = `Votre score : ${score} points`;
diagnosticDiv.textContent = getDiagnostic(score);

restartBtn.addEventListener("click", () => {
  // Ouvre WhatsApp avec message personnalisé
  const phoneNumber = "237620919504";
  const message = encodeURIComponent(
    `Bonjour, je viens de terminer le quiz entrepreneur (score : ${score}/75).\n` +
    `Je souhaite discuter de solutions pour mon projet : flyers, logo, site internet, application mobile, etc. ` +
    `Merci de me conseiller, j’ai besoin d’un accompagnement professionnel à prix abordable. ` +
    `Vous êtes disponible 24h/24 et 7j/7 ?`
  );
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
});

sendContactBtn.addEventListener("click", () => {
  const contact = contactInput.value.trim();
  if (!contact) {
    alert("Veuillez entrer votre contact.");
    return;
  }
  alert(`Merci ! Nous vous contacterons bientôt via : ${contact}`);
  contactInput.value = "";
});

shareFriendBtn.addEventListener("click", async () => {
  const shareData = {
    title: "Testez ce quiz pour booster votre entreprise !",
    text: "Faites ce quiz pour savoir où vous en êtes dans votre projet entrepreneurial.",
    url: window.location.origin + "/quiz.html",
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch {
      alert("Partage annulé.");
    }
  } else {
    try {
      await navigator.clipboard.writeText(shareData.url);
      alert("Lien copié dans le presse-papier !");
    } catch {
      alert("Impossible de copier le lien, voici le lien : " + shareData.url);
    }
  }
});
