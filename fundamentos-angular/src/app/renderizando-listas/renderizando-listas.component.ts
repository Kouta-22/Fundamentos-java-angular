import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id:1, nome: "Poco F3", descricao: "Celular da Chines", esgotado: false},
    {id:2, nome: "Samsung", descricao: "Celular da Coreia do Sul", esgotado: false},
    {id:3, nome: "Iphone", descricao: "Celular do EUA", esgotado: true}
  ]
}
