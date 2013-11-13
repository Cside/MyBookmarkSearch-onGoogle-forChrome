chrome.extension.onRequest.addListener(function(query, sender, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', query, true);
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            onSuccess(xhr.responseText);
        }else{
            return;
        }
    };
    xhr.send(null);

});