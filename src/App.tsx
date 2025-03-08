import React, { useState } from "react";
import MainTitle from "./components/ui/title/MainTitle";
import BaseLayout from "./components/layouts/BaseLayout";
import MainText from "./components/ui/text/MainText";
import TextLayout from "./components/layouts/TextLayout";
import BoldText from "./components/ui/text/BoldText";
import DateInput from "./components/ui/input/DateInput";

import SelectBox from "./components/ui/select/SelectBox";
import Button from "./components/ui/button/Button";

const App = (): React.JSX.Element => {
  const [date, setDate] = useState<string>("2000-01-01");
  const [gender, setGender] = useState<string>("");

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
  };

  const handleGenderChange = (newGender: string) => {
    setGender(newGender);
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

      <TextLayout gap={"0"}>
        <MainText>🎂誕生日を入力してください。</MainText>
        <DateInput date={date} onDateChange={handleDateChange} />
      </TextLayout>

      <TextLayout gap={"0"}>
        <MainText>性別（生物学的な性別を選択してください🙇）</MainText>
        <SelectBox gender={gender} handleChange={handleGenderChange} />
      </TextLayout>
      <Button>計算する</Button>
    </BaseLayout>
  );
};

export default App;
