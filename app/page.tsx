import { getServerLanguage } from "@/lib/locale"
import HomeClient from "./home-client"

export default async function Page() {
  const initialLang = await getServerLanguage()
  return <HomeClient initialLang={initialLang} />
}
