var uniqueInOrder=function(iterable){
  const answer = [];
  iterable.forEach((item) => {
    if (answer[answer.length -1] === item){
      answer;
    } else {
      answer.push(item);
    }
  })

  return answer;
};


uniqueInOrder('AAAABBBCCDAABBB');
//                                 ['A','B','C','D','A','B']