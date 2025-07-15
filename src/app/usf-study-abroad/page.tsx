import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function USFStudyAbroad() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header subtitle="USF Study Abroad" />
      
      <main className="flex flex-col items-center flex-1">
        <div className="w-full max-w-[680px] px-10 py-20 flex flex-col gap-10 max-[999px]:max-w-[680px] max-[999px]:px-10 max-[999px]:py-20 max-[809px]:max-w-full max-[809px]:px-5 max-[809px]:py-10 max-[809px]:gap-[30px]">
          
          {/* Header Section */}
          <div className="flex flex-col gap-5">
            <h1 className="h1">🌎</h1>
            <h1 className="h1">USF Study Abroad</h1>
          </div>

          {/* First Image Block */}
          <div className="w-full aspect-video bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg overflow-hidden">
            <Image
              src="/placeholder-framer.png"
              alt="Framer design mockup"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* First Body Text */}
          <p className="body-text">
            This is an example page. Framer is an interactive design tool for 
            websites and prototyping. It excels at building landing pages, 
            marketing sites, online campaigns, and much more. It supports you 
            in every part of the design process, from creating mockups to 
            interactive prototypes, but its unique strength is the ability to 
            publish directly from a freeform canvas. It's incredibly fast, 
            expressive, and free to try.
          </p>

          {/* H2 Heading */}
          <h2 className="h2">H2 Heading</h2>

          {/* Second Body Text */}
          <p className="body-text">
            This is a paragraph. That basil curry lime almonds green bowl 
            That dragon pepper crispy cherries lentils red grapes grapefruit 
            banana four-layer kung pao pepper cremini mushrooms Chinese five-spice 
            powder chickpea crust pizza cherry bomb pepper tasty chia seeds.{' '}
            <a href="#" className="link-blue">This is an inline link</a>.
          </p>

          {/* Second Image Block */}
          <div className="w-full aspect-video bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg overflow-hidden">
            <Image
              src="/placeholder-framer2.png"
              alt="Framer components panel"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* H3 Heading */}
          <h2 className="h2">H3 Heading</h2>

          {/* Final Body Text */}
          <p className="body-text">
            This is a paragraph. That basil curry lime almonds green bowl 
            That dragon pepper crispy cherries lentils red grapes grapefruit 
            banana four-layer kung pao pepper cremini mushrooms Chinese five-spice 
            powder chickpea crust pizza cherry bomb pepper tasty chia seeds.
          </p>

        </div>
      </main>

      <Footer />
    </div>
  )
}