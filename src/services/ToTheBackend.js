import Axios from 'axios'

var BackendURLNamespace = process.env.VUE_APP_BNUM_BACKEND_NAMESPACE// to be defined in the configuration

var ToTheBackend = {
		doGet: function (url){
			return Axios.get(BackendURLNamespace+url)
		}
}

export default ToTheBackend
