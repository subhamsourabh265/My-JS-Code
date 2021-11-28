function findMaxAvg(empArr) {
    const map = {};
    if(empArr.length){
        for(let i of empArr) {
            if (map[i.name]) {
                map[i.name].count = map[i.name].count + 1 || 1;
                map[i.name].sum = map[i.name].sum + i.marks || map[i.name].sum;
            } else {
                map[i.name] = {};
                if(!map[i.name].count){
                    map[i.name].count = 1;
                }
                if(!map[i.name].sum) {
                  map[i.name].sum = i.marks;  
                }                
            }

            
        }
    }

    for (let i in map) {
        if (map.hasOwnProperty(i)) {
           map[i].average = map[i].sum / map[i].count; 
        }
    }

//     let avgmarks = Object.keys(map).map(n => n.average)
    return maxAverage(map);
}

function maxAverage(map) {
//   let len = arr.length;
  let max = -Infinity;
  let name = '';
  for (let i in map) {
      if (map.hasOwnProperty(i)) {
          if (map[i].average > max) {
              max = map[i].average;
              name = map[i];
          }
      }      
  }
//   while (len--) {
//     if (arr[len][1].average > max) {
//       max = arr[len][1].average;
//       name = arr[len][0];
//     }
//   }
  return {map, name, max};
};