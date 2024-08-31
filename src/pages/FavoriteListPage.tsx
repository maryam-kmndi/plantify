import Favorites from "../components/Favorites";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckLogin } from "../store/useCheckLogin";

const FavoriteListPage = () => {
  const navigate = useNavigate();
  const { checkLogin } = useCheckLogin();

  useEffect(() => {
    !checkLogin && navigate("/log-in");
  }, [checkLogin]);

  return <Favorites />;
};

export default FavoriteListPage;
