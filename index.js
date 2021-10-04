
// function getSum(n) {
//     let sum = 0;
//     while (n > 0 || sum > 9) {
//          if(n == 0) {
//             n = sum;
//             sum = 0;
//          }
//          sum = sum + n % 10;
//          n = Math.floor(n / 10);
//     }
//     return sum;
// }
// console.log(getSum(1921));
// const matrix = [
//     [true, false, false],
//     [false, true, false],
//     [false, false, false]
//    ];
   
//    console.log(minesweeper(matrix));

//    function minesweeper(matrix) {
//     var adjacents = ([i, j]) => [
//       [i - 1, j - 1],
//       [i - 1, j],
//       [i - 1, j + 1],
//       [i, j - 1],
//       [i, j + 1],
//       [i + 1, j - 1],
//       [i + 1, j],
//       [i + 1, j + 1],
//     ];
//     var hintsMatrix = matrix.map((r) => r.map((_) => 0));
  
//     for (var i = 0; i < matrix.length; i++) {
//       for (var j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j]) {
//           var myAd = adjacents([i, j]);
//           for (var k = 0; k < 8; k++) {
//             if (
//               myAd[k][0] >= 0 &&
//               myAd[k][1] >= 0 &&
//               myAd[k][0] < matrix.length &&
//               myAd[k][1] < matrix[i].length
//             ) {
//               hintsMatrix[myAd[k][0]][myAd[k][1]]++;
//             }
//           }
//         }
//       }
//     }
  
//     return hintsMatrix;
//   }
// function isMAC48Address(inputString) {
//     let arr = inputString.split("-");
//     if(inputString.length() != 17) return false;
//     if(arr.length != 6) return false;
//     for(String s: arr){
//     if(s.length() == 0 || s.length() >2)
//     return false;
//     for(char c: s.toCharArray()){
//     if((c >='A' && c<='F') ||(c >='0' && c<='9'))
//     System.out.println("OK");
//     else
//     return false;
//     }
//     }
//     return true;
//     }

// const subdomains = ["co.uk", "org.uk", "me.uk", "ltd.uk", "plc.uk"];

// function extract(str) {
//   const suffix = str.match(/.+@(.+)/);
//   if (suffix) {
//     const groups = suffix.pop().split(".");
//     const lastPart = groups[groups.length - 1];
//     if (isSubDomain(groups[groups.length - 2] + "." + lastPart)) {
//       console.log("Sub domain detected in: " + groups);
//       if (groups.length > 3) {
//         console.log("Possible subdomain: " + groups.splice(0, groups.length - 3));
//         console.log();
//       }
//     } else if (isTopLevelDomain(lastPart)) {
//       console.log("Top level domain detected in: " + groups);
//       if (groups.length > 2) {
//         console.log("Possible subdomain: " + groups.splice(0, groups.length - 2));
//         console.log();
//       }
//     }
//   }
// }

// function isTopLevelDomain(lastPart) {
//   return (topLevelDomains.find(s => s === lastPart));
// }

// function isSubDomain(lastPart) {
//   return (subdomains.find(s => s === lastPart));
// }

// extract("joe@example.com");
// extract("joe@subdomain1.example.co.uk");
// extract("joe@subdomain2.example.edu");
// extract("joe@subdomain3.example.ltd.uk");
// extract("joe@test.subdomain3.example.plc.uk");

 //var input = 'joe@subdomain1.com';

 
 function getEmailDomain(input) {
 var first_split = input.split("@")[1];
 var second_split = first_split.split(".");
     if(second_split.length == 2) {
        console.log('domain is : '+first_split);
        return first_split;

     } else if(second_split.length > 2) {
         var str = first_split.substring(first_split.indexOf(".") + 1);
       console.log('domain is : '+str);
        return str;
     }
}

getEmailDomain ('joe@subdomain1.example.com.uk')
