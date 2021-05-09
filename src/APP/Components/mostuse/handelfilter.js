export function HandelFilter(places ,from){
var filter=[];
const DAYS=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for(let i=0;i<places.length;i++){
        for(let j=0;j<places[i].hours.length;j++){
              
           if(places[i].hours[j].day===DAYS[from.getDay()]){
             filter.push(places[i]);
          }
        }

    }
    return(filter)
}