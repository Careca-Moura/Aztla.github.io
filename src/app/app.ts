import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Identificador } from './identificador/identificador';
import { AtributosComponent } from './atributos/atributos/atributos.component';
import { AtributosDemais } from './atributos/atributosDemais/atributos-demais/atributos-demais';
import { HttpClient } from '@angular/common/http';
import { FichaElement } from './model/ficha.model';
import { PropagaAtributos } from './Serviços/propaga-atributos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Identificador, AtributosComponent, AtributosDemais],
  providers: [HttpClient],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Aztla - Terra dos Espíritos (RPG)';
  atb!: AtributosComponent;
  id: string = '';
  fixaId(evento: string) {
    this.id = evento;
  }
  fixaAtbPrincipal(atb: AtributosComponent) {
    this.atb = atb;
  }
}
