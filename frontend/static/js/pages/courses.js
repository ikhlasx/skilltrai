// courses.js - Complete script for courses page

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Access static URLs provided by Django
  const staticUrls = window.staticUrls || {};
  const logoPath = staticUrls.logo || '/static/images/logo.png';

  // Main app rendering
  ReactDOM.render(
    React.createElement(CoursesPage, null),
    document.getElementById('root')
  );

  // CoursesPage Component
  function CoursesPage() {
    return React.createElement(
      'div',
      { className: 'min-h-screen bg-gray-100 pb-12' },
      React.createElement(Navigation, null),
      React.createElement('div', { className: 'container mx-auto px-4 md:px-6 pt-24 md:pt-28' },
        React.createElement(CourseBrochure, null)
      )
    );
  }

  // Navigation Component
  function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false);
    const currentPath = window.location.pathname;

    const isActive = (path) => {
      return currentPath === path ? 'text-purple-600 font-semibold' : 'text-gray-600 hover:text-gray-900';
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
          React.createElement('a', 
            { href: '/' },
            React.createElement('img', { src: logoPath, alt: 'SkillTrai Logo', className: 'h-12 md:h-20' })
          )
        ),
        // Desktop navigation
        React.createElement(
          'div',
          { className: 'hidden md:flex items-center space-x-8' },
          React.createElement('a', { href: '/about', className: isActive('/about') }, 'About'),
          React.createElement('a', { href: '/trainers/', className: isActive('/trainers/') }, 'Trainers'),
          React.createElement('a', { href: '/courses/', className: isActive('/courses/') }, 'Courses')
        ),
        // Register button
        React.createElement(
          'div',
          { className: 'hidden md:block' },
          React.createElement('a', {
            href: '/register/',
            className: 'bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700'
          }, 'Register')
        ),
        // Mobile menu button
        React.createElement(
          'button',
          {
            onClick: () => setIsOpen(!isOpen),
            className: 'md:hidden flex flex-col justify-center items-center gap-1.5'
          },
          React.createElement('span', {
            className: `block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`
          }),
          React.createElement('span', {
            className: `block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`
          }),
          React.createElement('span', {
            className: `block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`
          })
        )
      ),
      // Mobile menu
      isOpen && React.createElement(
        'div',
        { className: 'absolute top-full left-0 right-0 bg-white shadow-lg md:hidden' },
                  React.createElement(
            'div',
            { className: 'flex flex-col items-center space-y-6 py-8' },
            React.createElement('a', { href: '/about', className: isActive('/about') }, 'About'),
            React.createElement('a', { href: '/trainers/', className: isActive('/trainers/') }, 'Trainers'),
            React.createElement('a', { href: '/courses/', className: isActive('/courses/') }, 'Courses'),
            React.createElement('a', {
              href: '/register/',
              className: 'bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 w-3/4'
            }, 'Register')
          )
      )
    );
  }

  // CourseBrochure Component
  function CourseBrochure() {
    const [activeCourse, setActiveCourse] = React.useState(null);
    const [animateDetail, setAnimateDetail] = React.useState(false);

    // Course data with static URLs from Django
    const courses = [
      {
        id: 'ai-dev',
        title: 'AI Developer',
        rating: 4.9,
        duration: '24 weeks',
        coverImage: staticUrls.courseImages?.aiDeveloper || '/static/images/ai-developer.jpg',
        bannerColor: '#8b5cf6',
        trainers: [
          {
            id: 1,
            name: 'Ikhlas PV',
            image: staticUrls.trainerImages?.ikhlas || '/static/images/ikhlas.jpg',
            role: 'Lead Trainer'
          },
          {
            id: 2,
            name: 'Akshay',
            image: staticUrls.trainerImages?.akshay || '/static/images/akshay.jpg',
            role: 'AI Specialist'
          }
        ],
        description: 'Learn to develop AI-powered applications and solutions using modern frameworks and methodologies. Master Python, GenAI, MLOps, and automation techniques.',
        skills: ['Python', 'GenAI', 'MLOps', 'Automation', 'AI Applications'],
        fullDescription: 'The AI Developer program is designed to transform beginners into industry-ready AI specialists through hands-on projects and expert mentorship. You\'ll learn to build, deploy, and optimize AI applications that solve real-world problems across various domains.',
        featured: true
      },
      {
        id: 'design',
        title: 'Design & Digital Marketing',
        rating: 4.8,
        duration: '16 weeks',
        coverImage: staticUrls.courseImages?.design || '/static/images/design.jpg',
        bannerColor: '#ec4899',
        trainers: [
          {
            id: 8,
            name: 'Akshay',
            image: staticUrls.trainerImages?.akshayDesign || '/static/images/akshay-design.jpg',
            role: 'Design Lead'
          },
          {
            id: 9,
            name: 'Anas',
            image: staticUrls.trainerImages?.anas || '/static/images/anas.jpg',
            role: 'UI/UX Specialist'
          }
        ],
        description: 'Master the art of visual communication and digital marketing strategies to create compelling brand experiences and grow your career as a designer.',
        skills: ['UI/UX Design', 'Graphic Design', 'Social Media Marketing', 'SEO', 'Content Strategy'],
        fullDescription: 'The Design & Digital Marketing program combines creative design skills with strategic marketing techniques to prepare you for a versatile career in the digital space. From creating user interfaces to managing social media campaigns, you\'ll build a comprehensive skill set valued by employers and clients alike.',
        featured: true
      },
      {
        id: 'robotics',
        title: 'Robotics and IoT',
        rating: 4.7,
        duration: '28 weeks',
        coverImage: staticUrls.courseImages?.robotics || '/static/images/robotics.jpg',
        bannerColor: '#3b82f6',
        trainers: [
          {
            id: 3,
            name: 'Fuad',
            image: staticUrls.trainerImages?.fuad || '/static/images/fuad.jpg',
            role: 'Robotics Lead'
          },
          {
            id: 4,
            name: 'Afnan',
            image: staticUrls.trainerImages?.afnan || '/static/images/afnan.jpg',
            role: 'Electronics Specialist'
          }
        ],
        description: 'Build smart physical systems by combining hardware engineering with software intelligence. Learn IoT protocols, control systems, and sensor integration.',
        skills: ['IoT Protocols', 'Control Systems', 'Robotics Design', 'Embedded Systems', 'Sensor Integration'],
        fullDescription: 'The Robotics and IoT program bridges the gap between physical engineering and digital technologies. You\'ll work on projects ranging from smart home systems to autonomous robots, learning both the hardware and software aspects of creating intelligent connected devices.',
        featured: false
      },
      {
        id: 'data',
        title: 'Data Analysis',
        rating: 4.8,
        duration: '24 weeks',
        coverImage: staticUrls.courseImages?.dataAnalysis || '/static/images/data-analysis.jpg',
        bannerColor: '#10b981',
        trainers: [
          {
            id: 6,
            name: 'Ajvad',
            image: staticUrls.trainerImages?.ajvad || '/static/images/ajvad.jpg',
            role: 'Data Science Lead'
          },
          {
            id: 7,
            name: 'Hanoon',
            image: staticUrls.trainerImages?.hanoon || '/static/images/hanoon.jpg',
            role: 'BI Specialist'
          }
        ],
        description: 'Transform raw data into actionable insights through statistical analysis and visualization techniques. Master data wrangling, SQL, and BI tools.',
        skills: ['Data Wrangling', 'Excel', 'SQL', 'Statistical Analysis', 'Data Visualization'],
        fullDescription: 'The Data Analysis program equips you with the skills to extract meaningful insights from complex datasets. From cleaning and organizing data to creating compelling visualizations and reports, you\'ll learn to tell stories with data that drive business decisions.',
        featured: false
      },
      {
        id: 'content',
        title: 'Content Creation',
        rating: 4.7,
        duration: '12 weeks',
        coverImage: staticUrls.courseImages?.content || '/static/images/content.jpg',
        bannerColor: '#f59e0b',
        trainers: [
          {
            id: 11,
            name: 'Afnan',
            image: staticUrls.trainerImages?.afnanVideo || '/static/images/afnan-video.jpg',
            role: 'Video Lead'
          },
          {
            id: 12,
            name: 'Shareef',
            image: staticUrls.trainerImages?.shareef || '/static/images/shareef.jpg',
            role: 'Content Specialist'
          }
        ],
        description: 'Develop the skills to create engaging content across various digital platforms and build a career as a content creator.',
        skills: ['Video Production', 'Content Strategy', 'Editing', 'Social Media', 'Brand Development'],
        fullDescription: 'The Content Creation program focuses on developing your skills in producing engaging multimedia content for various platforms. From video production and editing to content strategy and audience engagement, you\'ll learn to create content that resonates with viewers and builds loyal followings.',
        featured: false
      },
      {
        id: 'ai-eng',
        title: 'AI Engineer',
        rating: 4.9,
        duration: '32 weeks',
        coverImage: staticUrls.courseImages?.aiEngineer || '/static/images/ai-engineer.jpg',
        bannerColor: '#6366f1',
        trainers: [
          {
            id: 13,
            name: 'Ikhlas PV',
            image: staticUrls.trainerImages?.ikhlas || '/static/images/ikhlas.jpg',
            role: 'AI Engineer Lead'
          },
          {
            id: 14,
            name: 'Adil K',
            image: staticUrls.trainerImages?.adil || '/static/images/adil.jpg',
            role: 'ML Operations'
          }
        ],
        description: 'Dive deep into AI engineering principles to design, implement and optimize complex AI systems for enterprise applications.',
        skills: ['Python', 'Machine Learning', 'Neural Networks', 'NLP', 'Computer Vision'],
        fullDescription: 'The AI Engineer program is our most advanced AI curriculum, designed for those who want to master the entire AI development lifecycle. From research and prototyping to deployment and monitoring of production systems, you\'ll gain the expertise needed to lead AI initiatives in organizations of any size.',
        featured: true
      }
    ];

    // For fallback images if course images don't exist
    const fallbackImg = 'https://picsum.photos/400/600';

    // Animation handling with concatenation instead of template literals
    const getAnimationStyle = (index) => {
      return { animationDelay: (index * 0.1) + 's' };
    };

    // Handle course selection
    const handleCourseClick = (courseId) => {
      setAnimateDetail(false);
      setTimeout(() => {
        setActiveCourse(courses.find(course => course.id === courseId));
        setAnimateDetail(true);
      }, 50);
    };

    // Go back to course list view
    const handleBackClick = () => {
      setActiveCourse(null);
    };

    // Error handling for images
    const handleImageError = (e) => {
      e.target.src = fallbackImg;
    };

    // Filter featured courses
    const featuredCourses = courses.filter(course => course.featured);

    // Render course card
    const renderCourseCard = (course, index) => {
      return React.createElement(
        'div',
        {
          key: course.id,
          className: 'course-card bg-white rounded-2xl overflow-hidden shadow-lg',
          style: getAnimationStyle(index),
          onClick: () => handleCourseClick(course.id)
        },
        // Course image section
        React.createElement(
          'div',
          { className: 'relative h-48 overflow-hidden' },
          React.createElement('img', {
            src: course.coverImage,
            alt: course.title,
            className: 'w-full h-full object-cover',
            onError: handleImageError
          }),
          React.createElement('div', {
            className: 'absolute inset-0',
            style: { background: 'linear-gradient(to top, ' + course.bannerColor + 'cc, transparent)' }
          }),
          course.featured && React.createElement(
            'div',
            { className: 'absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-gray-800' },
            'Featured Program'
          )
        ),
        // Course details section
        React.createElement(
          'div',
          { className: 'p-5' },
          React.createElement(
            'div',
            { className: 'flex justify-between items-start' },
            React.createElement(
              'div',
              null,
              React.createElement('h3', { className: 'text-xl font-bold text-gray-900' }, course.title),
              React.createElement(
                'div',
                { className: 'flex items-center mt-1' },
                React.createElement(
                  'div',
                  { className: 'flex items-center' },
                  React.createElement('span', { className: 'text-yellow-500 mr-1' }, '★'),
                  React.createElement('span', { className: 'text-sm font-medium' }, course.rating)
                ),
                React.createElement('span', { className: 'mx-2 text-gray-300' }, '|'),
                React.createElement('span', { className: 'text-sm text-gray-600' }, course.duration)
              )
            ),
            React.createElement(
              'div',
              {
                className: 'w-10 h-10 rounded-full flex items-center justify-center',
                style: { backgroundColor: course.bannerColor }
              },
              React.createElement(
                'svg',
                { className: 'w-5 h-5 text-white', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
                React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 5l7 7-7 7' })
              )
            )
          ),
          React.createElement('p', { className: 'text-gray-600 text-sm mt-3 line-clamp-2' }, course.description),
          // Trainers section
          React.createElement(
            'div',
            { className: 'mt-4' },
            React.createElement('h4', { className: 'text-xs font-medium text-gray-500 uppercase mb-2' }, 'Trainers'),
            React.createElement(
              'div',
              { className: 'flex -space-x-2' },
              course.trainers.map(trainer => React.createElement(
                'div',
                { key: trainer.id, className: 'w-8 h-8 rounded-full border-2 border-white overflow-hidden' },
                React.createElement('img', {
                  src: trainer.image,
                  alt: trainer.name,
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
            course.skills.slice(0, 3).map((skill, index) => React.createElement(
              'span',
              { key: index, className: 'px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full' },
              skill
            )),
            course.skills.length > 3 && React.createElement(
              'span',
              { className: 'px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full' },
              '+' + (course.skills.length - 3) + ' more'
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
            React.createElement('span', { className: 'text-purple-600 font-medium text-sm' }, 'View Details')
          )
        )
      );
    };

    // Render detailed course view
    const renderCourseDetail = () => {
      if (!activeCourse) return null;

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
          'Back to all courses'
        ),
        // Course Detail Card
        React.createElement(
          'div',
          { className: 'bg-white rounded-3xl overflow-hidden shadow-xl mb-8' },
          // Banner
          React.createElement(
            'div',
            {
              className: 'h-64 relative',
              style: { backgroundColor: activeCourse.bannerColor }
            },
            React.createElement(
              'div',
              { className: 'absolute inset-0 opacity-20' },
              React.createElement('img', {
                src: activeCourse.coverImage,
                alt: activeCourse.title,
                className: 'w-full h-full object-cover',
                onError: handleImageError
              })
            ),
            React.createElement(
              'div',
              { className: 'absolute inset-0 flex flex-col justify-end p-8' },
              React.createElement('h1', { className: 'text-4xl font-bold text-white mb-2' }, activeCourse.title),
              React.createElement(
                'div',
                { className: 'flex items-center text-white/90' },
                React.createElement(
                  'div',
                  { className: 'flex items-center' },
                  React.createElement('span', { className: 'text-yellow-300 mr-1' }, '★'),
                  React.createElement('span', { className: 'font-medium' }, activeCourse.rating)
                ),
                React.createElement('span', { className: 'mx-2' }, '|'),
                React.createElement('span', null, activeCourse.duration + ' program')
              )
            )
          ),
          // Course content
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
                  src: activeCourse.coverImage,
                  alt: activeCourse.title,
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
                  'Register Now'
                ),
                React.createElement(
                  'button',
                  { className: 'mt-3 inline-block border border-purple-600 text-purple-600 hover:bg-purple-50 font-medium px-6 py-3 rounded-full transition-colors w-full' },
                  'Download Syllabus'
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
                React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-4' }, 'Overview'),
                React.createElement('p', { className: 'text-gray-700' }, activeCourse.fullDescription)
              ),
              // Trainers section
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-4' }, 'Trainers'),
                React.createElement(
                  'div',
                  { className: 'grid grid-cols-1 sm:grid-cols-2 gap-6' },
                  activeCourse.trainers.map(trainer => React.createElement(
                    'div',
                    { key: trainer.id, className: 'flex items-center' },
                    React.createElement(
                      'div',
                      { className: 'w-16 h-16 rounded-full overflow-hidden mr-4' },
                      React.createElement('img', {
                        src: trainer.image,
                        alt: trainer.name,
                        className: 'w-full h-full object-cover',
                        onError: handleImageError
                      })
                    ),
                    React.createElement(
                      'div',
                      null,
                      React.createElement('h3', { className: 'font-bold text-gray-900' }, trainer.name),
                      React.createElement('p', { className: 'text-purple-600' }, trainer.role)
                    )
                  ))
                )
              ),
              // Skills section
              React.createElement(
                'div',
                { className: 'mb-8' },
                React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-4' }, 'What You\'ll Learn'),
                React.createElement(
                  'div',
                  { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' },
                  activeCourse.skills.map((skill, index) => React.createElement(
                    'div',
                    { key: index, className: 'flex items-center bg-gray-50 p-3 rounded-lg' },
                    React.createElement(
                      'div',
                      {
                        className: 'w-8 h-8 rounded-full flex items-center justify-center mr-3',
                        style: { backgroundColor: activeCourse.bannerColor }
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
              // Course details
              React.createElement(
                'div',
                null,
                React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-4' }, 'Program Details'),
                React.createElement(
                  'div',
                  { className: 'grid grid-cols-1 sm:grid-cols-2 gap-6' },
                  React.createElement(
                    'div',
                    { className: 'bg-gray-50 p-4 rounded-lg' },
                    React.createElement('h3', { className: 'font-medium text-gray-900' }, 'Duration'),
                    React.createElement('p', { className: 'text-gray-700' }, activeCourse.duration)
                  ),
                  React.createElement(
                    'div',
                    { className: 'bg-gray-50 p-4 rounded-lg' },
                    React.createElement('h3', { className: 'font-medium text-gray-900' }, 'Class Schedule'),
                    React.createElement('p', { className: 'text-gray-700' }, 'Weekends & Weekday evenings')
                  ),
                  React.createElement(
                    'div',
                    { className: 'bg-gray-50 p-4 rounded-lg' },
                    React.createElement('h3', { className: 'font-medium text-gray-900' }, 'Format'),
                    React.createElement('p', { className: 'text-gray-700' }, 'Hybrid (Online & In-person)')
                  ),
                  React.createElement(
                    'div',
                    { className: 'bg-gray-50 p-4 rounded-lg' },
                    React.createElement('h3', { className: 'font-medium text-gray-900' }, 'Certification'),
                    React.createElement('p', { className: 'text-gray-700' }, 'SkillTrai & Industry Partners')
                  )
                )
              )
            )
          )
        ),
        // Similar courses
        React.createElement(
          'div',
          { className: 'mt-12' },
          React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-6' }, 'You Might Also Like'),
          React.createElement(
            'div',
            { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
            courses
              .filter(course => course.id !== activeCourse.id)
              .slice(0, 3)
              .map((course, index) => renderCourseCard(course, index))
          )
        )
      );
    };

    // Main component render
    return React.createElement(
      React.Fragment,
      null,
      !activeCourse ? React.createElement(
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
              'SkillTrai Courses'
            )
          ),
          React.createElement(
            'p',
            { className: 'text-gray-600 max-w-2xl mx-auto' },
            'Comprehensive programs designed to transform beginners into industry-ready professionals through hands-on projects and expert mentorship.'
          )
        ),
        // Featured courses
        React.createElement(
          'div',
          { className: 'mb-16' },
          React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-6' }, 'Featured Programs'),
          React.createElement(
            'div',
            { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
            featuredCourses.map((course, index) => renderCourseCard(course, index))
          )
        ),
        // All courses
        React.createElement(
            'div',
          null,
          React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-6' }, 'All Programs'),
          React.createElement(
            'div',
            { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
            courses.map((course, index) => renderCourseCard(course, index))
          )
        )
      ) : renderCourseDetail()
    );
  }
});