import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function RabbiLazowski() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header subtitle="Rabbi Lazowski" />
      
      <main className="flex flex-col items-center flex-1">
        <div className="w-full max-w-[680px] px-10 py-20 flex flex-col gap-10 max-[999px]:max-w-[680px] max-[999px]:px-10 max-[999px]:py-20 max-[809px]:max-w-full max-[809px]:px-5 max-[809px]:py-10 max-[809px]:gap-[30px]">
          
          {/* Header Section */}
          <div className="flex flex-col gap-5">
            <h1 className="h1">🔯</h1>
            <h1 className="h1">Rabbi Lazowski</h1>
          </div>

          {/* First Image Block */}
          <div className="w-full aspect-video bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg overflow-hidden">
            <Image
              src="/images/rabbi-hero.png"
              alt="Rabbi Lazowski project"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* First Body Text */}
          <p className="body-text">
          Rabbi Philip Lazowski is a spiritual leader and Holocaust survivor based in Connecticut.
          He has self-published several books, and was looking for a way to promote his latest, <u>Transforming Darkness into Light: A Holocaust Survivor’s Lessons on Fighting Hate</u>.
          His team requested a website that would help them sell the book, as well as centralize all of his works, appearances, and stories.
          </p>

          {/* H2 Heading */}
          <h2 className="h2">UX Design</h2>

          {/* Second Image Block */}
          <div className="w-full aspect-video bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg overflow-hidden">
            <Image
              src="/images/rabbi-wires.png"
              alt="Rabbi Lazowski wireframes"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>


          {/* Second Body Text */}
          <p className="body-text">
          We decided to approach this archival project like a museum: by using distinct pages to organize a large amount of information.
          In order to make Rabbi’s library of material digestible and navigable, we spent a lot of time sitemapping intuitive layouts.
          </p>
          {/* H3 Heading */}
          <h2 className="h2">Research</h2>

          {/* Third Image Block */}
          <div className="w-full aspect-video bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg overflow-hidden">
            <Image
              src="/images/rabbi-research.png"
              alt="Rabbi Lazowski research"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Final Body Text */}
          <p className="body-text">
          We conducted thorough research to ensure that the site was as comprehensive as possible.
          We sought out the remaining physical copies of his early works via BookFinder, 
          digitized old photographs, and developed visual maps to contextualize his survivorship story.
          </p>
          {/*
          <br></br>
          <br></br>
          You can view the completed project  <a href="#" className="link-blue">here</a>.
          </p>
          */}

        </div>
      </main>

      <Footer />
    </div>
  )
}