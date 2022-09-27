let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send()
request.onload = function(){
    let res = JSON.parse(request.response)
    // console.log(res)
//asian contient__________________________
   let asiaRegion = res.filter(e => e.region === "Asia").map(e=>e.name)
   console.log(asiaRegion)
   
//population below 2L _________________
   let below2L = res.filter(e => e.population < 200000).map(e=>e.name)
   console.log(below2L)
   
//country name capital flag _________________
    let couData =  res.forEach(element => {
        console.log(`country name: ${element.name} capital: ${element.capital} flag: ${element.flag}`)
    });

//total no of population _________________
    let worldPop = res.reduce((a,b)=>a + b.population,0)
    console.log(worldPop)


//total no of Countrys which use USD _________________
    let USD = []
    for (let i = 0; i < res.length; i++){
        if (res[i].currencies){
                for (let j = 0; j < res[i].currencies.length; j++){
                        if (res[i].currencies[j].code === "USD") {
                            USD.push(res[i].name)  
                        }
                        
                    
                }
            }
     } 
    
    console.log(USD)
   
    

    
}