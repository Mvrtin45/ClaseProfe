import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
    //crear el codigo dque quiera de la logica
    this.router.navigate(['/agregar']);

  }

}
