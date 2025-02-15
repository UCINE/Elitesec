export default function Contact() {
    return (
        <section className="py-24 bg-black relative overflow-hidden" id="contact">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900/10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Get in Touch
                    </h2>
                    <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
                    
                    <div className="max-w-2xl mx-auto">
                        <p className="text-xl text-gray-400 mb-12">
                            Want to talk? Send us an email and we'll get back to you as soon as possible.
                        </p>
                        
                        <div className="inline-block p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-red-700/50 transition-all duration-300">
                            <div className="flex flex-col items-center space-y-4">
                                <svg 
                                    className="w-8 h-8 text-red-700 mb-2" 
                                    fill="none" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <a
                                    href="mailto:contact@elites3c.club"
                                    className="text-2xl font-medium text-white hover:text-red-700 transition-colors duration-300 group"
                                >
                                    contact@elites3c.club
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}