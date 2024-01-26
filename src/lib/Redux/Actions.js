import { fetchHero } from "../../services/apiActions";
import { heroData } from "../../redux/ReduxToolkit/heroSlice";

//! Hero Data
export const fetchHeroData = () => (dispatch) => {
    fetchHero()
        .then((data) => dispatch(heroData(data)))
        .catch((error) => console.log(error));
};
