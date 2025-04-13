'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from '../components/CarCard';
import FilterBar from '../components/FilterBar';
import Footer from '../components/Footer';

/**
* Interface définissant la structure d'un objet voiture
*/
interface Car {
  manufacturer: string;
  model: string;
  year: number;
  type: string;
  price: number;
  fuelType: string;
  transmission: string;
  mileage: number;
  features: string[];
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

 /**
  * Gère l'affichage et le filtrage de la liste des véhicules
  */
export default function Home() {

  // États pour stocker les données des voitures et les critères de filtrage
  const [cars, setCars] = useState<Car[]>([]);
  const [manufacturer, setManufacturer] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [fuelType, setFuelType] = useState<string>('');
  const [year, setYear] = useState<string>('');

  /**
   * Effect qui s'exécute au chargement du composant
   * Récupère les données des véhicules depuis l'API backend
   */
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/cars')
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  /**
  * Filtre les voitures selon les critères sélectionnés par l'utilisateur
  */
  const filteredCars = cars.filter((car) => {
    
    // Vérification de correspondance pour chaque critère de filtrage
    const manufacturerMatch = !manufacturer || car.manufacturer?.toLowerCase().includes(manufacturer.toLowerCase());
    const modelMatch = !model || car.model?.toLowerCase().includes(model.toLowerCase());
    const typeMatch = !type || car.type?.toLowerCase().includes(type.toLowerCase());
    const fuelTypeMatch = !type || car.fuelType?.toLowerCase().includes(fuelType.toLowerCase());
    const yearMatch = !year || car.year.toString().includes(year);

    // Retourne true seulement si tous les critères sont satisfaits
    return manufacturerMatch && modelMatch && typeMatch && fuelTypeMatch && yearMatch;
  });

  return (
    <div className="relative min-h-screen">

      {/* Barre de filtres avec les critères */}
      <FilterBar
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        model={model}
        setModel={setModel}
        type={type}
        setType={setType}
        fuelType={fuelType}
        setFuelType={setFuelType}
        year={year}
        setYear={setYear}
      />

      {/* Grille flexible affichant les cartes de véhicules filtrées */}
      <div className="flex flex-wrap gap-4 justify-center p-4 pt-16 md:pt-28 pb-16 mb-12">
        {filteredCars.map((car, idx) => (
          <CarCard key={idx} car={car} />
        ))}
      </div>
      
      {/* Pied de page de l'application */}
      <Footer />
    </div>
  );
}