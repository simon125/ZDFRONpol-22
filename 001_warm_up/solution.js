/**
 * Przed rozpoczęciem kilka słów o tym jak pracować z tym plikiem
 *
 * 1) zadania możesz uruchomić dzięki uruchomieniu pliku index.html w przeglądarce - pamiętaj o połączeniu skryptu do pliku html
 * 2) zadania oznaczone ⭐ są dla chętnych oraz dla tych co skończyli zadania bez oznaczeń
 *    Do rozwiązywania zadań możesz praktycznie wszystko (chyba że w zadaniu jest opisane co można a co nie) tzn.
 *    - tworzyć zmienne
 *    - tworzyć funkcje
 *    - korzystać z internenetu
 *    - ZADAWAĆ PYTANIA
 *    - etc.
 * 3) czasem po rozwiązaniu zadania będziesz musiał/musiała zakomentować rozwiazanie
 *    żeby nie "przysłaniać" nazw zmiennych - będę wskazywał kiedy należy to robić
 * 4) każde zadanie posiada przykładowe rozwiązanie w pliku który często nazywa się solution.js
 * 5) jeżeli masz problem ze zrozumieniem treści lub nie wiesz jak ruszyć zadania zgłoś to do mnie z chęcią Ci pomogę :)
 *    chyba że chcesz sam/a powalczyć to spróbuj przeanalizować rozwiązanie z pliku solution.js
 * 6) nie przejmuj się jeżeli nie udało Ci się rozwiązać zadania - bądź dla siebie wyrozumiała/ły - te materiały zostają
 *    dla Ciebie będziesz mógł/mogła zrobić to na spokojnie po zajęciach
 * 7) jeżeli Twoje rozwiązanie różni się od zaproponowanego przezemnie nie musi to oznaczać że Twoje jest złe/gorsze
 *    problemy w programowaniu mają często wiele rozwiązań
 *
 */

/**
 * Zadanie
 *
 * Policz średnią arytmetyczną liczb podanych w tablicy w zmiennej numbers
 *
 *  hint1: stwórz zmienną suma i użyj pętli do dodania wszystkich liczb z tablicy
 *  hint2: stwórz kolejną zmienną i przypisz wynik obliczenia
 *
 */

const numbers = [4, 2, 5, 8, 9, 1, 0];

// zmienna do przetrzymywania sumy potrzebnej do obliczenia średniej
let sum = 0;

// pętla w której następuję zsumowanie liczb z tablicy
numbers.forEach((num) => {
  sum += num;
});

// obliczenie średniej arytmetycznej
const mathMean = sum / numbers.length;

console.log(`Średnia arytmentyczna: ${mathMean}`);

/**
 * Zadanie
 *
 * Na podstawie tablicy numbers stwórz nową tablicę które będzie składała się z liczb większych niż 5
 *
 * hint1: proponuje użyć metody dostępnej na tablicy - filter, ale możesz wykorzystać zwykłą pętle for
 * hint2: skonstruuj warunek (if) sprawdzający czy dana liczba jest większa niż 5
 */

const filteredNumbers1 = [];

/* podejście 1 */
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    filteredNumbers1.push(numbers[i]);
  }
}

console.log(`1) Przefiltrowane liczby: ${filteredNumbers1}`);

/* podejście 2 */

const filteredNumbers2 = numbers.filter((number) => number > 5);

console.log(`2) Przefiltrowane liczby: ${filteredNumbers2}`);

/**
 * Zadanie ⭐
 *
 * Zadanie podobne do poprzedniego, tzn policz średnią arytetyczną liczb z tablicy numbers1
 * tym razem tablica numbers1 zawiera elementy inne niż liczby lub liczby ale w formacie string,
 * Twoim zadaniem jest obliczenie średniej arytmetycznej liczb zapisanych jako number oraz string oraz pominięcie innych elementów
 *
 */

const numbers1 = [
  null,
  2,
  "2",
  undefined,
  9,
  10,
  0,
  -5,
  20,
  "22",
  "cześć",
  { name: "John" },
  [1, 2, 3],
];

// zmienna do przetrzymywania sumy potrzebnej do obliczenia średniej
let sum1 = 0;

// pętla w której następuję zsumowanie liczb z tablicy
numbers.forEach((num) => {
  sum += num;
});

// obliczenie średniej arytmetycznej
const mathMean1 = sum / numbers.length;

console.log(`Średnia arytmentyczna: ${mathMean1}`);

/**
 * Zadanie
 *
 * Sprawdź czy user jest dorosły czy nie (age > 18).
 *
 * Przemapuj/przeiteruj się po tablicy userów (zmienna users),
 * gdzie userem jest obiekt:
 *
 * np.
 *
 * const user = {
 *      name: 'John',
 *      lastName: 'Doe',
 *      age: 23,
 * }
 *
 * iterując się po tablicy dodawaj nowe pole o nazwie "isAdult" userowi z danej iteracji
 *
 * np.
 *
 * user.isAdult = 'jakaś nowa wartość';
 *
 * do tego pola przypisz wartość boolowską true jeżeli user jest dorosły (age > 18)
 * natomiast jeżeli user jest nieletni (age < 18) przypisz wartość false
 *
 *
 * przykładowe dane wejściowe:
 *
 * const users = [{name: 'John', age: 20}, {name: 'Jane', age: 16}];
 *
 * przykładowe dane wyjściowe (wynik działania Twojego kodu):
 *
 * const usersWithIsAdult = [{name: 'John', age: 20, isAdult: true}, {name: 'Jane', age: 16, isAdult: false}];
 *
 */

const users = [
  { name: "Jane", lastName: "Doe", age: 10 },
  { name: "Paul", lastName: "Walker", age: 20 },
  { name: "John", lastName: "Doe", age: 32 },
  { name: "Jack", lastName: "Jackson", age: 25 },
  { name: "Jerry", lastName: "Jazz", age: 15 },
];

/* podejście 1 */
const checkedUsers1 = users.map((user) => {
  if (user.age >= 18) {
    user.isAdult = true;
  } else {
    user.isAdult = false;
  }
  return user;
});

/* podejście 2 */
const checkedUsers2 = users.map((user) => {
  user.isAdult = user.age >= 18;

  return user;
});

console.log({ checkedUsers1, checkedUsers2 });

/**
 *
 * Zadanie ⭐
 *
 * Na podstawie wyniku z zadania poprzedniego policz średnią arytmetyczną wieku osób dorosłych
 *
 */

/* podejście 1 */
let amountOfAdults1 = 0;

const sum3 = checkedUsers1.reduce((acc, user) => {
  if (user.isAdult) {
    acc += user.age;
    amountOfAdults1 += 1;
  }

  return acc;
}, 0);

const sredniaWiekuOsobDoroslych1 = sum3 / amountOfAdults1;

console.log(
  `1) Średnia arytmetyczna osób dorosłych: ${sredniaWiekuOsobDoroslych1}`
);

/* podejście 2 "elegantsze" */

const [sum4, amountOfAdults2] = checkedUsers1.reduce(
  (acc, user) => {
    if (user.isAdult) {
      acc[0] += user.age;
      acc[1] += 1;
    }

    return acc;
  },
  [0, 0]
);

const sredniaWiekuOsobDoroslych2 = sum4 / amountOfAdults2;

console.log(
  `2) Średnia arytmetyczna osób dorosłych: ${sredniaWiekuOsobDoroslych2}`
);

/**
 * Zadanie ⭐⭐
 *
 * Na podstawie tablicy z poprzedniego zadania policz ilość osób pełnoletnich i niepełnoletnich
 * wynik wyświetl w dowolny znany Ci sposób np w konsoli.
 *
 */

/* podejście 1 */
let nieletni = 0;
let pelnoletni = 0;

for (let i = 0; i < checkedUsers1.length; i++) {
  if (checkedUsers1[i].isAdult) {
    pelnoletni += 1;
  } else {
    nieletni += 1;
  }
}
console.log(
  `1) ilość osób pelnoletnich: ${pelnoletni} | ilość osób nieletnich: ${nieletni}`
);

/* podejście 2 */

const [pelnoletni1, nieletni1] = checkedUsers1.reduce(
  (acc, user) => {
    if (user.isAdult) {
      acc[0] += 1;
    } else {
      acc[1] += 1;
    }

    return acc;
  },
  [0, 0]
);

console.log(
  `2) ilość osób pelnoletnich: ${pelnoletni1} | ilość osób nieletnich: ${nieletni1}`
);

/**
 * Zadanie
 *
 * Na podstawie tablicy z poprzedniego zadania, odfiltruj nieletnich userów.
 * Tzn stwórz nową tablicę na podstawię tablicy z porzedniego zadania gdzie elementem tablicy był user z polem isAdult
 * Podczas iteracji sprawdzaj czy user jest dorosły (isAdult === true) jeżeli tak niech będzie elementem nowej tablicy
 * jeżeli nie pomiń go.
 *
 */

/* podejście 1 */
const filteredUsers1 = [];

for (let i = 0; i < checkedUsers1.length; i++) {
  if (checkedUsers1[i].isAdult) {
    filteredUsers1.push(checkedUsers1[i]);
  }
}
console.log(filteredUsers1);

/* podejście 2a */

const filteredUsers2a = checkedUsers1.filter((user) => {
  if (user.isAdult === true) {
    return true;
  } else {
    return false;
  }
});

console.log(filteredUsers2a);

/* podejście 2b */

const filteredUsers2b = checkedUsers1.filter((user) => user.isAdult);

console.log(filteredUsers2b);
