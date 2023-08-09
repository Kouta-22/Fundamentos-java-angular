import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  nome = "Guilherme";
  dataNascimento = "2000-04-22";
  urlImage = "/assets/imgtext.png";
  
  mostrarDataNascimento (){
    alert(`a data de nascimento do guilherme e: ${this.dataNascimento}`)
  }

}
