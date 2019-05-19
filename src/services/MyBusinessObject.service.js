import BackendEndpointsUrl from './backend_endpoints_urls.js'
import ToTheBackend from './ToTheBackend.js'

var MyBusinessObject = {
  getMyBusinessObject(){
    return ToTheBackend.doGet(BackendEndpointsUrl.myOtherBusinessObject)
	}
}

export default MyBusinessObject
