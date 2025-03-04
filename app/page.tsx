"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
    const cards = [
        {
            "title": "EventLy",
            "desc": "Avec Evently, trouvez des sorties qui vous ressemblent en un clin d'œil.",
            "nav": ["Trouvez", "Vivez", "Partagez"]
        },
        {
            "title": "🎉 Ne manquez plus aucun événement !",
            "desc": "Evently vous permet de découvrir les meilleurs événements autour de vous et de vivre chaque instant au maximum.",
            "nav": ["Trouvez", "Vivez", "Partagez"]
        },
        {
            "title": "📸 Immortalisez et partagez vos moments forts !",
            "desc": "Partagez vos photos et faites nous revivre vos meilleurs moments !",
            "nav": ["Trouvez", "Vivez", "Partagez"]
        }

    ]
    const [index, setIndex] = useState(0);

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % cards.length);
    };

    return (
        <div className="flex flex-row items-end h-screen w-full page page_hp">
            <Link href="/events" className="absolute w-[50%] p-4 rounded text-lg text-center bg-blue-600 page_hp__link_events">Voir tous les événements</Link>
            <div className="relative w-[100%] pt-50px page_hp__cards_wrapper">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-full h-full bg-white p-6 shadow-lg flex flex-col page_hp__card"
                    >
                        {/* Header avec navigation */}
                        <header className="mb-4 page_hp__card__header">
                            <h2 className="text-xl font-bold page_hp__card__title">{cards[index].title}</h2>
                            <ul className="list-disc flex space-x-10 page_hp__card__nav">
                                {cards[index].nav.map((item, i) => (
                                    <li key={i} className={`page_hp__card__nav__item ${i === index ? " bg-blue-500 current" : ""}`}><span className="sr-only">{item}</span></li>
                                ))}
                            </ul>
                        </header>

                        {/* Contenu principal */}
                        <div className="flex-1 flex items-center justify-left page_hp__card__content">
                            <p className="text-lg">{cards[index].desc}</p>
                        </div>

                        {/* Footer avec bouton */}
                        <footer className="text-right pt-5 page_hp__card__footer">
                            <button
                                onClick={nextCard}
                                className="bg-blue-700 text-white transition page_hp__card__next"
                            >&rsaquo;<span className="sr-only">Suivant</span>
                            </button>
                        </footer>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
