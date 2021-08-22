import React from 'react';
import './estilo.css';
import { useState } from 'react';

export default function PaginaInicial() {
  const [ numeroAleatorio, setNumeroAleatorio ] = useState(1);

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (100-1) + 1);
    setNumeroAleatorio(novoNumero);
  }

  return(
    <div className="conteudo-centralizado">
        <h3>Número aleatório:</h3>
        <h1>{ numeroAleatorio }</h1>
        
        <div className='area-botao'>
          <label>
            Click no botão abaixo para gerar um número aleatório:
          </label>
          
          <button onClick={ gerarNumero }>
            Gerar número
          </button>
        </div>
      </div>
  );
}


//const [NOME_DA_VARIAVEL_DE_ESTADO, FUNCAO_PARA_USO_INTERNO] =
//useState(VALOR_INICIAL_DA_VARIAVEL);

/**
 * NOME_DA_VARIAVEL_DE_ESTADO = é a variável que queremos manter o estado e acompanhar a sua mudança de valor.
FUNCAO_PARA_USO_INTERNO = aqui apenas indicamos um nome de uma função. O React utilizará esse nome de função internamente para acompanhar a mudança de estado da variável. Não precisamos implementar essa função, apenas definir seu nome.
useState(VALOR_INICIAL_DA_VARIAVEL) = no nosso exemplo iniciamos a variável com o valor 1 (mas poderia ser qualquer valor).
 * 
 * 
 */
