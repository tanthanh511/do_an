import { useEffect } from "react";
import styles from "./styles.module.scss";
import cloudy from "../../assets/cloudy.png";

export function Weather() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.weatherapi.com/weather/widget.ashx?loc=2715468&wid=3&tu=2";
    script.async = true;

    const weatherDiv = document.getElementById("weatherapi-weather-widget-3");
    if (weatherDiv) {
      weatherDiv.appendChild(script);
    }

    return () => {
      if (weatherDiv) {
        weatherDiv.removeChild(script);
      }
    };
  }, []);

  return (
    <>
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
              <img
                src={cloudy}
                alt="Dự báo thời tiết Đà Lạt - Lâm Đồng"
                className={styles.img_clound}
              />
              <p className={styles.temp}>27°</p>
              <div className={styles.desc}>
                <p>mây cụm</p>
                <span>
                  Cảm giác như <span>27°</span>
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
                  <span>27°/</span><span>27°</span>
                </div>
              </div>
              <div className={styles.item}>
                <img
                  src="https://thoitiet.app/assets/images/icon-1/humidity-xl.svg"
                  alt="Độ ẩm"
                />
                <div className={styles.item_title}>Độ ẩm</div>
                <div className={styles.temp}>
                  <p>45 %</p>
                </div>
              </div>
              <div className={styles.item}>
                <img
                  src="https://thoitiet.app/assets/images/icon-1/clarity-eye-line.svg"
                  alt="Tầm nhìn"
                />
                <div className={styles.item_title}>Tầm nhìn</div>
                <div className={styles.temp}>
                  <p>10 km</p>
                </div>
              </div>
              <div className={styles.item}>
                <img
                  src="https://thoitiet.app/assets/images/icon-1/ph-wind.svg"
                  alt="Dự báo tốc độ gió"
                />
                <div className={styles.item_title}>Gió</div>
                <div className={styles.temp}>
                  <p>1.44 km/h</p>
                </div>
              </div>

              <div className={styles.item}>
                <img
                  src="https://thoitiet.app/assets/images/icon-1/dawn.svg"
                  alt="Bình minh - Hoàng hôn"
                />
                <div className={styles.item_title}>Bình minh/Hoàng hôn</div>
                <div className={styles.temp}>
                  <p>05:40/05:57</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* box 2  */}
        <div className={styles.box_2}>
          <div className={styles.weather_main}>
            <div className={styles.feature_location}>
              <h2 className={styles.weather_main_title}>Nhiệt độ Đà Lạt</h2>
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
    </>
  );
}
