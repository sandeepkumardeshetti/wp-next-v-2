import { Rochester, Montserrat } from "next/font/google";

import localFont from 'next/font/local'

export const rock = Rochester({
    weight: '400',
    subsets: ['latin'],
    variable: '--rochester-font'
})


export const montserrat = Montserrat({ 
    weight: ['400','500','600', '700','800'],
    subsets: ["latin"],
    display:'swap',
    variable: '--font-monsterret',
  });


// Font files can be colocated inside of `app`
export const postsen = localFont({
    src: './PoetsenOne-Regular.ttf',
    display: 'swap',
    variable: '--postsen',
  })
  