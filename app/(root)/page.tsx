import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h2 className="h1-bold font-space-grotesk">
        Welcome to the world of Next.js
      </h2>
    </>
  );
};

export default Home;
