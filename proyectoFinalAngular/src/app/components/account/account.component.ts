import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: Usuario;


  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getUserById(3)
      .then(response => {
        this.user = response
      })
      .catch(error => {
        console.log(error)
      })
  }

}
