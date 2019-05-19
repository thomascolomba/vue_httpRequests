import BackendEndpointsUrl from './backend_endpoints_urls.js'
import ToTheBackend from './ToTheBackend.js'

var MyOtherBusinessObject = {
  getMyOtherBusinessObject(){
    return ToTheBackend.doGet(BackendEndpointsUrl.myOtherBusinessObject)
	}
}

export default MyOtherBusinessObject
