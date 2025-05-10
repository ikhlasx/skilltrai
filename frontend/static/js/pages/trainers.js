// trainers.js - Complete script for trainers page
// This file should be placed in your frontend/static/js/pages/ directory

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
        const [expandedTrainer, setExpandedTrainer] = React.useState(null);
        const [activeFilter, setActiveFilter] = React.useState('all');

        return React.createElement(
            'div',
            { className: 'min-h-screen bg-gradient-to-br from-white via-purple-50 to-white' },
            React.createElement(Navigation, null),
            React.createElement('div', { className: 'container mx-auto px-4 md:px-6 pt-24 md:pt-28' },
                React.createElement(Header, null),
                React.createElement(TrainerFilters, {
                    activeFilter: activeFilter,
                    setActiveFilter: setActiveFilter,
                    filters: filters
                }),
                React.createElement(TrainerGrid, {
                    activeFilter: activeFilter,
                    expandedTrainer: expandedTrainer,
                    setExpandedTrainer: setExpandedTrainer
                }),
                React.createElement(TrainerProgramInfo, null),
                React.createElement(Testimonials, null)
            ),
            React.createElement(Footer, null)
        );
    }

    // Navigation Component
    function Navigation() {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        return React.createElement(
            'nav',
            { className: 'fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm' },
            React.createElement(
                'div',
                { className: 'container mx-auto px-6 py-4 flex justify-between items-center' },
                // Logo area
                React.createElement(
                    'div',
                    { className: 'flex items-center space-x-2' },
                    React.createElement('img', { src: logoPath, alt: 'SkillTrai Logo', className: 'h-10 md:h-16' })
                ),
                // Desktop navigation
                React.createElement(
                    'div',
                    { className: 'hidden md:flex items-center space-x-8' },
                    React.createElement('a', { href: '/', className: 'text-gray-600 hover:text-gray-900 transition-colors' }, 'Home'),
                    React.createElement('a', { href: '/courses/', className: 'text-gray-600 hover:text-gray-900 transition-colors' }, 'Courses'),
                    React.createElement('a', { href: '/trainers/', className: 'text-gray-900 font-medium' }, 'Trainers'),
                    React.createElement('a', { href: '/events/', className: 'text-gray-600 hover:text-gray-900 transition-colors' }, 'Events'),
                    React.createElement('a', { href: '/register/', className: 'bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors' }, 'Register')
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
                    React.createElement('a', { href: '/', className: 'text-gray-600 hover:text-gray-900 py-2 transition-colors' }, 'Home'),
                    React.createElement('a', { href: '/courses/', className: 'text-gray-600 hover:text-gray-900 py-2 transition-colors' }, 'Courses'),
                    React.createElement('a', { href: '/trainers/', className: 'text-gray-900 font-medium py-2' }, 'Trainers'),
                    React.createElement('a', { href: '/events/', className: 'text-gray-600 hover:text-gray-900 py-2 transition-colors' }, 'Events'),
                    React.createElement('a', { href: '/register/', className: 'bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 w-full text-center transition-colors' }, 'Register')
                )
            )
        );
    }

    // Header Component
    function Header() {
        return React.createElement(
            'div',
            { className: 'text-center mb-16' },
            React.createElement(
                'div',
                { className: 'inline-flex items-center bg-purple-100 rounded-full px-5 py-2 mb-6' },
                React.createElement('span', { className: 'text-sm font-medium text-purple-600' }, 'EXPERT INSTRUCTORS')
            ),
            React.createElement(
                'h1',
                { className: 'text-4xl md:text-6xl font-bold mb-6' },
                React.createElement(
                    'span',
                    { className: 'bg-gradient-to-r from-purple-600 to-purple-800 text-transparent bg-clip-text' },
                    'Learn From Industry Leaders'
                )
            ),
            React.createElement(
                'p',
                { className: 'text-xl text-gray-600 max-w-3xl mx-auto' },
                'Our trainers bring real-world expertise and a passion for teaching to help you master the skills needed for today\'s digital economy.'
            )
        );
    }

    // Trainer Filter Component
    function TrainerFilters({ activeFilter, setActiveFilter, filters }) {
        return React.createElement(
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
        );
    }

    // Trainer Card Component
    function TrainerCard({ trainer, isExpanded, toggleExpand }) {
        // Get trainer image from staticUrls or use placeholder
        const getTrainerImage = () => {
            const images = window.staticUrls?.trainerImages || {};
            return images[trainer.imageKey] || '/api/placeholder/400/320';
        };

        // Handle image errors
        const handleImageError = (e) => {
            e.target.src = '/api/placeholder/400/320';
        };

        return React.createElement(
            'div',
            { className: 'bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl' },
            // Image and title section
            React.createElement(
                'div',
                { className: 'relative' },
                React.createElement('img', {
                    src: getTrainerImage(),
                    alt: trainer.name,
                    className: 'w-full h-64 object-cover',
                    onError: handleImageError
                }),
                React.createElement('div', {
                    className: 'absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent'
                }),
                React.createElement(
                    'div',
                    { className: 'absolute bottom-0 left-0 p-6' },
                    React.createElement('h3', { className: 'text-2xl font-bold text-white' }, trainer.name),
                    React.createElement('p', { className: 'text-purple-300' }, trainer.title)
                )
            ),
            // Content section
            React.createElement(
                'div',
                { className: 'p-6' },
                // Skills
                React.createElement(
                    'div',
                    { className: 'flex flex-wrap gap-2 mb-4' },
                    trainer.skills.map((skill, idx) => React.createElement(
                        'span',
                        {
                            key: idx,
                            className: 'bg-purple-50 border border-purple-200 text-purple-600 text-xs px-3 py-1 rounded-full'
                        },
                        skill
                    ))
                ),
                // Bio text
                React.createElement(
                    'p',
                    { className: 'text-gray-600 mb-6' },
                    isExpanded ? trainer.bio : `${trainer.bio.substring(0, 160)}...`
                ),
                // Read more/less button
                React.createElement(
                    'button',
                    {
                        onClick: toggleExpand,
                        className: 'text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center'
                    },
                    isExpanded ? 'Show Less' : 'Read More',
                    React.createElement('svg', {
                        className: `ml-1 w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`,
                        fill: 'none',
                        stroke: 'currentColor',
                        viewBox: '0 0 24 24',
                        xmlns: 'http://www.w3.org/2000/svg'
                    }, React.createElement('path', {
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '2',
                        d: 'M19 9l-7 7-7-7'
                    }))
                )
            ),
            // Expanded details
            isExpanded && React.createElement(
                'div',
                { className: 'px-6 pb-6' },
                // Credentials
                React.createElement('h4', { className: 'text-gray-900 font-medium mb-3' }, 'Expertise & Credentials'),
                React.createElement(
                    'ul',
                    { className: 'space-y-2 mb-6' },
                    trainer.credentials.map((credential, idx) => React.createElement(
                        'li',
                        { key: idx, className: 'text-gray-600 flex items-start' },
                        React.createElement('span', {
                            className: 'w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2'
                        }),
                        React.createElement('span', null, credential)
                    ))
                ),
                // Contact buttons
                React.createElement(
                    'div',
                    { className: 'flex flex-col sm:flex-row gap-3' },
                    React.createElement(
                        'div',
                        { className: 'flex gap-3 mb-3 sm:mb-0' },
                        // LinkedIn button
                        React.createElement(
                            'a',
                            {
                                href: trainer.linkedin || '#',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                className: 'bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full transition flex items-center justify-center'
                            },
                            React.createElement('svg', {
                                className: 'w-4 h-4 mr-2',
                                fill: 'currentColor',
                                viewBox: '0 0 24 24',
                                xmlns: 'http://www.w3.org/2000/svg'
                            }, React.createElement('path', {
                                d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                            })),
                            'LinkedIn'
                        ),
                        // Email button
                        React.createElement(
                            'a',
                            {
                                href: `mailto:${trainer.email}`,
                                className: 'bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-full transition flex items-center justify-center'
                            },
                            React.createElement('svg', {
                                className: 'w-4 h-4 mr-2',
                                fill: 'currentColor',
                                viewBox: '0 0 24 24',
                                xmlns: 'http://www.w3.org/2000/svg'
                            }, React.createElement('path', {
                                d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
                            })),
                            'Email'
                        )
                    ),
                    // Book session button
                    React.createElement(
                        'a',
                        {
                            href: trainer.calendar || '#',
                            className: 'bg-transparent border border-purple-600 text-purple-600 text-sm px-4 py-2 rounded-full hover:bg-purple-50 transition flex-1 text-center'
                        },
                        'Book Session'
                    )
                )
            )
        );
    }

    // Trainer Grid Component
    function TrainerGrid({ activeFilter, expandedTrainer, setExpandedTrainer }) {
        // Filter trainers based on active filter
        const filteredTrainers = activeFilter === 'all'
            ? trainersData
            : trainersData.filter(trainer => trainer.category === activeFilter);

        // Toggle expanded state
        const toggleExpand = (id) => {
            setExpandedTrainer(expandedTrainer === id ? null : id);
        };

        return React.createElement(
            'div',
            { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16' },
            filteredTrainers.map(trainer => React.createElement(
                TrainerCard,
                {
                    key: trainer.id,
                    trainer: trainer,
                    isExpanded: expandedTrainer === trainer.id,
                    toggleExpand: () => toggleExpand(trainer.id)
                }
            ))
        );
    }

    // Trainer Program Info Component
    function TrainerProgramInfo() {
        return React.createElement(
            'div',
            { className: 'bg-gradient-to-r from-purple-50 to-white rounded-2xl p-6 md:p-10 mb-16' },
            React.createElement(
                'div',
                { className: 'max-w-4xl mx-auto' },
                React.createElement('h2', { className: 'text-3xl font-bold text-gray-900 mb-6' }, 'What is a Trainer Program?'),
                React.createElement(
                    'p',
                    { className: 'text-gray-700 text-lg mb-6' },
                    'The SkillTrai Trainer Program is a professional development pathway that allows skilled individuals to join our teaching team after demonstrating expertise in their field. Selected trainers become part of the company based on their engagement, performance, and technical proficiency throughout the evaluation process.'
                ),
                React.createElement(
                    'div',
                    { className: 'grid grid-cols-1 md:grid-cols-2 gap-8 mb-10' },
                    // Benefits section
                    React.createElement(
                        'div',
                        { className: 'bg-white shadow-lg rounded-xl p-6' },
                        React.createElement('h3', { className: 'text-xl font-bold text-gray-900 mb-4' }, 'Benefits of Being a Skilltrai Trainer'),
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
                                React.createElement('span', { className: 'text-gray-700' }, 'Receive outsourced client work directly through Skilltrai')
                            ),
                            React.createElement(
                                'li',
                                { className: 'flex items-start' },
                                React.createElement('span', { className: 'text-purple-600 mr-2 mt-1' }, '✓'),
                                React.createElement('span', { className: 'text-gray-700' }, 'Retain a substantial share of project fees, providing stable income in the freelance ecosystem')
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
                    // How to enroll section
                    React.createElement(
                        'div',
                        { className: 'bg-white shadow-lg rounded-xl p-6' },
                        React.createElement('h3', { className: 'text-xl font-bold text-gray-900 mb-4' }, 'How to Enroll as a Trainer'),
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
                            React.createElement('p', { className: 'text-gray-700 ml-5' }, 'Experienced professionals can apply directly if they meet the technical and teaching requirements for available positions.')
                        ),
                        React.createElement(
                            'p',
                            { className: 'text-gray-700 mt-4' },
                            'The selection process includes a technical assessment, teaching demonstration, and interview to ensure candidates have both the expertise and ability to effectively transfer knowledge to students.'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'flex justify-center' },
                    React.createElement(
                        'button',
                        { className: 'bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition' },
                        'Apply to Become a Trainer'
                    )
                )
            )
        );
    }

    // Testimonials Component
    function Testimonials() {
        return React.createElement(
            'div',
            {className: 'mb-16'},
            React.createElement('h2', {className: 'text-xl md:text-2xl font-bold mb-8 text-center'}, 'What Students Say About Our Trainers'),
            React.createElement(
                'div',
                {className: 'grid grid-cols-1 md:grid-cols-3 gap-6'},
                // Testimonial 1
                React.createElement(
                    'div',
                    {className: 'bg-white shadow-lg rounded-xl p-6'},
                    React.createElement(
                        'div',
                        {className: 'flex items-start gap-4 mb-4'},
                        React.createElement('div', {className: 'w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex-shrink-0'}),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'div',
                                {className: 'flex space-x-1 mb-1'},
                                [...Array(5)].map((_, i) => React.createElement(
                                    'svg',
                                    {
                                        key: i,
                                        className: 'w-4 h-4 text-yellow-500',
                                        fill: 'currentColor',
                                        viewBox: '0 0 20 20'
                                    },
                                    React.createElement('path', {
                                        d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                                    })
                                ))
                            ),
                            React.createElement('h4', {className: 'font-medium text-gray-900'}, 'Alex P.'),
                            React.createElement('p', {className: 'text-sm text-purple-600'}, 'AI Development Graduate')
                        )
                    ),
                    React.createElement(
                        'p',
                        {className: 'text-gray-600 italic'},
                        '"Ikhlas doesn\'t just teach code, he teaches you how to think like a developer. His real-world examples and patient guidance made all the difference in my journey."'
                    )
                ),
                // Testimonial 2
                React.createElement(
                    'div',
                    {className: 'bg-white shadow-lg rounded-xl p-6'},
                    React.createElement(
                        'div',
                        {className: 'flex items-start gap-4 mb-4'},
                        React.createElement('div', {className: 'w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex-shrink-0'}),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'div',
                                {className: 'flex space-x-1 mb-1'},
                                [...Array(5)].map((_, i) => React.createElement(
                                    'svg',
                                    {
                                        key: i,
                                        className: 'w-4 h-4 text-yellow-500',
                                        fill: 'currentColor',
                                        viewBox: '0 0 20 20'
                                    },
                                    React.createElement('path', {
                                        d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                                    })
                                ))
                            ),
                            React.createElement('h4', {className: 'font-medium text-gray-900'}, 'Maya T.'),
                            React.createElement('p', {className: 'text-sm text-purple-600'}, 'UI/UX Design Student')
                        )
                    ),
                    React.createElement(
                        'p',
                        {className: 'text-gray-600 italic'},
                        '"Akshay has an amazing eye for design and an even better ability to explain complex concepts. My portfolio improved dramatically under his mentorship."'
                    )
                ),
                // Testimonial 3
                React.createElement(
                    'div',
                    {className: 'bg-white shadow-lg rounded-xl p-6'},
                    React.createElement(
                        'div',
                        {className: 'flex items-start gap-4 mb-4'},
                        React.createElement('div', {className: 'w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex-shrink-0'}),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'div',
                                {className: 'flex space-x-1 mb-1'},
                                [...Array(5)].map((_, i) => React.createElement(
                                    'svg',
                                    {
                                        key: i,
                                        className: 'w-4 h-4 text-yellow-500',
                                        fill: 'currentColor',
                                        viewBox: '0 0 20 20'
                                    },
                                    React.createElement('path', {
                                        d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                                    })
                                ))
                            ),
                            React.createElement('h4', {className: 'font-medium text-gray-900'}, 'Jordan K.'),
                            React.createElement('p', {className: 'text-sm text-purple-600'}, 'Data Analysis Graduate')
                        )
                    ),
                    React.createElement(
                        'p',
                        {className: 'text-gray-600 italic'},
                        '"Ajvad makes data analysis approachable even for beginners. His passion for the subject is contagious, and his mentorship has been invaluable to my career."'
                    )
                )
            )
        );
    }
        // Footer Component
    function Footer() {
        return React.createElement(
            'div',
            { className: 'text-center text-sm text-gray-500 pt-8 border-t border-gray-200 pb-8' },
            React.createElement('p', null, '© 2025 SkillTrai. All rights reserved.'),
            React.createElement('p', { className: 'mt-2' }, 'Empowering the next generation of tech professionals.')
        );
    }

    // Filter Options
    const filters = [
        {id: 'all', name: 'All Trainers'},
        {id: 'tech', name: 'Technology & Engineering'},
        {id: 'data', name: 'Data Analysis'},
        {id: 'design', name: 'Design & Content Creation'}
    ];

    // Trainers Data
    const trainersData = [
        // AI Developer Trainers
        {
            id: 1,
            name: "Akshay",
            title: "Lead AI Developer Trainer",
            imageKey: "akshay",
            category: "tech",
            skills: ["Artificial Intelligence", "Python", "Machine Learning", "Deep Learning"],
            bio: "Akshay leads our AI Developer training program, bringing extensive experience in building AI-powered applications and solutions. His teaching approach combines theoretical concepts with hands-on projects, ensuring students develop practical skills they can immediately apply in real-world scenarios.",
            credentials: [
                "Expertise in Python and AI frameworks",
                "Experience in developing enterprise AI solutions",
                "Background in computer vision and NLP",
                "Strong track record of mentoring junior developers"
            ],
            email: "akshay@skilltrai.com",
            calendar: "#schedule-akshay",
            linkedin: "https://www.linkedin.com/"
        },
        {
            id: 2,
            name: "Ikhlas",
            title: "AI Developer Trainer",
            imageKey: "ikhlas",
            category: "tech",
            skills: ["AI Engineering", "Python", "Full-Stack Development", "System Architecture"],
            bio: "Ikhlas combines his expertise in AI development and full-stack engineering to provide students with a comprehensive understanding of building end-to-end AI solutions. His courses focus on practical implementation, helping students transition from theoretical knowledge to building production-ready AI applications.",
            credentials: [
                "Works as AI Engineer at Impex",
                "BTech CSE graduate from KTU",
                "Experience in MERN stack development",
                "Specializes in integrating AI with web applications"
            ],
            email: "ikhlas110@gmail.com",
            calendar: "#schedule-ikhlas",
            linkedin: "https://www.linkedin.com/in/ikhlas-pv/"
        },

        // Robotics Trainers
        {
            id: 3,
            name: "Fuad",
            title: "Lead Robotics Trainer",
            imageKey: "fuad",
            category: "tech",
            skills: ["Robotics", "IoT", "Embedded Systems", "Control Systems"],
            bio: "Fuad leads our Robotics training program, bringing expertise in building smart physical systems by combining hardware engineering with software intelligence. His hands-on teaching approach ensures students gain practical experience in designing, building, and programming robotic systems.",
            credentials: [
                "Extensive experience in robotics design and development",
                "Expert in embedded systems programming",
                "Background in mechatronics and automation",
                "Multiple successful robotics projects delivered"
            ],
            email: "fuad@skilltrai.com",
            calendar: "#schedule-fuad",
            linkedin: "https://www.linkedin.com/"
        },
        {
            id: 4,
            name: "Afnan",
            title: "Robotics Trainer & Video Lead",
            imageKey: "afnan",
            category: "tech",
            skills: ["Robotics Engineering", "Electronics", "Video Production", "Hardware Design"],
            bio: "Afnan brings his expertise in robotics engineering and electronics to help students build practical robotics skills. With a background in government polytechnic education and professional experience as a Robotics Engineer, he provides both theoretical knowledge and hands-on expertise in building functional robotic systems.",
            credentials: [
                "Government of Kerala Polytechnic Electronics graduate",
                "Works as Robotics Engineer",
                "Experience in hardware design and prototyping",
                "Specializes in integrating sensors and control systems"
            ],
            email: "afnan@skilltrai.com",
            calendar: "#schedule-afnan",
            linkedin: "https://www.linkedin.com/in/afnanyusuf/"
        },

        // Data Analysis Trainers
        {
            id: 6,
            name: "Ajvad",
            title: "Lead Data Analysis Trainer",
            imageKey: "ajvad",
            category: "data",
            skills: ["Data Science", "Python", "Statistical Analysis", "Machine Learning"],
            bio: "Ajvad leads our Data Analysis training program, bringing expertise in transforming raw data into actionable insights. With an MSc in Data Science and professional experience as an ML Engineer, he helps students develop the analytical skills needed to excel in data-driven roles.",
            credentials: [
                "MSc Data Science graduate from Aligarh Muslim University",
                "Works as ML Engineer at ACMF Technologies",
                "Expertise in data cleaning, analysis, and visualization",
                "Experience implementing machine learning models for business problems"
            ],
            email: "ajvadk.ds@gmail.com",
            calendar: "#schedule-ajvad",
            linkedin: "https://www.linkedin.com/in/ajvad-k-6291311b1/"
        },
        {
            id: 7,
            name: "Hanoon",
            title: "Business Intelligence Specialist",
            imageKey: "hanoon",
            category: "data",
            skills: ["Business Intelligence", "Data Visualization", "SQL", "Analytics"],
            bio: "Hanoon co-leads our Data Analysis program, focusing on the business intelligence and visualization aspects of data analytics. His courses emphasize transforming complex data into clear visual insights that drive business decisions and strategy development.",
            credentials: [
                "Expert in business intelligence tools and methodologies",
                "Experience in implementing data-driven solutions",
                "Background in database design and optimization",
                "Specializes in creating interactive dashboards"
            ],
            email: "hanoon@skilltrai.com",
            calendar: "#schedule-hanoon",
            linkedin: "https://www.linkedin.com/"
        },

        // UI/UX & Design Trainers
        {
            id: 8,
            name: "Akshay",
            title: "Lead UI/UX Design Trainer",
            imageKey: "akshayDesign",
            category: "design",
            skills: ["UI Design", "UX Research", "Design Systems", "Prototyping"],
            bio: "Akshay leads our UI/UX Design program, bringing expertise in creating user-centered digital experiences. His courses cover the entire design process from research and wireframing to high-fidelity prototypes and design implementation, preparing students for successful careers in design.",
            credentials: [
                "Extensive portfolio of successful UI/UX projects",
                "Experience designing for web, mobile, and enterprise applications",
                "Expert in industry-standard design tools",
                "Background in design thinking methodologies"
            ],
            email: "akshay.design@skilltrai.com",
            calendar: "#schedule-akshay-design",
            linkedin: "https://www.linkedin.com/"
        },
        {
            id: 9,
            name: "Anas",
            title: "UI/UX Design Trainer",
            imageKey: "anas",
            category: "design",
            skills: ["Interface Design", "Interactive Prototyping", "Visual Design", "User Testing"],
            bio: "Anas specializes in teaching the technical aspects of UI/UX design, focusing on creating visually appealing and highly functional interfaces. His courses emphasize practical skills that help students build impressive portfolios and transition into professional design roles.",
            credentials: [
                "Expertise in design software and prototyping tools",
                "Background in visual and interaction design",
                "Experience in conducting user research and testing",
                "Portfolio of successful design projects"
            ],
            email: "anas@skilltrai.com",
            calendar: "#schedule-anas",
            linkedin: "https://www.linkedin.com/"
        },

        // Video and Content Creation Trainers
        {
            id: 11,
            name: "Afnan",
            title: "Lead Video Training",
            imageKey: "afnanVideo",
            category: "design",
            skills: ["Video Production", "Content Creation", "Editing", "Visual Storytelling"],
            bio: "Afnan leads our Video training program, teaching the art and technical skills of video production and content creation. His courses cover the entire video production process from planning and shooting to editing and distribution, preparing students for careers in digital content creation.",
            credentials: [
                "Experience in professional video production",
                "Expertise in video editing software and tools",
                "Background in storytelling and content strategy",
                "Portfolio of diverse video projects"
            ],
            email: "afnan@skilltrai.com",
            calendar: "#schedule-afnan-video",
            linkedin: "https://www.linkedin.com/in/afnanyusuf/"
        },
        {
            id: 12,
            name: "Shareef",
            title: "Video Training Specialist",
            imageKey: "shareef",
            category: "design",
            skills: ["Video Editing", "Motion Graphics", "Content Strategy", "Digital Marketing"],
            bio: "Shareef specializes in teaching video editing and content strategy, helping students create engaging video content for various platforms. His courses emphasize both technical editing skills and strategic content planning to maximize audience engagement and achieve marketing objectives.",
            credentials: [
                "BTech CSE graduate from KTU",
                "Experience in digital content creation and marketing",
                "Expertise in video editing and post-production",
                "Background in developing content strategies"
            ],
            email: "shareefataz@gmail.com",
            calendar: "#schedule-shareef",
            linkedin: "https://www.linkedin.com/in/mohammed-shareef-at-58842123a/"
        },

        // Engineering Trainer
        {
            id: 13,
            name: "Adil K",
            title: "Lead Engineering Trainer",
            imageKey: "adil",
            category: "tech",
            skills: ["Software Engineering", "System Design", "DevOps", "Performance Optimization"],
            bio: "Adil leads our Engineering training program, focusing on software engineering principles, system design, and DevOps practices. His courses prepare students to build robust, scalable software systems that meet industry standards for performance, security, and maintainability.",
            credentials: [
                "Extensive experience in software engineering and system design",
                "Background in building enterprise-grade applications",
                "Expertise in development operations and CI/CD pipelines",
                "Experience mentoring junior engineering teams"
            ],
            email: "adil@skilltrai.com",
            calendar: "#schedule-adil",
            linkedin: "https://www.linkedin.com/"
        }
    ];
});