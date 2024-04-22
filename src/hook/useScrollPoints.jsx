import { useEffect, useState } from 'react'

const useScrollPoints = (ViewRef, HeaderRef, refs = []) => {
    const [scrollPoints, setScrollPoints] = useState({})
    const [currentPart, setCurrentPart] = useState(0)

    useEffect(() => {
        if (!ViewRef.current) return

        const handleScroll = () => {
            const numOfRefs = refs.length
            
            const newScrollPoints = {
                HeaderBottom: HeaderRef.current.getBoundingClientRect().bottom,
            };
            for (let i = 0; i < numOfRefs; i++) {
                const { top, bottom } = refs[i].current.getBoundingClientRect()
                newScrollPoints[`ref${i}Top`] = top
                newScrollPoints[`ref${i}Bottom`] = bottom
            }
            setScrollPoints(newScrollPoints)

            for (let i = 0; i < numOfRefs; i++) {
                if (newScrollPoints.HeaderBottom < newScrollPoints[`ref${i}Bottom`]) {
                    setCurrentPart(i)
                    break
                }
            }
        };

        ViewRef.current.addEventListener('scroll', handleScroll);

        return () => {
            ViewRef.current.removeEventListener('scroll', handleScroll)
        };
    }, [ViewRef, ...refs])

    return { scrollPoints, currentPart }
};

export default useScrollPoints
