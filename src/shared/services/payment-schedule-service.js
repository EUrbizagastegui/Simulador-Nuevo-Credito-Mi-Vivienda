import httpCommon from "../http-common/http-common";

class PaymentScheduleService {
    create(data) {
        return httpCommon.post("/paymentschedules", data);
    }

    update(id, data) {
        return httpCommon.put(`/paymentschedules/${id}`, data);
    }

    delete(id) {
        return httpCommon.delete(`/paymentschedules/${id}`);
    }
}

export default new PaymentScheduleService()
