// test image
import testImg2 from "../assets/public/dummy/image.png";
import testImg3 from "../assets/public/dummy/image3.jpg";
import testImg from "../assets/public/dummy/testImg.jpeg";
import { User, Platform, Tag, BlogPost } from "./ExampleOOP.js";

// platform image
import mobile from "../assets/public/dummy/mobile.jpeg";
import ps5 from "../assets/public/dummy/ps5.jpg";
import xbox from "../assets/public/dummy/xbox.jpeg";
import nintendo from "../assets/public/dummy/nintendo2.jpeg";
import pc from "../assets/public/dummy/pc.jpeg";

// creating a reusable object
// create a user object
const haziqajieq = new User(1, "Haziq Ajieq");
const breyguire = new User(2, "Brey Guire");
const tehbeng = new User(3, "Tehbeng");

// create platform object


const ps5Platform = new Platform(1, "PS5", "playstation-5", ps5);
const xboxPlatform = new Platform(2, "XBOX", "xbox", xbox);
const nintendoPlatform = new Platform(
  3,
  "NINTENDO SWITCH",
  "nintendo-switch",
  nintendo
);
const pcPlatform = new Platform(4, "PC", "pc", pc);
const mobilePlatform = new Platform(5, "MOBILE", "mobile", mobile);

export const AllPlatform = [
  ps5Platform,
  xboxPlatform,
  nintendoPlatform,
  pcPlatform,
  mobilePlatform
];

// create tag for genre object
const rpg = new Tag(1, "RPG");
const fps = new Tag(2, "FPS");
const mmo = new Tag(3, "MMO");
const storyRich = new Tag(4, "STORY RICH");
const eSport = new Tag(5,"E-SPORT");
const adventure = new Tag(6, "ADVENTURE");
const strategy = new Tag(7, "STRATEGY");
const indie = new Tag(8, "INDIE");
const horror = new Tag(9, "HORROR");
const racing = new Tag(10, "RACING");


//  temporary function to get random image and date
const getRandomImage = () => {
  const images = [testImg, testImg2, testImg3];
  return images[Math.floor(Math.random() * images.length)];
};

const getRandomDate = () => {
  const now = new Date();
  const past = new Date(now);
  past.setFullYear(now.getFullYear() - 1);

  return new Date(
    past.getTime() + Math.random() * (now.getTime() - past.getTime())
  ).toISOString();
};

// create example blogpost using exampleOOP
// export const examplePost = [

export const examplePost = [
  new BlogPost({
    id: 1,
    title: "The Future of Open-World RPGs",
    slug: "future-open-world-rpgs",
    content: "The gaming industry has seen tremendous growth in open-world RPGs...",
    excerpt: "Exploring the evolution of open-world RPG game design.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: haziqajieq,
    platforms: [ps5Platform, pcPlatform],
    tags: [rpg, adventure],
    status: "published",
  }),

  new BlogPost({
    id: 2,
    title: "Mobile Gaming: The Rise of Competitive Play",
    slug: "mobile-gaming-competitive",
    content: "Mobile gaming has evolved far beyond casual time-wasters...",
    excerpt: "How mobile gaming is becoming a serious platform for competitive play.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: breyguire,
    platforms: [mobilePlatform],
    tags: [mmo, eSport],
    status: "published",
  }),

  new BlogPost({
    id: 3,
    title: "The Evolution of First-Person Shooters",
    slug: "evolution-fps-games",
    content: "From Doom to Call of Duty, FPS games have come a long way...",
    excerpt: "Tracing the history and future of FPS games.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: tehbeng,
    platforms: [ps5Platform, xboxPlatform, pcPlatform],
    tags: [fps],
    status: "published",
  }),

  new BlogPost({
    id: 4,
    title: "Nintendo Switch: Revolutionizing Portable Gaming",
    slug: "nintendo-switch-revolution",
    content: "The Nintendo Switch has redefined what portable gaming can be...",
    excerpt: "How the Switch changed the portable gaming landscape.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: haziqajieq,
    platforms: [nintendoPlatform],
    tags: [adventure, indie],
    status: "published",
  }),

  new BlogPost({
    id: 5,
    title: "PC Gaming vs Console: The Eternal Debate",
    slug: "pc-vs-console-debate",
    content: "The debate between PC and console gaming continues to rage...",
    excerpt: "Comparing the pros and cons of PC and console gaming.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: breyguire,
    platforms: [pcPlatform, ps5Platform, xboxPlatform],
    tags: [],
    status: "published",
  }),

  new BlogPost({
    id: 6,
    title: "The Art of Game Storytelling",
    slug: "game-storytelling-art",
    content: "Great games tell great stories. Let's examine how...",
    excerpt: "Exploring narrative techniques in modern video games.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: tehbeng,
    platforms: [ps5Platform, pcPlatform, nintendoPlatform],
    tags: [storyRich],
    status: "published",
  }),

  new BlogPost({
    id: 7,
    title: "Esports: The New Frontier of Competitive Sports",
    slug: "esports-new-frontier",
    content: "Esports has grown from niche to mainstream in just a decade...",
    excerpt: "The rise of professional competitive gaming.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: haziqajieq,
    platforms: [pcPlatform, mobilePlatform],
    tags: [eSport],
    status: "published",
  }),

  new BlogPost({
    id: 8,
    title: "Horror Games: Why We Love to Be Scared",
    slug: "horror-games-psychology",
    content: "What makes horror games so compelling despite the fear they induce...",
    excerpt: "The psychology behind horror game appeal.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: breyguire,
    platforms: [ps5Platform, pcPlatform],
    tags: [horror],
    status: "published",
  }),

  new BlogPost({
    id: 9,
    title: "The Indie Game Revolution",
    slug: "indie-game-revolution",
    content: "Small studios are creating some of the most innovative games today...",
    excerpt: "How indie developers are changing the gaming landscape.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: tehbeng,
    platforms: [pcPlatform, nintendoPlatform],
    tags: [indie],
    status: "published",
  }),

  new BlogPost({
    id: 10,
    title: "Racing Games: The Need for Speed Never Ends",
    slug: "racing-games-evolution",
    content: "From arcade cabinets to hyper-realistic simulators...",
    excerpt: "The evolution of racing video games.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: haziqajieq,
    platforms: [ps5Platform, xboxPlatform, pcPlatform],
    tags: [racing],
    status: "published",
  }),

  new BlogPost({
    id: 11,
    title: "The Psychology of MMO Player Behavior",
    slug: "mmo-player-psychology",
    content: "Massively multiplayer games create unique social dynamics...",
    excerpt: "Understanding player interactions in online worlds.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: breyguire,
    platforms: [pcPlatform],
    tags: [mmo],
    status: "published",
  }),

  new BlogPost({
    id: 12,
    title: "Retro Gaming: Nostalgia or Timeless Design?",
    slug: "retro-gaming-appeal",
    content: "Why do classic games from the 80s and 90s still captivate us today?...",
    excerpt: "Examining the enduring appeal of retro games.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: tehbeng,
    platforms: [nintendoPlatform],
    tags: [],
    status: "published",
  }),

  new BlogPost({
    id: 13,
    title: "The Business of Game Development",
    slug: "game-development-business",
    content: "Creating games is an art, but selling them is a business...",
    excerpt: "The economic realities behind game creation.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: haziqajieq,
    platforms: [ps5Platform, xboxPlatform, pcPlatform, mobilePlatform],
    tags: [],
    status: "published",
  }),

  new BlogPost({
    id: 14,
    title: "Virtual Reality: Gaming's Next Frontier?",
    slug: "vr-gaming-future",
    content: "VR has promised to revolutionize gaming for years - is it finally happening?...",
    excerpt: "Assessing the current state and future of VR gaming.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: breyguire,
    platforms: [pcPlatform],
    tags: [],
    status: "published",
  }),

  new BlogPost({
    id: 15,
    title: "The Ethics of Microtransactions",
    slug: "microtransactions-ethics",
    content: "Are loot boxes and in-game purchases exploitative or fair business?...",
    excerpt: "The debate around monetization in modern games.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: tehbeng,
    platforms: [mobilePlatform, ps5Platform, xboxPlatform],
    tags: [],
    status: "published",
  }),

  new BlogPost({
    id: 16,
    title: "Strategy Games: Exercising the Mind",
    slug: "strategy-games-mental-benefits",
    content: "How strategy games can improve cognitive abilities and problem-solving skills...",
    excerpt: "The mental benefits of playing strategy games.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: haziqajieq,
    platforms: [pcPlatform],
    tags: [strategy],
    status: "published",
  }),

  new BlogPost({
    id: 17,
    title: "The Soundtracks That Defined Gaming",
    slug: "iconic-game-soundtracks",
    content: "From 8-bit chiptunes to full orchestral scores...",
    excerpt: "Celebrating the most memorable game music.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: breyguire,
    platforms: [ps5Platform, nintendoPlatform, pcPlatform],
    tags: [],
    status: "published",
  }),

  new BlogPost({
    id: 18,
    title: "Accessibility in Gaming: Opening Doors for All",
    slug: "gaming-accessibility",
    content: "How the industry is making games playable for people with disabilities...",
    excerpt: "The importance of accessibility features in games.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: tehbeng,
    platforms: [ps5Platform, xboxPlatform, pcPlatform],
    tags: [],
    status: "published",
  }),

  new BlogPost({
    id: 19,
    title: "The Rise of Cloud Gaming",
    slug: "cloud-gaming-rise",
    content: "Streaming games like we stream movies - is this the future?...",
    excerpt: "Examining the potential of game streaming services.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: haziqajieq,
    platforms: [mobilePlatform, pcPlatform],
    tags: [],
    status: "published",
  }),

  new BlogPost({
    id: 20,
    title: "Preserving Video Game History",
    slug: "game-preservation",
    content: "As games age, how do we ensure future generations can experience them?...",
    excerpt: "The challenges of archiving digital interactive media.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: breyguire,
    platforms: [nintendoPlatform, pcPlatform],
    tags: [],
    status: "published",
  })
];
