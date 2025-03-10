import React, { useState } from "react";
import MainTitle from "./components/ui/title/MainTitle";
import BaseLayout from "./components/layouts/BaseLayout";
import MainText from "./components/ui/text/MainText";
import TextLayout from "./components/layouts/TextLayout";
import BoldText from "./components/ui/text/BoldText";
import AgeInput from "./components/ui/input/AgeInput";

import SelectBox from "./components/ui/select/SelectBox";
import Button from "./components/ui/button/Button";

const MEN_AVE_LIFE_SPAN = 70;
const WOMEN_AVE_LIFE_SPAN = 74;

const App = (): React.JSX.Element => {
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>("");
  const [result, setResult] = useState<number>();
  const [isResultShow, setResultShow] = useState<boolean>(false);

  const handleAgeChange = (newAge: number) => {
    setAge(newAge);
  };

  const handleGenderChange = (newGender: string) => {
    setGender(newGender);
  };

  const handleCalcurate = () => {
    if (age < 0 && !gender) return;

    setResult(
      gender === "男性" ? MEN_AVE_LIFE_SPAN - age : WOMEN_AVE_LIFE_SPAN - age
    );
    setResultShow(true);
  };

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
          本アプリがそんな好きな人に告白する<BoldText>手助け</BoldText>
          となれば幸いです😊
        </MainText>
      </TextLayout>

      <TextLayout gapSize={"0"}>
        <MainText>🎂ご年齢を入力してください。</MainText>
        <AgeInput age={age} onAgeChange={handleAgeChange} />
      </TextLayout>

      <TextLayout gapSize={"0"}>
        <MainText>性別（生物学的な性別を選択してください🙇）</MainText>
        <SelectBox gender={gender} handleChange={handleGenderChange} />
      </TextLayout>
      <Button
        onClick={handleCalcurate}
        isDisabled={Boolean(age >= 0 && !gender)}
      >
        計算する
      </Button>

      {isResultShow && <>{result}</>}
    </BaseLayout>
  );
};

export default App;
