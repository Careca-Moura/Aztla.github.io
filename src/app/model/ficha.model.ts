export interface Ficha {
  ficha: FichaElement[];
}

export interface FichaElement {
  id?: string;
  nome?: string;
  jogador?: string;
  nivel?: number;
  raca?: string;
  arquetipo?: string;
  caminho?: string;
  totem?: string;
  forcaEscolhido?: string;
  agilidadeEscolhido?: string;
  vigorEscolhido?: string;
  astuciaEscolhido?: string;
  sabedoriaEscolhido?: string;
  vontadeEscolhido?: string;
  animismoEscolhido?: string;
  bonusFor?: number;
  bonusAgi?: number;
  bonusVig?: number;
  bonusAst?: number;
  bonusSab?: number;
  bonusVon?: number;
  bonusAni?: number;
}
