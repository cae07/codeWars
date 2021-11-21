var uniqueInOrder=function(iterable){
  const answer = [];
  let splitIterable = [];

  if(typeof iterable !== 'object') {
    splitIterable = iterable.split('');
  } else {
    splitIterable = iterable;
  };

  splitIterable.forEach((item) => {
    if (answer[answer.length -1] === item){
      answer;
    } else {
      answer.push(item);
    }
  })

  return answer;
};

uniqueInOrder([1 ,2 ,3, 4, 5, 5, 4]);
uniqueInOrder('AAAABBBCCDAABBB');
