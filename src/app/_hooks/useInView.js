import { useEffect, useRef, useState } from "react";

export function useInView(
    options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    }) {

    const [isOnScreen, setIsOnScreen] = useState(false);

    let targetRef = useRef(null);

    function callback(entries, observer) {
        const [entry] = entries;
        setIsOnScreen(entry.isIntersecting);
    };

    useEffect(() => {
        let observer = new IntersectionObserver(callback, options);

        observer.observe(targetRef.current);

        return () => {
            observer.disconnect();
            // observer.unobserve(targetRef.current)
        };

    }, []);

    return [isOnScreen, targetRef]

}