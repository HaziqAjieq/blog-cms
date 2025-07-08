import testImg2 from '../assets/public/dummy/image.png';
import testImg3 from '../assets/public/dummy/image3.jpg';
import testImg from "../assets/public/dummy/testImg.jpeg";
import { examplePost } from '../contexts/ExamplePost';



export default function BlogCard({ post = examplePost }) {
  const formattedDate = new Date(post.published_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className={` bg-white w-full  rounded-lg flex flex-col`}>
      {/* featuresImage */}

      <a href="#" className="flex items-center justify-center w-full  overflow-hidden">
        <img class="object-cover max-h-60 w-full" src={post.featured_image} alt={post.title} />
      </a>

      <div class="px-3 py-7">
        {/* getting categories  */}

        <time className="text-gray-600" dateTime={post.published_at}>
          {formattedDate}
        </time>
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
            {post.title}
          </h5>
        </a>
        <p class="mb-3 text-black line-clamp-2 text-lg ">{post.excerpt} </p>
        <a
          href="#"
          class=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-800 rounded-lg"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

// purpose if just for the card



