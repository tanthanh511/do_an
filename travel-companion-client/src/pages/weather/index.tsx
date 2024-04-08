import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import cloudy from "../../assets/cloudy.png";

export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export function Weather() {
  const [weathers, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=11.94646000&lon=108.44193000&appid=62e8fc3d4fbfa1a20e7058fa08fc6a07&lang=vi`
    )
      .then((response) => response.json())
      .then((data: WeatherData) => {
        setWeather(data);
      });
    // .then((weather) => {
    //   setWeather(weather);
    // });
  }, []);

  const convertUnixToVietnamTime = (unixTime: number): string => {
    const date = new Date(unixTime * 1000); 
    date.setUTCHours(date.getUTCHours() + 7); 
    if (date.getHours() >= 24) {
      date.setDate(date.getDate() + 1);
      date.setHours(date.getHours() - 24);
    }
    const formattedTime = date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedTime;
  };

  return (
    <>
      {weathers && (
        <div className={styles.container}>
          {/* box 1  */}
          <div className={styles.box_1}>
            <div className={styles.weather_main}>
              <a href="/lam-dong/da-lat" className={styles.feature_location}>
                <h1 className={styles.weather_main_title}>
                  Dự báo thời tiết Đà Lạt - Lâm Đồng
                </h1>
              </a>
              <div className={styles.weather_main_hero}>
                
                <img src={`http://openweathermap.org/img/wn/${weathers.weather[0].icon}.png`}  alt="Dự báo thời tiết Đà Lạt - Lâm Đồng"
                  className={styles.img_clound}/>
                <p className={styles.temp}>
                  {Math.floor(weathers.main.temp - 273.15)}°
                </p>
                <div className={styles.desc}>
                  <p>{weathers.weather.map((i) => i.description)}</p>
                 
                  <span>
                    Cảm giác như <span>{Math.floor(weathers.main.temp_max - 273.15)}°</span>
                  </span>
                  
                </div>
              </div>
              <div className={styles.weather_main_desc}>
                <div className={styles.item}>
                  <img
                    src="https://thoitiet.app/assets/images/icon-1/temperature.svg"
                    alt="Nhiệt độ thời tiết Đà Lạt - Lâm Đồng"
                  />
                  <div className={styles.item_title}>Thấp/Cao</div>
                  <div className={styles.temp}>
                    <span>{Math.floor(weathers.main.temp_max - 273.15)}°/</span>
                    <span>{Math.floor(weathers.main.temp_min - 273.15)}°</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <img
                    src="https://thoitiet.app/assets/images/icon-1/humidity-xl.svg"
                    alt="Độ ẩm"
                  />
                  <div className={styles.item_title}>Độ ẩm</div>
                  <div className={styles.temp}>
                    <p>{weathers.main.humidity} %</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <img
                    src="https://thoitiet.app/assets/images/icon-1/clarity-eye-line.svg"
                    alt="Tầm nhìn"
                  />
                  <div className={styles.item_title}>Tầm nhìn</div>
                  <div className={styles.temp}>
                    <p>{weathers.visibility / 1000} km</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <img
                    src="https://thoitiet.app/assets/images/icon-1/ph-wind.svg"
                    alt="Dự báo tốc độ gió"
                  />
                  <div className={styles.item_title}>Gió</div>
                  <div className={styles.temp}>
                    <p>{weathers.wind.speed} km/h</p>
                  </div>
                </div>

                <div className={styles.item}>
                  <img
                    src="https://thoitiet.app/assets/images/icon-1/dawn.svg"
                    alt="Bình minh - Hoàng hôn"
                  />
                  <div className={styles.item_title}>Bình minh/Hoàng hôn</div>
                  <div className={styles.temp}>
                    <p>
                      {convertUnixToVietnamTime(weathers.sys.sunrise)}/
                      {convertUnixToVietnamTime(weathers.sys.sunset)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* box 2  */}
          <div className={styles.box_2}>
            <div className={styles.weather_main}>
              <div className={styles.feature_location}>
                <h1 className={styles.weather_main_title}>Nhiệt độ Đà Lạt</h1>
              </div>
              <div className={styles.weather_day_temp}>
                <div className={styles.temp_item}>
                  <div className={styles.h4}>Ngày</div>
                  <img
                    src="https://thoitiet.app/assets/images/icon-1/temp-1.png"
                    alt="Nhiệt độ thời tiết ban ngày ở Đà Lạt - Lâm Đồng"
                  />
                  <div>
                    <span>31°</span>/<span>30°</span>
                  </div>
                </div>
                <div className={styles.temp_item}>
                  <div className={styles.h4}>Đêm</div>
                  <img
                    src="https://thoitiet.app/assets/images/icon-1/temp-2.png"
                    alt="Nhiệt độ thời tiết ban đêm ở Đà Lạt - Lâm Đồng"
                  />
                  <div>
                    <span>18°</span>/<span>19°</span>
                  </div>
                </div>
                <div className={styles.temp_item}>
                  <div className={styles.h4}>Sáng</div>
                  <img
                    src="https://thoitiet.app/assets/images/icon-1/temp-3.png"
                    alt="Nhiệt độ buổi sáng"
                  />
                  <div>
                    <span>16°</span>/<span>16°</span>
                  </div>
                </div>
                <div className={styles.temp_item4}>
                  <div className={styles.h4}>Tối</div>
                  <img
                    src="https://thoitiet.app/assets/images/icon-1/temp-4.png"
                    alt="Nhiệt độ buổi tối"
                  ></img>
                  <div>
                    <span>24°</span>/<span>24°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
