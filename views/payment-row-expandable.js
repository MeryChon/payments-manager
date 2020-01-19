class PaymentRowExpandable extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const expandable = this.getElementsByClassName('expandable')[0];
        let me = this;
        expandable.addEventListener('click', function () {
            this.classList.toggle('active');
            let panel = me.getElementsByClassName('panel')[0];
            if (panel && panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else if (panel) {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    set payment(payment) {
        this.innerHTML = `
                            <style>
                                @import "../styles/payment-row-expandable.css";
                            </style>
                            <div class="expandable">
                                <b>${payment.description}</b>
                                <div>${payment.comment},  ${payment.paymentDate}, ${payment.amount}</div>
                            </div>
                            <div class="panel">
                                <p>${payment.comment}</p>
                            </div>
                            `;
    }
}

customElements.define('payment-row-expandable', PaymentRowExpandable);