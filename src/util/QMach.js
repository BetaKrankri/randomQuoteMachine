export const QMach = {
    getQuoteAuthor: function () {
        return fetch('https://api.api-ninjas.com/v1/quotes?category=home', {
            headers: { 'X-Api-Key': 'shli7hye/vgFRn1nvgpcMA==NQMluQC90IpVwFRw' },
            contentType: 'application/json',
        }).then(response => response.json())
            .then(jsonResponse => {
                //console.log('the jsonResponse : ' + JSON.stringify(jsonResponse));
                return jsonResponse[0];
            });
    }
}