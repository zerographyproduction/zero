
export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Fully Booked
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Thank you for your interest in our services. We are currently fully booked and not accepting new bookings at this time.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              All our available slots have been reserved. Please check back with us in the future for availability.
            </p>
            <div className="inline-flex items-center justify-center space-x-3 text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-lg">All slots reserved</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
