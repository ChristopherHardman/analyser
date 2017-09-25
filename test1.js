let sum = [{Computer: 3}, {Printer: 2}, {Mouse:1}];

for (var i = 0; i < sum.length; i++) {
  let k = sum[i][Object.keys(sum[i])]
  console.log(k)
}
