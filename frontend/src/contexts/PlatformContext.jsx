import mobile from '../assets/public/dummy/mobile.jpeg'
import ps5 from '../assets/public/dummy/ps5.jpg'
import xbox from '../assets/public/dummy/xbox.jpeg'
import nintendo from '../assets/public/dummy/nintendo2.jpeg'
import pc from '../assets/public/dummy/pc.jpeg'


// Example platform data in JSON format
export const examplePlatforms = [
  {
    id: 1,
    name: "PS5",
    slug: "playstation-5",
    description: "Sony PlayStation 5 gaming platform",
    icon: ps5,
    is_active: true,
    created_at: "2024-01-01T00:00:00.000000Z",
    updated_at: "2024-01-01T00:00:00.000000Z"
  },
  {
    id: 2,
    name: "Xbox Series X",
    slug: "xbox-series-x",
    description: "Microsoft Xbox Series X gaming platform",
    icon: xbox,
    is_active: true,
    created_at: "2024-01-01T00:00:00.000000Z",
    updated_at: "2024-01-01T00:00:00.000000Z"
  },
  {
    id: 3,
    name: "Nintendo Switch",
    slug: "nintendo-switch",
    description: "Nintendo Switch hybrid gaming console",
    icon: nintendo,
    is_active: true,
    created_at: "2024-01-01T00:00:00.000000Z",
    updated_at: "2024-01-01T00:00:00.000000Z"
  },
  {
    id: 4,
    name: "PC",
    slug: "pc",
    description: "Personal Computer gaming platform",
    icon: pc,
    is_active: true,
    created_at: "2024-01-01T00:00:00.000000Z",
    updated_at: "2024-01-01T00:00:00.000000Z"
  },
  {
    id: 5,
    name: "Mobile",
    slug: "mobile",
    description: "Mobile gaming on iOS and Android",
    icon: mobile,
    is_active: true,
    created_at: "2024-01-01T00:00:00.000000Z",
    updated_at: "2024-01-01T00:00:00.000000Z"
  }
];


// getting data for plat/purpose to display on all pages