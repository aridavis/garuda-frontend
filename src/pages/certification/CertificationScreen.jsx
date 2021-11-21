/* This example requires Tailwind CSS v2.0+ */
import SideBar from "../../components/SideBar";

const posts = [
  {
    title: "HTML",
    href: "#",
    category: { name: "Hot & New", href: "#" },
    description:
      'Learn web development from A to Z in 100 days (or at your own pace) - from "basic" to "advanced", it\'s all included!',
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: "https://sivadira.com/static/media/html.94e8c698.png",
    readingTime: "120 hours",
  },
  {
    title: "JS",
    href: "#",
    category: { name: "Best Seller", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    imageUrl: "https://sivadira.com/static/media/javascript.e5e56c5e.png",
    readingTime: "12 hours",
  },
  {
    title: "Laravel",
    href: "#",
    category: { name: "Hot & New", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    imageUrl: "https://sivadira.com/static/media/laravel.9d8b9c08.png",
    readingTime: "33 hours",
  },
  {
    title: "NodeJS",
    href: "#",
    category: { name: "Best Seller", href: "#" },
    description:
      "Achieve freelance success on sites like Upwork or Fiverr. Start a home business or side hustle. No experience needed!",
    imageUrl: "https://sivadira.com/static/media/node.8275f96b.png",
    readingTime: "88 hours",
  },
  {
    title: "React",
    href: "#",
    category: { name: "Hot & New", href: "#" },
    description:
      "Learn expert-level data visualization & dashboard design skills, and build 3 full-scale Excel dashboards from scratch!",
    imageUrl: "https://sivadira.com/static/media/react.963ff381.png",
    readingTime: "100 hours",
  },
];

const post2 = [
  {
    title: "Python",
    href: "#",
    category: { name: "Hot & New", href: "#" },
    description:
      'Learn web development from A to Z in 100 days (or at your own pace) - from "basic" to "advanced", it\'s all included!',
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: "https://sivadira.com/static/media/python.c5be10a7.png",
    readingTime: "120 hours",
  },
  {
    title: "Unity",
    href: "#",
    category: { name: "Best Seller", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    imageUrl:
      "data:image/png;base64,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",
    readingTime: "12 hours",
  },
  {
    title: "Flutter",
    href: "#",
    category: { name: "Hot & New", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    imageUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAOZlWElmTU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgExAAIAAAAhAAAAZgEyAAIAAAAUAAAAiIdpAAQAAAABAAAAnAAAAAAAAAEsAAAAAQAAASwAAAABQWRvYmUgUGhvdG9zaG9wIDIyLjEgKE1hY2ludG9zaCkAADIwMjE6MDE6MDMgMDg6NTY6MDcAAASQBAACAAAAFAAAANKgAQADAAAAAQABAACgAgAEAAAAAQAAAGSgAwAEAAAAAQAAAGQAAAAAMjAyMTowMTowMyAwODo1NjowNwB9e/QpAAAACXBIWXMAAC4jAAAuIwF4pT92AAAJIWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMS0wMS0wM1QwODo1NjowNyswNzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIDIyLjEgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjEtMDEtMDNUMDg6NTY6MDcrMDc6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDIxLTAxLTAzVDA4OjU2OjA3KzA3OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgMjIuMSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAyMS0wMS0wM1QwODo1NjowNyswNzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo5N2NlMjI1ZS01Mzc1LTRlN2UtYmQ5YS1mNjE2ZjY2YTlmZTU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCAyMi4xIChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIxLTAxLTAzVDA4OjU2OjA3KzA3OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjliNjAxNmZkLTgwYWEtNDdiZi04MzhmLTkwODdhNjhkZTEyYzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo5N2NlMjI1ZS01Mzc1LTRlN2UtYmQ5YS1mNjE2ZjY2YTlmZTU8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZhYWRiZTBhLTE3ZTEtNDc0Mi04YjI3LTYxM2NiM2YxNzZjYTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo5YjYwMTZmZC04MGFhLTQ3YmYtODM4Zi05MDg3YTY4ZGUxMmM8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpvFZEuAAATwUlEQVR4Ae2da2wc13mGz5mZvfAqKXIkW5ETN5WTVmolB3LRIBYl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",
    readingTime: "33 hours",
  },
];

export default function ApplicationScreen() {
  return (
    <SideBar>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Your Certifications
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
                <div className="flex-shrink-0 p-8">
                  <img
                    className="h-48 w-full object-contain"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Get Certification
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              "Learn continually there's always one more thing to learn" - Steve
              Jobs
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {post2.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-contain"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                    </a>
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
