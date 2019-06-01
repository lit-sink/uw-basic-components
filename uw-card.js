import {LitElement, html} from 'https://unpkg.com/lit-element/lit-element.js?module';

class CardElement extends LitElement {

    static get properties() {
        return {}
    }

    render() {
        return html`
            <style>
            </style>
            
            <div @click=${() => {console.log("You clicked on the card!")}}>
                <slot></slot>
            </div>
        `;
    }  
}

customElements.define('uw-card', CardElement);