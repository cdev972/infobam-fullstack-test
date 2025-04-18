import { Controller, Get } from '@nestjs/common';

/**
 * Contrôleur pour la gestion des voitures
 */
@Controller('api/cars')
export class VehiclesController {
    /**
     * Tableau des véhicules disponibles (données mockées pour le développement).
     */
    private cars = [
        {
            manufacturer: "Renault",
            model: "Clio 5",
            year: 2023,
            type: "Sedan",
            price: 79900,
            fuelType: "Essence",
            transmission: "Manuelle",
            mileage: 27592,
            features: ["5 places", "2 bagages", "90 cv", "Climatisée"],
            image: "/images/renault-clio-5.png",
            description: "Citadine essence confortable, idéale pour les trajets urbains.",
            createdAt: new Date("2023-02-15"),
            updatedAt: new Date("2024-01-05"),
        },
        {
            manufacturer: "Renault",
            model: "Twingo",
            year: 2022,
            type: "Mini",
            price: 69900,
            fuelType: "Essence",
            transmission: "Manuelle",
            mileage: 24544,
            features: ["4 places", "1 bagage", "65 cv", "Climatisée"],
            image: "/images/renault-twingo.png",
            description: "Petite voiture maniable, parfaite pour la ville et les stationnements serrés.",
            createdAt: new Date("2023-03-10"),
            updatedAt: new Date("2024-02-01"),
        },
        {
            manufacturer: "Dacia",
            model: "Sandero",
            year: 2022,
            type: "Hatchback",
            price: 75900,
            fuelType: "Essence",
            transmission: "Manuelle",
            mileage: 14260,
            features: ["5 places", "1 bagage", "90 cv", "Climatisée"],
            image: "/images/dacia-sandero.png",
            description: "Voiture économique avec un bon rapport qualité-prix.",
            createdAt: new Date("2023-04-22"),
            updatedAt: new Date("2024-03-19"),
        },
        {
            manufacturer: "Renault",
            model: "Captur",
            year: 2022,
            type: "SUV",
            price: 119900,
            fuelType: "Essence",
            transmission: "Manuelle",
            mileage: 17453,
            features: ["5 places", "2 bagages", "90 cv", "Climatisée"],
            image: "/images/renault-captur.png",
            description: "SUV compact essence, pratique pour les familles.",
            createdAt: new Date("2023-05-18"),
            updatedAt: new Date("2024-01-28"),
        },
        {
            manufacturer: "Dacia",
            model: "Duster",
            year: 2022,
            type: "SUV",
            price: 119900,
            fuelType: "Essence",
            transmission: "Manuelle",
            mileage: 24918,
            features: ["5 places", "3 bagages", "90 cv", "Climatisée"],
            image: "/images/dacia-duster.png",
            description: "SUV robuste et spacieux, parfait pour les routes variées.",
            createdAt: new Date("2023-06-03"),
            updatedAt: new Date("2024-02-14"),
        },
        {
            manufacturer: "Dacia",
            model: "Jogger 7 Places",
            year: 2021,
            type: "Monospace",
            price: 199900,
            fuelType: "Diesel",
            transmission: "Manuelle",
            mileage: 21983,
            features: ["7 places", "1 bagage", "90 cv", "Climatisée"],
            image: "/images/dacia-jogger.png",
            description: "Monospace 7 places pratique pour les groupes ou familles nombreuses.",
            createdAt: new Date("2023-07-25"),
            updatedAt: new Date("2024-03-07"),
        },
        {
            manufacturer: "Renault",
            model: "Trafic 9 Places",
            year: 2022,
            type: "Van",
            price: 199900,
            fuelType: "Diesel",
            transmission: "Manuelle",
            mileage: 28714,
            features: ["9 places", "5 bagages", "120 cv", "Climatisée"],
            image: "/images/renault-trafic.png",
            description: "Minibus spacieux idéal pour les voyages en groupe.",
            createdAt: new Date("2023-08-11"),
            updatedAt: new Date("2024-01-15"),
        },
        {
            manufacturer: "Volvo",
            model: "XC60 Auto",
            year: 2022,
            type: "SUV",
            price: 249900,
            fuelType: "Diesel/Essence",
            transmission: "Automatique",
            mileage: 19583,
            features: ["5 places", "4 bagages", "190 cv", "Climatisée"],
            image: "/images/volvo-xc60.png",
            description: "SUV haut de gamme, alliant confort, puissance et élégance.",
            createdAt: new Date("2023-09-02"),
            updatedAt: new Date("2024-04-01"),
        },
        {
            manufacturer: "Dacia",
            model: "Lodgy Stepway 7 Places",
            year: 2023,
            type: "Monospace",
            price: 159900,
            fuelType: "Essence",
            transmission: "Manuelle",
            mileage: 20375,
            features: ["7 places", "2 bagages", "110 cv", "Climatisée"],
            image: "/images/dacia-lodgy.png",
            description: "Monospace essence spacieux et pratique pour les familles.",
            createdAt: new Date("2023-10-12"),
            updatedAt: new Date("2024-03-28"),
        }
    ];

    /**
    * Endpoint GET pour récupérer tous les véhicules
    * @returns Un tableau contenant tous les véhicules disponibles
    */
    @Get()
    getCars() {
        // Retourne directement le tableau de véhicules
        return this.cars;
    }
}