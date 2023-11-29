import { useState,useEffect } from "react"
import { NEW_API } from "./constant"

const useRestrauntMenu=(resId)=>{
    const [resInfo, setResInfo] = useState(null);
  
    useEffect(() => {
      fetchMenu();
    },[]);
  
    const fetchMenu = async () => {
      const data = await fetch(NEW_API+resId);
      const json = await data.json();
      setResInfo(json.data);
    };
    return resInfo;
};

export default useRestrauntMenu;