let num = 13
let count = 0

for(let i=0; i<=num; i++){
  if(num% i==0){
    count++
  }
}

if(count === 2){
  console.log("Yes it is prime no.")
}
else{
  console.log("No")
}

