import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  comuna:string = "Lo espejo";
  edad: number = 30;
  nombre: string = "Julian";
  arregloPersona: any = [
    {
      nombre: 'Manuel',
      apellido: 'Muñoz',
      edad: 24
    },
    {
      nombre: 'Marta',
      apellido: 'Rodriguez',
      edad: 20
    },
    {
      nombre: 'Nazario',
      apellido: 'Ronaldo',
      edad: 50
    }  ];

  datosP: any = {
    id: 1,
    dato: 'Programación'
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }
  irPagina(){
    //CREAR VARIABLE DE CONTEXTO
    let navigationextras: NavigationExtras = {
      state: {
        com : this.comuna,
        ed : this.edad,
        nom : this.nombre
      }
    }
    //crear el codigo que quiera de la logica
    this.router.navigate(['/agregar'], navigationextras);

  }

}
