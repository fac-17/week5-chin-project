const handlers=require('./handler')

const router = (request, response) => {
  const endpoint = request.url;

  if(endpoint === '/'){
    handlers.handleHome(request, response);
  } else if (endpoint.startsWith('/public')) {
    handlers.handlePublic(request, response, endpoint);
  } else if (endpoint.startsWith('/search')) {
    handlers.handleSearch(request, response, endpoint);
  }
   else {
    handlers.handleError(request, response);
  }
};




module.exports = router;
