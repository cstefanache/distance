export default function gower(a, b) {
  var ii = a.length;
  var ans = 0;
  for (var i = 0; i < ii; i++) {
    ans += Math.abs(a[i] - b[i]);
  }
  return ans / ii;
}
