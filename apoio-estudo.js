(function(){
 const examples={
  english:{
   steps:['Lê a instrução antes do texto. Procura pistas como “using May”, “in words” ou “give the name”.',
    'Volta à frase que tem a informação. Confirma qual é a pessoa, o objeto ou a ação certa.',
    'Lê a tua resposta. Se pedem um número por extenso, escreve letras. Se pedem uma frase, confirma o verbo e a palavra pedida.'],
   early:[
    ['Aviso de treino: “The red folder stays here. Take the green folder to Room 13.” Que pasta levas? Escreve o número da sala por extenso em inglês.',
     'The green folder. Room thirteen. “Stays here” diz que a pasta vermelha fica onde está.'],
    ['Queres pedir uma borracha emprestada. Escreve a pergunta começando com “May”.',
     'May I borrow a rubber, please? Verifica se usaste May e se pediste o objeto certo.'],
    ['O aviso diz: “The pencil belongs to Eva. The ruler belongs to Leo. Open the folder on page 18.” Escreve de quem é a régua e a página em inglês por extenso.',
     'The ruler belongs to Leo. Page eighteen. Ruler significa régua; rule significa regra.']
   ]
  },
  science:{
   steps:['Separa o que viste do que isso mostra. Escreve “Observei…” e depois “Isto mostra que…”.',
    'Se pedem uma comparação, dá os dois valores com a unidade. Se pedem uma explicação, diz como a causa produz o efeito.',
    'Conta os pedidos do enunciado. Verifica se escreveste cada nome, dado e razão que foram pedidos.'],
   early:[
    ['Junto a um lago, a luz passa de 70 unidades perto da superfície para 25 unidades junto ao fundo. Escreve o que muda e junta os dois dados.',
     'Há menos luz junto ao fundo: 25 unidades, contra 70 perto da superfície. Os números sustentam a conclusão.'],
    ['No solo há pedrinhas e um pedaço de raiz morta. Ao juntar água aparecem bolhas. Separa os dois materiais por tipo. Depois diz o que as bolhas mostram.',
     'As pedrinhas são material mineral; a raiz morta é matéria orgânica. As bolhas mostram que havia ar no solo.'],
    ['Dois recipientes iguais recebem 100 mL de água e têm a mesma quantidade de solo. Após um minuto, passaram 75 mL pelo solo A e 25 mL pelo B. Qual deixou passar mais água? Usa os dois dados.',
     'O solo A deixou passar mais água no mesmo tempo: 75 mL, enquanto no B passaram 25 mL. Neste teste, A mostrou maior permeabilidade.']
   ]
  },
  history:{
   steps:['Vê o primeiro verbo. Identifica: dá o nome. Transcreve: copia a frase completa. Explica: escreve a ideia por palavras tuas.',
    'Separa onde, quando e o que aconteceu. Usa o mapa para o lugar, a linha do tempo para a data e o texto para o que está escrito.',
    'Volta a cada parte da pergunta. Se pedem data e acontecimento, verifica que escreveste os dois.'],
   early:[
    ['Tens uma chave antiga e um mapa. Qual mostra o local de uma casa? O que a chave pode sugerir?',
     'O mapa pode mostrar o local. A chave é uma fonte material e pode sugerir que havia uma fechadura.'],
    ['Fonte: «Na primavera, os moradores colhem maçãs junto da ponte.» Identifica o fruto. Depois transcreve a frase toda.',
     'Fruto: maçãs. Transcrição: «Na primavera, os moradores colhem maçãs junto da ponte.» Mantém também «Na primavera».'],
    ['A Itália fica numa península no sul da Europa. Escreve o continente e a posição da península dentro do continente, em duas partes.',
     'Continente: Europa. Posição: sul da Europa. Quando pedem a posição, usa um ponto de orientação, como sul.']
   ]
  }
 };
 const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 window.studyGuide=function(subject,day,exam=false){
  const data=examples[subject];
  const [prompt,model]=data.early[day-1]??[];
  return '<aside class="study-guide" aria-label="Como responder"><h3>Antes do teste · '+(exam?'revê os passos':'treina como responder')+'</h3>'+
   '<ol>'+data.steps.map(step=>'<li>'+escape(step)+'</li>').join('')+'</ol>'+
   (exam||!prompt?'':'<details><summary>Experimenta com um exemplo de treino</summary><p>'+escape(prompt)+'</p><details><summary>Ver como se resolve</summary><p>'+escape(model)+'</p></details></details>')+
   '<p><strong>Antes de entregar:</strong> volta ao enunciado e confirma que respondeste a todas as partes.</p></aside>';
 };
})();
