import { PropagaAtributos } from './../../../Serviços/propaga-atributos';
import { Component, Input, NgModule, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { AtributosComponent } from '../../atributos/atributos.component';

@Component({
  selector: 'app-atributos-demais',
  imports: [CommonModule, FormsModule],
  providers: [NgModule, NgModel],
  templateUrl: './atributos-demais.html',
  styleUrl: './atributos-demais.scss',
})
export class AtributosDemais implements OnInit, OnChanges {
  @Input() idGeral: string = '';
  @Input() atbPrincipal!: AtributosComponent;
  constructor(private propagador: PropagaAtributos) {}
  saudeBase: number = 2;
  saudeTotal: number = 2;
  leveAtual: number = 2;
  moderadoAtual: number = 2;
  severoAtual: number = 2;
  mortalAtual: number = 2;

  atualizaSaude() {
    let valorAtual: number= 0;
    this.propagador.recuperaDadosById(this.idGeral).subscribe((dado) => {
      valorAtual = dado.bonusVig as number;console.log(dado.bonusVig);
    });
    if (valorAtual ==0 && valorAtual<-1) {
      this.saudeTotal = this.saudeBase;
    } else {
      this.saudeTotal = this.saudeBase + valorAtual; console.log(this.severoAtual);
    }
  }

  ngOnInit() {
    this.atualizaSaude();
  }
  ngOnChanges(changes: SimpleChanges) {

   if(changes['atbPrincipal']) {this.atualizaSaude(); console.log(changes['atbPrincipal'].currentValue)}
  }
}
