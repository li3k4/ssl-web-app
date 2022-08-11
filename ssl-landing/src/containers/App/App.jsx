import React, { Suspense } from "react";
import { useRef, useState } from "react";
import styles from "./App.module.css";
import Spline from "@splinetool/react-spline";
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

import { animateScroll as scroll } from "react-scroll";
import ssl from "../../resources/img/ssl.png";

const ZoomScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

const App = () => {
  return (
    <>
      <ScrollContainer>
        <ScrollPage page={1}>
          <Animator animation={batch()}>
            <div className={styles["page1"]}>
         
              <img className={styles["ssl"]} src={ssl}></img>
              <button
                onClick={() => scroll.scrollToBottom()}
                className={styles["btn-contact"]}
              >
                Контакты
              </button>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={batch("StickyOut(), Fade()")}>
            <div className={styles["page2"]}>
              <div className={styles["item-2"]}>
                <h1 className={styles["page2-h1"]}>15</h1>
                <span>Веб-сайтов</span>
              </div>
              <div className={styles["item-2"]}>
                <h1 className={styles["page2-h1"]}>9</h1>
                <span>Проектов</span>
              </div>
              <div className={styles["item-2"]}>
                <h1 className={styles["page2-h1"]}>2022</h1>
                <span>Год основания</span>
              </div>
              <div className={styles["item-2"]}>
                <h1 className={styles["page2-h1"]}>30</h1>
                <span>Заказчиков</span>
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={3}>
          <Animator
            animation={batch(
              "FadeIn(), Sticky(), MoveIn(1000, 0), MoveOut(0, -300)"
            )}
          >
            <div className={styles["table"]}>
              <div className={styles["table-head"]}>
                <h1>Разработка и поддержка сайтов</h1>
                <span className={styles["table-head-sub"]}>
                  Создание сайтов любой сложности: от лендинга
                  до интернет-магазина со встроенной CRM-системой.
                </span>
              </div>

              <ul className={styles["table-ul"]}>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>
                    Ознакомление с продукцией и преймуществами вашей компании.{" "}
                  </div>
                  <span>01</span>
                </li>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>
                    Разработка технического задания.
                  </div>{" "}
                  <span>02</span>
                </li>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>
                    Создание и согласование дизайна.
                  </div>{" "}
                  <span>03</span>
                </li>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>
                    Гибкая разработка с возможностью вносить правки.
                  </div>{" "}
                  <span>04</span>
                </li>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>
                    Передача прав доступа владельцу.
                  </div>{" "}
                  <span>05</span>
                </li>
                <li className={styles["table-li-last"]}>
                  <div className={styles["table-li-span"]}>
                    Поддержка сайта.
                  </div>
                  <span>06</span>{" "}
                </li>
              </ul>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={4}>
          <Animator
            animation={batch(
              "FadeIn(), Sticky(), MoveIn(1000, 0), MoveOut(0, -300)"
            )}
          >
            <div className={styles["page4"]}></div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={5}>
          <Animator animation={""}>
            <div className={styles["table"]}>
              <div className={styles["table-head"]}>
                <h1>Графический дизайн</h1>
              </div>

              <ul className={styles["table-ul"]}>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>
                    Контент для соцсетей.
                  </div>{" "}
                  <span>01</span>
                </li>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>Макет сайта.</div>{" "}
                  <span>02</span>
                </li>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>
                    Логотип и брендбук (фирменный стиль вашего бренда).{" "}
                  </div>
                  <span>03</span>
                </li>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>Баннеры.</div>{" "}
                  <span>04</span>
                </li>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>Презентации.</div>{" "}
                  <span>05</span>
                </li>
                <li className={styles["table-li-last"]}>
                  <div className={styles["table-li-span"]}>
                    Иллюстрации и изображения.
                  </div>
                  <span>06</span>{" "}
                </li>
              </ul>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={6}>
          <Animator
            animation={batch(
              "FadeIn(), Sticky(), MoveIn(1000, 0), MoveOut(0, -300)"
            )}
          >
            <div className={styles["page6"]}>
              <h1 className={styles["mirror-word"]}> PANORAMA</h1>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={7}>
          <Animator
            animation={batch(
              "FadeIn(), Sticky(), MoveIn(1000, 0), MoveOut(0, -300)"
            )}
          >
            <div className={styles["table"]}>
              <div className={styles["table-head"]}>
                <h1>IT-аутсорсинг бизнеса</h1>
                <span className={styles["table-head-sub"]}>
                  Улучшим то, что уже есть, или создадим с нуля.
                </span>
              </div>

              <ul className={styles["table-ul"]}>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>
                    Подготовка и обслуживание рабочих мест сотрудников.{" "}
                  </div>
                  <span>01</span>
                </li>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>
                    {" "}
                    Локальная внутрення сеть для предприятия .{" "}
                  </div>
                  <span>02</span>
                </li>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>
                    Защищенное облачное хранилище.
                  </div>{" "}
                  <span>03</span>
                </li>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>
                    Подборка и настройка CRM-системы.
                  </div>{" "}
                  <span>04</span>
                </li>
                <li className={styles["table-li"]}>
                  <div className={styles["table-li-span"]}>
                    {" "}
                    Подборка техники под специфику Вашего бизнеса.
                  </div>
                  <span>05</span>{" "}
                </li>
                <li className={styles["table-li-last"]}>
                  <div className={styles["table-li-span"]}>
                    {" "}
                    Личная и дистанционная техническая поддержка 24/7.
                  </div>
                  <span>06</span>{" "}
                </li>
              </ul>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={8}>
          <Animator
            animation={batch(
              "FadeIn(), Sticky(), MoveIn(1000, 0), MoveOut(0, -300)"
            )}
          >
            <div className={styles["page8"]}> </div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={9} ref={scroll}>
          <Animator>
            <div className={styles["footer_down"]}>
              <a href="" className={styles["footer_email-btn"]}>
                {" "}
                SEND EMAIL
              </a>
              <div className={styles["footer"]}>
                <div className={styles["item-footer"]}>
                  <h3>Контакты</h3>
                  <a href="">swdan.ov@gmail.ru</a>
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
    </>
  );
};

export default App;
