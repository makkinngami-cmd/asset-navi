window.INDEX_DATA = {
  "model": "株価指数 指数トレンドモデル",
  "disclaimer": "本ツールはシミュレーションであり投資助言ではありません。将来の結果を保証するものではなく、投資判断は自己責任で行ってください。",
  "generated_at": "2026-06-17 04:13 UTC",
  "indices": {
    "ndx": {
      "label": "NASDAQ100",
      "ticker": "^NDX",
      "color": "#2364aa",
      "fit": {
        "t0": "1990-01-02",
        "a": 5.688379030285443,
        "b": 0.00030861176137167873,
        "r2": 0.9006702687679335,
        "sigma_log": 0.39407155837099017,
        "cagr": 0.11923262351194808,
        "rho1": 0.7694991800834546,
        "half_life_years": 2.645444518836434,
        "fit_start": "1990-01-02",
        "fit_end": "2026-06-16",
        "n_points": 9181
      },
      "expected": {
        "current_price": 29968.130859375,
        "trend_price_now": 17984,
        "deviation_log": 0.5107,
        "deviation_sigma": 1.3,
        "annual_by_horizon": {
          "1": -0.0051,
          "2": 0.0087,
          "3": 0.0203,
          "4": 0.0303,
          "5": 0.0389,
          "6": 0.0463,
          "7": 0.0528,
          "8": 0.0584,
          "9": 0.0633,
          "10": 0.0676,
          "11": 0.0713,
          "12": 0.0747,
          "13": 0.0776,
          "14": 0.0802,
          "15": 0.0826
        },
        "paths": [
          {
            "year": 2027,
            "horizon": 1,
            "price": 29817,
            "annual_return": -0.0051
          },
          {
            "year": 2028,
            "horizon": 2,
            "price": 30492,
            "annual_return": 0.0087
          },
          {
            "year": 2029,
            "horizon": 3,
            "price": 31830,
            "annual_return": 0.0203
          },
          {
            "year": 2030,
            "horizon": 4,
            "price": 33764,
            "annual_return": 0.0303
          },
          {
            "year": 2031,
            "horizon": 5,
            "price": 36262,
            "annual_return": 0.0389
          },
          {
            "year": 2032,
            "horizon": 6,
            "price": 39329,
            "annual_return": 0.0463
          },
          {
            "year": 2033,
            "horizon": 7,
            "price": 42956,
            "annual_return": 0.0528
          },
          {
            "year": 2034,
            "horizon": 8,
            "price": 47182,
            "annual_return": 0.0584
          },
          {
            "year": 2035,
            "horizon": 9,
            "price": 52049,
            "annual_return": 0.0633
          },
          {
            "year": 2036,
            "horizon": 10,
            "price": 57628,
            "annual_return": 0.0676
          },
          {
            "year": 2037,
            "horizon": 11,
            "price": 63949,
            "annual_return": 0.0713
          },
          {
            "year": 2038,
            "horizon": 12,
            "price": 71103,
            "annual_return": 0.0747
          },
          {
            "year": 2039,
            "horizon": 13,
            "price": 79179,
            "annual_return": 0.0776
          },
          {
            "year": 2040,
            "horizon": 14,
            "price": 88301,
            "annual_return": 0.0802
          },
          {
            "year": 2041,
            "horizon": 15,
            "price": 98533,
            "annual_return": 0.0826
          }
        ]
      },
      "realized_volatility": {
        "full_history": 0.26361123614791515,
        "last_3y": 0.20070917610916048,
        "last_1y": 0.17607162278793764,
        "forward_estimate": 0.20070917610916048,
        "note": "年率換算（営業日252日）。資産配分のリスク指標に使用。"
      },
      "charts": [
        "index_ndx_log.png",
        "index_ndx_deviation.png"
      ]
    },
    "sox": {
      "label": "SOX半導体",
      "ticker": "^SOX",
      "color": "#b46b1d",
      "fit": {
        "t0": "1994-05-04",
        "a": 5.0854651308963765,
        "b": 0.00024939976960049816,
        "r2": 0.7172263291219713,
        "sigma_log": 0.5304037929307607,
        "cagr": 0.09530286701351609,
        "rho1": 0.7740153170908892,
        "half_life_years": 2.7058767798771743,
        "fit_start": "1994-05-04",
        "fit_end": "2026-06-16",
        "n_points": 8084
      },
      "expected": {
        "current_price": 13294.2197265625,
        "trend_price_now": 3014,
        "deviation_log": 1.4839,
        "deviation_sigma": 2.8,
        "annual_by_horizon": {
          "1": -0.2168,
          "2": -0.1864,
          "3": -0.1598,
          "4": -0.1365,
          "5": -0.116,
          "6": -0.0979,
          "7": -0.082,
          "8": -0.0681,
          "9": -0.0557,
          "10": -0.0448,
          "11": -0.0351,
          "12": -0.0265,
          "13": -0.0188,
          "14": -0.0119,
          "15": -0.0057
        },
        "paths": [
          {
            "year": 2027,
            "horizon": 1,
            "price": 10413,
            "annual_return": -0.2168
          },
          {
            "year": 2028,
            "horizon": 2,
            "price": 8800,
            "annual_return": -0.1864
          },
          {
            "year": 2029,
            "horizon": 3,
            "price": 7884,
            "annual_return": -0.1598
          },
          {
            "year": 2030,
            "horizon": 4,
            "price": 7392,
            "annual_return": -0.1365
          },
          {
            "year": 2031,
            "horizon": 5,
            "price": 7178,
            "annual_return": -0.116
          },
          {
            "year": 2032,
            "horizon": 6,
            "price": 7165,
            "annual_return": -0.0979
          },
          {
            "year": 2033,
            "horizon": 7,
            "price": 7302,
            "annual_return": -0.082
          },
          {
            "year": 2034,
            "horizon": 8,
            "price": 7563,
            "annual_return": -0.0681
          },
          {
            "year": 2035,
            "horizon": 9,
            "price": 7934,
            "annual_return": -0.0557
          },
          {
            "year": 2036,
            "horizon": 10,
            "price": 8406,
            "annual_return": -0.0448
          },
          {
            "year": 2037,
            "horizon": 11,
            "price": 8972,
            "annual_return": -0.0351
          },
          {
            "year": 2038,
            "horizon": 12,
            "price": 9633,
            "annual_return": -0.0265
          },
          {
            "year": 2039,
            "horizon": 13,
            "price": 10388,
            "annual_return": -0.0188
          },
          {
            "year": 2040,
            "horizon": 14,
            "price": 11245,
            "annual_return": -0.0119
          },
          {
            "year": 2041,
            "horizon": 15,
            "price": 12203,
            "annual_return": -0.0057
          }
        ]
      },
      "realized_volatility": {
        "full_history": 0.37705926845027726,
        "last_3y": 0.373441042138299,
        "last_1y": 0.37694274879953776,
        "forward_estimate": 0.373441042138299,
        "note": "年率換算（営業日252日）。資産配分のリスク指標に使用。"
      },
      "charts": [
        "index_sox_log.png",
        "index_sox_deviation.png"
      ]
    }
  }
};