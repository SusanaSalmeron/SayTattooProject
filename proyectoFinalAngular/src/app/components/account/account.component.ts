import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: Usuario;
  id: number;


  constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    })
    this.accountService.getUserById(this.id)
      .then(response => {
        this.user = response
      })
      .catch(error => {
        console.log(error)
      })
  }

}
