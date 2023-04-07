// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
      text: "I am a skilled web developer with experience in HTML, CSS, and JavaScript. I specialize in creating dynamic, user-friendly websites that are optimized for search engines and easy to navigate for users.",
    },
    {
      id: 2,
      name: 'David madson',
      job: 'Frontend developer',
      img: 'https://www.the-man.gr/wp-content/uploads/2020/10/freelancer-douleuei-apo-spiti-1024x679.jpg',
      text: 'Design a framework for creating user apps that grows with the needs of the company',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'Backend developer',
      img: 'https://media.istockphoto.com/photos/developer-in-office-picture-id1006045878?k=6&m=1006045878&s=170667a&w=0&h=RE7S_N0DBpyzQK-fFeNwWHQOdKQ8FF_cvHvGsOJgfZM=',
      text: 'I am an experienced backend developer with expertise in building scalable and efficient server-side solutions using programming languages like PHP, Ruby, Python, or Java. I have a deep understanding of databases, APIs, and server configurations and have worked with a variety of frameworks and tools to build complex systems.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'full stack developer',
      img: 'https://media.istockphoto.com/photos/successful-it-developer-picture-id1150528651?k=6&m=1150528651&s=170667a&w=0&h=wWtI_oEs2JZ6LTaG41CWJmIzfHiVvaPOoG2xU5F2zk4=',
      text: 'As a full stack developer, I am passionate about user experience and design. I work closely with designers and content creators to ensure that the applications I build are visually appealing, user-friendly, and optimized for search engines.',
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });