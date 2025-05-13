// trainers.js - Complete script for trainers page

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Access static URLs provided by Django
  const staticUrls = window.staticUrls || {};
  const logoPath = staticUrls.logo || '/static/images/logo.png';

  // Main app rendering
  ReactDOM.render(
    React.createElement(TrainersPage, null),
    document.getElementById('root')
  );

  // TrainersPage Component
  function TrainersPage() {
    return React.createElement(
      'div',
      { className: 'min-h-screen bg-gray-100 pb-12' },
      React.createElement(Navigation, null),
      React.createElement('div', { className: 'container mx-auto px-4 md:px-6 pt-24 md:pt-28' },
        React.createElement(TrainersList, null)
      )
    );
  }

  // Navigation Component
  function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const currentPath = window.location.pathname;

    const isActive = (path) => {
      const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
      const normalizedCurrentPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
      return normalizedCurrentPath === normalizedPath ? 'text-purple-600 font-semibold' : 'text-gray-600 hover:text-gray-900';
    };

    return React.createElement(
      'nav',
      { 
        className: 'fixed w-full z-50 transition-all duration-300',
        style: { 
          background: 'rgba(249, 250, 251, 0.8)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(243, 244, 246, 0.5)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
        }
      },
      React.createElement(
        'div',
        { className: 'container mx-auto px-6 py-4 flex justify-between items-center' },
        // Logo area
        React.createElement(
          'div',
          { className: 'flex items-center space-x-2' },
          React.createElement('a', { href: '/' },
            React.createElement('img', { src: logoPath, alt: 'SkillTrai Logo', className: 'h-12 md:h-20' })
          )
        ),
        // Desktop navigation
        React.createElement(
          'div',
          { className: 'hidden md:flex items-center justify-center flex-1' },
          React.createElement(
            'div',
            { className: 'flex items-center space-x-8' },
            React.createElement('a', { href: '/about', className: isActive('/about') }, 'About'),
            React.createElement('a', { href: '/trainers/', className: isActive('/trainers/') }, 'Trainers'),
            React.createElement('a', { href: '/courses/', className: isActive('/courses/') }, 'Courses'),
            React.createElement('a', { href: '/events/', className: isActive('/events/') }, 'Events')
          )
        ),
        // Register Button
        React.createElement(
          'div',
          { className: 'hidden md:block' },
          React.createElement('a', {
            href: '/register/',
            className: 'bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors'
          }, 'Register')
        ),
        // Mobile menu button
        React.createElement(
          'button',
          {
            className: 'md:hidden text-gray-900',
            onClick: () => setIsMenuOpen(!isMenuOpen)
          },
          isMenuOpen
            ? React.createElement('svg', { className: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
                React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M6 18L18 6M6 6l12 12' })
              )
            : React.createElement('svg', { className: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
                React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M4 6h16M4 12h16M4 18h16' })
              )
        )
      ),
      // Mobile menu
      isMenuOpen && React.createElement(
        'div',
        { className: 'md:hidden bg-white shadow-lg py-4' },
        React.createElement(
          'div',
          { className: 'container mx-auto px-4 flex flex-col space-y-4' },
          React.createElement('a', { href: '/about', className: isActive('/about') }, 'About'),
          React.createElement('a', { href: '/trainers/', className: isActive('/trainers/') }, 'Trainers'),
          React.createElement('a', { href: '/courses/', className: isActive('/courses/') }, 'Courses'),
          React.createElement('a', { href: '/events/', className: isActive('/events/') }, 'Events'),
          React.createElement('a', { href: '/register/', className: 'bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 w-full text-center transition-colors' }, 'Register')
        )
      )
    );
  }

  // TrainersList Component
  function TrainersList() {
    const [activeTrainer, setActiveTrainer] = React.useState(null);
    const [activeFilter, setActiveFilter] = React.useState('all');
    const [animateDetail, setAnimateDetail] = React.useState(false);

    // For fallback images if trainer images don't exist
    const fallbackImg = 'https://picsum.photos/400/600';

    // Trainer data with static URLs from Django
    const trainers = [
      {
        id: 'ikhlas',
        name: 'Ikhlas PV',
        title: 'CEO & AI Engineer',
        rating: 4.9,
        expertise: '5+ years',
        coverImage: staticUrls.trainerImages?.ikhlas || '/static/images/ikhlas.jpg',
        bannerColor: '#8b5cf6',
        courses: [
          {
            id: 1,
            name: 'AI Developer',
            image: staticUrls.courseImages?.aiDeveloper || '/static/images/ai-developer.jpg'
          },
          {
            id: 2,
            name: 'AI Engineer',
            image: staticUrls.courseImages?.aiEngineer || '/static/images/ai-engineer.jpg'
          }
        ],
        bio: 'CEO & Founder of SkillTrai, currently works as an AI Engineer at Impex. BTech CSE graduate from KTU with expertise in building AI-powered applications and integrating them with web platforms.',
        skills: ['AI Development', 'Python', 'Full-Stack Development', 'System Architecture'],
        fullBio: 'Ikhlas combines his expertise in AI development and full-stack engineering to provide students with a comprehensive understanding of building end-to-end AI solutions. His courses focus on practical implementation, helping students transition from theoretical knowledge to building production-ready AI applications. As the CEO and founder of SkillTrai, he is passionate about bridging education gaps through technology and empowering students to excel in the digital economy.',
        credentials: [
          'BTech CSE graduate from KTU',
          'Works as AI Engineer at Impex',
          'Experience in MERN stack development',
          'Specializes in integrating AI with web applications'
        ],
        contact: {
          email: 'ikhlas110@gmail.com',
          linkedin: 'https://www.linkedin.com/in/ikhlas-pv/',
          instagram: 'https://www.instagram.com/ikhlas.pv'
        },
        category: 'tech',
        featured: true
      },
      {
        id: 'akshay',
        name: 'Akshay',
        title: 'Lead AI Developer Trainer',
        rating: 4.8,
        expertise: '4+ years',
        coverImage: staticUrls.trainerImages?.akshay || '/static/images/akshay.jpg',
        bannerColor: '#6366f1',
        courses: [
          {
            id: 1,
            name: 'AI Developer',
            image: staticUrls.courseImages?.aiDeveloper || '/static/images/ai-developer.jpg'
          }
        ],
        bio: 'Lead trainer for the AI Developer program, bringing extensive experience in building AI-powered applications and solutions. Combines theoretical concepts with hands-on projects for effective learning.',
        skills: ['Artificial Intelligence', 'Python', 'Machine Learning', 'Deep Learning'],
        fullBio: 'Akshay leads our AI Developer training program, bringing extensive experience in building AI-powered applications and solutions. His teaching approach combines theoretical concepts with hands-on projects, ensuring students develop practical skills they can immediately apply in real-world scenarios. He specializes in helping students understand complex AI concepts and implement them in practical applications.',
        credentials: [
          'Expertise in Python and AI frameworks',
          'Experience in developing enterprise AI solutions',
          'Background in computer vision and NLP',
          'Strong track record of mentoring junior developers'
        ],
        contact: {
          email: 'akshay@skilltrai.com',
          linkedin: 'https://www.linkedin.com/'
        },
        category: 'tech',
        featured: true
      },
      {
        id: 'afnan',
        name: 'Afnan',
        title: 'CTO & Robotics Engineer',
        rating: 4.7,
        expertise: '3+ years',
        coverImage: staticUrls.trainerImages?.afnan || '/static/images/afnan.jpg',
        bannerColor: '#3b82f6',
        courses: [
          {
            id: 1,
            name: 'Robotics and IoT',
            image: staticUrls.courseImages?.robotics || '/static/images/robotics.jpg'
          },
          {
            id: 2,
            name: 'Content Creation',
            image: staticUrls.courseImages?.content || '/static/images/content.jpg'
          }
        ],
        bio: 'CTO & Co-founder of SkillTrai, working as a Robotics Engineer. Govt. of Kerala Polytechnic Electronics graduate with expertise in curriculum development and technical education.',
        skills: ['Robotics Engineering', 'Electronics', 'Video Production', 'Hardware Design'],
        fullBio: 'Afnan brings his expertise in robotics engineering and electronics to help students build practical robotics skills. With a background in government polytechnic education and professional experience as a Robotics Engineer, he provides both theoretical knowledge and hands-on expertise in building functional robotic systems. As the CTO of SkillTrai, he leads technical curriculum development and ensures students receive industry-relevant training.',
        credentials: [
          'Government of Kerala Polytechnic Electronics graduate',
          'Works as Robotics Engineer',
          'Experience in hardware design and prototyping',
          'Specializes in integrating sensors and control systems'
        ],
        contact: {
          email: 'afnan@skilltrai.com',
          linkedin: 'https://www.linkedin.com/in/afnanyusuf/'
        },
        category: 'tech',
        featured: true
      },
      {
        id: 'ajvad',
        name: 'Ajvad K',
        title: 'Academic Director',
        rating: 4.8,
        expertise: '3+ years',
        coverImage: staticUrls.trainerImages?.ajvad || '/static/images/ajvad.jpg',
        bannerColor: '#10b981',
        courses: [
          {
            id: 1,
            name: 'Data Analysis',
            image: staticUrls.courseImages?.dataAnalysis || '/static/images/data-analysis.jpg'
          }
        ],
        bio: 'Academic Director at SkillTrai, MSc Data Science graduate from Aligarh Muslim University. Working as ML Engineer at ACMF Technologies with focus on data science education.',
        skills: ['Data Science', 'Python', 'Statistical Analysis', 'Machine Learning'],
        fullBio: 'Ajvad leads our Data Analysis training program, bringing expertise in transforming raw data into actionable insights. With an MSc in Data Science and professional experience as an ML Engineer, he helps students develop the analytical skills needed to excel in data-driven roles. As the Academic Director of SkillTrai, he oversees curriculum design and ensures academic excellence across all programs.',
        credentials: [
          'MSc Data Science graduate from Aligarh Muslim University',
          'Works as ML Engineer at ACMF Technologies',
          'Expertise in data cleaning, analysis, and visualization',
          'Experience implementing machine learning models for business problems'
        ],
        contact: {
          email: 'ajvadk.ds@gmail.com',
          linkedin: 'https://www.linkedin.com/in/ajvad-k-6291311b1/',
          instagram: 'https://www.instagram.com/_aj___u__'
        },
        category: 'data',
        featured: false
      },
      {
        id: 'hanoon',
        name: 'Hanoon',
        title: 'BI Specialist',
        rating: 4.7,
        expertise: '3+ years',
        coverImage: staticUrls.trainerImages?.hanoon || '/static/images/hanoon.jpg',
        bannerColor: '#10b981',
        courses: [
          {
            id: 1,
            name: 'Data Analysis',
            image: staticUrls.courseImages?.dataAnalysis || '/static/images/data-analysis.jpg'
          }
        ],
        bio: 'Business Intelligence Specialist with focus on data visualization and analytics. Expert in transforming complex data into clear visual insights that drive business decisions.',
        skills: ['Business Intelligence', 'Data Visualization', 'SQL', 'Analytics'],
        fullBio: 'Hanoon co-leads our Data Analysis program, focusing on the business intelligence and visualization aspects of data analytics. His courses emphasize transforming complex data into clear visual insights that drive business decisions and strategy development. He specializes in teaching students how to create effective dashboards and reports that communicate data stories clearly to stakeholders.',
        credentials: [
          'Expert in business intelligence tools and methodologies',
          'Experience in implementing data-driven solutions',
          'Background in database design and optimization',
          'Specializes in creating interactive dashboards'
        ],
        contact: {
          email: 'hanoon@skilltrai.com',
          linkedin: 'https://www.linkedin.com/'
        },
        category: 'data',
        featured: false
      },
      {
        id: 'akshay-design',
        name: 'Akshay',
        title: 'Design Lead',
        rating: 4.9,
        expertise: '4+ years',
        coverImage: staticUrls.trainerImages?.akshayDesign || '/static/images/akshay-design.jpg',
        bannerColor: '#ec4899',
        courses: [
          {
            id: 1,
            name: 'Design & Digital Marketing',
            image: staticUrls.courseImages?.design || '/static/images/design.jpg'
          }
        ],
        bio: 'Lead UI/UX Design Trainer with expertise in creating user-centered digital experiences. Covers the entire design process from research to implementation.',
        skills: ['UI Design', 'UX Research', 'Design Systems', 'Prototyping'],
        fullBio: 'Akshay leads our UI/UX Design program, bringing expertise in creating user-centered digital experiences. His courses cover the entire design process from research and wireframing to high-fidelity prototypes and design implementation, preparing students for successful careers in design. He emphasizes both the creative and technical aspects of design, ensuring students develop a well-rounded skill set.',
        credentials: [
          'Extensive portfolio of successful UI/UX projects',
          'Experience designing for web, mobile, and enterprise applications',
          'Expert in industry-standard design tools',
          'Background in design thinking methodologies'
        ],
        contact: {
          email: 'akshay.design@skilltrai.com',
          linkedin: 'https://www.linkedin.com/'
        },
        category: 'design',
        featured: false
      },
      {
        id: 'anas',
        name: 'Anas',
        title: 'UI/UX Specialist',
        rating: 4.7,
        expertise: '3+ years',
        coverImage: staticUrls.trainerImages?.anas || '/static/images/anas.jpg',
        bannerColor: '#ec4899',
        courses: [
          {
            id: 1,
            name: 'Design & Digital Marketing',
            image: staticUrls.courseImages?.design || '/static/images/design.jpg'
          }
        ],
        bio: 'UI/UX Design Trainer specializing in technical aspects of interface design. Focuses on creating visually appealing and highly functional interfaces for various platforms.',
        skills: ['Interface Design', 'Interactive Prototyping', 'Visual Design', 'User Testing'],
        fullBio: 'Anas specializes in teaching the technical aspects of UI/UX design, focusing on creating visually appealing and highly functional interfaces. His courses emphasize practical skills that help students build impressive portfolios and transition into professional design roles. He guides students through the entire design process, from initial concepts to final implementation, with a focus on creating interfaces that are both beautiful and functional.',
        credentials: [
          'Expertise in design software and prototyping tools',
          'Background in visual and interaction design',
          'Experience in conducting user research and testing',
          'Portfolio of successful design projects'
        ],
        contact: {
          email: 'anas@skilltrai.com',
          linkedin: 'https://www.linkedin.com/'
        },
        category: 'design',
        featured: false
      },
      {
        id: 'shareef',
        name: 'Mohammed Shareef',
        title: 'CMO & Co-founder',
        rating: 4.8,
        expertise: '3+ years',
        coverImage: staticUrls.trainerImages?.shareef || '/static/images/shareef.jpg',
        bannerColor: '#f59e0b',
        courses: [
          {
            id: 1,
            name: 'Content Creation',
            image: staticUrls.courseImages?.content || '/static/images/content.jpg'
          }
        ],
        bio: 'CMO & Co-founder of SkillTrai, BTech CSE graduate from KTU. Leads marketing strategies and content creation training with focus on digital platforms.',
        skills: ['Video Editing', 'Motion Graphics', 'Content Strategy', 'Digital Marketing'],
        fullBio: 'Shareef specializes in teaching video editing and content strategy, helping students create engaging video content for various platforms. His courses emphasize both technical editing skills and strategic content planning to maximize audience engagement and achieve marketing objectives. As the CMO of SkillTrai, he brings practical insights from marketing and content creation to help students build successful careers in digital content.',
        credentials: [
          'BTech CSE graduate from KTU',
          'Experience in digital content creation and marketing',
          'Expertise in video editing and post-production',
          'Background in developing content strategies'
        ],
        contact: {
          email: 'shareefataz@gmail.com',
          linkedin: 'https://www.linkedin.com/in/mohammed-shareef-at-58842123a/',
          instagram: 'https://www.instagram.com/shareef__at'
        },
        category: 'design',
        featured: false
      },
      {
        id: 'adil',
        name: 'Adil K',
        title: 'ML Operations',
        rating: 4.9,
        expertise: '4+ years',
        coverImage: staticUrls.trainerImages?.adil || '/static/images/adil.jpg',
        bannerColor: '#6366f1',
        courses: [
          {
            id: 1,
            name: 'AI Engineer',
            image: staticUrls.courseImages?.aiEngineer || '/static/images/ai-engineer.jpg'
          }
        ],
        bio: 'Lead Engineering Trainer focused on software engineering principles, system design, and ML Operations. Expert in building robust, scalable AI systems.',
        skills: ['Software Engineering', 'System Design', 'DevOps', 'ML Operations'],
        fullBio: 'Adil leads our Engineering training program, focusing on software engineering principles, system design, and DevOps practices. His courses prepare students to build robust, scalable software systems that meet industry standards for performance, security, and maintainability. With extensive experience in ML Operations, he helps students understand the full lifecycle of deploying and maintaining AI systems in production.',
        credentials: [
          'Extensive experience in software engineering and system design',
          'Background in building enterprise-grade applications',
          'Expertise in development operations and CI/CD pipelines',
          'Experience mentoring junior engineering teams'
        ],
        contact: {
          email: 'adil@skilltrai.com',
          linkedin: 'https://www.linkedin.com/'
        },
        category: 'tech',
        featured: false
      }
    ];

    // Filters for trainer categories
    const filters = [
      { id: 'all', name: 'All Trainers' },
      { id: 'tech', name: 'Technology & Engineering' },
      { id: 'data', name: 'Data Analysis' },
      { id: 'design', name: 'Design & Content Creation' }
    ];

    // Animation handling with concatenation instead of template literals
    const getAnimationStyle = (index) => {
      return { animationDelay: (index * 0.1) + 's' };
    };

    // Handle trainer selection
    const handleTrainerClick = (trainerId) => {
      setAnimateDetail(false);
      setTimeout(() => {
        setActiveTrainer(trainers.find(trainer => trainer.id === trainerId));
        setAnimateDetail(true);
      }, 50);
    };

    // Go back to trainer list view
    const handleBackClick = () => {
      setActiveTrainer(null);
    };

    // Error handling for images
    const handleImageError = (e) => {
      e.target.src = fallbackImg;
    };

    // Filter trainers based on active filter
    const filteredTrainers = activeFilter === 'all'
      ? trainers
      : trainers.filter(trainer => trainer.category === activeFilter);

    // Filter featured trainers
    const featuredTrainers = trainers.filter(trainer => trainer.featured);

    // Render trainer card
    const renderTrainerCard = (trainer, index) => {
      return React.createElement(
        'div',
        {
          key: trainer.id,
          className: 'trainer-card bg-white rounded-2xl overflow-hidden shadow-lg',
          style: getAnimationStyle(index),
          onClick: () => handleTrainerClick(trainer.id)
        },
        // Trainer image section
        React.createElement(
          'div',
          { className: 'relative h-48 overflow-hidden' },
          React.createElement('img', {
            src: trainer.coverImage,
            alt: trainer.name,
            className: 'w-full h-full object-cover',
            onError: handleImageError
          }),
          React.createElement('div', {
            className: 'absolute inset-0',
            style: { background: 'linear-gradient(to top, ' + trainer.bannerColor + 'cc, transparent)' }
          }),
          trainer.featured && React.createElement(
            'div',
            { className: 'absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-gray-800' },
            'Featured Trainer'
          )
        ),
        // Trainer details section
        React.createElement(
          'div',
          { className: 'p-5' },
          React.createElement(
            'div',
            { className: 'flex justify-between items-start' },
            React.createElement(
              'div',
              null,
              React.createElement('h3', { className: 'text-xl font-bold text-gray-900' }, trainer.name),
              React.createElement(
                'div',
                { className: 'flex items-center mt-1' },
                React.createElement(
                  'div',
                  { className: 'flex items-center' },
                  React.createElement('span', { className: 'text-yellow-500 mr-1' }, '★'),
                  React.createElement('span', { className: 'text-sm font-medium' }, trainer.rating)
                ),
                React.createElement('span', { className: 'mx-2 text-gray-300' }, '|'),
                React.createElement('span', { className: 'text-sm text-gray-600' }, trainer.expertise)
              )
            ),
            React.createElement(
              'div',
              {
                className: 'w-10 h-10 rounded-full flex items-center justify-center',
                style: { backgroundColor: trainer.bannerColor }
              },
              React.createElement(
                'svg',
                { className: 'w-5 h-5 text-white', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
                React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 5l7 7-7 7' })
              )
            )
          ),
          React.createElement('p', { className: 'text-gray-600 text-sm mt-3 line-clamp-2' }, trainer.bio),
          // Courses section
          React.createElement(
            'div',
            { className: 'mt-4' },
            React.createElement('h4', { className: 'text-xs font-medium text-gray-500 uppercase mb-2' }, 'Courses'),
            React.createElement(
              'div',
              { className: 'flex -space-x-2' },
              trainer.courses.map(course => React.createElement(
                'div',
                { key: course.id, className: 'w-8 h-8 rounded-full border-2 border-white overflow-hidden', title: course.name },
                React.createElement('img', {
                  src: course.image,
                  alt: course.name,
                  className: 'w-full h-full object-cover',
                  onError: handleImageError
                })
              ))
            )
          ),
          // Skills section
          React.createElement(
            'div',
            { className: 'flex flex-wrap gap-2 mt-4' },
            trainer.skills.slice(0, 3).map((skill, index) => React.createElement(
              'span',
              { key: index, className: 'px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full' },
              skill
            )),
            trainer.skills.length > 3 && React.createElement(
              'span',
              { className: 'px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full' },
              '+' + (trainer.skills.length - 3) + ' more'
            )
          )
        ),
        // Footer section
        React.createElement(
          'div',
          { className: 'bg-gray-50 px-5 py-3 border-t border-gray-100' },
          React.createElement(
            'div',
            { className: 'text-center' },
            React.createElement('span', { className: 'text-purple-600 font-medium text-sm' }, 'View Profile')
          )
        )
      );
    };

    // Render detailed trainer view
    const renderTrainerDetail = () => {
      if (!activeTrainer) return null;

      return React.createElement(
        'div',
        { className: animateDetail ? 'animate-fadeIn' : 'opacity-0' },
        // Back button
        React.createElement(
          'button',
          {
            onClick: handleBackClick,
            className: 'flex items-center text-gray-600 hover:text-gray-900 mb-6'
          },
          React.createElement(
            'svg',
            { className: 'w-5 h-5 mr-2', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
            React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M10 19l-7-7m0 0l7-7m-7 7h18' })
          ),
          'Back to all trainers'
        ),
        // Trainer Detail Card
        React.createElement(
          'div',
          { className: 'bg-white rounded-3xl overflow-hidden shadow-xl mb-8' },
          // Banner
          React.createElement(
            'div',
            {
              className: 'h-64 relative',
              style: { backgroundColor: activeTrainer.bannerColor }
            },
            React.createElement(
              'div',
              { className: 'absolute inset-0 opacity-20' },
              React.createElement('img', {
                src: activeTrainer.coverImage,
                alt: activeTrainer.name,
                className: 'w-full h-full object-cover',
                onError: handleImageError
              })
            ),
            React.createElement(
              'div',
              { className: 'absolute inset-0 flex flex-col justify-end p-8' },
              React.createElement('h1', { className: 'text-4xl font-bold text-white mb-2' }, activeTrainer.name),
              React.createElement(
                'div',
                { className: 'flex items-center text-white/90' },
                React.createElement('span', { className: 'font-medium mr-2' }, activeTrainer.title),
                React.createElement('span', { className: 'mx-2' }, '|'),
                React.createElement(
                  'div',
                  { className: 'flex items-center' },
                  React.createElement('span', { className: 'text-yellow-300 mr-1' }, '★'),
                  React.createElement('span', { className: 'font-medium' }, activeTrainer.rating)
                )
              )
            )
          ),
          // Trainer content
          React.createElement(
            'div',
            { className: 'p-8 lg:flex' },
            // Left sidebar
            React.createElement(
              'div',
              { className: 'lg:w-1/4 flex-shrink-0 mb-6 lg:mb-0' },
              React.createElement(
                'div',
                { className: 'relative mx-auto lg:ml-0 w-48 h-64 rounded-xl overflow-hidden shadow-lg border-4 border-white' },
                React.createElement('img', {
                  src: activeTrainer.coverImage,
                  alt: activeTrainer.name,
                  className: 'w-full h-full object-cover',
                  onError: handleImageError
                })
              ),
              React.createElement(
                'div',
                { className: 'mt-6 text-center lg:text-left' },
                React.createElement(
                  'a',
                  {
                    href: '/register/',
                    className: 'inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-full transition-colors w-full text-center'
                  },
                  'Book a Session'
                ),
                React.createElement(
                  'button',
                  { className: 'mt-3 inline-block border border-purple-600 text-purple-600 hover:bg-purple-50 font-medium px-6 py-3 rounded-full transition-colors w-full' },
                  'View Courses'
                )
              )
            ),
            // Main content
            React.createElement(
              'div',
              { className: 'lg:w-3/4 lg:pl-8' },
              // Overview
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-4' }, 'About'),
                React.createElement('p', { className: 'text-gray-700' }, activeTrainer.fullBio)
              ),
              // Credentials section
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-4' }, 'Credentials & Experience'),
                React.createElement(
                  'ul',
                  { className: 'space-y-2' },
                  activeTrainer.credentials.map((credential, index) => React.createElement(
                    'li',
                    { key: index, className: 'flex items-start' },
                    React.createElement('span', { className: 'text-purple-600 mr-2 mt-1' }, '✓'),
                    React.createElement('span', { className: 'text-gray-700' }, credential)
                  ))
                )
              ),
              // Courses section
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-4' }, 'Courses'),
                React.createElement(
                  'div',
                  { className: 'grid grid-cols-1 sm:grid-cols-2 gap-6' },
                  activeTrainer.courses.map(course => React.createElement(
                    'div',
                    { key: course.id, className: 'bg-gray-50 rounded-lg p-4 flex items-center' },
                    React.createElement(
                      'div',
                      { className: 'w-16 h-16 rounded-lg overflow-hidden mr-4 flex-shrink-0' },
                      React.createElement('img', {
                        src: course.image,
                        alt: course.name,
                        className: 'w-full h-full object-cover',
                        onError: handleImageError
                      })
                    ),
                    React.createElement(
                      'div',
                      null,
                      React.createElement('h3', { className: 'font-bold text-gray-900' }, course.name),
                      React.createElement('a', {
                        href: '/courses/#' + course.name.toLowerCase().replace(/[&\\s]+/g, '-'),
                        className: 'text-sm text-purple-600 hover:text-purple-800 transition-colors'
                      }, 'View course details')
                    )
                  ))
                )
              ),
              // Skills section
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-4' }, 'Expertise & Skills'),
                React.createElement(
                  'div',
                  { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' },
                  activeTrainer.skills.map((skill, index) => React.createElement(
                    'div',
                    { key: index, className: 'flex items-center bg-gray-50 p-3 rounded-lg' },
                    React.createElement(
                      'div',
                      {
                        className: 'w-8 h-8 rounded-full flex items-center justify-center mr-3',
                        style: { backgroundColor: activeTrainer.bannerColor }
                      },
                      React.createElement(
                        'svg',
                        { className: 'w-4 h-4 text-white', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
                        React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M5 13l4 4L19 7' })
                      )
                    ),
                    React.createElement('span', { className: 'text-gray-800' }, skill)
                  ))
                )
              ),
              // Contact section
              React.createElement(
                'div',
                null,
                React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-4' }, 'Get in Touch'),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  activeTrainer.contact.email && React.createElement(
                    'a',
                    {
                      href: 'mailto:' + activeTrainer.contact.email,
                      className: 'bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-full transition flex items-center justify-center'
                    },
                    React.createElement(
                      'svg',
                      { className: 'w-4 h-4 mr-2', fill: 'currentColor', viewBox: '0 0 24 24' },
                      React.createElement('path', { d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' })
                    ),
                    'Email'
                  ),
                  activeTrainer.contact.linkedin && React.createElement(
                    'a',
                    {
                      href: activeTrainer.contact.linkedin,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: 'bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full transition flex items-center justify-center'
                    },
                    React.createElement(
                      'svg',
                      { className: 'w-4 h-4 mr-2', fill: 'currentColor', viewBox: '0 0 24 24' },
                      React.createElement('path', { d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' })
                    ),
                    'LinkedIn'
                  ),
                  activeTrainer.contact.instagram && React.createElement(
                    'a',
                    {
                      href: activeTrainer.contact.instagram,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-sm px-4 py-2 rounded-full transition flex items-center justify-center'
                    },
                    React.createElement(
                      'svg',
                      { className: 'w-4 h-4 mr-2', fill: 'currentColor', viewBox: '0 0 24 24' },
                      React.createElement('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' })
                    ),
                    'Instagram'
                  )
                )
              )
            )
          )
        ),
        // Similar trainers
        React.createElement(
          'div',
          { className: 'mt-12' },
          React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-6' }, 'You Might Also Like'),
          React.createElement(
            'div',
            { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
            trainers
              .filter(trainer => trainer.id !== activeTrainer.id && trainer.category === activeTrainer.category)
              .slice(0, 3)
              .map((trainer, index) => renderTrainerCard(trainer, index))
          )
        )
      );
    };

    // Main component render
    return React.createElement(
      React.Fragment,
      null,
      !activeTrainer ? React.createElement(
        React.Fragment,
        null,
        // Header
        React.createElement(
          'div',
          { className: 'text-center mb-12' },
          React.createElement('h1', { className: 'text-3xl md:text-5xl font-bold text-gray-900 mb-4' },
            React.createElement(
              'span',
              { className: 'bg-gradient-to-r from-purple-600 to-purple-800 text-transparent bg-clip-text' },
              'SkillTrai Trainers'
            )
          ),
          React.createElement(
            'p',
            { className: 'text-gray-600 max-w-2xl mx-auto' },
            'Learn from industry professionals who bring real-world expertise and a passion for teaching to help you master the skills needed for today\'s digital economy.'
          )
        ),
        // Trainer filters
        React.createElement(
          'div',
          { className: 'flex justify-center mb-12 overflow-x-auto pb-2' },
          React.createElement(
            'div',
            { className: 'bg-white shadow-md rounded-full p-1 inline-flex' },
            filters.map(filter => React.createElement(
              'button',
              {
                key: filter.id,
                onClick: () => setActiveFilter(filter.id),
                className: `px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition whitespace-nowrap ${
                  activeFilter === filter.id ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-gray-900'
                }`
              },
              filter.name
            ))
          )
        ),
        // Featured trainers
        React.createElement(
          'div',
          { className: 'mb-16' },
          React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-6' }, 'Featured Trainers'),
          React.createElement(
            'div',
            { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
            featuredTrainers.map((trainer, index) => renderTrainerCard(trainer, index))
          )
        ),
        // All trainers
        React.createElement(
          'div',
          null,
          React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-6' }, 'All Trainers'),
          React.createElement(
            'div',
            { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
            filteredTrainers.map((trainer, index) => renderTrainerCard(trainer, index))
          )
        )
      ) : renderTrainerDetail()
    );
  }

  // Become a Trainer Section
  function BecomeTrainerSection() {
    return React.createElement(
      'div',
      { className: 'bg-gradient-to-r from-purple-50 to-white rounded-2xl p-6 md:p-10 mb-16 mt-16' },
      React.createElement(
        'div',
        { className: 'max-w-4xl mx-auto' },
        React.createElement('h2', { className: 'text-3xl font-bold text-gray-900 mb-6' }, 'Join Our Training Team'),
        React.createElement('p', { className: 'text-gray-700 text-lg mb-6' },
          'The SkillTrai Trainer Program is a professional development pathway that allows skilled individuals to join our teaching team after demonstrating expertise in their field. Selected trainers become part of the company based on their engagement, performance, and technical proficiency.'
        ),

        React.createElement(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-2 gap-8 mb-10' },
          React.createElement(
            'div',
            { className: 'bg-white shadow-lg rounded-xl p-6' },
            React.createElement('h3', { className: 'text-xl font-bold text-gray-900 mb-4' }, 'Benefits of Being a Trainer'),
            React.createElement(
              'ul',
              { className: 'space-y-3' },
              React.createElement(
                'li',
                { className: 'flex items-start' },
                React.createElement('span', { className: 'text-purple-600 mr-2 mt-1' }, '✓'),
                React.createElement('span', { className: 'text-gray-700' }, 'Earn commission from students under your mentorship')
              ),
              React.createElement(
                'li',
                { className: 'flex items-start' },
                React.createElement('span', { className: 'text-purple-600 mr-2 mt-1' }, '✓'),
                React.createElement('span', { className: 'text-gray-700' }, 'Receive outsourced client work directly through SkillTrai')
              ),
              React.createElement(
                'li',
                { className: 'flex items-start' },
                React.createElement('span', { className: 'text-purple-600 mr-2 mt-1' }, '✓'),
                React.createElement('span', { className: 'text-gray-700' }, 'Retain a substantial share of project fees, providing stable income')
              ),
              React.createElement(
                'li',
                { className: 'flex items-start' },
                React.createElement('span', { className: 'text-purple-600 mr-2 mt-1' }, '✓'),
                React.createElement('span', { className: 'text-gray-700' }, 'Access to our professional network and continued learning opportunities')
              ),
              React.createElement(
                'li',
                { className: 'flex items-start' },
                React.createElement('span', { className: 'text-purple-600 mr-2 mt-1' }, '✓'),
                React.createElement('span', { className: 'text-gray-700' }, 'Build your professional reputation and portfolio')
              )
            )
          ),

          React.createElement(
            'div',
            { className: 'bg-white shadow-lg rounded-xl p-6' },
            React.createElement('h3', { className: 'text-xl font-bold text-gray-900 mb-4' }, 'How to Become a Trainer'),
            React.createElement('p', { className: 'text-gray-700 mb-4' }, 'There are two primary pathways to become a SkillTrai trainer:'),

            React.createElement(
              'div',
              { className: 'mb-4' },
              React.createElement('h4', { className: 'font-semibold text-gray-900' }, '1. Course Graduate Path:'),
              React.createElement('p', { className: 'text-gray-700 ml-5' }, 'Successfully complete one of our courses and excel in the subsequent trainer interview process.')
            ),

            React.createElement(
              'div',
              { className: 'mb-4' },
              React.createElement('h4', { className: 'font-semibold text-gray-900' }, '2. Direct Application:'),
              React.createElement('p', { className: 'text-gray-700 ml-5' }, 'Experienced professionals can apply directly if they meet the technical and teaching requirements.')
            ),

            React.createElement('p', { className: 'text-gray-700 mt-4' },
              'The selection process includes a technical assessment, teaching demonstration, and interview to ensure candidates have both the expertise and ability to effectively transfer knowledge to students.'
            )
          )
        ),

        React.createElement(
          'div',
          { className: 'flex justify-center' },
          React.createElement(
            'a',
            {
              href: '/register/#trainer',
              className: 'bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition'
            },
            'Apply to Become a Trainer'
          )
        )
      )
    );
  }

  // Add CSS animation styles
  const style = document.createElement('style');
  style.textContent = `
    /* Card animations */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-fadeIn {
      animation: fadeIn 0.4s ease-out forwards;
    }

    /* Trainer card hover effects */
    .trainer-card {
      transition: all 0.3s ease;
      animation: fadeIn 0.5s ease-out forwards;
    }

    .trainer-card:hover {
      transform: translateY(-5px);
    }

    .trainer-card img {
      transition: transform 0.5s ease;
    }

    .trainer-card:hover img {
      transform: scale(1.05);
    }
  `;
  document.head.appendChild(style);
});