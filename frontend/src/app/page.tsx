'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from '../components/CarCard';
import FilterBar from '../components/FilterBar';
import Footer from '../components/Footer';

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

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [manufacturer, setManufacturer] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [fuelType, setFuelType] = useState<string>('');
  const [year, setYear] = useState<string>('');

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/cars')
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCars = cars.filter((car) => {
    
    const manufacturerMatch = !manufacturer || car.manufacturer?.toLowerCase().includes(manufacturer.toLowerCase());
    const modelMatch = !model || car.model?.toLowerCase().includes(model.toLowerCase());
    const typeMatch = !type || car.type?.toLowerCase().includes(type.toLowerCase());
    const fuelTypeMatch = !type || car.fuelType?.toLowerCase().includes(fuelType.toLowerCase());
    const yearMatch = !year || car.year.toString().includes(year);

    return manufacturerMatch && modelMatch && typeMatch && fuelTypeMatch && yearMatch;
  });

  return (
    <div className="relative min-h-screen">
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

      <div className="flex flex-wrap gap-4 justify-center p-4 pt-16 md:pt-28 pb-16 mb-12">
        {filteredCars.map((car, idx) => (
          <CarCard key={idx} car={car} />
        ))}
      </div>
      <Footer />
    </div>
  );
}