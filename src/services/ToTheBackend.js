import Axios from 'axios'; 

var BackendURLNamespace = process.env.VUE_APP_BNUM_BACKEND_NAMESPACE;//to be defined in the configuration

export function ToTheBackend() {
	return {
		doGet(url){
			return Axios.get(BackendURLNamespace+url);
		}
	}
};
