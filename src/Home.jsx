const Home = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-extrabold leading-loose mb-8">Home</h1>

      <p className="my-8">
        This is a demo project for discovering the new features in React 18.
      </p>
      <a
        className="text-cyan-600"
        href="https://github.com/ibara1454/react-18-trial"
      >
        https://github.com/ibara1454/react-18-trial
      </a>
      <p className="my-8">
        In this project, we are focusing on comparing the suspense / old data
        fetching features. Please click on the links on the side menu to see the
        demos.
      </p>
      <p className="my-8">To find more React 18's new features:</p>
      <a
        className="text-cyan-600"
        href="https://reactjs.org/blog/2022/03/29/react-v18.html"
      >
        https://reactjs.org/blog/2022/03/29/react-v18.html
      </a>
    </div>
  );
};

export default Home;
