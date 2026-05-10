import Form from "@/src/components/SignupComponent/SignupForm";
import Hero from "@/src/components/SignupComponent/SignupHero";

export default function Page() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex flex-col items-center justify-center ">
            <Hero  />
          </div>

          <div className="flex flex-col items-center justify-center">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
