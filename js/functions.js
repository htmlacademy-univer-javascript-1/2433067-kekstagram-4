const strLength = function(string, len){
  if(string.length <= len){
    return true;
  }
};
// eslint-disable-next-line no-console
console.log(strLength('проверяемая строка', 20));

const isPalindrome = function(str){
  const normalizedStr = str.replace(/\s/g, '').toLowerCase();

  let reversedStr = '';

  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }

  return normalizedStr === reversedStr;
};
console.log(isPalindrome('Лёша на полке клопа нашёл '));
