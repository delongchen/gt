interface TabBarItem {
  key: string;
  icon: string;
  text: string;
  path: string;
}

export const items: TabBarItem[] = [
  {
    key: 'home',
    icon: 'home',
    text: '主页',
    path: 'pages/home/home',
  },
  {
    key: 'user',
    icon: 'person',
    text: 'user',
    path: 'pages/user/user',
  }
]
