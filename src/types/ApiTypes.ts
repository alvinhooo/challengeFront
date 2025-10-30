
export interface Integrante {
  id: number | string;
  nome: string;
  rm?: string;
  turma?: string;
  papel?: string;
  foto?: string;
}

export interface ContatoPayload {
  nome: string;
  email: string;
  mensagem: string;
}


export type Id = number | string;
export type Maybe<T> = T | null | undefined;

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
