const portfolioItems = [
  { title: 'Project 1', image: '/api/placeholder/400/300' },
  { title: 'Project 2', image: '/api/placeholder/400/300' },
  { title: 'Project 3', image: '/api/placeholder/400/300' },
  { title: 'Project 4', image: '/api/placeholder/400/300' },
];

export default function Portfolio() {
  return (
    <section id='portfolio' className='py-20 bg-gray-900'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-12 text-white'>
          Our Portfolio
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className='bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'
            >
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-blue-300'>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
