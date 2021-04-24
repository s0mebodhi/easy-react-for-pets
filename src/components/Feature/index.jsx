import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Они тоже любят</h1>
      <p>Приюти одного или нескольких питомцев уже сегодня.</p>
      <FeatureButton><a href='/'>забрать здесь</a></FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
