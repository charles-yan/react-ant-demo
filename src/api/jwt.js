/**
 *
 * @authors 
 * @date   
 * @version $Id$
 */
export default{
	setToken(token){
		localStorage.setItem('jwt_token',token);
	},
	getToken(){
		localStorage.getItem('jwt_token');
	},
	removeToken(){
		localStorage.removeItem('jwt_token');
	}
}
