import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'KaMishka', shortDesk: 'The very first rat', 
      longDesk: '', photo: './src/assets/photo/lira.jpg' },
      { id: 2, name: 'CatKiller', shortDesk: 'The main coward in team', 
      longDesk: '', photo: './src/assets/photo/lira.jpg'   },
      { id: 3, name: 'Venera', shortDesk: 'A very active rat', 
      longDesk: '', photo: './src/assets/photo/venera.jpg'   },
      { id: 4, name: 'Chanel', shortDesk: "She' definitely cute", 
      longDesk: '', photo: './src/assets/photo/chanel.jpg'   },
      { id: 5, name: 'Sharlota', shortDesk: 'Like a spider, but a rat', 
      longDesk: '', photo: './src/assets/photo/sharlotta.jpg'   },
      { id: 6, name: 'Shprotta', shortDesk: 'Everything is clear by name', 
      longDesk: '', photo: './src/assets/photo/shprota.jpg'   },
      { id: 7, name: 'Kira', shortDesk: 'It looks good in the photo', 
      longDesk: 'Kira is a decorative rat. Decorative rats are the most common breed that is most often chosen as a pet. She has a sharp mind, she can be trained in various commands. Such qualities as friendliness and docility also go to her intelligence', photo: './src/assets/photo/kira.jpg'   },
      { id: 8, name: 'Lira', shortDesk: 'Fearsome eyes (or not?)', 
      longDesk: 'Lyra is a decorative painted rat called "Amber". This coloring is characterized by red eyes and beige-brown coat color. A friendly and cute rat that attracts the attention of all people', photo: './src/assets/photo/lira.jpg'   },
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}