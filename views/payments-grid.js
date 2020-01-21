import './payment-row-expandable.js';

class PaymentsGrid extends HTMLElement {

    constructor() {
        super();

    }

    connectedCallback() {
        let customHtml = `<div id = "toolbar" class="grid-toolbar">
                            <button>Add Payment</button>
                            <span> | </span>
                            <input type="text" placeholder="filter by any property">                            
                            <span> | </span>
                            <button>Filter</button>
                            <div id="grid_header" class="grid-header">${this.payments.length} records found</div>
                        </div>`
        this.innerHTML = customHtml; //`<div id="grid_header">${this.payments.length} records found</div>`;

        this.payments.forEach(payment => {
            const paymentRow = document.createElement('payment-row-expandable');
            paymentRow.payment = payment;
            this.appendChild(paymentRow);
        });

        let totalAmount = 0;
        for(var p in this.payments) {
            totalAmount += this.payments[p].amount;
        }
        let totalAmountDiv = document.createElement('div');
        totalAmountDiv.innerHTML = `<div class="total-amount">Total: <br>${totalAmount}</div>`;
        this.appendChild(totalAmountDiv);
    }
}

customElements.define('payments-grid', PaymentsGrid);