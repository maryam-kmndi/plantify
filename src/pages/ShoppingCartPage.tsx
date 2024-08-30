import Shopping from "../components/Shopping";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckLogin } from "../store/useCheckLogin";

const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const { checkLogin } = useCheckLogin();

  useEffect(() => {
    !checkLogin && navigate("/log-in");
  }, [checkLogin]);

  return <Shopping />;
};

export default ShoppingCartPage;
