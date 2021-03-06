import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Ring } from "react-awesome-spinners";
import { getChooseNav, getIsKeyBoard } from "../../../redux/reducer/mainState";
import "./MainPage.scss";
// обернуть в лейзи
import { PaymentDetail } from "../payment/PaymentDetail";
import CheckAge from "../../checkAge/CheckAge";

const Navigation = lazy(() => import("../../navigation/Navigation"));
const Genre = lazy(() => import("../tv/genres/Genre"));
const ChanalGanres = lazy(() => import("../tv/chanalGanres/ChanalGanres"));
const Schedule = lazy(() => import("../tv/schedule/Schedule.js"));
const MovieTypes = lazy(() => import("../movie/movieClass/MovieTypes"));
const Films = lazy(() => import("../movie/films/Films"));
const ListSettings = lazy(() => import("../settings/listSettings/ListSetting"));
const DetailSetting = lazy(() => import("../settings/detailSetting/DetailSetting"));

const renderLoader = () => (
  <div className="suspense">
    <Ring size={300} />
  </div>
);

export const TVPage = () => {
  const isKeyBoard = useSelector(getIsKeyBoard);

  const menu = useSelector(getChooseNav);

  return (
    <div className="tv-page">
      {isKeyBoard && <CheckAge />}
      <Suspense fallback={renderLoader()}>
        <Navigation />
        {menu === "tv" && <ChanalGanres />}
        {menu === "tv" && <Genre />}
        {menu === "tv" && <Schedule />}

        {menu === "movie-types" && <MovieTypes />}
        {menu === "movie-types" && <Films />}

        {menu === "setup" && <ListSettings />}
        {menu === "setup" && <DetailSetting />}

        {menu === "paycard" && <PaymentDetail />}
      </Suspense>
    </div>
  );
};
