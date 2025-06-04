#Kod

Plansza generowana dynamicznie w pętli (for), tworzonych jest 9 elementów div z klasą cell i atrybutem data-index (0-8).

Event listener click przypisany do każdej komórki wywołuje funkcję handleClick().

W handleClick():

Pobierany jest index klikniętej komórki z dataset.

Jeśli gameActive jest false lub pole o danym indeksie nie jest null, funkcja kończy działanie (return).

W przeciwnym wypadku:

Wpisuje symbol (X lub O) do tablicy cells i ustawia textContent klikniętego pola.

Wywoływana jest funkcja checkWin().

checkWin():

Sprawdza tablicę cells pod kątem występowania jednej z predefiniowanych kombinacji zwycięskich (winPatterns).

Jeśli wystąpi zwycięstwo:

Przypisywana jest zwycięska sekwencja do winLine.

Zwraca true.

Jeśli nie:

Zwraca false.

Po wygranej:

gameActive ustawiane jest na false.

Aktualizowana jest zawartość message.

Wywoływana funkcja showWinLine(), która:

Oblicza środek dwóch skrajnych komórek zwycięskiego układu (getBoundingClientRect()).

Tworzy element div z klasą line.

Ustawia width, top, left i transform (obliczenie kąta atan2 i długości sqrt).

Dodaje linię do board.

W przypadku remisu:

Gdy wszystkie elementy cells są niepuste i brak zwycięzcy, ustawiany jest komunikat o remisie.

Po kliknięciu resetBtn wywoływana jest resetGame():

Zeruje tablicę cells (wszystkie wartości null).

Ustawia currentPlayer na "X", gameActive na true.

Czyści wszystkie komórki na planszy (textContent).

Usuwa istniejącą linię zwycięstwa (jeśli istnieje).

Resetuje komunikat message.
