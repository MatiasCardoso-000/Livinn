export const RESTAURANTS = [
  {
    id: 1,
    name: "La Trattoria Italiana",
    location: "Buenos Aires, Argentina",
    rating: 4.7,
    availability: true,
    comments: ["La pasta es increíble.", "Ambiente muy acogedor."],
    description: "Restaurante de cocina italiana tradicional con pastas frescas y pizzas al horno de leña.",
    image: "https://imgs.search.brave.com/N0NebudYaxtHes7XdhNK49rFAwhyTsoAPtWAleSu_jA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQx/Mzk5Mjg0L2VzL2Zv/dG8vaW50ZXJpb3It/b2YtdmVjY2hpYS10/cmF0dG9yaWEtYnVy/YWxsaS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cV80STJW/enZTdENWTWtIZFFz/czc1RFBIM1pUWUh3/M3VORmN3MXF2aVpy/TT0",  // estilo elegante, luz cálida
    category: "Italiana",
    average_price: 8500,
  },
  {
    id: 2,
    name: "El Gaucho Grill",
    location: "Córdoba, Argentina",
    rating: 4.5,
    availability: true,
    comments: ["El asado es de primera.", "Muy buena atención."],
    description: "Parrilla argentina especializada en cortes premium de carne a las brasas.",
    image: "https://imgs.search.brave.com/2plBf9Ob4dA169xH6ApGkmga8IqLj4IxoLTBCKrde4g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL1pTVy1aby1S/YUYzNmVLX3Bmb29L/UWcvbC5qcGc",  // ambiente rústico
    category: "Parrilla",
    average_price: 12000,
  },
  {
    id: 3,
    name: "Sakura Sushi",
    location: "Mendoza, Argentina",
    rating: 4.3,
    availability: false,
    comments: ["Excelente sushi y sashimi.", "Ambiente tranquilo y elegante."],
    description: "Restaurante japonés con variedad de rolls, nigiris y platos calientes.",
    image: "https://imgs.search.brave.com/vPbofdmwqioA9MrOHu2vY-wios5At5KG0dkmKtF2nhA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL3FpVGZ6cE53/RDRNekF4ay10ak85/Y0EvbC5qcGc",  // podrías reemplazar con algo más minimalista
    category: "Japonesa",
    average_price: 10000,
  },
  {
    id: 4,
    name: "Casa Andina",
    location: "Salta, Argentina",
    rating: 4.6,
    availability: true,
    comments: ["La comida regional es espectacular.", "Los postres son únicos."],
    description: "Restaurante especializado en gastronomía andina con productos locales.",
    image: "https://imgs.search.brave.com/p9dPVb1Rk5uO4j-r5SCqLdKfA9OE-elBECmw1BNkFYs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3Vwb25pZGFkLnBl/L2ltYWdlcy9EZWFs/cy9idWZmZXRjcmlv/bGxveW1hcmlubzEu/anBn",  // ambiente natural
    category: "Regional",
    average_price: 7000,
  },
  {
    id: 5,
    name: "Bistro Paris",
    location: "Rosario, Argentina",
    rating: 4.4,
    availability: true,
    comments: ["Muy buena experiencia gastronómica.", "La decoración es hermosa."],
    description: "Bistró francés con platos clásicos como quiches, crepes y coq au vin.",
    image: "https://imgs.search.brave.com/2kaXNzorue6idpETZWzHkA-Ax0d6hlEemQ9MoYIPnRc/rs:fit:500:0:1:0/g:ce/aHR0cDovL3d3dy5k/b2l0aW5wYXJpcy5j/b20vZmlsZXMvMjAy/MS9iYXJzLWV0LXJl/c3Rvcy9iaXN0cm90/LzA2L2Jpc3Ryb3Rz/LXBhcmlzL3BoYXJh/bW9uZC5qcGc",  // estilo bistró elegante
    category: "Francesa",
    average_price: 15000,
  },
  {
    id: 6,
    name: "Veggie Life",
    location: "Buenos Aires, Argentina",
    rating: 4.2,
    availability: false,
    comments: ["Comida vegana muy sabrosa.", "Opciones saludables y variadas."],
    description: "Restaurante vegano con platos creativos y nutritivos.",
    image: "https://imgs.search.brave.com/m_Iy5HG835Qtn96RRjn0U31QObL98ZNi1UQLmy-PzA0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kZW5u/aXNmb29kc2Vydmlj/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDkvdmVn/Z2llLWxpZmUtUXVp/bm9hLUJ1cmdlci03/NjAtMzgweDIxMC5q/cGc",  // ambiente con plantas, luz natural
    category: "Vegana",
    average_price: 6000,
  },
  {
    id: 7,
    name: "Mariscos del Puerto",
    location: "Mar del Plata, Argentina",
    rating: 4.8,
    availability: true,
    comments: ["Los frutos de mar son muy frescos.", "Las porciones son abundantes."],
    description: "Restaurante especializado en pescados y mariscos frescos de la costa.",
    image: "https://imgs.search.brave.com/8s0cBOjLo7wi_AKgSdySTA7DGLjYnPqCmUr31XIJgFY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MDYvNDcvNDQvYmYv/cHVlcnRvLWRlLXBh/bG9zLmpwZw",  // ambiente luminoso costero
    category: "Mariscos",
    average_price: 14000,
  },
  {
    id: 8,
    name: "El Rincón Mexicano",
    location: "Buenos Aires, Argentina",
    rating: 4.3,
    availability: true,
    comments: ["Los tacos al pastor son geniales.", "Muy buena margarita."],
    description: "Restaurante de cocina mexicana auténtica con tacos, enchiladas y nachos.",
    image: "https://imgs.search.brave.com/vhJVSUarzNzblCMJOoOUDnFyV2IY-r9Il8-BMzRjpgg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cmluY29ubWV4aWNh/bm9wb250ZXZlZHJh/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNS9SaW5j/b24tTWV4aWNhbm8t/RXNwYWNpby1lc3Rh/bnRlcmlhLmpwZw",  // colores vivos
    category: "Mexicana",
    average_price: 7500,
  },
  {
    id: 9,
    name: "Burger House",
    location: "La Plata, Argentina",
    rating: 4.1,
    availability: true,
    comments: ["Las hamburguesas son enormes.", "Buenos precios."],
    description: "Local especializado en hamburguesas artesanales con variedad de toppings.",
    image: "https://imgs.search.brave.com/8tA63qparQ2L977LJI-5rjYyjDz7cbIWSRNSvRj__Lc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL3JNaEZBcFVz/OFdXY2FmeEJ2WlVj/S3cvbC5qcGc",  // estilo casual / moderno
    category: "Americana",
    average_price: 5000,
  },
  {
    id: 10,
    name: "Café del Parque",
    location: "Buenos Aires, Argentina",
    rating: 4.5,
    availability: false,
    comments: ["El café es excelente.", "Muy lindo para desayunar."],
    description: "Cafetería y pastelería artesanal con opciones de brunch y meriendas.",
    image: "https://imgs.search.brave.com/YTEbfX5rHR77yHkri_pAfhsL2tKx4rkg1RZcYbrZrxU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODk5/MTg1MDA0L2VzL2Zv/dG8vY2FmJUMzJUE5/LXBsYXphLWVuLWNo/b25ncWluZy1jaGlu/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9X1JUbW0xRFVs/Y2ZrUEdoczkwWkZ2/LXBRYjVWVjB6M3JL/b3VtVXpVa0VxMD0",  // ambiente de café
    category: "Cafetería",
    average_price: 3500,
  },
];

export default RESTAURANTS;
