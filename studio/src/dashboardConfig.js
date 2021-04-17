export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "607b23bf9d47469adca2244a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-test-studio-p58i9mx4",
                  apiId: "537ea5e8-eeb0-4106-8b83-bcc14473d0fc",
                },
                {
                  buildHookId: "607b23bfc7f1dfbf246ae5ed",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-test-web-bxt1afx5",
                  apiId: "aeac0908-9602-41c0-b737-05481aa30584",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/aregh/sanity-gatsby-blog-test",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-test-web-bxt1afx5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
