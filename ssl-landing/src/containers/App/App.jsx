import React from "react";
import styles from "./App.module.css";
import { NavLink } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

const ZoomScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const myScroll = new LocomotiveScroll();

const App = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(StickyIn(), FadeIn(), Zoom(), Move(5, 5))}>
          <div className={styles["item-first-page"]}>
            <div className={styles[""]}>
            <h1 data-scroll data-scroll-speed="1">
              <span className={styles["s"]}>
                Solar
                <br />
              </span>
              <span className={styles["sl"]}>Snow Light</span>
            </h1>
            <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
              Создание вашего цифрового контена. Ваш контент, наши цифры.
            </p>
            </div>
            <button className={styles["btn-contact"]}>
              Contact 
            </button>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={batch( FadeIn(), Sticky(), MoveIn(-1000, 0), MoveOut(0, -300))}>
          <div>
          <h1 className={styles["item-web"]}>Web</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </h5>
          </div>

        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={batch(MoveOut, MoveIn)}>
          <div className={styles["item-netman"]}>
            <h3>NetMan</h3>
            <img
              className={styles["item-netman-img"]}
              src="https://cdn.dribbble.com/users/8794301/screenshots/18500021/media/1aa91ed564c3b908fdce188346c7550e.png?compress=1&resize=1000x750&vertical=top"
            ></img>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={3}>
        <Animator animation={""}>
          <div className={styles["item-5dim"]}>
            <h3>5 Dimension</h3>
            <img
              className={styles["item-5dim-img"]}
              src="https://cdn.dribbble.com/users/8794301/screenshots/17623582/media/9f75b4bbbc8335d5e8dc0162a6004a1a.png?compress=1&resize=1000x750&vertical=top"
            ></img>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={4}>
        <Animator animation={ZoomScrollOut}>
          <h1>Desktop</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator>
        <div className={styles["footer_down"]} id="down">
      <a href="" className={styles["footer_email-btn"]}>
        {" "}
        SEND EMAIL
      </a>
      <div className={styles["footer"]}>
        <div className={styles["item-footer"]}>
          <h3>Контакты</h3>
          <a href=" ">swdan.ov@gmail.ru</a>
          <a>+79526139159</a>
        </div>
        <div className={styles["item-footer"]}>
          <h3>Местоположение</h3>
          <a href="https://www.google.pl/maps/place/%D1%83%D0%BB.+%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D0%BA%D0%B0+%D0%9A%D1%83%D1%80%D1%87%D0%B0%D1%82%D0%BE%D0%B2%D0%B0,+13,+%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA,+%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+664074/@52.2568219,104.2641641,17z/data=!3m1!4b1!4m5!3m4!1s0x5da82352b361e3cf:0x250012cdb789df7d!8m2!3d52.2568219!4d104.2663528?hl=ru&authuser=0">
            Россия, Иркутская область, г. Иркутск, <br /> ул. Академика
            Курчатова 13
          </a>
        </div>
      </div>
    </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default App;
