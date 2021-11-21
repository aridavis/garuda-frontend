/* This example requires Tailwind CSS v2.0+ */
import SideBar from "../../components/SideBar";

const posts = [
  {
    title: "100 Days Of Code - Web Development Bootcamp [2022]",
    href: "#",
    category: { name: "Hot & New", href: "#" },
    description:
      'Learn web development from A to Z in 100 days (or at your own pace) - from "basic" to "advanced", it\'s all included!',
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: "https://img-c.udemycdn.com/course/480x270/4015622_2fee_4.jpg",
    readingTime: "120 hours",
  },
  {
    title: "Complete Guide to Freelancing in 2022: Zero to Mastery",
    href: "#",
    category: { name: "Best Seller", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "12 hours",
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Hot & New", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    imageUrl:
      "https://img-b.udemycdn.com/course/480x270/4341438_2d97_2.jpg?secure=sa64T_HiZpbfSznUfNCNQw%3D%3D%2C1637527794",
    readingTime: "33 hours",
  },
  {
    title: "Complete Guide to Freelancing in 2022: Zero to Mastery",
    href: "#",
    category: { name: "Best Seller", href: "#" },
    description:
      "Achieve freelance success on sites like Upwork or Fiverr. Start a home business or side hustle. No experience needed!",
    imageUrl: "https://img-c.udemycdn.com/course/480x270/4304531_1b5a.jpg",
    readingTime: "88 hours",
  },
  {
    title: "Microsoft Excel: Advanced Excel Dashboard Design",
    href: "#",
    category: { name: "Hot & New", href: "#" },
    description:
      "Learn expert-level data visualization & dashboard design skills, and build 3 full-scale Excel dashboards from scratch!",
    imageUrl:
      "https://img-b.udemycdn.com/course/480x270/4341438_2d97_2.jpg?secure=sa64T_HiZpbfSznUfNCNQw%3D%3D%2C1637527794",
    readingTime: "100 hours",
  },
  {
    title: "Business Analysis Foundations",
    href: "#",
    category: { name: "Hot & New", href: "#" },
    description: "Grow your business analysis career with a strong foundation.",
    imageUrl: "https://img-c.udemycdn.com/course/480x270/4365890_6acc.jpg",
    readingTime: "80 hours",
  },
  {
    title: "The Complete SQL Bootcamp 2022: Go from Zero to Hero",
    href: "#",
    category: { name: "Hot & New", href: "#" },
    description: "Become an expert at SQL!",
    imageUrl: "https://img-c.udemycdn.com/course/480x270/762616_7693_3.jpg",
    readingTime: "150 hours",
  },
];

export default function CertificationScreen() {
  return (
    <SideBar>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Learn
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              "Learn continually there's always one more thing to learn" - Steve
              Jobs
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="ml-3">
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <span>{post.readingTime} study</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SideBar>
  );
}
