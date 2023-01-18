import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowDetail from "../components/ShowDetail";
import { setShowDetails } from "../store";

function ShowDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const key = "YlKDJYA1sxhvJjCNwZ5wLY24rXg6msDzJwkks3XG";
    const fetchDetailsUrl = `https://api.watchmode.com/v1/title/${id}/details/?apiKey=${key}`;
    const fetchData = async () => {
      const response = await axios.get(fetchDetailsUrl);
      dispatch(setShowDetails(response.data));
    };
    fetchData();
  }, []);
  const showDetail = useSelector((state) => {
    return state?.shows?.showData;
  });

  return (
    <div>
      <ShowDetail show={showDetail} />
    </div>
  );
}

export default ShowDetailPage;
