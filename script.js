const data = [
  { title: '"Абай жолы" - Мұхтар Әуезов', description: 'Абайдың өмірі мен қазақ қоғамының тарихи шежіресі.' },
  { title: '"Қан мен тер" - Әбдіжәміл Нұрпейісов', description: 'Қазақ халқының қиын кезеңдерінің эпикалық баяны.' },
  { title: '"Көшпенділер" - Ілияс Есенберлин', description: 'Қазақ хандығының қалыптасу тарихы.' },
  { title: '"За нами Москва" - Александр Бек', description: 'Панфиловшылардың ержүректігі туралы тарихи деректі роман.' }
];

// Карта қосатын негізгі контейнер
const container = document.getElementById('container');

// Әрбір деректі карта ретінде шығару
data.forEach(item => {
  const card = document.createElement('div'); // Карта элементі
  card.classList.add('card');

  // Тақырып
  const title = document.createElement('h3');
  title.textContent = item.title;

  // Сипаттама
  const description = document.createElement('p');
  description.textContent = item.description;

  // Жою батырмасы
  const button = document.createElement('button');
  button.textContent = 'Жою';
  button.classList.add('btn');

  // Батырмаға жою функционалын қосу
  button.addEventListener('click', () => {
      container.removeChild(card);
  });

  // Барлық элементтерді картаға қосу
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(button);

  // Картаны контейнерге қосу
  container.appendChild(card);
});
