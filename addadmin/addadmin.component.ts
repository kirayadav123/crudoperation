import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/Model/Client.model';
import {ClientService} from 'src/app/services/client.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent {
addclientRequest: Client={

  c_Id: 0,
  c_Name: '',
  application_Name: '',
  serverinfo: '',
  portinfo: '',
};
constructor(private clientServices:ClientService,private router: Router) {

  //console.warn("user loaded") through this we can check is it lazy loading


}
ngOnInit(): void {}
 //this is a method which is inside html.component
 AddGuestAsync()
 {
  alert('New Client Added successfully');

  this.clientServices.AddClientAsync(this.addclientRequest).subscribe({
   next:(response)=>{
    this.router.navigate(['guests']);

}
 });

}
}
