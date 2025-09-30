export const RESTAURANTS = [
  {
    nombre: "La Trattoria Italiana",
    ubicacion: "Buenos Aires, Argentina",
    rating: 4.7,
    disponibilidad: true,
    comentarios: ["La pasta es increíble.", "Ambiente muy acogedor."],
    descripcion: "Restaurante de cocina italiana tradicional con pastas frescas y pizzas al horno de leña.",
    imagen: "https://imgs.search.brave.com/N0NebudYaxtHes7XdhNK49rFAwhyTsoAPtWAleSu_jA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQx/Mzk5Mjg0L2VzL2Zv/dG8vaW50ZXJpb3It/b2YtdmVjY2hpYS10/cmF0dG9yaWEtYnVy/YWxsaS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cV80STJW/enZTdENWTWtIZFFz/czc1RFBIM1pUWUh3/M3VORmN3MXF2aVpy/TT0",  // estilo elegante, luz cálida
    categoria: "Italiana",
    precio_promedio: 8500,
  },
  {
    nombre: "El Gaucho Grill",
    ubicacion: "Córdoba, Argentina",
    rating: 4.5,
    disponibilidad: true,
    comentarios: ["El asado es de primera.", "Muy buena atención."],
    descripcion: "Parrilla argentina especializada en cortes premium de carne a las brasas.",
    imagen: "https://imgs.search.brave.com/2plBf9Ob4dA169xH6ApGkmga8IqLj4IxoLTBCKrde4g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL1pTVy1aby1S/YUYzNmVLX3Bmb29L/UWcvbC5qcGc",  // ambiente rústico
    categoria: "Parrilla",
    precio_promedio: 12000,
  },
  {
    nombre: "Sakura Sushi",
    ubicacion: "Mendoza, Argentina",
    rating: 4.3,
    disponibilidad: false,
    comentarios: ["Excelente sushi y sashimi.", "Ambiente tranquilo y elegante."],
    descripcion: "Restaurante japonés con variedad de rolls, nigiris y platos calientes.",
    imagen: "https://imgs.search.brave.com/vPbofdmwqioA9MrOHu2vY-wios5At5KG0dkmKtF2nhA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL3FpVGZ6cE53/RDRNekF4ay10ak85/Y0EvbC5qcGc",  // podrías reemplazar con algo más minimalista
    categoria: "Japonesa",
    precio_promedio: 10000,
  },
  {
    nombre: "Casa Andina",
    ubicacion: "Salta, Argentina",
    rating: 4.6,
    disponibilidad: true,
    comentarios: ["La comida regional es espectacular.", "Los postres son únicos."],
    descripcion: "Restaurante especializado en gastronomía andina con productos locales.",
    imagen: "https://imgs.search.brave.com/p9dPVb1Rk5uO4j-r5SCqLdKfA9OE-elBECmw1BNkFYs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3Vwb25pZGFkLnBl/L2ltYWdlcy9EZWFs/cy9idWZmZXRjcmlv/bGxveW1hcmlubzEu/anBn",  // ambiente natural
    categoria: "Regional",
    precio_promedio: 7000,
  },
  {
    nombre: "Bistro Paris",
    ubicacion: "Rosario, Argentina",
    rating: 4.4,
    disponibilidad: true,
    comentarios: ["Muy buena experiencia gastronómica.", "La decoración es hermosa."],
    descripcion: "Bistró francés con platos clásicos como quiches, crepes y coq au vin.",
    imagen: "https://imgs.search.brave.com/2kaXNzorue6idpETZWzHkA-Ax0d6hlEemQ9MoYIPnRc/rs:fit:500:0:1:0/g:ce/aHR0cDovL3d3dy5k/b2l0aW5wYXJpcy5j/b20vZmlsZXMvMjAy/MS9iYXJzLWV0LXJl/c3Rvcy9iaXN0cm90/LzA2L2Jpc3Ryb3Rz/LXBhcmlzL3BoYXJh/bW9uZC5qcGc",  // estilo bistró elegante
    categoria: "Francesa",
    precio_promedio: 15000,
  },
  {
    nombre: "Veggie Life",
    ubicacion: "Buenos Aires, Argentina",
    rating: 4.2,
    disponibilidad: false,
    comentarios: ["Comida vegana muy sabrosa.", "Opciones saludables y variadas."],
    descripcion: "Restaurante vegano con platos creativos y nutritivos.",
    imagen: "https://imgs.search.brave.com/m_Iy5HG835Qtn96RRjn0U31QObL98ZNi1UQLmy-PzA0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kZW5u/aXNmb29kc2Vydmlj/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDkvdmVn/Z2llLWxpZmUtUXVp/bm9hLUJ1cmdlci03/NjAtMzgweDIxMC5q/cGc",  // ambiente con plantas, luz natural
    categoria: "Vegana",
    precio_promedio: 6000,
  },
  {
    nombre: "Mariscos del Puerto",
    ubicacion: "Mar del Plata, Argentina",
    rating: 4.8,
    disponibilidad: true,
    comentarios: ["Los frutos de mar son muy frescos.", "Las porciones son abundantes."],
    descripcion: "Restaurante especializado en pescados y mariscos frescos de la costa.",
    imagen: "https://imgs.search.brave.com/8s0cBOjLo7wi_AKgSdySTA7DGLjYnPqCmUr31XIJgFY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MDYvNDcvNDQvYmYv/cHVlcnRvLWRlLXBh/bG9zLmpwZw",  // ambiente luminoso costero
    categoria: "Mariscos",
    precio_promedio: 14000,
  },
  {
    nombre: "El Rincón Mexicano",
    ubicacion: "Buenos Aires, Argentina",
    rating: 4.3,
    disponibilidad: true,
    comentarios: ["Los tacos al pastor son geniales.", "Muy buena margarita."],
    descripcion: "Restaurante de cocina mexicana auténtica con tacos, enchiladas y nachos.",
    imagen: "https://imgs.search.brave.com/vhJVSUarzNzblCMJOoOUDnFyV2IY-r9Il8-BMzRjpgg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cmluY29ubWV4aWNh/bm9wb250ZXZlZHJh/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNS9SaW5j/b24tTWV4aWNhbm8t/RXNwYWNpby1lc3Rh/bnRlcmlhLmpwZw",  // colores vivos
    categoria: "Mexicana",
    precio_promedio: 7500,
  },
  {
    nombre: "Burger House",
    ubicacion: "La Plata, Argentina",
    rating: 4.1,
    disponibilidad: true,
    comentarios: ["Las hamburguesas son enormes.", "Buenos precios."],
    descripcion: "Local especializado en hamburguesas artesanales con variedad de toppings.",
    imagen: "https://imgs.search.brave.com/8tA63qparQ2L977LJI-5rjYyjDz7cbIWSRNSvRj__Lc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL3JNaEZBcFVz/OFdXY2FmeEJ2WlVj/S3cvbC5qcGc",  // estilo casual / moderno
    categoria: "Americana",
    precio_promedio: 5000,
  },
  {
    nombre: "Café del Parque",
    ubicacion: "Buenos Aires, Argentina",
    rating: 4.5,
    disponibilidad: false,
    comentarios: ["El café es excelente.", "Muy lindo para desayunar."],
    descripcion: "Cafetería y pastelería artesanal con opciones de brunch y meriendas.",
    imagen: "https://imgs.search.brave.com/YTEbfX5rHR77yHkri_pAfhsL2tKx4rkg1RZcYbrZrxU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODk5/MTg1MDA0L2VzL2Zv/dG8vY2FmJUMzJUE5/LXBsYXphLWVuLWNo/b25ncWluZy1jaGlu/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9X1JUbW0xRFVs/Y2ZrUEdoczkwWkZ2/LXBRYjVWVjB6M3JL/b3VtVXpVa0VxMD0",  // ambiente de café
    categoria: "Cafetería",
    precio_promedio: 3500,
  },
];

export default RESTAURANTS;
