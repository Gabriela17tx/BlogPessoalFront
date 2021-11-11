import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]
  postagem: Postagem = new Postagem()
  idUsuario = environment.id
  usuario: Usuario = new Usuario()

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authh: AuthService
  ) {}


  ngOnInit() {

    if(environment.token == ''){
      alert ('')
      this.router.navigate(['/entrar']);
    }
    this.getAllTemas();
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }
  getTemaById(){
    this.temaService.getTemaById(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }
  publicar(){
    this.tema.idTena = this.idTema = this.idTema
    this.postagem.temaRelacionado = this.tema
  }

}

tema.idTema = this.idTema
    this.postagem.temaRelacionado = this.tema
