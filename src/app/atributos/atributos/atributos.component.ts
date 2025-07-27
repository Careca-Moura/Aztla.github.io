import { FormsModule, NgSelectOption } from '@angular/forms';
import { Component, NgModule, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ForcaRank } from '../../enums/forcaRank.enum';
import { CommonModule } from '@angular/common';
import { AgilidadeRank } from '../../enums/AgilidadeRank.enum';
import { VigorRank } from '../../enums/VigorRank.enum';
import { AstuciaRank } from '../../enums/AstuciaRank.enum';
import { SabedoriaRank } from '../../enums/SabedoriaRank.enum';
import { VontadeRank } from '../../enums/VontadeRank.enum';
import { AnimismoRank } from '../../enums/AnimismoRank.enum';
import { PropagaAtributos } from '../../Serviços/propaga-atributos';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.scss'],
  providers: [NgModule, NgSelectOption, FormsModule],
  imports:[FormsModule, CommonModule ]
})
export class AtributosComponent implements OnChanges {
@Output() comunicaAtb = new EventEmitter<AtributosComponent>
  forcaEscolhido: string = ForcaRank.normal;
  agilidadeEscolhido: string = AgilidadeRank.normal;
  vigorEscolhido: string = VigorRank.normal;
  astuciaEscolhido: string = AstuciaRank.normal;
  sabedoriaEscolhido: string = SabedoriaRank.normal;
  vontadeEscolhido: string = VontadeRank.normal;
  animismoEscolhido: string = AnimismoRank.normal;
 @Input() idGeral: string='';

constructor( private propaga: PropagaAtributos){

}

  capturaBonus(atb: string|any): number{
    const bonus: number = parseInt(atb.match(/-?\+?\d/));

    return bonus;
  }

  capturaLista(atb:string): any[string]{
    switch(atb){
      case'forca':return  Object.values(ForcaRank);
      case'agilidade':return  Object.values(AgilidadeRank);
      case'vigor':return  Object.values(VigorRank);
      case'astucia':return  Object.values(AstuciaRank);
      case'sabedoria':return  Object.values(SabedoriaRank);
      case'vontade':return  Object.values(VontadeRank);
      case'animismo':return  Object.values(AnimismoRank);
    }


  }
  gravarAtributos():void{
    const atb = new AtributosComponent(this.propaga);
    atb.idGeral = this.idGeral;
    atb.agilidadeEscolhido = this.agilidadeEscolhido;
    atb.animismoEscolhido = this.animismoEscolhido;
    atb.astuciaEscolhido = this.astuciaEscolhido;
    atb.forcaEscolhido = this.forcaEscolhido;
    atb.vigorEscolhido = this.vigorEscolhido;
    atb.vontadeEscolhido = this.vontadeEscolhido;
    atb.sabedoriaEscolhido = this.sabedoriaEscolhido;
    this.propaga.atualizaByid(atb).subscribe(
      (response)=> {console.log(response); this.comunicaAtb.emit(atb)},
      (error)=> {console.error("deu ruim: ", error)}
    )



  }
  ngOnChanges() {

  }

}
