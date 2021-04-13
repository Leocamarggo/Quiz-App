import React, { useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogTitle,
	Typography,
	Button,
	DialogActions,
	Link,
	List,
	ListItem
} from '@material-ui/core';
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

	const [open, setOpen] = useState(false);
	const closeDialog = () => {
		setOpen(false);
	};

	return (
		<div className='app'>
			<Dialog aria-labelledby="customized-dialog-title" open={open}>
				<DialogTitle id="customized-dialog-title">
					Bem vindo ao Quizz
				</DialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom>
						Esta aplicação foi desenvolvida com React e MaterialUI.
					</Typography>
					<Typography gutterBottom>
						Neste questionario você encontrará perguntas simples sobre tecnologia em geral.
					</Typography>
					<Typography gutterBottom>
						By: <Link href="https://github.com/Leocamarggo">Leonaro Camargo</Link> 
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button color="primary" onClick={closeDialog}>
						Vamos nessa!
					</Button>
				</DialogActions>
			</Dialog>

			{showPont ? (
				<div>
					Sua pontuação foi de {pont} de {questoes.length}
				</div>
			) : (
				<>
					<div>
						<div>
							<span>Questão {questaoAtual + 1}</span> / {questoes.length}
						</div>
						<div>{questoes[questaoAtual].questao}</div>
					</div>
					<div style={{height: 300, width: 500}}>
						<List>
							{questoes[questaoAtual].opcoesRespostas.map((opcaoResposta) => (
								<ListItem button onClick={() => handleClick(opcaoResposta.correto)}>
									{opcaoResposta.respostas}
								</ListItem>
							))}
						</List>
					</div>
				</>
			)}
		</div>
	);
}
