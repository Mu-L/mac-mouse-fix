Sprawdź też **świetne ulepszenia** wprowadzone w [3.0.0 Beta 6](https://github.com/noah-nuebling/mac-mouse-fix/releases/tag/3.0.0-Beta-6)!


---

**3.0.0 Beta 7** wprowadza kilka drobnych ulepszeń i poprawek błędów.

Oto wszystkie nowości:

**Ulepszenia**

- Dodano **tłumaczenie na język koreański**. Wielkie podziękowania dla @jeongtae! (Znajdziesz go na [GitHubie](https://github.com/jeongtae))
- **Przewijanie** z opcją 'Płynność: Wysoka' jest teraz **jeszcze płynniejsze** dzięki stopniowej zmianie prędkości, zamiast nagłych skoków prędkości przewijania podczas poruszania kółkiem. Powinno to sprawić, że przewijanie będzie nieco płynniejsze i łatwiejsze do śledzenia wzrokiem, bez zmniejszania responsywności. Przewijanie z 'Płynność: Wysoka' zużywa teraz około 30% więcej CPU - na moim komputerze wzrosło z 1.2% do 1.6% podczas ciągłego przewijania. Przewijanie nadal pozostaje więc bardzo wydajne i mam nadzieję, że nie będzie to miało znaczenia dla nikogo. Wielkie podziękowania dla [MOS](https://mos.caldis.me/), który zainspirował tę funkcję i którego 'Scroll Monitor' pomógł w jej implementacji.
- Mac Mouse Fix teraz **obsługuje sygnały wejściowe przycisków ze wszystkich źródeł**. Wcześniej Mac Mouse Fix obsługiwał tylko sygnały z rozpoznanych myszy. Myślę, że może to poprawić kompatybilność z niektórymi myszami w szczególnych przypadkach, na przykład przy korzystaniu z Hackintosh, ale spowoduje też, że Mac Mouse Fix będzie przechwytywał sztucznie generowane sygnały przycisków z innych aplikacji, co może prowadzić do problemów w innych przypadkach. Daj mi znać, jeśli spowoduje to jakieś problemy, a zajmę się tym w przyszłych aktualizacjach.
- Dopracowano odczucia i jakość gestów 'Kliknij i przewiń' dla 'Pulpit i Launchpad' oraz 'Kliknij i przewiń' do 'Przełączania między Spaces'.
- Uwzględniono gęstość informacji w danym języku przy obliczaniu **czasu wyświetlania powiadomień**. Wcześniej powiadomienia były widoczne bardzo krótko w językach o wysokiej gęstości informacji, takich jak chiński czy koreański.
- Włączono możliwość używania **różnych gestów** do przełączania między **Spaces**, otwierania **Mission Control** lub **App Exposé**. W Beta 6 te akcje były dostępne tylko przez gest 'Kliknij i przeciągnij' - jako eksperyment, by sprawdzić, ilu osobom zależy na dostępie do tych akcji w inny sposób. Okazuje się, że niektórym tak, więc teraz ponownie umożliwiono dostęp do tych akcji przez proste 'Kliknięcie' przycisku lub 'Kliknij i przewiń'.
- Dodano możliwość **Obrotu** przez gest **Kliknij i przewiń**.
- **Ulepszono** sposób działania opcji **Symulacji Trackpada** w niektórych scenariuszach. Na przykład podczas poziomego przewijania w celu usunięcia wiadomości w Mail, kierunek ruchu wiadomości jest teraz odwrócony, co mam nadzieję będzie odczuwane jako bardziej naturalne i spójne dla większości osób.
- Dodano funkcję **mapowania** na **Kliknięcie podstawowe** lub **Kliknięcie dodatkowe**. Zaimplementowałem to, ponieważ prawy przycisk w mojej ulubionej myszy się zepsuł. Te opcje są domyślnie ukryte. Możesz je zobaczyć, przytrzymując klawisz Option podczas wybierania akcji.
  - Obecnie brakuje tłumaczeń na chiński i koreański, więc jeśli chciałbyś przyczynić się do tłumaczenia tych funkcji, będę bardzo wdzięczny!

**Poprawki błędów**

- Naprawiono błąd, gdzie **kierunek 'Kliknij i przeciągnij'** dla 'Mission Control i Spaces' był **odwrócony** dla osób, które nigdy nie przełączały opcji 'Naturalne przewijanie' w Ustawieniach systemowych. Teraz kierunek gestów 'Kliknij i przeciągnij' w Mac Mouse Fix powinien zawsze odpowiadać kierunkowi gestów na Trackpadzie lub Magic Mouse. Jeśli chcesz osobnej opcji do odwracania kierunku 'Kliknij i przeciągnij', zamiast podążania za Ustawieniami systemowymi, daj mi znać.
- Naprawiono błąd, gdzie **darmowe dni** **naliczały się zbyt szybko** dla niektórych użytkowników. Jeśli dotknął cię ten problem, daj mi znać, a zobaczę, co mogę zrobić.
- Naprawiono problem w macOS Sonoma, gdzie pasek kart nie wyświetlał się poprawnie.
- Naprawiono zacinanie się podczas używania prędkości przewijania 'macOS' podczas używania 'Kliknij i przewiń' do otwierania Launchpada.
- Naprawiono awarię, gdzie aplikacja 'Mac Mouse Fix Helper' (działająca w tle, gdy Mac Mouse Fix jest włączony) czasami się zawieszała podczas nagrywania skrótu klawiszowego.
- Naprawiono błąd, gdzie Mac Mouse Fix zawieszał się przy próbie przechwycenia sztucznych zdarzeń generowanych przez [MiddleClick-Sonoma](https://github.com/artginzburg/MiddleClick-Sonoma)
- Naprawiono problem, gdzie nazwa niektórych myszy wyświetlana w oknie dialogowym 'Przywróć domyślne...' zawierała nazwę producenta dwa razy.
- Zmniejszono prawdopodobieństwo zawieszania się 'Kliknij i przeciągnij' dla 'Mission Control i Spaces' gdy komputer jest wolny.
- Poprawiono użycie 'Force Touch' w tekstach interfejsu na 'Force click'.
- Naprawiono błąd występujący w niektórych konfiguracjach, gdzie otwieranie Launchpada lub pokazywanie Pulpitu przez 'Kliknij i przewiń' nie działało, jeśli przycisk został zwolniony podczas trwania animacji przejścia.

**Więcej**

- Kilka ulepszeń pod maską, poprawek stabilności, porządków w kodzie i więcej.

## Jak możesz pomóc

Możesz pomóc dzieląc się swoimi **pomysłami**, **problemami** i **opiniami**!

Najlepszym miejscem do dzielenia się **pomysłami** i **problemami** jest [Asystent Opinii](https://noah-nuebling.github.io/mac-mouse-fix-feedback-assistant/?type=bug-report).
Najlepszym miejscem na **szybkie** nieustrukturyzowane opinie jest [Dyskusja o Opiniach](https://github.com/noah-nuebling/mac-mouse-fix/discussions/366).

Możesz też uzyskać dostęp do tych miejsc z poziomu aplikacji w zakładce '**ⓘ O programie**'.

**Dziękuję** za pomoc w ulepszaniu Mac Mouse Fix! 😎:)