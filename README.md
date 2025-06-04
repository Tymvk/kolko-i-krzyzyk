# Kółko i Krzyżyk

Implementacja gry w Kółko i Krzyżyk w HTML, CSS, JavaScript.

---

## Struktura plików


index.html Struktura DOM, kontener planszy, przycisk reset, komunikat  
script.js  Logika gry: obsługa zdarzeń, zarządzanie stanem, sprawdzanie zwycięstwa 


## Działanie kodu

### Plansza
- Dynamicznie tworzona w JS (`for`, 9 komórek `.cell` z `data-index` 0–8).
- Każda komórka: `click` → `handleClick(e)`.

### `handleClick(e)`
- Pobiera `index` klikniętego pola.
- Ignoruje klik, jeśli gra zakończona lub pole zajęte.
- Aktualizuje `cells[index]`, ustawia `textContent`.
- Sprawdza:
  - `checkWin()`: wygrana → komunikat + `showWinLine()`.
  - pełna plansza → remis.
  - zmiana `currentPlayer`.

### `checkWin()`
- Sprawdza `cells` względem `winPatterns`.
- Znalezienie zwycięskiej kombinacji → zapis do `winLine`, zwrot `true`.
- Brak zwycięzcy → zwrot `false`.

### `showWinLine(pattern)`
- Pobiera środek pól `a` i `c`.
- Oblicza długość i kąt (`Math.sqrt`, `Math.atan2`).
- Tworzy `div.line`, ustawia `width`, `left`, `top`, `transform`.
- Dodaje linię do `board`.

### `resetGame()`
- Reset tablicy `cells`.
- `currentPlayer = X`.
- `gameActive = true`.
- Czyści planszę, usuwa istniejącą linię.

Resetuje winLine do null.

