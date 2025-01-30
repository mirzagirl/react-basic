function isPal(str) {
    console.log(str.split('').reverse().join(''));
    return str.split('').reverse().join('') === str;
  }
  
  console.log(isPal('()()')); // false 
  console.log(isPal('dd'));
  console.log(isPal('dfd'));
  console.log(isPal('aliilaa'));
  console.log(isPal('aliila'));
  console.log(isPal('aliilaa'));
  
  function reverseNum(num) {
    let ans = 0;
    let input = num;
    while (input > 0) {
      let r = input % 10;
      ans = ans * 10 + r;
      input = Math.floor(input / 10);
    }
    return ans;
  }
  
  console.log(reverseNum(12345));
  