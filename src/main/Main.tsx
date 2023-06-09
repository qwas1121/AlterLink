import React, { useRef, useState, useEffect } from "react";
import "./main.css";
import Plx from "react-plx";
import { ReactComponent as SVG } from "./svg.svg";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import CountUp from "react-countup";
import { useDencrypt } from "use-dencrypt-effect";

import CountDown from "./CountDown";

import Mission from "./Mission";
// import RoadMap from "./Roadmap";
const Main: React.FC = () => {
  //메인글씨
  const [value, setValue] = useDencrypt(" ");

  // scroll 확인
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
    console.log(window.scrollY);
  }
  //scroll event (force)
  const forceRef = useRef<HTMLDivElement>(null); // Ref 객체 생성
  // const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollClass, setScrollClass] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  //숫자 증가
  const numRef = useRef<HTMLDivElement>(null); // Ref 객체 생성
  const [num, setNum] = useState(false);

  // 판게아프로젝트
  const [pangaeaClass, setPangeaClass] = useState("atman");

  function pangeaClassChange() {
    if (pangaeaClass == "atman") {
      setPangeaClass("looper");
    } else if (pangaeaClass == "looper") {
      setPangeaClass("hide");
    } else {
      setPangeaClass("atman");
    }
  }
  // mousemove event
  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;

  const handleMouseMove = (e: MouseEvent) => {
    x = e.clientX - window.innerWidth / 2;
    y = e.clientY - window.innerHeight / 2;
  };

  const [pos, setPos] = useState({ x: 0, y: 0 }); // 이미지 위치
  const loop = () => {
    //const speed = 0.009;
    const speed = 0.009;

    mx += (x - mx) * speed;
    my += (y - my) * speed;

    window.requestAnimationFrame(loop);
    setPos({ x: mx, y: my });
  };

  useEffect(() => {
    //메인글씨
    setValue("Are you ready to link?");
    const handleScroll = () => {
      if (!forceRef.current) return;

      const sectionTop = forceRef.current.getBoundingClientRect().top;
      const sectionHeight = forceRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // 이제 sectionTop은 0 (상단에 도착)부터 -sectionHeight (하단에 도착)까지의 범위를 가집니다.
      // 이 값을 양수로 변환하고, sectionHeight에 대한 비율을 계산하여 스크롤 퍼센트를 얻습니다.
      const scrollPosition = -sectionTop;
      const scrollPercent =
        (scrollPosition / (sectionHeight - viewportHeight)) * 100;

      setScrollPercent(scrollPercent);
      //숫자
      if (
        numRef.current !== null &&
        numRef.current.getBoundingClientRect().top < window.innerHeight
      ) {
        setNum(true);
      } else {
        setNum(false);
      }
    };

    //mousemove event
    window.addEventListener("mousemove", handleMouseMove);

    //★ 메인에서 벗어나면 중단되게 해야함
    loop();

    // scroll event
    window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", onScroll); //이거 나중에 지울거
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="main">
        <h1>{value}</h1>
        <div className="blackBg2"></div>
        <Plx
          className="blackBg"
          parallaxData={[
            {
              start: 0,
              end: 650,
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: "opacity",
                },
              ],
            },
          ]}
        />

        <div className="img_wrap">
          <img
            src={process.env.PUBLIC_URL + "/img/main/wall.png"}
            alt=""
            className="wall"
          />
          <img
            style={{
              transform: `translate(${pos.x / 10}px, ${pos.y / 10}px)`,
            }}
            src={process.env.PUBLIC_URL + "/img/main/move_img.png"}
            alt=""
            className="move_img"
          />
        </div>
        <div id="section01">
          <div className="phone">
            <img
              src={process.env.PUBLIC_URL + "/img/main/logo.png"}
              alt="AlterLink"
              className="logoImg"
            />
            <img
              src={process.env.PUBLIC_URL + "/img/main/phone.png"}
              alt=""
              className="phoneImg"
            />
          </div>
        </div>
        <div id="section02">
          <p>
            “<span>Alter Link</span>” is a combination of “<span>Alter</span>”
            and “<span>Link</span>”, which means
            <br />
            connecting with another aspect of oneself (Alter) and is represented
            <br />
            by a symbol that is focused on one’s own voice, in order to not
            forget its essence.
          </p>
        </div>
      </div>
      <div
        id="section03"
        ref={forceRef}
        className={`forceWrap ${scrollClass}
        ${scrollPercent <= 33 && scrollPercent > 0 ? "atman" : ""}
        ${scrollPercent > 33 ? "looper" : ""}
        ${scrollPercent > 66 ? "hide" : ""}
      `}
      >
        {/* 아트만 루퍼 하이드*/}
        <div className="forceWrap">
          <img
            src={process.env.PUBLIC_URL + "/img/main/forceBg.png"}
            alt=""
            className="force_bg"
          />
          <div className="text_wrap">
            <SVG />
          </div>

          {/* atman */}
          <div className="force atman height100">
            <div
              className={`peopleImg ${scrollPercent > 5 ? "active" : ""}
             ${scrollPercent > 33 ? "remove" : ""}`}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/main/atman_people.png"}
                alt=""
                className="people"
              />
              <img
                src={
                  process.env.PUBLIC_URL + "/img/main/atman_people_shadow.png"
                }
                alt=""
                className="shadow"
              />
            </div>
            <div
              className={`storyWrap ${scrollPercent > 5 ? "active" : ""}
            ${scrollPercent > 33 ? "remove" : ""}
            `}
            >
              <div className="circle"></div>
              <div className="lineWrap">
                <div className="line"></div>
              </div>
              <div className="line2">
                <img
                  src={process.env.PUBLIC_URL + "/img/main/story_line.png"}
                  alt=""
                />
              </div>
              <div className="box cf">
                <img
                  src={process.env.PUBLIC_URL + "/img/main/storyBox_line.png"}
                  alt=""
                  className="storyLine right"
                />
                <h3>
                  <img
                    src={process.env.PUBLIC_URL + "/img/main/atman_logo.png"}
                    alt="ATMAN"
                  />
                </h3>
                <div className="txt">
                  <h4>
                    <span>Alter</span>
                  </h4>
                  <p>
                    <span>
                      A force that adapts to rapidly changing environments.
                      <br />
                      They live hiding what they <br />
                      really like and want to do, conscious of society’s gaze
                    </span>
                  </p>
                </div>
                <div className="txt">
                  <h4>
                    <span>Story</span>
                  </h4>
                  <p>
                    <span>
                      Belong to the government and dream of a stable and high
                      position,
                      <br />
                      There are also Atmans who go over to the power of loopers
                      for
                      <br />
                      their own freedom and dreams.
                    </span>
                  </p>
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/img/main/storyBox_line.png"}
                  alt=""
                  className="storyLine"
                />
              </div>
            </div>
          </div>
          {/* atman */}

          {/* looper */}
          <div className="force looper height100">
            <div
              className={`peopleImg ${scrollPercent > 33 ? "peopleOn" : ""}
              ${scrollPercent > 33 ? "active" : ""}
             ${scrollPercent > 66 ? "remove" : ""}`}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/main/looper_people.png"}
                alt=""
                className="people"
              />
              <img
                src={
                  process.env.PUBLIC_URL + "/img/main/looper_people_shadow.png"
                }
                alt=""
                className="shadow"
              />
            </div>
            <div
              className={`storyWrap ${scrollPercent > 33 ? "active" : ""}
            ${scrollPercent > 66 ? "remove" : ""}
            `}
            >
              <div className="circle"></div>
              <div className="lineWrap">
                <div className="line"></div>
              </div>
              <div className="line2">
                <img
                  src={process.env.PUBLIC_URL + "/img/main/story_line.png"}
                  alt=""
                />
              </div>
              <div className="box cf">
                <img
                  src={process.env.PUBLIC_URL + "/img/main/storyBox_line.png"}
                  alt=""
                  className="storyLine right"
                />
                <h3>
                  <img
                    src={process.env.PUBLIC_URL + "/img/main/looper_logo.png"}
                    alt="LOOPER"
                  />
                </h3>
                <div className="txt">
                  <h4>
                    <span>Alter</span>
                  </h4>
                  <p>
                    <span>
                      A force that values their own freedom and instincts.
                      <br />
                      They may be self-centered, but they have a personality
                      <br />
                      that is not resistant to doing things that they believe
                      <br />
                      are valuable and enjoyable.
                    </span>
                  </p>
                </div>
                <div className="txt">
                  <h4>
                    <span>Story</span>
                  </h4>
                  <p>
                    <span>
                      They dream of their own paradise, free from government
                      control.
                      <br />
                      Self-centered, but living together with like-minded
                      people,
                      <br />
                      It is a rebel force of the government,
                      <br />
                      and also a force of opposition to Hide.
                    </span>
                  </p>
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/img/main/storyBox_line.png"}
                  alt=""
                  className="storyLine"
                />
              </div>
            </div>
          </div>
          {/* looper */}
          {/* hide */}
          <div className="force hide height100">
            <div
              className={`peopleImg ${scrollPercent > 66 ? "peopleOn" : ""}
              ${scrollPercent > 66 ? "active" : ""}`}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/main/hide_people.png"}
                alt=""
                className="people"
              />
              <img
                src={
                  process.env.PUBLIC_URL + "/img/main/hide_people_shadow.png"
                }
                alt=""
                className="shadow"
              />
            </div>
            <div className={`storyWrap ${scrollPercent > 66 ? "active" : ""}`}>
              <div className="circle"></div>
              <div className="lineWrap">
                <div className="line"></div>
              </div>
              <div className="line2">
                <img
                  src={process.env.PUBLIC_URL + "/img/main/story_line.png"}
                  alt=""
                />
              </div>
              <div className="box cf">
                <img
                  src={process.env.PUBLIC_URL + "/img/main/storyBox_line.png"}
                  alt=""
                  className="storyLine right"
                />
                <h3>
                  <img
                    src={process.env.PUBLIC_URL + "/img/main/hide_logo.png"}
                    alt="HIDE"
                  />
                </h3>
                <div className="txt">
                  <h4>
                    <span>Alter</span>
                  </h4>
                  <p>
                    <span>
                      A machine-wrapped force.
                      <br />
                      Develop your weaknesses more strongly.
                      <br />
                      He is law-abiding, tough, and cold-hearted.
                    </span>
                  </p>
                </div>
                <div className="txt">
                  <h4>
                    <span>Story</span>
                  </h4>
                  <p>
                    <span>
                      If you enlist in the government’s army, <br />
                      You can make yourself stronger with a better machine,
                      <br />
                      and you can achieve a rise in status. Its main task is to
                      wipe <br />
                      out criminals who do not comply with control.
                    </span>
                  </p>
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/img/main/storyBox_line.png"}
                  alt=""
                  className="storyLine"
                />
              </div>
            </div>
          </div>
          {/* looper */}
        </div>
      </div>
      {/* section03 */}

      <div id="section04">
        {/* <div className="blackBg"></div>
        <div className="blackBg2"></div> */}
        <div className="sec_inner">
          <img
            src={process.env.PUBLIC_URL + "/img/main/sec04_top_line.png"}
            alt=""
          />
          <div ref={numRef} className="text_wrap">
            <h2 className="num">
              {num && <CountUp start={0} end={9000} duration={1} />}
            </h2>
            <h3>
              <span>
                A collection of 9,000. Link to the faction that suits
                <br />
                you among the three factions.
              </span>
            </h3>
            <p>
              <span className="forceName">“Hide”</span>
              <span className="txt"> wants to be proud of his strength</span>
              <br />
              <span className="forceName">“looper”</span>
              <span className="txt">
                who yearns for freedom and wants a life of
              </span>
              freedom
              <br />
              <span className="forceName">“Atman”</span>
              <span className="txt"> who is worried about not being</span>
              <br />
              <span className="txt">
                able to decide what he wants Link with the faction that suits
              </span>
              you.
            </p>
          </div>
        </div>
        <div className="img_wrap">
          <div className="imgBox imgOne">
            <img
              src={process.env.PUBLIC_URL + "/img/main/sec04_img01.png"}
              alt=""
              className="img01"
            />
            <img
              src={process.env.PUBLIC_URL + "/img/main/sec04_img04.png"}
              alt=""
              className="img04"
            />
          </div>
          <div className="imgBox imgTwo">
            <img
              src={process.env.PUBLIC_URL + "/img/main/sec04_img02.png"}
              alt=""
              className="img03"
            />
            <img
              src={process.env.PUBLIC_URL + "/img/main/sec04_img05.png"}
              alt=""
              className="img05"
            />
          </div>
          <div className="imgBox imgThree">
            <img
              src={process.env.PUBLIC_URL + "/img/main/sec04_img03.png"}
              alt=""
              className="img03"
            />
            <img
              src={process.env.PUBLIC_URL + "/img/main/sec04_img06.png"}
              alt=""
              className="img06"
            />
          </div>
        </div>
      </div>
      {/* section04 */}
      <div id="section05" className="height100">
        <div className="sec_inner">
          <div className="sec5_title">
            <h2 className="font2">Joining AlterLink</h2>
            <p>
              A collection of 9,000. Link to the faction that suits
              <br />
              you among the three factions.
            </p>
          </div>
          <div className="sec5_time">
            <CountDown />
          </div>
        </div>
      </div>
      {/* section05 */}
      <div id="section06" className={pangaeaClass}>
        <div className="around_title sec_inner cf font2">
          <h2>
            <span>Connect</span>
          </h2>
          <p>
            <span>
              P-Pangaea is a large-scale project that connects everyone,
              <br />
              including the “Alter Link NFT” owners.
              <br />
              Own the “Alter Link NFT” and join P-Pangaea.
            </span>
          </p>
        </div>
        <div className="sec6_imgWrap">
          <div className="bigTxt font2">
            <p className="bigTxt01">
              <span>projectPangaea</span>
              <span>projectPangaea</span>
            </p>
            <p className="bigTxt02">
              <span>projectPangaea</span>
              <span>projectPangaea</span>
            </p>
          </div>

          <div className="bigTxt lineTxt font2">
            <p className="bigTxt01">
              <span>projectPangaea</span>
              <span>projectPangaea</span>
            </p>
            <p className="bigTxt02">
              <span>projectPangaea</span>
              <span>projectPangaea</span>
            </p>
          </div>
          <div className="imgBox">
            <div className="flipCont"></div>
            {/* <div className="filpCont">
              <img
                src={process.env.PUBLIC_URL + "/img/main/sec06_img01.jpg"}
                alt=""
                className={pangaeaClass == "atman" ? "front" : "back"}
              />
              <img
                src={process.env.PUBLIC_URL + "/img/main/sec06_img02.jpg"}
                alt=""
                className={pangaeaClass == "looper" ? "front" : "back"}
              />
              <img
                src={process.env.PUBLIC_URL + "/img/main/sec06_img03.jpg"}
                alt=""
                className={pangaeaClass == "hide" ? "front" : "back"}
              />
            </div> */}
          </div>
          <div className="plusBtn" onClick={pangeaClassChange}></div>
        </div>
      </div>
      {/* section06 판게아 프로젝트*/}
      <div id="section07">
        <div className="around_title cf sec_inner font2">
          <h2>
            <span>Connect</span>
          </h2>
          <p>
            <span>
              P-Pangaea is a large-scale project that connects everyone,
              <br />
              including the “Alter Link NFT” owners.
              <br />
              Own the “Alter Link NFT” and join P-Pangaea.
            </span>
          </p>
        </div>
        <div className="sec7_cont">
          <div className="left">
            <div className="profile"></div>
          </div>
          <div className="right"></div>
        </div>
      </div>
      {/* section07 */}
      <div id="section08">
        <div className="sec8_cont sec_inner">
          <div className="one">
            <div className="oneImg"></div>
            <p className="oneTxt font2">atman</p>
          </div>
          <div className="two"></div>
          <div className="three">
            <p className="font2">
              pRoJECT
              <br />
              <span>pangaea</span>
              <br />
              Connect
            </p>
            <div className="btns">
              <div className="btn01">WEAR NOW</div>
              <div className="btn02">
                <img
                  src={process.env.PUBLIC_URL + "/img/main/sec8_arrow.png"}
                  alt=""
                />
              </div>
              <div className="btn03">
                <img
                  src={
                    process.env.PUBLIC_URL + "/img/main/sec8_btn_img_atman.png"
                  }
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section08 */}
      <Mission />
      {/* section09 */}
      <div id="section10"></div>
    </>
  );
};

export default Main;
