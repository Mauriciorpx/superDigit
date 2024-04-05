function superDigit(n) {
    // Caso base: si n tiene un solo dígito, retornar n
    if (n < 10) {
        return n;
    }
    
    // Función para sumar los dígitos de un número
    function sumDigits(num) {
        if (num < 10) {
            return num;
        }
        return num % 10 + sumDigits(Math.floor(num / 10));
    }
    
    // Caso recursivo: sumar los dígitos y llamar a la función con el resultado
    return superDigit(sumDigits(n));
  }
  
  // Ejemplo de uso
  const numero = 9875;
  const superDigito = superDigit(numero);
  console.log(`El super dígito de ${numero} es: ${superDigito}`);


