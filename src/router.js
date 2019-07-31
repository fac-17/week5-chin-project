const handlers=require('./handler')

const router = (request, response) => {
  const endpoint = request.url;

  if(endpoint === '/'){
    handlers.handleHome(request, response)
  }
  else {
    handlers.handleError(request, response)
  }
}


module.exports = router;