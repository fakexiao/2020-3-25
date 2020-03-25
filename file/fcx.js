const fs=require('fs')
const path=require('path')
function getstr() {
 return new Promise(function(fcx1,fcx2) {
      fs.readFile(path.join(__dirname, './file/111.txt'), 'utf-8', (err, datastr) => {
        fcx1(fcx1)
        fcx2(fcx2)
      })
    }
  )

}
getstr()
  .then(function (fc) {
    console.log(fc)

  },function (fc) {
    console.log(fc)

  })


  // fs.readFile(path.join(__dirname,'./file/111.txt'), 'utf-8', (err, datastr) => {
  //   console.log(123)
  // })


