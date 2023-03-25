/**
 * Eventy, event listnery - interakcja z UI
 */

/**
 * Procedura/flow nasłuchiwania na eventy
 *
 * 1) pobranie elementu i przypisanie go do zmiennej (można też nie przypisywać ale często się jednak tak robi)
 * 2) wywołanie metody addEventListener która jest dostępna na dowolnym elmenecie htmlowym który mamy w pamięci programu
 * np w zmiennej (patrz punkt 1)
 * 3) addEventListener przyjmuje co najmniej dwa argumenty
 *   - typ eventu - w przeglądarce mamy ich sporo
 *   - funkcje (callback) który ma się wykonać w momencie wystąpienia eventu
 *
 * Ważna teoria
 * Fazy eventu
 *
 * Każde zdarzenie składa się z 3 faz:
 * faza capture - kiedy event podąża w dół drzewa (od window) do danego elementu
 * faza target - kiedy event dotrze do elementu, który wywołał to zdarzenie
 * faza bubbling - kiedy event pnie się w górę drzewa aż dotrze do window
 *
 */

/**
 * przyciski usuwanie elementu
 *
 * przykład
 */

/**
 * Zadanie
 *
 * Na podstawie przykładu dodaj kolejne idki do przycisków tak żeby obsłużyć każdy z nich - dzięki temu po
 * wciśnieciu dowolnego przycisku usuń dany wiersz powinien zostać usunięty z dokumentu
 *
 */

/**
 * Delegacja zdarzeń oraz fachowa obsługa zdarzeń które występują w tabelce
 */

/**
 * Zadanie
 *
 * Pod tabelką znajdują się 4 przyciski z labelkami
 * Green Red Blue oraz Yellow
 * Twoim zadaniem jest nasłuchiwanie zdarzeń na kliknięcie w obrębie diva który jest kontenerem (rodzicem) przycisków (delegacja zdarzeń)
 * posiada on id colorSwitch którego możesz użyć do pobrania elementu
 *
 * zadanie polega na tym żeby zmienić kolor tła tabelki (albo elementu body wersja prostsza) na taki jaki jest określony
 * w labelce przycisku - możesz ale nie musisz edytować kod html np żeby dodać odpowiednie idki lub klasy,
 *
 */

/**
 * Inputy & Formularze
 */

/**
 * Formularz do tworzenia nowego użytkownika
 */

/**
 * Zadanie
 *
 * zakomentuj dotychczasowy formularz w pliku html oraz odkomentuj kod HTML który zawiera element dialog
 *
 * na ekranie powinien się pojawić tzw modal - defaultowo jest on otwarty ze względu na atrybut open w elemencie dialog
 *
 * zasadniczo nie jest to poprawne UXowo żeby z automatu mieć otwarty modal dlatego będziemy musieli zedytować kod html
 * jednak zanim to zrobisz to obsłuż przycisk cancel w tym modalu
 * możliwe że będziesz musiał/a dodać id żeby pobrać ten element
 *
 * akcja jaka ma się wykonać po naciśnięciu tego przycisku to usunięcię atrybutu open z elementu dialog
 * jeżeli nie pamiętasz jak się usuwało atrybut przypomnij sobie przykład (003_dom) usuwanie atrybutu checked z checkboxa
 * w tym przypadku będzie bardzo podobnie jedynie wartość będzie inna
 *
 * Kolejnym zadaniem będzie obłużenie tego formularze i stworzenie elementu w tabeli po zasubmitowaniu formularza
 * dodatkowo po zasubmitowaniu trzeba wyłączyć/schować/usunać modal czyli powtórzyć akcje z przycisku cancel
 *
 * Uwaga id inputów zostały zmienione, uważaj przy pobieraniu elementów
 *
 */

/**
 * Obsługa przycisku cancel
 */

const cancelButton = document.querySelector("#cancelButton");

cancelButton.addEventListener("click", () => {
  document.querySelector("#modalForm").removeAttribute("open");
});

const openModalButton = document.querySelector("#openModal");

openModalButton.addEventListener("click", () => {
  document.querySelector("#modalForm").setAttribute("open", "");
});

/**
 * Zadanie
 *
 * Na podstawie przykładu poprzedniej tabeli spróbuj wykonać usuwanie elementu po przyciśnieciu przycisku
 * zweryfikuj kod HTML i upewnij się jakich id-ków uzywasz
 */
