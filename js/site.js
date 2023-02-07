function calcExperience(birthday) {
  var xpDifMs = Date.now() - birthday.getTime();
  var xpDate = new Date(xpDifMs);
  return Math.abs(xpDate.getUTCFullYear() - 1970);
}

window.onload = function () {
  var startDate = new Date('01.05.2016');
  var xp = calcExperience(startDate);
  document.getElementById('xp').innerHTML = xp;
};
