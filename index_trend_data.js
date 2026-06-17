window.INDEX_DATA = {
  "model": "株価指数 指数トレンドモデル",
  "disclaimer": "本ツールはシミュレーションであり投資助言ではありません。将来の結果を保証するものではなく、投資判断は自己責任で行ってください。",
  "generated_at": "2026-06-17 11:39 UTC",
  "indices": {
    "spx": {
      "label": "S&P500",
      "ticker": "^GSPC",
      "color": "#6b3fa0",
      "fit": {
        "t0": "1990-01-02",
        "a": 5.985584873726749,
        "b": 0.000189604232107441,
        "r2": 0.8979786874978457,
        "sigma_log": 0.24573463186835454,
        "cagr": 0.07165645983802116,
        "rho1": 0.7970313777226932,
        "half_life_years": 3.055379612304562,
        "fit_start": "1990-01-02",
        "fit_end": "2026-06-16",
        "n_points": 9181
      },
      "expected": {
        "current_price": 7511.35009765625,
        "trend_price_now": 4964,
        "deviation_log": 0.4142,
        "deviation_sigma": 1.69,
        "annual_by_horizon": {
          "1": -0.0148,
          "2": -0.0062,
          "3": 0.0011,
          "4": 0.0075,
          "5": 0.0131,
          "6": 0.0181,
          "7": 0.0224,
          "8": 0.0262,
          "9": 0.0296,
          "10": 0.0326,
          "11": 0.0353,
          "12": 0.0377,
          "13": 0.0398,
          "14": 0.0418,
          "15": 0.0435
        },
        "paths": [
          {
            "year": 2027,
            "horizon": 1,
            "price": 7401,
            "annual_return": -0.0148
          },
          {
            "year": 2028,
            "horizon": 2,
            "price": 7418,
            "annual_return": -0.0062
          },
          {
            "year": 2029,
            "horizon": 3,
            "price": 7536,
            "annual_return": 0.0011
          },
          {
            "year": 2030,
            "horizon": 4,
            "price": 7740,
            "annual_return": 0.0075
          },
          {
            "year": 2031,
            "horizon": 5,
            "price": 8018,
            "annual_return": 0.0131
          },
          {
            "year": 2032,
            "horizon": 6,
            "price": 8365,
            "annual_return": 0.0181
          },
          {
            "year": 2033,
            "horizon": 7,
            "price": 8773,
            "annual_return": 0.0224
          },
          {
            "year": 2034,
            "horizon": 8,
            "price": 9241,
            "annual_return": 0.0262
          },
          {
            "year": 2035,
            "horizon": 9,
            "price": 9769,
            "annual_return": 0.0296
          },
          {
            "year": 2036,
            "horizon": 10,
            "price": 10357,
            "annual_return": 0.0326
          },
          {
            "year": 2037,
            "horizon": 11,
            "price": 11003,
            "annual_return": 0.0353
          },
          {
            "year": 2038,
            "horizon": 12,
            "price": 11710,
            "annual_return": 0.0377
          },
          {
            "year": 2039,
            "horizon": 13,
            "price": 12480,
            "annual_return": 0.0398
          },
          {
            "year": 2040,
            "horizon": 14,
            "price": 13318,
            "annual_return": 0.0418
          },
          {
            "year": 2041,
            "horizon": 15,
            "price": 14223,
            "annual_return": 0.0435
          }
        ]
      },
      "cycle": {
        "available": true,
        "cycle_start": "2013-01-01",
        "trend_cagr": 0.11390962317626463,
        "avg_cycle_years": 2.5013698630136987,
        "avg_rise_days": 518.0,
        "avg_fall_days": 395.0,
        "avg_rise_months": 17.0,
        "avg_fall_months": 13.0,
        "peaks": [
          {
            "date": "2021-10-31",
            "type": "peak",
            "residual": 0.14108259989116037,
            "price": 4559.058190244483
          }
        ],
        "troughs": [
          {
            "date": "2020-05-31",
            "type": "trough",
            "residual": -0.14753291661783607,
            "price": 2931.1806071452047
          },
          {
            "date": "2022-11-30",
            "type": "trough",
            "residual": -0.13503003560113552,
            "price": 3887.421019810527
          }
        ],
        "transitions": [
          {
            "kind": "rise",
            "days": 518,
            "months": 17.0,
            "from_date": "2020-05-31",
            "to_date": "2021-10-31",
            "from_price": 2931.1806071452047,
            "to_price": 4559.058190244483
          },
          {
            "kind": "fall",
            "days": 395,
            "months": 13.0,
            "from_date": "2021-10-31",
            "to_date": "2022-11-30",
            "from_price": 4559.058190244483,
            "to_price": 3887.421019810527
          }
        ],
        "projections": [],
        "years_since_last_peak": 4.627397260273972,
        "years_since_last_trough": 3.5452054794520547
      },
      "realized_volatility": {
        "full_history": 0.18029968436528018,
        "last_3y": 0.14930414976997325,
        "last_1y": 0.1243091139414376,
        "forward_estimate": 0.14930414976997325,
        "note": "年率換算（営業日252日）。資産配分のリスク指標に使用。"
      },
      "charts": [
        "index_spx_log.png",
        "index_spx_deviation.png"
      ]
    },
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
        "cycle_start": "2013-01-01",
        "trend_cagr": 0.17964497544210523,
        "avg_cycle_years": 3.9178082191780823,
        "avg_rise_days": 1004.0,
        "avg_fall_days": 426.0,
        "avg_rise_months": 33.0,
        "avg_fall_months": 14.0,
        "peaks": [
          {
            "date": "2021-10-31",
            "type": "peak",
            "residual": 0.25723645942774787,
            "price": 15698.06615162176
          }
        ],
        "troughs": [
          {
            "date": "2019-01-31",
            "type": "trough",
            "residual": -0.11178824128139123,
            "price": 6889.940680443577
          },
          {
            "date": "2022-12-31",
            "type": "trough",
            "residual": -0.23400806021603757,
            "price": 11647.80281276097
          }
        ],
        "transitions": [
          {
            "kind": "rise",
            "days": 1004,
            "months": 33.0,
            "from_date": "2019-01-31",
            "to_date": "2021-10-31",
            "from_price": 6889.940680443577,
            "to_price": 15698.06615162176
          },
          {
            "kind": "fall",
            "days": 426,
            "months": 14.0,
            "from_date": "2021-10-31",
            "to_date": "2022-12-31",
            "from_price": 15698.06615162176,
            "to_price": 11647.80281276097
          }
        ],
        "projections": [
          {
            "type": "trough",
            "date": "2026-11-30",
            "price": 23653.29379724619,
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
        "cycle_start": "2013-01-01",
        "trend_cagr": 0.2415027491300621,
        "avg_cycle_years": 3.0292237442922376,
        "avg_rise_days": 751.3333333333334,
        "avg_fall_days": 354.3333333333333,
        "avg_rise_months": 24.7,
        "avg_fall_months": 11.6,
        "peaks": [
          {
            "date": "2018-01-31",
            "type": "peak",
            "residual": 0.10421836934511415,
            "price": 1331.629633274829
          },
          {
            "date": "2021-10-31",
            "type": "peak",
            "residual": 0.2785012169750155,
            "price": 3568.138461113606
          },
          {
            "date": "2024-05-31",
            "type": "peak",
            "residual": 0.08163395387579836,
            "price": 5124.635369676365
          }
        ],
        "troughs": [
          {
            "date": "2016-03-31",
            "type": "trough",
            "residual": -0.22801154127936893,
            "price": 641.7834703567029
          },
          {
            "date": "2018-12-31",
            "type": "trough",
            "residual": -0.1625398523871216,
            "price": 1243.0837649957143
          },
          {
            "date": "2022-11-30",
            "type": "trough",
            "residual": -0.2734170613574073,
            "price": 2596.665747266022
          },
          {
            "date": "2025-04-30",
            "type": "trough",
            "residual": -0.1995485334856571,
            "price": 4715.367372580146
          }
        ],
        "transitions": [
          {
            "kind": "rise",
            "days": 671,
            "months": 22.0,
            "from_date": "2016-03-31",
            "to_date": "2018-01-31",
            "from_price": 641.7834703567029,
            "to_price": 1331.629633274829
          },
          {
            "kind": "fall",
            "days": 334,
            "months": 11.0,
            "from_date": "2018-01-31",
            "to_date": "2018-12-31",
            "from_price": 1331.629633274829,
            "to_price": 1243.0837649957143
          },
          {
            "kind": "rise",
            "days": 1035,
            "months": 34.0,
            "from_date": "2018-12-31",
            "to_date": "2021-10-31",
            "from_price": 1243.0837649957143,
            "to_price": 3568.138461113606
          },
          {
            "kind": "fall",
            "days": 395,
            "months": 13.0,
            "from_date": "2021-10-31",
            "to_date": "2022-11-30",
            "from_price": 3568.138461113606,
            "to_price": 2596.665747266022
          },
          {
            "kind": "rise",
            "days": 548,
            "months": 18.0,
            "from_date": "2022-11-30",
            "to_date": "2024-05-31",
            "from_price": 2596.665747266022,
            "to_price": 5124.635369676365
          },
          {
            "kind": "fall",
            "days": 334,
            "months": 11.0,
            "from_date": "2024-05-31",
            "to_date": "2025-04-30",
            "from_price": 5124.635369676365,
            "to_price": 4715.367372580146
          }
        ],
        "projections": [
          {
            "type": "peak",
            "date": "2027-05-21",
            "price": 9971.038755073152,
            "phase_days": 751
          },
          {
            "type": "trough",
            "date": "2028-05-09",
            "price": 8948.53284379355,
            "phase_days": 354
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