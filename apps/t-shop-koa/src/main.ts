import Koa from "koa"
import { router } from './modules'


const app = new Koa()

const main = async () => {
  app.use(router.routes())
  app.use(router.allowedMethods())

  app.listen(11451, () => {
    console.info("Server is running on port 11451")
  })
}

main().catch(console.error)
