/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration){
    output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);
  }
  // TODO - filter by tags
  if(filters.tags.length > 0){
    output = output.filter(trip => {
      // let flag = true;
      for(let i = 0 ; i < filters.tags.length ; i++ ){
        if((trip.tags.indexOf(filters.tags[i])) < 0) {
          //console.log(trip.tags.indexOf(filters.tags[i]));
          return false;
        }
      }
      return trip;
    });
  }
  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips;

  const trip = filtered.filter(trip => trip.id === tripId);
  // TODO - filter trips by tripId
  //console.log('filtering trips by tripId:', tripId, trip);
  return trip[0] || {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;

  // TODO - filter trips by countryCode
  const tripsFiltered = filtered.filter(trip => trip.country.cFode === countryCode);
  //console.log('filtering trips by countryCode:', countryCode, filtered);
  return tripsFiltered || [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
