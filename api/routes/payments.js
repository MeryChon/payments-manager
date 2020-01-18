'use strict';

module.exports = function (app) {
    var payments = require('../controllers/paymentsController');

    app.route('/payments')
        .get(payments.list_all_payments)
        .post(payments.create_payment);

    app.route('/payments/:paymentId')
        .get(payments.get_payment)
        .put(payments.update_payment)
        .delay(payments.delete_payment);
}