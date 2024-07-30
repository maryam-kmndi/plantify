import { Card, CardBody, CardFooter, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import axios from "axios";

interface Plants {
  id: number;
  common_name: string;
  regular_url: string;
}

interface FetchPlantsResponse {
  data: Plants[];
}

const ShopCarts = () => {
  const [plants, setPlants] = useState<Plants[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get<FetchPlantsResponse>(
        "https://perenual.com/api/species-list?key=sk-84X966a6761c5aa666364"
      )
      .then((res) => setPlants(res.data.data))
      .catch((err) => setError(err.message));
  });
  return (
    <Card bg="cartColor">
      <CardBody>
        {error && <Text>{error}</Text>}
        <ul>
          {plants.map((plant) => (
            <li key={plant.id}>{plant.common_name}</li>
          ))}
        </ul>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default ShopCarts;
