import React, { useState } from 'react';
import {questoes} from './components/questoes.js';

export default function App() {

	const [questaoAtual, setQuestaoAtual] = useState(0);
	const [showPont, setShowPont] = useState(false);
	const [pont, setPont] = useState(0);

	const handleClick = (correto) => {
		if (correto) {
			setPont(pont + 1);
		}

		const proxQuestao = questaoAtual + 1;
		if (proxQuestao < questoes.length) {
			setQuestaoAtual(proxQuestao);
		} else {
			setShowPont(true);
		}
	};

	return (
		<div className='app'>
			{showPont ? (
				<div>
					Sua pontuação foi de {pont} de {questoes.length}
				</div>
			) : (
				<>
					<div>
						<div>
							<span>Questão {questaoAtual + 1}</span>/{questoes.length}
						</div>
						<div>{questoes[questaoAtual].questao}</div>
					</div>
					<div>
						{questoes[questaoAtual].opcoesRespostas.map((opcaoResposta) => (
							<button onClick={() => handleClick(opcaoResposta.correto)}>{opcaoResposta.respostas}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
