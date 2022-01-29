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
import 'bootstrap/dist/css/bootstrap.min.css';

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

	const [open, setOpen] = useState(true);
	const closeDialog = () => {
		setOpen(false);
	};

	const ResultQuestions = (point, question) =>{
		if(point >= 3){
			return(
				<>
					<Dialog aria-labelledby="customized-dialog-title" open={true}>
						<DialogTitle id="customized-dialog-title">
							Parabénss 🎉🎉
						</DialogTitle>
						<DialogContent dividers>
							<Typography gutterBottom>
								Sua pontuação foi de {point} de {question.length}
							</Typography>
						</DialogContent>
					</Dialog>
				</>
			)
		}else{
			return(
				<>
					<Dialog aria-labelledby="customized-dialog-title" open={true}>
						<DialogTitle id="customized-dialog-title">
							Da pra melhorar em!? 😱
						</DialogTitle>
						<DialogContent dividers>
							<Typography>
								Sua pontuação foi de {point} de {question.length}
							</Typography>
						</DialogContent>
						<DialogActions>
							<Button className='bg-success text-white py-3' fullWidth onClick={()=>{window.location.reload()}}>
								Tentar novamente
							</Button>
						</DialogActions>
					</Dialog>
				</>
			)
		}

	}
	return (
		<div className='app'>
			<Dialog aria-labelledby="customized-dialog-title" open={open}>
				<DialogTitle id="customized-dialog-title">
					Bem vindo ao Quizz
				</DialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom>
						Esta simples aplicação foi desenvolvida utilizando: React, MaterialUI e React-Bootstrap.
					</Typography>
					<Typography gutterBottom>
						Neste breve questionario você encontrará algumas perguntas sobre o mundo de tecnologia.
					</Typography>

				</DialogContent>
				<DialogActions style={{padding: 16, justifyContent: 'space-between'}}>
					<Typography gutterBottom>
						By: <Link href="https://github.com/Leocamarggo">Leonardo Camargo</Link> 
					</Typography>
					<Button className='bg-success text-white py-3 px-5' onClick={closeDialog}>
						Vamos nessa!
					</Button>
				</DialogActions>
			</Dialog>

			{showPont ? (
				<div>
					{ResultQuestions(pont, questoes)}
				</div>
			) : (
				<>
					<div className='container d-flex justify-content-center align-items-center vh-100'>
						<div style={{width: 400}} class="card text-center border-success">
							<div class="card-header bg-success p-3">
								<h5 className='text-white m-0'>
									<span>Questão {questaoAtual + 1}</span> / {questoes.length}
								</h5>
							</div>
							<div class="card-body">
								<div className='mt-1'>
									<h5 class="card-title">
										{questoes[questaoAtual].questao}
									</h5>
								</div>
								<div className='mt-3' style={{height: 200}}>
									<List className='card-text bg-success text-white rounded'>
										{questoes[questaoAtual].opcoesRespostas.map((opcaoResposta) => (
											<ListItem button onClick={() => handleClick(opcaoResposta.correto)}>
												<h6>{opcaoResposta.respostas}</h6>
											</ListItem>
										))}
									</List>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
