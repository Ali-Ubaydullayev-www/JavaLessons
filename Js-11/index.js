// const nums = [1, 2, 3, 4, 5, 5, 5];

// const filterFunc = (value, index, arr) => {
//   //   console.log(param1, 'param1');
//   //   console.log(param2, 'param2');
//   //   console.log(param3, 'param3');
// };

// const filtered = nums.filter((raqam) => raqam > 3);

// console.log(filtered, 'filtered');

// OBJECT

// const mashina = {
//   color: '#000',
//   model: 'Gentra',
// };

// console.log(mashina.model);
// console.log(mashina['model']);

// const myObj = {
//   name: 'John',
//   age: 30,
//   cars: [
//     { name: 'Ford', models: ['Fiesta', 'Focus', 'Mustang'] },
//     { name: 'BMW', models: ['320', 'X3', 'X5'] },
//     { name: 'Fiat', models: ['500', 'Panda'] },
//   ],
// };

// // console.log(myObj.cars[0].models[myObj.cars[0].models.length - 1]);
// console.log(myObj.cars[1].models[2]);

// const obj = {
//   name: 'Object',
//   kalit: 'kkkkk',
// };

// // console.log(obj, 'obj1');

// // object add / update
// obj.kalit = 'qiymat';

// obj['kalit2'] = 'qiymat2';

// console.log(obj, 'obj2');

// const mashina = {
//   color: '#000',
//   model: 'Gentra',
// };

// console.log(mashina, 'mashina');

// mashina['model'] = 'Malibu';

// let mashina = {
//   color: '#000',
//   model: 'Gentra',
//   balon: {
//     oldi: '14',
//     orqa: '16',
//   },
// };

// mashina.model = '';

// mashina = '';

// console.log(mashina);

// Object.keys()

// // ['color', 'model', 'year', 'kalit'];
// const kalitlari = Object.keys(mashina);

// if (kalitlari.includes('kalit')) {
//   console.log('kalit obj obyektda mavjud');
// } else {
//   console.log('kalit obj obyektda mavjud emas');
// }

// // Object.values()
// const qiymatlari = Object.values(mashina);
// console.log(qiymatlari, 'qiymatlari');

// Object.entries()

let mashina = {
  color: '#000',
  model: 'Gentra',
  year: 2021,
  kalit: 'qiymat',
  massiv: [1, 2, 3, 4, 4, 5],
  obj: {
    key: 'valye',
    key: 'valye',
  },
};

// const entries2 = Object.entries(mashina);

// const objWithNew = new Object() //
// const arrWithNew = new Array() //  []

// const dummyArrayData = [...new Array(10)];

// console.log(dummyArrayData, 'dummyArrayData');

// console.log(objWithNew, 'objWithNew');

const ar = [
  {
    id: 1,
    year: 2011,
    name: 'Eshmat',
    status: 'student',
    key: 'test',
  },
  {
    id: 2,
    year: 2012,
    name: 'Toshmat',
    status: 'student',
    key: 'test',
  },
  {
    id: 3,
    year: 2010,
    name: 'Eshmat akasi',
    status: 'student',
    key: 'test',
  },
];

const filterAdvanced = (key, value) => {
  key = 'name';
  value = 'Eshmat';

  const result = [];

  ar.map( (val) => {
    if (val['name'].includes('Eshmat')) {
      for (const kalit in val) {
        if (kalit === key) {
          result.push(val);
        }
      }
    }
  });

  return result;
};

// console.log(filterAdvanced('name', 'Eshmat'));

// const sortByYear = () =>
//   ar.sort((birinchi, ikkinchi) => birinchi.year - ikkinchi.year);

// console.log(sortByYear());

// const onDelete = (id) => ar.filter((value) => value.id !== id);

// console.log(onDelete(3));

// for (const kalit in mashina) {
//   console.log(kalit, 'kalit');
// }
