  

// ОБЩЕЕ => подключение api метод+параметры
function getUrl(method, params) {
    if(!method) {
        throw new Error('Вы не указали параметры');
    }
    params = params || {};
    // сюда вставить токен
    params['access_token'] = '6c683f6ab477c25a08222b7d1973750c964972a90b440b193ad269edeed7b7fa9e11cac26034cce10dd49';
    return 'https://api.vk.com/method/'+ method +'?' + $.param(params) + '&v=5.52';
}

// ОБЩЕЕ => универсальный ajax запрос
// function sendRequest(method, params, callback) {

//     $.ajax({
//         url: getUrl(method, params),
//         method: 'GET',
//         dataType: 'JSONP',
//         success: callback
//     })

// }

function authInfo(response) {
    console.log(response)
    if (response.session) {
        alert('user: ' + response.session.mid);
    } else {
        alert('not auth');
    }
}  
VK.Auth.login(authInfo);

// VK.Api.call('photos.getAlbums', {owner_id: 101782492, need_covers: 1, count: 5}, function (data) { 
//     fetchAlbums(data.response.items)
// });