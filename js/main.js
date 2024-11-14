// Declaración de variables con precios constantes
const precioAlmojabana = 2000; // Precio de una almojabana
const precioChurro = 2000; // Precio de un churro

let cantidadAlmojabana = 30; // Cantidad de almojabanas disponibles
let precioRolloSuizo = 2500; // Precio de un rollo suizo
let cantidadRolloSuizo = 5; // Cantidad de rollos suizos disponibles
let cantidadChurro = 47; // Cantidad de churros disponibles

// Cálculo del total de cada item
let totalAlmojabana = precioAlmojabana * cantidadAlmojabana; // Total almojabanas
let totalRolloSuizo = precioRolloSuizo * cantidadRolloSuizo; // Total rollos suizos
let totalChurro = precioChurro * cantidadChurro; // Total churros

// Suma de los totales
let totalInventario = totalAlmojabana + totalRolloSuizo + totalChurro;

// Mostrar la información en la consola
console.log(`Almojabana: precio unitario: ${precioAlmojabana}, cantidad: ${cantidadAlmojabana}, valor: $${totalAlmojabana}`);
console.log(`Rollo suizo: precio unitario: ${precioRolloSuizo}, cantidad: ${cantidadRolloSuizo}, valor: $${totalRolloSuizo}`);
console.log(`Churro: precio unitario: ${precioChurro}, cantidad: ${cantidadChurro}, valor: $${totalChurro}`);
console.log(`Total: $${totalInventario}`);

// Cambiar el número de almojabanas y churros
cantidadAlmojabana += 20; // Aumentar en 20
cantidadChurro += 30; // Aumentar en 30

// Recalcular los totales
totalAlmojabana = precioAlmojabana * cantidadAlmojabana; // Nuevo total almojabanas
totalChurro = precioChurro * cantidadChurro; // Nuevo total churros

// Recalcular la suma total
totalInventario = totalAlmojabana + totalRolloSuizo + totalChurro;

// Mostrar la nueva información en la consola
console.log(`\nDespués de actualizar las cantidades:\n`);
console.log(`Almojabana: precio unitario: ${precioAlmojabana}, cantidad: ${cantidadAlmojabana}, valor: $${totalAlmojabana}`);
console.log(`Rollo suizo: precio unitario: ${precioRolloSuizo}, cantidad: ${cantidadRolloSuizo}, valor: $${totalRolloSuizo}`);
console.log(`Churro: precio unitario: ${precioChurro}, cantidad: ${cantidadChurro}, valor: $${totalChurro}`);
console.log(`Total: $${totalInventario}`);



// Mostrar la nueva información en la consola control + alt + L


