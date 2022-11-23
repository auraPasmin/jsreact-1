import react, { useState } from 'react'

const n1 = 6;

function divisiblepor(n1) {
    if (n1 % 3 === 0 || n1 % 5 === 0 ) {
        return  <h1> Es divisible por 3 o 5 ! </h1> ; 
      }

      return <h1> No es divisible ni por 3, ni por 5. </h1> ;
  }

