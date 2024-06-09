import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import 'vidstack/player';
import 'vidstack/player/ui';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
