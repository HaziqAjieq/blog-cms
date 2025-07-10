// test image
import testImg2 from '../assets/public/dummy/image.png';
import testImg3 from '../assets/public/dummy/image3.jpg';
import testImg from "../assets/public/dummy/testImg.jpeg";
import { User,  Platform , Tag , BlogPost } from './ExampleOOP.js'

// paltform image
import mobile from '../assets/public/dummy/mobile.jpeg'
import ps5 from '../assets/public/dummy/ps5.jpg'
import xbox from '../assets/public/dummy/xbox.jpeg'
import nintendo from '../assets/public/dummy/nintendo2.jpeg'
import pc from '../assets/public/dummy/pc.jpeg'



// creating a reusable object
  // create a user object
  const haziqajieq = new User(1 ,'Haziq Ajieq');
  const breyguire = new User(2, 'Brey Guire');
  const tehbeng = new User(3, 'Tehbeng');

  // create platform object
  const ps5Platform = new Platform(1,'PS5' ,'playstation-5' ,ps5);
  const xboxPlatform = new Platform(2,'XBOX','xbox',xbox);
  const nintendoPlatform = new Platform(3,'NINTENDO SWITCH', 'nintendo-switch',nintendo);
  const pcPlatform = new Platform(4,'PC','pc',pc);
  const mobilePlatform = new Platform(5,'MOBILE','mobile',mobile);

  // create tag for genre object
  const rpg = new Tag(1,'RPG');
  const fps = new Tag(2,'FPS');
  const mmo = new Tag(3,'MMO');
  const storyRich = new Tag(4,'STORY RICH');



//  temporary function to get random image and date
const getRandomImage = () =>{
  const images = [testImg , testImg2 ,testImg3];
  return images[Math.floor(Math.random() * images.length)];
}

const getRandomDate = () =>{
  const now = new Date();
  const past = new Date(now);
  past.setFullYear(now.getFullYear() - 1);

  return new Date(past.getTime() + Math.random() * (now.getTime() - past.getTime())).toISOString();
};
  

// create example blogpost using exampleOOP

export const examplePost =[
   new BlogPost({
    id: 1,
    title: 'The Future of Open-World RPGs',
    slug: 'future-open-world-rpgs',
    content: 'The gaming industry has seen tremendous growth in open-world RPGs over the past decade. Games like Elden Ring and The Witcher 3 have set new standards for immersive worlds. Developers are now focusing on creating more dynamic ecosystems where player choices have long-term consequences.\n\nWith the advancement of AI and procedural generation, we can expect even more lifelike NPCs and environments. The next generation of open-world games will likely blur the line between scripted content and emergent gameplay, offering truly unique experiences for each player.',
    excerpt: 'Exploring the evolution and future possibilities of open-world RPG game design.',
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: haziqajieq,
    platform: [ps5Platform, pcPlatform],
    tags: [rpg],
    status: 'published'
  }),

  new BlogPost({
    id: 2,
    title: 'Mobile Gaming: The Rise of Competitive Play',
    slug: 'mobile-gaming-competitive',
    content: 'Mobile gaming has evolved far beyond casual time-wasters. Titles like Genshin Impact and PUBG Mobile have demonstrated that mobile platforms can support complex, competitive gameplay. The accessibility of smartphones has created a massive player base that rivals traditional consoles.\n\nEsports organizations are now investing heavily in mobile gaming leagues. The lower barrier to entry means more players can participate at competitive levels. As mobile hardware continues to improve, we may see even more AAA titles making their way to handheld devices.',
    excerpt: 'How mobile gaming is becoming a serious platform for competitive play.',
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: breyguire,
    platform: [mobilePlatform],
    tags: [mmo],
    status: 'published'
  }),

  new BlogPost({
    id: 3,
    title: 'Nintendo Switch 2: What We Know So Far',
    slug: 'nintendo-switch-2-rumors',
    content: 'Rumors about Nintendo\'s next console have been circulating for months. Industry insiders suggest the Switch successor will maintain the hybrid design while significantly upgrading hardware capabilities. A 4K output when docked seems likely, along with improved battery life for portable play.\n\nBackward compatibility is a major concern for fans. Nintendo has a mixed history with supporting previous generations, but the massive Switch install base may force their hand. The new console is expected to launch in late 2024 with a new 3D Mario title as its flagship game.',
    excerpt: 'Compiling all the credible leaks about Nintendo\'s next console.',
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: tehbeng,
    platform: [nintendoPlatform],
    tags: [ storyRich],
    status: 'draft'
  }),

  new BlogPost({
    id: 4,
    title: 'The Evolution of First-Person Shooters',
    slug: 'fps-evolution',
    content: 'From Wolfenstein 3D to Call of Duty: Warzone, FPS games have come a long way. The genre has consistently pushed technical boundaries, driving innovations in graphics, networking, and controls. Modern shooters now incorporate RPG elements, battle royale mechanics, and complex progression systems.\n\nAccessibility features have also improved dramatically. Options like aim assist, colorblind modes, and customizable controls help more players enjoy these games. The next frontier may be VR integration, offering even more immersive combat experiences.',
    excerpt: 'Tracing the history and future of first-person shooter games.',
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: haziqajieq,
    platform: [ps5Platform, xboxPlatform, pcPlatform],
    tags: [fps],
    status: 'published'
  }),

  new BlogPost({
    id: 5,
    title: 'PC vs Console: The Eternal Debate',
    slug: 'pc-vs-console-debate',
    content: 'The choice between PC and console gaming depends on your priorities. PCs offer superior graphics and customization but require more technical knowledge and maintenance. Consoles provide plug-and-play simplicity at a lower entry cost, with exclusive titles that never come to PC.\n\nCloud gaming may eventually make this debate irrelevant. Services like Xbox Game Pass Ultimate already let you play the same games across devices. As internet infrastructure improves, the hardware you own might matter less than the subscriptions you pay for.',
    excerpt: 'Breaking down the pros and cons of PC and console gaming.',
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: breyguire,
    platform: [ps5Platform, xboxPlatform, pcPlatform],
    tags: [],
    status: 'published'
  }),

  new BlogPost({
    id: 6,
    title: 'The Art of Game Soundtracks',
    slug: 'game-soundtracks-art',
    content: 'Great game music does more than just sound good - it enhances immersion and emotional impact. Titles like The Last of Us and Hollow Knight use their scores to deepen storytelling. Composers now work closely with developers from early stages to create cohesive audio experiences.\n\nInteractive music systems adapt to gameplay, changing based on player actions. This dynamic approach keeps scores fresh during long play sessions. Many game soundtracks now stand as artistic works independent of their games, performed by orchestras worldwide.',
    excerpt: 'How video game music has evolved into a respected art form.',
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: tehbeng,
    platform: [ps5Platform, nintendoPlatform, pcPlatform],
    tags: [storyRich],
    status: 'published'
  }),

  new BlogPost({
    id: 7,
    title: 'Esports: From Niche to Mainstream',
    slug: 'esports-growth',
    content: 'Competitive gaming has grown into a billion-dollar industry with professional leagues, sponsorships, and massive tournaments. Games like League of Legends and Dota 2 offer prize pools that rival traditional sports. Major networks now broadcast esports events alongside football and basketball.\n\nThe pandemic accelerated this growth as traditional sports paused. Many organizations added esports divisions to stay connected with fans. As generation Z becomes the dominant consumer base, esports may eventually surpass some conventional sports in popularity.',
    excerpt: 'Tracking the explosive growth of professional competitive gaming.',
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: haziqajieq,
    platform: [pcPlatform],
    tags: [mmo],
    status: 'published'
  }),

  new BlogPost({
    id: 8,
    title: 'The Resurgence of Retro Gaming',
    slug: 'retro-gaming-resurgence',
    content: 'Nostalgia has driven a booming market for classic games and retro-inspired titles. Mini consoles like the PlayStation Classic and Sega Genesis Mini offer curated collections of beloved games. Meanwhile, developers are creating new games with pixel art aesthetics and old-school mechanics.\n\nThis trend reflects a desire for simpler game design amid today\'s complex AAA titles. Retro games often focus on tight gameplay loops rather than cinematic presentation. The success of platforms like Steam Deck has also made it easier to play classic PC games on the go.',
    excerpt: 'Why old-school gaming is making a comeback in the modern era.',
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: breyguire,
    platform: [nintendoPlatform, pcPlatform],
    tags: [rpg],
    status: 'published'
  }),

  new BlogPost({
    id: 9,
    title: 'Virtual Reality: Gaming\'s Next Frontier?',
    slug: 'vr-gaming-future',
    content: 'VR technology has made significant strides but still faces adoption challenges. High-end headsets like Valve Index offer incredible immersion but require powerful PCs. Standalone devices like Meta Quest 2 are more accessible but sacrifice graphical fidelity.\n\nThe most successful VR games focus on experiences unique to the medium. Titles like Half-Life: Alyx demonstrate VR\'s potential for storytelling and interaction. As hardware becomes more affordable and comfortable, VR may finally move beyond its niche status. The integration of augmented reality features could be the next big leap forward.',
    excerpt: 'Examining whether VR will finally break into the mainstream.',
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: tehbeng,
    platform: [pcPlatform],
    tags: [],
    status: 'published'
  })
]



