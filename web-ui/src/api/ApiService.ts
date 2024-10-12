import axios from 'axios';

export default class ApiService {
    static host = 'http://127.0.0.1:5000';
    //static host = import.meta.env.VITE_API_URL;

    static async zoom(
        startDate: string,
        endDate: string,
        feature: string
    ): Promise<number[]> {
        return [1.0,1.6,0.4,0.0,0.0,0.0,0.0,0.0,0.0,0.5,0.0,0.0,0.0,0.0,0.8,0.3,0.0,0.0,0.0,0.0,0.0,0.4,0.5,0.2];
        /* const url = `${this.host}/zoom`;
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        };
        const resp = await axios.get(url, {
            params: {
                startDate: startDate,
                endDate: endDate,
                feature: feature,
            },
            headers: headers,
        });

        console.log(resp);
        return resp.data; */
    }

    static upload(file: File): Promise<void> {
        const url = `${this.host}/upload`;
        const formData = new FormData();
        formData.append('file', file);
        return axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

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
