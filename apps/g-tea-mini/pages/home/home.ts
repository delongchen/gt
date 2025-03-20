interface SkeletonType {
  width?: string;
  size?: string;
  height?: string;
  marginRight?: string;
  marginLeft?: string;
  margin?: string;
  type?: 'rect' | 'circle' | 'text';
  borderRadius: string;
}

const GridSkeletonIcon: SkeletonType = {
  width: '96rpx',
  height: '96rpx',
  borderRadius: '12rpx',
} as const;

const GridSkeletonText: SkeletonType = {
  width: '96rpx',
  height: '32rpx',
  borderRadius: '6rpx',
} as const;

const createGridSkeleton = (row: number, col: number) => {
  const result: SkeletonType[][] = [];

  for (let i = 0; i < col; i++) {
    result.push(Array.from({ length: row }, () => GridSkeletonIcon));
    result.push(Array.from({ length: row }, () => GridSkeletonText));
  }

  return result;
}

const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
];

Page({
  data: {
    img1: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
    img2: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
    img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
    grid: createGridSkeleton(4, 2),
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
  },
  onLoad() {
    // wx.request({ url: 'https://wx.cdl.zone', success: console.info })
  },
  onReady() {

  },
  onShow() {
    this.getTabBar().init()
  },
  onHide() {

  },
  onUnload() {

  },
  onPullDownRefresh() {

  },
  onReachBottom() {

  },
  onShareAppMessage() {

  }
});