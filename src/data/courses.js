// src/data/courses.js
// Datos de las "Rutas de Aprendizaje". Cada curso tiene un id único
// (lo vamos a usar como key en el .map() de Courses.jsx).

export const courses = [
  {
    id: 'exploradores',
    icon: '🤖',
    ageRange: '8-11 AÑOS',
    title: 'Exploradores',
    description:
      'Iniciación a la lógica matemática y fundamentos del pensamiento computacional mediante juegos estructurados.',
    popular: false,
  },
  {
    id: 'creadores',
    icon: '🧩',
    ageRange: '12-14 AÑOS',
    title: 'Creadores',
    description:
      'Robótica práctica y electrónica básica. Integración de sensores, actuadores y código estructurado.',
    popular: true,
  },
  {
    id: 'innovadores',
    icon: '💻',
    ageRange: '15-16 AÑOS',
    title: 'Innovadores',
    description:
      'Programación avanzada en Python/C++, arquitectura de sistemas complejos y algoritmos aplicados.',
    popular: false,
  },
];
