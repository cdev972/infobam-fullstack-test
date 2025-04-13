'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from '../components/CarCard';

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

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/cars')
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="relative min-h-screen">
     
      <div className="flex flex-wrap gap-4 justify-center p-4 pt-16 md:pt-28 pb-16 mb-12">
        {cars.map((car, idx) => (
          <CarCard key={idx} car={car} />
        ))}
      </div>

    </div>
  );
}