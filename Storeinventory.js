const Storeinventory = {
    'webdevelopment': 50.00,
    'javaDSA':20.00,
    'pwcourse':30.00,
     'dsacourse':25.00 
};


const coverttorupess = (price) =>{
    return price *80;
}
const storeInventoryInRupees = Object.fromEntries(
    Object.entries(Storeinventory).map(([item, price]) => [item, coverttorupess(price)])
  );
  
  console.log(storeInventoryInRupees);


  