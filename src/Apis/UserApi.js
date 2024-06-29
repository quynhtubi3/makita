export const UserApi = class {
    static Login({ username, password }) {
        if (username === "quynhtubi3" && password === "quynh123") {
            return 1;
        }
        return 0;
    }
};
