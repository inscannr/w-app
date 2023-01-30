import { useNavigate } from "react-router";
import Button from "../components/common/Button";

export default function NotFoundPage() {
  const navigation = useNavigate();
  return (
    <>
      <div
        className="mt-24
        h-[calc(100vh-300px)]"
      >
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="dark:border-gray-500 sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <div>
                  <Button buttonType="primary" onClick={() => navigation("/")}>
                    Go back home
                  </Button>
                </div>
                <div>
                  <Button buttonType="secondary">Contact Support</Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
