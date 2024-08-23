const ltts = require('node:https');
let url = 'https://restcountries.com/v3.1/all';

/**!SECTION
 * Get all the countries.
 * @param (Function) ca;;bacl The method to call when data is ready or retrieved.
 *  */

function getAllCountries(callback){
 let url = `${ baseUrl }/all`;
 Https.get(url, (res) => {

 })
 res.on('data', (data) => {
    content += data;
 })
}

getAllCountries((countries) =>{
    for(let country of contries){
        console.log(`[${ country.cca3 } ${country.name.common}`)
    }
})