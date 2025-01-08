import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Estilos básicos de Swiper

import { Autoplay } from 'swiper/modules';  // Solo importar Autoplay
import { useTranslation } from "react-i18next"; // Importar useTranslation


const Customers = () => {
    const { t } = useTranslation(); // Inicializar useTranslation

    const customers = [
        { id: 1, name: 'Coca Cola', logo: '/assets/customers/Coca-Cola_logo.svg' },
        { id: 2, name: 'Customer 2', logo: '/assets/customers/GRUPO-LHOMKA-S.A.S.svg' },
        { id: 3, name: 'Customer 3', logo: '/assets/customers/FreedOM_logo.svg' },
        { id: 4, name: 'Customer 4', logo: '/assets/customers/Grupo-industrial-de-proyectos.svg' },
        { id: 5, name: 'Customer 5', logo: '/assets/customers/Clicsociable.svg' },
        { id: 6, name: 'Customer 6', logo: '/assets/customers/ElTambor.svg' },
        { id: 7, name: 'Customer 7', logo: '/assets/customers/Grupo-Gastrology.svg' },
        // Agrega más clientes según lo necesites
    ];

    return (
        <section className="py-16">
            <div className="flex items-center justify-center mb-20">
            <p className="head-text text-3xl font-semibold">{t("customers.title")}</p> {/* Texto traducido */}
            </div>
            <div>
                <Swiper
                    modules={[Autoplay]}  // Solo usar Autoplay
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 0,  // No hay retraso entre las transiciones
                        disableOnInteraction: false,  // No se detiene al interactuar
                    }}
                    speed={2000}  // Velocidad de las transiciones
                    className="customer-slider"
                >
                    {customers.map((customer) => (
                        <SwiperSlide key={customer.id} className="flex justify-center items-center">
                            <img src={customer.logo} alt={customer.name} className="w-40 h-auto object-contain" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Customers;
