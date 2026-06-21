window.BTC_DATA = {
  "model": "BTC パワーロー（べき乗則）",
  "disclaimer": "本ツールはシミュレーションであり投資助言ではありません。将来の結果を保証するものではなく、投資判断は自己責任で行ってください。",
  "generated_at": "2026-06-21 12:13 UTC",
  "fit": {
    "a": -16.52385917148376,
    "n": 5.686718073768093,
    "r2": 0.9479954353295518,
    "sigma_log10": 0.2584673378383,
    "genesis": "2009-01-03",
    "fit_start": "2010-08-18",
    "fit_end": "2026-06-21",
    "n_points": 4669
  },
  "current": {
    "date": "2026-06-21",
    "actual_price": 63998.19140625,
    "model_price": 129511.70607210895,
    "deviation_pct": -0.5058501401362332
  },
  "realized_volatility": {
    "full_history": 1.0183610063233701,
    "last_3y": 0.46637877528108823,
    "last_1y": 0.43373256920974607,
    "wave_residual": 0.46184221209264065,
    "forward_estimate": 0.46184221209264065,
    "note": "wave_residual: 波モデル（天井↔底コサイン補間）からの残差ボラ。波モデルをリターンとして使う場合の適切なリスク指標。last_3y: 直近3年の実現ボラ（参考）。BTCは年365日取引で年率換算。"
  },
  "forward": [
    {
      "year": 2027,
      "date": "2027-06-21",
      "model_price": 177725.31533139772,
      "annual_return": 0.3722722116906143
    },
    {
      "year": 2028,
      "date": "2028-06-21",
      "model_price": 240043.4848654581,
      "annual_return": 0.3506431788732969
    },
    {
      "year": 2029,
      "date": "2029-06-21",
      "model_price": 319113.52779087896,
      "annual_return": 0.3293988294235055
    },
    {
      "year": 2030,
      "date": "2030-06-21",
      "model_price": 418507.5844891998,
      "annual_return": 0.3114692673369073
    },
    {
      "year": 2031,
      "date": "2031-06-21",
      "model_price": 542127.2569771067,
      "annual_return": 0.29538215571119975
    },
    {
      "year": 2032,
      "date": "2032-06-21",
      "model_price": 694854.6246401555,
      "annual_return": 0.28171866604651874
    },
    {
      "year": 2033,
      "date": "2033-06-21",
      "model_price": 880849.3862568537,
      "annual_return": 0.2676743523337983
    },
    {
      "year": 2034,
      "date": "2034-06-21",
      "model_price": 1106074.9011296507,
      "annual_return": 0.2556912888704923
    },
    {
      "year": 2035,
      "date": "2035-06-21",
      "model_price": 1376766.4177694381,
      "annual_return": 0.244731632878864
    },
    {
      "year": 2036,
      "date": "2036-06-21",
      "model_price": 1700816.1967955288,
      "annual_return": 0.2353701941329296
    },
    {
      "year": 2037,
      "date": "2037-06-21",
      "model_price": 2084139.8169127286,
      "annual_return": 0.22537627571951147
    },
    {
      "year": 2038,
      "date": "2038-06-21",
      "model_price": 2536004.724238928,
      "annual_return": 0.21681122526393382
    },
    {
      "year": 2039,
      "date": "2039-06-21",
      "model_price": 3065704.339518775,
      "annual_return": 0.208871698943232
    },
    {
      "year": 2040,
      "date": "2040-06-21",
      "model_price": 3685241.6613222975,
      "annual_return": 0.20208645491912347
    },
    {
      "year": 2041,
      "date": "2041-06-21",
      "model_price": 4402375.356503085,
      "annual_return": 0.19459611094363716
    }
  ],
  "summary": {
    "avg_annual_return_10y": 0.2937037465266019,
    "note": "10年の幾何平均リターン（パワーロー中央線ベース、逓減を織り込み済み）。"
  },
  "envelope": {
    "support": {
      "n": 5.410242436536732,
      "a": -15.811084313543226
    },
    "resistance": {
      "n": 2.987721188562072,
      "a": -6.189027957576493
    },
    "current_support": 59317.29071437942,
    "current_resistance": 150767.79504987225,
    "cycle_lows": [
      {
        "date": "2015-01-14",
        "price": 178.10299682617188
      },
      {
        "date": "2018-12-15",
        "price": 3236.76171875
      },
      {
        "date": "2022-11-21",
        "price": 15787.2841796875
      }
    ],
    "cycle_highs": [
      {
        "date": "2013-11-30",
        "price": 1133.95
      },
      {
        "date": "2017-12-16",
        "price": 19497.400390625
      },
      {
        "date": "2021-11-08",
        "price": 67566.828125
      },
      {
        "date": "2025-10-06",
        "price": 124752.53125
      }
    ],
    "note": "半減期サイクルごとの底/天井に当てはめた線。底ライン＝割安の目安。"
  },
  "halvings": [
    "2012-11-28",
    "2016-07-09",
    "2020-05-11",
    "2024-04-20",
    "2028-04-20",
    "2032-04-20",
    "2036-04-20",
    "2040-04-20",
    "2044-04-20"
  ],
  "wave_projection": {
    "start_price": 63998.19140625,
    "start_date": "2026-06-21",
    "horizons": {
      "3": {
        "end_price": 228773,
        "total_return": 2.5747,
        "annual_return": 0.529
      },
      "5": {
        "end_price": 235675,
        "total_return": 2.6825,
        "annual_return": 0.2979
      },
      "10": {
        "end_price": 580605,
        "total_return": 8.0722,
        "annual_return": 0.2467
      },
      "15": {
        "end_price": 981171,
        "total_return": 14.3312,
        "annual_return": 0.1996
      }
    },
    "turning_points": [
      {
        "date": "2026-08-31",
        "price": 62979,
        "type": "trough"
      },
      {
        "date": "2029-08-26",
        "price": 248586,
        "type": "peak"
      },
      {
        "date": "2030-08-31",
        "price": 190106,
        "type": "trough"
      },
      {
        "date": "2033-08-26",
        "price": 421979,
        "type": "peak"
      },
      {
        "date": "2034-08-31",
        "price": 475599,
        "type": "trough"
      },
      {
        "date": "2037-08-26",
        "price": 661394,
        "type": "peak"
      },
      {
        "date": "2038-08-31",
        "price": 1041520,
        "type": "trough"
      },
      {
        "date": "2041-08-26",
        "price": 977407,
        "type": "peak"
      },
      {
        "date": "2042-08-31",
        "price": 2065172,
        "type": "trough"
      }
    ],
    "annual_by_horizon": {
      "1": 0.4247,
      "2": 0.5027,
      "3": 0.529,
      "4": 0.3298,
      "5": 0.2979,
      "6": 0.2993,
      "7": 0.3002,
      "8": 0.2813,
      "9": 0.262,
      "10": 0.2467,
      "11": 0.2343,
      "12": 0.2526,
      "13": 0.2377,
      "14": 0.2171,
      "15": 0.1996
    }
  },
  "altcoins": {
    "eth": {
      "label": "イーサリアム (ETH)",
      "ticker": "ETH-USD",
      "color": "#627eea",
      "fit": {
        "t0": "2017-11-09",
        "a": 5.4676652327479776,
        "b": 0.0009614538082590388,
        "r2": 0.5922243776100172,
        "sigma_log": 0.7247730088521797,
        "cagr": 0.4203888043487034,
        "rho1": 0.017887948206470623,
        "half_life_years": 0.1722691976539692,
        "fit_start": "2017-11-09",
        "fit_end": "2026-06-21",
        "n_points": 3147
      },
      "expected": {
        "current_price": 1720.5899658203125,
        "trend_price_now": 4878,
        "deviation_log": -1.042,
        "deviation_sigma": -1.44,
        "annual_by_horizon": {
          "1": 2.9522,
          "2": 1.3922,
          "3": 1.0109,
          "4": 0.8435,
          "5": 0.7498,
          "6": 0.6903,
          "7": 0.6488,
          "8": 0.6184,
          "9": 0.5951,
          "10": 0.5768,
          "11": 0.5619,
          "12": 0.5496,
          "13": 0.5393,
          "14": 0.5306,
          "15": 0.523
        },
        "paths": [
          {
            "year": 2027,
            "horizon": 1,
            "price": 6800,
            "annual_return": 2.9522
          },
          {
            "year": 2028,
            "horizon": 2,
            "price": 9847,
            "annual_return": 1.3922
          },
          {
            "year": 2029,
            "horizon": 3,
            "price": 13991,
            "annual_return": 1.0109
          },
          {
            "year": 2030,
            "horizon": 4,
            "price": 19872,
            "annual_return": 0.8435
          },
          {
            "year": 2031,
            "horizon": 5,
            "price": 28226,
            "annual_return": 0.7498
          },
          {
            "year": 2032,
            "horizon": 6,
            "price": 40131,
            "annual_return": 0.6903
          },
          {
            "year": 2033,
            "horizon": 7,
            "price": 57002,
            "annual_return": 0.6488
          },
          {
            "year": 2034,
            "horizon": 8,
            "price": 80965,
            "annual_return": 0.6184
          },
          {
            "year": 2035,
            "horizon": 9,
            "price": 115001,
            "annual_return": 0.5951
          },
          {
            "year": 2036,
            "horizon": 10,
            "price": 163503,
            "annual_return": 0.5768
          },
          {
            "year": 2037,
            "horizon": 11,
            "price": 232239,
            "annual_return": 0.5619
          },
          {
            "year": 2038,
            "horizon": 12,
            "price": 329869,
            "annual_return": 0.5496
          },
          {
            "year": 2039,
            "horizon": 13,
            "price": 468542,
            "annual_return": 0.5393
          },
          {
            "year": 2040,
            "horizon": 14,
            "price": 666152,
            "annual_return": 0.5306
          },
          {
            "year": 2041,
            "horizon": 15,
            "price": 946195,
            "annual_return": 0.523
          }
        ]
      },
      "charts": [
        "crypto_eth_log.png",
        "crypto_eth_deviation.png",
        "crypto_eth_vs_btc.png"
      ],
      "realized_volatility": {
        "full_history": 0.8587897524623463,
        "last_3y": 0.6524826430660372,
        "last_1y": 0.6764701521576748,
        "forward_estimate": 0.6524826430660372,
        "note": "年率換算（暗号資産は年365日取引）。"
      }
    },
    "xrp": {
      "label": "リップル (XRP)",
      "ticker": "XRP-USD",
      "color": "#23292f",
      "fit": {
        "t0": "2017-11-09",
        "a": -1.2913062852589148,
        "b": 0.0005038429398191392,
        "r2": 0.3696830810309014,
        "sigma_log": 0.5976762108494104,
        "cagr": 0.20189884023602422,
        "rho1": -0.1881870039277225,
        "half_life_years": 3.0,
        "fit_start": "2017-11-09",
        "fit_end": "2026-06-21",
        "n_points": 3147
      },
      "expected": {
        "current_price": 1.1403000354766846,
        "trend_price_now": 1,
        "deviation_log": -0.1625,
        "deviation_sigma": -0.27,
        "annual_by_horizon": {
          "1": 0.2429,
          "2": 0.2389,
          "3": 0.2351,
          "4": 0.2319,
          "5": 0.2291,
          "6": 0.2268,
          "7": 0.2246,
          "8": 0.2228,
          "9": 0.2212,
          "10": 0.2198,
          "11": 0.2185,
          "12": 0.2174,
          "13": 0.2164,
          "14": 0.2155,
          "15": 0.2147
        },
        "paths": [
          {
            "year": 2027,
            "horizon": 1,
            "price": 1,
            "annual_return": 0.2429
          },
          {
            "year": 2028,
            "horizon": 2,
            "price": 2,
            "annual_return": 0.2389
          },
          {
            "year": 2029,
            "horizon": 3,
            "price": 2,
            "annual_return": 0.2351
          },
          {
            "year": 2030,
            "horizon": 4,
            "price": 3,
            "annual_return": 0.2319
          },
          {
            "year": 2031,
            "horizon": 5,
            "price": 3,
            "annual_return": 0.2291
          },
          {
            "year": 2032,
            "horizon": 6,
            "price": 4,
            "annual_return": 0.2268
          },
          {
            "year": 2033,
            "horizon": 7,
            "price": 5,
            "annual_return": 0.2246
          },
          {
            "year": 2034,
            "horizon": 8,
            "price": 6,
            "annual_return": 0.2228
          },
          {
            "year": 2035,
            "horizon": 9,
            "price": 7,
            "annual_return": 0.2212
          },
          {
            "year": 2036,
            "horizon": 10,
            "price": 8,
            "annual_return": 0.2198
          },
          {
            "year": 2037,
            "horizon": 11,
            "price": 10,
            "annual_return": 0.2185
          },
          {
            "year": 2038,
            "horizon": 12,
            "price": 12,
            "annual_return": 0.2174
          },
          {
            "year": 2039,
            "horizon": 13,
            "price": 15,
            "annual_return": 0.2164
          },
          {
            "year": 2040,
            "horizon": 14,
            "price": 18,
            "annual_return": 0.2155
          },
          {
            "year": 2041,
            "horizon": 15,
            "price": 21,
            "annual_return": 0.2147
          }
        ]
      },
      "charts": [
        "crypto_xrp_log.png",
        "crypto_xrp_deviation.png",
        "crypto_xrp_vs_btc.png"
      ],
      "realized_volatility": {
        "full_history": 1.0656159520295045,
        "last_3y": 0.8170609656043833,
        "last_1y": 0.6831362001489867,
        "forward_estimate": 0.8170609656043833,
        "note": "年率換算（暗号資産は年365日取引）。"
      }
    }
  }
};