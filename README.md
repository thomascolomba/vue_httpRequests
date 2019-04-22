# ejemplo3

## source code
vue.config.js -> defines VUE_APP_BNUM_BACKEND_NAMESPACE to tell apart the http requests from one SPA to another
---
src/services/ -> contains the code dealing with the http requests
src/services/*.service.js -> reusable services (reusable through different controllers/SPA)
src/services/backend_endpoints_urls.js -> lists endpoints to hit in the backend
src/services/ToTheBackend.js -> only part of the application actually talking to the backend
---
src/components/HelloWorld.vue -> some controller...
