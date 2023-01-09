import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowDetail from "../components/ShowDetail";
import { setShowDetails } from "../store";

function ShowDetailPage() {
  const { name, id } = useParams();
  const dispatch = useDispatch();
  const showDetail = useSelector((state) => {
    return state.shows.showData;
  });

  console.log(showDetail);

  useEffect(() => {
    const key = "Xi2NW1MlhJARxSqBIbyUJD68ZjljDinK2iKSzG6F";
    const fetchDetailsUrl = `https://api.watchmode.com/v1/title/${id}/details/?apiKey=${key}`;
    const fetchData = async () => {
      const response = await axios.get(fetchDetailsUrl);
      dispatch(setShowDetails(response.data));
    };
    fetchData();
  }, []);

  return (
    <div>
      <ShowDetail show={showDetail} />
    </div>
  );
}

export default ShowDetailPage;
