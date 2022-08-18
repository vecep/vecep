export default [
	{
		exam: { year: 2020, stage: 1 },
		question:
			'O café quente é então adicionado na xícara e, passado um tempo, gotículas começam a pingar sobre a bebida, simulando uma chuva doce e reconfortante. A adição de café quente inicia o processo descrito, pois',
		subject: 'Química',
		topics: ['Matéria: propriedades gerais, transformações, estados sólido, líquido e gasoso.'],
		options: [
			{
				text: 'a temperatura do café é suficiente para liquefazer a sacarose do algodão‐doce, fazendo com que este goteje na forma de sacarose líquida.',
				position: 1,
				isCorrect: false,
				image: null
			},
			{
				text: 'o vapor de água que sai do café quente irá condensar na superfície do algodão‐doce, gotejando na forma de água pura.',
				position: 2,
				isCorrect: false,
				image: null
			},
			{
				text: 'a sacarose que evapora do café quente condensa na superfície do algodão‐doce e goteja na forma de uma solução de sacarose em água.',
				position: 3,
				isCorrect: false,
				image: null
			},
			{
				text: 'o vapor de água encontra o algodão‐doce e solubiliza a sacarose, que goteja na forma de uma solução de sacarose em água.',
				position: 4,
				isCorrect: true,
				image: null
			},
			{
				text: 'o vapor de água encontra o algodão‐doce e vaporiza a sacarose, que goteja na forma de uma solução de sacarose em água.',
				position: 5,
				isCorrect: false,
				image: null
			}
		],
		references: [
			{
				text: 'Em Xangai, uma loja especializada em café oferece uma opção diferente para adoçar a bebida. A chamada sweet little rain consiste em uma xícara de café sobre a qual é pendurado um algodão‐doce, material rico em sacarose, o que passa a impressão de existir uma nuvem pairando sobre o café, conforme ilustrado na imagem.',
				author: null,
				source: 'Disponível em https://www.boredpanda.com/',
				image: { description: '', cloudId: 'mock_1' }
			}
		]
	},
	{
		exam: { year: 2020, stage: 1 },
		question:
			'Equipamentos domésticos chamados de vaporizadores para roupa utilizam o vapor de água gerado por um sistema de resistências elétricas a partir de água líquida. Um equipamento com potência nominal de $1.600 W$ foi utilizado para passar roupas por 20 minutos, consumindo $540 mL$ de água. Em relação ao gasto total de energia do equipamento, o gasto de energia utilizado apenas para vaporizar a água, após ela já ter atingido a temperatura de ebulição, equivale a, aproximadamente,$\\newline$Note e adote:$\\newline$Entalpia de vaporização da água a $100 °C = 40 kJ/mol$;$\\newline$Massa molar da água = $18 g/mol$;$\\newline$Densidade da água = $1 g/mL$.',
		subject: 'Química',
		topics: ['Termodinâmica'],
		options: [
			{ text: '0,04%.', position: 1, isCorrect: false, image: null },
			{ text: '0,062%.', position: 2, isCorrect: false, image: null },
			{ text: '4,6%.', position: 3, isCorrect: false, image: null },
			{ text: '40%.', position: 4, isCorrect: false, image: null },
			{ text: '62%.', position: 5, isCorrect: true, image: null }
		],
		references: []
	},
	{
		exam: { year: 2020, stage: 1 },
		question: 'Com base nas informações do texto e em seus conhecimentos, é correto afirmar que',
		subject: 'Química',
		topics: ['Tabela Periódica. Propriedades periódicas.'],
		options: [
			{
				text: 'o $\\ce{Cs}$ é um elemento químico radioativo e, devido a essa característica química, a molécula de $\\ce{NaCs}$ não se formaria sem esse modo inovador $\\ce{(L.2)}$, que estabiliza o decaimento.',
				position: 1,
				isCorrect: false,
				image: null
			},
			{
				text: 'o raio atômico do $\\ce{Na}$ é maior que o do $\\ce{Cs}$, portanto, a sua energia de ionização também é maior. O esbarrão $\\ce{L.3}$ entre os átomos retira um elétron do $\\ce{Na}$, permitindo a ligação.',
				position: 2,
				isCorrect: true,
				image: null
			},
			{
				text: 'o terceiro laser $\\ce{L.8}$ usado no experimento serviu para retirar um nêutron do $\\ce{Cs}$, tornando‐o um cátion e possibilitando a reação com o $\\ce{Na}$.',
				position: 3,
				isCorrect: false,
				image: null
			},
			{
				text: 'na natureza, com esses elementos se esbarrando por acaso $\\ce{(L.10‐11)}$, a tendência seria formar $\\ce{CsNa}$, e não $\\ce{NaCs}$, justificando o caráter inovador do experimento.',
				position: 4,
				isCorrect: false,
				image: null
			},
			{
				text: 'o $\\ce{Cs}$ e o $\\ce{Na}$ não formariam uma molécula espontaneamente $\\ce{(L.11-12)}$, uma vez que ambos têm grande tendência a formarem cátions e ligações iônicas.',
				position: 5,
				isCorrect: true,
				image: null
			}
		],
		references: [
			{
				text: 'Pesquisadores (...) conseguiram controlar reações químicas de um modo inovador. Usaram feixes de laser para promover um esbarrão entre dois átomos e uni‐los, criando uma molécula. Utilizando pinças ópticas (feixes de laser altamente focados capazes de aprisionar objetos microscópicos), os pesquisadores empurraram um átomo do elemento químico césio $\\ce{(Cs)}$ contra um átomo de sódio $\\ce{(Na)}$ até que colidissem. Um terceiro laser foi lançado sobre ambos, fornecendo energia extra para criar a molécula $\\ce{NaCs}$. Na natureza, as moléculas formam‐se a partir da interação de átomos por acaso. Por suas características químicas, césio e sódio jamais originariam uma molécula espontaneamente. (...)',
				author: null,
				source: 'Molécula criada em laboratório. Disponível em http://revistapesquisa.fapesp.br/.',
				image: { description: '', cloudId: 'mock_2' }
			}
		]
	},
	{
		exam: { year: 2020, stage: 1 },
		question:
			'Ao se preparar molho de tomate (considere apenas a fervura de tomate batido com água e azeite), é possível observar que a fração aquosa (fase inferior) fica vermelha logo no início e a fração oleosa (fase superior), inicialmente com a cor característica do azeite, começa a ficar avermelhada conforme o preparo do molho. Por outro lado, ao se preparar uma sopa de beterraba (considere apenas a fervura de beterraba batida com água e azeite), a fração aquosa (fase inferior) fica com a cor rosada e a fração oleosa (fase superior) permanece com sua coloração típica durante todo o processo, não tendo sua cor alterada.$\\newline$Considerando as informações apresentadas no texto e no quadro, a principal razão para a diferença de coloração descrita é que a fração oleosa',
		subject: 'Química',
		topics: ['Geometria molecular. Polaridade. Forças intermoleculares. '],
		options: [
			{
				text: 'fica mais quente do que a aquosa, degradando a betanina; o mesmo não é observado com o licopeno, devido à sua cadeia carbônica longa.',
				position: 1,
				isCorrect: false,
				image: null
			},
			{
				text: 'está mais exposta ao ar, que oxida a betanina; o mesmo não é observado com o licopeno, devido à grande quantidade de duplas ligações.',
				position: 2,
				isCorrect: false,
				image: null
			},
			{
				text: 'é apolar e a betanina, polar, havendo pouca interação; o mesmo não é observado com o licopeno, que é apolar e irá interagir com o azeite.',
				position: 3,
				isCorrect: true,
				image: null
			},
			{
				text: 'é apolar e a aquosa, polar, mantendo‐se separadas; o licopeno age como um surfactante misturando as fases, colorindo a oleosa, enquanto a betanina não.',
				position: 4,
				isCorrect: false,
				image: null
			},
			{
				text: 'tem alta viscosidade, facilitando a difusão do licopeno, composto de menor massa molar; o mesmo não é observado para a betanina, com maior massa.',
				position: 5,
				isCorrect: false,
				image: null
			}
		],
		references: [
			{ text: '', author: null, source: null, image: { description: '', cloudId: 'mock_3' } }
		]
	},
	{
		exam: { year: 2020, stage: 1 },
		question:
			'Numa determinada condição experimental e com o catalisador adequado, ocorre uma reação, conforme representada no gráfico, que relaciona porcentagem do composto pelo tempo de reação.$\\newline$Uma representação adequada para esse processo é:',
		subject: 'Química',
		topics: ['Cinética química'],
		options: [
			{
				text: '$\\ce{limoneno\\rightleftharpoons p‐cimeno -> \\alpha‐terpineno}$',
				position: 1,
				isCorrect: false,
				image: null
			},
			{
				text: '$\\ce{limoneno ->[{p-cimeno (catalisador)}] \\alpha‐terpineno}$',
				position: 2,
				isCorrect: false,
				image: null
			},
			{
				text: '$\\ce{limoneno + p‐cimeno\\rightleftharpoons \\alpha‐terpineno}$',
				position: 3,
				isCorrect: false,
				image: null
			},
			{
				text: '$\\ce{limoneno ->[{\\alpha‐terpineno (catalisador)}] p-cimeno}$',
				position: 4,
				isCorrect: false,
				image: null
			},
			{
				text: '$\\ce{limoneno -> \\alpha‐terpineno -> p‐cimeno}$',
				position: 5,
				isCorrect: true,
				image: null
			}
		],
		references: [
			{ text: '', author: null, source: null, image: { description: '', cloudId: 'mock_4' } }
		]
	},
	{
		exam: { year: 2020, stage: 1 },
		question:
			'Os chamados “remédios homeopáticos” são produzidos seguindo a farmacotécnica homeopática, que se baseia em diluições sequenciais de determinados compostos naturais. A dosagem utilizada desses produtos é da ordem de poucos $mL$. Uma das técnicas de diluição homeopática é chamada de diluição centesimal $\\ce{(CH)}$, ou seja, uma parte da solução é diluída em 99 partes de solvente e a solução resultante é homogeneizada (ver esquema).$\newline$Alguns desses produtos homeopáticos são produzidos com até 200 diluições centesimais sequenciais $\\ce{(200CH)}$.$\\newline$Considerando uma solução de partida de $\\ce{100 mL}$ com concentração $\\ce{1 mol/L}$ de princípio ativo, a partir de qual diluição centesimal a solução passa a não ter, em média, nem mesmo uma molécula do princípio ativo?',
		subject: 'Química',
		topics: ['Concentração de soluções. Diluição e mistura de soluções. Titulação.'],
		options: [
			{ text: '12ª diluição $(12CH)$.', position: 1, isCorrect: true, image: null },
			{ text: '24ª diluição $(24CH)$.', position: 2, isCorrect: false, image: null },
			{ text: '51ª diluição $(51CH)$.', position: 3, isCorrect: false, image: null },
			{ text: '99ª diluição $(99CH)$.', position: 4, isCorrect: false, image: null },
			{ text: '200ª diluição $(200CH)$.', position: 5, isCorrect: false, image: null }
		],
		references: [
			{ text: '', author: null, source: null, image: { description: '', cloudId: 'mock_5' } }
		]
	},
	{
		exam: { year: 2020, stage: 1 },
		question:
			'O gás hélio disponível comercialmente pode ser gerado pelo decaimento radioativo, sobretudo do urânio, conforme esquematizado pela série de decaimento. Desde a formação da Terra, há 4,5 bilhões de anos, apenas metade do $\\ce{238U}$ decaiu para a formação de $\\ce{He}$.$\\newline$Com base nessas informações e em seus conhecimentos, é correto afirmar:',
		subject: 'Química',
		topics: ['Radioatividade e química nuclear'],
		options: [
			{
				text: 'O decaimento de um átomo de $238U$ produz, ao final da série de decaimento, apenas um átomo de $He$.',
				position: 1,
				isCorrect: false,
				image: null
			},
			{
				text: 'O decaimento do $238U$ para $234U$ gera a mesma quantidade de $He$ que o decaimento do $234U$ para $230Th$.',
				position: 2,
				isCorrect: true,
				image: null
			},
			{
				text: 'Daqui a 4,5 bilhões de anos, a quantidade de $He$ no planeta Terra será o dobro da atual.',
				position: 3,
				isCorrect: false,
				image: null
			},
			{
				text: 'O decaimento do $238U$ para $234U$ gera a mesma quantidade de $He$ que o decaimento do $214Pb$ para $214Po$.',
				position: 4,
				isCorrect: false,
				image: null
			},
			{
				text: 'A produção de $He$ ocorre pela sequência de decaimento a partir do $206Pb$.',
				position: 5,
				isCorrect: false,
				image: null
			}
		],
		references: [
			{ text: '', author: null, source: null, image: { description: '', cloudId: 'mock_6' } }
		]
	},
	{
		exam: { year: 2020, stage: 1 },
		question:
			'Os movimentos das moléculas antes e depois de uma reação química obedecem aos princípios físicos de colisões. Para tanto, cada átomo é representado como um corpo pontual com uma certa massa, ocupando uma posição no espaço e com uma determinada velocidade (representada na forma vetorial). Costumeiramente, os corpos pontuais são representados como esferas com diâmetros proporcionais à massa atômica. As colisões ocorrem conservando a quantidade de movimento.$\\newline$Considerando um referencial no qual as moléculas neutras encontram‐se paradas antes e após a colisão, a alternativa que melhor representa o arranjo de íons e moléculas instantes antes e instantes depois de uma colisão que leva à reação $\\newline \\ce{F- + H3CCl -> CH3F + Cl-} \\newline$(Sendo o lado esquerdo antes da colisão íon-neutron e o direito após a colisão neutron-íon)',
		subject: 'Química',
		topics: ['Cinética química'],
		options: [
			{
				text: null,
				position: 1,
				isCorrect: false,
				image: { description: '', cloudId: 'opt_mock_1' }
			},
			{
				text: null,
				position: 2,
				isCorrect: false,
				image: { description: '', cloudId: 'opt_mock_2' }
			},
			{
				text: null,
				position: 3,
				isCorrect: true,
				image: { description: '', cloudId: 'opt_mock_3' }
			},
			{
				text: null,
				position: 4,
				isCorrect: false,
				image: { description: '', cloudId: 'opt_mock_4' }
			},
			{
				text: null,
				position: 5,
				isCorrect: false,
				image: { description: '', cloudId: 'opt_mock_5' }
			}
		],
		references: []
	},
	{
		exam: { year: 2020, stage: 1 },
		question:
			'Quando o nosso corpo é lesionado por uma pancada, logo se cria um hematoma que, ao longo do tempo, muda de cor. Inicialmente, o hematoma torna‐se avermelhado pelo acúmulo de hemoglobina. Em seguida, surge uma coloração azulada, decorrente da perda do $\\ce{O2}$ ligado ao $\\ce{Fe}$ do grupo heme. Essa coloração torna‐se, então, esverdeada (biliverdina) e, após isso, surge um tom amarelado na pele (bilirrubina). Essa sequência de cores ocorre pela transformação do grupo heme da hemoglobina, como representado a seguir:$\\newline$Com base nas informações e nas representações, é correto afirmar:',
		subject: 'Química',
		topics: ['Reações orgânicas'],
		options: [
			{
				text: 'A conversão da biliverdina em bilirrubina ocorre por meio de uma redução.',
				position: 1,
				isCorrect: true,
				image: null
			},
			{
				text: 'A biliverdina, assim como a hemoglobina, é capaz de transportar $O2$ para as células do corpo, pois há oxigênio ligado na molécula.',
				position: 2,
				isCorrect: false,
				image: null
			},
			{
				text: 'As três estruturas apresentadas contêm o grupo funcional amida.',
				position: 3,
				isCorrect: false,
				image: null
			},
			{
				text: 'A degradação do grupo heme para a formação da biliverdina produz duas cetonas.',
				position: 4,
				isCorrect: false,
				image: null
			},
			{
				text: 'O grupo heme, a biliverdina e a bilirrubina são isômeros.',
				position: 5,
				isCorrect: false,
				image: null
			}
		],
		references: [
			{ text: '', author: null, source: null, image: { description: '', cloudId: 'mock_6' } }
		]
	},
	{
		exam: { year: 2020, stage: 1 },
		question:
			'Em supermercados, é comum encontrar alimentos chamados de liofilizados, como frutas, legumes e carnes. Alimentos liofilizados continuam próprios para consumo após muito tempo, mesmo sem refrigeração. O termo “liofilizado”, nesses alimentos, refere‐se ao processo de congelamento e posterior desidratação por sublimação da água. Para que a sublimação da água ocorra, é necessária uma combinação de condições, como mostra o gráfico de pressão por temperatura, em que as linhas representam transições de fases.$\\newline$Apesar de ser um processo que requer, industrialmente, uso de certa tecnologia, existem evidências de que os povos pré-colombianos que viviam nas regiões mais altas dos Andes conseguiam liofilizar alimentos, possibilitando estocá‐los por mais tempo. Assinale a alternativa que explica como ocorria o processo de liofilização natural:',
		subject: 'Química',
		topics: ['Matéria: propriedades gerais, transformações, estados sólido, líquido e gasoso.'],
		options: [
			{
				text: 'A sublimação da água ocorria devido às baixas temperaturas e à alta pressão atmosférica nas montanhas.',
				position: 1,
				isCorrect: false,
				image: null
			},
			{
				text: 'Os alimentos, após congelados naturalmente nos períodos frios, eram levados para a parte mais baixa das montanhas, onde a pressão atmosférica era menor, o que possibilitava a sublimação.',
				position: 2,
				isCorrect: false,
				image: null
			},
			{
				text: 'Os alimentos eram expostos ao sol para aumentar a temperatura, e a baixa pressão atmosférica local favorecia a solidificação.',
				position: 3,
				isCorrect: false,
				image: null
			},
			{
				text: 'As temperaturas eram baixas o suficiente nos períodos frios para congelar os alimentos, e a baixa pressão atmosférica nas altas montanhas possibilitava a sublimação.',
				position: 4,
				isCorrect: true,
				image: null
			},
			{
				text: 'Os alimentos, após congelados naturalmente, eram prensados para aumentar a pressão, de forma que a sublimação ocorresse.',
				position: 5,
				isCorrect: false,
				image: null
			}
		],
		references: [
			{ text: '', author: null, source: null, image: { description: '', cloudId: 'mock_7' } }
		]
	},
	{
		exam: { year: 2020, stage: 1 },
		question:
			'Para exemplificar probabilidade, um grupo de estudantes fez uma atividade envolvendo química, conforme o procedimento descrito.$\\newline$Cada estudante recebeu um recipiente contendo $800 mL$ de água destilada com algumas gotas do indicador de $pH$ alaranjado de metila e soluções de $\\ce{HCl}$ e $\\ce{NaOH}$ em diversas concentrações.$\\newline$Cada estudante deveria jogar apenas uma vez dois dados, um amarelo e um vermelho, ambos contendo os números de 1 a 6.$\\newline$• Ao jogar o dado vermelho, o estudante deveria adicionar ao recipiente $100 mL$ de solução do ácido clorídrico na concentração $\\ce{10 −n mol/L}$, sendo $n$ o número marcado no dado (por exemplo, se saísse o número 1 no dado, a solução seria de $\\ce{10 −1 mol/L}$; se saísse 6, a solução seria de $\\ce{10 −6 mol/L}$).$\\newline$• Ao jogar o dado amarelo, o estudante deveria executar o mesmo procedimento, mas substituindo o ácido por $\\ce{NaOH}$, totalizando assim $1,0 L$ de solução.$\\newline$• O estudante deveria observar a cor da solução ao final do experimento.$\\newline$A professora mostrou a tabela com alguns valores de $pH$ resultantes conforme os números tirados nos dados. Ela pediu, então, aos estudantes que utilizassem seus conhecimentos e a tabela para prever em quais combinações de dados a cor final do indicador seria vermelha.$\\newline$A probabilidade de, após realizar o procedimento descrito, a solução final preparada por um estudante ser vermelha é de:',
		subject: 'Química',
		topics: ['Funções Inorgânicas (ácidos, bases, sais, óxidos).'],
		options: [
			{ text: '$\\frac{1}{12}$', position: 1, isCorrect: false, image: null },
			{ text: '$\\frac{1}{6}$', position: 2, isCorrect: false, image: null },
			{ text: '$\\frac{1}{4}$', position: 3, isCorrect: true, image: null },
			{ text: '$\\frac{11}{36}$', position: 4, isCorrect: false, image: null },
			{ text: '$\\frac{5}{12}$', position: 5, isCorrect: false, image: null }
		],
		references: [
			{ text: '', author: null, source: null, image: { description: '', cloudId: 'mock_8' } }
		]
	}
];
