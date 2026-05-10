import LoginForm from "@/src/components/LoginComponents/LoginForm";
import LoginHero from "@/src/components/LoginComponents/LoginHero";

export default function Page() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center ">
            <LoginHero />
          </div>

          <div className="flex flex-col items-center justify-center">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
