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
    content: `The gaming industry has seen tremendous growth in open-world RPGs over the past decade. Games like Elden Ring and The Witcher 3 have set new standards for immersive worlds with their vast landscapes and intricate storylines. Developers are pushing boundaries with dynamic ecosystems where player choices have meaningful, long-term consequences.

With advancements in AI and procedural generation, we're seeing more lifelike NPCs and environments that react organically to player actions. Modern hardware allows for seamless transitions between regions without loading screens, creating truly uninterrupted exploration experiences.

Looking ahead, the next generation of open-world games will likely blur the line between scripted content and emergent gameplay. Technologies like machine learning could enable NPCs with evolving personalities and memories, while cloud computing may allow for persistent worlds that continue evolving even when players log off.`,
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
    content: `Mobile gaming has evolved far beyond casual time-wasters into a legitimate competitive platform. Titles like Genshin Impact and PUBG Mobile have demonstrated that smartphones can deliver complex, engaging gameplay experiences rivaling traditional consoles. The accessibility of mobile devices has created an enormous player base that now surpasses PC and console gaming combined.

Esports organizations are investing heavily in mobile gaming leagues, with tournaments offering prize pools in the millions. Games like Mobile Legends and Arena of Valor have established thriving competitive scenes, particularly in Southeast Asia. The lower barrier to entry means more players can participate at high levels, democratizing competitive gaming.

As mobile hardware continues to improve, we're seeing graphical fidelity and gameplay depth that was unimaginable a decade ago. With foldable screens and cloud gaming integration, mobile devices may soon become the primary gaming platform for millions worldwide.`,
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
    content: `From the pixelated corridors of Doom to the photorealistic battlefields of Call of Duty, FPS games have undergone a remarkable transformation. The genre pioneered 3D gaming in the 90s and continues to drive technological innovation today. Each generation of hardware has enabled more immersive experiences, from physics-based interactions to advanced ballistics systems.

Modern FPS games blend cinematic storytelling with competitive multiplayer, offering something for every type of player. Titles like Halo Infinite and Valorant demonstrate how the genre continues to evolve, incorporating abilities and tactical elements that add strategic depth. The rise of battle royale games has further expanded the genre's appeal, creating new social gaming phenomena.

Looking forward, VR and AR technologies promise to revolutionize first-person perspectives once again. Haptic feedback and advanced audio will enhance immersion, while AI-driven enemies could provide more dynamic and unpredictable challenges. The FPS genre remains at the forefront of interactive entertainment.`,
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
    content: `The Nintendo Switch has fundamentally changed how we think about portable gaming by merging home console and handheld experiences. Its hybrid design allows for seamless transitions between TV and mobile play, offering unprecedented flexibility. Games like Zelda: Breath of the Wild demonstrate how full-scale console experiences can thrive on portable hardware.

The Switch's innovative Joy-Con controllers have introduced new gameplay possibilities, from motion-controlled boxing to cooperative gaming on a single system. Nintendo's focus on local multiplayer has revived couch gaming traditions in an era dominated by online play. The console's modest hardware requirements have also fostered creative game design focused on gameplay over graphics.

With the OLED model's improved screen and rumors of a next-gen Switch, Nintendo continues to refine its vision. The platform's success proves there's still strong demand for gaming experiences that prioritize fun and accessibility over raw technical power.`,
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
    content: `The debate between PC and console gaming continues to divide players after decades of technological evolution. PC gaming offers unparalleled customization, from hardware configurations to graphical settings, allowing enthusiasts to push performance boundaries. The platform's open ecosystem supports modding communities that extend game lifespans by years.

Consoles provide streamlined, standardized experiences that eliminate hardware compatibility concerns. Exclusive titles like God of War and Halo showcase the artistic potential of optimized development for fixed specifications. The plug-and-play simplicity appeals to casual gamers who prefer gaming without technical tinkering.

Cloud gaming may eventually bridge these worlds, offering high-end experiences on any device. However, dedicated hardware will likely persist for competitive gamers needing maximum responsiveness and enthusiasts craving cutting-edge visuals. Both platforms will continue evolving to serve different player needs.`,
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
    content: `Modern video games have elevated storytelling to new heights, blending cinematic techniques with interactive narratives. Titles like The Last of Us Part II demonstrate how games can deliver emotional depth rivaling the best films and novels. Player agency introduces branching narratives where choices have real consequences, creating personalized story experiences.

Developers are experimenting with environmental storytelling, where worlds reveal their histories through subtle details rather than exposition. Games like Dark Souls build rich lore through item descriptions and environmental clues, rewarding observant players. The interactivity of games allows for more immersive world-building than passive media.

As technology advances, we're seeing more sophisticated character animations and facial expressions that enhance emotional engagement. AI-driven dialogue systems may soon enable truly dynamic conversations, while procedural narrative engines could generate unique story arcs for each player.`,
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
    content: `Esports has exploded from niche hobby to mainstream phenomenon, with professional leagues rivaling traditional sports in viewership. Games like League of Legends and Dota 2 host international tournaments with prize pools exceeding $30 million, broadcast to millions worldwide. Major sports franchises now own esports teams, recognizing their growth potential.

The accessibility of esports allows global participation - a teenager with talent and internet access can compete against the world's best. Unlike physical sports, esports constantly evolves with game updates, keeping competition fresh. Universities now offer esports scholarships, and some countries recognize pro gamers as official athletes.

As VR and AR technologies mature, we may see entirely new esport genres emerge. The line between virtual and physical sports will continue blurring, with fitness-focused games like Ring Fit Adventure hinting at hybrid competitive possibilities.`,
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
    content: `Horror games tap into primal human emotions, offering safe thrills through controlled fear experiences. Titles like Resident Evil Village balance tension with cathartic action, while psychological horror games like Silent Hill explore deeper existential fears. The interactive nature of games makes horror more intense than passive media - when you control the character, the fear feels personal.

Modern horror leverages advanced audio design and lighting to create unbearable tension. Binaural audio tricks convince players they're hearing whispers right behind them, while dynamic lighting systems make every shadow potentially threatening. VR horror takes this further by removing the safety barrier of a screen.

Interestingly, horror games often attract players who dislike horror movies. The ability to control the pace and confront fears through gameplay agency makes the experience more manageable. Developers continue finding new ways to terrify players while respecting individual tolerance levels.`,
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
    content: `Independent game developers have transformed the industry by proving small teams can create groundbreaking experiences. Games like Hollow Knight and Celeste demonstrate how indie titles can surpass AAA productions in creativity and emotional impact. Digital distribution platforms have democratized publishing, allowing niche games to find their audiences.

Indie developers often take risks that large studios can't, experimenting with unconventional mechanics and art styles. The result is a renaissance of innovative gameplay concepts, from physics-based puzzles to narrative-driven walking simulators. Many modern gaming trends originate in the indie scene before being adopted by mainstream titles.

Crowdfunding platforms like Kickstarter have enabled developers to maintain creative control while securing development funds. Tools like Unity and Unreal Engine have lowered technical barriers, allowing more diverse voices to create games. The indie scene continues pushing the medium forward.`,
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
    content: `Racing games have evolved from simple arcade cabinets to hyper-realistic simulations that blur the line between virtual and real. Franchises like Gran Turismo and Forza Motorsport meticulously recreate hundreds of cars and tracks, appealing to automotive enthusiasts. The genre now serves as both entertainment and legitimate racing training tool.

Esports racing has gained legitimacy through professional sim racing leagues using titles like iRacing. These competitions often feature real-world racing drivers, with some using sims for offseason training. Advanced force feedback wheels and VR headsets create unprecedented immersion, allowing players to feel every bump and curb.

Meanwhile, arcade-style racers like Mario Kart maintain mass appeal through accessible, fun-first design. The genre continues branching into new directions, from battle royale racing formats to open-world street racing experiences. Racing games remain a cornerstone of gaming culture.`,
    excerpt: "The evolution of racing video games.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: haziqajieq,
    platforms: [ps5Platform, xboxPlatform, pcPlatform],
    tags: [racing],
    status: "published",
  }),

  // Posts 11-20 continue with the same pattern...
  new BlogPost({
    id: 11,
    title: "The Psychology of MMO Player Behavior",
    slug: "mmo-player-psychology",
    content: `MMOs create complex social ecosystems where player behavior follows fascinating psychological patterns. Games like World of Warcraft and Final Fantasy XIV develop intricate social hierarchies within their communities. Players naturally form guilds and factions that mirror real-world tribal dynamics, complete with internal politics and rivalries.

The anonymity of online avatars allows for interesting social experiments - players often behave differently than they would in real life. Some embrace heroic personas, while others indulge in antisocial behavior knowing consequences are limited. Game designers carefully craft systems to encourage cooperation while managing toxic elements.

MMOs also demonstrate the human capacity for creating order from chaos. Player-run economies emerge with sophisticated supply and demand dynamics, while volunteer moderators often maintain community standards. These virtual worlds continue providing rich ground for sociological study.`,
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
    content: `The enduring popularity of retro games raises questions about whether their appeal stems from nostalgia or genuinely timeless design. Classic titles like Super Mario Bros. and Tetris remain enjoyable decades later because of their refined, focused gameplay loops. Limited by primitive hardware, developers perfected core mechanics that still feel satisfying today.

Modern retro-style games like Shovel Knight prove that pixel art and chiptune music aren't just nostalgia bait - they're legitimate aesthetic choices. These games often combine vintage presentation with contemporary design sensibilities, creating the best of both worlds. The constraints of older systems forced creative solutions that still inspire developers.

Interestingly, many young gamers with no nostalgic connection to 8-bit or 16-bit eras still enjoy retro games. This suggests strong game design transcends its original technological context. The retro revival shows no signs of slowing down.`,
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
    content: `Behind every game lies complex business realities that shape what gets made and how. AAA studios now operate with budgets exceeding $100 million, requiring careful financial planning and risk management. The rise of live service games reflects the industry's shift toward recurring revenue models over one-time purchases.

Indie developers face different challenges, often balancing creative vision with commercial viability. Successful indies like Stardew Valley's ConcernedApe prove that solo developers can achieve remarkable success, but the path is fraught with financial uncertainty. Crowdfunding and early access have emerged as vital tools for independent creators.

The global games market continues growing, but competition has never been fiercer. Developers must navigate platform holder policies, regional regulations, and changing consumer expectations. Understanding these business realities is essential for anyone hoping to work in games.`,
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
    content: `VR technology promises to revolutionize gaming by offering unprecedented immersion, but mainstream adoption remains elusive. High-end headsets like Valve Index deliver stunning experiences, but cost and space requirements limit their audience. Standalone devices like Meta Quest have improved accessibility, yet many players still prefer traditional gaming.

The most successful VR games leverage the medium's unique strengths - physical movement, spatial awareness, and direct interaction. Titles like Half-Life: Alyx show VR's potential for deeply immersive storytelling, while Beat Saber demonstrates how intuitive motion controls can create addictive gameplay. Social VR platforms hint at virtual worlds becoming new digital gathering spaces.

As hardware becomes lighter, cheaper, and more comfortable, VR may finally reach critical mass. Eye-tracking, haptic feedback, and neural interfaces could further enhance immersion. While challenges remain, VR continues pushing gaming into exciting new territory.`,
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
    content: `Microtransactions have become gaming's most controversial monetization method, raising important ethical questions. While cosmetic items in games like Fortnite seem harmless, loot boxes with randomized rewards blur the line with gambling. Many countries have begun regulating these mechanics, especially when children are the target audience.

Free-to-play games rely on "whales" - a small percentage of players who spend disproportionately - raising concerns about exploitative design. Dark patterns like countdown timers and artificial scarcity pressure players into spending. However, when implemented ethically, microtransactions can support ongoing game development without pay-to-win mechanics.

The industry is gradually self-regulating, with platforms requiring loot box odds disclosure and some developers moving toward more transparent models. Finding the balance between profitability and player fairness remains an ongoing challenge.`,
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
    content: `Strategy games offer more than entertainment - they provide rigorous mental exercise that can enhance cognitive abilities. Complex titles like Civilization VI require long-term planning, resource management, and adaptive thinking. Studies suggest regular strategy gameplay can improve problem-solving skills and even delay cognitive decline.

The genre spans from accessible mobile games to hardcore military simulations like Steel Division. Turn-based systems allow for careful consideration, while real-time strategy tests quick decision-making under pressure. Multiplayer strategy games become psychological battles, where predicting opponents' moves is as important as managing your own forces.

As AI opponents become more sophisticated, strategy games offer increasingly challenging mental workouts. The genre continues evolving with hybrid formats that blend strategy with other genres, ensuring its relevance for new generations of players.`,
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
    content: `Video game music has evolved from simple beeps to orchestral masterpieces that stand as art in their own right. Iconic themes like Super Mario Bros. and The Legend of Zelda are instantly recognizable decades later. Modern games feature Hollywood-quality scores, with composers like Nobuo Uematsu and Mick Gordon achieving celebrity status.

Interactive audio design sets game soundtracks apart from other media - music dynamically responds to player actions, intensifying during combat or softening during exploration. Games like Cuphead and Crypt of the NecroDancer integrate music directly into their core gameplay mechanics.

The popularity of game music concerts and streaming playlists proves these soundtracks have cultural significance beyond their games. As technology advances, we'll hear even more sophisticated implementations of dynamic, adaptive music systems.`,
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
    content: `Game accessibility has progressed from afterthought to priority, ensuring everyone can enjoy gaming regardless of ability. Features like customizable controls, colorblind modes, and text-to-speech are becoming standard in AAA titles. Microsoft's Xbox Adaptive Controller exemplifies hardware designed for players with limited mobility.

These innovations benefit more than just disabled gamers - customizable difficulty helps casual players, while subtitle options assist non-native speakers. Games like The Last of Us Part II set new standards with dozens of accessibility options, proving inclusive design can coexist with hardcore gameplay.

As awareness grows, developers are considering accessibility from a project's earliest stages rather than bolting it on later. The industry still has progress to make, but the commitment to inclusivity represents gaming at its best.`,
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
    content: `Cloud gaming services like Xbox Cloud Gaming and NVIDIA GeForce Now promise to make high-end gaming accessible on any device. By streaming games from powerful servers, players can enjoy graphics-intensive titles on phones, tablets, or low-spec PCs. This technology could democratize gaming by eliminating hardware barriers.
    
    Latency remains the biggest challenge, especially for competitive games requiring split-second reactions. However, improving infrastructure and compression algorithms are steadily reducing lag. 5G networks may finally make cloud gaming viable for mobile users, enabling console-quality experiences anywhere.
     
    While cloud gaming won't replace local hardware entirely, it complements traditional platforms by offering flexibility. The technology continues improving, and may eventually become the primary way many people game.`,
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
    content: `As games age, preserving them becomes increasingly challenging but culturally vital. Unlike other media, games require specific hardware and software environments to function as originally intended. Digital storefront closures have already made some titles permanently inaccessible, highlighting the urgency of preservation efforts.

Museums and organizations like the Video Game History Foundation work to archive games, documentation, and development materials. Emulation provides access to classic games, though legal gray areas complicate distribution. Some developers intentionally include archival modes in re-releases, offering historical context alongside the games themselves.

Preservation isn't just about nostalgia - it's about maintaining our digital cultural heritage. Future generations should be able to study and experience gaming's evolution firsthand. The industry needs sustainable solutions to ensure games don't disappear into history.`,
    excerpt: "The challenges of archiving digital interactive media.",
    featured_image: getRandomImage(),
    published_at: getRandomDate(),
    user: breyguire,
    platforms: [nintendoPlatform, pcPlatform],
    tags: [],
    status: "published",
  })
];