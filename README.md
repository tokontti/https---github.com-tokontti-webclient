# NodeJS REST API 

## Tarvittavat ohjelmistot

- git
- NodeJS

## Käyttöönotto

1. Kloonaa repositorio koneellesi:
   - **git clone -- git clone **
   - **cd **
2. Suorita komento **npm install** asentaaksesi package.json tiedostossa määritellyt npm-paketit joita projektissa käytetään (dependencies)
3. Luo .env -niminen tiedosto on kansion juureen ja lisää sinne ympäristömuuttuja **JWT_SECRET** avainarvoparina seuraavasti: "JWT_SECRET=tähän_satunnainen_merkkijono_salaisuudeksi_millä_jwt_token_allerkirjoitetaan_ja_luetaan".
** PORT=3000** 
Muista tallentaa muutokset.
4. Käynnistä kehityspalvelin komennolla **npm run dev**

5. Pääset alkuun voit luomalla sekä admin, user tasoiset käyttäjät insomniumin avulla
Käyttäjän luonti polkuun localhost:3000/api/v1/user
{
    "username": "admin",
    "password": "*******",
    "age": 22,
    "role": "admin"
}
Login polkuun localhost:3000/api/v1/user/login
{
    "username": "admin",
    "password": "*******"
}


6. Tämän jälkeen voit avata web sivun localhost:3000 ositteesta. 
Onnistuneen kirjautumisen jälkeeen  mikäli olet admin pääset suoraan User Management käyttäjänhallinta sivulle
mikäli olet user pääset Notes luontisivuille.
User Management sivuilla on tarvittavat toiminteet käyttäjähallintaan
Muistio sivu on saman kuin restapi tehtävässä.

13 Polkurakenne tiedostossa
Folder PATH listing for volume Windows

C:\Projektit\rajapinnat\restapi\rest_api_final
|   .env
|   .gitignore
|   directory_structure.txt
|   openapi.json
|   package-lock.json
|   package.json
|   README.md
|   server.js
|   
+---database
|       db.sqlite
|       sqlite.js
|      
|           
+---public
|       add_user.html
|       app.js
|       doge.png
|       index.html
|       notes.html
|       notes.js
|       admin.html
|       admin.js
|       
\---src
    |   config.js
    |   note_routes.js
    |   user.js
    |   
    |   
    \---middlewares
            auth.js

