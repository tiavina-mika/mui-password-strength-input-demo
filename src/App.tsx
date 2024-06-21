import PasswordStrengthInput from "mui-password-strength-input";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 min-h-[100vh] bg-gray-200">
      <div className="flex flex-col gap-6 bg-white px-6 pt-6 pb-8 rounded-md w-[400px] shadow-md">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-xl font-bold">Password Strength Input</h1>
          <p>Check the password strength</p>
        </div>
        <form>
          <PasswordStrengthInput
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            /*
              * decomment if overriding error labels and bar colors
            */
            // options={{
            //   tooWeak: {
            //     label: "Too weak 1",
            //     color: "red",
            //   },
            //   weak: {
            //     label: "Weak 1",
            //     color: "yellow",
            //   },
            //   medium: {
            //     label: "Medium 1",
            //     color: "green",
            //   },
            //   strong: {
            //     label: "Strong 1",
            //     color: "blue",
            //   },
            // }}
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default App;
