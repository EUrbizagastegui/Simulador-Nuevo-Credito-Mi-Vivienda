import httpCommon from "../http-common/http-common";

class UserService {
    create(data) {
        return httpCommon.post('/users', data);
    }

    update(id, data) {
        return httpCommon.put(`/users/${id}`, data);
    }

    delete(id) {
        return httpCommon.delete(`/users/${id}`);
    }

    verifyUser(data) {
        return httpCommon.post('/users/verify-user', data);
    }

    getAllPaymentSchedules(id) {
        return httpCommon.get(`/users/${id}/payment-schedules`);
    }
}

export default new UserService()
