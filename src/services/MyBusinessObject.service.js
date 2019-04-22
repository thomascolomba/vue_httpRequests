import {BackendEndpointsUrl} from './backend_endpoints_urls.js';
import {ToTheBackend} from './ToTheBackend.js';

export default {
	getMyBusinessObject(){
		return ToTheBackend().doGet(BackendEndpointsUrl().myBusinessObject);
	}
};