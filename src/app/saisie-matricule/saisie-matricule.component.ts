import { BacHaitienService } from './../bac-haitien.service';

import { Component,OnInit,ViewContainerRef  } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-saisie-matricule',
  templateUrl: './saisie-matricule.component.html',
  styleUrls: ['./saisie-matricule.component.css']
})
export class SaisieMatriculeComponent implements OnInit {
   public res:any; 
   public notes:any;
   public moncentre:any;

   public resume:any;
   public nbverification:string;
   public affiche:string ="";
   constructor(public toastr: ToastsManager,vcr:ViewContainerRef, private bacHaitienService_:BacHaitienService){
     this.toastr.setRootViewContainerRef(vcr);
  }

  public Affichextra(Matricule,Code_Session){
    this.res =null;
    //this.toastr.success('You are awesome!', 'Success!');
    if(Matricule.length < 10){
          this.toastr.error('Matricule doit avoir 10 digits', 'Oops!');
    } else{
      this.affiche="R";
     this.bacHaitienService_.getResulatatExtra(Matricule,Code_Session).subscribe(
       data =>{ 
        // console.log(data);
         if(data){
           if(data.lenght<0){
              this.toastr.info('ce candidat n\'est pas éligible aux examens d\'extra-Ordinaire 2016/2017', 'Alert!');
            }else if(data.info){
              this.res = data.info[0]; 
              
                          this.notes = data.notes;
                          this.resume = data.resume;
                          this.nbverification = this.resume.nbVerif;
              // console.log(data);
             /// this.res = data.info[0]; 
             // this.moncentre = data.centre[0];
             // console.log(this.moncentre);

       //  this.notes = data.notes;
         //this.resume = data.resume;
         //this.nbverification = data.resume.nbVerif;
         //console.log(data);
         if(!this.res){
           this.toastr.warning('Matricule non.', 'Alert!');
         }
         
       } else{
         this.res =null;
         this.toastr.info("les Infos pour ce Candidat ne sont pas encore dans la Base, Essayez plus tard", 'Alert!');
       }
     }
        },// document.getElementById("nomdom").focus();},
        error => { console.error("Erreur de requette");} 
     );
    }

  }

  public AffichePermanent(Matricule,Code_Session){
    this.res =null;
    //this.toastr.success('You are awesome!', 'Success!');
    if(Matricule.length < 10){
          this.toastr.error('Matricule doit avoir 10 digits', 'Oops!');
    } else{
      this.affiche="R";
     this.bacHaitienService_.getResulatatExtra(Matricule,Code_Session).subscribe(
       data =>{ 
        // console.log(data);
         if(data){
           if(data.lenght<0){
              this.toastr.info('Les données ne sont pas encore disponibles pour ce candidat., Essayez plus tard', 'Alert!');
            }else if(data.info){
              this.res = data.info[0]; 
              
                          this.notes = data.notes;
                          this.resume = data.resume;
                          this.nbverification = this.resume.nbVerif;
              // console.log(data);
             /// this.res = data.info[0]; 
             // this.moncentre = data.centre[0];
             // console.log(this.moncentre);

       //  this.notes = data.notes;
         //this.resume = data.resume;
         //this.nbverification = data.resume.nbVerif;
         //console.log(data);
         if(!this.res){
           this.toastr.warning('Matricule non.', 'Alert!');
         }
         
       } else{
         this.res =null;
         this.toastr.info("Les données ne sont pas encore disponibles pour ce candidat.", 'Alert!');
       }
     }
        },// document.getElementById("nomdom").focus();},
        error => { console.error("Erreur de requette");} 
     );
    }

  }

 public AfficheP(Matricule) {
     this.res =null;
     //this.toastr.info('Cette Fonctionnalité sera disponible ce Vendredi 10 Aout 2018', 'Alert!');
     
       //this.toastr.success('You are awesome!', 'Success!');
       if(Matricule.length < 10){
             this.toastr.error('Matricule doit avoir 10 digits', 'Oops!');
       } else{
         this.affiche="C";
        this.bacHaitienService_.getCentre(Matricule).subscribe(
          data =>{ 
           // console.log(data);
            if(data){
              if(data.lenght<0){
                 this.toastr.info('ce candidat n\'est pas éligible aux examens d\'extra-Ordinaire 2017/2018', 'Alert!');
               }else if(data.info){
                // console.log(data);
                 this.res = data.info[0]; 
                 this.moncentre = data.centre[0];
                // console.log(this.moncentre);

          //  this.notes = data.notes;
            //this.resume = data.resume;
            this.nbverification = data.resume.nbVerif;
            //console.log(data);
            if(!this.moncentre){
              this.toastr.warning('Matricule non.', 'Alert!');
            }
            
          } else{
            this.res =null;
            this.toastr.info("ce candidat n\'est pas éligible aux examens d\'extra-Ordinaire 2017/2018", 'Alert!');
          }
        }
           },// document.getElementById("nomdom").focus();},
           error => { console.error("Erreur de requette");} 
        );
       }


    //this.toastr.info('Bac Permanent n"est pas encore disponible');
  }
 public AfficheB(Matricule) {
    this.toastr.info('Bac Unique n"est pas encore disponible');
  }
    Affiche(Matricule) {
      this.res =null;
        //this.toastr.success('You are awesome!', 'Success!');
       if(Matricule.length < 10){
             this.toastr.error('Matricule doit avoir 10 digits', 'Oops!');
       } else{
         this.affiche="R";
        this.bacHaitienService_.getResulatatEleve(Matricule).subscribe(
          data =>{ 
           // console.log(data);
            if(data){
              if(data.lenght<0){
                 this.toastr.warning('Les données ne sont pas encore disponibles pour ce candidat.', 'Alert!');
               }else if(data.info){
                 this.res = data.info[0]; 

            this.notes = data.notes;
            this.resume = data.resume;
            this.nbverification = this.resume.nbVerif;
            //console.log(data);
            if(!this.res){
              this.toastr.warning('Matricule non.', 'Alert!');
            }
            
          } else{
            this.res =null;
            this.toastr.warning('Les données ne sont pas encore disponibles pour ce candidat.', 'Alert!');
          }
        }
           },// document.getElementById("nomdom").focus();},
           error => { console.error("Erreur de requette");} 
        );
       }
      }
    
      showError() {
        this.toastr.error('This is not good!', 'Oops!');
      }
    
      showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
      }
    
      showInfo() {
        this.toastr.info('Just some information for you.');
      }
      
      showCustom() {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
      }

  ngOnInit() {
    this.bacHaitienService_.getnbVerification().subscribe(
          data =>{ 
            this.nbverification = data[0].nb_verification;
          });
  }

}
