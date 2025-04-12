// components/CookieModal.tsx
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 50
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20
        }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        y: 50,
        transition: { duration: 0.2 }
    }
}

export default function CookieModal() {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent')
        if (!consent) {
            setShowModal(true)
        }
    }, [])

    const handleConsent = (decision: string) => {
        localStorage.setItem('cookieConsent', decision)
        setShowModal(false)
    }

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-cosmic-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-pure-white dark:bg-space-gray rounded-2xl p-8 max-w-md w-full shadow-xl"
                    >
                        <div className="text-center space-y-6">
                            <div className="space-y-4">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="mx-auto w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center"
                                >
                                    🍪
                                </motion.div>
                                <h3 className="text-2xl font-space-grotesk text-electric-blue">
                                    ¡Nos importa tu privacidad!
                                </h3>
                                <p className="text-space-gray dark:text-light-gray">
                                    Usamos cookies para mejorar tu experiencia. Puedes gestionar tus preferencias en nuestra{' '}
                                    <Link
                                        href="/privacy-policy"
                                        className="text-neon-purple hover:underline"
                                    >
                                        Política de Cookies
                                    </Link>
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleConsent('accepted')}
                                    className="w-full py-3 bg-electric-blue text-pure-white rounded-xl font-medium"
                                >
                                    Aceptar todas
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleConsent('necessary')}
                                    className="w-full py-3 border-2 border-electric-blue text-electric-blue rounded-xl font-medium"
                                >
                                    Solo necesarias
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}