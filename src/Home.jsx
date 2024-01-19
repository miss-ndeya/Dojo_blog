import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error ? (
        <div>{error}</div>
      ) : isPending ? (
        <div>Loading</div>
      ) : blogs && blogs.length > 0 ? (
        <BlogList blogs={blogs} title="All Blogs" />
      ) : (
        <div>Aucun blogs pour le moment</div>
      )}
    </div>
  );
};

export default Home;
