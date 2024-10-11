import axios from 'axios';

export default class ApiService {
    static host = import.meta.env.VITE_API_URL;

    static async test() {
        const url = `https://httpbin.org/get`;
        const resp = await axios.get(url).catch(this.handleCatch);
        console.log(resp);
    }
    static async login(username: string, password: string): Promise<boolean> {
        const url = `${this.host}/login`;
        const resp = await axios
            .post(url, {
                username: username,
                password: password,
            })
            .catch(this.handleCatch);
        if (resp.status === 200) {
            sessionStorage.setItem('user-token', resp.data.token);
            return true;
        }

        return false;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static handleCatch(error: any) {
        console.error(error);
        return error;
    }
}
