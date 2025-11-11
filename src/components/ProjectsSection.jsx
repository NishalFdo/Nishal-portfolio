import { useState, useEffect } from "react";
// Import new icons for navigation
import { ArrowRight, Github, X, ChevronLeft, ChevronRight } from "lucide-react";

// ----------------------------------------------------------------------
// 1. PROJECT DATA (Unchanged)
// ----------------------------------------------------------------------
const projects = [
    {
        id: 1,
        title: "NoteWave",
        description: "A realtime chat application with built-in meeting schedule feature that focuses University Students",
        image: "/Projects/project1.png",
        tags: ["React", "TailwindCSS", "Firebase", "Google Calendar API"],
        githubUrl: "https://github.com/oshankkkk/NoteWave",
        longDescription:
            "NoteWave is a specialized communication platform designed to enhance collaboration and organization for university students. It features real-time chat, a robust scheduling system for group meetings and study sessions, and dedicated channels for course-specific discussions. Built with React and Firebase, it offers a snappy, responsive user experience.",
        moreImages: [
            "/Projects/project1-detail-1.png",
            "/Projects/project1-detail-2.png",
        ],
    },
    {
        id: 2,
        title: "Personal Portfolio Website",
        description:
            "This is my personal portfolio website - the very site you're browsing now.  ",
        image: "/Projects/project2.png",
        tags: ["React", "Tailwind CSS"],
        githubUrl: "https://github.com/NishalFdo/Nishal-portfolio",
        longDescription:
            "This is my personal portfolio website—the very site you're browsing now. I built it from scratch using React and Tailwind CSS to create a clean, responsive, and interactive showcase for my work. It features a a random star and meteor animation, dynamic modal system with a built-in image gallery, a full-screen lightbox viewer, and a robust scroll-lock mechanism to ensure a smooth browsing experience..",
        moreImages: [
            "/Projects/project2-detail-1.png",
            "/Projects/project2-detail-2.png"
        ],
    },
    {
        id: 3,
        title: "Oceanos - Life Below Ocean",
        description:
            "A web platform dedicated to exploring ocean industries, marine life, and conservation. Features a digital fish encyclopedia, industry guides, and articles on volunteering.",
        image: "/Projects/project3.png",
        tags: ["HTML", "CSS", "Javascript"],

        longDescription:
            "Oceanos is a comprehensive web platform designed as a central hub for marine information and activity. It bridges the gap between ocean-based industries and conservation, providing detailed resources for professionals, students, and enthusiasts alike.",
        moreImages: [
            "/Projects/project3-detail-1.png",
            "/Projects/project3-detail-2.png",
            "/Projects/project3-detail-3.png",
            "/Projects/project3-detail-4.png"

        ],
    },
];

// ----------------------------------------------------------------------
// 2. PROJECT MODAL COMPONENT (Cursor fixed)
// ----------------------------------------------------------------------
const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    // --- Gallery State ---
    const allImages = [project.image, ...(project.moreImages || [])];
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // --- Lightbox State ---
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Reset active image index when project prop changes
    useEffect(() => {
        if (project) {
            setActiveImageIndex(0);
        }
    }, [project]);

    // --- Navigation Functions ---
    const goToNext = () => {
        setActiveImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    };

    const goToPrev = () => {
        setActiveImageIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
    };


    return (
        <>
            {/* Modal Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center p-4 transition-opacity duration-300"
                onClick={onClose}
            >
                {/* Modal Content Container */}
                <div
                    className="bg-card text-card-foreground rounded-lg max-w-5xl w-full max-h-[90vh] shadow-2xl flex relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button for the Modal */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-white hover:text-primary transition-colors z-20 p-2 rounded-full bg-black/50 hover:bg-black/70"
                        aria-label="Close project details"
                    >
                        <X size={24} />
                    </button>

                    {/* --- Two-Column Layout --- */}
                    <div className="flex flex-col md:flex-row w-full max-h-[90vh]">

                        {/* --- LEFT COLUMN (Text Content) --- */}
                        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
                            <h3 className="text-3xl font-bold mb-3 text-primary">{project.title}</h3>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm font-medium border border-primary text-primary rounded-full bg-primary/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Detailed Description */}
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {project.longDescription || project.description}
                            </p>

                            {/* Additional Details/Links */}
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                                {project.githubUrl && project.githubUrl !== "#" && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
                                    >
                                        <Github size={20} /> View Source Code
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* --- RIGHT COLUMN (Image Gallery) --- */}
                        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto bg-black/5 dark:bg-black/10 rounded-r-lg">

                            {/* Main Active Image (Clickable for Lightbox) */}
                            <div
                                className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-4 shadow-lg border border-border cursor-pointer"
                                onClick={() => setIsLightboxOpen(true)}
                            >
                                <img
                                    src={allImages[activeImageIndex]}
                                    alt="Main project view"
                                    className="w-full h-full object-contain transition-opacity duration-300"
                                />
                            </div>

                            {/* Thumbnail Gallery */}
                            <h4 className="text-lg font-semibold mb-3">Gallery</h4>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                {allImages.map((imgSrc, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImageIndex(index)}
                                        className={`rounded-md overflow-hidden h-20 md:h-24 border-2 transition-all duration-200 cursor-pointer
                                            ${activeImageIndex === index
                                                ? 'border-primary opacity-100'
                                                : 'border-transparent opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <img
                                            src={imgSrc}
                                            alt={`${project.title} thumbnail ${index + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Lightbox Overlay (with Navigation) --- */}
            {isLightboxOpen && (
                <div
                    // 👇 UPDATED: Removed 'cursor-zoom-out'
                    className="fixed inset-0 z-[60] bg-black/90 flex justify-center items-center p-4"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-6 right-6 text-white p-3 rounded-full bg-white/20 backdrop-blur-sm 
                                   transition-all duration-300 hover:bg-white/40 hover:scale-110 z-[70]"
                        onClick={() => setIsLightboxOpen(false)}
                        aria-label="Close full-screen image"
                    >
                        <X size={36} />
                    </button>

                    {/* Lightbox Navigation */}
                    {allImages.length > 1 && (
                        <>
                            {/* Previous Button */}
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-white/20 backdrop-blur-sm 
                                           transition-all duration-300 hover:bg-white/40 hover:scale-110 z-[70]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrev();
                                }}
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={36} />
                            </button>

                            {/* Next Button */}
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-white/20 backdrop-blur-sm 
                                           transition-all duration-300 hover:bg-white/40 hover:scale-110 z-[70]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                                aria-label="Next image"
                            >
                                <ChevronRight size={36} />
                            </button>
                        </>
                    )}

                    {/* The full-screen image */}
                    <img
                        src={allImages[activeImageIndex]}
                        alt="Full screen project view"
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
};


// ----------------------------------------------------------------------
// 3. MAIN PROJECTS SECTION (Unchanged - Scroll Lock Logic is Correct)
// ----------------------------------------------------------------------
export const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    // --- CORRECTED SCROLL LOCK LOGIC ---
    useEffect(() => {

        if (selectedProject) {
            const scrollY = window.scrollY;
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
        }

        return () => {
            const scrollY = document.body.style.top;
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || "0") * -1);
            }
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Click on any card to see more details, screenshots, and Github links.
                </p>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            onClick={() => openModal(project)}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <p className="flex items-center text-primary text-sm font-medium">
                                        View Details <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                                    </p>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/NishalFdo"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            {/* Render the Modal */}
            <ProjectModal project={selectedProject} onClose={closeModal} />
        </section>
    );
};