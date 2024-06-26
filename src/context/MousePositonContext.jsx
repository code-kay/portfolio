import { createContext, useContext, useState, useEffect } from 'react'

const MousePositionContext = createContext()

export const MousePositionProvider = ({ children }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => setPosition({ x: event.clientX, y: event.clientY });
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <MousePositionContext.Provider value={position}>
            {children}
        </MousePositionContext.Provider>
    );
};

export const useMousePosition = () => useContext(MousePositionContext)
