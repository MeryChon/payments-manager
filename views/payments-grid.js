import './payment-row-expandable.js';

class PaymentsGrid extends HTMLElement {

    constructor() {
        super();

    }

    connectedCallback() {
        let customHtml = `<div id = "toolbar">
                            <button>Add Payment</button>
                            <span> | </span>
                            <input type="text" placeholder="filter by any property">                            
                            <span> | </span>
                            <button>Filter</button>
                            <div id="grid_header">${this.payments.length} records found</div>
                        </div>`
        this.innerHTML = customHtml; //`<div id="grid_header">${this.payments.length} records found</div>`;

        this.payments.forEach(payment => {
            const paymentRow = document.createElement('payment-row-expandable');
            paymentRow.payment = payment;
            this.appendChild(paymentRow);
        });
    }
}

customElements.define('payments-grid', PaymentsGrid);