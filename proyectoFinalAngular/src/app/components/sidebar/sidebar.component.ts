import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { UsuariosService } from "../../services/usuarios.service";


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  id: number;



  constructor(private usuariosService: UsuariosService, private jwtService: JwtService) {
  }

  ngOnInit(): void {
    const token = this.usuariosService.getToken();
    const claims: any = this.jwtService.decodeToken(token);
    this.id = claims.usuario_id;
  }











}


