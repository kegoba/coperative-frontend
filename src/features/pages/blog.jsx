const articles = [
  {
    author: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    description:
      'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
    imgPath: '/images/cash.jpeg',
    imgAlt: 'multiple bills with different values and currencies',
  },
  {
    author: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    description:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
    imgPath: '/images/image-restaurant.jpg',
    imgAlt: 'someone eating a hamburguer in a restaurant',
  },
  {
    author: 'By Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    description:
      'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
    imgPath: '/images/image-plane.jpg',
    imgAlt: 'A plane in the sky',
  },
  {
    author: 'By Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    description:
      'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
    imgPath: '/images/image-confetti.jpg',
    imgAlt: 'Falling confetti',
  },
];

const Blog = () => {
  return (
    <section className="py-14 lg:py-24">
      <div className="container mx-auto px-4">
      <h2 className="text-center text-3xl lg:text-4xl text-primary-dark-blue mb-5 lg:mb-10">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article) => (
            <article key={article.title} className="bg-white shadow-md rounded">
              <div className="aspect-w-16 aspect-h-10 lg:aspect-w-4 lg:aspect-h-3">
                <img
                  className="object-cover w-full h-full"
                  src={article.imgPath}
                  alt={article.imgAlt}
                />
              </div>
              <div className="px-7 pt-5 pb-10 lg:p-6">
                <span className="text-neutral-grayish-blue text-xs">
                  {article.author}
                </span>
                <h4 className="text-primary-dark-blue text-sm py-2 hover:text-green-400">
                  {article.title}
                </h4>
                <p className="text-neutral-grayish-blue text-xs">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Blog
