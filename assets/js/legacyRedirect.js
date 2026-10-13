function legacyRedirect() {
    var query = window.location.search.substring(1);
    if(query.includes("page_id=2678&lang=de")){
        window.location.replace("/");}
    else if(query.includes("page_id=3484&lang=de")){
        window.location.replace("/projects/fva30/");}
    else if(query.includes("page_id=2781&lang=de")){
        window.location.replace("/projects/fva29/");}
    else if(query.includes("page_id=397&lang=de")){
        window.location.replace("/projects/fva24/");}
    else if(query.includes("page_id=2603&lang=en")){
        window.location.replace("/en/");}
    else if(query.includes("page_id=3640&lang=en")){
        window.location.replace("/en/projects/fva30/");}
    else if(query.includes("p=")){
    window.location.replace((query.includes("&lang=en")? "/en/" : "/") + query + ".html");}
}