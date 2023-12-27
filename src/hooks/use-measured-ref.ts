import { useCallback, useState } from "react";

export const useMeasuredRef = () => {
    const [elementHeight, setElementHeight] = useState<number>(0);

    const getObserver = useCallback((node: HTMLDivElement) => {
        if (!node) return;
        const resizeObserver = new ResizeObserver(() => {
            setElementHeight(node.getBoundingClientRect().height);
        });
        resizeObserver.observe(node);
    }, []);

    return { elementHeight, getObserver };
};
