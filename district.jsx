import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './style.css';


const districtList = [
  {
    name: 'Araria',
    
    map: 'https://www.google.com/maps/place/Araria,+Bihar/@26.1316856,87.4454641,14z/data=!3m1!4b1!4m6!3m5!1s0x39ef8eb5e81b7083:0x2c5f955ef8b784ea!8m2!3d26.1324689!4d87.4528067!16zL20vMDVwbmJz?entry=ttu',
    links: {
      hospitals: 'https://www.google.com/maps/search/Araria+Bihar/',
      restaurants: 'https://www.google.com/maps/search/Hotels/@26.1316826,87.4454641,14z/data=!3m1!4b1?entry=ttu',
      busStops: 'https://www.google.com/maps/search/bus+stop/@26.1313062,87.1364206,10z/data=!3m1!4b1?entry=ttu'
    }
  }, {
    name: 'Arwal',
    map: 'https://www.google.com/maps/place/Arwal,+Bihar/@25.1521814,84.6816102,14z/data=!3m1!4b1!4m6!3m5!1s0x39921d71e3a5f2b5:0x38435433b3779b87!8m2!3d25.2526305!4d84.6735975!16sL20vMTIwcHg1bDAy?entry=ttu',
    links: {
      hospitals: 'https://www.google.com/maps/search/Arwal+Bihar/',
      restaurants: 'https://www.google.com/maps/search/Hotels/@25.1521814,84.6816102,14z/data=!3m1!4b1?entry=ttu',
      busStops: 'https://www.google.com/maps/search/bus+stop/@25.1521814,84.6816102,14z/data=!3m1!4b1?entry=ttu'
    }
  },
  {
    name: 'Aurangabad',
    map: 'https://www.google.co.in/maps/place/Aurangabad,+Bihar/@24.7556594,84.3371475,13z/data=!3m1!4b1!4m6!3m5!1s0x398cfc35b57ffe31:0xffea2031cb937478!8m2!3d24.7486689!4d84.3807025!16zL20vMDgwZmh6?entry=ttu',
    links: {
      hospitals: 'https://www.google.com/maps/search/Arwal+Bihar/',
      restaurants: 'https://www.google.co.in/maps/search/Hotels/@24.7556482,84.3371474,13z/data=!3m1!4b1?entry=ttu',
      busStops: 'https://www.google.co.in/maps/search/bus+stop/@24.0473697,84.0607054,15z/data=!3m1!4b1?entry=ttu'
    }
  },
  {
    name: 'Banka',
    map: 'https://www.google.co.in/maps/place/Banka,+Bihar+813102/@24.8855782,86.9007394,14z/data=!3m1!4b1!4m6!3m5!1s0x39f0555a2cce8ab9:0xb522842ed01a2b6d!8m2!3d24.8874179!4d86.919838!16s%2Fm%2F026vf1_?entry=ttu',
    links: {
      hospitals: 'https://www.google.com/maps/search/Arwal+Bihar/',
      restaurants: 'https://www.google.co.in/maps/search/Hotels/@24.8855754,86.9007394,14z/data=!3m1!4b1?entry=ttu',
      busStops: 'https://www.google.com/maps/search/bus+stop/@25.1521814,84.6816102,14z/data=!3m1!4b1?entry=ttu'
    }
  },
  {
    name: 'Begusarai',
    map: 'https://www.google.co.in/maps/place/Begusarai,+Bihar/@25.4178452,86.0426328,12z/data=!3m1!4b1!4m6!3m5!1s0x39f21acfd71c503d:0xb63ebca77635ae58!8m2!3d25.4181638!4d86.1271542!16zL20vMDRnMGMx?entry=ttu',
    links: {
      hospitals: 'https://www.google.co.in/maps/search/Pharmacies/@25.4177992,86.0426326,12z/data=!3m1!4b1?entry=ttu',
      restaurants: 'https://www.google.co.in/maps/search/Restaurants/@25.4177992,86.0426326,12z/data=!3m1!4b1?entry=ttu',
      busStops: 'https://www.google.co.in/maps/place/Begusarai+Begusrai+Bus+Stand/@25.4162594,85.4656389,9z/data=!4m10!1m2!2m1!1sbus+stop!3m6!1s0x39f2052a953662d3:0xf8ac085eda7b283f!8m2!3d25.4240842!4d86.1331615!15sCghidXMgc3RvcJIBCGJ1c19zdG9w4AEA!16s%2Fg%2F1tm__m_w?entry=ttu'
    }
  },
  {
    name: 'Bhagalpur',
    map: 'https://www.google.co.in/maps/search/Restaurants/@25.2403427,86.9918061,13z/data=!3m1!4b1?entry=ttu',
    links: {
      hospitals: 'https://www.google.com/maps/search/Begusarai+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Bhagalpur+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Bhagalpur+Bihar+bus+stops/'
    }
  },
  {
    name: 'Bhojpur',
    map: 'https://www.google.com/maps/place/Bhojpur,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Bhojpur+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Bhojpur+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Bhojpur+Bihar+bus+stops/'
    }
  },
  {
    name: 'Arwal',
    map: 'https://www.google.com/maps/place/Arwal,+Bihar/@25.1521814,84.6816102,14z/data=!3m1!4b1!4m6!3m5!1s0x39921d71e3a5f2b5:0x38435433b3779b87!8m2!3d25.2526305!4d84.6735975!16sL20vMTIwcHg1bDAy?entry=ttu',
    links: {
      hospitals: 'https://www.google.com/maps/search/Arwal+Bihar/',
      restaurants: 'https://www.google.com/maps/search/Hotels/@25.1521814,84.6816102,14z/data=!3m1!4b1?entry=ttu',
      busStops: 'https://www.google.com/maps/search/bus+stop/@25.1521814,84.6816102,14z/data=!3m1!4b1?entry=ttu'
    }
  },
  {
    name: 'Buxar:',
    map: 'https://www.google.com/maps/place/Buxar,+Bihar/@25.5703185,83.9784614,14z/data=!3m1!4b1!4m6!3m5!1s0x399275985564a721:0x3c49a62eeb3d93be!8m2!3d25.5647103!4d83.9777482!16s%2Fm%2F027cl9z?entry=ttu',
    links: {
      hospitals: 'https://www.google.com/maps/search/Buxar+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Buxar+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Buxar+Bihar+bus+stops/'
    }
  },
  {
    name: 'Darbhanga',
    map: 'https://www.google.com/maps/place/Arwal,+Bihar/@25.1521814,84.6816102,14z/data=!3m1!4b1!4m6!3m5!1s0x39921d71e3a5f2b5:0x38435433b3779b87!8m2!3d25.2526305!4d84.6735975!16sL20vMTIwcHg1bDAy?entry=ttu',
    links: {
      hospitals: 'https://www.google.com/maps/search/Darbhanga+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Darbhanga+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Darbhanga+Bihar+bus+stops/'
    }
  },
  {
    name: 'East Champaran',
    map: 'https://www.google.com/maps/place/East+Champaran,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/East+Champaran+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/East+Champaran+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/East+Champaran+Bihar+bus+stops/'
    }
  },
  {
    name: 'Gaya',
    map: 'https://www.google.com/maps/search/Gaya+Bihar+hospitals/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Gaya+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Gaya+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Gaya+Bihar+bus+stops/'
    }
  },
  {
    name: 'Gopalganj',
    map: 'https://www.google.com/maps/place/Ward+No.+15,+Gopalganj,+Bihar+841428/@26.4605772,84.4402462,15z/data=!3m1!4b1!4m6!3m5!1s0x39931ace38b4be2b:0xed4849770012e298!8m2!3d26.4605776!4d84.4402462!16zL20vMGJsMzBi?entry=ttu',
    links: {
      hospitals: 'https://www.google.com/maps/search/Gopalganj+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Gopalganj+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Gopalganj+Bihar+bus+stops/'
    }
  },
  {
    name: 'Jamui',
    map: 'https://www.google.com/maps/place/Jamui,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Jamui+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Jamui+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Jamui+Bihar+bus+stops/'
    }
  },
  {
    name: 'Jehanabad',
    map: 'https://www.google.com/maps/place/Jehanabad,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Jehanabad+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Jehanabad+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Jehanabad+Bihar+bus+stops/'
    }
  },
  {
    name: 'Khagaria',
    map: 'https://www.google.com/maps/place/Khagaria,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Arwal+Bihar/',
      restaurants: 'https://www.google.com/maps/search/Khagaria+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Khagaria+Bihar+bus+stops/'
    }
  },
  {
    name: 'Kishanganj:',
    map: 'https://www.google.com/maps/place/Kishanganj,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Kishanganj+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Kishanganj+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Kishanganj+Bihar+bus+stops/'
    }
  },
  {
    name: 'Madhepura',
    map: 'https://www.google.com/maps/place/Madhepura,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Madhepura+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Madhepura+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Madhubani+Bihar+bus+stops/'
    }
  },
  {
    name: 'Munger',
    map: 'https://www.google.com/maps/place/Munger,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Munger+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Munger+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Munger+Bihar+bus+stops/'
    }
  },
  {
    name: 'Nalanda',
    map: 'https://www.google.com/maps/place/Nalanda,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Arwal+Bihar/',
      restaurants: 'https://www.google.com/maps/search/Nalanda+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Nalanda+Bihar+bus+stops/'
    }
  },
  {
    name: 'Nawada',
    map: 'https://www.google.com/maps/place/Nawada,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Nalanda+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Nawada+Bihar+hospitals/',
      busStops: 'https://www.google.com/maps/search/Nawada+Bihar+bus+stops/'
    }
  },

  {
    name: 'Patna:',
    map: 'https://www.google.com/maps/place/Patna,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Patna+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Patna+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Patna+Bihar+bus+stops/'
    }
  },
  {
    name: 'Purnia',
    map: 'https://www.google.com/maps/place/Purnia,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Purnia+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Hotels/@25.1521814,84.6816102,14z/data=!3m1!4b1?entry=ttu',
      busStops: 'https://www.google.com/maps/search/Purnia+Bihar+bus+stops/'
    }
  },
  {
    name: 'Rohtas',
    map: 'https://www.google.com/maps/place/Rohtas,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Rohtas+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Rohtas+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Purnia+Bihar+bus+stops/'
    }
  },
  {
    name: 'Saharsa',
    map: 'https://www.google.com/maps/place/Saharsa,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Saharsa+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Saharsa+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Saharsa+Bihar+bus+stops/'
    }
  },
  {
    name: 'Samastipur',
    map: 'https://www.google.com/maps/place/Samastipur,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Samastipur+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Samastipur+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Samastipur+Bihar+bus+stops/'
    }
  },
  {
    name: 'Sheohar',
    map: 'https://www.google.com/maps/place/Sheohar,+Bihar/',
    links: {
      hospitals: 'https://www.google.com/maps/search/Sheohar+Bihar+hospitals/',
      restaurants: 'https://www.google.com/maps/search/Sheohar+Bihar+restaurants/',
      busStops: 'https://www.google.com/maps/search/Sheohar+Bihar+bus+stops/'
    }
  },
  {
    name: 'Supaul',
    map: 'https://www.google.com/maps/place/Arwal,+Bihar/@25.1521814,84.6816102,14z/data=!3m1!4b1!4m6!3m5!1s0x39921d71e3a5f2b5:0x38435433b3779b87!8m2!3d25.2526305!4d84.6735975!16sL20vMTIwcHg1bDAy?entry=ttu',
    links: {
      hospitals: 'https://www.google.com/maps/place/Supaul,+Bihar/@26.1180242,86.6053847,12z/data=!3m1!4b1!4m5!3m4!1s0x39f21906be1d4c05:0xe9f7ef0d91ddca30!8m2!3d26.1167176!4d86.6071022',
      restaurants: 'https://www.google.com/maps/search/Hotels/@25.1521814,84.6816102,14z/data=!3m1!4b1?entry=ttu',
      busStops: 'https://www.google.com/maps/search/bus+stop/@25.1521814,84.6816102,14z/data=!3m1!4b1?entry=ttu'
    }
  },
  
  
  
  
  
  // Add similar objects for other districts
];

const Districts = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  return (
    <section>
      <h2>Search Districts</h2>
      <button onClick={() => setSelectedDistrict(null)} className="random-district-button">
        Show All Districts
      </button>
      {selectedDistrict === null ? (
        <div>
          {districtList.map((district, index) => (
            <div key={index} className="district-card">
              <h3>{district.name}</h3>
              <div className="district-footer">
                <button onClick={() => setSelectedDistrict(district)} className="place-button">
                  {district.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="place-card">
          <h3>{selectedDistrict.name}</h3>
          <div className="place-footer">
            <h4>Hospitals:</h4>
            <a href={selectedDistrict.links.hospitals} target="_blank" rel="noopener noreferrer">
              Hospitals in {selectedDistrict.name}
            </a>
            <h4>Restaurants:</h4>
            <a href={selectedDistrict.links.restaurants} target="_blank" rel="noopener noreferrer">
              Restaurants in {selectedDistrict.name}
            </a>
            <h4>Bus Stops:</h4>
            <a href={selectedDistrict.links.busStops} target="_blank" rel="noopener noreferrer">
              Bus Stops in {selectedDistrict.name}
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Districts;
