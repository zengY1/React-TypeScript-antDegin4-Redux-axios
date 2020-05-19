import axios from 'axios'
export default function Request(option: any) {
    let { data, url, method = "POST" } = option;
    const options = {
        url: url,
        method: method,
        data: data
    };
    axios.defaults.headers.common.Authorization = window.localStorage.accessToken
    // if (method === "GET" || method === "DELETE") {
    //     options.params = data;
    //   } else {
    //     options.data = data;
    //   }
    return axios(options)
        .then(response => {
            const { statusText, status, data } = response;
            let result = {
                data
            };
            if (typeof data === "object") {
                result = data;
                if (Array.isArray(data)) {
                    // result.list = data;
                }
            } else {
                result.data = data;
            }
            //返回体
            return Promise.resolve({
                ...result
            });
        })
        .catch(error => {
            const { response, message } = error;
            let msg;
            let statusCode;

            if (response && response instanceof Object) {
                const { data, statusText } = response;
                statusCode = response.status;
                msg = data.message || statusText;
            } else {
                statusCode = 600;
                msg = error.message || "Network Error";
            }

            /* eslint-disable */
            return Promise.reject({
                statusCode,
                message: msg
            });
        });
}