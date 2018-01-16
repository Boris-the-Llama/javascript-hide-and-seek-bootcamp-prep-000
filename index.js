function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
 var toInc = document.querySelectorAll('.ranked-list');
 for (var i = 0; i < toInc.length; i++) {
   var num = parseInt(toInc[i].innerHTML);
   toInc[i].innerHTML = num + 1;
 }
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  var mostDeep = nodes[nodes.length- 1];
  return mostDeep;

}