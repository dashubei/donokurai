import React, { useEffect, useState } from "react";
import MainTitle from "./components/ui/title/MainTitle";
import BaseLayout from "./components/layouts/BaseLayout";
import MainText from "./components/ui/text/MainText";
import TextLayout from "./components/layouts/TextLayout";
import BoldText from "./components/ui/text/BoldText";
import AgeInput from "./components/ui/input/AgeInput";

import SelectBox from "./components/ui/select/SelectBox";
import Button from "./components/ui/button/Button";
import Card from "./components/ui/card/Card";
import CardList from "./components/ui/card-list/CardList";

const MEN_AVE_LIFE_SPAN = 70;
const WOMEN_AVE_LIFE_SPAN = 74;

const calcurateTimeDay = (years: number): number => {
  const totalDays = Math.trunc(years / 4) + 365 * years;
  console.log(totalDays);
  return totalDays;
};

const MEN_DAYS = calcurateTimeDay(MEN_AVE_LIFE_SPAN);
const WOMEN_DAYS = calcurateTimeDay(MEN_AVE_LIFE_SPAN);

const App = (): React.JSX.Element => {
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>("");
  const [resultYear, setResultYear] = useState<number>(0);
  const [resultMonth, setResultMonth] = useState<number>(0);
  const [resultDay, setResultDay] = useState<number>(0);
  const [resultHour, setResultHour] = useState<number>(0);
  const [isResultShow, setResultShow] = useState<boolean>(false);

  const handleAgeChange = (newAge: number) => {
    setAge(newAge);
  };

  const handleGenderChange = (newGender: string) => {
    setGender(newGender);
  };

  const handleCalcurate = () => {
    if (age < 0 && !gender) return;

    setResultYear(
      gender === "男性" ? MEN_AVE_LIFE_SPAN - age : WOMEN_AVE_LIFE_SPAN - age
    );

    setResultShow(true);
  };

  useEffect(() => {
    setResultHour(resultDay * 24);
  }, [resultDay]);

  useEffect(() => {
    setResultDay(resultYear * 365 + Math.trunc(resultYear / 4));
  }, [resultMonth]);

  useEffect(() => {
    setResultMonth(resultYear * 12);
  }, [resultYear]);

  return (
    <BaseLayout>
      <MainTitle />
      <TextLayout>
        <MainText>
          "<BoldText>Donokurai</BoldText>
          "は、あなたがあと何年健康な時間を過ごすことができるのかを計算するアプリです。
        </MainText>
        <MainText>
          具体的な時間がわかれば、
          <br />「<BoldText>行ってみたい場所</BoldText>
          」「<BoldText>実家に帰る</BoldText>
          」「<BoldText>資格を取る</BoldText>」「
          <BoldText>好きな人に告白する</BoldText>」
          <br /> といった後回しにしやすい行動に移りやすくなると思います。
        </MainText>
        <MainText>
          本アプリがそんな人たちの<BoldText>手助け</BoldText>
          になれば幸いです😊
        </MainText>
      </TextLayout>

      <TextLayout>
        <MainText>🎂ご年齢を入力してください。</MainText>
        <AgeInput age={age} onAgeChange={handleAgeChange} />
      </TextLayout>

      <TextLayout>
        <MainText>性別（生物学的な性別を選択してください🙇）</MainText>
        <SelectBox gender={gender} handleChange={handleGenderChange} />
      </TextLayout>
      <Button
        onClick={handleCalcurate}
        isDisabled={Boolean(age >= 0 && !gender)}
      >
        計算する
      </Button>

      {isResultShow && (
        <>
          <h2>残り時間</h2>
          <CardList>
            <Card>
              {resultYear?.toLocaleString("ja-JP")}
              <span>年</span>
            </Card>
            <Card>
              {resultMonth?.toLocaleString("ja-JP")}
              <span>月</span>
            </Card>
            <Card>
              {resultDay?.toLocaleString("ja-JP")}
              <span>日</span>
            </Card>
            <Card>
              {resultHour?.toLocaleString("ja-JP")}
              <span>時間</span>
            </Card>
          </CardList>

          <span>
            あなたは人生の
            {Math.round(
              100 -
                (resultDay / (gender === "男性" ? MEN_DAYS : WOMEN_DAYS)) * 100
            )}
            %を生きました。（※健康寿命で計算しています。）
          </span>
          <div
            style={{
              border: "1px solid black",
              width: "100%",
              borderRadius: "100vmax",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                height: "5rem",
                borderRadius: "100vmax 0 0 100vmax",
                width: `${
                  (resultDay / (gender === "男性" ? MEN_DAYS : WOMEN_DAYS)) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </>
      )}
    </BaseLayout>
  );
};

export default App;
