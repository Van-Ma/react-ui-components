import './resize-window.css';
import { useState, useRef } from 'react';

const ResizeWindow = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const [containerWidthPx, setContainerWidthPx] = useState(400); 
    const isMobile = containerWidthPx < 500; // Determine mobile 
    

    const fontSize = `${Math.min(Math.max(containerWidthPx / 26, 14), 30)}pt`;

 
    const handleMouseDown = (e) => {
        const startX = e.clientX;
        const startWidth = containerWidthPx; 

        const onMouseMove = (event) => {
            const deltaX = event.clientX - startX; // Distance moved by the mouse
            let newWidthPx = startWidth + deltaX; // New width in pixels
            const maxWidthPx = containerRef.current.parentElement.offsetWidth * 0.95; 

           
            newWidthPx = Math.min(maxWidthPx, Math.max(390, newWidthPx));
            setContainerWidthPx(newWidthPx);
        };

        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    };

    // Toggle hamburger menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="resize-section">
            <div
                className="resize-container"
                ref={containerRef}
                style={{ width: `${containerWidthPx}px` }}
                onMouseDown={handleMouseDown}
            >
                {isMobile ? (
                    <header className="header-container-small">
                        <button
                            className={`hamburger-button ${isOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                        <nav className={`hamburger-menu ${isOpen ? 'active' : ''}`}>
                            <ul>
                                <li><span className="small-links" href="#home">Home</span></li>
                                <li><span className="small-links" href="#about">About</span></li>
                                <li><span className="small-links" href="#services">Services</span></li>
                                <li><span className="small-links" href="#contact">Contact</span></li>
                            </ul>
                        </nav>
                    </header>
                ) : (
                    <header className="header-container-large">
                        <nav>
                            <ul>
                                <li><span className="large-links" style={{ fontSize }} href="#home">Home</span></li>
                                <li><span className="large-links" style={{ fontSize }} href="#about">About</span></li>
                                <li><span className="large-links" style={{ fontSize }} href="#services">Services</span></li>
                                <li><span className="large-links" style={{ fontSize }} href="#contact">Contact</span></li>
                            </ul>
                        </nav>
                    </header>
                )}
            </div>
            <h2>Drag the pink panel horizontally to adjust the width.</h2>
        </section>
        
    );
};

export default ResizeWindow;
