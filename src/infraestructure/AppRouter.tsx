import { Navigate, Route, Routes,BrowserRouter as Router,  } from "react-router-dom";
import { Landing } from "../presentation/views/Landing";
import { useEffect, useState } from "react";
import { VideoCall } from "../presentation/views/VideoCall";
import { Loading } from "../components/Loading";

export const AppRouter = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
       setTimeout(() => {
         setIsLoading(false);
       }, 2000); 
     }, []);

     
    
  return (
    <Router>
    <Routes>
      <Route path="/" element={isLoading ?<Loading /> :<Landing />} />
      <Route path="/video-call" element={isLoading ?<Loading /> :<VideoCall />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
    </Router>
  );
};
