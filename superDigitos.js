const superDigits = (numero) => {
    // Si n tiene un solo dígito, retornar n
    if (numero < 10) {
      return numero;
    } else {
      // Sumar los dígitos de n
      let suma = 0;
      suma += numero % 10;
      numero = Math.floor(numero / 10);
      // Se llama recursivamente a superDigits con la suma resultante
      return suma + superDigits(numero);
    }
  }
// Ejemplos de euso
console.log(superDigits(12345)); // Resultado: 15
console.log(superDigits(987));   // Resultado: 24
console.log(superDigits(111));   // Resultado: 3