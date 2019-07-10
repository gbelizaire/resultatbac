import { Injectable } from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class BacHaitienService {

  constructor(private _http:Http) { }
 
 public getCentre(CodeEleve):Observable<any>{
         var headers = new Headers();
        //var resultat:any;    
    headers.append('Content-Type', 'application/json; charset=utf-8');
  //  headers.append('Access-Control-Allow-Origin','*');
    let  rech={"Matricule":CodeEleve};

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(rech);
    //http://localhost:8082/resultatbac/api/rs/test.php
    // return this._http.post('http://localhost:8082/resultatbac/api/rs/test.php', body,{headers})
    
   // return this._http.post('api/trouvemoncentre.php', body,{headers})  
   // 'http://localhost:8082/resultatbac/api/trouvemoncentre.php'
     return this._http.post('api/trouvemoncentre.php', body,{headers})  
     .map((res: Response) => res.json());

     }
 
 //###################
  public getResulatatEleve(CodeEleve):Observable<any>{
         var headers = new Headers();
        //var resultat:any;    
    headers.append('Content-Type', 'application/json; charset=utf-8');
  //  headers.append('Access-Control-Allow-Origin','*');
    let  rech={"Matricule":CodeEleve};

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(rech);
    //http://localhost:8082/resultatbac/api/rs/test.php
   // return this._http.post('api/rs/test.php', body,{headers})
   //http://localhost:8082/resultatbac/api/rs/test.php
     // return this._http.post('api/rs/test.php', body,{headers})
     return this._http.post('api/rs/test.php', body,{headers})  
     .map((res: Response) => res.json());

     }

   // Fonction resultat Bac Permanent et Extra
   public getResulatatExtra(CodeEleve,Code_Session):Observable<any>{
    var headers = new Headers();
   //var resultat:any;    
headers.append('Content-Type', 'application/json; charset=utf-8');
//  headers.append('Access-Control-Allow-Origin','*');
let  rech={"Matricule":CodeEleve,"Code_Session":Code_Session};

// let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
let body = JSON.stringify(rech);
//http://localhost:8082/resultatbac/api/rs/test.php
// return this._http.post('api/rs/test.php', body,{headers})
//http://localhost:8082/resultatbac/api/rs/testextra.php
//  return this._http.post('api/rs/testextra.php', body,{headers})
return this._http.post('api/rs/testextra.php', body,{headers})
// return this._http.post('api/rs/test.php', body,{headers})  
.map((res: Response) => res.json());

}

     // Fonction de verification

     public getnbVerification():Observable<any>{
         var headers = new Headers();
        //var resultat:any;    
    headers.append('Content-Type', 'application/json; charset=utf-8');
  //  headers.append('Access-Control-Allow-Origin','*');
    //let  rech={"Matricule":CodeEleve};

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //let body = JSON.stringify(rech);
   // return this._http.get('api/rs/nbverif.php')
   //http://localhost:8082/resultatbac/
    //  return this._http.get('api/rs/nbverif.php')
    // http://localhost:8082/resultatbac/api/rs/nbverif.php
      return this._http.get(' api/rs/nbverif.php')
                  .map((res: Response) => res.json());

     }

}




