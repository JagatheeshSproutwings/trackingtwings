import fetch from 'auth/FetchInterceptor'
import axios from 'axios'
import api, { setTokenInHeaders } from 'configs/apiConfig';

const AuthService = {}


AuthService.login = function (data)
{
	
	const response = api.post("login",data).then(data=>data).catch(data=>data);

	return response;
}

AuthService.register = function (data) {
	return fetch({
		url: '/auth/register',
		method: 'post',
		data: data
	})
}

AuthService.logout = function () {
	return fetch({
		url: '/auth/logout',
		method: 'post'
	})
}

AuthService.loginInOAuth = function () {
	return fetch({
		url: '/auth/loginInOAuth',
		method: 'post'
	})
}

export default AuthService;