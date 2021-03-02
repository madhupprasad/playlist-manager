export default function adaptRequest(req ={}){
    return Object.freeze({
        url: req.url,
        path: req.path,
        method: req.method,
        queryParams: req.query,
        pathParams: req.params,
        body: req.body,
        userid: req.userid
    });
}