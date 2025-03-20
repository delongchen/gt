export interface HomeGridItem {
  id: string;
  text: string;
  image: string;
}

export interface HomePageInfo {
  swiperImages: string[];
  homeGridItems: HomeGridItem[];
}
