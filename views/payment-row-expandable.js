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

    set payment(payment) { //TODO: user properties will be changed to payment properties
        this.innerHTML = `
                            <style>
                                @import "../styles/payment-row-expandable.css";
                            </style>
                            <div class="expandable">
                                <b>${payment.username}</b>
                                <div>${payment.name},  ${payment.email}, ${payment.phone}</div>
                            </div>
                            <div class="panel">
                                <p>${payment.address.street} ${payment.address.zipcode}</p>
                            </div>
                            `;
    }
}

customElements.define('payment-row-expandable', PaymentRowExpandable);