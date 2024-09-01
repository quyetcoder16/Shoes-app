import axios from "axios"


export const DOMAIN = 'https://shop.cyberlearn.vn/api'
export const ACCESS_TOKEN: string = 'ACCESS_TOKEN'
export const USER_LOGIN: string = 'USER_LOGIN'


export const settings = {
    setStorageJson: (name: string, data: any): void => {
        data = JSON.stringify(data);
        localStorage.setItem(name, data);
    },
    setStorage: (name: string, data: string): void => {
        localStorage.setItem(name, data)
    },
    getStorageJson: (name: string): any | undefined => {
        if (localStorage.getItem(name)) {
            const dataStore: string | undefined | null = localStorage.getItem(name);
            if (typeof dataStore == 'string') {
                const data = JSON.parse(dataStore);
                return data;
            }
            return undefined;
        }
        return; //undefined
    },
    getStore: (name: string): string | null | undefined | boolean | any => {
        if (localStorage.getItem(name)) {
            const data: string | null | undefined = localStorage.getItem(name);
            return data;
        }
        return; //undefined
    },
    setCookieJson: (name: string, value: any, days: number): void => {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        value = JSON.stringify(value);
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookieJson: (name: string): any => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return JSON.parse(c.substring(nameEQ.length, c.length));
        }
        return null;
    },
    setCookie: (name: string, value: string, days: number): void => {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie: (name: string): string | null => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    eraseCookie: (name: string): void => {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
    clearStorage: (name: string) => {
        localStorage.removeItem(name);
    }

}

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})

// cấu hình cho tất cả request gửi đi
// http.interceptor

http.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// cấu hình cho tất cả các response trả về
http.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // hàm cấu hình cho tất cả các lỗi trả về

    if (error?.response?.status == 400 || error?.response?.status == 404) {
        // chuyển hướng về trang chủ
        window.location.replace('/');
        // window.history.back(); // Quay lại trang trước đó
        // window.location.replace('/login'); // Chuyển hướng đến trang đăng nhập và không cho phép quay lại
    }

    return Promise.reject(error);
});

// - Các status code thường gặp
// 200: Request gửi đi và nhân về kết quả thành
// 281: request gửi đi thành công và đã được khởi tạo
// 408: bad request => request gửi đi thành công tuy nhiên không tìm thấy dữ liệu từ than số gửi đi
// 484: Not found (Không tìm thấy api đó), hoặc tương tự 480
// 401: Unauthorize token không hợp lệ không có quyền truy cập vào api đó
// 483: Forbinden token hợp lệ tuy nhiên chưa đủ quyền để truy cập vào api đó
// 500: Error server (Lỗi xãy ra trên server có khả năng là frontend gửi dữ liệu chưa hợp lệ dẫn đến backend xử lý bị lỗi).