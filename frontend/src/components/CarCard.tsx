'use client';

import React, { useRef, useState, useEffect } from 'react';

// Interface qui définit les propriétés attendues pour une voiture
interface CarProps {
    car: {
        manufacturer: string;
        model: string;
        year: number;
        price: number;
        image: string;
        mileage: number;
        description: string;
        type: string;
        fuelType: string;
        transmission: string;
    };
}

// Composant d'affichage d'une carte de véhicule
export default function CarCard({ car }: CarProps) {
    const [isVisible, setIsVisible] = useState(false); // Gère l’apparition animée de la carte
    const cardRef = useRef<HTMLDivElement>(null); // Référence à l'élément DOM pour l'observer

    // Effet qui déclenche une animation lorsque la carte entre dans la vue
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entries[0].target);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`
            bg-white text-black rounded p-4 shadow-[4px_-4px_12px_rgba(0,0,0,0.15)] w-80 min-h-[520px]
            transform transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
            md:hover:scale-105
        `}
        >
            <div className="mx-auto flex flex-col justify-between h-full">
                <div>
                    {/* Image du véhicule */}
                    <img
                        src={car?.image}
                        className="object-cover object-center w-full h-48 rounded"
                        alt={car?.model || 'Car image'}
                    />
                    {/* Contenu de la carte */}
                    <div className="flex flex-col space-y-3 w-full mt-4">
                        <h2 className="text-2xl text-[#09a8e0] text-center md:text-left">
                            {car.manufacturer} {car.model} ({car.year})
                        </h2>
                        <p>Type : {car?.type}</p>
                        <p>Carburant : {car?.fuelType}</p>
                        <p>Boîte : {car?.transmission}</p>
                        <p>Kilométrage : {car?.mileage} km</p>
                        <p>Description : {car?.description}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-2xl font-semibold">{car.price} €</p>
                </div>
            </div>
        </div>
    );
}