import Link from "next/link"
import { MainCarousel } from "../components/MainCarousel"
import { PromoCarousel } from "../components/PromoCarousel"
import { Social } from "../components/Social"
import { Services } from "../components/Services"

export default function Home() {
  return (
    <main>
        <MainCarousel />
        <div id="stores-link-container">
            <Link id="stores-link" href='/locales'>
                <div id="stores-back"></div>
                <h2 id="stores-title">locales</h2>
            </Link>
        </div>
        <PromoCarousel />
        <Social />
        <Services />
    </main>
  )
}