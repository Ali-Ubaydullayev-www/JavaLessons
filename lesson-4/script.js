// console.log('1-misol')
// var a=6;
// console.log('a='+a)
// console.log('p='+(a*4))

// console.log('2-misol')
// console.log('S='+(a*a))

// console.log('3-misol')
// var a1=2;
// var a2=3;
// console.log('S='+(a1*a2))
// console.log('p='+(2*(a1+a2)))

// console.log('4-misol')
// var d=5;
// console.log('L='+(3.14*d))

// console.log('5-misol')
// var a3=4;
// console.log('V='+(a3*a3*a3))
// console.log('S='+(6*a3*a3))

// console.log('6-misol')
// var b1=3;
// var b2=5;
// var b3=7;
// console.log('V='+(b1*b2*b3))
// console.log('S='+(2*(b1*b2+b2*b3+b1+b3)))

// console.log('7-misol')
// var r=5;
// console.log('L='+(2*3.14*r))
// console.log('S='+(3.14*r*r))

// console.log('8-9-misol')
// var son1=2;
// var son2=8;
// console.log("O'rta arifmetigi: "+(son1+son2)/2)
// console.log("O'rta geometrigi: "+(son1*son2)**0.5)

// console.log('10-11-misol')
// console.log('a+b='+(son1+son2))
// console.log('a*b='+(son1*son2))
// console.log('a^2='+(son1*son1))
// console.log('b^2='+(son2*son2))
// console.log('|a|='+Math.abs(son1))
// console.log('|b|='+Math.abs(son2))

// console.log('12-misol')
// var katet1=9
// var katet2=12
// console.log('c='+(katet1*katet1+katet2*katet2)**0.5)
// console.log('P='+((katet1*katet1+katet2*katet2)**0.5+katet1+katet2))

// console.log('13-misol')
// var radius1=5
// var radius2=8
// console.log('S1='+(3.14*radius1*radius1))
// console.log('S2='+(3.14*radius2*radius2))
// console.log('S3='+(3.14*(radius1*radius1-radius2*radius2)))

// console.log('14-misol')
// var l=6.28
// console.log('R='+(l/(2*3.14)))
// console.log('S='+(l*l/(4*3.14)))

// console.log('15-misol')
// var s=3.14
// console.log('d='+(2*((s/3.14)**0.5))) 
// console.log('R='+((s/3.14)**0.5))

// console.log('16-misol')
// var x1=45
// var x2=10
// console.log('|x1-x2|='+(x1>x2?(x1-x2):(x2-x1)))

// console.log('17-18-misol')
// var xa=4
// var ya=5
// var xb=3
// var yb=7
// var xc=9
// var yc=6
// console.log('AC='+((xa-xc)*(xa-xc)+(ya-yc)*(ya-yc))**0.5)
// console.log('BC='+((xb-xc)*(xb-xc)+(yb-yc)*(yb-yc))**0.5)
// console.log('AC+BC='+(((xa-xc)*(xa-xc)+(ya-yc)*(ya-yc))**0.5+((xb-xc)*(xb-xc)+(yb-yc)*(yb-yc))**0.5))
// console.log('AC*BC='+(((xa-xc)*(xa-xc)+(ya-yc)*(ya-yc))**0.5*((xb-xc)*(xb-xc)+(yb-yc)*(yb-yc))**0.5))

// console.log('19-misol')
// var y1=35
// var y2=22
// console.log('Perimetri: '+2*(Math.abs(x1-x2)+Math.abs(y1-y2)))
// console.log('Yuzasi: '+(Math.abs(x1-x2)*Math.abs(y1-y2)))

// console.log('20-misol')
// console.log("Ikki nuqta orasidagi masofa: "+((x2-x1)**2+(y2-y1)**2)**0.5)

// console.log('21-misol')
// var x3=12
// var y3=7
// var peri=((x1-x2)**2+(y1-y2)**2)**0.5+((x3-x2)**2+(y3-y2)**2)**0.5+((x1-x3)**2+(y1-y3)**2)**0.5
// peri=peri/2
// console.log('3burchakning perimetri: '+peri)
// console.log('3burchakning yuzi: '+(peri*(peri-(x1-x2)**2+(y1-y2)**2)*(peri-((x3-x2)**2+(y3-y2)**2)**0.5*(peri-((x1-x3)**2+(y1-y3)**2)**0.5)))**0.5)

// console.log('22-misol')
// var son2Temp=son2
// son2=son1
// son1=son2Temp
// console.log(son1, son2)

// console.log('23-misol')
// var son1=2
// var son2=8
// var son3=10
// var son1Temp=son1
// son1=son2
// son2=son3
// son3=son1Temp
// console.log(son1,son2,son3)




// console.log(parseInt(3.76));    //3
// console.log(Math.ceil(3.12));   //4
// console.log(Math.floor(3.62));  //3
// console.log(Math.abs(-88));


// function round (a){
//     var qoldiq = a- parseInt(a);
//     qoldiq>=0.5 && console.log(parseInt(a)+1);
//     qoldiq<0.5 && console.log(parseInt(a));
// }
// round(4.66);

// function ceil (a){
//     console.log(parseInt(a)+1);
//     return parseInt(a+1);
// }
// ceil(7.23);

// function floor (a) {
//     console.log(parseInt(a));
//     return parseInt(a);
// }
// floor(5.89);

// function abs (a) {
//     a>=0 && console.log(a);
//     a<0 && console.log(-a);
// }

// abs(-88);

// let sqrt = function (a){
//     console.log(a**0.5);
//     return a**0.5;
// }
// sqrt(25);

// //arrow function
// const cbrt = (a) => {
//     console.log(a**(1/3));
//     return a**(1/3);
// }
// cbrt(27);

// function pow(a, b) {
//     console.log(a**b);
//     return a**b;
// }
// pow(3,4);

// //2-misol
// var weCount = 0;
// var aCount = 0;
// var bCount = 0;

// let text = 'welcome webbrain';
// text=text.repeat(5);

// function weSanagich(text){
//     var index = text.indexOf("we"); 
//     weCount++;
//     text=text.slice(index+2);
//     text.includes('we') && weSanagich(text);
// }
// weSanagich(text);

// function a_Sanagich(text){
//     var index = text.indexOf("a"); 
//     aCount++;
//     text=text.slice(index+1);
//     text.includes('a') && a_Sanagich(text);
// }
// a_Sanagich(text);

// function b_Sanagich(text){
//     var index = text.indexOf("b"); 
//     bCount++;
//     text=text.slice(index+1);
//     text.includes('b') && b_Sanagich(text);
// }
// b_Sanagich(text);

// console.log(`we: ${weCount}ta 
// a: ${aCount}ta
// b: ${bCount}ta`);