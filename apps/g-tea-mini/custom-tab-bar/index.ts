import { items } from './items'

Component({
  properties: {

  },
  data: {
    items,
    activeIndex: 0,
  },
  methods: {
    init() {
      console.info('init')
    },
    async switchTab(index: number, path: string) {
      if (index === this.data.activeIndex) return

      this.setData({ activeIndex: index }, () => {
        wx.switchTab({url: `/${path}`})
      })
    },
    async onTabChange(ev: any) {
      const index: number = ev.detail.value
      const exist = items[index]

      if (exist !== undefined) {
        await this.switchTab(index, exist.path)
      }
    }
  }
})
