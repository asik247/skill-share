
import { NavLink } from 'react-router';
import useMyHook from '../Hooks/useMyHook';
import { AuthContext } from '../Context/AuthContext.';
import { useContext } from 'react';

const LogIn = () => {
    // AuthContext receive loginUser;
    const {loginUser} = useContext(AuthContext);
    const [emailValue, handleEmailChange] = useMyHook('');
    const [passwordValue, handlePasswordChange] = useMyHook('');
    // handler login;
    const loginHandler = (e)=>{
        e.preventDefault();
        console.log(emailValue,passwordValue);
        loginUser(emailValue,passwordValue)
        .then(res=>{
            console.log(res.user);
        }).catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                {/* TITLE */}
                <h1 className="text-3xl font-bold text-center mb-6">
                    Login to Your Account
                </h1>

                {/* FORM */}
                <form onSubmit={loginHandler} className="space-y-5">

                    {/* EMAIL */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={emailValue}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={passwordValue}
                            onChange={handlePasswordChange}
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* FORGOT */}
                    <div className="text-right">
                        <a className="text-sm text-blue-500 hover:underline cursor-pointer">
                            Forgot password?
                        </a>
                    </div>

                    {/* BUTTON */}
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition">
                        Login
                    </button>

                    {/* REGISTER */}
                    <p className="text-center text-sm">
                        New here?{" "}
                        <NavLink
                            to="/auth/registation"
                            className="text-blue-500 font-medium hover:underline"
                        >
                            Create an account
                        </NavLink>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default LogIn;