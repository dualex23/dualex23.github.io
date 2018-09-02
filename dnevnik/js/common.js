$(function() {

    // ваш id
    const my_id = 101782492;

    const albumItems = $('#albums');
    const photosInAlbum = $('#photosInAlbum');
    const image = $('.img img[data-photo_id]');
    const popup = $('#popup');
    let album_ids = [];
    let gallery = [];
    

    // СОБЫТИЕ: получаем альбомы
    $('#btn').on('click', loadAlbums);

    // выводим фотографии
    $(document).on('click', '.album', function(event) {
        event.preventDefault();

        let id = +$(event.target).data('album_id');
        
        sendRequest('photos.get', { owner_id: my_id, album_id: id, extended: 1, count: 10}, fetchPhotos);
    });

    // открываем фото
    $(document).on('click', '.img img[data-photo_id]', function(event) {
        event.preventDefault();
        let clicked_id = +$(event.target).data('photo_id');

        $('.bg').removeClass('hidden');

        for(let i = 0; i < gallery.length; i++) {
            photo = gallery[i];

            if (clicked_id === photo.photo_id) {
                popup.html('<div class="img"><img src=' + photo.photo_604 +' alt="alt" data-photo_id="'+ photo.photo_id +'"><div id="close" class="icon"></div></div>')
            }
        }
        
    });

    // закрываем фото
    $(document).on("click", '#close', function () {
        
        
        if ( !$(".bg").hasClass(".hidden") ) {
            $(document).mouseup(function (e){
                if (!popup.is(e.target) && popup.has(e.target).length === 0) {
                    $(".bg").addClass("hidden");
                }
            });
        }

        $(".bg").toggleClass("hidden");

    });



    
    

    // ================================================

    // ЗАГРУЗКА альбомов по параметрам
    function loadAlbums() {
        VK.Api.call('photos.getAlbums', {owner_id: my_id, need_covers: 1, count: 5}, function (data) { 
            fetchAlbums(data.response.items)
        });
    }

    // выводим альбомы с обложками из API photos.getAlbums
    function fetchAlbums(albums) {
        let html = '';
        let album;

        for(let i = 0; i < albums.length; i++) {
            album = albums[i];

            html += '<a class="album" href="#">' +
            '<img src="'+ album.thumb_src + 
            '" data-album_id="'+ album.id +'" alt="' + album.title + 
            '">';

            album_ids.push(album.id);
            
        }

        return albumItems.html(html);
    }

    // выводим фотографии с обложками из API photos.getAlbums
    function fetchPhotos(data) {
        let photos = data.response.items;
        let html = '';

        gallery.length = 0;

        for(let i = 0; i < photos.length; i++) {

            let photo = photos[i];

            html += '<div class="photo"><div class="img"><img src=' + photo.photo_604 +' alt="alt" data-photo_id="'+ photo.id +'"></div><div class="info"><div class="likes"><span class="icon"></span> ' + photo.likes.count + '</div><div class="comments">' + photo.comments.count + '<span class="icon"></span></div></div></div>';

            photosInAlbum.html(html);

            gallery.push({"photo_id": photo.id, "photo_604": photo.photo_604});

        
        }

    }
        

});