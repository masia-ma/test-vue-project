import { extend } from 'umi-request';

const errorHandler = error => {
  console.log("error", error);
  console.log("error.response", error.response);
  console.log("error.response.body", error.response.body);
  throw error;
};

const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  timeout: 15000,
});

// request拦截器, 改变url 或 options.
request.interceptors.request.use(async (url, options) => {
  return {
    url: url,
    options: { ...options },
  };
});


// response拦截器, 处理response
request.interceptors.response.use((response, options) => {
  console.log("response, options", response, options);
  return response;
});

export default request;