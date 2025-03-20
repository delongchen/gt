import { router } from './router'
import type { HomePageInfo, HomeGridItem } from 't-shop-types'


const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperImages = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
];

const toGridItem = ([id, text, imageId]: [string, string, number]): HomeGridItem => {
  return {
    id,
    text,
    image: `https://tdesign.gtimg.com/mobile/demos/example${imageId}.png`
  }
}

const homeGridItems: HomeGridItem[] = ([
  ['hot', '热销', 1],
  ['new', '新品', 2],
  ['raw-tea', '生茶', 3],
  ['old-tea', '熟茶', 1],
  ['orange', '青柑/陈皮', 2],
  ['gift-box', '礼盒', 3],
  ['tea-cup', '茶器', 1],
  ['goods', '周边', 2],
] satisfies [string, string, number][]).map(toGridItem)

router.get("/home", async ctx => {
  ctx.body = {
    swiperImages,
    homeGridItems,
  } satisfies HomePageInfo
})
