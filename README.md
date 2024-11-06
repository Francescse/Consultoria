### README del Projecte Consultoria

## Descripció del Projecte
Aquest projecte consisteix en la creació d'una aplicació web per a l'optimització de processos industrials i de serveis (hotelera, alimentació, logística, entre d'altres). Ens enfoquem en l'avaluació i millora contínua dels processos departamentals utilitzant les metodologies Lean i Six Sigma.

## Objectius Principals
- Realitzar un estudi exhaustiu de les eines d'anàlisi utilitzades en les pràctiques de Lean i Six Sigma.
- Conèixer i aplicar les normes ISO 9001, 14001 i 28000.
- Crear una aplicació web que faciliti l'assessoria en l'optimització de processos.

## Estructura de l'Aplicació
### 1. Departaments i Particularitats Sectorials
#### Recollida de Dades del Client:
- Nom
- Adreça
- Sector
- Activitat empresarial
- Nombre d'empleats
- Volum de negoci
- Objectius clau

#### Definició dels Departaments Clau:
- Hoteleria: recepció, housekeeping, restauració, compres i manteniment.
- Logística: operacions, magatzematge, distribució, servei al client.

### 2. Documents Estructurats Exportables:
#### Document per a la Reunió Inicial:
- Informació preliminar sobre les necessitats del client.
- Preguntes clau per comprendre els reptes i processos crítics.

#### Anàlisi Preliminar i Recopilació de Dades:
- Indicadors de productivitat, qualitat, temps de cicle.

#### Informe preliminar de resultats:
- Resum visual amb gràfics i diagrames.

### 3. Pla d'Actuació:
#### Definició de Passos:
- Implementació de millors.
- Assignació de responsables.
- Establiment de KPI.

#### Eines Informàtiques Recomanades:
- Eines per a l'anàlisi de dades (p. ex., Power BI).
- Mapatge de processos (p. ex., Microsoft Visio).
- Gestió de projectes (p. ex., Trello, Asana).

### 4. Fases del Procés de Consultoria:
- Fase 1: Reunió inicial i recopilació de dades.
- Fase 2: Anàlisi preliminar i proposta d'actuació.
- Fase 3: Implementació de les millors i seguiment dels resultats.
- Fase 4: Informe final amb els resultats, recomanacions i beneficis obtinguts.

### 5. Orientació i Personalització:
- Adaptar l'enfocament del procés de consultoria segons les prioritats del client i de la indústria.

### Integració de la IA en l'Aplicació:
#### Funcionalitats de la IA:
- Anàlisi de dades per identificar àrees de millora.
- Generació de recomanacions personalitzades.
- Creació de gràfics i diagrames per a la visualització dels resultats.

## Configuració del Projecte

### Estructura Inicial del Projecte
L'estructura inicial del projecte inclou els següents directoris i fitxers:
```
Consultoria/
├── backend/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── App.js
    │   └── index.js
    ├── public/
    │   └── index.html
    └── package.json
```

### Configuració del Backend amb Node.js i Express
Navega a la carpeta `backend` i inicialitza un projecte Node.js:
```sh
cd backend
npm init -y
npm install express
```
Afegeix el següent contingut a `server.js` per crear un servidor bàsic amb Express:
```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola món!');
});

app.listen(port, () => {
  console.log(`Servidor en funcionament a http://localhost:${port}/`);
});
```

### Configuració del Frontend amb React
Navega a la carpeta `frontend` i crea una aplicació React:
```sh
npx create-react-app .
```
Assegura't que els fitxers `App.js` i `index.js` estan a la carpeta `src` i `index.html` està a la carpeta `public`.

### Configuració del Proxy per al Desenvolupament
Per habilitar la comunicació entre el frontend i el backend durant el desenvolupament, afegeix una configuració de proxy en el `package.json` de la carpeta `frontend`:
```json
"proxy": "http://localhost:3000"
```

### Rutes d'API i Peticions
Crea rutes d'API al backend i fes peticions des del frontend per provar la comunicació.

### Verificació de la Comunicació
Assegura't que el frontend pot comunicar-se correctament amb el backend fent una petició de prova i verificant la resposta.

## Avanços Fets Fins Ara
- [Commit 1](https://github.com/Francescse/Consultoria/commit/a855f4de890b915d8cf8db507406b9846c559e37): Initial commit.
- [Commit 2](https://github.com/Francescse/Consultoria/commit/28609c986ec29bf58077882add83f2e12b3aec1d): Initial commit.
- [Commit 3](https://github.com/Francescse/Consultoria/commit/9ed5a45b271f33c5f1afb294625e365d9067c917): Commit de tots els canvis locals.

