/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
 *
 * Document Object Model (DOM) - przeglądarka interpretuje kod HTML i dostarcza obiekt, który JS jest w stanie odczytywać i modyfikować
 *
 * najprościej mówiąc DOM dostarcza nam obiekt który nazywa się "document" i ten obiekt ma bardzo bardzo bardzo dużo
 * różnych pól i metod które pozwalają na interakcje z HTMLem
 *
 */

/**
 * Tworzenie elementu
 *
 * 1) createElement
 *
 * 2) template string (backticki - znaki pojedynczego cudzysłowia pod klawiszem esc) + właściwości/pola innerHTML/innerText
 *
 */

/**
 * Osadzanie nowostworzonego elementu w elemncie body
 */

// https://developer.mozilla.org/en-US/docs/Web/API/Document/write
// 1) document.write ❌

// 2) document.body... ✅

/**
 * Pobieranie elementów z dokumentu HTML
 */

// 1) metoda querySelector

// 2) metoda getElementById

// 3) metoda getElementsByClassName

/**
 * Zadanie
 *
 * stwórz dowolny element htmlowy w pliku index.html
 * dodaj mu potrzebne atrubuty i spróbuj go pobrać nowo poznanymi Ci metodami
 * wynik przypisz do zmiennej po czym wykonsoluj zmienną z pobranym element (console.log)
 */

/**
 * manipulowanie classami - lista klas jest dostępna pod polem classList
 * dodatkowo można manipulować tymi klasami przy pomocy szerokiej gamy metod dostępnej też pod tym polem
 */

/**
 * bezpośrednie stylowanie elementu
 * element.style = '';
 */

/**
 * Wstawianie elementu / osadzanie w dowolnym miejscu w dokumencie
 */

/**
 * Ustawianie/setowanie atrubutów na przykładzie checkboxa
 */

/**
 * Usuwanie elementu - metoda remove dostępna na elemencie HTML/Nodzie
 */

/**
 * Zadanie
 *
 * Stwórz w JSie element html div który będzie miał 100px szerokości i 100px wysokości
 * oraz dowolny kolor
 *
 * niech ten div ma w sobie zagnieżdzony kolejny div który będzie miał 50% szerokości i wyskokści oraz inny kolor od rodzica
 *
 * zakoduj też następujący scenariusz:
 *
 * niech:
 *  po 3 sekundach element ten zwiększy swoją wysokość i szerokosc o 100px na każdą długość
 *  po 8 sekundach usuń element
 *
 */

/**
 * Zadanie
 *
 * Przekopiuj jedno z zadań z poprzedniego modułu (002_html_in_js) któro wymagało stworzenia struktury HTML w zmiennej
 * i umieść tą strukturę w wybranym miejscu na stronie za pomocą pola innerHTML
 *
 *
 * możesz stworzyć dodatkowy element w pliku HTML lub w JSie
 * i dopiero osadzić przekopiowaną strukture HTML
 *
 * experymentuj a w razie coś pytaj😀
 *
 */

/**
 * Zadanie ⭐⭐
 *
 * pobierz element po id-ku znaną Ci metodą i przypisz go do zmiennej o dowolnej nazwie (sugestia: flexContainer)
 *
 * ustaw interwał czasowy (setInterval) który będzie co 2 sekundy wybierał z tablicy klas randomową klasę i ustawiał ją
 * jako klase elementu flexContainer pamiętaj o usunięciu klasy z poprzedniego wywołania
 *
 * do wylosowania randomowej liczy z przedziału możesz zaimplementować funkcje bądź skorzystać z dobrodziejstw internetu
 * https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
 *
 * jeżeli chcesz gotowca to patrz hint3
 *
 * hint1: przypisz klase bezpośrednio do pola classList
 * hint2: żeby pominąć pisanie nie potrzebnej logiki sprawdzającej jakie klasy są w danym elemencie możesz przypisać
 * do classList wartości randomowej plus "flex-container" która była na początku i jest potrzebna do tego żeby element dalej
 * był flex kontenerem
 *
 * hint3: do wylosowania randomowej liczby z przedziału możesz użyć funkcji poniżej i wywoływać ją w interwale z parametrami 0 oraz 2
 *
 * function randomIntFromInterval(min, max) {
 *  return Math.floor(Math.random() * (max - min + 1) + min)
 * }
 *
 */
