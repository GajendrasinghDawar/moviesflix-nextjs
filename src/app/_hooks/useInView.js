import { useEffect, useRef } from "react";





let callback = (entries, observer) => {
    entries.forEach((entry) => {
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
        console.log(entry);
    });
};


export function useInView(
    options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    }) {

    let observerTarget = useRef(null);

    useEffect(() => {
        let observer = new IntersectionObserver(callback, options);

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };

    }, [observerTarget]);

    return {
        ref: observerTarget,
        inView: false
    }

}