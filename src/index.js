import React from 'react';
import ReactDOM from 'react-dom';
import { MuchosCustomHooks } from './componentes/MuchosCustomHooks';
import { dictonario } from './componentes/dictonario'; 



const divRoot = document.querySelector('#root');


ReactDOM.render( <MuchosCustomHooks/>, divRoot);
ReactDOM.render( <dictonario/>);
