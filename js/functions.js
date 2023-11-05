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

function isMeetingTime(startTime, endTime, meetingStart, meeting) {
  const workingDayStart = parseTimeToMinutes(startTime);
  const workingDayEnd = parseTimeToMinutes(endTime);

  const meetingStartTime = parseTimeToMinutes(meetingStart);

  const meetingEndTime = meetingStartTime + meeting;

  if (meetingStartTime >= workingDayStart && meetingEndTime <= workingDayEnd) {
    return true;
  } else {
    return false;
  }
}

function parseTimeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}


