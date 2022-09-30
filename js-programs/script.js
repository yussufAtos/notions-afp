
//***************************** var let const **************************************//

// var myVar;
// console.log(myVar);//==>undefined

//const name ;//==>Missing initializer in const declaration

// var name="mamado";
// var name ="toto";//==> meme nom de variable et aucune erreur affiché
//avec let 
// let name="mamado";
// let name="toto";//==>Identifier 'name' has already been declared

// const nom='nom';
// nom ='jean'//==>Uncaught TypeError: Assignment to constant variable.

// const user ={
// 	name:'jean'
// };

// user={
// 	name:'marie'
// };//==>Uncaught TypeError: Assignment to constant variable.

//user.name='marie'//==>no problem

//************************************* Les Types ********************************************//


// typeof true; // "boolean"
// const booleen = false;
// typeof booleen; // "boolean"

// const name = "Hello World";
// const age=25;
// const num=55.5;
// const hobbies=null;
// let actif=true;
// let action;
// let sym= Symbol();


// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof num);
// console.log(typeof hobbies);
// console.log(typeof action);
// console.log(typeof sym);
// console.log(typeof actif);

// //objets litteral

// const city={
// 	name:'Paris',
// 	state:'France'
// }

// const greetings =function(){
// 	console.log("Hellooo");
// }
// const toDay=new Date();
// const arr=[1,2,3];


// console.log(typeof city);
// console.log(typeof greetings);//==>function
// console.log(typeof toDay);//==>object
// console.log(typeof arr);

//*************************************** chaînes de caractères *****************************************//


// const a = "HELLO";
// console.log(typeof a);
// console.log(a[0]);

// const b = new String("HELLO");
// console.log(b);





// 'a'.length === 1; // true
// '𝌆'.length === 2; // true
// "\u0061" === "a"; // true
// console.log('\uD83D\uDE00');

//Les chaînes de caractères sont des primitifs en JavaScript

//*****Les littéraux de modèle

// var utilisateur = {nom: 'Youssef Agdam'};
// console.log(`Bienvenue, ${utilisateur.nom.toUpperCase()}.`);

// const fatigue = true;
// const action = 'dormir';
// const etatDeFatigue =   `Jean est ${fatigue ? `fatigué et veut ${action} !` : `en pleine forme !`}`;
// console.log(etatDeFatigue); // Jean est fatigué et veut dormir !"

//*****Les méthodes disponibles sur les chaînes de caractères

// les primitives, et donc notamment les string sont immuables, il est impossible de les modifier.
//La conséquence est que toutes les méthodes utilisées sur 
//des chaînes de caractères renverront une nouvelle chaîne de caractères sans modifier la chaîne de caractères originelle.
//Appeler une méthode sur une chaîne de caractères entraîne la création d'un objet temporaire String par
// l'interpréteur JavaScript sur lequel se trouve la méthode

// const str='petit koAla';
// console.log(str.charAt(0));//p
// console.log(str.endsWith('la'));//true
// console.log(str.startsWith('pet'));//true
// console.log(str.indexOf('koa'));//true
// console.log(str.replace('koa','b'));//true
// //immutable
// str.replace('koa','coco');
// console.log(str);//str change pas 
// console.log(str.search('ko'));
// console.log(str.slice(0,2));
// console.log(str.slice(0,-1));//petit koal
// console.log(str.slice(0,-2));//petit koa
// console.log(str.trim());
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// const str2='un,deux,trois';
// console.log(str2.split(','));//["un", "deux", "trois"]
// 'Bonjour'.concat(' !', ' ', 'Comment ', 'ça va ?'); // Bonjour ! Comment ça va ?
// const str3='Je ne copierai plus sur mon voisin. '
// console.log(str3.repeat(5));
// console.log('Bonjour'.charCodeAt(0)); // 66 le code UTF-16 du caractère

//****les expressions régulières


//*************************************** Le hoisting    *************************************************//

// a = 2;
// let a;
// console.log(a); // ==>Uncaught ReferenceError: Cannot access 'a' before initialization

// a = 2;
// var a;
// console.log(a);

// console.log(b); // undefined car l’initialisation se fait lors de la remontée
// var b = 1; // assignation
// console.log(b); // 1

// console.log(a); // Uncaught ReferenceError: a is not defined
// let a = 2;



//**** Les opérateurs ****//

//***************************************     Les conversions     *****************************************//

// let a=1+"Hello";
// let b=true+"Hello";
// let c=true+"Hello";
// let d=true+1;
// let e=false+2;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let f=Number(true);
// console.log(f);//==>1

// let g=Number("hello World");
// console.log(g);//==>NaN

// let h=1;
// let i=undefined;
// console.log(h+i);//==>NaN
// console.log(Number(i));//==>NaN


// console.log(String(undefined)+"hello");//==> undefinedhello
// console.log(String(null)+"hello");//==>nullhello
// console.log(Number(null));//==>0

//console.log(2*'3');//==>6

//***************************************    comparaison  *****************************************//

// 1  La comparaison d'égalité faible == et !=
//la comparaison d'égalité faible entraîne une conversion implicite de type lorsque c'est possible.
//Un algorithme va essayer de convertir les deux côté dans un type commun 

// "1" == 1; // true
// "1" == true; // true
// null == undefined; // true
// 0  == false; // true 
// 1 != '1'; // false
// 1 == [1]; // true
// 1 == [0]; // false
// "" == false; // true
// "" == 0; // true
// 1,2 == [1, 2]; // true


// 2  La comparaison d'égalité stricte.=== et !==
// La comparaison à égalité stricte (=== et !==) est très simple à prédire, 
// pas de surprise car aucune conversion implicite n'est effectuée :

// undefined === undefined; // true
// null === null; // true
// true === true; // true
// false === false; // true
// 'test' === 'test'; // true
// 0 === 0; // true
// 0 === false; // false
// "" === false; // false
// '1' === 1; // false
// 1,2 === [1, 2]; // false
//"" === 0   // false

// Les objets distincts ne sont jamais égaux :
// {a: 1} === {a: 1}; // false
// [1] === [1]; // false


//3  Le ET logique (&&)

// true && true; // true
// 2 === 2 && 3 === 3; // true
// false && true; // false
// true && false; // false

// undefined, 0, '' et NaN sont tous convertis en false.
//lorsque les deux éléments ne s'évaluent pas en booléen (true ou false) il faut utiliser la règle suivante : si 
//l'élément de gauche peut être converti 
//en false alors il sera retourné. Dans tous les autres cas le deuxième élément sera retourné

// console.log('1' && '2');// "2"
// console.log(0 && '2'); //0
// console.log('' && '2');//''
// console.log(false && '2');//false
// console.log(undefined && '2');//undefined
// console.log(0  && '2');//0
// console.log(NaN  && '2');//NaN
// console.log(null   && '2');//null

//Ici les éléments de gauche se convertissent implicitement en false, 
//les éléments de droite ne sont donc même pas évalués, on retourne la valeur de 
//l'élément de gauche.

//4 Le OU logique (||)

// true || true ; // true
// true || false ; // true
// false || true ; // true
// false || false ; // false

// Mais lorsque les deux éléments ne s'évaluent pas en booléen (true ou false) il faut utiliser la règle suivante : 
// si l'élément de gauche peut 
// être converti en true alors il sera retourné. Dans tous les autres cas le deuxième élément sera retourné :

// "1" || nimporteQuoi; // "1"
// "21312" || nimporteQuoi; // "21312"
// [] || nimporteQuoi; // []
// {} || nimporteQuoi; // {}
// 42 || nimporteQuoi; // 42

// false || 1; // 1
// undefined || 2; // 2
// 0 || 3; // 3
// '' || 4; // 4
// NaN || 5; // 5
// null || 6; // 6
// null || null; // null

//5 Le NON logique (!)

//Le non logique renvoie false si l'élément peut être converti en true sinon true.



//***************************************    == vs ===  *****************************************//

//Les primitives sont comparées par valeur



// console.log(1==true);//==>true
// console.log(2==true);//==>false
// console.log(0==false);//==>true

// console.log("true"==true);//false==>problem that's why the === is recommended
// console.log(1=="1");//==>true
//console.log(1==="1");//==>false

// console.log(undefined == false);//==>false

//console.log(3<2<1);//==>true
// 3<2 ==>false  false ==>0  0<1 ==>true

// let a=1;
// console.log(!a);//==>false
// console.log(!true);//==>false
// console.log(!false);//==>true

// console.log(true && true);//==>true
// console.log(true && false);//==>false
// console.log(false && false);//==>false

// console.log(true || true);//==>true
// console.log(true || false);//==>true
// console.log(false || false);//==>false

//**** Les objets

//Un objet est une collection de propriétés.
//Les objets sont copiés par référence
//Les objets sont comparés par référence
//Une référence à un objet est son adresse dans la mémoire.

//1

//obj et obj2 contiennent donc la même référence vers le même objet.

// const obj = {a: 1};
// const obj2 = obj;
// obj2.a=3;
// console.log( obj); 

//2

// const obj = {a: 1};
// const obj2 = obj;
// console.log(obj === obj2); // true
// const obj3 = {a: 1};
// console.log(obj === obj3); // false
// // Même chose ici :
// console.log( {} === {}); // false



//****************************** Les notions de valeur et de référence **************************************//


//*** 1 copier par valeur
// let a=5;
// let b=a;//nous copions la valeur contenu dans a dans un nouvel emplacement mémoire pour b.
// b=10;
// console.log(a ,b);

// let a = 'bon';
// let b = 'jour';
// let c = a + b;
// console.log(c); // "bonjour"
// a = 'test';
// console.log(c); // "bonjour"

//*** 2 copier par reference

// let a={
// 	value:15
// }
// let b=a;//a et b contiennent donc la même référence vers le même objet.

// b.value=55;
// console.log(a);
// console.log(b);

/*const obj = {a: 1};
const obj2 = obj;
console.log(obj === obj2); // true
const obj3 = {a: 1};
console.log(obj === obj3); // false
// Même chose ici :
console.log( {} === {}); // false*/

//***************************************        Les objets        *****************************************//


// const terre={
// 	population:7e7,
// 	satellite :"lune",
// 	temperatue:{
// 		min:-70,
// 		max:60
// 	},
// 	isOld:false,
// 	// getTemperatue:function(){
// 	// 	console.log("il fait froid");
// 	// }
// 	//es6
// 	getTemperatue(){
// 		console.log("il fait froid");
// 	}

// };

// console.log(terre['population']);//==>obj['prop'] et obj.prop sont des notations qui ont le même effet
// console.log(terre['temperatue']);

// const copy=terre;
// copy.isOld=true;
// console.log(terre);

// console.log(terre.getTemperatue);//==>ƒ (){console.log("il fait froid");}
// terre.getTemperatue();

//***es6

// const population=7e7;
// const satellite='lune';
// const temperatue={
// 		min:-70,
// 		max:60
// 	};
// const newproperty='new val';
// const terre={
// population,
// satellite,
// temperatue,
// isOld:false
// }	;
// terre.population=12;
// terre[newproperty]='newproperty'
// console.log(terre);

//***La décomposition d'objet
//const population=50;

// const terre={
// 	population:7e7,
// 	satellite :"lune",
// 	temperatue:{
// 		min:-70,
// 		max:60
// 	},
// 	isOld:false,
// }
// const {population,satellite,temperatue}=terre;
// console.log(population,satellite,temperatue);

// const {population:populationTerre,satellite,temperatue}=terre;
// console.log(population,populationTerre,satellite,temperatue);//==>
//50 70000000 "lune" {min: -70, max: 60}

//***rest operator
// const {temperatue,...rest}=terre;
// console.log(rest);

// const {a, b, ...monReste } = {a: 1, b: 2, c: 3, d: 4};
// console.log(a); // 1
// console.log(b); // 2
// console.log(monReste); // {c: 3, d: 4}
//L'opérateur Rest ( … ) doit toujours être positionné à la fin de la décomposition

//***Tester l'existence et la valeur d'une propriété

// if("population" in terre){
// console.log("OK");
// }
// else{
// console.log("KO");
// }

// if(terre.hasOwnProperty("population")){
// console.log("OK");
// }
// else{
// console.log("KO");
// }

//***Supprimer ou écarter des propriétés
// const terre={
// 	population:7e7,
// 	satellite :"lune",
// 	temperatue:{
// 		min:-70,
// 		max:60
// 	},
// 	isOld:false
// }

//delete terre.satellite;
// terre.satellite=null;
// console.log(terre);

//***Fusionner des objets

// const terre1={
// 	population:7e7,
// 	satellite :"lune",
// 	}

// const terre2={
// 	temperatue:{
// 		min:-70,
// 		max:60
// 	},
// 	isOld:false
// 	}
//  1 
//const terre=Object.assign({},terre1,terre2);

//2

// const terre={...terre1 ,...terre2};
// console.log(terre);
// //for table
// const froid = ['automne', 'hiver'];
// const chaud = ['printemps', 'été'];
// const saisons = [...froid, ...chaud];
// console.log(saisons); 

//*** Comparer des objets

// const a={test:"123"};
// const b={test:"123"};
// const c=a;

// console.log(a===b);//==>false
// console.log(a==b); //==>false

// console.log({} === {});//==>false


// stack                     heap

// const a @ref1            @ref1 {test:"123"}
// const b @ref2			      @ref2 {test:"123"}
// const c @ref1

//*** Itérer sur des objets
// const obj={
// 	a:'un',
// 	b:'deux',
// 	c:'trois'
// }

// for(prop in obj){
// 	console.log(prop);
// 	console.log(obj[prop]);
// }

// const keys =Object.keys(obj);//==>["a", "b", "c"]
// const values =Object.values(obj);//==>["un", "deux", "trois"]
// const entries =Object.entries(obj);//==>
// console.log(keys);
// console.log(values);
// console.log(entries);//==>
// [Array(2), Array(2), Array(2)]
// 0: (2) ["a", "un"]
// 1: (2) ["b", "deux"]
// 2: (2) ["c", "trois"]


//***Le format JSON

//js
// const obj={
// 	nom:'jean',
// 	prenom:'miki',
// 	age:21
// }
//json

// {
// 	"nom":'jean',
// 	"prenom":'jean',
// 	"prenom":'jean',
// }

// console.log(JSON.stringify(obj));
// console.log(JSON.parse('{"nom":"jean","prenom":"miki","age":25}'));

// const str=JSON.stringify(obj);
// console.log(typeof str);//==>string

// console.log(document);

//*****Copier un objet*****//

// const a={
// 	name:'jean',
// 	foo:{
// 		bar:'zoo'
// 	}

// }
//shalow
// const b=Object.assign({},a);
// const c={...a};
//deep
// const b = JSON.parse(JSON.stringify(a));
// b.name='toto';
// b.foo.bar=123;
// console.log(a);
// console.log(b);

//*****defineProperty

//const obj={key:"value"};
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// const descrip =Object.getOwnPropertyDescriptor(obj,'key');
// console.log(descrip);

//read only with defineProperty
//Par défaut, tous les attributs des descripteurs des propriétés d'objet sont à true


// Object.defineProperty(obj,'key',
//   {
//     writable:false,
//     enumerable:false
//   });

// obj.key='value2';//read only

// for(let key in obj){
//    console.log(key);
// }
       
//**** getters && setters
//Une propriété d'objet est soit de type données soit de type accesseur
//1
// const user ={
//   firstname:'tintin',
//   lastname:'milou',
//   fullname:function(){
//     return this.firstname+" "+this.lastname;
//   }
// };
// console.log(user.fullname());//

//2

// const user ={
//   firstname:'tintin',
//   lastname:'milou',
//   get fullname(){
//         return this.firstname+" "+this.lastname;
//   }
// ,
//   set fullname(value){
//        [this.firstname,this.lastname]=value.split(' ');
//   }
// };

// console.log(user.fullname);

// user.fullname='ali baba'
// console.log(user.fullname);


//****  POO && constructeurs
//La programmation orientée objet (POO) est un paradigme de programmation 
//qui utilise des objets comme modèles pour décrire le monde réel.
//Les constructeurs sont des fonctions permettant de créer des objets.
//les fonctions fléchées ne peuvent pas être des fonctions constructeurs.

// const MonConstructeur = (prenom) => {
//   this.prenom = prenom;
// };

// const jean = new MonConstructeur('Jean'); // Error : MonConstructeur is not a constructor 

//L'intérêt principal d'un constructeur est de ne pas se répéter : au lieu de créer manuellement plusieurs 
//objets similaires, un constructeur permet de réutiliser le code pour créer des objets du même type sans se répéter.
//exemple==>

// const jean = {
//   this.nom = "Jean";
//   this.prenom = "Dupont";
//   this.age = 32;
//   this.dateCreation = new Date();
//   this.admin = false;
// };
// const paul = {
//   this.nom = "Paul";
//   this.prenom = "Roche";
//   this.age = 41;
//   this.dateCreation = new Date();
//   this.admin = false;
// };

//==>
// function Utilisateur(nom, prenom, age) {
//   this.nom = nom;
//   this.prenom = prenom;
//   this.age = age;
//   this.dateCreation = new Date();
//   this.admin = false;
// }

// const jean = new Utilisateur("Jean", "Dupont", 32);
// const paul = new Utilisateur("Paul", "Roche", 41);

// function Car(brand){
//   this.brand=brand;
//   this.roue=4;
//   this.hasEngine=true;
//   this.start=()=>{
//     console.log('start ...')
//   }

//   //or

//   //   this.start=function(){
//   //   console.log('start ...')
//   // }

// }

// const bmw=new Car('BMW');
// bmw.start();

//*****prototypes
//Le JavaScript est un langage fondé sur l'héritage prototypal.
//Tout objet en JavaScript a un prototype interne [[ Prototype ]]
//Un objet ne peut avoir qu'un seul [[ Prototype ]]
//La chaîne des prototypes permet de partager une propriété entre plusieurs objets

//***** 

//***** Le pattern constructeur et la propriété prototype

const Vehicule={
  hasEngine:true,
  start(){
    console.log('start...');
  }
}

// function Car(brand){
//   this.brand=brand;
// }
//definir le prototype manuellement

// const car =new Car('volvo');
// car._proto_=Vehicule;
// console.log(car);

//definir le prototype dynamiquement 

//Car.prototype=Vehicule;
// const car =new Car('volvo');//new definit egalement le prototype de car 
// console.log(car);

// par defaut car._proto_.constructor = Car

// const car2 = new car._proto_.constructor('golf');
// console.log(car2);

// definir une methode dans le proto

function Car(brand){
  this.brand=brand;
}
// Car.prototype.start=function(){
//    console.log('start...');
// }



function Person(name){
  this.name=name;
}

const car =new Car('volvo');

console.log(car);

console.log(Car._proto_);


const person =new Person('Ali');

person._proto_=Vehicule;

console.log(person);

const foo={};

console.log(foo);


console.log(person.toString());



//**** object native Object
//Les objets natifs en JavaScript sont en fait des fonctions constructeurs natives
//Lorsque vous faites {} cela équivaut à faire new Object().
//Tout objet a sur sa chaîne des prototypes Object.prototype.
//Les méthodes getPrototypeOf() et setPrototypeOf()  sont  recommandées

//**** API d'Object




//***************************************      Les fonctions       *****************************************//



//declaration

// function func() {
// console.log("helloooo");
// }
// func();

//expression

// const fn=function func() {
// console.log("helloooo");
// }
// fn();

//anonyme

// const fn=function() {
// console.log("helloooo");
// }
// fn();

//Paramètres, arguments

// function func(param) {
//   console.log(param.toUpperCase());
// }
// func("my param");

// function func(param) {
// if(param){
//   console.log(param.toUpperCase());
// }

// }
// func("my param");

// function func(param) {
// param=param ||'Defaults';
// if(param){
//   console.log(param.toUpperCase());
// }

// }
// func();//==>DEFAULTS

// function func(param='Defaults') {

// if(param){
//   console.log(param.toUpperCase());
// }

// }
// func();//==>DEFAULTS
// func("my param");//==>MY PARAM

//l'opérateur Rest

// function add() {
// console.log(arguments);//==>Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// console.log(arguments[0]);//==>1
// }
// add(1,2,3,4) ;


// function add() {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
// console.log(result);
// }
// add(1,2,3,4) ;

// function add(...numbers) {
//   let result = 0;
//   console.log(numbers);
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   console.log(result);//==>10

// }
// add(1,2,3,4) ;

//Valeur de retour

 //    function operation(oper, ...numbers) {
 //      let result = 0;
 //      if (oper === "+") {
 //        for (let i = 0; i < numbers.length; i++) {
 //          result += numbers[i];
 //        }
 //      }

 //      console.log(result); //==>10
 //      return result;
 //    }
 // const tot=operation('+',1, 2, 3, 4);
 //  console.log(tot); //==>10

  //La chaine de portée


  //Le mot-clé this
  
  //1  console.log(this); 

  //2
  // function  func() {
  //     console.log(this); 
  // }
  // func(); 

  //3
  // console.log(window.func); 
  // window.func();

  //4
//   const obj={
//     name:'jean',
//     func(){
//        console.log(this); 
//     }
//   }

// obj.func();////==>{name: "jean", func: ƒ}

//5
// const obj={
//     name:'jean',
//     func(){
//        console.log(this); 
//     }
//   }

//  function  func2(cb) {
//     cb();
//   }

//  func2(obj.func) ;


// "use strict"

// "use strict" 

//   function  func() {
//       console.log(this); 
//   }
//   func(); //==>undefined

//   const obj={
//     name:'jean',
//     func(){
//        console.log(this); 
//     }
//   }

//  function  func2(cb) {
//     cb();
//   }

//  func2(obj.func) ;//==>undefined

//call  apply  bind
//1
// const b = {
//     foo: 'bar',
//     fn() {
//         function c() {
//             console.log(this);
//         }
//         c()//==>window
//         //c.call(this)//==>{foo: "bar", fn: ƒ}
//     }
// }
// b.fn();
//2

// const a={
//   foo:'not bar'
// }

// const b = {
//     foo: 'bar',
//     fn() {
//         function c() {
//             console.log(this);
//         }
//       c.call(a)//==>{foo: "not bar"}
//     }
// }
// b.fn();


// const b={
//   name:'jean',
//   lastName:'louis'
// }

// function bonjou(){
//   console.log(`bonjour:${this.name+this.lastName}`);
// }
// bonjou.call(b);

// const b={
//   name:'jean',
//   lastName:'louis'
// }

// function bonjour(lang){
//   if(lang==='fr'){
//  console.log(`bonjour:${this.name+this.lastName}`);
//   }
//   else{
//      console.log(`hello:${this.name+this.lastName}`);
//   }
 
// }
// bonjour.call(b,'en');
// bonjour.call(b,'fr');
// bonjour.apply(b,['fr']);
// const c=bonjour.bind(b);
// c('en');

//Les fonctions fléchées      
// const a=param=>{
//  console.log(param);
// }
// a('HELLO');

// const a=(param1,param2)=>{
//  console.log(param1);
//   console.log(param2);
// }
// a('HELLO','HI');


// const a=(param1,param2)=>param1+param2;
// console.log(a(5,6));


 // const a=(b,c)=>({
 //  b,
 //  c,
 //  tot:b+c
 // })
 // console.log(a(5,6));//==>script.js:658 {b: 5, c: 6, tot: 11}

 //this
 //1
// const a = () => {
//     console.log(this);
// }
// const b = {
//     foo: 'bar'
// };
// a.call(b);

//2



// const a = {
//     foo: 'bar',
//     fn(){
//       console.log(this);
//     }
// };
// a.fn()//==> {foo: "bar", fn: ƒ}

// const a = {
//     foo: 'bar',
//     fn:()=>{
//       console.log(this);
//     }
// };
// a.fn()//==>window

// const a = {
//     foo: 'bar',
//     fn() {
//         const fn2 = () => {
//             console.log(this);
//         };
//        fn2();
           
//     }
// };
// a.fn();// ==> {foo: "bar", fn: ƒ}

//***Les fonctions de rappel (callback)

//Une fonction de rappel (ou callback) 
//est une fonction passée en paramètre d'une autre fonction et qui sera exécutée par cette dernière
//Il est possible de passer un ou plusieurs argument(s) à une fonction de rappel

//1

// const cb=()=>{
//    console.log("cb");
// }

// function fn(a,f){
//   console.log("a : ",a);
//   f();
// }

// fn('je suis a ',cb);

//2

// const cb=(b,c)=>{
//    console.log("cb",b,c);
// }

// function fn(a,f){
//   console.log("a : ",a);
//   const b=5;
//   const c=3;
//   f(b,c);
// }

// fn('je suis a ',cb);

//3

// function fn(a,f){
//   f(a);
// }
// fn('je suis a ',(p)=>{console.log("p : ",p);});

//****Les fermetures (closures)

//Les fermetures (ou closures) fonctionnent parce que lors de l'exécution d'une fonction son 
//environnement lexical est conservé tant que la ou les fonctions 
//imbriquées n'ont pas terminé leur exécution, et ces fonctions peuvent y accéder grâce à la chaîne de portée

// function powerBy(pow){
//  return function(number){
//   return number ** pow;
//  }
// }
//  console.log(powerBy(2)(3));
//  const powerBy2=powerBy(2);
// console.log(powerBy2(3));

//var

// const a=()=>{
//   let arr=[];
//   for(var i=0;i<3 ;i++){
//     arr.push(function(){
//       console.log(i);
//     })
//   }
//   return arr;
// }
// const tab=a();
// tab[0]();
// tab[1]();
// tab[2]();
// 3 3 3

//let

// const a=()=>{
//   let arr=[];
//   for(let i=0;i<3 ;i++){
//     arr.push(function(){
//       console.log(i);
//     })
//   }
//   return arr;
// }
// const tab=a();
// tab[0]();
// tab[1]();
// tab[2]();

//0 1 2 






//***************************************     Les évènements       *****************************************//

// const sq =document.querySelector("div");
// //console.log(window);
// sq.onmouseover=()=>{
//   console.log("HELLO");
// }

// const bouton = document.querySelector("#mon-input");
// bouton.onclick = () => console.log("Coucou !");

//*************************************** Les tableaux 12/12/2020  ******************************************//


//****Affectation par décomposition de tableaux

// const tableau = [1, 2, 3, 4];
// const [a, b] = tableau;
// console.log(b); // 2

//Sauter un ou plusieurs éléments lors de l'affectation

// const tableau = [1, 2, 3, 4];
// const [, , a, b] = tableau;
// console.log(a); // 3
// console.log(b); // 4

//Inverser les valeurs de deux variables

// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a); // 2
// console.log(b); // 1

//*****l'opérateur Rest

//1

// const tableau = [1, 2, 3, 4];
// const [a, ...leReste] = tableau;
// console.log(a); // 1
// console.log(leReste); // [2, 3, 4]

//2

// const tableau = [1, 2, 3, 4];
// const [, , ...copie] = tableau;
// console.log(copie); // [3, 4]

//*****Ajouter des éléments à un tableau

//push

// const tableau = [1, 2, 3];
// tableau.push(4);
// console.log(tableau);
// tableau.push(5, 6);
// console.log(tableau);

//L'opérateur spread

// const tableau = [1, 2, 3];
// const copie = [0, ...tableau, 4];
// console.log(copie); // [0, 1, 2, 3, 4]

//unshift()

//1

// const tableau = [1, 2, 3];
// tableau.unshift(4);
// console.log(tableau); 

//2

// const tableau = [1, 2, 3];
// tableau.unshift(5, 6);
// console.log(tableau); // [5, 6, 1, 2, 3]

//3

// const tableau = [1, 2, 3];
// const retour = tableau.unshift(5, 6);
// console.log(retour); // 5


//splice

// La syntaxe est : splice(indexDeDépart, nbrASupprimer, élément1, élément2 …).
// Le premier paramètre est l'index de départ où la fonction splice() va ajouter et ou retirer des éléments.
// Le second paramètre permet de préciser le nombre d'éléments à supprimer.
// A partir du troisième paramètre, ce sont les éléments à ajouter dans l'ordre dans lequel ils sont passés.

// const tableau = [1, 2, 3];
// tableau.splice(1, 0, 3, 4);
// console.log(tableau); // [1, 3, 4, 2, 3]


//*****Supprimer des éléments dans un tableau

//shift

// const tableau = [1, 2, 3];
// tableau.shift();
// console.log(tableau); // [2, 3]

//pop

// const tableau = [1, 2, 3];
// tableau.pop();
// console.log(tableau); // [1, 2]

//Rest 

//1

// const tableau = [1, 2, 3, 4,5];
// const [, , ...copie] = tableau;
// console.log(copie); // [3, 4,5]

//2

// let tableau = [1, 2, 3, 4,5];
//  [, , ...tableau] = tableau;
// console.log(tableau); // [3, 4,5]

//splice

// let tableau = [1, 2, 3, 4,5];
// tableau.splice(2,2);
// console.log(tableau); //[1, 2, 5]

//****Trouver des éléments dans un tableau

//1

// const tableau = ['un', 'deux', 'trois','deux'];
// console.log(tableau.indexOf('deux'));//1
// console.log(tableau.indexOf('trois'));//2
// console.log(tableau.indexOf('quatre'));//-1

//2

// const tableau = [1, 42, 42, 3];
// tableau.indexOf(42); // 1
// tableau.indexOf(5); // -1

//includes
//ne peut être utilisée avec des objets en arguments car elle effectue une comparaison stricte et 
//ne peut prendre que des valeurs primitives en argument.

// const tableau = [1, 42, 42, 3];
// console.log(tableau.includes(42));//true

//rechercher tous les index d'un élément 

// const tableau = [1, 42, 42, 3,42];
// const indexes = [];
// let index = tableau.indexOf(42);
// while (index !== -1) {
//   indexes.push(index);
//   index = tableau.indexOf(42, index + 1);
// }
// console.log(indexes); // [1, 2]

//findIndex && find

//La méthode findIndex() renvoie l'index du premier élément 
//trouvé dans le tableau qui vérifie la condition testée par une fonction.

//1

// const tableau = [{name:'soleil'},{name:'terre'},{name:'lune'}];
// const elem = tableau.findIndex(el => el.name==='lune');
// console.log(elem); 

//2

// const tableau = [{name:'soleil'},{name:'terre'},{name:'lune'},{name:'lune'}];
// const index = tableau.findIndex(el => el.name==='lune');
// const elem = tableau.find(el => el.name==='lune');
// console.log(index); 
// console.log(elem); 


//*******Copier un tableau 
//shalow



// const tableau = [];
// const tableau2 = tableau;

//Les deux variables contiennent la même référence vers le même tableau
//Si on modifie la copie, le tableau original sera donc également modifié :

// tableau2.push(42);
// console.log(tableau); // [42]

//1 Copier un tableau avec l'opérateur spread 

// const tableau = [1, 2, 3];
// const tableau2 = [...tableau];
// tableau2.push(42);
// console.log(tableau); // [1, 2, 3]

// const tableau = [[1,2], {a: 1}];
// const tableau2 = [...tableau];
// tableau2[0].push(42);
// tableau2[1].a = 2;
// console.log(tableau); // [[1, 2, 42], {a: 2}]

//2 Copier un tableau avec la méthode slice()

//La méthode slice() renvoie un nouveau tableau, 
//contenant une copie superficielle d'une partie du tableau d'origine.
//La méthode peut prendre facultativement en premier paramètre 
//un index de début et en second un index de fin exclus.

// const tableau = [1, 2, 3];
// const tableau2 = tableau.slice();
// const tableau3 = tableau.slice(1, 2);
// console.log(tableau2); // [1, 2, 3]
// console.log(tableau3); // [2]

//3 Copier un tableau avec la méthode Array.from()

// const tableau = [1, 2, 3];
// const tableau2 = Array.from(tableau);
// tableau2.push(42);
// console.log(tableau); // [1, 2, 3]

//Copier un tableau en profondeur

// const tableau = [[1,2], {a: 1}];
// const tableau2 = JSON.parse(JSON.stringify(tableau));
// tableau2[0].push(42);
// tableau2[1].a = 2;
// console.log(tableau); // [[1,2], {a: 1}]

//******Fusionner des tableaux

//avec La méthode concat()  
//Cette méthode ne modifie pas les tableaux d'origine, elle crée un nouveau tableau et le renvoie :

// const tableau1 = [1, 2, 3];
// const tableau2 = [4, 5];
// const tableau3 = tableau1.concat(tableau2);
// console.log(tableau3); // [1, 2, 3, 4, 5]

//avec l'opérateur spread 
//==> recomandée

// const tableau1 = [1, 2, 3];
// const tableau2 = [4, 5];
// const tableau3 = [...tableau1, ...tableau2];
// console.log(tableau3); // [1, 2, 3, 4, 5]

//******Trier un tableau

//Sans fonction de rappel, les éléments du tableau sont convertis en chaînes de caractères 
//et ils sont triés selon les valeurs UTF-16 des caractères.

// const tableau = ['z', 'b', 'k', 'y', 'c'];
// tableau.sort();
// console.log(tableau); // ["b", "c", "k", "y", "z"]

// const tableau = ['Z', 'b', 'k', 'Y', 'c'];
// tableau.sort();
// console.log(tableau); // ["Y", "Z", "b", "c", "k"]

// const tableau = ['Château', 'élève', 'Baron', 'antre', 'étage', 'espiègle'];
// tableau.sort((a, b) => a.localeCompare(b, 'fr'));
// console.log(tableau); // ["antre", "Baron", "Château", "élève", "espiègle", "étage"]

//trier des nombres qui sont des chaînes de caractères

// const tableau = ["5", "2", "122", "2253"];
// tableau.sort((a, b) => a.localeCompare(b, undefined, {numeric: true}));
// console.log(tableau); // ["2", "5", "122", "2253"]

//Trier des tableaux avec une fonction de comparaison personnalisée

// const tableau = [{prix: 42}, {prix: 21}, {prix: 1}];
// tableau.sort((a, b) => a.prix - b.prix);
// console.log(tableau); // [{prix: 1}, {prix: 21}, {prix: 42}];


//Tris  avancés

// const tableau = ['Château', 'élève', 'Baron', 'antre', 'étage', 'espiègle'];
// tableau.sort(new Intl.Collator('fr').compare);
// console.log(tableau); // ["antre", "Baron", "Château", "élève", "espiègle", "étage"]

//la méthode reverse()

// const tableau = [1, 'chaise', 2, 'tabouret'];
// tableau.reverse();
// console.log(tableau); // ["tabouret", 2, "chaise", 1]

//*****Itérer sur un tableau

//boucle for

// const tableau = [1, 2, 3, 4, 5];
//   for (let i = 0; i < tableau.length; i++) {
//       console.log(`A l’index ${i} nous avons ${tableau[i]}`);
//   }

//for of

//Si vous n'avez pas besoin d'accéder à 
//l'index l'instruction for...of est très concise et efficace pour itérer sur un tableau
//Cette méthode fonctionne avec tous les itérables, donc avec les chaînes de caractères

 // for (let item of tableau) {
 //      console.log('item' ,item);
 //  }

//forEach

//Utilisez cette méthode lorsque vous voulez itérer sur un tableau en ayant accès aux index.
//N'utilisez pas cette méthode pour créer un nouveau tableau à partir d'un tableau, 
//forEach() retourne undefined 

//tableau.forEach((el, i) => console.log(`A l’index ${i} nous avons ${el}`));

//N'utilisez jamais for … in avec un tableau ! Cette instruction sert à énumérer les propriétés d'un objet itérable.


//******la programmation fonctionnelle

//old way

// const arr =['UN','DEUX','TROIS'];
// const a =[];
// arr.forEach(value=>a.push(value.toLowerCase()))
// console.log(a);

//map

//1

// const a =arr.map(value=>value);
// console.log(a===arr);//false

//2

// const arr =['UN','DEUX','TROIS'];
// const a =arr.map(value=>{return value.toLowerCase()});
// console.log(a);

// const arr =[{quantity:5,name:'pull'},{quantity:10,name:'chemise'}];
// const a =arr.map(value=>{return value.name});
// console.log(a);

//filter

// const arr =[{quantity:5,name:'pull'},{quantity:10,name:'chemise'},{quantity:15,name:'chemise'}];
// const a =arr.filter(value=>{return value.quantity>10});
// console.log(a);

// const arr =[{quantity:5,name:'PULL'},{quantity:10,name:'CHEMISE'},{quantity:15,name:'TSHIRT'}];
// const a =arr.filter(value=>{return value.quantity>5}).map(item=>{

//   return item.name.toLowerCase();
// });
// console.log(a);

// const arr =[{quantity:5,name:'PULL'},{quantity:10,name:'CHEMISE'},{quantity:15,name:'TSHIRT'}];
// const a =arr.filter(value=> value.quantity>5).map(item=> item.name.toLowerCase());
// console.log(a);

//reduce()

// const panier =[
// {quantity:1,
//   name:'chemise',
//   price:25

// },
// {quantity:2,
//   name:'pantalon',
//   price:70

// },
// {quantity:1,
//   name:'pull',
//   price:50

// }]
// const total =panier.reduce((acc, curr) => acc += curr.quantity * curr.price, 0); 
// console.log(total);
// const total =panier.reduce((acc, curr,index) => {
// console.log(`acc :${acc} ,curr : ${curr} ,index : ${index}`);
//  acc+=curr.price*curr.quantity;
//  return acc;
//  },0);
// console.log(total);

//reduceRight()

//La méthode reduceRight() fonctionne exactement pareil que 
//la méthode reduce() sauf que les itérations se font de la fin vers le début du tableau.

//every()
//La méthode every() permet d'effectuer un test pour l'ensemble des éléments d'un tableau.

// const tableau = [2, 5, 8, 4, 12];
// const resultat = tableau.every(el => el < 10);
// console.log(resultat); // false

//some()  
//La méthode some() permet de vérifier qu'au moins un élément d'un tableau passe un test.

// const tableau = [2, 5, 8, 4, 12];
// const resultat = tableau.some(el => el < 10);
// console.log(resultat); // true


//groupBy

// function groupBy(tableau, propriete){
//   return tableau.reduce( (acc, curr) => {
//     const cle = curr[propriete];
//     if(!acc[cle]){
//       acc[cle] = [];
//     }
//     acc[cle].push(curr);
//     return acc;
//   }, {});
// }
// const tableau = [{prix: 25, name: "chaussons"}, {prix: 42, name: "pantalon"}, {prix: 25, name: "polo"}];
// const objetsParPrix = groupBy(tableau, "prix");
// console.log(objetsParPrix); 


//***************************************     Le réseau     *****************************************//

//****requette Get 

//1

// const promesse =fetch('https://jsonplaceholder.typicode.com/users')
// promesse.then(response=>{
//   console.log(response);
//   const promesseUsers=response.json();
//   promesseUsers.then(users=>  console.log(users));
// }).catch(erreur=>{console.log(res);})

//2

// const promesse =fetch('https://jsonplaceholder.typicode.com/users')
// promesse.then(async response=>{
//   try{
// const users =await response.json();
// console.log(users);
//   }
//   catch(e){
// console.log(e);
//   }
// }).catch(erreur=>{console.log(res);})


// text

// const promesse =fetch('https://jsonplaceholder.typicode.com/users')
// promesse.then(async response=>{
//   try{
// const users =await response.text();
// console.log(users);
// console.log(JSON.parse(users));
//   }
//   catch(e){
// console.log(e);
//   }
// }).catch(erreur=>{console.log(res);})

//*****requette POST 

//exemple 1

// const user = {
//   name: "Paul Dupont"
// };
// const promesse =  fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(user)
// });
// promesse.then(async (response)=>{
//   try{
// console.log(response);
// const body =await response.json();
// console.log(body);
//   }
//   catch(e){
// console.log(e);
//   }
// });


//exemple 2


// const startTime = new Date().getTime();
// const timer = document.querySelector("#timer");
// const timerId = setInterval(() => refreshTimer(), 5);

// function refreshTimer() {
//   timer.innerText = `En cours depuis : ${new Date().getTime() -
//     startTime} millisecondes`;
// }

// function clearTimer() {
//   clearInterval(timerId);
//   timer.remove();
// }

// function afficherLeResultat(data) {
//   const ul = document.createElement("ul");
//   const li = document.createElement("li");
//   li.innerText = data.name;
//   li.classList.add("item");
//   ul.append(li);
//   document.querySelector("#app").append(ul);
// }
// function toggleLoader() {
//   const loader = document.querySelector(".loader");
//   loader.style.display = loader.display === "none" ? "" : "none";
// }
// async function envoyerRequete() {

// try {
//      const dataAenvoyer = {
//       name: "Paul Dupont"
//     };
//     const reponse = await fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(dataAenvoyer)
//     });
//     const json = await reponse.json();
//     afficherLeResultat(json);
// }
//  catch (err) {
//     console.error(err);
//   } finally {
//     toggleLoader();
//     clearTimer();
//   }
// }

//***** Les CORS

// const promesse =fetch('https://jsonplaceholder.typicode.com/users', {method: "delete",
//   headers: {
//    "x-test": 2
//   }}
// );
// promesse.then(async response=>{
//   try{
// const users =await response.json();
// console.log(users);
//   }
//   catch(e){
// console.log(e);
//   }
// }).catch(erreur=>{console.log(res);})

//**** Options avancées des requêtes fetch

// mode credentials cache redirect referer  referrerPolicy integrity keepalive
 
//   const user = {
//       name: "Paul Dupont"
//     };
// const promesse =fetch('https://jsonplaceholder.typicode.com/users', 
//   {
//     method: "POST",

//     headers: {
//     "Content-Type": "application/json"
//     },
//     body: JSON.stringify(user)
//   }
// );
// promesse.then(async response=>{
//   try{
// const users =await response.json();
// console.log(users);
//   }
//   catch(e){
// console.log(e);
//   }
// }).catch(erreur=>{console.log(res);})


//***** Annuler des requêtes en cours

//AbortController a été conçu spécialement pour fetch
//Il est possible de créer un timeout facilement avec fetch
//Un AbortController n'a qu'une propriété signal et une méthode abort().
//La propriété signal retourne un objet AbortSignal qui peut être utilisé pour annuler une requête en cours.
// Lorsque la méthode abort() est appelée, 
// l'événement abort est émis sur la propriété signal du contrôleur et
// la propriété controller.signal.aborted devient true.

// const controleur = new AbortController();
// controleur.signal.addEventListener('abort',(event)=>{
// console.log(event);
// })
// controleur.abort();
// const promesse =fetch('https://jsonplaceholder.typicode.com/users',{signal:controleur.signal});
// promesse.then((response)=>{console.log(response);}).catch((err)=>{console.log(err);})


//***** L'objet Url
//en https la requtte est cryptée

// const url = new URL("https://wikipedia.fr/JavaScript?key1=value1&key2=value2")
// console.log(url);

//encodage
// const url = new URL("https://wikipedia.fr/JavaScript?key1= value1&key2=value2")
// console.log(url);//search: "?key1=%20value1&key2=value2"  ==>espace encodé
// l'objet URL permet l'encodage des caractères non compatibles directement.
//Il faut respecter le standard RFC.

//searchParams  ==> encodage 

// const url = new URL("https://wikipedia.fr/JavaScript?key1=value1&key2=value2");
// url.searchParams.append('key3','value3');
// url.searchParams.set('key4','tom&jerry');
// console.log(url);

//***** L'API XMLHttpRequest

//Il faut privilégier fetch qui est plus moderne mais XmlHttpRequest sera maintenu.

//1 GET

// const requete = new XMLHttpRequest();
// requete.open("GET",'https://jsonplaceholder.typicode.com/todos');
// requete.responseType='json';
// requete.send();

// requete.addEventListener("load",(response) => 
//   {
//     console.log("response : ",response);
//     console.log("requete : ",requete.response);
//   }
//   );
// requete.addEventListener("error", (error) => {
//     console.log("error : " ,error);
   
//    });

// requete.addEventListener("progress", (progress) =>
// {
//   console.log(progress);
// });

// 2 POST

// const todo ={
//   userId: 1,
//    id: 1, 
//    title: "delectus aut autem", 
//    completed: false
//  }
// const requete = new XMLHttpRequest();
// requete.open("POST",'https://jsonplaceholder.typicode.com/todos');
// requete.responseType='json';
// requete.setRequestHeader('Content-type','application/json');
// requete.send(JSON.stringify(todo));
// requete.addEventListener("load",(response) => 
//   {
//     console.log("response : ",response);
//     console.log("requete : ",requete);
//     console.log("requete response: ",requete.response);
//   }
//   );
// requete.addEventListener("error", (error) => {
//     console.log("error : " ,error);
   
//    });

// requete.addEventListener("progress", (progress) =>
// {
//   console.log(progress);
// });
//onreadystatechange
// requete.addEventListener("readystatechange", (event) =>
// {
//   console.log('event ==> ',event);
//   console.log('readyState ==> ',requete.readyState);
// });

//3 timeout
//La propriété timeout permet d'annuler une requête après un certain laps de temps sans réponse

// const todo ={
//   userId: 1,
//    id: 1, 
//    title: "delectus aut autem", 
//    completed: false
//  }
// const requete = new XMLHttpRequest();
// requete.open("POST",'https://jsonplaceholder.typicode.com/todos');
// requete.timeout=1000
// requete.responseType='json';
// requete.setRequestHeader('Content-type','application/json');
// requete.send(JSON.stringify(todo));

// requete.addEventListener("timeout", (event) =>
// {
//   console.log('Event : ',event);
// });

//3 upload 

//***************************************    Location et History     *****************************************//

//1 location

// console.log('location : ',location);
// console.log('location : ',window.location);
// console.log('location : ',document.location);


// scrol auto ==> hash

// redirection

//setTimeout(()=>{location.href="https://google.fr"},3000)

//2 history

//console.log('history : ',history);


//***************************************   Date    *****************************************//

// const date = new Date(); 
// const dateStamp = new Date(1000*3600*24); 
// const date2 = new Date(2020,0,7,10,35);
// console.log('date : ',date);
// console.log('dateStamp : ',dateStamp);
// console.log('origin date : ',new Date(0));
// console.log('date2 : ',date2);

//****Les formats des Dates en chaîne de caractères
//UTC / GMT / z pour zéro signifient que la date est sur le fuseau horaire de Greenwich.

// const today = new Date(); 
// console.log(today.toISOString());
// console.log('date2 : ',new Date('2020-12-29T00:04:26.213Z'));

//***** Manipuler des timestamps

// const today = new Date('2020-12-29T00:04:26.213Z'); 
// const date1 = Date.parse("2020-12-29T00:04:26.213Z");
// console.log('date1',date1);//1609200266213
// const date2 = new Date(1609200266213); 
// console.log('date2',date2);//Tue Dec 29 2020 01:04:26 GMT+0100

 // const date1 = Date.now();//better then new
 // let date2;
 // setTimeout(()=>{
 //    date2= Date.now();
 //   const diff=date2-date1;
 //   console.log('diff',diff)
 // },3000)

//**** Les méthodes Objet Date

// const date = new Date();

// console.log('date ==>',date);
// console.log('day ==>',date.getDay());
// console.log('getHours==>',date.getHours());
// console.log('getMinutes ==>',date.getMinutes());
// console.log('getSeconds ==>',date.getSeconds());
// console.log('getMilliseconds ==>',date.getMilliseconds());

//**** les formats

// const date = new Date();
// console.log('date                       ==>',date);//Tue Dec 29 2020 14:44:20 GMT+0100
// console.log('date toDateString          ==>',date.toDateString());//Tue Dec 29 2020
// console.log('date toTimeString          ==>',date.toTimeString());//14:44:20 GMT+0100
// console.log('date toLocaleDateString        ==>',date.toLocaleDateString());//29/12/2020
// console.log('date toLocaleDateString FR ==>',date.toLocaleDateString("fr-FR"));//29/12/2020
// console.log('date toLocaleString        ==>',date.toLocaleString("fr-FR"));//29/12/2020 à 14:45:33
// console.log('date toLocaleTimeString    ==>',date.toLocaleTimeString("fr-FR"));//14:45:33


//***************************************   L'asynchrone     *****************************************//

//1  setTimeout
// Chaque setTimeout a un identifiant unique.

//setTimeout(()=>{console.log("timer done")},3000);
// const timeId=setTimeout(()=>{console.log("timer done")},3000);
// console.log("timeId ",timeId);
// clearTimeout(timeId);

//2 setInterval

// let index =0;
// const timerId = setInterval(() => {
//   index++;
//   console.log('Salut !');
//   if(index===3)
//     clearInterval(timerId);
// }, 1000);


//*** Les promesses

//example 1

// const promesse = new Promise((resolve, reject) => {
//   resolve('promisse ok !');
// });
// promesse.then((response)=>{
//   console.log("response : ",response);
// })

// example 2

// const promesse = new Promise((resolve, reject) => {
//   reject('promisse ko !')
// });
// promesse.then((response)=>{
//   console.log("response : ",response);
// }).catch((error)=>{
//   console.log("error : ",error);
// });

// example 3

// const promesse = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//   resolve('promisse ko !');
// },3000)
// });

// promesse.then((response)=>{
//   console.log("response : ",response);
// }).catch((error)=>{
//   console.log("error : ",error);
// });
// console.log('Im here ');

//***** Chaîner des promesses
//Il est possible de définir plusieurs then() sur une même promesse sans les chaîner

//cas 1

// const promesse = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//   resolve('promisse ok !');
// },3000)
// });

// promesse.then((response)=>{
//   console.log("then 1 : ",response);
//   return 'new value';
// }).then((response)=>{
//   console.log("then 2 : ",response);
// })

//cas 2

//si une erreur survient dans la première promesse 
//ou dans l'un des then() de la chaîne, la méthode catch() de la fin de chaîne récupérera l'erreur

// const promesse = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//   resolve('promisse ok !');
// },1000)
// });

// promesse.then((response)=>{
//   console.log("then 1 : ",response);
//   throw new Error('error toto');
// }).then((response)=>{
//   console.log("then 2 : ",response);
// }).catch((error)=>{
//   console.log("error : ",error);
// });

//cas 3
//la méthode catch() récupère l'erreur en amont dans la chaîne mais elle n'interrompt pas la chaîne :

// const promesse = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//   reject('promisse ok !');
// },1000)
// });
// promesse.then((response)=>{
//   console.log("then 1 : ",response);
//   return 'new value 1';
// }).then((response)=>{
//   console.log("then 2 : ",response);
//   return 'new value 2';
// }).catch((error)=>{
//   console.log("error : ",error);
// }).then((response)=>{
//   console.log("then 3 : ",response);
// });

//**** finally
//La méthode finally() prend une seule fonction 
//de rappel en argument qui est appelée que la promesse soit tenue ou rompue.

// const promesse = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//   //resolve('promisse ok !');
//   //reject('promisse ko !');

// },1000)
// });

// promesse.then((response)=>{
//   console.log("then  : ",response);
// }).catch((error)=>{
//   console.log("error ==> ",error);
// }).finally(()=>{
//     console.log("in finally");
// })

//**** Les méthodes des promesses

//1 all()
//Si une des promesses échoue dans Promise.all() les autres promesses seront ignorées
//Elle retourne une nouvelle promesse et il est donc possible de chaîner avec then(), catch() ou finally().
//Si une promesse est rejetée, elle n'attend pas les autres promesses et renvoie immédiatement une erreur.

// const promesse1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//     resolve(1);
//   },1000)
//   });

// const promesse2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//     //resolve(2);
//    //reject(55);
//   },2000)
//   });

// const promesse3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//     resolve(3);
//   },3000)
//   });

// Promise.all([promesse1,promesse2,promesse3]).then((result)=>console.log("result",result)).catch((err)=>console.log("error",err));

//2 allSettled()
//La méthode Promise.allSettled() renvoie une promesse qui est résolue 
//une fois que l'ensemble des promesses passée en argument sont réussies ou rejetées.


// const promesse1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//     resolve(1);
//   },1000)
//   });

// const promesse2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//    resolve(2);
//    //reject(55);
//  },2000)
//   });

// const promesse3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//     resolve(3);
//   },3000)
//   });

//Promise.allSettled([promesse1,promesse2,promesse3]).then((result)=>console.log("result",result)).catch((err)=>console.log("error",err));
// ==>
//0:  {status: "fulfilled", value: 1}
// 1: {status: "rejected", reason: 55}
// 2: {status: "fulfilled", value: 3}

//3 race()
//La méthode Promise.race() renvoie une promesse qui est résolue ou rejetée dès 
//qu'une des promesses passée en argument est résolue ou rejetée.



// const promesse1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//     resolve(1);
//   },1000)
//   });

// const promesse2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//    reject(55);
//  },2000)
//   });

// const promesse3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//     resolve(3);
//   },3000)
//   });

// Promise.race([promesse1,promesse2,promesse3]).then((result)=>console.log("result",result)).catch((err)=>console.log("error",err));
// ==> result 1

// Promise.resolve(1).then((res)=>console.log(res));
// console.log('HELLO');
//==>HELLO
//    1

// Promise.reject('ERROR').catch((err)=>console.log(err));
// console.log('HELLO');

//***** Les fonctions asynchrones avec async / await

//1 

// function func(){
//   return 1;
// }
// console.log(func());

//2

// async function func(){
//   return 1;
// }
// console.log(func());
// func().then(result=>console.log(result)).catch((err)=>console.log(err));

//3
//L'opérateur await permet d'attendre la résolution d'une 
//promesse uniquement dans une fonction asynchrone.

// const promesse = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve(55);
//   },2000)

//   })

// async function func(){
//   const value =await promesse;
//   console.log('value ',value);
//   return value;
//   }

// func().then(result=>console.log('result ', result)).catch((err)=>console.log(err));

// cas error

// exemple 1

// const p1 = Promise.reject("Aïe !");
// async function f() {
//   try {
//     const valeur = await p1;
//   } catch (err) {
//     console.error(err);
//   }
// }
// f();

// exemple 2

// const promesse = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//      reject(55);
//       },2000)
// })

// async function func(){
//   try{
//   const value=await promesse;
//   console.log('value ',value);
//   //return value;
//   }
//   catch(error){
//  console.log('error ',error);
// }
// }
// func().then(result=>console.log('result ', result)).catch((err)=>console.log(err));

//exemple 3

// const promesse=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('OK !');
//     },3000)
// })

// async function fun(){
//     console.log("HELLO1");
//     const val =await promesse;// val contiendra la valeur de résolution de la promesse.
//     console.log("HELLO2");
//     return val;
// }
// fun();
// //console.log(fun());
// console.log("HELLO3");

//exemple 4 many promise

// const promesse1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK 1 !');
//     }, 3000)
// })

// const promesse2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK 2 !');//[ 'OK 1 !', 'OK 2 !' ]
//     }, 3000)
// })

// async function fun() {

//     const val = await Promise.all([promesse1, promesse2]);
//     console.log(val);
//     return val;
// }
// fun();

// // Gestion error
// async function fun() {
//     try {
// const val=await promesse1;
//     } catch (err) {
//         console.log("err : ",err);
//     }
// }

//with arrow function syntax

const test =async ()=>{}

//***** Event loop
//1

// console.log('debut ');

//   setTimeout(()=>{
//     console.log('fin Timeout ');
//       },2000)
// console.log('fin ');

//2
//La file des tâches ne se vide que si la stack n'a plus de fonctions en cours d'exécution
//FIFO signifie que le premier élément arrivé sur la file sera le premier élément sorti

// console.log('debut ');

// setTimeout(()=>{
//     console.log(' Timeout 2000');
//   },2000);

// const promesse = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//      resolve(55);
//       },4000)
// });

// promesse.then(()=>console.log('promesse'));

// Promise.resolve().then(result=>console.log('promesse 0'));

// setTimeout(()=>{
//     console.log(' Timeout 0');
//   },0);

// console.log('fin ');
//==>
// debut 
// fin 
// promesse 0
// Timeout 0
// Timeout 2000
// promesse 4000


//***************************************   la gestion d'erreur    *****************************************//


// 1 error bloquant 

// getData();//==>getData is not defined
// console.log('Bonjour ! ');

// 2 gerer l erreur

// try {
// getData();
// } catch (erreur) {
// console.log('erreur ',erreur);
// }

// console.log('Bonjour ! ');

// 3 finally
//Le bloc finally permet d'exécuter des instructions 
//de nettoyage ou de fin. Il est toujours exécuté, qu'il y ait une erreur ou non.

// try {
// getData();
// } catch (erreur) {
// console.log('erreur ',erreur);
// }
// finally{
//   console.log('im in finnaly');
// }
// console.log('Bonjour ! ');

// 4 example json pars toujours en try catch

// try {
// const wrongjson={name:name};
// JSON.parse(wrongjson);

// } catch (erreur) {
// console.error('erreur ',erreur);
// }
// console.log('Bonjour ! ');

// 5  event loop

//cas 1 erreur not catched

//L'erreur qui survient au bout de 2 seconde ne sera pas catch.
//Dans ce cas, le script stoppera son exécution et vous aurez une Uncaught Error, 
//c'est-à-dire une erreur qui n'est pas du tout gérée.

// try {
// setTimeout(()=>{
//   console.log(data);
// },2000)
// }catch (erreur) {
// console.error('erreur 1 ==>',erreur);
// }
// console.log('Bonjour ! ');


//cas 2
//==>error catched  :mettre les blocs try / catch dans la fonction asynchrone

// try {
// setTimeout(()=>{
//   try{
//  console.log(data);
//   }
//   catch(e){
//     console.error('erreur 2 ==>',e);
//   }
 
// },2000)
// }catch (e) {
// console.error('erreur 3 ==>',e);
// }
// console.log('Bonjour ! ');

//throw operator

// function getTransactio(){
//   const data={
//     name:"euro"
//   }

//   if(!data.amount){
//     throw new Error("need amount");
//   }
// }
// try{
// getTransactio();
// }catch(e){
// console.error('error name==>',e.name);
// console.error('error message==>',e.message);
// console.error('error stack==>',e.stack);
// console.error('error ==>',e);
// }

//**** erreur personalisé 
//Créer des classes d'erreur personnalisées permet d'améliorer la lisibilité du code
//Pour déclencher une erreur on utilise le mot clé throw


// class validationError extends Error{
//   constructor(message){
//     super(message);
//     this.name=this.constructor.name;
//     this.message=message;
//   }
// }
 // cas 1

// function getTransactio(){
//   const data={
//     name:"euro"
//   }
//  if(!data.amount){
//     throw new validationError("need amount");
//   }
// }
// try{
// getTransactio();
// }catch(e){
// console.error('error name==>',e.name);
// console.error('error message==>',e.message);
// console.error('error stack==>',e.stack);
// console.error('error ==>',e);
// }

 // cas 2

// function getTransactio(){
//   const data={
//     name:"euro",
//     amount:123
//   }
//  if(!data.amount){
//     throw new validationError("need amount");
//   }
//     throw new Error("unexpected error");

// }

// try{
// getTransactio();
// }catch(e){
// if(e.name==='validationError'){
//   console.error('error is validationError');
// }
// else{
//   throw e;
// }
// }


 // cas 3

// function getTransactio(){
//   const data={
//     name:"euro",
//     amount:123
//   }
//  if(!data.amount){
//     throw new validationError("need amount");
//   }
//     throw new Error("unexpected error");

// }

// function initApp(){
//   try{
// getTransactio();
// }catch(e){
// if(e.name==='validationError'){
//   console.error('error is validationError');
// }
// else{
//   throw e;
// }
// }
// }

// try{
// initApp()
// }catch(e){
//   console.error('e  ', e);
// }

// use instanceof

// class validationErrorAmount extends validationError{
//   constructor(message){
//     super(message);
//     this.name=this.constructor.name;
//     this.message=message;
//   }
// }

// function getTransactio(){
//   const data={
//     name:"euro"
 
//   }
//  if(!data.amount){
//     throw new validationErrorAmount("need amount");
//   }
// }

// try {
// getTransactio()
// }catch(e){
// if(e instanceof validationError){
//   console.error('e instanceof validationError  ', e);
// }
// }

