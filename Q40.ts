//Q40. Album...

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function Make_Album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(Make_Album('Michae JAckson', 'Thriller'));
console.log(Make_Album('AC/DC', 'Black in Black'));
console.log(Make_Album('Mac', 'The Chain', 4));