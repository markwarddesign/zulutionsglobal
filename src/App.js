import React, { useState, useEffect, useRef } from 'react';

// --- Shared Components ---

const Header = ({ currentPage, setPage }) => {
    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Impact', id: 'impact' },
        { name: 'Our Team', id: 'team' },
        { name: 'Careers', id: 'careers' },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-sm">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={() => setPage('home')} className="text-2xl font-bold text-green-600">Zulutions Global</a>
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map(link => (
                        <a 
                            key={link.id} 
                            href={`#${link.id}`} 
                            onClick={(e) => { e.preventDefault(); setPage(link.id); }}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === link.id ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:text-green-600'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <a href="#" onClick={(e) => {e.preventDefault(); setPage('contact')}} className="hidden md:inline-block bg-green-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">Contact Us</a>
                <button className="md:hidden text-gray-700">
                    <i className="fas fa-bars fa-lg"></i>
                </button>
            </nav>
        </header>
    );
};

const Footer = ({ setPage }) => (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-lg font-bold">Zulutions Global</h4>
                    <p className="mt-4 text-gray-400">Innovating for a waste-free, energy-positive world.</p>
                </div>
                <div>
                    <h5 className="font-semibold tracking-wide">Quick Links</h5>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#about" onClick={(e) => {e.preventDefault(); setPage('about')}} className="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="#impact" onClick={(e) => {e.preventDefault(); setPage('impact')}} className="text-gray-400 hover:text-white">Impact</a></li>
                        <li><a href="#careers" onClick={(e) => {e.preventDefault(); setPage('careers')}} className="text-gray-400 hover:text-white">Careers</a></li>
                        <li><a href="#contact" onClick={(e) => {e.preventDefault(); setPage('contact')}} className="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold tracking-wide">Legal</h5>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold tracking-wide">Connect</h5>
                    <div className="mt-4 flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter fa-lg"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in fa-lg"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube fa-lg"></i></a>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
                <p>&copy; 2024 Zulutions Global, Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

const RevealOnScroll = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            ref.current.style.animationDelay = `${delay}s`;
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="reveal-on-scroll">
            {children}
        </div>
    );
};

const PageTitle = ({ subtitle, title }) => (
    <div className="bg-gray-900 text-white py-20 sm:py-28">
        <div className="container mx-auto px-6 text-center">
            <RevealOnScroll>
                <h2 className="text-base font-semibold leading-7 text-green-400">{subtitle}</h2>
                <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{title}</p>
            </RevealOnScroll>
        </div>
    </div>
);

const CTASection = ({ setPage }) => (
    <section id="contact" className="bg-slate-50">
        <div className="container mx-auto px-6 py-24">
            <RevealOnScroll>
                <div className="relative isolate overflow-hidden bg-gradient-to-r from-green-600 to-teal-500 shadow-2xl rounded-3xl px-6 pt-16 pb-24 text-center sm:px-16 lg:px-24">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to Transform Your Waste?
                        <br />
                        Let's build a greener future together.
                    </h2>
                    <p className="mt-6 mx-auto max-w-xl text-lg leading-8 text-green-100">
                        Contact our team today to learn more about our technology, discuss a potential partnership, or request a detailed proposal.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" onClick={(e) => { e.preventDefault(); setPage('contact'); }} className="rounded-md bg-white px-5 py-3 text-base font-semibold text-green-600 shadow-sm hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-transform hover:scale-105">Contact Us</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); setPage('about'); }} className="text-base font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
                    </div>
                    <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
                        <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                                <stop stopColor="#15803d" />
                                <stop offset="1" stopColor="#0d9488" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </RevealOnScroll>
        </div>
    </section>
);


// --- Page Components ---

const HomePage = ({ setPage }) => {
    
    // This state is needed for timeline video observer
    const [timelineVideos, setTimelineVideos] = useState([]);
    
    useEffect(() => {
        const videos = document.querySelectorAll('#how-it-works .video-wrapper video');
        setTimelineVideos(Array.from(videos));
    }, []);

    useEffect(() => {
        if(timelineVideos.length === 0) return;
        
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const videoElement = entry.target;
                if (entry.isIntersecting) {
                    timelineVideos.forEach(v => {
                        if (v !== videoElement) v.pause();
                    });
                    videoElement.play().catch(error => console.log("Autoplay for preview video was prevented.", error));
                } else {
                    videoElement.pause();
                }
            });
        }, { threshold: 0.6 });

        timelineVideos.forEach(video => videoObserver.observe(video));

        return () => timelineVideos.forEach(video => videoObserver.unobserve(video));

    }, [timelineVideos]);

    const StatCounter = ({ target, ...props }) => {
        const [count, setCount] = useState(0);
        const ref = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        let start = 0;
                        const duration = 2000;
                        let startTime = null;

                        const step = (currentTime) => {
                            if (!startTime) startTime = currentTime;
                            const progress = Math.min((currentTime - startTime) / duration, 1);
                            const currentNum = Math.floor(progress * target);
                            setCount(currentNum);
                            if (progress < 1) {
                                window.requestAnimationFrame(step);
                            } else {
                                setCount(target);
                            }
                        };
                        window.requestAnimationFrame(step);
                        observer.unobserve(ref.current);
                    }
                },
                { threshold: 0.5 }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, [target]);

        return <p ref={ref} {...props}>{count.toLocaleString()}</p>;
    };

    const processSteps = [
        { icon: 'fa-recycle', title: 'Intake & Sorting', description: 'As waste enters, automated sorting removes recyclables. Only non-recyclable materials move forward for conversion.', video: 'https://zulutionsglobal.com/wp-content/uploads/2025/06/conveyor-belt.mp4' },
        { icon: 'fa-gear', title: 'Size Reduction', description: 'The remaining material is shredded and ground to a consistent size, ensuring optimal flow and processing speed.', video: 'https://zulutionsglobal.com/wp-content/uploads/2025/06/Shredder-clip.mp4' },
        { icon: 'fa-droplet', title: 'Sludge Preparation', description: 'The finely processed feedstock is mixed into a sludge-like consistency for controlled injection into the reactor.', video: 'https://zulutionsglobal.com/wp-content/uploads/2025/06/mixed-with-sludge.mp4' },
        { icon: 'fa-fire-flame-curved', title: 'High-Temp Conversion', description: 'Sludge is injected into our reactor, undergoing thermal decomposition to destroy contaminants completely.', video: 'https://zulutionsglobal.com/wp-content/uploads/2025/06/20221205_072217.mp4' },
        { icon: 'fa-wind', title: 'Steam Generation', description: 'Extreme heat from the reactor passes through a boiler, converting water into high-pressure steam.', video: 'https://videos.pexels.com/video-files/3843431/3843431-hd_1920_1080_25fps.mp4' },
        { icon: 'fa-bolt-lightning', title: 'Turbine Activation', description: 'Pressurized steam drives high-performance turbines, generating clean, renewable energy for the grid.', video: 'https://zulutionsglobal.com/wp-content/uploads/2025/06/Facility-clips.mp4' },
    ];

    return (
        <main>
            <section className="relative h-screen flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10"></div>
                <img src="https://zulutionsglobal.com/wp-content/uploads/2019/05/body-of-water-sea-water-coast-aerial-photography-promontory-1545291-pxhere.com_.jpg" onError={(e) => e.target.src='https://placehold.co/1920x1080/333/fff?text=Renewable+Energy'} alt="Coastal aerial view" className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-shadow-lg hero-h1">Turn Waste into a Greener Tomorrow.</h1>
                    <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto hero-p">Zulutions Global pioneers a revolutionary process to convert municipal and industrial waste into clean, renewable energy.</p>
                    <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' }); }} className="mt-10 inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-green-700 transition-transform hover:scale-105 transform hero-a">Discover Our Process</a>
                </div>
            </section>
            
            <section id="how-it-works" className="container mx-auto px-4 py-24 sm:py-32">
                <RevealOnScroll>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-base font-semibold leading-7 text-green-600">🔧 HOW IT WORKS</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">The Green Energy Conversion Process</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Bring your waste — leave with clean, renewable energy. Our patented system efficiently processes municipal solid waste, industrial byproducts, and organic waste like sargassum. Here's how:</p>
                    </div>
                </RevealOnScroll>
                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300" aria-hidden="true"></div>
                    <div className="space-y-16 md:space-y-24">
                        {processSteps.map((step, index) => (
                             <RevealOnScroll key={index}>
                                <div className="relative flex flex-col md:flex-row items-center md:justify-between md:odd:flex-row-reverse group">
                                    <div className="timeline-dot hidden md:block"></div>
                                    <div className="w-full md:w-5/12">
                                        <div className="video-wrapper relative aspect-w-16 aspect-h-9 bg-slate-800 rounded-lg shadow-2xl overflow-hidden cursor-pointer" data-video-src={step.video}>
                                            <video className="w-full h-full object-cover pointer-events-none" src={step.video} loop muted playsInline></video>
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity group-hover:opacity-75">
                                                <i className="fas fa-play-circle fa-4x text-white/80"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-5/12 mt-6 md:mt-0">
                                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                                            <div className="flex items-center gap-x-4">
                                                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                                    <i className={`fas ${step.icon} text-xl text-green-600`}></i>
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900">Step {index + 1}: {step.title}</h3>
                                            </div>
                                            <p className="mt-4 text-slate-600 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>
            
            <section id="impact-summary" className="bg-gray-900 text-white py-24 sm:py-32">
                <div className="container mx-auto px-6 text-center">
                    <RevealOnScroll>
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-base font-semibold leading-7 text-green-400">OUR IMPACT</h2>
                            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Making a Measurable Difference</p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">Our technology isn't just an idea—it's a powerful solution creating tangible, positive change for our planet and communities.</p>
                        </div>
                    </RevealOnScroll>
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <RevealOnScroll>
                            <div className="bg-gray-800 p-8 rounded-lg">
                                <i className="fas fa-recycle text-green-400 text-4xl mb-4"></i>
                                <StatCounter target={150000} className="text-5xl font-bold text-white" />
                                <p className="text-lg font-medium text-gray-300 mt-2">Tons of Waste Diverted Annually</p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.2}>
                            <div className="bg-gray-800 p-8 rounded-lg">
                                <i className="fas fa-lightbulb text-green-400 text-4xl mb-4"></i>
                                <StatCounter target={65000} className="text-5xl font-bold text-white" />
                                <p className="text-lg font-medium text-gray-300 mt-2">MWh of Clean Energy Generated</p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.4}>
                            <div className="bg-gray-800 p-8 rounded-lg">
                                <i className="fas fa-leaf text-green-400 text-4xl mb-4"></i>
                                <StatCounter target={85000} className="text-5xl font-bold text-white" />
                                <p className="text-lg font-medium text-gray-300 mt-2">Tons of CO2 Emissions Prevented</p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>
            
            <section className="py-24 sm:py-32">
                <div className="container mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="bg-gradient-to-br from-green-600 to-teal-600 p-1 rounded-lg shadow-2xl">
                                <div className="bg-gray-800 p-10 rounded-md text-white">
                                    <img src="https://zulutionsglobal.com/wp-content/uploads/2019/05/body-of-water-sea-water-coast-aerial-photography-promontory-1545291-pxhere.com_.jpg" onError={(e) => e.target.src='https://placehold.co/1200x600/1a202c/4a5568?text=Clean+Future'} alt="Clean coastal waters" className="rounded-lg shadow-xl mb-8 w-full h-64 object-cover" />
                                    <div className="flex justify-center items-center gap-x-4 mb-4">
                                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20">
                                            <i className="fas fa-earth-americas text-3xl text-white"></i>
                                        </div>
                                        <h3 className="text-4xl font-bold">The Result: Clean Energy. Zero Waste.</h3>
                                    </div>
                                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Our closed-loop system ensures zero harmful emissions and turns problematic waste into a sustainable power source — helping communities stay clean, green, and future-ready.</p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
            <CTASection setPage={setPage} />
        </main>
    );
};

const AboutPage = ({ setPage }) => {
    const keyFeatures = [
        { icon: "fa-shield-halved", title: "Safe & Compliant", description: "Fully compliant with all international emission standards." },
        { icon: "fa-cubes", title: "Versatile Conversion", description: "Can convert diverse forms of carbon-containing non-recoverable waste." },
        { icon: "fa-screwdriver-wrench", title: "Modular & Ergonomic", description: "Modular design streamlines assembly/disassembly for maximum efficiency." },
        { icon: "fa-tag", title: "Low Maintenance", description: "Designed for durability and low maintenance costs." },
        { icon: "fa-ruler-combined", title: "Scalable & Affordable", description: "Ability to be scaled up or down based on client needs." },
        { icon: "fa-hand-sparkles", title: "Fully Customizable", description: "We custom tailor a system that meets your unique requests." },
    ];
    
    return (
        <div className="pt-20">
            <PageTitle subtitle="WHO WE ARE" title="About Zulutions Global" />
            
            <div className="py-24 sm:py-32">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <RevealOnScroll>
                            <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Modern office interior" className="rounded-2xl shadow-xl w-full h-full object-cover"/>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story.</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">Zulutions Global, LLC was born out of a deep desire to be an active participant in the restoration of our planet. We believe that the environment is nobody’s property to destroy, but it’s everyone’s responsibility to protect.</p>
                            <p className="mt-4 text-lg leading-8 text-gray-600">The work we do is more than just a business; it is a commitment to help create a cleaner world through carbon-negative solutions. Our success is the World’s success—we are all in this together.</p>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 text-white py-24 sm:py-32">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <RevealOnScroll>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission & Vision</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">Our mission is to provide comprehensive solutions to environmental issues that are both economical and clean, while empowering local communities with the tools they need to repair and maintain their most precious natural resources.</p>
                        <p className="mt-4 text-lg leading-8 text-gray-300">Our vision is to see our plants constructed, operated and owned by the local population, ensuring they enjoy long-term benefits from the solutions developed within their community.</p>
                    </RevealOnScroll>
                    <RevealOnScroll>
                         <img src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team collaborating" className="rounded-2xl shadow-xl w-full h-full object-cover"/>
                    </RevealOnScroll>
                </div>
            </div>

            <div className="py-24 sm:py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                         <RevealOnScroll>
                             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Do: Key Features</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">We have partnered with leading experts in the waste energy/management sectors to create an affordable, scalable, and sustainable system aimed at resolving the biggest issues affecting our world.</p>
                         </RevealOnScroll>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keyFeatures.map((feature, index) => (
                            <RevealOnScroll key={index} delay={index * 0.1}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-full">
                                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                        <i className={`fas ${feature.icon} text-xl text-green-600`}></i>
                                    </div>
                                    <h3 className="mt-5 text-lg font-semibold text-gray-900">{feature.title}</h3>
                                    <p className="mt-2 text-slate-600">{feature.description}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>

            <CTASection setPage={setPage} />
        </div>
    );
};

const ImpactPage = ({ setPage }) => {
    const problems = [
        {
            title: "Methane Emissions",
            content: "Solid waste landfills are the 3rd largest source of methane emissions in the world. This not only poses a major threat to our environment but highlights a massive opportunity to capture and convert it to energy. Zulutions Global's focus is to create a customizable system that is safe, sustainable, and successful for all parties involved.",
            image: "https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Subterranean Water Pollution",
            content: "Hazardous chemicals from landfills can leach into the ground water through precipitation and runoff. Through our capture, condense and convert approach, Zulutions Global LLC can attack this problem at the source and eliminate harmful leachates from entering the water table while capturing stored energy.",
             image: "https://images.pexels.com/photos/228095/pexels-photo-228095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Sargassum Overgrowth",
            content: "In recent years, sargassum has grown at an exponential rate due to climate change, choking coastal ecosystems and delivering a massive economic hit to tourism. Zulutions Global sees an opportunity to harness this as a fuel source that not only reduces the seaweed, but converts it into valuable energy.",
            image: "https://images.pexels.com/photos/12752984/pexels-photo-12752984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    return (
        <div className="pt-20">
            <PageTitle subtitle="GLOBAL CHALLENGES" title="Our Areas of Impact" />

            <div className="py-24 sm:py-32">
                <div className="container mx-auto px-6 space-y-24">
                    {problems.map((problem, index) => (
                        <RevealOnScroll key={index}>
                            <div className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'md:grid-flow-row-dense md:[&>*:last-child]:col-start-1' : ''}`}>
                                <div className="relative">
                                    <img src={problem.image} alt={problem.title} className="rounded-2xl shadow-xl w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{problem.title}</h2>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">{problem.content}</p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
             <CTASection setPage={setPage} />
        </div>
    );
};

const TeamPage = ({ setPage }) => {
    const teamMembers = [
        { name: "Team Member 1", title: "CEO & Founder", image: "https://placehold.co/400x400/e2e8f0/64748b?text=Person" },
        { name: "Team Member 2", title: "Chief Technology Officer", image: "https://placehold.co/400x400/e2e8f0/64748b?text=Person" },
        { name: "Team Member 3", title: "Head of Operations", image: "https://placehold.co/400x400/e2e8f0/64748b?text=Person" },
        { name: "Team Member 4", title: "Lead Engineer", image: "https://placehold.co/400x400/e2e8f0/64748b?text=Person" },
        { name: "Team Member 5", title: "Project Manager", image: "https://placehold.co/400x400/e2e8f0/64748b?text=Person" },
        { name: "Team Member 6", title: "Environmental Scientist", image: "https://placehold.co/400x400/e2e8f0/64748b?text=Person" },
    ];
    return (
        <div className="pt-20">
            <PageTitle subtitle="OUR EXPERTS" title="Meet the Team" />
            <div className="py-24 sm:py-32">
                <div className="container mx-auto px-6">
                     <p className="text-center text-lg leading-8 text-gray-600 max-w-3xl mx-auto mb-20">We have partnered with leading experts in the waste energy and management sectors to create an affordable, scalable, and sustainable system aimed at resolving the biggest issues affecting our world.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {teamMembers.map((member, index) => (
                            <RevealOnScroll key={index} delay={index * 0.1}>
                                <div className="text-center">
                                    <img src={member.image} alt={member.name} className="w-48 h-48 mx-auto rounded-full shadow-lg" />
                                    <h3 className="mt-6 text-xl font-semibold text-gray-900">{member.name}</h3>
                                    <p className="text-green-600 font-medium">{member.title}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
            <CTASection setPage={setPage} />
        </div>
    );
};

const CareersPage = ({ setPage }) => (
    <div className="pt-20">
        <PageTitle subtitle="JOIN OUR MISSION" title="Careers at Zulutions Global" />
         <div className="py-24 sm:py-32">
            <div className="container mx-auto px-6 text-center">
                <RevealOnScroll>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Work With Us?</h2>
                    <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-600">
                        Become part of a passionate team dedicated to creating a cleaner, more sustainable future. At Zulutions Global, your work will directly contribute to solving critical environmental issues. We offer a dynamic, innovative environment where you can grow your career and make a real impact.
                    </p>
                </RevealOnScroll>
                <RevealOnScroll>
                    <div className="mt-20 bg-white p-12 rounded-2xl shadow-lg border border-slate-100">
                         <h3 className="text-2xl font-bold tracking-tight text-gray-900">Current Openings</h3>
                         <p className="mt-4 text-gray-500">We are not actively hiring for any positions at the moment, but we are always interested in hearing from talented individuals who share our passion. Please check back soon or send your resume to <a href="mailto:careers@zulutionsglobal.com" className="text-green-600 hover:underline">careers@zulutionsglobal.com</a>.</p>
                    </div>
                </RevealOnScroll>
            </div>
         </div>
        <CTASection setPage={setPage} />
    </div>
);

const ContactPage = () => (
     <div className="pt-20">
        <PageTitle subtitle="GET IN TOUCH" title="Contact Us" />
         <div className="py-24 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-slate-100 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Send us a message</h2>
                    <p className="mt-2 text-lg text-gray-600">Have a question or a project in mind? We'd love to hear from you.</p>
                    <form action="#" method="POST" className="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                            <div className="mt-2.5">
                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                            <div className="mt-2.5">
                                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                             <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                            <div className="mt-2.5">
                                <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                         <div className="sm:col-span-2">
                             <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                            <div className="mt-2.5">
                                <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <button type="submit" className="w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Let's talk</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)


// --- Main App Component ---
export default function App() {
    const [page, setPage] = useState('home');
    const [modalVideoSrc, setModalVideoSrc] = useState(null);

    useEffect(() => {
        const videoWrappers = document.querySelectorAll('.video-wrapper');
        const openModal = (src) => setModalVideoSrc(src);
        
        videoWrappers.forEach(wrapper => {
            wrapper.addEventListener('click', () => {
                const videoSrc = wrapper.getAttribute('data-video-src');
                if (videoSrc) openModal(videoSrc);
            });
        });

        // Cleanup function for dynamically added listeners if components re-render often
        // For this app structure, it's less critical but good practice.
    }, [page]); // Re-run when page changes to attach listeners to new elements


    const closeModal = () => {
        setModalVideoSrc(null);
        document.body.style.overflow = '';
    };

    const renderPage = () => {
        switch (page) {
            case 'about': return <AboutPage setPage={setPage} />;
            case 'impact': return <ImpactPage setPage={setPage} />;
            case 'team': return <TeamPage setPage={setPage} />;
            case 'careers': return <CareersPage setPage={setPage} />;
            case 'contact': return <ContactPage />;
            default: return <HomePage setPage={setPage} />;
        }
    };
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <>
            <Header currentPage={page} setPage={setPage} />
            {renderPage()}
            <Footer setPage={setPage}/>
            
            {modalVideoSrc && (
                <div id="videoModal" className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]">
                    <div className="relative w-full max-w-4xl bg-black rounded-lg shadow-lg mx-4">
                        <button onClick={closeModal} className="absolute -top-3 -right-3 sm:top-0 sm:-right-12 text-white text-4xl font-bold z-10">&times;</button>
                        <div className="aspect-w-16 aspect-h-9">
                            <video src={modalVideoSrc} className="w-full h-full rounded-lg" controls autoPlay playsInline></video>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
