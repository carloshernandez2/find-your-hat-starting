# Project Name

> Find your hat.

## Table of contents

- [Project Name](#project-name)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Features](#features)
  - [Status](#status)
  - [Inspiration](#inspiration)
  - [Contact](#contact)

## General info

The purpose of the proyect is to use JavaScript classes to build a game in the terminal.

## Technologies

- Node.js

## Setup

- Node.js installed on your computer
- A CLI

## Code Examples

Example of usage:

```javascript
// testing
const play = () =>{
    const game = new Field(Field.create(10, 10, 20));
    game.print();
    while (game.continuar){
        game.palabras = "Animo! Todo está en orden";
        let paso = prompt("Cuál será tu siguiente paso? (i,d,a,ab)");
        paso==="a"? game.row = game.row - 1 : paso==="ab"? game.row = game.row + 1 : paso==="d"? game.column = game.column + 1 : paso==="i"? game.column = game.column - 1 : game.palabras = "la dirección ingresada no es valida, intenta con i(izquierda), d(derecha), a(arriba), o ab(abajo)";
        game.modifica(game.row, game.column);
        game.print();
        console.log(game.palabras);
    }
}

play();
```

## Features

List of features:

- Terminal game app
- Easy rules

## Status

Project is: Finished.

## Inspiration

I was motivated by the challenge it meant to me!.

## Contact

Created by [@CarlosHernández](https://linkedin.com/in/carlos-manuel-hernández-consuegra-42975a189) - feel free to contact me!
