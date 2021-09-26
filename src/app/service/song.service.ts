import { Injectable } from '@angular/core';
import {Song} from "../model/song";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  playlist: Song[] = [
    {id: 'LsoLEjrDogU', name: 'Bruno Mars - Finesse (Remix) (feat. Cardi B) (Official Music Video)'},
    {id: 'gl1aHhXnN1k', name: 'Ariana Grande - thank u, next (Official Video)'},
    {id: '0EVVKs6DQLo', name: 'Doja Cat - Kiss Me More (Official Video) ft. SZA'},
    {id: 'kTJczUoc26U', name: 'The Kid LAROI, Justin Bieber - STAY (Official Video)'},
    {id: 'orJSJGHjBLI', name: 'Ed Sheeran - Bad Habits [Official Video]'},
    {id: 'mBCjNXG9a3s', name: 'The Playah (Special Performance) - SOOBIN | Live at Studio'},
  ]

  constructor() { }

  findSongById(id: string | null) {
    return this.playlist.find(item => item.id === id);
  }
}
