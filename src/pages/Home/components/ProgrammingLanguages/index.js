import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./ProgrammingLanguages.scss";
import { Pagination } from "swiper";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiLaravel,
  SiPython,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import ProgrammingLanguagesCard from "./ProgrammingLanguagesCard";

function ProgrammingLanguages() {
  return (
    <div className="ProgrammingLanguages">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={30}
        slidesPerView={5}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProgrammingLanguagesCard
            LanguagesName="HTML"
            Icon={<AiFillHtml5 />}
            Lessons={43}
            Videos={232}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProgrammingLanguagesCard
            LanguagesName="CSS"
            Icon={<SiCss3 />}
            Lessons={43}
            Videos={232}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProgrammingLanguagesCard
            LanguagesName="JavaScript"
            Icon={<SiJavascript />}
            Lessons={43}
            Videos={232}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProgrammingLanguagesCard
            LanguagesName="PHP"
            Icon={<SiPhp />}
            Lessons={43}
            Videos={232}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProgrammingLanguagesCard
            LanguagesName="MySQL"
            Icon={<SiMysql />}
            Lessons={43}
            Videos={232}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProgrammingLanguagesCard
            LanguagesName="Laravel"
            Icon={<SiLaravel />}
            Lessons={43}
            Videos={232}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProgrammingLanguagesCard
            LanguagesName="Python"
            Icon={<SiPython />}
            Lessons={43}
            Videos={232}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProgrammingLanguagesCard
            LanguagesName="Git"
            Icon={<DiGit />}
            Lessons={43}
            Videos={232}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProgrammingLanguages;
