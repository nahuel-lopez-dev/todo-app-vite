import html from './app.html?raw';

/**
 * 
 * @param {String} elementId 
 */

export const App = ( elementId ) => {
    
    // Cuando la función App() se llama, función anónima autoinvocada IIFE
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    })();

}