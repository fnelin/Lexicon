v51 css
-skapade inloggningsformulär som visas i modal dialogruta när man klickar på Logga In knappen
-Klasserna till inloggningsformuläret namngivna som .login_NNNNNNNNN
-Inloggningsformuläret byggt med Grid och har Flex i "headern" för att få beskrivning och knapp på varsin sida om boxen
-Bytt muspekaren till hand när den hovrar över knappar
-Formulär för att skapa konto i egen dialog.
-Flyttade javascriptet ifrån knapparna till funktioner för att lättare hantering.

v50 css
-skapade Index sida och egen css fil för korten
-Header: La in logo i headern
-Header: Bakade in img och nav i en flex för layout. I nav la till egen flex för ul så il hamnar i egna flexboxar.
-Header: Logga in knapp med skugga och animering
-Header: Stylade hover och fokuslänkar på samma sätt.
-Header: Hittade taggar för enskilda rundade hörn
-Header: La till sticky klass för att visa huvudmenyn även när man scrollar ned.
-Herobanner: Backgrunden som bild i css. Fonter till texterna direct ifrån google.
-SyleCSS:Bröt ut "alla" nestade klasser ifrån förra veckans övning.
-Cards: Skapade grid för korten med grid_cell
-Cards: La in selektor :has i grid_cell klassen för om man tabbar sig ned till ett kort beter det sig likadant som om man hovrar med musen över.
-Cards: Provade att få till ellipses, tyvärr bara en rad med text då den styrs av overflow och eftersom white-space är satt till nowrap når texten aldrig rad 2 innan den flödar över.
+Att göra: Subgrid till korten
+Att göra: TabMeny för hela siten på undersidorna.
+Att göra: Justera ned storleken på fonterna i ingress och korten när media query >= 640

v49 css
-Länkat till font hos google
-Reset CSS kod inkopierad.
-Lagt upp standardvärden i variabler i style.css för fonter, backgrundsfärger och paddings.
-Beräknat variabler på standardvärdena i css
-Byt ut "magiska" nummer och färger mot variabler
-Ändrat ifrån svenska till engelska i taggarna
-Nestat <header> navbar med lista och länkar
-Beräknat färgvärde används till ingressens bakgrund
-Byggt en Grid till listorna för att öva på att placera in divs med :first/nth/last-child syntax
-Kontrollera specificiteten på H3 med annan text-transform jämfört med bas värden
-Lagt minibilderna i en flex grid för att underlätta kant i kant med bilden ovanför
