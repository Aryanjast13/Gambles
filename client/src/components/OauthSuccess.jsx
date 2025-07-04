import { useUser } from "@/contexts/UserContext";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function OauthSuccess() {
    const navigate = useNavigate();
    const { fetchUser } = useUser();

    useEffect(() => {
        
        navigate("/"); // or navigate to dashboard or profile
    }, [navigate]);

    useEffect(() => {
        const completeLogin = async () => {
            toast.success("Login successful!");
          await fetchUser(); // sets the user after cookies are set
          navigate("/dashboard"); // or wherever you want
        };
    
        completeLogin();
      }, []);

    return null;
}
