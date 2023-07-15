//Q40. Album...
function Make_Album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(Make_Album('Michae JAckson', 'Thriller'));
console.log(Make_Album('AC/DC', 'Black in Black'));
console.log(Make_Album('Mac', 'The Chain', 4));
