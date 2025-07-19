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
              src="/images/usf-hero.png"
              alt="USF Study AbroadCookbook"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* First Body Text */}
          <p className="body-text">
          USF’s Study Abroad department wanted to make a cookbook. They needed a digital platform where students could share their own cultural stories and recipes together.
          <br></br>
          <br></br>
          For this project, we needed a way for users to view, make, and sort through posts easily–much like a blog-forum hybrid.
          Framer was the top choice for a straightforward CMS + robust design capabilities.
          </p>

          {/* H2 Heading */}
          <h2 className="h2">UX Design</h2>

          {/* Second Image Block */}
          <div className="w-full aspect-video bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg overflow-hidden">
            <Image
              src="/images/usf-cards.png"
              alt="Recipe card design"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Body Text */}
          <p className="body-text">
          Cookbooks heavily rely on images in order to encourage viewers to follow a recipe.
          For the homepage, we decided to use cards with visuals to prioritize the images–they would help drive users towards the recipes they found most yummy-looking.
          </p>

          {/* H3 Heading */}
          <h2 className="h2">Tech Stack</h2>

          {/* Third Image Block */}
          <div className="w-full aspect-video bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg overflow-hidden">
            <Image
              src="/images/usf-flow.png"
              alt="Tech stack"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Final Body Text */}
          <p className="body-text">
          Recipes could be easily uploaded to the website via a simple automation. 
          First, we collected recipes (images + copy) in a specific format through a Google form. 
          The forms were fed into a Google sheet, which Zapier then sent to Framer’s CMS. 
          Recipe pages were automatically ready for the site moderators to review and edit inside of Framer before publishing.
          </p>
          {/*}
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