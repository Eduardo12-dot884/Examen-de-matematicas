'use strict';

const STORAGE_KEY = 'matelab_matematicas_adaptativo_v1';
const LEVEL_NAMES = { 1: 'Básico', 2: 'Intermedio', 3: 'Avanzado', 4: 'Dominio' };
const TYPE_LABELS = {
  concepto: 'Concepto', identificacion: 'Identificación', calculo: 'Cálculo', dato: 'Dato',
  aplicacion: 'Aplicación', verdadero_falso: 'Verdadero o falso', procedimiento: 'Procedimiento'
};

const topics = [
  {
    id: 'naturales', unitId: 'u1', unit: 'Unidad 1: Conteo', unitShort: 'Unidad 1',
    title: 'Concepto de número y números naturales', section: '2.2', icon: 'N',
    ref: 'PDF pp. 3–9',
    summary: 'Un número representa una cantidad, una posición o una medida. Los números naturales surgieron de la necesidad de contar objetos, animales, personas y recursos.',
    notes: [
      { title: 'Idea principal', items: ['Los números permiten representar cantidades, ordenar elementos y realizar cálculos.', 'El conjunto de números naturales se representa con la letra N.', 'En este curso se incluye el cero: N = {0, 1, 2, 3, 4, …}.'] },
      { title: 'Características', items: ['Son infinitos: siempre se puede obtener uno mayor sumando una unidad.', 'Se utilizan para contar y ordenar elementos.', 'No incluyen números negativos ni números decimales.', 'Sirven como base para construir otros conjuntos numéricos.'] },
      { title: 'Ejemplo resuelto', items: ['En una clínica atendieron 32 pacientes el lunes, 28 el martes y 35 el miércoles.', '32 + 28 = 60; después, 60 + 35 = 95.', 'En los tres días atendieron 95 pacientes.'] },
      { title: 'Repaso rápido', items: ['N representa los números naturales.', 'Para este curso, el 0 cuenta como natural.', 'Los negativos y los decimales no son naturales.'] }
    ]
  },
  {
    id: 'indoarabigo', unitId: 'u1', unit: 'Unidad 1: Conteo', unitShort: 'Unidad 1',
    title: 'Leonardo de Pisa y el sistema indoarábigo', section: '2.3', icon: '0',
    ref: 'PDF pp. 4–7 y 9',
    summary: 'El sistema indoarábigo usa diez dígitos y se basa en el sistema decimal y en el valor posicional de cada cifra.',
    notes: [
      { title: 'Conceptos clave', items: ['Leonardo de Pisa, conocido como Fibonacci, fue un matemático italiano nacido alrededor de 1170.', 'Difundió en Europa este sistema mediante la obra Liber Abaci, publicada en 1202.', 'Los dígitos del sistema son 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9.'] },
      { title: 'Dos características', items: ['Sistema decimal: se basa en agrupaciones de diez unidades.', 'Sistema posicional: el valor de una cifra depende del lugar que ocupa.', 'El cero representa ausencia de cantidad y ayuda a escribir números y realizar operaciones.'] },
      { title: 'Ejemplo de valor posicional', items: ['En 4 583, el 4 vale 4 000; el 5 vale 500; el 8 vale 80 y el 3 vale 3.', '4 583 = 4 000 + 500 + 80 + 3.'] },
      { title: 'Repaso rápido', items: ['Diez símbolos básicos.', 'Decimal = agrupaciones de diez.', 'Posicional = el valor depende del lugar.', 'Liber Abaci: 1202.'] }
    ]
  },
  {
    id: 'abaco', unitId: 'u2', unit: 'Unidad 2: Conteo', unitShort: 'Unidad 2',
    title: 'El ábaco', section: '2.4', icon: '▤',
    ref: 'PDF pp. 51–57',
    summary: 'El ábaco es una herramienta de cálculo formada por cuentas que se desplazan sobre varillas. Cada varilla representa un valor posicional.',
    notes: [
      { title: 'Qué es y para qué sirve', items: ['Es uno de los instrumentos de cálculo más antiguos y se ha usado en distintas culturas.', 'Permite representar números y trabajar operaciones como suma y resta.', 'Ayuda a visualizar el valor posicional y la relación entre unidades, decenas y centenas.'] },
      { title: 'Tipos descritos en el PDF', items: ['Chino (Suanpan): dos niveles; las cuentas inferiores valen 1 y las superiores, 5.', 'Japonés (Soroban): una cuenta en la parte superior y cuatro en la inferior.', 'Ruso (Schoty): se opera de forma horizontal, moviendo las cuentas por las varillas.'] },
      { title: 'Cómo representar una cantidad', items: ['En el ábaco horizontal explicado en el documento, las filas de arriba abajo representan unidades, decenas, centenas, unidades de millar y decenas de millar.', '36 = 3 decenas y 6 unidades.', '1453 = 1 unidad de millar, 4 centenas, 5 decenas y 3 unidades.', '235 + 142 = 377.'] },
      { title: 'Repaso rápido', items: ['Cada fila o varilla representa una posición.', 'Las cuentas se desplazan para representar cantidades.', 'Antes de usar el ábaco, identifica las unidades, decenas, centenas y millares.'] }
    ],
    correction: 'En la página 55 del PDF, el resultado impreso para 500 − 186 aparece como 377, pero ese resultado no coincide con la operación. La resta correcta es 314; se utiliza el resultado calculado correctamente en las preguntas.'
  },
  {
    id: 'reales', unitId: 'u2', unit: 'Unidad 2: Conteo', unitShort: 'Unidad 2',
    title: 'Clasificación de los números reales', section: '3.1', icon: 'ℝ',
    ref: 'PDF pp. 57–62',
    summary: 'Los números reales incluyen los conjuntos de los naturales, enteros, racionales e irracionales. Se representan en la recta numérica y se pueden ordenar.',
    notes: [
      { title: 'Conjuntos numéricos', items: ['Naturales (N): números usados para contar, como 35.', 'Enteros (Z): negativos, cero y positivos sin parte fraccionaria, como −3, 0 y 10.', 'Racionales (Q): pueden expresarse como fracción; por ejemplo, 3/4 o 25.50.', 'Irracionales: no pueden expresarse como una fracción de enteros; el documento incluye √2 y π.', 'Reales (R): conjunto que incluye naturales, enteros, racionales e irracionales.'] },
      { title: 'Recta numérica', items: ['El 0 está en el origen.', 'A la derecha están los números mayores; a la izquierda, los menores.', 'El número ubicado más a la derecha es el mayor.', 'Los positivos son mayores que cero y los negativos son menores que cero.'] },
      { title: 'Valor absoluto', items: ['Es la distancia de un número al 0.', '|+4| = 4 y |−4| = 4, porque ambos están a cuatro unidades del origen.', 'Un ejemplo del PDF: +200 + (−150) = +50.'] },
      { title: 'Repaso rápido', items: ['3/4 es racional.', '√7 y π son irracionales.', 'Entre −5 y −1, el mayor es −1.', 'Los reales pueden ubicarse en la recta numérica.'] }
    ]
  },
  {
    id: 'operaciones', unitId: 'u3', unit: 'Unidad 3: Clasificación de los números', unitShort: 'Unidad 3',
    title: 'Operaciones aritméticas con enteros', section: '3.2', icon: '±',
    ref: 'PDF pp. 40–45',
    summary: 'La suma, la resta, la multiplicación y la división permiten combinar, separar, repetir o distribuir cantidades. Cada operación tiene una inversa que puede deshacerla.',
    notes: [
      { title: 'Operaciones inversas', items: ['Suma ↔ resta: 5 + 3 = 8; 8 − 3 = 5.', 'Multiplicación ↔ división: 4 × 6 = 24; 24 ÷ 6 = 4.', 'Potenciación ↔ radicación: 3² = 9; √9 = 3.'] },
      { title: 'Suma y resta con signos', items: ['Si los números tienen el mismo signo, suma sus valores absolutos y conserva el signo.', 'Si tienen signos diferentes, resta los valores absolutos y conserva el signo del número con mayor valor absoluto.', 'Restar un número negativo equivale a sumar su opuesto; por ejemplo, 15 − (−8) = 23.'] },
      { title: 'Multiplicación y división', items: ['Signos iguales dan resultado positivo: (+)(+) = + y (−)(−) = +.', 'Signos diferentes dan resultado negativo: (+)(−) = − y (−)(+) = −.', 'Las mismas reglas de los signos se aplican a la división.'] },
      { title: 'Repaso rápido', items: ['−7 + 12 = 5.', '−18 + 7 = −11.', '(−4)(−6) = 24.', '36 ÷ (−9) = −4.'] }
    ]
  },
  {
    id: 'propiedades', unitId: 'u3', unit: 'Unidad 3: Clasificación de los números', unitShort: 'Unidad 3',
    title: 'Propiedades de las operaciones', section: '3.3', icon: 'ƒ',
    ref: 'PDF pp. 41–42 y 45–47',
    summary: 'Las propiedades conmutativa, asociativa y distributiva ayudan a reorganizar y simplificar operaciones. Los elementos neutros no cambian el valor y los inversos permiten obtener cero o uno.',
    notes: [
      { title: 'Propiedades', items: ['Conmutativa: el orden no cambia el resultado. a + b = b + a; a × b = b × a.', 'Asociativa: la forma de agrupar no cambia el resultado. (a + b) + c = a + (b + c).', 'Distributiva: a × (b + c) = a × b + a × c.'] },
      { title: 'Neutros e inversos', items: ['Neutro aditivo: 0, porque sumar cero no cambia el valor.', 'Neutro multiplicativo: 1, porque multiplicar por uno no cambia el valor.', 'Inverso aditivo: el opuesto; a + (−a) = 0.', 'Inverso multiplicativo: el recíproco; a × (1/a) = 1, si a no es cero.'] },
      { title: 'Ejemplo resuelto', items: ['8 × 49 = 8 × (50 − 1).', 'Aplicando la distributiva: 8 × 50 − 8 × 1 = 400 − 8 = 392.'] },
      { title: 'Repaso rápido', items: ['Conmutativa = cambia el orden.', 'Asociativa = cambia la agrupación.', 'Distributiva = multiplica cada término dentro del paréntesis.', 'El cero no tiene inverso multiplicativo.'] }
    ]
  },
  {
    id: 'factorizacion', unitId: 'u3', unit: 'Unidad 3: Clasificación de los números', unitShort: 'Unidad 3',
    title: 'Factorización, M.C.D. y m.c.m.', section: '3.4–3.5', icon: '×',
    ref: 'PDF pp. 30–37',
    summary: 'La factorización prima descompone un número compuesto en factores primos. El M.C.D. sirve para formar grupos o cortes iguales del mayor tamaño; el m.c.m. permite encontrar cuándo coinciden ciclos.',
    notes: [
      { title: 'Factorización prima', items: ['Un factor divide exactamente a otro número.', 'Un número primo es natural, mayor que 1, y solo tiene dos divisores: 1 y él mismo.', 'El 2 es el único número primo par.', 'Ejemplo: 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5.'] },
      { title: 'Máximo común divisor (M.C.D.)', items: ['Es el número más grande que divide exactamente a dos o más números.', 'Se usa para distribuir recursos en grupos iguales o cortar materiales en segmentos iguales y lo más largos posible.', 'Ejemplo del documento: M.C.D.(18, 24, 30) = 6.'] },
      { title: 'Mínimo común múltiplo (m.c.m.)', items: ['Es el menor múltiplo común de dos o más números.', 'Se usa para coordinar eventos que se repiten en ciclos distintos.', 'Ejemplo del documento: m.c.m.(45, 60) = 180 segundos.'] },
      { title: 'Cómo elegir', items: ['Si buscas el mayor número de paquetes iguales sin sobrantes, suele utilizarse el M.C.D.', 'Si buscas cuándo coinciden de nuevo varios horarios o ciclos, suele utilizarse el m.c.m.'] }
    ]
  },
  {
    id: 'fracciones', unitId: 'u4', unit: 'Unidad 4: Números fraccionarios y enteros', unitShort: 'Unidad 4',
    title: 'Unidad y estructura de una fracción', section: '4.1', icon: '½',
    ref: 'PDF pp. 13–14',
    summary: 'La unidad es el todo que se divide. Una fracción representa una parte de esa unidad y se escribe con numerador y denominador.',
    notes: [
      { title: 'Partes de una fracción', items: ['Numerador (arriba): indica cuántas partes se toman.', 'Denominador (abajo): indica en cuántas partes iguales se divide la unidad.', 'El denominador nunca puede ser cero.'] },
      { title: 'Ejemplo resuelto', items: ['Una barra de chocolate se divide en 4 partes iguales y se toman 3: la fracción es 3/4.', 'La fracción 5/3 representa 5 tercios: 3/3 + 2/3 = 1 entero y 2/3.'] },
      { title: 'Repaso rápido', items: ['La unidad es el todo.', 'Numerador = partes tomadas.', 'Denominador = partes iguales totales; no puede ser cero.'] }
    ]
  },
  {
    id: 'equivalencia', unitId: 'u4', unit: 'Unidad 4: Números fraccionarios y enteros', unitShort: 'Unidad 4',
    title: 'Equivalencia entre fracciones y enteros', section: '4.2', icon: '=',
    ref: 'PDF pp. 15–18',
    summary: 'Dos fracciones son equivalentes cuando representan la misma cantidad. Se pueden obtener al multiplicar o dividir numerador y denominador por el mismo número distinto de cero.',
    notes: [
      { title: 'Fracciones equivalentes', items: ['Multiplica o divide numerador y denominador por el mismo número distinto de cero.', 'Para comparar a/b y c/d, son equivalentes si a × d = b × c.', 'Ejemplo: 1/2, 2/4, 3/6 y 10/20 representan la misma cantidad.'] },
      { title: 'Enteros como fracciones', items: ['Cualquier entero puede escribirse sobre 1: 5 = 5/1, −4 = −4/1 y 0 = 0/1.', 'Escribir un entero como fracción facilita combinarlo con otra fracción.'] },
      { title: 'Ejemplo resuelto', items: ['3 + 1/2 = 3/1 + 1/2.', 'Convertimos 3/1 en 6/2; entonces 6/2 + 1/2 = 7/2.'] },
      { title: 'Repaso rápido', items: ['Mismo factor arriba y abajo conserva el valor.', 'Productos cruzados iguales indican equivalencia.', 'Un entero n se puede escribir como n/1.'] }
    ]
  },
  {
    id: 'simplificacion', unitId: 'u4', unit: 'Unidad 4: Números fraccionarios y enteros', unitShort: 'Unidad 4',
    title: 'Simplificación de fracciones', section: '4.3', icon: '÷',
    ref: 'PDF p. 18',
    summary: 'Simplificar una fracción consiste en encontrar otra equivalente cuyos números sean lo más pequeños posible.',
    notes: [
      { title: 'Procedimiento', items: ['Busca el máximo común divisor del numerador y el denominador.', 'Divide ambos por ese número.', 'Si no identificas el M.C.D. de inmediato, divide por factores comunes hasta que no queden más.'] },
      { title: 'Ejemplo resuelto', items: ['24/36: divide numerador y denominador entre 2 para obtener 12/18.', 'Divide otra vez entre 2: 6/9; divide entre 3: 2/3.', 'La fracción 2/3 es irreducible porque numerador y denominador no tienen divisores comunes mayores que 1.'] },
      { title: 'Repaso rápido', items: ['Divide arriba y abajo por el mismo divisor común.', 'La forma irreducible no tiene divisores comunes mayores que 1.'] }
    ]
  },
  {
    id: 'proporcion', unitId: 'u4', unit: 'Unidad 4: Números fraccionarios y enteros', unitShort: 'Unidad 4',
    title: 'Proporción directa e inversa', section: '4.4', icon: '↗',
    ref: 'PDF pp. 18–19',
    summary: 'En la proporción directa ambas cantidades aumentan o disminuyen en la misma proporción. En la inversa, cuando una aumenta la otra disminuye y el producto se mantiene constante.',
    notes: [
      { title: 'Proporción directa', items: ['Al aumentar una cantidad, la otra aumenta en la misma proporción.', 'Ejemplo: 2 kg de manzanas cuestan $4; 4 kg cuestan $8. La razón se mantiene.'] },
      { title: 'Proporción inversa', items: ['Al aumentar una cantidad, la otra disminuye en la misma proporción.', 'El producto de las cantidades se mantiene constante.', 'Ejemplo: 2 trabajadores tardan 6 horas; 4 trabajadores tardan 3 horas, porque 2 × 6 = 4 × 3 = 12.'] },
      { title: 'Repaso rápido', items: ['Directa: las dos cantidades cambian en el mismo sentido.', 'Inversa: una aumenta y la otra disminuye; el producto se conserva.'] }
    ]
  },
  {
    id: 'porcentaje', unitId: 'u4', unit: 'Unidad 4: Números fraccionarios y enteros', unitShort: 'Unidad 4',
    title: 'Porcentajes', section: '4.4', icon: '%',
    ref: 'PDF pp. 19–27',
    summary: 'Un porcentaje expresa una cantidad tomando como referencia 100 partes iguales y se representa con el símbolo %. Puede expresarse como fracción o decimal.',
    notes: [
      { title: 'Interpretación', items: ['Porcentaje significa “por cada cien”.', '60 % significa 60 de cada 100.', '100 % representa la totalidad.'] },
      { title: 'Convertir entre formas', items: ['Todo porcentaje se puede escribir como fracción con denominador 100.', 'Para obtener su forma decimal, divide entre 100: 25 % = 25/100 = 0.25.', 'Ejemplo: 40 % = 40/100 = 2/5. También, 50 % = 1/2 = 0.5.'] },
      { title: 'Aplicación', items: ['Los porcentajes se usan en descuentos, calificaciones, aumentos de precios, intereses, encuestas y niveles de batería.', 'Ejemplo del documento: un teléfono cuesta $850 y tiene descuento de 20 %. El descuento es $170 y el precio final es $680.'] },
      { title: 'Repaso rápido', items: ['Divide el porcentaje entre 100 para obtener decimal.', 'Para aplicar un descuento, calcula primero la parte descontada y réstala al precio original.'] }
    ]
  }
];

const unitOrder = ['u1', 'u2', 'u3', 'u4'];
const unitInfo = {
  u1: { title: 'Unidad 1: Conteo', subtitle: 'Números naturales y sistema indoarábigo', icon: '01' },
  u2: { title: 'Unidad 2: Conteo', subtitle: 'El ábaco y los números reales', icon: '02' },
  u3: { title: 'Unidad 3: Clasificación de los números', subtitle: 'Operaciones, propiedades y factorización', icon: '03' },
  u4: { title: 'Unidad 4: Números fraccionarios y enteros', subtitle: 'Fracciones, proporciones y porcentajes', icon: '04' }
};

function q(id, topic, level, type, prompt, options, answer, explanation, procedure, reference, concept) {
  return { id, topic, level, type, prompt, options, answer, explanation, procedure: procedure || '', reference: reference || '', concept: concept || '' };
}

const questions = [
  // 2.2 Números naturales
  q('NAT01','naturales',1,'identificacion','Según la convención utilizada en este curso, ¿cuál de estos números se considera natural?', ['−8','4.5','0','−2'],'0','El documento indica que en este curso se incluye el cero dentro del conjunto de los números naturales.','','PDF p. 6','Conjunto N'),
  q('NAT02','naturales',1,'verdadero_falso','Los números naturales incluyen números negativos y fracciones.', ['Verdadero','Falso'],'Falso','El documento señala que los números naturales se usan para contar y no incluyen negativos ni fracciones o decimales.','','PDF pp. 3 y 6','Características de N'),
  q('NAT03','naturales',2,'identificacion','En el número 4 583, ¿qué valor representa la cifra 5?', ['5 unidades','50 decenas','500, porque ocupa las centenas','5 000, porque ocupa los millares'],'500, porque ocupa las centenas','El valor de una cifra depende de su posición. En 4 583, el 5 está en las centenas.','4 583 = 4 000 + 500 + 80 + 3.','PDF p. 7','Valor posicional'),
  q('NAT04','naturales',2,'calculo','Una clínica atendió 32 pacientes el lunes, 28 el martes y 35 el miércoles. ¿Cuántos atendió en total?', ['85','90','95','105'],'95','Se suman las cantidades de los tres días.','32 + 28 = 60; 60 + 35 = 95.','PDF pp. 6–7','Suma de cantidades'),
  q('NAT05','naturales',2,'aplicacion','En una campaña se aplicaron 45 vacunas el lunes, 38 el martes y 52 el miércoles. ¿Cuántas vacunas se aplicaron?', ['134','135','136','137'],'135','El total se obtiene sumando las cantidades aplicadas cada día.','45 + 38 + 52 = 135.','PDF p. 9','Suma de cantidades'),
  q('NAT06','naturales',3,'identificacion','¿Qué selección contiene solo números naturales según este curso?', ['100, 0 y 25','0, −4 y 12','100, 3.8 y 12','−4, 3.8 y 25'],'100, 0 y 25','Los naturales se usan para contar; en este curso incluyen el cero, pero no los negativos ni los decimales.','','PDF pp. 6 y 8','Clasificación de naturales'),

  // 2.3 Sistema indoarábigo
  q('IND01','indoarabigo',1,'concepto','¿Cuántos símbolos básicos utiliza el sistema numeral indoarábigo?', ['Dos','Cinco','Diez','Doce'],'Diez','El sistema utiliza los diez dígitos del 0 al 9.','','PDF p. 4','Dígitos'),
  q('IND02','indoarabigo',1,'concepto','¿Qué significa que el sistema indoarábigo sea decimal?', ['Que solo usa números negativos','Que se basa en agrupaciones de diez unidades','Que cada cifra siempre vale lo mismo','Que no utiliza el cero'],'Que se basa en agrupaciones de diez unidades','El documento define el sistema decimal por sus agrupaciones de diez unidades.','','PDF p. 5','Sistema decimal'),
  q('IND03','indoarabigo',2,'concepto','En el sistema posicional, ¿de qué depende el valor de una cifra?', ['Del color con que se escriba','Del número de dígitos que tenga el nombre','De la posición que ocupa dentro del número','Solo del dígito que aparece antes'],'De la posición que ocupa dentro del número','Una misma cifra puede representar unidades, decenas, centenas o millares según su lugar.','','PDF p. 5','Sistema posicional'),
  q('IND04','indoarabigo',1,'identificacion','¿Quién fue Leonardo de Pisa, conocido popularmente como Fibonacci?', ['Un comerciante chino que inventó el ábaco','Un matemático italiano que difundió el sistema indoarábigo en Europa','El autor de los números romanos','Un matemático que creó los diez dígitos'],'Un matemático italiano que difundió el sistema indoarábigo en Europa','El documento lo presenta como un matemático italiano que promovió en Europa el sistema que conoció durante sus viajes.','','PDF p. 4','Leonardo de Pisa'),
  q('IND05','indoarabigo',3,'dato','¿En qué año se publicó Liber Abaci, obra con la que Leonardo de Pisa promovió el sistema en Europa?', ['1170','1202','1500','1700'],'1202','El documento fecha la publicación de Liber Abaci en 1202.','','PDF p. 4','Liber Abaci'),
  q('IND06','indoarabigo',3,'aplicacion','¿Cuál es la descomposición correcta del número 4 583 según el valor posicional?', ['4 000 + 500 + 80 + 3','400 + 50 + 8 + 3','4 000 + 50 + 8 + 3','4 000 + 500 + 8 + 30'],'4 000 + 500 + 80 + 3','El 4 representa millares, el 5 centenas, el 8 decenas y el 3 unidades.','4 583 = 4 000 + 500 + 80 + 3.','PDF p. 7','Descomposición posicional'),

  // Abaco
  q('ABA01','abaco',1,'identificacion','En el ábaco horizontal descrito en el PDF, ¿qué representa la primera fila de arriba?', ['Unidades','Decenas','Centenas','Unidades de millar'],'Unidades','El documento asigna a la primera fila las unidades, seguida por decenas, centenas y unidades de millar.','','PDF p. 53','Valor posicional en el ábaco'),
  q('ABA02','abaco',2,'identificacion','¿Cómo se descompone el número 1 453 para representarlo en el ábaco?', ['1 unidad, 4 decenas, 5 centenas y 3 millares','1 millar, 4 centenas, 5 decenas y 3 unidades','1 centena, 4 millares, 5 decenas y 3 unidades','1 millar, 4 decenas, 5 unidades y 3 centenas'],'1 millar, 4 centenas, 5 decenas y 3 unidades','Cada cifra se coloca en la posición que le corresponde: millares, centenas, decenas y unidades.','','PDF p. 54','Representación de cantidades'),
  q('ABA03','abaco',2,'calculo','El ejemplo del documento suma 235 + 142 usando el ábaco. ¿Cuál es el resultado?', ['367','377','387','477'],'377','Se suman las unidades, decenas y centenas: 5+2, 3+4 y 2+1.','235 + 142 = 377.','PDF p. 54','Suma con ábaco'),
  q('ABA04','abaco',2,'calculo','Resuelve la suma que aparece en la actividad del ábaco: 24 + 147.', ['161','171','181','191'],'171','Se suman las dos cantidades.','24 + 147 = 171.','PDF p. 57','Operaciones con ábaco'),
  q('ABA05','abaco',3,'calculo','En una actividad aparece la resta 644 − 180. ¿Cuál es su resultado?', ['454','464','474','544'],'464','Restar 180 equivale a quitar 18 decenas a 644.','644 − 180 = 464.','PDF p. 57','Resta con ábaco'),
  q('ABA06','abaco',1,'identificacion','¿Qué característica del ábaco japonés (Soroban) menciona el documento?', ['Dos niveles con cuentas inferiores de valor 1 y superiores de valor 5','Una cuenta superior y cuatro cuentas inferiores','Todas las cuentas se mueven en varillas horizontales','No utiliza cuentas móviles'],'Una cuenta superior y cuatro cuentas inferiores','El Soroban se describe como similar al ábaco chino, pero con una cuenta en la parte superior y cuatro en la inferior.','','PDF p. 52','Tipos de ábaco'),
  q('ABA07','abaco',4,'calculo','La página 55 muestra la operación 500 − 186, aunque el resultado impreso no coincide con la resta. ¿Cuál es el resultado correcto?', ['314','377','386','414'],'314','Al restar correctamente, 500 − 186 = 314. El 377 impreso en la página no es el resultado de esta operación.','500 − 100 = 400; 400 − 86 = 314.','PDF p. 55','Comprobación de resultados'),

  // Reales
  q('REA01','reales',1,'concepto','Según el documento, ¿qué conjuntos incluye el conjunto de los números reales?', ['Solo naturales y enteros','Naturales, enteros, racionales e irracionales','Solo fracciones y decimales','Solo números positivos'],'Naturales, enteros, racionales e irracionales','El documento presenta los reales como el conjunto que incluye naturales, enteros, racionales e irracionales.','','PDF p. 58','Clasificación de reales'),
  q('REA02','reales',2,'identificacion','¿Cuál de estos números se clasifica como irracional en el documento?', ['15','−8','3/4','√7'],'√7','El documento menciona raíces no exactas, como √2 y √7, y también π como ejemplos de irracionales.','','PDF pp. 58 y 61–62','Números irracionales'),
  q('REA03','reales',1,'identificacion','¿Cómo se clasifica principalmente la fracción 3/4?', ['Natural','Entero no negativo','Racional','Irracional'],'Racional','Una fracción como 3/4 es un número racional.','','PDF pp. 58 y 61','Números racionales'),
  q('REA04','reales',2,'aplicacion','Entre −5 y −1, ¿cuál es el número mayor en la recta numérica?', ['−5','−1','Son iguales','No se pueden comparar'],'−1','El número más a la derecha en la recta numérica es el mayor. −1 queda a la derecha de −5.','','PDF p. 60','Orden en la recta numérica'),
  q('REA05','reales',2,'concepto','¿Qué expresa el valor absoluto de un número?', ['Su signo','Su distancia al cero','Su posición en la tabla de multiplicar','El número de cifras que contiene'],'Su distancia al cero','El documento define el valor absoluto como la distancia entre el número y el 0.','','PDF p. 60','Valor absoluto'),
  q('REA06','reales',1,'verdadero_falso','En la recta numérica, los números positivos se ubican a la derecha del cero.', ['Verdadero','Falso'],'Verdadero','La recta numérica coloca los números mayores hacia la derecha y los menores hacia la izquierda.','','PDF p. 59','Recta numérica'),
  q('REA07','reales',3,'calculo','Una cuenta tiene $200 a favor y una deuda de $150. ¿Qué saldo queda al representar la deuda como −150?', ['−350','−50','50','350'],'50','El saldo se obtiene sumando el dinero a favor y el valor negativo de la deuda.','+200 + (−150) = +50.','PDF p. 60','Suma con enteros'),
  q('REA08','reales',3,'identificacion','¿Cuál de estas expresiones es un número racional según los ejemplos del documento?', ['π','√7','2.5','√2'],'2.5','El documento utiliza cantidades decimales como 25.50 y 12.75 como ejemplos de racionales; 2.5 puede escribirse como 5/2.','','PDF p. 58','Números racionales'),

  // Operaciones
  q('OPE01','operaciones',1,'calculo','Calcula: −7 + 12.', ['−19','−5','5','19'],'5','Los signos son diferentes, así que se restan los valores absolutos y se conserva el signo del número con mayor valor absoluto.','12 − 7 = 5, con signo positivo.','PDF p. 43','Suma con signos'),
  q('OPE02','operaciones',2,'calculo','Calcula: 15 − (−8).', ['7','−7','−23','23'],'23','Restar un número negativo equivale a sumar su opuesto.','15 − (−8) = 15 + 8 = 23.','PDF p. 43','Resta de un negativo'),
  q('OPE03','operaciones',2,'calculo','Calcula: −18 + 7.', ['25','−11','11','−25'],'−11','Tienen signos diferentes: 18 − 7 = 11. Se conserva el signo del número con mayor valor absoluto, que es −18.','−18 + 7 = −11.','PDF p. 44','Suma con signos'),
  q('OPE04','operaciones',2,'calculo','Resuelve: −9 − 6.', ['−3','3','−15','15'],'−15','Se parte de −9 y se restan otras 6 unidades, por lo que el resultado queda más negativo.','−9 − 6 = −15.','PDF p. 44','Resta de enteros'),
  q('OPE05','operaciones',3,'calculo','Calcula: 14 − (−5) + (−8).', ['1','11','17','27'],'11','Primero, 14 − (−5) = 19. Después se suma −8.','14 + 5 − 8 = 19 − 8 = 11.','PDF p. 44','Operación con varios signos'),
  q('OPE06','operaciones',2,'calculo','¿Cuál es el resultado de (−4)(−6)?', ['−24','−10','10','24'],'24','El producto de dos números con el mismo signo es positivo.','4 × 6 = 24, con signo positivo.','PDF p. 44','Multiplicación de signos'),
  q('OPE07','operaciones',2,'calculo','Resuelve: 36 ÷ (−9).', ['4','−4','−27','27'],'−4','Los signos diferentes producen un resultado negativo.','36 ÷ 9 = 4; el resultado es −4.','PDF p. 44','División de signos'),
  q('OPE08','operaciones',2,'calculo','Calcula: (−48) ÷ (−6).', ['−8','−42','8','42'],'8','Los dos números son negativos; en la división, signos iguales producen resultado positivo.','48 ÷ 6 = 8.','PDF p. 45','División de signos'),
  q('OPE09','operaciones',3,'procedimiento','Resuelve: (−6)(−3) + (−8).', ['−26','−10','10','26'],'10','Primero se resuelve la multiplicación; después se suma el número negativo.','(−6)(−3) = 18; 18 + (−8) = 10.','PDF p. 45','Operación combinada'),

  // Propiedades
  q('PRO01','propiedades',1,'identificacion','¿Qué propiedad se observa en 5 + (−3) = (−3) + 5?', ['Asociativa','Conmutativa','Distributiva','Neutro aditivo'],'Conmutativa','La propiedad conmutativa permite cambiar el orden de los sumandos sin alterar el resultado.','','PDF p. 45','Propiedad conmutativa'),
  q('PRO02','propiedades',2,'identificacion','¿Qué propiedad representa (2 + (−4)) + 6 = 2 + ((−4) + 6)?', ['Conmutativa','Asociativa','Distributiva','Inverso aditivo'],'Asociativa','La expresión cambia la agrupación de los términos, pero mantiene el orden.','','PDF p. 46','Propiedad asociativa'),
  q('PRO03','propiedades',3,'calculo','Aplica la propiedad distributiva a 7(20 − 3).', ['7(20) − 3 = 137','20(7 − 3) = 80','7(20) − 7(3) = 119','7 + 20 − 3 = 24'],'7(20) − 7(3) = 119','El factor 7 multiplica a los dos términos dentro del paréntesis.','7 × 20 − 7 × 3 = 140 − 21 = 119.','PDF p. 46','Propiedad distributiva'),
  q('PRO04','propiedades',1,'concepto','¿Cuál es el elemento neutro aditivo?', ['−1','0','1','10'],'0','Sumar 0 no modifica el número original.','','PDF p. 47','Neutro aditivo'),
  q('PRO05','propiedades',1,'concepto','¿Cuál es el elemento neutro multiplicativo?', ['0','−1','1','2'],'1','Multiplicar por 1 conserva el valor del número.','','PDF p. 47','Neutro multiplicativo'),
  q('PRO06','propiedades',2,'aplicacion','¿Cuál es el inverso aditivo de −7?', ['−7','1/7','−1/7','7'],'7','Un número y su opuesto suman cero.','−7 + 7 = 0.','PDF p. 47','Inverso aditivo'),
  q('PRO07','propiedades',2,'identificacion','¿Cuál es el inverso multiplicativo de 5?', ['−5','0','5','1/5'],'1/5','El recíproco de un número no nulo multiplicado por ese número da 1.','5 × 1/5 = 1.','PDF p. 47','Inverso multiplicativo'),
  q('PRO08','propiedades',3,'concepto','¿Qué pareja de operaciones se presenta como inversa en el documento?', ['Suma y multiplicación','Suma y resta','Multiplicación y potenciación','Resta y radicación'],'Suma y resta','El documento presenta la suma y la resta como operaciones inversas; también relaciona multiplicación con división y potenciación con radicación.','','PDF p. 40','Operaciones inversas'),
  q('PRO09','propiedades',4,'procedimiento','Para calcular 8 × 49, el documento propone escribir 49 como 50 − 1. ¿Qué resultado se obtiene?', ['382','392','400','408'],'392','Se aplica la distributiva para convertir el cálculo en una resta más sencilla.','8 × (50 − 1) = 400 − 8 = 392.','PDF pp. 41–42','Uso de la distributiva'),

  // Factorización, MCD y mcm
  q('FAC01','factorizacion',1,'concepto','¿Qué característica define a un número primo según el documento?', ['Es divisible por cualquier número','Es natural mayor que 1 y solo tiene dos divisores: 1 y él mismo','Siempre es par','Tiene exactamente tres divisores'],'Es natural mayor que 1 y solo tiene dos divisores: 1 y él mismo','Esa es la definición que proporciona el material para los números primos.','','PDF p. 30','Números primos'),
  q('FAC02','factorizacion',1,'dato','¿Cuál es el único número primo par?', ['1','2','4','6'],'2','El documento señala que el 2 es el único número primo par.','','PDF p. 30','Número primo par'),
  q('FAC03','factorizacion',2,'procedimiento','¿Cuál es la factorización prima correcta de 60?', ['2 × 3 × 10','2² × 3 × 5','2 × 5²','3² × 7'],'2² × 3 × 5','Se descompone 60 hasta obtener solo factores primos.','60 = 2 × 2 × 3 × 5 = 2² × 3 × 5.','PDF pp. 30–31','Factorización prima'),
  q('FAC04','factorizacion',1,'concepto','¿Qué es el M.C.D. de varios números?', ['El menor múltiplo común','El mayor número que divide exactamente a todos','La suma de los números','El producto de todos los factores'],'El mayor número que divide exactamente a todos','El M.C.D. es el divisor común más grande y sirve para repartir o cortar en partes iguales lo más grandes posible.','','PDF p. 31','M.C.D.'),
  q('FAC05','factorizacion',3,'aplicacion','Tres varillas miden 18, 24 y 30 cm. ¿Cuál es la longitud mayor de segmentos iguales que permite cortarlas sin desperdicio?', ['3 cm','6 cm','12 cm','18 cm'],'6 cm','Se busca el máximo común divisor de 18, 24 y 30.','M.C.D.(18, 24, 30) = 6.','PDF p. 32','M.C.D. contextualizado'),
  q('FAC06','factorizacion',2,'concepto','¿Qué es el m.c.m. de varios números?', ['El mayor divisor común','El menor múltiplo común','La diferencia entre los números','La factorización de uno de los números'],'El menor múltiplo común','El m.c.m. identifica el primer múltiplo que comparten los números y se utiliza para coordinar ciclos.','','PDF p. 32','m.c.m.'),
  q('FAC07','factorizacion',3,'aplicacion','Una escuela tiene 72 lápices, 108 cuadernos y 90 borradores. ¿Cuál es el mayor número de paquetes iguales que puede formar sin sobrantes?', ['12','18','24','36'],'18','Para formar el mayor número de paquetes iguales sin sobrantes se calcula el M.C.D. de las cantidades.','M.C.D.(72, 108, 90) = 18.','PDF p. 34','M.C.D. contextualizado'),
  q('FAC08','factorizacion',3,'aplicacion','Las clases se repiten cada 12, 18 y 24 días. Si hoy coinciden, ¿en cuántos días volverán a coincidir?', ['36','48','72','96'],'72','Para encontrar cuándo coinciden los ciclos se calcula el m.c.m.','m.c.m.(12, 18, 24) = 72 días.','PDF p. 35','m.c.m. contextualizado'),
  q('FAC09','factorizacion',3,'aplicacion','Un piso mide 180 cm por 240 cm. Para cubrirlo con baldosas cuadradas del mayor tamaño posible sin cortar, ¿cuánto debe medir cada lado?', ['30 cm','40 cm','60 cm','90 cm'],'60 cm','El lado debe dividir exactamente las dos medidas; se calcula el M.C.D.','M.C.D.(180, 240) = 60 cm.','PDF p. 35','M.C.D. contextualizado'),
  q('FAC10','factorizacion',3,'aplicacion','Tres aspersores se activan cada 8, 12 y 20 minutos. Si acaban de coincidir, ¿cuándo volverán a activarse juntos?', ['40 minutos','60 minutos','80 minutos','120 minutos'],'120 minutos','Se calcula el mínimo común múltiplo de los tres intervalos.','m.c.m.(8, 12, 20) = 120 minutos.','PDF p. 36','m.c.m. contextualizado'),
  q('FAC11','factorizacion',3,'aplicacion','Se tienen 84 caramelos y 126 chocolates. ¿Cuál es el mayor número de bolsas iguales que se puede formar sin sobrantes?', ['21','42','63','84'],'42','Se busca el máximo común divisor para formar el mayor número de bolsas iguales.','M.C.D.(84, 126) = 42.','PDF p. 36','M.C.D. contextualizado'),
  q('FAC12','factorizacion',4,'aplicacion','Tres luces se encienden cada 14, 21 y 35 segundos. Si acaban de coincidir, ¿cuándo volverán a coincidir?', ['105 segundos','140 segundos','210 segundos','420 segundos'],'210 segundos','Para sincronizar ciclos se calcula el m.c.m. de los tres intervalos.','m.c.m.(14, 21, 35) = 210 segundos.','PDF p. 36','m.c.m. contextualizado'),

  // Fracciones
  q('FRA01','fracciones',1,'concepto','¿Qué representa el denominador de una fracción?', ['Cuántas partes se toman','En cuántas partes iguales se divide la unidad','El valor total de todas las fracciones','La cantidad de unidades enteras'],'En cuántas partes iguales se divide la unidad','El numerador indica las partes tomadas; el denominador señala en cuántas partes iguales se divide el todo.','','PDF p. 13','Estructura de una fracción'),
  q('FRA02','fracciones',1,'concepto','¿Qué indica el numerador?', ['Las partes que se toman de la unidad','El tamaño total de la unidad','Que la fracción es negativa','En cuántas partes se divide la unidad'],'Las partes que se toman de la unidad','El numerador indica cuántas partes se toman.','','PDF p. 13','Estructura de una fracción'),
  q('FRA03','fracciones',2,'concepto','¿Por qué el denominador de una fracción no puede ser cero?', ['Porque el numerador siempre debe ser cero','Porque el denominador indica partes iguales y no puede tomar el valor cero','Porque todas las fracciones son mayores que uno','Porque así lo exige el sistema decimal'],'Porque el denominador indica partes iguales y no puede tomar el valor cero','El documento indica expresamente que el denominador nunca puede ser cero.','','PDF p. 13','Denominador'),
  q('FRA04','fracciones',3,'aplicacion','La fracción 5/3 se puede escribir como número mixto de qué manera?', ['1 1/3','1 2/3','2 1/3','2 2/3'],'1 2/3','Tres tercios forman una unidad; quedan dos tercios de la siguiente.','5/3 = 3/3 + 2/3 = 1 2/3.','PDF p. 14','Fracción impropia'),
  q('FRA05','fracciones',3,'identificacion','Una barra se divide en 4 partes iguales y se toman 3. ¿Qué fracción representa la parte tomada?', ['3/4','4/3','1/3','4/4'],'3/4','El numerador es 3 porque se toman tres partes, y el denominador es 4 porque la unidad se divide en cuatro partes iguales.','','PDF p. 13','Representación de fracciones'),

  // Equivalencia
  q('EQU01','equivalencia',1,'procedimiento','¿Cómo se obtiene una fracción equivalente sin cambiar su valor?', ['Sumando 1 al numerador y al denominador','Multiplicando o dividiendo numerador y denominador por el mismo número distinto de cero','Multiplicando solo el numerador','Cambiando el signo del denominador'],'Multiplicando o dividiendo numerador y denominador por el mismo número distinto de cero','Aplicar la misma operación a numerador y denominador conserva el valor de la fracción.','','PDF p. 15','Fracciones equivalentes'),
  q('EQU02','equivalencia',2,'procedimiento','¿Qué condición permite comprobar por multiplicación cruzada que a/b y c/d son equivalentes?', ['a + d = b + c','a × b = c × d','a × d = b × c','a − b = c − d'],'a × d = b × c','Los productos cruzados deben ser iguales para que las fracciones sean equivalentes.','','PDF pp. 15–16','Multiplicación cruzada'),
  q('EQU03','equivalencia',3,'calculo','¿Qué número debe ocupar el espacio para que 7/9 = □/36?', ['21','24','28','32'],'28','El denominador 9 se multiplica por 4 para convertirse en 36; el numerador también se multiplica por 4.','7 × 4 = 28.','PDF p. 24','Fracciones equivalentes'),
  q('EQU04','equivalencia',2,'concepto','¿Cómo se escribe el entero −4 como fracción?', ['−4/0','4/−4','−4/1','1/−4'],'−4/1','Un entero puede escribirse como numerador y 1 como denominador, incluso si es negativo o cero.','','PDF pp. 16–17','Entero como fracción'),
  q('EQU05','equivalencia',3,'procedimiento','¿Cuál es el resultado de 3 + 1/2 al convertir el entero a una fracción equivalente?', ['4/2','5/2','6/2','7/2'],'7/2','Se escribe 3 como 3/1 y después como 6/2 para igualar denominadores.','3 + 1/2 = 6/2 + 1/2 = 7/2.','PDF p. 17','Suma de entero y fracción'),
  q('EQU06','equivalencia',4,'identificacion','¿Cuál de las siguientes fracciones es equivalente a 1/2?', ['2/3','3/5','10/20','4/10'],'10/20','Al simplificar 10/20 dividiendo numerador y denominador entre 10 se obtiene 1/2.','','PDF p. 15','Equivalencia'),

  // Simplificación
  q('SIM01','simplificacion',1,'concepto','¿Qué significa simplificar una fracción?', ['Cambiarla por otra de valor distinto','Encontrar una fracción equivalente con números más pequeños','Multiplicar solo el numerador','Convertirla siempre en número decimal'],'Encontrar una fracción equivalente con números más pequeños','La simplificación conserva el valor y busca utilizar numerador y denominador más pequeños.','','PDF p. 18','Simplificación'),
  q('SIM02','simplificacion',2,'procedimiento','¿Qué número se recomienda buscar para simplificar una fracción en un solo paso?', ['Mínimo común múltiplo','Máximo común divisor del numerador y el denominador','La suma del numerador y el denominador','El mayor de los dos números'],'Máximo común divisor del numerador y el denominador','Se divide numerador y denominador entre el M.C.D. de ambos.','','PDF p. 18','Procedimiento de simplificación'),
  q('SIM03','simplificacion',3,'calculo','¿Cuál es la forma irreducible de 24/36?', ['2/3','3/2','4/6','12/18'],'2/3','El M.C.D. de 24 y 36 es 12. Dividir ambos términos entre 12 produce la forma irreducible.','24 ÷ 12 = 2; 36 ÷ 12 = 3.','PDF p. 18','Simplificación de fracciones'),
  q('SIM04','simplificacion',3,'calculo','Simplifica 18/24.', ['2/3','3/4','4/3','6/8'],'3/4','Numerador y denominador se dividen entre su M.C.D., que es 6.','18 ÷ 6 = 3; 24 ÷ 6 = 4.','PDF p. 18','Simplificación de fracciones'),

  // Proporciones
  q('DIR01','proporcion',1,'concepto','¿Qué sucede en una proporción directa?', ['Una cantidad aumenta y la otra disminuye','Las cantidades cambian en la misma proporción','El producto de ambas cantidades siempre es cero','Las dos cantidades son iguales'],'Las cantidades cambian en la misma proporción','En el ejemplo del documento, al duplicar los kilogramos de manzana se duplica el precio.','','PDF p. 18','Proporción directa'),
  q('DIR02','proporcion',2,'aplicacion','Si 2 kg de manzanas cuestan $4 y el precio mantiene una proporción directa, ¿cuánto cuestan 4 kg?', ['$4','$6','$8','$10'],'$8','La cantidad de manzanas se duplica, por lo que el precio también se duplica.','2 kg → $4; 4 kg → $8.','PDF p. 18','Proporción directa'),
  q('DIR03','proporcion',1,'concepto','¿Qué ocurre en una proporción inversa?', ['Al aumentar una cantidad, la otra disminuye y el producto se mantiene constante','Las dos cantidades aumentan siempre juntas','La diferencia entre cantidades es constante','Las cantidades no tienen ninguna relación'],'Al aumentar una cantidad, la otra disminuye y el producto se mantiene constante','Esa es la definición y propiedad que aparecen en el material.','','PDF p. 19','Proporción inversa'),
  q('DIR04','proporcion',3,'aplicacion','Si 2 trabajadores tardan 6 horas y todos trabajan al mismo ritmo, ¿cuánto tardarían 4 trabajadores en el ejemplo de proporción inversa del documento?', ['2 horas','3 horas','6 horas','12 horas'],'3 horas','Al duplicarse el número de trabajadores, el tiempo se reduce a la mitad en el ejemplo.','2 × 6 = 12 y 4 × 3 = 12.','PDF p. 19','Proporción inversa'),
  q('DIR05','proporcion',3,'identificacion','En el ejemplo inverso, ¿qué se mantiene constante?', ['La suma de las cantidades','La diferencia entre las cantidades','El producto de las cantidades','El cociente siempre igual a cero'],'El producto de las cantidades','El documento indica que el producto de ambas cantidades permanece constante.','','PDF p. 19','Producto constante'),

  // Porcentajes
  q('PCT01','porcentaje',1,'concepto','¿Qué significa un porcentaje?', ['Una cantidad por cada diez','Una cantidad tomando como referencia cien partes iguales','Una fracción cuyo denominador siempre es 10','Un número negativo'],'Una cantidad tomando como referencia cien partes iguales','Porcentaje significa “por cada cien” y se representa con el símbolo %.','','PDF p. 19','Definición de porcentaje'),
  q('PCT02','porcentaje',2,'procedimiento','¿Cuál es la fracción simplificada equivalente a 40 %?', ['4/10','2/5','5/2','40/10'],'2/5','40 % se escribe como 40/100 y luego se simplifica dividiendo numerador y denominador entre 20.','40/100 = 2/5.','PDF p. 20','Porcentaje a fracción'),
  q('PCT03','porcentaje',2,'calculo','¿Cuál es la forma decimal de 25 %?', ['0.025','0.25','2.5','25.0'],'0.25','Para convertir un porcentaje a decimal, se divide entre 100.','25 ÷ 100 = 0.25.','PDF p. 20','Porcentaje a decimal'),
  q('PCT04','porcentaje',2,'identificacion','¿Qué conjunto de expresiones representa el mismo valor que 50 %?', ['5/10 y 0.5','1/5 y 0.5','50/10 y 0.05','1/4 y 0.5'],'5/10 y 0.5','El documento indica que 50 % = 50/100 = 1/2 = 0.5; 5/10 también se simplifica a 1/2.','','PDF p. 20','Equivalencia de porcentaje'),
  q('PCT05','porcentaje',3,'aplicacion','Un teléfono cuesta $850 y tiene un descuento del 20 %. ¿Cuál es el precio después del descuento?', ['$650','$670','$680','$700'],'$680','El 20 % de $850 es $170. Se resta ese descuento al precio original.','850 × 0.20 = 170; 850 − 170 = 680.','PDF p. 27','Descuento porcentual'),
  q('PCT06','porcentaje',3,'aplicacion','Si 60 de cada 100 estudiantes aprobaron, ¿qué porcentaje aprobó?', ['6 %','40 %','60 %','100 %'],'60 %','El porcentaje indica cuántos de cada 100 cumplen la condición.','60/100 = 60 %.','PDF pp. 19–20','Interpretación de porcentaje'),
  q('PCT07','porcentaje',4,'procedimiento','Un dispositivo muestra 80 % de batería. ¿Qué forma decimal equivale a ese porcentaje?', ['0.08','0.8','8.0','80.0'],'0.8','Se divide entre 100 para convertir el porcentaje en decimal.','80/100 = 0.80 = 0.8.','PDF p. 20–21','Porcentaje a decimal')
];

const topicById = Object.fromEntries(topics.map(t => [t.id, t]));
const questionById = Object.fromEntries(questions.map(item => [item.id, item]));

function freshState() {
  return {
    theme: 'light', usedByTopic: {}, topicProgress: {}, errorIds: [], difficultIds: [],
    answeredCount: 0, correctCount: 0, wrongCount: 0, streak: 0, bestStreak: 0,
    history: [], lastTopicId: 'naturales'
  };
}

function loadState() {
  const fallback = freshState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const saved = JSON.parse(raw);
    const state = { ...fallback, ...saved };
    if (!state.usedByTopic || typeof state.usedByTopic !== 'object' || Array.isArray(state.usedByTopic)) state.usedByTopic = {};
    if (!state.topicProgress || typeof state.topicProgress !== 'object' || Array.isArray(state.topicProgress)) state.topicProgress = {};
    if (!Array.isArray(state.errorIds)) state.errorIds = [];
    if (!Array.isArray(state.difficultIds)) state.difficultIds = [];
    if (!Array.isArray(state.history)) state.history = [];
    ['answeredCount','correctCount','wrongCount','streak','bestStreak'].forEach(k => {
      if (!Number.isFinite(state[k]) || state[k] < 0) state[k] = 0;
    });
    if (!['light','dark'].includes(state.theme)) state.theme = 'light';
    if (!topicById[state.lastTopicId]) state.lastTopicId = topics[0].id;
    state.errorIds = [...new Set(state.errorIds)].filter(id => questionById[id]);
    state.difficultIds = [...new Set(state.difficultIds)].filter(id => questionById[id]);
    for (const [id, progress] of Object.entries(state.topicProgress)) {
      if (!topicById[id] || !progress || typeof progress !== 'object') { delete state.topicProgress[id]; continue; }
      if (!Number.isInteger(progress.level) || progress.level < 1 || progress.level > 4) progress.level = 1;
      if (!Array.isArray(progress.attempts)) progress.attempts = [];
      progress.attempts = progress.attempts.filter(a => a && Number.isFinite(a.score) && Number.isFinite(a.total));
    }
    for (const key of Object.keys(state.usedByTopic)) {
      if (!topicById[key] || !Array.isArray(state.usedByTopic[key])) delete state.usedByTopic[key];
      else state.usedByTopic[key] = [...new Set(state.usedByTopic[key])].filter(id => questionById[id] && questionById[id].topic === key);
    }
    return state;
  } catch (error) {
    console.warn('No se pudieron leer los datos guardados; se usarán valores iniciales.', error);
    return fallback;
  }
}

let state = loadState();
let currentView = 'home';
let currentTopicId = state.lastTopicId;
let session = null;
let toastTimer = null;

function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (error) { showToast('El navegador no permitió guardar el progreso. Puedes seguir estudiando, pero los cambios podrían no persistir.'); }
}

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]));
}
function shuffle(input) {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function sample(input, count) { return shuffle(input).slice(0, Math.max(0, count)); }
function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }
function getProgress(topicId) {
  if (!state.topicProgress[topicId]) state.topicProgress[topicId] = { level: 1, attempts: [], mastered: false, lastScore: null };
  return state.topicProgress[topicId];
}
function accuracy() { return state.answeredCount ? Math.round(state.correctCount / state.answeredCount * 100) : 0; }
function topicAccuracy(topicId) {
  const p = state.topicProgress[topicId];
  if (!p || !p.attempts.length) return 0;
  const recent = p.attempts.slice(-3);
  const total = recent.reduce((sum, a) => sum + a.total, 0);
  const correct = recent.reduce((sum, a) => sum + a.correct, 0);
  return total ? Math.round(correct / total * 100) : 0;
}
function isMastered(topicId) {
  const p = state.topicProgress[topicId];
  if (!p || p.attempts.length < 3) return false;
  return p.attempts.slice(-3).every(a => a.score >= 80);
}
function topicQuestions(topicId) { return questions.filter(item => item.topic === topicId); }
function setHeader(title, subtitle) {
  document.getElementById('pageTitle').textContent = title;
  document.title = `${title} | MateLab`;
  const crumb = document.querySelector('.breadcrumbs');
  if (crumb) crumb.setAttribute('aria-label', subtitle ? `${title}. ${subtitle}` : title);
}
function activateView(viewName, title) {
  currentView = viewName;
  const ids = ['homeView','studyView','quizView','resultsView','reviewView','progressView'];
  ids.forEach(id => {
    const node = document.getElementById(id);
    const active = id === `${viewName}View`;
    node.hidden = !active;
    node.classList.toggle('active', active);
  });
  document.querySelectorAll('.nav-link').forEach(btn => btn.classList.toggle('active', btn.dataset.action === (viewName === 'home' ? 'home' : viewName === 'progress' ? 'progress' : viewName === 'review' ? 'review' : '')));
  if (title) setHeader(title);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}
function levelPill(level) { return `<span class="pill ${level >= 3 ? 'gold' : ''}">Nivel ${level} · ${esc(LEVEL_NAMES[level])}</span>`; }
function refText(ref) { return ref ? `<span class="reference-text">Referencia: ${esc(ref)}</span>` : ''; }
function topicQuestionCount(topicId) { return topicQuestions(topicId).length; }

function renderTopicNav() {
  const root = document.getElementById('topicNav');
  root.innerHTML = unitOrder.map(unitId => {
    const related = topics.filter(t => t.unitId === unitId);
    return `<div class="topic-nav-unit">${esc(unitInfo[unitId].title)}</div>` + related.map((topic, i) => {
      const mastered = isMastered(topic.id);
      return `<button class="topic-nav-button ${currentTopicId === topic.id && currentView === 'study' ? 'active' : ''}" type="button" data-action="study" data-topic="${topic.id}"><span class="topic-nav-index">${i + 1}</span><span class="topic-nav-label">${esc(topic.title)}</span>${mastered ? '<span class="topic-nav-check" aria-label="Dominado">✓</span>' : ''}</button>`;
    }).join('');
  }).join('');
}

function renderStats() {
  const metrics = [
    { icon: '↗', color: '', label: 'Preguntas respondidas', value: state.answeredCount },
    { icon: '✓', color: 'teal', label: 'Porcentaje de aciertos', value: `${accuracy()}%` },
    { icon: '⚑', color: 'gold', label: 'Temas dominados', value: topics.filter(t => isMastered(t.id)).length },
    { icon: '↻', color: 'rose', label: 'Pendientes de repaso', value: new Set([...state.errorIds.map(id => questionById[id]?.topic).filter(Boolean)]).size }
  ];
  document.getElementById('overviewStats').innerHTML = metrics.map(m => `<div class="stat-card"><span class="stat-icon ${m.color}">${m.icon}</span><span class="stat-meta"><span class="stat-label">${m.label}</span><strong class="stat-value">${m.value}</strong></span></div>`).join('');
  document.getElementById('errorCount').textContent = state.errorIds.length;
}

function renderHome() {
  activateView('home', 'Inicio');
  renderStats();
  const root = document.getElementById('unitsContainer');
  root.innerHTML = unitOrder.map(unitId => {
    const related = topics.filter(t => t.unitId === unitId);
    const totalQ = related.reduce((n, t) => n + topicQuestionCount(t.id), 0);
    return `<section class="unit-block" aria-label="${esc(unitInfo[unitId].title)}">
      <div class="unit-heading"><div class="unit-name"><span class="unit-icon">${unitInfo[unitId].icon}</span><div><h3>${esc(unitInfo[unitId].title)}</h3><p>${esc(unitInfo[unitId].subtitle)}</p></div></div><div class="unit-meta"><span>${related.length} temas · ${totalQ} reactivos</span><button class="button button-secondary button-small" type="button" data-action="unit-exam" data-unit="${unitId}">Evaluar unidad →</button></div></div>
      <div class="topic-grid">${related.map((topic, i) => {
        const acc = topicAccuracy(topic.id);
        const mastered = isMastered(topic.id);
        const p = getProgress(topic.id);
        return `<article class="topic-card"><div class="topic-card-top"><span class="topic-number">${esc(topic.section)}</span><div><h4>${esc(topic.title)}</h4><p>${topicQuestionCount(topic.id)} reactivos · ${esc(topic.ref)}</p></div></div><div class="topic-card-footer"><div class="topic-mini-progress" aria-label="Progreso ${acc}%"><span style="width:${acc}%"></span></div><span class="topic-progress-text">${mastered ? 'Dominado' : p.attempts.length ? `${acc}% reciente` : 'Sin intentos'}</span></div><button class="card-action" type="button" data-action="study" data-topic="${topic.id}">Estudiar tema <span aria-hidden="true">→</span></button></article>`;
      }).join('')}</div>
    </section>`;
  }).join('');
  renderTopicNav();
}

function renderStudy(topicId) {
  const topic = topicById[topicId];
  if (!topic) return renderHome();
  currentTopicId = topicId;
  state.lastTopicId = topicId;
  persist();
  const p = getProgress(topicId);
  const last = p.attempts[p.attempts.length - 1];
  activateView('study', topic.title);
  const study = document.getElementById('studyContent');
  study.innerHTML = `
    <div class="page-head"><div><div class="eyebrow-row"><span class="pill">${esc(topic.unit)}</span><span class="pill neutral">Apartado ${esc(topic.section)}</span>${isMastered(topicId) ? '<span class="pill teal">Dominado</span>' : ''}</div><h1 id="studyHeading">${esc(topic.title)}</h1><p>${esc(topic.summary)}</p></div><button class="button button-secondary" type="button" data-action="home">← Volver a los temas</button></div>
    <div class="study-layout"><article class="study-main"><h2>Resumen para estudiar</h2><p class="summary-lead">${esc(topic.summary)}</p>
      ${topic.notes.map((section, idx) => `<section class="note-section"><h3><span>${idx + 1}</span>${esc(section.title)}</h3><ul>${section.items.map(item => `<li>${esc(item)}</li>`).join('')}</ul></section>`).join('')}
      ${topic.correction ? `<div class="correction-note"><strong>Nota de verificación numérica.</strong> ${esc(topic.correction)}</div>` : ''}
      ${refText(topic.ref)}
    </article><aside class="study-aside"><h3>Elige cómo practicar</h3>
      <div class="mode-option"><span class="mode-icon">▤</span><div><strong>Modo práctica</strong><p>Preguntas con explicación inmediata y sin límite de tiempo.</p></div></div>
      <div class="mode-option"><span class="mode-icon">↗</span><div><strong>Modo adaptativo</strong><p>La dificultad cambia según tus respuestas y refuerza el tema actual.</p></div></div>
      <div class="mode-option"><span class="mode-icon">◷</span><div><strong>Modo examen</strong><p>Guarda tus respuestas y muestra las soluciones al terminar.</p></div></div>
      <div class="study-buttons"><button class="button button-primary" type="button" data-action="start-topic" data-mode="adaptive" data-topic="${topicId}">Empezar modo adaptativo →</button><button class="button button-secondary" type="button" data-action="start-topic" data-mode="practice" data-topic="${topicId}">Practicar sin límite</button><button class="button button-secondary" type="button" data-action="start-topic" data-mode="exam" data-topic="${topicId}">Evaluación del tema</button></div>
      <div class="level-track" aria-label="Dificultad actual">${[1,2,3,4].map(n => `<span class="${n <= p.level ? 'active' : ''}"></span>`).join('')}</div>
      <p class="reference-text">${levelPill(p.level)} ${last ? `Último intento: ${last.score}%` : 'Aún no hay intentos en este tema.'}</p>
    </aside></div>`;
  renderTopicNav();
}

function remainingForTopic(topicId) {
  const pool = topicQuestions(topicId);
  const used = new Set(state.usedByTopic[topicId] || []);
  return pool.filter(item => !used.has(item.id));
}
function pickBatchForTopic(topicId, quota, sessionMeta) {
  let unused = remainingForTopic(topicId);
  const pool = topicQuestions(topicId);
  if (!unused.length && pool.length) {
    state.usedByTopic[topicId] = [];
    unused = [...pool];
    sessionMeta.cycledTopics.push(topicId);
  }
  const chosen = sample(unused, Math.min(quota, unused.length));
  return chosen;
}

function startQuiz(mode, topicIds, options = {}) {
  topicIds = [...new Set(topicIds)].filter(id => topicById[id]);
  if (!topicIds.length) return showToast('No se encontró ningún tema para este intento.');
  const meta = { cycledTopics: [] };
  let selected = [];
  let reviewSet = false;
  if (mode === 'review') {
    const ids = state.errorIds.filter(id => questionById[id]);
    if (!ids.length) { showToast('No tienes errores guardados para repasar.'); renderReview(); return; }
    selected = shuffle(ids.map(id => questionById[id]));
    reviewSet = true;
  } else if (mode === 'difficult') {
    const ids = state.difficultIds.filter(id => questionById[id]);
    if (!ids.length) { showToast('Todavía no marcaste preguntas como difíciles.'); renderReview(); return; }
    selected = shuffle(ids.map(id => questionById[id]));
    reviewSet = true;
    mode = 'review';
  } else {
    for (const topicId of topicIds) {
      const quota = options.quotaByTopic ? options.quotaByTopic : 20;
      selected.push(...pickBatchForTopic(topicId, quota, meta));
    }
    if (mode === 'exam' && options.unitExam) selected = shuffle(selected);
    else if (mode === 'final') selected = shuffle(selected);
    else if (mode === 'adaptive') selected = shuffle(selected);
    else selected = shuffle(selected);
  }
  if (!selected.length) {
    showToast('No hay preguntas disponibles en esta selección.');
    return;
  }
  session = {
    mode, topicIds, unitId: options.unitId || null, title: options.title || (mode === 'final' ? 'Examen final' : options.unitExam ? `Evaluación · ${unitInfo[options.unitId]?.title || 'Unidad'}` : mode === 'review' ? 'Repaso de errores' : topicById[topicIds[0]]?.title || 'Práctica'),
    selected, remaining: [...selected], total: selected.length, answered: [], current: null, options: [], selectedOption: null, submitted: false,
    startedAt: Date.now(), cycledTopics: meta.cycledTopics, reviewSet, levelMessage: '', blockStartingIndex: 0,
    scoreByTopic: {}
  };
  if (meta.cycledTopics.length) showToast('Ya se utilizaron todos los reactivos de uno o más temas. Comienza un nuevo ciclo; algunas preguntas podrán repetirse.');
  else if (options.quotaByTopic) showToast(`Intento preparado con hasta ${options.quotaByTopic} preguntas por tema, sin repetir reactivos recientes.`);
  else if (mode !== 'review' && mode !== 'final' && selected.length < Math.min(20, topicIds.reduce((n,id) => n + topicQuestionCount(id),0))) showToast('Se utilizaron las preguntas nuevas disponibles; inicia otro ciclo para volver a ver reactivos.');
  activateView('quiz', session.title);
  nextQuestion();
}

function nextQuestion() {
  if (!session || !session.remaining.length) {
    if (session) finishQuiz();
    return;
  }
  let idx = 0;
  if (session.mode === 'adaptive' && session.topicIds.length === 1) {
    const targetLevel = getProgress(session.topicIds[0]).level;
    let bestDistance = Infinity;
    const bestIndices = [];
    session.remaining.forEach((item, i) => {
      const d = Math.abs(item.level - targetLevel);
      if (d < bestDistance) { bestDistance = d; bestIndices.length = 0; bestIndices.push(i); }
      else if (d === bestDistance) bestIndices.push(i);
    });
    idx = bestIndices[Math.floor(Math.random() * bestIndices.length)] || 0;
  } else {
    idx = Math.floor(Math.random() * session.remaining.length);
  }
  const [item] = session.remaining.splice(idx, 1);
  session.current = item;
  session.options = shuffle(item.options);
  session.selectedOption = null;
  session.submitted = false;
  const used = state.usedByTopic[item.topic] || (state.usedByTopic[item.topic] = []);
  if (!used.includes(item.id)) used.push(item.id);
  renderQuiz();
}

function renderQuiz() {
  if (!session || !session.current) return renderHome();
  const qItem = session.current;
  const topic = topicById[qItem.topic];
  const immediate = !['exam','final'].includes(session.mode);
  const level = session.mode === 'adaptive' ? getProgress(qItem.topic).level : qItem.level;
  const position = session.answered.length + 1;
  const percent = Math.round((session.answered.length / session.total) * 100);
  const content = document.getElementById('quizContent');
  const selectedClass = (value) => session.selectedOption === value ? 'selected' : '';
  content.innerHTML = `
    <div class="quiz-topline"><div class="quiz-subject"><strong>${esc(session.title)}</strong><span>${esc(topic.title)} · ${esc(topic.unit)}</span></div><div class="quiz-controls">${levelPill(level)}<button class="button button-secondary button-small" type="button" data-action="quit-quiz">Salir</button></div></div>
    <div class="progress-outer" aria-label="Progreso del intento"><div class="progress-inner" style="width:${percent}%"></div></div>
    <article class="quiz-card"><div class="question-meta"><span class="pill neutral">${esc(TYPE_LABELS[qItem.type] || 'Pregunta')}</span><span class="pill ${qItem.level >= 3 ? 'gold' : ''}">Dificultad ${qItem.level}</span><span class="question-counter">Pregunta ${position} de ${session.total}</span></div>
      <h1 id="quizHeading">${esc(qItem.prompt)}</h1><p class="quiz-hint">Selecciona una respuesta. Solo podrás confirmarla una vez.</p>
      <div class="answer-options" role="group" aria-label="Opciones de respuesta">${session.options.map((option, i) => {
        let extra = '';
        if (session.submitted && immediate) {
          if (option === qItem.answer) extra = ' correct';
          else if (option === session.selectedOption) extra = ' incorrect';
        }
        return `<button type="button" class="answer-option ${selectedClass(option)}${extra}" data-action="choose-option" data-index="${i}" ${session.submitted ? 'disabled' : ''}><span class="option-letter">${String.fromCharCode(65+i)}</span><span class="option-text">${esc(option)}</span></button>`;
      }).join('')}</div>
      ${session.submitted ? renderFeedback(qItem, immediate) : ''}
      <div class="quiz-bottom"><div class="quiz-bottom-left"><button type="button" class="difficulty-button ${state.difficultIds.includes(qItem.id) ? 'active' : ''}" data-action="toggle-difficult" data-question="${qItem.id}" aria-pressed="${state.difficultIds.includes(qItem.id)}">⚑ ${state.difficultIds.includes(qItem.id) ? 'Marcada como difícil' : 'Marcar como difícil'}</button></div>
        ${!session.submitted ? `<button class="button button-primary" type="button" data-action="submit-answer" ${session.selectedOption === null ? 'disabled' : ''}>Confirmar respuesta →</button>` : `<button class="button button-primary" type="button" data-action="next-question">${position >= session.total ? 'Ver resultados →' : 'Siguiente pregunta →'}</button>`}
      </div>
      <div class="quiz-status-row"><span>▣ ${session.answered.length} contestadas</span><span>✓ ${session.answered.filter(a => a.correct).length} correctas</span><span>↻ ${state.streak} seguidas</span><span>Referencia: ${esc(qItem.reference || topic.ref)}</span></div>
    </article>`;
  renderTopicNav();
}

function renderFeedback(qItem, immediate) {
  if (!session || !session.submitted) return '';
  if (!immediate) return `<div class="quiz-feedback exam"><strong>Respuesta guardada</strong><p>La solución se mostrará al terminar la evaluación.</p></div>`;
  const correct = session.answered[session.answered.length - 1]?.correct;
  return `<div class="quiz-feedback ${correct ? 'success' : 'error'}"><strong>${correct ? '✓ Respuesta correcta' : '✕ Respuesta incorrecta'}</strong>${!correct ? `<p>Respuesta correcta: <b>${esc(qItem.answer)}</b></p>` : ''}<p>${esc(qItem.explanation)}</p>${qItem.procedure ? `<p><b>Procedimiento:</b> ${esc(qItem.procedure)}</p>` : ''}<span class="feedback-reference">${esc(qItem.reference || topicById[qItem.topic].ref)} · ${esc(topicById[qItem.topic].title)}</span>${session.levelMessage ? `<p><b>Ajuste adaptativo:</b> ${esc(session.levelMessage)}</p>` : ''}</div>`;
}

function chooseOption(index) {
  if (!session || session.submitted || !session.options[index]) return;
  session.selectedOption = session.options[index];
  renderQuiz();
  const selected = document.querySelector('.answer-option.selected');
  if (selected) selected.focus({ preventScroll: true });
}

function submitAnswer() {
  if (!session || session.submitted || session.selectedOption === null) {
    if (!session?.submitted) showToast('Selecciona una respuesta antes de continuar.');
    return;
  }
  const qItem = session.current;
  const correct = session.selectedOption === qItem.answer;
  session.submitted = true;
  session.levelMessage = '';
  session.answered.push({ id: qItem.id, topic: qItem.topic, selected: session.selectedOption, correct, level: qItem.level, type: qItem.type });
  state.answeredCount += 1;
  if (correct) {
    state.correctCount += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    if (session.mode === 'review' && state.errorIds.includes(qItem.id)) state.errorIds = state.errorIds.filter(id => id !== qItem.id);
  } else {
    state.wrongCount += 1;
    state.streak = 0;
    if (!state.errorIds.includes(qItem.id)) state.errorIds.push(qItem.id);
  }
  if (session.mode === 'adaptive' && session.answered.length % 3 === 0) {
    const topicId = qItem.topic;
    const block = session.answered.slice(-3).filter(a => a.topic === topicId);
    if (block.length === 3) {
      const score = block.filter(a => a.correct).length / block.length * 100;
      const progress = getProgress(topicId);
      const before = progress.level;
      if (score >= 80) progress.level = clamp(progress.level + 1, 1, 4);
      else if (score < 50) progress.level = clamp(progress.level - 1, 1, 4);
      if (progress.level !== before) session.levelMessage = `El bloque tuvo ${Math.round(score)} % de aciertos. El nivel cambia de ${LEVEL_NAMES[before]} a ${LEVEL_NAMES[progress.level]}.`;
      else session.levelMessage = `El bloque tuvo ${Math.round(score)} % de aciertos. Se mantiene el nivel ${LEVEL_NAMES[progress.level]}.`;
    }
  }
  persist();
  renderStats();
  renderQuiz();
}

function nextOrFinish() {
  if (!session || !session.submitted) return;
  if (session.answered.length >= session.total) finishQuiz();
  else nextQuestion();
}

function finishQuiz() {
  if (!session) return;
  const endedAt = Date.now();
  const byTopic = {};
  session.answered.forEach(answer => {
    if (!byTopic[answer.topic]) byTopic[answer.topic] = { correct: 0, total: 0, answers: [] };
    byTopic[answer.topic].total += 1;
    byTopic[answer.topic].correct += answer.correct ? 1 : 0;
    byTopic[answer.topic].answers.push(answer);
  });
  const topicResults = [];
  for (const [topicId, result] of Object.entries(byTopic)) {
    const score = result.total ? Math.round(result.correct / result.total * 100) : 0;
    const progress = getProgress(topicId);
    progress.attempts.push({ date: new Date(endedAt).toISOString(), score, correct: result.correct, total: result.total, mode: session.mode, seconds: Math.max(0, Math.round((endedAt - session.startedAt) / 1000)) });
    progress.attempts = progress.attempts.slice(-30);
    progress.lastScore = score;
    if (session.mode !== 'adaptive' && session.mode !== 'review' && result.total >= 3) {
      const before = progress.level;
      if (score >= 80) progress.level = clamp(progress.level + 1, 1, 4);
      else if (score < 50) progress.level = clamp(progress.level - 1, 1, 4);
      progress.lastLevelChange = before === progress.level ? 'sin cambio' : `${LEVEL_NAMES[before]} → ${LEVEL_NAMES[progress.level]}`;
    }
    progress.mastered = isMastered(topicId);
    topicResults.push({ topicId, score, correct: result.correct, total: result.total });
  }
  const nCorrect = session.answered.filter(a => a.correct).length;
  const nTotal = session.answered.length;
  const score = nTotal ? Math.round(nCorrect / nTotal * 100) : 0;
  const historyEntry = {
    date: new Date(endedAt).toISOString(), title: session.title, mode: session.mode,
    score, correct: nCorrect, total: nTotal, seconds: Math.max(0, Math.round((endedAt - session.startedAt) / 1000)),
    topicResults
  };
  if (nTotal) state.history.unshift(historyEntry);
  state.history = state.history.slice(0, 50);
  persist();
  const completed = { ...session, score, correct: nCorrect, totalAnswered: nTotal, seconds: historyEntry.seconds, topicResults, finishedAt: endedAt };
  session = null;
  renderResults(completed);
}

function renderResults(completed) {
  activateView('results', 'Resultados');
  renderStats();
  const mins = Math.floor(completed.seconds / 60);
  const secs = completed.seconds % 60;
  const timeText = mins ? `${mins} min ${secs} s` : `${secs} s`;
  const resultTopics = completed.topicResults.map(item => {
    const topic = topicById[item.topicId];
    return `<div class="result-topic-row"><div><strong>${esc(topic.title)}</strong><small>${item.correct} de ${item.total} correctas · Nivel actual: ${esc(LEVEL_NAMES[getProgress(item.topicId).level])}</small><div class="result-row-bar"><span style="width:${item.score}%"></span></div></div><span class="result-topic-score ${item.score < 50 ? 'low' : item.score >= 80 ? 'high' : ''}">${item.score}%</span></div>`;
  }).join('');
  const weakTopics = [...completed.topicResults].filter(t => t.score < 80).sort((a,b) => a.score - b.score);
  const missedAnswers = completed.answered.filter(a => !a.correct);
  const answerReview = completed.answered.map(a => {
    const item = questionById[a.id];
    return `<div class="review-item"><strong>${a.correct ? '✓ ' : '✕ '}${esc(item.prompt)}</strong><p>${a.correct ? 'Correcta' : `Tu respuesta: ${esc(a.selected)} · Correcta: ${esc(item.answer)}`}</p></div>`;
  }).join('');
  document.getElementById('resultsContent').innerHTML = `
    <div class="results-hero"><div><div class="eyebrow-row"><span class="pill">INTENTO TERMINADO</span><span class="pill neutral">${esc(modeLabel(completed.mode))}</span></div><h1 id="resultsHeading">${completed.score >= 80 ? 'Buen trabajo.' : completed.score >= 50 ? 'Revisa los puntos que faltan.' : 'Vamos a reforzar la base.'}</h1><p>${esc(completed.title)} · Tiempo: ${timeText}. El historial se guardó en este dispositivo.</p></div><div class="score-circle" style="--score:${completed.score}"><div class="score-circle-inner"><strong>${completed.score}%</strong><small>de aciertos</small></div></div></div>
    <div class="result-metrics"><div class="result-metric"><span>Correctas</span><strong>${completed.correct}</strong></div><div class="result-metric"><span>Incorrectas</span><strong>${completed.totalAnswered - completed.correct}</strong></div><div class="result-metric"><span>Tiempo</span><strong>${timeText}</strong></div></div>
    <section class="results-section"><h2>Resultado por tema</h2>${resultTopics || '<p class="empty-history">No hay resultados para mostrar.</p>'}</section>
    <section class="results-section"><h2>Qué repasar</h2>${weakTopics.length ? weakTopics.map(item => `<div class="result-topic-row"><div><strong>${esc(topicById[item.topicId].title)}</strong><small>${item.score < 50 ? 'Conviene volver al resumen y practicar preguntas de nivel básico.' : 'Repasa este tema para lograr resultados consistentes.'}</small></div><button class="button button-secondary button-small" type="button" data-action="study" data-topic="${item.topicId}">Estudiar →</button></div>`).join('') : '<div class="review-empty"><span>✓</span>En este intento alcanzaste al menos 80 % en todos los temas evaluados.</div>'}</section>
    <section class="results-section"><h2>Revisión de respuestas</h2><div class="review-panel">${answerReview}</div></section>
    <div class="hero-actions"><button class="button button-primary" type="button" data-action="retry-session" data-mode="${completed.mode}" data-topics="${completed.topicIds.join(',')}">Nuevo intento →</button><button class="button button-secondary" type="button" data-action="review">Repasar errores</button><button class="button button-secondary" type="button" data-action="home">Volver al inicio</button></div>`;
  renderTopicNav();
}

function modeLabel(mode) {
  return ({ practice: 'Modo práctica', adaptive: 'Modo adaptativo', exam: 'Modo examen', final: 'Examen final', review: 'Repaso de errores' })[mode] || 'Evaluación';
}

function renderReview() {
  activateView('review', 'Repaso de errores');
  renderStats();
  const errors = state.errorIds.map(id => questionById[id]).filter(Boolean);
  const difficult = state.difficultIds.map(id => questionById[id]).filter(Boolean);
  const itemList = (items, action) => items.length ? items.map(item => `<div class="review-item"><strong>${esc(item.prompt)}</strong><p>${esc(topicById[item.topic].title)} · ${esc(item.reference || topicById[item.topic].ref)} · Respuesta: ${esc(item.answer)}</p><button class="card-action" type="button" data-action="study" data-topic="${item.topic}">Abrir resumen de este tema →</button></div>`).join('') : `<div class="review-empty"><span>✓</span>${action === 'error' ? 'No hay respuestas incorrectas guardadas.' : 'No has marcado preguntas como difíciles.'}</div>`;
  document.getElementById('reviewContent').innerHTML = `
    <div class="page-head"><div><span class="section-kicker">REFUERZO PERSONAL</span><h1 id="reviewHeading">Repaso de errores</h1><p>Las preguntas incorrectas se guardan aquí. Si las respondes correctamente durante el repaso, salen de la lista de errores.</p></div><button class="button button-secondary" type="button" data-action="home">← Volver al inicio</button></div>
    <div class="review-layout"><section class="review-panel"><h2>Preguntas incorrectas <span class="pill neutral">${errors.length}</span></h2><p>Practica de nuevo los conceptos que necesitas reforzar.</p>${errors.length ? `<button class="button button-primary" type="button" data-action="begin-review">Practicar errores →</button>` : ''}${itemList(errors,'error')}</section>
    <section class="review-panel"><h2>Preguntas difíciles <span class="pill gold">${difficult.length}</span></h2><p>Marca una pregunta durante la práctica para encontrarla más tarde.</p>${difficult.length ? `<button class="button button-secondary" type="button" data-action="begin-difficult">Practicar marcadas →</button>` : ''}${itemList(difficult,'difficult')}</section></div>`;
  renderTopicNav();
}

function renderProgress() {
  activateView('progress', 'Mi progreso');
  renderStats();
  const cards = topics.map(topic => {
    const p = state.topicProgress[topic.id] || { level: 1, attempts: [], mastered: false };
    const score = topicAccuracy(topic.id);
    const last = p.attempts[p.attempts.length - 1];
    const errors = state.errorIds.filter(id => questionById[id]?.topic === topic.id).length;
    return `<article class="progress-topic-card"><div class="progress-topic-top"><div><h3>${esc(topic.title)}</h3><p>${esc(topic.unit)} · ${p.attempts.length} intentos</p></div>${isMastered(topic.id) ? '<span class="pill teal">Dominado</span>' : levelPill(p.level)}</div><div class="topic-mini-progress"><span style="width:${score}%"></span></div><div class="progress-topic-footer"><span>${last ? `Último resultado: ${last.score}%` : 'Sin intentos'}${errors ? ` · ${errors} error(es)` : ''}</span><button class="card-action" type="button" data-action="study" data-topic="${topic.id}">Abrir →</button></div></article>`;
  }).join('');
  const history = state.history.slice(0, 10).map(entry => {
    const date = new Date(entry.date);
    const dateText = Number.isNaN(date.getTime()) ? 'Fecha no disponible' : date.toLocaleDateString('es-MX',{day:'numeric',month:'short',year:'numeric'});
    return `<div class="history-row"><div class="history-icon">${entry.score}%</div><div><strong>${esc(entry.title)}</strong><small>${esc(modeLabel(entry.mode))} · ${dateText} · ${entry.correct}/${entry.total} correctas</small></div><span class="history-score">${entry.seconds ? `${Math.floor(entry.seconds/60)}:${String(entry.seconds%60).padStart(2,'0')}` : ''}</span></div>`;
  }).join('');
  document.getElementById('progressContent').innerHTML = `
    <div class="progress-hero"><div><span class="section-kicker">RESUMEN DEL APRENDIZAJE</span><h1 id="progressHeading">Mi progreso</h1><p>El dominio requiere resultados altos y constantes en tres intentos recientes.</p></div><button class="button button-primary" type="button" data-action="final-exam">Hacer examen final →</button></div>
    <div class="stats-grid" style="margin-top:15px">${[
      {icon:'↗',color:'',label:'Preguntas respondidas',value:state.answeredCount},
      {icon:'✓',color:'teal',label:'Acierto global',value:`${accuracy()}%`},
      {icon:'⚑',color:'gold',label:'Temas dominados',value:topics.filter(t=>isMastered(t.id)).length},
      {icon:'↻',color:'rose',label:'Mejor racha',value:state.bestStreak}
    ].map(m=>`<div class="stat-card"><span class="stat-icon ${m.color}">${m.icon}</span><span class="stat-meta"><span class="stat-label">${m.label}</span><strong class="stat-value">${m.value}</strong></span></div>`).join('')}</div>
    <section class="results-section"><h2>Progreso por tema</h2><div class="progress-grid">${cards}</div></section>
    <section class="results-section"><h2>Historial reciente</h2><div class="history-list">${history || '<div class="empty-history">Tus intentos aparecerán aquí después de terminar una práctica o evaluación.</div>'}</div></section>`;
  renderTopicNav();
}

function startUnitExam(unitId) {
  const ids = topics.filter(t => t.unitId === unitId).map(t => t.id);
  if (!ids.length) return showToast('La unidad seleccionada no contiene temas.');
  startQuiz('exam', ids, { unitId, unitExam: true, quotaByTopic: 4, title: `Evaluación · ${unitInfo[unitId].title}` });
}
function startFinalExam() {
  startQuiz('final', topics.map(t => t.id), { quotaByTopic: 4, title: 'Examen final · Todo el documento' });
}

function toggleDifficult(questionId) {
  if (state.difficultIds.includes(questionId)) state.difficultIds = state.difficultIds.filter(id => id !== questionId);
  else state.difficultIds.push(questionId);
  persist();
  if (session) renderQuiz();
  renderStats();
}

function requestReset() {
  const dialog = document.getElementById('resetDialog');
  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else if (window.confirm('¿Reiniciar el progreso? Se borrarán los intentos y los datos guardados.')) {
    state = freshState(); persist(); applyTheme(); renderHome(); showToast('Se reinició el progreso.');
  }
}
document.getElementById('resetDialog').addEventListener('close', event => {
  const dialog = event.currentTarget;
  if (dialog.returnValue === 'confirm') {
    state = freshState();
    try { localStorage.removeItem(STORAGE_KEY); } catch (error) { /* El almacenamiento podría estar bloqueado. */ }
    persist();
    session = null;
    applyTheme();
    renderHome();
    showToast('Se reinició el progreso.');
  }
});

function applyTheme() {
  const dark = state.theme === 'dark';
  document.body.classList.toggle('dark', dark);
  const btn = document.getElementById('themeToggle');
  btn.textContent = dark ? '☼' : '◐';
  btn.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  btn.title = dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', dark ? '#101522' : '#f5f7fb');
}

document.getElementById('themeToggle').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(); persist();
});

document.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button || button.disabled) return;
  const action = button.dataset.action;
  switch (action) {
    case 'home': renderHome(); break;
    case 'study': renderStudy(button.dataset.topic); break;
    case 'progress': renderProgress(); break;
    case 'review': renderReview(); break;
    case 'continue': renderStudy(state.lastTopicId || topics[0].id); break;
    case 'reset': requestReset(); break;
    case 'final-exam': startFinalExam(); break;
    case 'unit-exam': startUnitExam(button.dataset.unit); break;
    case 'start-topic': startQuiz(button.dataset.mode || 'practice', [button.dataset.topic]); break;
    case 'choose-option': chooseOption(Number(button.dataset.index)); break;
    case 'submit-answer': submitAnswer(); break;
    case 'next-question': nextOrFinish(); break;
    case 'toggle-difficult': toggleDifficult(button.dataset.question); break;
    case 'begin-review': startQuiz('review', topics.map(t => t.id)); break;
    case 'begin-difficult': startQuiz('difficult', topics.map(t => t.id)); break;
    case 'quit-quiz':
      if (window.confirm('¿Salir de este intento? Las respuestas ya confirmadas se conservarán en las estadísticas, pero el intento no aparecerá en el historial.')) {
        session = null; renderHome();
      }
      break;
    case 'retry-session': {
      const ids = (button.dataset.topics || '').split(',').filter(id => topicById[id]);
      const mode = button.dataset.mode || 'practice';
      if (mode === 'final') startFinalExam();
      else if (mode === 'review') startQuiz('review', topics.map(t=>t.id));
      else startQuiz(mode, ids.length ? ids : [state.lastTopicId]);
      break;
    }
    default: break;
  }
});

document.addEventListener('keydown', event => {
  if (!session || currentView !== 'quiz' || session.submitted) return;
  const target = event.target;
  if (target && ['INPUT','TEXTAREA','SELECT'].includes(target.tagName)) return;
  const keyNumber = Number(event.key);
  if (keyNumber >= 1 && keyNumber <= session.options.length) {
    chooseOption(keyNumber - 1);
  }
  if (event.key === 'Enter' && session.selectedOption !== null) submitAnswer();
});

applyTheme();
renderHome();
