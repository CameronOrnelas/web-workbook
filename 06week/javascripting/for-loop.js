var total=0;
var limit=10;

for (var i = 0; i < limit; i++) {
  total += i;
  total = total + i;
  console.log("inside the loop" + i);
}