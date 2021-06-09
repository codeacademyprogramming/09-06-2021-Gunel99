import { IUser, IPlaylist, ISong } from "./interfaces";

export const Users : IUser[] = [
    {
        _id: '1',
        name: 'Gunel',
        surname: 'Memmedova',
        pass: 'test12345',
        email: 'gunelum@code.edu.az'
    },
    {
        _id: '2 ',
        name: 'Zaur',
        surname: 'Haciyev',
        pass: 'test12345',
        email: 'zaurha@gmail.com'
    }
];

export const Playlists : IPlaylist[] = [
    {
        _id: '1',
        name: 'Gunelin playlisti',
        creation_date: '09/06/2021',
        userId: '1',
        songsId: ['1', '2']
    },
    {
        _id: '2',
        name: 'Zaurun playlisti',
        creation_date: '08/06/2021',
        userId: '2',
        songsId: ['3']
    }
];

export const Songs: ISong[] = [
    {
        _id: '1',
        name: 'Arcade',
        artists: 'Duncan Laurence',
        upload_date: '19/05/2019',
        media_url: 'https://www.youtube.com/watch?v=R3D-r4ogr7s'
    },
    {
        _id: '2',
        name: 'FRIENDS',
        artists: 'Marshmello & Anne-Marie',
        upload_date: '16/02/2018',
        media_url: 'https://www.youtube.com/watch?v=CY8E6N5Nzec'
    },
    {
        _id: '3',
        name: 'Rainbow',
        artists: 'Sia',
        upload_date: '21/09/2017',
        media_url: 'https://www.youtube.com/watch?v=vZlORTi2SvI'
    }
]