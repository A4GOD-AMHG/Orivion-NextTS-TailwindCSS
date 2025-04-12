'use client'

import { useEffect, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
            <button title='up'
                onClick={scrollToTop}
                className="fixed cursor-pointer bottom-8 right-8 bg-neon-purple hover:bg-neon-purple/80 text-pure-white p-3 w-12 rounded-lg shadow-lg transition-opacity z-50"
            >
                <BsArrowUp size={20} className='mx-auto' />
            </button>
        )
    );
}
