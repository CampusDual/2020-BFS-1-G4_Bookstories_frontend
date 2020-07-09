import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'books', name: 'BOOKS', icon: 'book', route: '/main/books' },
  { id: 'books', name: 'AUTHORS', icon: 'person', route: '/main/authors' },
  { id: 'lists', name: 'MYLIST', icon: 'bookmarks', route: '/main/lists' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
