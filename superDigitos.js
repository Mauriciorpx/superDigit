function sumDigits(n) {
    // Si n tiene un solo dígito, retornar n
    if (n < 10) {
      return n;
    } else {
      // Sumar los dígitos de n
      let suma = 0;
      suma += n % 10;
      n = Math.floor(n / 10);
      // Llamar recursivamente a sumDigits con la suma resultante
      return suma + sumDigits(n);
    }
  }
// Ejemplos de euso
console.log(sumDigits(12345)); // Resultado: 15
console.log(sumDigits(987));   // Resultado: 24
console.log(sumDigits(111));   // Resultado: 3