window.INDEX_DATA = {
  "model": "株価指数 指数トレンドモデル",
  "disclaimer": "本ツールはシミュレーションであり投資助言ではありません。将来の結果を保証するものではなく、投資判断は自己責任で行ってください。",
  "generated_at": "2026-06-17 22:32 UTC",
  "indices": {
    "spx": {
      "label": "S&P500",
      "ticker": "^GSPC",
      "color": "#6b3fa0",
      "fit": {
        "t0": "1990-01-02",
        "a": 5.98549748116656,
        "b": 0.00018962395508277343,
        "r2": 0.8980010670629871,
        "sigma_log": 0.2457570063686013,
        "cagr": 0.07166417459847141,
        "rho1": 0.7970390106513964,
        "half_life_years": 3.0555085966287034,
        "fit_start": "1990-01-02",
        "fit_end": "2026-06-17",
        "n_points": 9182
      },
      "expected": {
        "current_price": 7420.10009765625,
        "trend_price_now": 4966,
        "deviation_log": 0.4016,
        "deviation_sigma": 1.63,
        "annual_by_horizon": {
          "1": -0.0122,
          "2": -0.0039,
          "3": 0.0032,
          "4": 0.0094,
          "5": 0.0149,
          "6": 0.0197,
          "7": 0.0239,
          "8": 0.0276,
          "9": 0.0309,
          "10": 0.0338,
          "11": 0.0364,
          "12": 0.0387,
          "13": 0.0408,
          "14": 0.0427,
          "15": 0.0443
        },
        "paths": [
          {
            "year": 2027,
            "horizon": 1,
            "price": 7329,
            "annual_return": -0.0122
          },
          {
            "year": 2028,
            "horizon": 2,
            "price": 7362,
            "annual_return": -0.0039
          },
          {
            "year": 2029,
            "horizon": 3,
            "price": 7491,
            "annual_return": 0.0032
          },
          {
            "year": 2030,
            "horizon": 4,
            "price": 7704,
            "annual_return": 0.0094
          },
          {
            "year": 2031,
            "horizon": 5,
            "price": 7989,
            "annual_return": 0.0149
          },
          {
            "year": 2032,
            "horizon": 6,
            "price": 8341,
            "annual_return": 0.0197
          },
          {
            "year": 2033,
            "horizon": 7,
            "price": 8754,
            "annual_return": 0.0239
          },
          {
            "year": 2034,
            "horizon": 8,
            "price": 9226,
            "annual_return": 0.0276
          },
          {
            "year": 2035,
            "horizon": 9,
            "price": 9757,
            "annual_return": 0.0309
          },
          {
            "year": 2036,
            "horizon": 10,
            "price": 10348,
            "annual_return": 0.0338
          },
          {
            "year": 2037,
            "horizon": 11,
            "price": 10997,
            "annual_return": 0.0364
          },
          {
            "year": 2038,
            "horizon": 12,
            "price": 11706,
            "annual_return": 0.0387
          },
          {
            "year": 2039,
            "horizon": 13,
            "price": 12478,
            "annual_return": 0.0408
          },
          {
            "year": 2040,
            "horizon": 14,
            "price": 13318,
            "annual_return": 0.0427
          },
          {
            "year": 2041,
            "horizon": 15,
            "price": 14224,
            "annual_return": 0.0443
          }
        ]
      },
      "cycle": {
        "available": true,
        "cycle_start": "2013-01-01",
        "trend_cagr": 0.11392851180010188,
        "avg_cycle_years": 2.5561643835616437,
        "avg_rise_days": 651.0,
        "avg_fall_days": 282.0,
        "avg_rise_months": 21.4,
        "avg_fall_months": 9.3,
        "peaks": [
          {
            "date": "2022-01-03",
            "type": "peak",
            "residual": 0.17287355868215926,
            "price": 4796.56005859375
          }
        ],
        "troughs": [
          {
            "date": "2020-03-23",
            "type": "trough",
            "residual": -0.39727725664045543,
            "price": 2237.39990234375
          },
          {
            "date": "2022-10-12",
            "type": "trough",
            "residual": -0.20385099433949172,
            "price": 3577.030029296875
          }
        ],
        "transitions": [
          {
            "kind": "rise",
            "days": 651,
            "months": 21.4,
            "from_date": "2020-03-23",
            "to_date": "2022-01-03",
            "from_price": 2237.39990234375,
            "to_price": 4796.56005859375
          },
          {
            "kind": "fall",
            "days": 282,
            "months": 9.3,
            "from_date": "2022-01-03",
            "to_date": "2022-10-12",
            "from_price": 4796.56005859375,
            "to_price": 3577.030029296875
          }
        ],
        "projections": [],
        "years_since_last_peak": 4.454794520547945,
        "years_since_last_trough": 3.682191780821918
      },
      "realized_volatility": {
        "full_history": 0.18030185993004114,
        "last_3y": 0.14944845502984813,
        "last_1y": 0.12465603839727893,
        "forward_estimate": 0.14944845502984813,
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
        "a": 5.688270191818522,
        "b": 0.0003086363243138068,
        "r2": 0.9006980830021086,
        "sigma_log": 0.3940846825283078,
        "cagr": 0.11924265800777811,
        "rho1": 0.7695050472686843,
        "half_life_years": 2.6455215035458632,
        "fit_start": "1990-01-02",
        "fit_end": "2026-06-17",
        "n_points": 9182
      },
      "expected": {
        "current_price": 29670.947265625,
        "trend_price_now": 17993,
        "deviation_log": 0.5002,
        "deviation_sigma": 1.27,
        "annual_by_horizon": {
          "1": -0.0026,
          "2": 0.0109,
          "3": 0.0222,
          "4": 0.032,
          "5": 0.0405,
          "6": 0.0478,
          "7": 0.0541,
          "8": 0.0596,
          "9": 0.0644,
          "10": 0.0686,
          "11": 0.0723,
          "12": 0.0756,
          "13": 0.0785,
          "14": 0.081,
          "15": 0.0833
        },
        "paths": [
          {
            "year": 2027,
            "horizon": 1,
            "price": 29593,
            "annual_return": -0.0026
          },
          {
            "year": 2028,
            "horizon": 2,
            "price": 30319,
            "annual_return": 0.0109
          },
          {
            "year": 2029,
            "horizon": 3,
            "price": 31695,
            "annual_return": 0.0222
          },
          {
            "year": 2030,
            "horizon": 4,
            "price": 33659,
            "annual_return": 0.032
          },
          {
            "year": 2031,
            "horizon": 5,
            "price": 36181,
            "annual_return": 0.0405
          },
          {
            "year": 2032,
            "horizon": 6,
            "price": 39267,
            "annual_return": 0.0478
          },
          {
            "year": 2033,
            "horizon": 7,
            "price": 42910,
            "annual_return": 0.0541
          },
          {
            "year": 2034,
            "horizon": 8,
            "price": 47150,
            "annual_return": 0.0596
          },
          {
            "year": 2035,
            "horizon": 9,
            "price": 52030,
            "annual_return": 0.0644
          },
          {
            "year": 2036,
            "horizon": 10,
            "price": 57620,
            "annual_return": 0.0686
          },
          {
            "year": 2037,
            "horizon": 11,
            "price": 63952,
            "annual_return": 0.0723
          },
          {
            "year": 2038,
            "horizon": 12,
            "price": 71117,
            "annual_return": 0.0756
          },
          {
            "year": 2039,
            "horizon": 13,
            "price": 79202,
            "annual_return": 0.0785
          },
          {
            "year": 2040,
            "horizon": 14,
            "price": 88335,
            "annual_return": 0.081
          },
          {
            "year": 2041,
            "horizon": 15,
            "price": 98578,
            "annual_return": 0.0833
          }
        ]
      },
      "cycle": {
        "available": true,
        "cycle_start": "2013-01-01",
        "trend_cagr": 0.17966501413414293,
        "avg_cycle_years": 4.013698630136986,
        "avg_rise_days": 1061.0,
        "avg_fall_days": 404.0,
        "avg_rise_months": 34.9,
        "avg_fall_months": 13.3,
        "peaks": [
          {
            "date": "2021-11-19",
            "type": "peak",
            "residual": 0.3028193657485456,
            "price": 16573.33984375
          }
        ],
        "troughs": [
          {
            "date": "2018-12-24",
            "type": "trough",
            "residual": -0.2498336129543013,
            "price": 5899.35009765625
          },
          {
            "date": "2022-12-28",
            "type": "trough",
            "residual": -0.31955026467848846,
            "price": 10679.33984375
          }
        ],
        "transitions": [
          {
            "kind": "rise",
            "days": 1061,
            "months": 34.9,
            "from_date": "2018-12-24",
            "to_date": "2021-11-19",
            "from_price": 5899.35009765625,
            "to_price": 16573.33984375
          },
          {
            "kind": "fall",
            "days": 404,
            "months": 13.3,
            "from_date": "2021-11-19",
            "to_date": "2022-12-28",
            "from_price": 16573.33984375,
            "to_price": 10679.33984375
          }
        ],
        "projections": [
          {
            "type": "trough",
            "date": "2027-01-01",
            "price": 21463.52159499618,
            "phase_days": 404
          }
        ],
        "years_since_last_peak": 4.578082191780822,
        "years_since_last_trough": 3.4712328767123286
      },
      "realized_volatility": {
        "full_history": 0.26360261537860025,
        "last_3y": 0.20076794347717725,
        "last_1y": 0.17606883145289293,
        "forward_estimate": 0.20076794347717725,
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
        "a": 5.085094970456217,
        "b": 0.0002494945131529713,
        "r2": 0.7172560113065586,
        "sigma_log": 0.5306322175029893,
        "cagr": 0.09534074477134413,
        "rho1": 0.7740220554824395,
        "half_life_years": 2.70596874224142,
        "fit_start": "1994-05-04",
        "fit_end": "2026-06-17",
        "n_points": 8085
      },
      "expected": {
        "current_price": 13477.072265625,
        "trend_price_now": 3017,
        "deviation_log": 1.4966,
        "deviation_sigma": 2.82,
        "annual_by_horizon": {
          "1": -0.219,
          "2": -0.1884,
          "3": -0.1617,
          "4": -0.1382,
          "5": -0.1175,
          "6": -0.0994,
          "7": -0.0834,
          "8": -0.0693,
          "9": -0.0569,
          "10": -0.0459,
          "11": -0.0361,
          "12": -0.0274,
          "13": -0.0197,
          "14": -0.0127,
          "15": -0.0065
        },
        "paths": [
          {
            "year": 2027,
            "horizon": 1,
            "price": 10526,
            "annual_return": -0.219
          },
          {
            "year": 2028,
            "horizon": 2,
            "price": 8876,
            "annual_return": -0.1884
          },
          {
            "year": 2029,
            "horizon": 3,
            "price": 7940,
            "annual_return": -0.1617
          },
          {
            "year": 2030,
            "horizon": 4,
            "price": 7434,
            "annual_return": -0.1382
          },
          {
            "year": 2031,
            "horizon": 5,
            "price": 7212,
            "annual_return": -0.1175
          },
          {
            "year": 2032,
            "horizon": 6,
            "price": 7193,
            "annual_return": -0.0994
          },
          {
            "year": 2033,
            "horizon": 7,
            "price": 7326,
            "annual_return": -0.0834
          },
          {
            "year": 2034,
            "horizon": 8,
            "price": 7586,
            "annual_return": -0.0693
          },
          {
            "year": 2035,
            "horizon": 9,
            "price": 7954,
            "annual_return": -0.0569
          },
          {
            "year": 2036,
            "horizon": 10,
            "price": 8426,
            "annual_return": -0.0459
          },
          {
            "year": 2037,
            "horizon": 11,
            "price": 8992,
            "annual_return": -0.0361
          },
          {
            "year": 2038,
            "horizon": 12,
            "price": 9652,
            "annual_return": -0.0274
          },
          {
            "year": 2039,
            "horizon": 13,
            "price": 10408,
            "annual_return": -0.0197
          },
          {
            "year": 2040,
            "horizon": 14,
            "price": 11266,
            "annual_return": -0.0127
          },
          {
            "year": 2041,
            "horizon": 15,
            "price": 12225,
            "annual_return": -0.0065
          }
        ]
      },
      "cycle": {
        "available": true,
        "cycle_start": "2013-01-01",
        "trend_cagr": 0.24160187043252068,
        "avg_cycle_years": 3.053881278538813,
        "avg_rise_days": 831.3333333333334,
        "avg_fall_days": 283.3333333333333,
        "avg_rise_months": 27.3,
        "avg_fall_months": 9.3,
        "peaks": [
          {
            "date": "2018-03-12",
            "type": "peak",
            "residual": 0.16278368823833134,
            "price": 1445.9000244140625
          },
          {
            "date": "2021-12-27",
            "type": "peak",
            "residual": 0.3684389571541171,
            "price": 4039.510009765625
          },
          {
            "date": "2024-07-10",
            "type": "peak",
            "residual": 0.19902724457640275,
            "price": 5904.5400390625
          }
        ],
        "troughs": [
          {
            "date": "2016-02-11",
            "type": "trough",
            "residual": -0.3366409103149257,
            "price": 559.1799926757812
          },
          {
            "date": "2018-12-24",
            "type": "trough",
            "residual": -0.30901737295990905,
            "price": 1069.3900146484375
          },
          {
            "date": "2022-10-14",
            "type": "trough",
            "residual": -0.42903171008040264,
            "price": 2162.320068359375
          },
          {
            "date": "2025-04-08",
            "type": "trough",
            "residual": -0.4673725153184076,
            "price": 3562.93994140625
          }
        ],
        "transitions": [
          {
            "kind": "rise",
            "days": 760,
            "months": 25.0,
            "from_date": "2016-02-11",
            "to_date": "2018-03-12",
            "from_price": 559.1799926757812,
            "to_price": 1445.9000244140625
          },
          {
            "kind": "fall",
            "days": 287,
            "months": 9.4,
            "from_date": "2018-03-12",
            "to_date": "2018-12-24",
            "from_price": 1445.9000244140625,
            "to_price": 1069.3900146484375
          },
          {
            "kind": "rise",
            "days": 1099,
            "months": 36.1,
            "from_date": "2018-12-24",
            "to_date": "2021-12-27",
            "from_price": 1069.3900146484375,
            "to_price": 4039.510009765625
          },
          {
            "kind": "fall",
            "days": 291,
            "months": 9.6,
            "from_date": "2021-12-27",
            "to_date": "2022-10-14",
            "from_price": 4039.510009765625,
            "to_price": 2162.320068359375
          },
          {
            "kind": "rise",
            "days": 635,
            "months": 20.9,
            "from_date": "2022-10-14",
            "to_date": "2024-07-10",
            "from_price": 2162.320068359375,
            "to_price": 5904.5400390625
          },
          {
            "kind": "fall",
            "days": 272,
            "months": 8.9,
            "from_date": "2024-07-10",
            "to_date": "2025-04-08",
            "from_price": 5904.5400390625,
            "to_price": 3562.93994140625
          }
        ],
        "projections": [
          {
            "type": "peak",
            "date": "2027-07-18",
            "price": 11355.154135284969,
            "phase_days": 831
          },
          {
            "type": "trough",
            "date": "2028-04-26",
            "price": 7505.185243245538,
            "phase_days": 283
          }
        ],
        "years_since_last_peak": 1.936986301369863,
        "years_since_last_trough": 1.1917808219178083
      },
      "realized_volatility": {
        "full_history": 0.37704301285653163,
        "last_3y": 0.37346233465901024,
        "last_1y": 0.3768802720050706,
        "forward_estimate": 0.37346233465901024,
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