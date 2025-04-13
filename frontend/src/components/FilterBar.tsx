
'use client';

import { useState } from 'react';

// Définition des props que ce composant reçoit depuis le parent
// Chaque champ correspond à un filtre actif, avec sa valeur et sa fonction de mise à jour
interface FilterBarProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
    model: string;
    setModel: (model: string) => void;
    type: string;
    setType: (type: string) => void;
    fuelType: string;
    setFuelType: (fuelType: string) => void;
    year: string;
    setYear: (year: string) => void;
}

// Composant d'affichage de la barre de filtres (desktop et mobile)
export default function FilterBar({
    manufacturer,
    setManufacturer,
    model,
    setModel,
    type,
    setType,
    fuelType,
    setFuelType,
    year,
    setYear,
}: FilterBarProps) {

    // État pour gérer l'ouverture du panneau mobile
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Fonction qui inverse l’état d'ouverture du menu mobile
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            {/* DESKTOP - FilterBar */}
            <div className="fixed top-0 left-0 w-full bg-[#0e4b8c] py-3 px-4 z-50 shadow-lg hidden md:block">
                <form className="flex items-center space-x-4">
                    <div>
                        <label className="block mb-1 font-semibold text-white">Fabricant</label>
                        <input
                            type="text"
                            className="w-32 p-2 text-black rounded"
                            value={manufacturer}
                            onChange={(e) => setManufacturer(e.target.value)}
                            placeholder="Dacia"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-white">Modèle</label>
                        <input
                            type="text"
                            className="w-32 p-2 text-black rounded"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            placeholder="Duster"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold text-white">Type</label>
                        <input
                            type="text"
                            className="w-32 p-2 text-black rounded"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            placeholder="SUV"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold text-white">Carburant</label>
                        <input
                            type="text"
                            className="w-32 p-2 text-black rounded"
                            value={fuelType}
                            onChange={(e) => setFuelType(e.target.value)}
                            placeholder="Essence"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-white">Année</label>
                        <input
                            type="number"
                            className="w-24 p-2 text-black rounded"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            placeholder="2022"
                        />
                    </div>
                   
                </form>
            </div>

            {/* BOUTON BURGER (MOBILE) */}
            <div className="md:hidden fixed top-6 right-6 z-50">
                <button
                    onClick={toggleMobileMenu}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg focus:outline-none"
                    aria-label="Toggle Filter"
                >
                    {mobileMenuOpen ? (
                        <i className="fa-solid fa-xmark text-xl text-gray-800"></i>
                    ) : (
                        <i className="fa-solid fa-filter text-xl text-gray-800"></i>
                    )}
                </button>
            </div>

            {/* MOBILE - SIDEBAR */}
            <div
                className={`fixed top-0 right-0 w-64 h-full bg-[#0e4b8c] z-40 shadow-lg transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                <div className="pt-20 px-4">
                    <h3 className="text-2xl font-bold text-center mb-6 text-white">Rechercher votre voiture</h3>
                    <form className="flex flex-col gap-4">

                        <div>
                            <label className="block mb-1 font-semibold text-white">Fabricant</label>
                            <input
                                type="text"
                                className="w-full p-2 text-black rounded"
                                value={manufacturer}
                                onChange={(e) => setManufacturer(e.target.value)}
                                placeholder="Dacia"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold text-white">Modèle</label>
                            <input
                                type="text"
                                className="w-full p-2 text-black rounded"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                                placeholder="Duster"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold text-white">Type</label>
                            <input
                                type="text"
                                className="w-full p-2 text-black rounded"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                placeholder="SUV"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold text-white">Carburant</label>
                            <input
                                type="text"
                                className="w-full p-2 text-black rounded"
                                value={fuelType}
                                onChange={(e) => setFuelType(e.target.value)}
                                placeholder="Essence"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold text-white">Année</label>
                            <input
                                type="number"
                                className="w-full p-2 text-black rounded"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                placeholder="2022"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}