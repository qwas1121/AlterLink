import { useEffect, useState, useRef } from "react";
import { useDencrypt } from "use-dencrypt-effect";

const Mission = () => {
  const [dencryptResult01, setDencrypt01] = useDencrypt();
  const [dencryptResult02, setDencrypt02] = useDencrypt();
  const [dencryptResult03, setDencrypt03] = useDencrypt();
  const [dencryptResult04, setDencrypt04] = useDencrypt();
  const [dencryptResult05, setDencrypt05] = useDencrypt();
  const [dencryptResult06, setDencrypt06] = useDencrypt();

  const [displayText01, setDisplayText01] = useState("");
  const [displayText02, setDisplayText02] = useState("");
  const [displayText03, setDisplayText03] = useState("");
  const [displayText04, setDisplayText04] = useState("");
  const [displayText05, setDisplayText05] = useState("");
  const [displayText06, setDisplayText06] = useState("");

  // Predefined texts for each scroll position.
  const texts = [
    "0%",
    "10%",
    "15%",
    "20%",
    "25%",
    "30%",
    "35%",
    "40%",
    "45%",
    "50%",
    "55%",
    "60%",
    "65%",
    "70%",
    "80%",
    "90%",
    "100%",
  ];

  //scroll
  const missionRef = useRef<HTMLDivElement>(null); // Ref 객체 생성
  const [MscrollClass, setMScrollClass] = useState("");
  const [MscrollPercent, setMScrollPercent] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      if (!missionRef.current) return;

      const MsectionTop = missionRef.current.getBoundingClientRect().top;
      const MsectionHeight = missionRef.current.offsetHeight;

      const MscrollPosition = -MsectionTop;
      const MscrollPercent =
        (MscrollPosition / (MsectionHeight - viewportHeight)) * 100;
      setMScrollPercent(MscrollPercent);

      if (MscrollPercent < 0) {
        setMScrollClass("");
        setDisplayText01(texts[0]);
        setDisplayText02(texts[0]);
        setDisplayText03(texts[0]);
        setDisplayText04(texts[0]);
        setDisplayText05(texts[0]);
      }
      if (MscrollPercent >= 0 && MscrollPercent < 33) {
        setMScrollClass("scroll01");
        setDisplayText01(texts[1]);
        setDisplayText02(texts[2]);
        setDisplayText03(texts[3]);
        setDisplayText04(texts[4]);
        setDisplayText05(texts[5]);
      } else if (MscrollPercent >= 33 && MscrollPercent < 66) {
        setMScrollClass("scroll02");
        setDisplayText01(texts[6]);
        setDisplayText02(texts[7]);
        setDisplayText03(texts[8]);
        setDisplayText04(texts[9]);
        setDisplayText05(texts[10]);
      } else if (MscrollPercent >= 66) {
        setMScrollClass("scroll03");
        setDisplayText01(texts[11]);
        setDisplayText02(texts[12]);
        setDisplayText03(texts[13]);
        setDisplayText04(texts[14]);
        setDisplayText05(texts[15]);
        setDisplayText06(texts[16]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setDisplayText01, setDisplayText02, setDisplayText03]);
  useEffect(() => {
    setDencrypt01(displayText01);
    setDencrypt02(displayText02);
    setDencrypt03(displayText03);
    setDencrypt04(displayText04);
    setDencrypt05(displayText05);
    setDencrypt06(displayText06);
  }, [
    displayText01,
    displayText02,
    displayText03,
    displayText04,
    displayText05,
    displayText06,
    setDencrypt01,
    setDencrypt02,
    setDencrypt03,
    setDencrypt04,
    setDencrypt05,
    setDencrypt06,
  ]);

  return (
    <div id="section09" ref={missionRef} className={MscrollClass}>
      <div className="sec9_inner">
        <div className="sec9_bgWrap">
          <div className="sec9Bg bg01"></div>
          <div className="sec9Bg bg02"></div>
          <div className="sec9Bg bg03"></div>
          <div className="imgWrap">
            <img
              src={process.env.PUBLIC_URL + "/img/main/sec9_img01.png"}
              alt=""
              className="sec9Img img01"
            />
            <img
              src={process.env.PUBLIC_URL + "/img/main/sec9_img02.png"}
              alt=""
              className="sec9Img img02"
            />
            <img
              src={process.env.PUBLIC_URL + "/img/main/sec9_img03.png"}
              alt=""
              className="sec9Img img03"
            />
          </div>
        </div>

        <div className="sec9cont">
          <h2 className="font2">MISSION</h2>
          <div
            className={`cont_tWrap contT01 ${
              MscrollPercent >= 0 && MscrollPercent < 33 ? "active" : ""
            }`}
          >
            <div className="detail detail01 font2">
              <p className="percent">
                <span>{dencryptResult01}</span>
              </p>
              <p className="text">
                <span>Establishment of Alter Link headquarters.</span>
              </p>
            </div>
            <div className="detail detail02 font2">
              <p className="percent">
                <span>{dencryptResult02}</span>
              </p>
              <p className="text">
                <span className="mgbt">
                  We announce the commencement of Alter Link’s first project,
                  “Pan-gaea.”
                </span>
                <span>
                  “PV - Pan-gaea” is a unified project by Alter Link that
                  connects not only
                  <br />
                  Alter Link NFT owners but also everyone. Additionally, it is a
                  project that allows
                  <br />
                  all NFT owners to contribute and shape it together. The
                  project’s planning and
                  <br />
                  progress updates can be found on our dedicated Discord server,
                  <br />
                  where NFT owners can stay informed.
                </span>
              </p>
            </div>
            <div className="detail detail03 font2">
              <p className="percent">
                <span>{dencryptResult03}</span>
              </p>
              <p className="text">
                <span>
                  The beta version of “Pan-gaea” will be showcased to NFT owners
                  first.
                  <br />
                  Utilizing Pan-gaea, we will redefine the community space.
                </span>
              </p>
            </div>
            <div className="detail detail04 font2">
              <p className="percent">
                <span>{dencryptResult04}</span>
              </p>
              <p className="text">
                <span>
                  We will be recruiting talented members who can assist in the
                  <br />
                  marketing and development of “PV - Pan-gaea.”
                </span>
              </p>
            </div>
            <div className="detail detail05 font2">
              <p className="percent">
                <span>{dencryptResult05}</span>
              </p>
              <p className="text">
                <span>
                  We plan to provide a variety of communities where people who
                  resonate with
                  <br />
                  our sincerity can engage in meaningful conversations and find
                  empathy.
                  <br />
                  Furthermore, if a significant number of like-minded
                  individuals gather and
                  <br />
                  foster communication, we will organize diverse events tailored
                  specifically for them.
                  <br />
                  Rest assured, we are committed to making what you think is
                  possible, possible.
                </span>
              </p>
            </div>
          </div>
          {/* text1 */}
          <div
            className={`cont_tWrap contT02 ${
              MscrollPercent > 33 && MscrollPercent <= 66 ? "active" : ""
            }`}
          >
            <div className="detail detail01 font2">
              <p className="percent">
                <span>{dencryptResult01}</span>
              </p>
              <p className="text">
                <span>
                  Upon 100% completion of the minting process,
                  <br />
                  we will designate 10 ETL as a gift through additional events.
                  <br />
                  (We may also distribute additional gifts in smoothly
                  communicating and collaborative spaces.)
                </span>
              </p>
            </div>
            <div className="detail detail02 font2">
              <p className="percent">
                <span>{dencryptResult02}</span>
              </p>
              <p className="text">
                <span>
                  For the strategic game world of Alter Link NFT, you can check
                  <br />
                  the grade of your owned NFTs on our official website.
                </span>
              </p>
            </div>
            <div className="detail detail03 font2">
              <p className="percent">
                <span>{dencryptResult03}</span>
              </p>
              <p className="text">
                <span>
                  The portal unlocked for Alter Link NFT holders provides a
                  space to engage in gameplay
                  <br />
                  based on the characteristics and lore of each faction. Through
                  NFTs, players gain access to
                  <br />
                  this gaming environment. By utilizing the NFT grades, winners
                  of the game can earn
                  <br />
                  additional coins. Additionally, players can create
                  faction-specific hideouts and have
                  <br />
                  discussions on which space to stake their claims.
                </span>
              </p>
            </div>
            <div className="detail detail04 font2">
              <p className="percent">
                <span>{dencryptResult04}</span>
              </p>
              <p className="text">
                <span>
                  Additional accessories that can be used to customize my owned
                  Alter Link NFT will be
                  <br />
                  airdropped. (Using coins earned through the Alter Link game,
                  higher-grade accessories can
                  <br />
                  be obtained through pulls.)
                </span>
              </p>
            </div>
            <div className="detail detail05 font2">
              <p className="percent">
                <span>{dencryptResult05}</span>
              </p>
              <p className="text">
                <span>
                  We will be launching a 1v1 battle game project for Alter Link
                  NFT holders. The outcome of the
                  <br />
                  game will be determined based on the grade of owned NFTs,
                  creating a simple yet
                  <br />
                  psychologically intense gameplay element.
                </span>
              </p>
            </div>
          </div>
          {/* text2 */}
          <div
            className={`cont_tWrap contT03 ${
              MscrollPercent > 66 ? "active" : ""
            }`}
          >
            <div className="detail detail01 font2">
              <p className="percent">
                <span>{dencryptResult01}</span>
              </p>
              <p className="text">
                <span>
                  A special event will be held for the Alter Link NFT holder who
                  achieves the highest victory in
                  <br />
                  the strategic card game. It will be a secret surprise.
                </span>
              </p>
            </div>
            <div className="detail detail02 font2">
              <p className="percent">
                <span>{dencryptResult02}</span>
              </p>
              <p className="text">
                <span>
                  Additional attributes for Alter Link NFTs will be airdropped.
                  It’s the moment when your own
                  <br />
                  Emotion Controller becomes visible.
                </span>
              </p>
            </div>
            <div className="detail detail03 font2">
              <p className="percent">
                <span>{dencryptResult03}</span>
              </p>
              <p className="text">
                <span>We are recruiting partner companies for our NFTs.</span>
              </p>
            </div>
            <div className="detail detail04 font2">
              <p className="percent">
                <span>{dencryptResult04}</span>
              </p>
              <p className="text">
                <span>
                  Through the distribution of “Pan-gaea,” we will collaborate
                  with all partner companies.
                  <br />
                  A portion of the revenue generated through “Pan-gaea” will be
                  distributed to NFT holders as
                  <br />
                  payment.
                </span>
              </p>
            </div>
            <div className="detail detail05 font2">
              <p className="percent">
                <span>{dencryptResult05}</span>
              </p>
              <p className="text">
                <span>
                  To celebrate the successful launch of Alter Link’s first
                  project, “Pan-gaea,” a party will be
                  <br />
                  held for NFT holders.
                </span>
              </p>
            </div>
            <div className="detail detail06 font2">
              <p className="percent">
                <span>{dencryptResult06}</span>
              </p>
              <p className="text">
                <span>
                  We unearth the gems within the strong community created by
                  Alter Link NFT holders and
                  <br />
                  give them wings to soar.
                </span>
              </p>
            </div>
          </div>
          {/* text3 */}
        </div>
      </div>
    </div>
  );
};
export default Mission;
