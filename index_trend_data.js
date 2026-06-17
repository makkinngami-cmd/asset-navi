window.INDEX_DATA = {
  "model": "株価指数 指数トレンドモデル",
  "disclaimer": "本ツールはシミュレーションであり投資助言ではありません。将来の結果を保証するものではなく、投資判断は自己責任で行ってください。",
  "generated_at": "2026-06-17 10:54 UTC",
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
      "cycle": {
        "available": true,
        "cycle_start": "2010-01-01",
        "trend_cagr": 0.1773775125992847,
        "avg_cycle_years": 6.673972602739726,
        "avg_rise_days": 2010.0,
        "avg_fall_days": 426.0,
        "avg_rise_months": 66.0,
        "avg_fall_months": 14.0,
        "peaks": [
          {
            "date": "2021-10-31",
            "type": "peak",
            "residual": 0.2580729687604892,
            "price": 15696.813977494665
          }
        ],
        "troughs": [
          {
            "date": "2016-04-30",
            "type": "trough",
            "residual": -0.11747744072861388,
            "price": 4387.223554535488
          },
          {
            "date": "2022-12-31",
            "type": "trough",
            "residual": -0.2309259674958116,
            "price": 11646.874065980757
          }
        ],
        "transitions": [
          {
            "kind": "rise",
            "days": 2010,
            "months": 66.0,
            "from_date": "2016-04-30",
            "to_date": "2021-10-31",
            "from_price": 4387.223554535488,
            "to_price": 15696.813977494665
          },
          {
            "kind": "fall",
            "days": 426,
            "months": 14.0,
            "from_date": "2021-10-31",
            "to_date": "2022-12-31",
            "from_price": 15696.813977494665,
            "to_price": 11646.874065980757
          }
        ],
        "projections": [
          {
            "type": "peak",
            "date": "2028-07-02",
            "price": 46676.812982177864,
            "phase_days": 2010
          },
          {
            "type": "trough",
            "date": "2029-09-01",
            "price": 36655.07379255995,
            "phase_days": 426
          }
        ],
        "years_since_last_peak": 4.627397260273972,
        "years_since_last_trough": 3.4602739726027396
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
      "cycle": {
        "available": true,
        "cycle_start": "2010-01-01",
        "trend_cagr": 0.22120373315502828,
        "avg_cycle_years": 3.084246575342466,
        "avg_rise_days": 715.25,
        "avg_fall_days": 410.5,
        "avg_rise_months": 23.5,
        "avg_fall_months": 13.5,
        "peaks": [
          {
            "date": "2014-07-31",
            "type": "peak",
            "residual": -0.0018531479623805735,
            "price": 627.1083472783815
          },
          {
            "date": "2018-01-31",
            "type": "peak",
            "residual": 0.04966406408390626,
            "price": 1330.6661003499296
          },
          {
            "date": "2021-11-30",
            "type": "peak",
            "residual": 0.28670303951050113,
            "price": 3627.9558103549157
          },
          {
            "date": "2024-05-31",
            "type": "peak",
            "residual": 0.13153491939143244,
            "price": 5121.091389445216
          }
        ],
        "troughs": [
          {
            "date": "2012-12-31",
            "type": "trough",
            "residual": -0.15254610709417402,
            "price": 393.2791237333966
          },
          {
            "date": "2016-03-31",
            "type": "trough",
            "residual": -0.31282337520249304,
            "price": 641.3503219170506
          },
          {
            "date": "2018-12-31",
            "type": "trough",
            "residual": -0.2019515503238723,
            "price": 1242.2554116034369
          },
          {
            "date": "2022-11-30",
            "type": "trough",
            "residual": -0.24821706864611434,
            "price": 2594.9993929456773
          },
          {
            "date": "2025-04-30",
            "type": "trough",
            "residual": -0.13451654000003985,
            "price": 4712.321607773478
          }
        ],
        "transitions": [
          {
            "kind": "rise",
            "days": 577,
            "months": 19.0,
            "from_date": "2012-12-31",
            "to_date": "2014-07-31",
            "from_price": 393.2791237333966,
            "to_price": 627.1083472783815
          },
          {
            "kind": "fall",
            "days": 609,
            "months": 20.0,
            "from_date": "2014-07-31",
            "to_date": "2016-03-31",
            "from_price": 627.1083472783815,
            "to_price": 641.3503219170506
          },
          {
            "kind": "rise",
            "days": 671,
            "months": 22.0,
            "from_date": "2016-03-31",
            "to_date": "2018-01-31",
            "from_price": 641.3503219170506,
            "to_price": 1330.6661003499296
          },
          {
            "kind": "fall",
            "days": 334,
            "months": 11.0,
            "from_date": "2018-01-31",
            "to_date": "2018-12-31",
            "from_price": 1330.6661003499296,
            "to_price": 1242.2554116034369
          },
          {
            "kind": "rise",
            "days": 1065,
            "months": 35.0,
            "from_date": "2018-12-31",
            "to_date": "2021-11-30",
            "from_price": 1242.2554116034369,
            "to_price": 3627.9558103549157
          },
          {
            "kind": "fall",
            "days": 365,
            "months": 12.0,
            "from_date": "2021-11-30",
            "to_date": "2022-11-30",
            "from_price": 3627.9558103549157,
            "to_price": 2594.9993929456773
          },
          {
            "kind": "rise",
            "days": 548,
            "months": 18.0,
            "from_date": "2022-11-30",
            "to_date": "2024-05-31",
            "from_price": 2594.9993929456773,
            "to_price": 5121.091389445216
          },
          {
            "kind": "fall",
            "days": 334,
            "months": 11.0,
            "from_date": "2024-05-31",
            "to_date": "2025-04-30",
            "from_price": 5121.091389445216,
            "to_price": 4712.321607773478
          }
        ],
        "projections": [
          {
            "type": "peak",
            "date": "2027-04-15",
            "price": 8729.938501225484,
            "phase_days": 715
          },
          {
            "type": "trough",
            "date": "2028-05-29",
            "price": 8155.412075487791,
            "phase_days": 410
          }
        ],
        "years_since_last_peak": 2.043835616438356,
        "years_since_last_trough": 1.1287671232876713
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
        "index_sox_deviation.png",
        "index_sox_cycle.png"
      ]
    }
  }
};