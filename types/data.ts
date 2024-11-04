interface RefeicoesProps {
  horario: string;
  name: string;
  alimentos: string[];
}

export interface Data {
  nome: string;
  sexo: string;
  idade: number;
  altura: number;
  peso: number;
  objetivo: number;
  refeicoes: RefeicoesProps[];
  suplementos: string[];
}
