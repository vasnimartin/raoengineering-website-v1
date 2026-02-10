import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Services } from './features/services/services';
import { About } from './features/about/about';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home | Rao\'s Consulting Engineers' },
  { path: 'services', component: Services, title: 'Services | Rao\'s Consulting Engineers' },
  { path: 'about', component: About, title: 'About Us | Rao\'s Consulting Engineers' },
  { path: 'projects', component: Projects, title: 'Projects | Rao\'s Consulting Engineers' },
  { path: 'contact', component: Contact, title: 'Contact | Rao\'s Consulting Engineers' },
  { path: '**', redirectTo: '' }
];
