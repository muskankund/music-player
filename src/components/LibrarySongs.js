import React from "react";

const LibrarySongs = ({ song, songs, setCurrentSong, id, audioRef, isPlaying , setSongs}) => {
    const selectSong = async () => {
        await setCurrentSong(song);
        // Active song

        const newSong = songs.map((song) => {
            if(song.id === id){
                return{
                    ...song,
                    active: true,
                };
            }
            else{
                return{
                    ...song,
                    active: false,
                };
            }
        });

        setSongs(newSong);
        if(isPlaying) audioRef.current.play();
    };
    return (
        <div onClick={selectSong} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img alt={song.name} src={song.cover} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>

        </div>
    );
}

export default LibrarySongs;