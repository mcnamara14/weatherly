
let data = fetch(`http://api.wunderground.com/api/0f1aa13fe5ed9a5d/forecast/geolookup/conditions/q/CO/Denver.json`)
    .then(data => data.json())
    .then(data => { 
      return Object.assign({}, data);
    });



module.exports = data;