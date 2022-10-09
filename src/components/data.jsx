import image from './../images/appleplug.png'
const data = [
    {
      id: 1,
      Page: 'Home',
      Category: 'Home-experience-heading',
      title: 'Plumbing Services',
      desc: `Pipe Leaks, Muslim Shower & Tap Replacement, Geyser Installation, Opening Blocked Drains etc.`,
      img:'./images/plumbing1.png'
    },
    {
        id: 2,
        Page: 'Home',
        Category: 'Home-experience-card-1',
        title: 'Electric Services',
        desc: `Electrical Faults, UPS Installation, TV Installation, Breaker Replacement, Plug Repair, Wiring, motor repairing, AC repairing etc.`,
        img:'./images/electrician1.png'
      },
      {
        id: 3,
        Page: 'Home',
        Category: 'Home-experience-card-2',
        title: 'Cleaning & Janitorial Services',
        desc: `Premium cleaning & janitorial services for households and corporate clients i.e. Carporch wash, water tank wash, carpet wash etc`,
        img:'./images/tank.jpg'
      },
      {
        id: 4,
        Page: 'Home',
        Category: 'Home-experience-card-3',
        title: 'Wood work',
        desc: `Wood works, main doors fitting, kitchen cabinet setting, bed, closet racks & draw installation and fitting`,
        img:'./images/woodwork2.png'
      },
      {
        id: 5,
        Page: 'Home',
        Category: 'Home-portfolio-heading',
        title: 'Paint Services',
        desc: `house paint, door polish, rockwall graphy, concrete staining & epoxy finish, cabinet refinishing and repainting etc`,
        img:'./images/paint1.png'
      },
      {
        id: 6,
        Page: 'Home',
        Category: 'Home-portfolio-image1',
        title: 'Masonry Services',
        img: './images/masonry1.png',
        desc: `Wall plaster, wall construction, tiles flooring, marble flooring, Ceiling etc`
      },
      {
        id: 7,
        Page: 'Home',
        Category: 'Home-portfolio-image2',
        caption: 'Homepage of Classiera built with BOOTSTRAP, HTML and CSS',
        img: './images/classiera.png',
      },
      {
        id: 8,
        Page: 'Home',
        Category: 'Home-portfolio-image3',
        caption: 'Homepage of Brunei Barber built with HTML and CSS',
        img: './images/barber.png',
      },
      {
        id: 9,
        Page: 'Home',
        Category: 'Home-portfolio-image4',
        caption: 'Complete Product Development project',
        img: './images/yourevaluate.png',
      },
      {
        id: 10,
        Page: 'Home',
        Category: 'Home-portfolio-image5',
        caption: 'Todo app designed on React',
        img: './images/todo.gif',
      },
      {
        id: 11,
        Page: 'Home',
        Category: 'Home-portfolio-image6',
        caption: 'Homepage of encoders squad designed on HTML and CSS',
        img: './images/encoder-squad.png',
      },
      {
        id: 12,
        Page: 'Home',
        Category: 'Home-expectations-heading',
        title: 'ations',
        desc: `When employees have a strong, healthy relationship with their employers, the entire company benefits, this relationship can be established by addressing the expectations, an employee has from the company and whether employee can live up to the expectations of the organization or not.`,
      },
      {
        id: 13,
        Page: 'Home',
        Category: 'Home-expectations-card1',
        title: 'Why Me!',
        desc: `What you can expect from me`,
      },
      {
        id: 14,
        Page: 'Home',
        Category: 'Home-expectations-card1-accordian1',
        title: 'Coding Skills with Passion',
        desc: `Coding is my passion, and I would like to be a part of a firm that can exploit and nurture my passion.`,
      },
      {
        id: 15,
        Page: 'Home',
        Category: 'Home-expectations-card1-accordian2',
        title: 'Leadership Skills',
        desc: `Leading a complete product development project inspired leadership skills inside me. In the software field too, we have to consistently develop products that requires extensive team work. My experience in previous roles will prove beneficial to the organization.`,
      },
      {
        id: 16,
        Page: 'Home',
        Category: 'Home-expectations-card1-accordian3',
        title: 'Trust & Ownership',
        desc: `I am a trustworthy person and when I connect myself to an organization, I work as if I own the organization.`,
      },
      {
        id: 17,
        Page: 'Home',
        Category: 'Home-expectations-card1-accordian4',
        title: 'Management Skills',
        desc: `Software organizations have to constantly focus on writing clean and agile code with master-class project/product management. My previous experience can be translated to the new job role and will be instrumental in the software field.`,
      },
      {
        id: 18,
        Page: 'Home',
        Category: 'Home-expectations-card1-accordian5',
        title: 'Communication Skills',
        desc: `I also have strong communication skills, which are a cornerstone for software firms as they have to continuously communicate and meet client’s requirements.`,
      },
      {
        id: 19,
        Page: 'Home',
        Category: 'Home-expectations-card2',
        title: 'Which employer I prefer!',
        desc: `What do I expect from the employer`,
      },
      {
        id: 20,
        Page: 'Home',
        Category: 'Home-expectations-card2-accordian1',
        title: 'Reputable Organization',
        desc: `I want to get a position in a reputable organization, where my full potential can be unlocked.`,
      },
      {
        id: 21,
        Page: 'Home',
        Category: 'Home-expectations-card2-accordian2',
        title: 'Respectable Position',
        desc: `Although, I am not very experienced in coding field, I would like to get a respectable intermediate position of front-end development in a company. My other skills will surely support me to climb-up the ladder earlier.`,
      },
      {
        id: 22,
        Page: 'Home',
        Category: 'Home-expectations-card2-accordian3',
        title: 'Company Culture & Values',
        desc: `I prefer an organization with strong culture, because strong cultured organization leads to happier employees, and happier employees have been shown to be 12% more productive`,
      },
      {
        id: 23,
        Page: 'Home',
        Category: 'Home-expectations-card2-accordian4',
        title: 'Job Security',
        desc: `Established job security translates into less employee turnover, which will reduce hiring costs and better overall growth for the company. As an employee a secure job will empower me enough to shift all focus on my current job at hand.`,
      },
      {
        id: 24,
        Page: 'Home',
        Category: 'Home-expectations-card2-accordian5',
        title: 'Growth & Learning',
        desc: `I would like to work in an organization which offers training opportunities, so that I may take my skills to the next level and be profitable to the organization in return.`,
      },
      {
        id: 25,
        Page: 'Home',
        Category: 'Home-expectations-card2-accordian5',
        title: 'Front-end Development',
        desc: `Innovation isn't always obvious to the eye, but look a little closer`,
      },

  ];
  export default data;
  