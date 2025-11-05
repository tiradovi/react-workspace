import React, { useState } from 'react';

// 자식 1: 섭씨 입력
const CelsiusInput = ({ value, handler }) => {
    return (
        <div>
            <label>섭씨 (°C):
                <input value={value} onChange={handler} placeholder="온도를 입력하세요"/>
            </label>
        </div>
    );
}

// 자식 2: 화씨 표시
const FahrenheitDisplay = ({ celsius }) => {
    const fahrenheit = (celsius * 1.8) + 32;
    return (
        <div>
            화씨 (°F):  {celsius===''? '-' :fahrenheit.toFixed(2)}
        </div>
    );
}

// 자식 3: 캘빈 표시
const KelvinDisplay = ({ celsius }) => {
    const kelvin = parseFloat(celsius) + 273.15;
    return (
        <div>
            캘빈 (K): {celsius===''? '-' :kelvin.toFixed(2)}
        </div>
    );
}

// 부모 컴포넌트
const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');

    const handleTemperatureChange = (e) => {
        setCelsius((e.target.value));
    };

    const handleReset = () => {
        setCelsius('');
    };

    const getTemperatureMessage = () => {
        const temp = parseFloat(celsius);
        if (temp < 0) {
            return <div>🥶 추워요</div>;
        } else if (temp <= 25) {
            return <div>😊 적당해요</div>;
        } else {
            return <div>🥵 더워요</div>;
        }
    };

    return (
        <div>
            <h2>온도 변환기</h2>
            <CelsiusInput value={celsius} handler={handleTemperatureChange} />
            <FahrenheitDisplay celsius={celsius} />
            <KelvinDisplay celsius={celsius} />
            {getTemperatureMessage()}
            <button onClick={handleReset}>초기화</button>
        </div>
    );
}

export default TemperatureConverter;
