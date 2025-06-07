import { parseISO, format } from 'date-fns'

// константные данные
import { yearMarker } from '../consts/yearMarker'
import { monthMarker } from '../consts/monthMarker'
import { conturs } from '../consts/conturs'
import { typesReact } from '../consts/typesReact'

const TableData = (date) => {
	// Преобразуем даут в нужный формат (пример - 27091978) и разбиваем на массив чисел
	const dateCut = date.replace(/[.]/g, '')

	// const formatDate = format('27091978', 'ddMMyyy').split('').map(Number)
	const formatDate = dateCut.split('').map(Number)

	// Хроника - извлечение производных
	const m = date.split('.')[1]
	const d = date.split('.')[0]
	const dm = date.split('.')[0] + date.split('.')[1]
	const y = date.split('.')[2]

	// Високосный - Не високосный год
	const visocosni = parseInt(y) % 4 === 0 ? true : false

	//Маркеры - кол-во дней в месяце
	let dayMonth
	if (visocosni && m === '02') {
		dayMonth = monthMarker.filter((i) => {
			if (i.month.title === '2 ВГ') {
				return i
			}
		})[0]?.day
	} else {
		dayMonth = monthMarker.filter((i) => {
			if (i.month.title === parseInt(m).toString()) {
				return i
			}
		})[0]?.day
	}

	// Хроника - результат произведения
	const hronMulti = parseInt(dm) * parseInt(y)

	// Монада - сумма
	const monadaSum =
		formatDate[0] +
		formatDate[1] +
		formatDate[2] +
		formatDate[3] +
		formatDate[4] +
		formatDate[5] +
		formatDate[6] +
		formatDate[7]

	//Монада - промежуточная редукция
	const monadaPre =
		monadaSum > 9
			? monadaSum.toString().split('').map(Number)[0] +
			  monadaSum.toString().split('').map(Number)[1]
			: monadaSum

	//Монада - итоговая редукция
	const monadaItog =
		monadaPre > 9
			? monadaPre.toString().split('').map(Number)[0] +
			  monadaPre.toString().split('').map(Number)[1]
			: monadaPre

	// Род- сумма
	const rodsum = formatDate[0] + formatDate[1] + formatDate[2] + formatDate[3]

	// Род -редукция [1]
	const rodredux1 =
		rodsum > 9
			? rodsum.toString().split('').map(Number)[0] +
			  rodsum.toString().split('').map(Number)[1]
			: rodsum

	// Род -редукция [2]
	const rodredux2 =
		rodredux1 > 9
			? rodredux1.toString().split('').map(Number)[0] +
			  rodredux1.toString().split('').map(Number)[1]
			: rodredux1

	// *********************** Хроника жизни ******************************
	const r1 = rodsum > 9 ? rodredux2 : rodsum
	const r2 = monadaPre > 9 ? monadaItog : monadaPre

	// Компенсация род - сумма
	const compRodSum = r1 + r2

	//Компенсация род - редукция
	const compRodRedux =
		compRodSum > 9
			? compRodSum.toString().split('').map(Number)[0] +
			  compRodSum.toString().split('').map(Number)[1]
			: compRodSum

	const r3 = compRodSum > 9 ? compRodRedux : compRodSum
	const p1 = hronMulti.toString().split('').map(Number)[0]

	//Прошлое компенсация - сумма
	const pastSum = r2 + p1

	//Прошлое компенсация - редукция
	const pastRedux =
		pastSum > 9
			? pastSum.toString().split('').map(Number)[0] +
			  pastSum.toString().split('').map(Number)[1]
			: pastSum

	const p3 = pastSum > 9 ? pastRedux : pastSum

	const period1 = hronMulti
		.toString()
		.split('')
		.map(Number)
		.splice(1, hronMulti.toString().split('').map(Number).length - 1)

	// Хроника компенсация [1] - сумма
	const hronCompSum1 = r2 + period1[0]

	// Хроника редукция [1] - сумма
	const hronSumRedux1 =
		hronCompSum1 > 9
			? hronCompSum1.toString().split('').map(Number)[0] +
			  hronCompSum1.toString().split('').map(Number)[1]
			: hronCompSum1

	// Хроника компенсация [2] - сумма
	const hronCompSum2 = r2 + period1[1]

	// Хроника редукция [2] - сумма
	const hronSumRedux2 =
		hronCompSum2 > 9
			? hronCompSum2.toString().split('').map(Number)[0] +
			  hronCompSum2.toString().split('').map(Number)[1]
			: hronCompSum2

	// Хроника компенсация [3] - сумма
	const hronCompSum3 = r2 + period1[2]

	// Хроника редукция [3] - сумма
	const hronSumRedux3 =
		hronCompSum3 > 9
			? hronCompSum3.toString().split('').map(Number)[0] +
			  hronCompSum3.toString().split('').map(Number)[1]
			: hronCompSum3

	// Хроника компенсация [4] - сумма
	const hronCompSum4 = r2 + period1[3]

	// Хроника редукция [4] - сумма
	const hronSumRedux4 =
		hronCompSum4 > 9
			? hronCompSum4.toString().split('').map(Number)[0] +
			  hronCompSum4.toString().split('').map(Number)[1]
			: hronCompSum4

	// Хроника компенсация [5] - сумма
	const hronCompSum5 = r2 + period1[4]

	// Хроника редукция [5] - сумма
	const hronSumRedux5 =
		hronCompSum5 > 9
			? hronCompSum5.toString().split('').map(Number)[0] +
			  hronCompSum5.toString().split('').map(Number)[1]
			: hronCompSum5

	// Хроника компенсация [6] - сумма
	let hronCompSum6 = 999
	if (parseInt(d) > 5) {
		hronCompSum6 = r2 + period1[5]
	}

	// console.log('-->hron', hronCompSum6)

	// Хроника редукция [6] - сумма
	const hronSumRedux6 =
		hronCompSum6 > 9
			? hronCompSum6.toString().split('').map(Number)[0] +
			  hronCompSum6.toString().split('').map(Number)[1]
			: hronCompSum6

	const period2 = []
	period2.push(hronCompSum1 > 9 ? hronSumRedux1 : hronCompSum1)
	period2.push(hronCompSum2 > 9 ? hronSumRedux2 : hronCompSum2)
	period2.push(hronCompSum3 > 9 ? hronSumRedux3 : hronCompSum3)
	period2.push(hronCompSum4 > 9 ? hronSumRedux4 : hronCompSum4)
	period2.push(hronCompSum5 > 9 ? hronSumRedux5 : hronCompSum5)
	period2.push(
		hronCompSum6 > 9 && hronCompSum6 != 999 ? hronSumRedux6 : hronCompSum6
	)

	// console.log('-->period2', period2)

	// ******************** КОНЕЦ ХРОНИКИ ЖИЗНИ *********************

	//******************************************* Просчет по контурам

	let baseMonthA = null
	if (visocosni && m === '01') {
		baseMonthA = monthMarker.filter((i) => {
			if (i.month.title === '1 ВГ') {
				return i
			}
		})[0]?.odin
	} else {
		baseMonthA = monthMarker.filter((i) => {
			if (i.month.title === parseInt(m).toString()) {
				return i
			}
		})[0]?.odin
	}

	let baseMonthB = null
	if (visocosni && m === '01') {
		baseMonthB = monthMarker.filter((i) => {
			if (i.month.title === '1 ВГ') {
				return i
			}
		})[0]?.dwa
	} else {
		baseMonthB = monthMarker.filter((i) => {
			if (i.month.title === parseInt(m).toString()) {
				return i
			}
		})[0]?.dwa
	}

	let baseMonthC = null
	if (visocosni && m === '01') {
		baseMonthC = monthMarker.filter((i) => {
			if (i.month.title === '1 ВГ') {
				return i
			}
		})[0]?.tri
	} else {
		baseMonthC = monthMarker.filter((i) => {
			if (i.month.title === parseInt(m).toString()) {
				return i
			}
		})[0]?.tri
	}

	const calcConturs = [
		{
			base0: {
				a: 23,
				b: 28,
				c: 33,
			},
			baseYear: {
				a: yearMarker.filter((i) => {
					if (i.year === parseInt(y)) {
						return i
					}
				})[0].a,
				b: yearMarker.filter((i) => {
					if (i.year === parseInt(y)) {
						return i
					}
				})[0].b,
				c: yearMarker.filter((i) => {
					if (i.year === parseInt(y)) {
						return i
					}
				})[0].c,
			},
			baseMonth: {
				a: baseMonthA,
				b: baseMonthB,
				c: baseMonthC,
			},
			baseDay: {
				a: dayMonth - parseInt(d),
				b: dayMonth - parseInt(d),
				c: dayMonth - parseInt(d),
			},
		},
	]

	// Сумма контуров (дд/мм/гггг)
	const conturSum = [
		{
			a:
				calcConturs[0].baseYear.a +
				calcConturs[0].baseMonth.a +
				calcConturs[0].baseDay.a,
			b:
				calcConturs[0].baseYear.b +
				calcConturs[0].baseMonth.b +
				calcConturs[0].baseDay.b,
			c:
				calcConturs[0].baseYear.c +
				calcConturs[0].baseMonth.c +
				calcConturs[0].baseDay.c,
		},
	]

	// Промежуточные результаты контуров (1)
	const conturMiddle1 = [
		{
			a: conturSum[0].a <= 23 ? conturSum[0].a : conturSum[0].a - 23,
			b: conturSum[0].b <= 28 ? conturSum[0].b : conturSum[0].b - 28,
			c: conturSum[0].c <= 33 ? conturSum[0].c : conturSum[0].c - 33,
		},
	]

	// Промежуточные результаты контуров (2)
	const conturMiddle2 = [
		{
			a:
				conturMiddle1[0].a <= 23 ? conturMiddle1[0].a : conturMiddle1[0].a - 23,
			b:
				conturMiddle1[0].b <= 28 ? conturMiddle1[0].b : conturMiddle1[0].b - 28,
			c:
				conturMiddle1[0].c <= 33 ? conturMiddle1[0].c : conturMiddle1[0].c - 33,
		},
	]

	// Промежуточные результаты контуров (3)
	const conturMiddle3 = [
		{
			a:
				conturMiddle2[0].a <= 23 ? conturMiddle2[0].a : conturMiddle2[0].a - 23,
			b:
				conturMiddle2[0].b <= 28 ? conturMiddle2[0].b : conturMiddle2[0].b - 28,
			c:
				conturMiddle2[0].c <= 33 ? conturMiddle2[0].c : conturMiddle2[0].c - 33,
		},
	]

	// Итоговые результаты контуров
	const conturItog = [
		{
			a:
				conturMiddle3[0].a <= 23 ? conturMiddle3[0].a : conturMiddle3[0].a - 23,
			b:
				conturMiddle3[0].b <= 28 ? conturMiddle3[0].b : conturMiddle3[0].b - 28,
			c:
				conturMiddle3[0].c <= 33 ? conturMiddle3[0].c : conturMiddle3[0].c - 33,
		},
	]

	const dataContur1 = conturs.filter((i) => {
		if (i.marker === conturItog[0].a) {
			return i
		}
	})[0]

	const dataContur2 = conturs.filter((i) => {
		if (i.marker === conturItog[0].b) {
			return i
		}
	})[0]

	const dataContur3 = conturs.filter((i) => {
		if (i.marker === conturItog[0].c) {
			return i
		}
	})[0]

	if (period1.length < 6) {
		period1.push(999)
	}

	// console.log(period1)
	// console.log(dataContur1)

	let data = [
		{
			muladhara: dataContur1.physics.title.substring(0, 2),
			svadhistana: dataContur1.physics.title.substring(3, 5),
			manipura: dataContur2.emotion.title.substring(0, 2),
			anahata: dataContur2.emotion.title.substring(3, 5),
			vishudha: dataContur3.intellect.title.substring(0, 2),
			ajna: dataContur3.intellect.title.substring(3, 5),
			tipologiya: r2,
			emotion: dataContur2.emotion.name,
			phisic: dataContur1.physics.name,
			intellect: dataContur3.intellect.name,
			rodzdacha1: r1,
			rodzdacha2: r3,
			karmazadacha1: p1,
			karmazadacha2: p3,
			t11: period1[0],
			t12: period2[0],
			t21: period1[1],
			t22: period2[1],
			t31: period1[2],
			t32: period2[2],
			t41: period1[3],
			t42: period2[3],
			t51: period1[4],
			t52: period2[4],
			t61: period1[5],
			t62: period2[5],
			inj:
				parseInt(dataContur1.physics.title.substring(0, 2)) +
				parseInt(dataContur3.intellect.title.substring(0, 2)) +
				parseInt(dataContur3.intellect.title.substring(3, 5)),
			jan:
				parseInt(dataContur1.physics.title.substring(3, 5)) +
				parseInt(dataContur2.emotion.title.substring(0, 2)) +
				parseInt(dataContur2.emotion.title.substring(3, 5)),
			hoschu: Math.abs(
				parseInt(dataContur1.physics.title.substring(0, 2)) +
					parseInt(dataContur3.intellect.title.substring(0, 2)) +
					parseInt(dataContur3.intellect.title.substring(3, 5)) -
					(parseInt(dataContur1.physics.title.substring(3, 5)) +
						parseInt(dataContur2.emotion.title.substring(0, 2)) +
						parseInt(dataContur2.emotion.title.substring(3, 5)))
			),
			mogu: parseInt(dataContur1.physics.title.substring(0, 2)),
			sexpotencial:
				Math.abs(
					parseInt(dataContur1.physics.title.substring(0, 2)) +
						parseInt(dataContur3.intellect.title.substring(0, 2)) +
						parseInt(dataContur3.intellect.title.substring(3, 5)) -
						(parseInt(dataContur1.physics.title.substring(3, 5)) +
							parseInt(dataContur2.emotion.title.substring(0, 2)) +
							parseInt(dataContur2.emotion.title.substring(3, 5)))
				) * parseInt(dataContur1.physics.title.substring(0, 2)),

			potencialya: typesReact.filter((i) => {
				if (i.markers === conturMiddle3[0].b) {
					return i
				}
			})[0].i,

			potencialmi: typesReact.filter((i) => {
				if (i.markers === conturMiddle3[0].b) {
					return i
				}
			})[0].mi,
		},
	]

	// console.log(data)

	return data
}

export default TableData
