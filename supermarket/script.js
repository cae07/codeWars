// um atendente de mercado lança mercadorias, quando ele erra um lançamento,
// add um zero para apagar o registro anterior.
// o caixa pode lançar quantos zeros forem necessários para invalidar
// registros a mais.
// construa um algoritmo capaz de processar uma entrada de n numeros e
// e apresentar na saída a soma dos registros validos
// exemplo de dados [1, 3, 5, 4, 0, 0, 7, 0, 0, 6] 
// resultado deste exemplo [1, 6] === 7

function supermarket(array) {
  const validArray = [];
  
  array.forEach((number) => {
    if (number !== 0) {
      validArray.push(number);
    } else {
      validArray.pop();
    }
  });

  const sum = validArray.reduce((acc, curr) => acc + curr, 0);

  return sum;
};

console.log(supermarket([1, 3, 5, 4, 0, 0, 7, 0, 0, 6]));
