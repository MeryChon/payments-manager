import './payment-row-expandable.js';

class PaymentsGrid extends HTMLElement {

    constructor() {
        super();

    }

    connectedCallback() {
        this.innerHTML = `<div id="grid_header">${this.payments.length} records found</div>`;

        this.payments.forEach(payment => {
            const paymentRow = document.createElement('payment-row-expandable');
            paymentRow.payment = payment;
            this.appendChild(paymentRow);
        });
    }
}

customElements.define('payments-grid', PaymentsGrid);