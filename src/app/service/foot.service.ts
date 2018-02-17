
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class footservice {



  constructor(private http:Http)  {
  
   }


 
  Football(datedeb,datefin)
  {
   
    
                                return this.http.get("https://apifootball.com/api/?action=get_events&from="+datedeb+"&to="+datefin+"&league_id=62&APIkey=6b6a7d1efe2f70f58d8da9308e7e488cb3d42d8ec7f40e8aa8f724b731939b77").map(resp=>resp.json());

  }
 Football2(datedeb,datefin)
    {
   
                                return this.http.get("https://apifootball.com/api/?action=get_events&from="+datedeb+"&to="+datefin+"&league_id=512&APIkey=6b6a7d1efe2f70f58d8da9308e7e488cb3d42d8ec7f40e8aa8f724b731939b77").map(resp=>resp.json());
    }

    LaLiga(datedeb,datefin)
    {
   
                                return this.http.get("https://apifootball.com/api/?action=get_events&from="+datedeb+"&to="+datefin+"&league_id=109&APIkey=6b6a7d1efe2f70f58d8da9308e7e488cb3d42d8ec7f40e8aa8f724b731939b77").map(resp=>resp.json());

    }

    SerieA(datedeb,datefin)
    {
   
                                return this.http.get("https://apifootball.com/api/?action=get_events&from="+datedeb+"&to="+datefin+"&league_id=79&APIkey=6b6a7d1efe2f70f58d8da9308e7e488cb3d42d8ec7f40e8aa8f724b731939b77").map(resp=>resp.json());

    }
                      
    GermanLiga(datedeb,datefin)
                        
    {
                                return this.http.get("https://apifootball.com/api/?action=get_events&from="+datedeb+"&to="+datefin+"&league_id=117&APIkey=6b6a7d1efe2f70f58d8da9308e7e488cb3d42d8ec7f40e8aa8f724b731939b77").map(resp=>resp.json());

    }
}
