import { Navigate, Route, Routes,BrowserRouter as Router,  } from "react-router-dom";
import { Landing } from "../presentation/views/Landing";
import { useEffect, useState } from "react";
import { VideoCall } from "../presentation/views/VideoCall";

export const AppRouter = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
       setTimeout(() => {
         setIsLoading(false);
       }, 1000); 
     }, []);

     
    
  return (
    <Router>
    <Routes>
      <Route path="/" element={isLoading ?'Cargando' :<Landing />} />
      <Route path="/video-call" element={isLoading ?'Cargando' :<VideoCall />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
    </Router>
  );
};
