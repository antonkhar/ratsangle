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
      longDesk: 'This is the very first of the rats that appeared. When she finds herself in a common cage with others, she immediately fights with them and shows her dominance. The most massive and toughest of rats.', photo: '/docs/assets/photo/kamishka.jpg' },
      { id: 2, name: 'CatKiller', shortDesk: 'The main coward in team', 
      longDesk: 'This rat was supposed to be the strongest and bravest, but it became the main coward. For a long time I was afraid to learn to jump, get out of the cage and contact people. He likes to sit in his house and sleep.', photo: '/docs/assets/photo/catkiller.jpg'   },
      { id: 3, name: 'Venera', shortDesk: 'A very shy rat', 
      longDesk: 'This rat has a Siamese color, Dumbo ears. Very shy and fat (similar to me), likes to fold blankets.', photo: '/docs/assets/photo/venera.jpg'   },
      { id: 4, name: 'Chanel', shortDesk: "She' definitely cute", 
      longDesk: 'This rat has a white color, ears are standard. The most modest and intelligent, very fastidious in food and has a weak immune system.', photo: '/docs/assets/photo/chanel.jpg'   },
      { id: 5, name: 'Sharlota', shortDesk: 'Like a spider, but a rat', 
      longDesk: 'This rat has a сhocolate color, Dumbo ears, the most active, perfectly teaches other rats to mess around, climbs cabinets like spider-man', photo: '/docs/assets/photo/sharlotta.jpg'   },
      { id: 6, name: 'Shprotta', shortDesk: 'Everything is clear by name', 
      longDesk: "This rat is a terror on the wings of the night, but not really evil. Just looks like an evil one... this rat is a double-rex breed, but I would call it a nosferatu. Now you've seen her - live with it.", photo: '/docs/assets/photo/shprota.jpg'   },
      { id: 7, name: 'Kira', shortDesk: 'It looks good in the photo', 
      longDesk: 'Kira is a decorative rat. Decorative rats are the most common breed that is most often chosen as a pet. She has a sharp mind, she can be trained in various commands. Such qualities as friendliness and docility also go to her intelligence', photo: '/docs/assets/photo/kira.jpg'   },
      { id: 8, name: 'Lira', shortDesk: 'Fearsome eyes (or not?)', 
      longDesk: 'Lyra is a decorative painted rat called "Amber". This coloring is characterized by red eyes and beige-brown coat color. A friendly and cute rat that attracts the attention of all people', photo: '/docs/assets/photo/lira.jpg'   },
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}