function submitQuiz() {
  const answers = {};
  const form = document.getElementById('quizForm');
  const formData = new FormData(form);

  // Tüm cevapları topluyoruz
  formData.forEach((value, key) => {
    if (!answers[value]) {
      answers[value] = 0;
    }
    answers[value]++;
  });

  // En çok seçilen karakteri buluyoruz
  const topCharacter = Object.keys(answers).reduce((a, b) => 
    answers[a] > answers[b] ? a : b
  );

  // Karakter analizleri ve resim URL'leri
  const characterData = {
    deoksun: {
      name: "Sung Deok-sun",
      description: "Sen enerjik, sosyal ve herkesi güldürmeyi seven birisin. Hayata renk katıyorsun!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMV-Z7TSTfvbmTWSRktH9kmpnn87KteVCe_uJ4OjO12UUksSJY4PZMIEE1&s=10"
    },
    bora: {
      name: "Sung Bo-ra",
      description: "Sen ciddi, olgun ve her zaman bir planı olan birisin. Sorunlara çözüm odaklı yaklaşırsın.",
      image: "https://images.app.goo.gl/73qe5mrhgCMp5wTj9"
    },
    junghwan: {
      name: "Kim Jung-hwan",
      description: "Sen içine kapanık ama sadık ve sevdiğin insanlara karşı çok fedakâr birisin.",
      image: "https://images.app.goo.gl/fXrjA8pyRhETusPNA"
    },
    dongryong: {
      name: "Ryu Dong-ryong",
      description: "Sen esprili, eğlenceli ve ortama neşe katan birisin. Herkes seni sever!",
      image: "https://images.app.goo.gl/pnrecWFct5ppnnuT7"
    },
    taek: {
      name: "Choi Taek",
      description: "Sen sessiz ama derin bir kişiliksin. Bir şeye odaklandığında mükemmel sonuçlar çıkarırsın.",
      image: "https://images.app.goo.gl/L29CdrFWvc64c5TS7"
    },
    sunwoo: {
      name: "Sunwoo",
      description: "Sen yardımsever, düşünceli ve her zaman sevdiklerini koruyan birisin.",
      image: "https://images.app.goo.gl/rgKM9sWZMv4cRtGZ6"
    },
    baba: {
      name: "Junghwan'ın Babası",
      description: "Sen sabırlı, sevgi dolu ve her zaman ailenin iyiliğini düşünen birisisin.",
      image: "https://images.app.goo.gl/RcHe6DZVKJ1TsJYh7"
    }
  };

  // Sonucu gösteriyoruz
  const result = document.getElementById('result');
  const character = characterData[topCharacter];

  if (character) {
    result.innerHTML = `
      <h2>${character.name}</h2>
      <p>${character.description}</p>
      <img src="${character.image}" alt="${character.name}">
    `;
    result.style.display = 'block';
  } else {
    result.innerHTML = <p>Lütfen tüm soruları cevaplayın!</p>;
    result.style.display = 'block';
  }
}