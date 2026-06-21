window.BTC_DATA = {
  "model": "BTC パワーロー（べき乗則）",
  "disclaimer": "本ツールはシミュレーションであり投資助言ではありません。将来の結果を保証するものではなく、投資判断は自己責任で行ってください。",
  "generated_at": "2026-06-21 12:02 UTC",
  "fit": {
    "a": -16.52386134336522,
    "n": 5.686718711033058,
    "r2": 0.9479954917180685,
    "sigma_log10": 0.2584672189875721,
    "genesis": "2009-01-03",
    "fit_start": "2010-08-18",
    "fit_end": "2026-06-21",
    "n_points": 4669
  },
  "current": {
    "date": "2026-06-21",
    "actual_price": 64067.3203125,
    "model_price": 129511.78143342074,
    "deviation_pct": -0.5053166622880896
  },
  "realized_volatility": {
    "full_history": 1.0183604950177132,
    "last_3y": 0.4663757616419692,
    "last_1y": 0.433727626799503,
    "wave_residual": 0.46184221209264065,
    "forward_estimate": 0.46184221209264065,
    "note": "wave_residual: 波モデル（天井↔底コサイン補間）からの残差ボラ。波モデルをリターンとして使う場合の適切なリスク指標。last_3y: 直近3年の実現ボラ（参考）。BTCは年365日取引で年率換算。"
  },
  "forward": [
    {
      "year": 2027,
      "date": "2027-06-21",
      "model_price": 177725.4250504893,
      "annual_return": 0.372272260356902
    },
    {
      "year": 2028,
      "date": "2028-06-21",
      "model_price": 240043.64114235758,
      "annual_return": 0.35064322436795137
    },
    {
      "year": 2029,
      "date": "2029-06-21",
      "model_price": 319113.7457271883,
      "annual_return": 0.3293988718407179
    },
    {
      "year": 2030,
      "date": "2030-06-21",
      "model_price": 418507.8830224964,
      "annual_return": 0.31146930718641186
    },
    {
      "year": 2031,
      "date": "2031-06-21",
      "model_price": 542127.6594147563,
      "annual_return": 0.2953821932802516
    },
    {
      "year": 2032,
      "date": "2032-06-21",
      "model_price": 694855.1597787064,
      "annual_return": 0.28171870169624635
    },
    {
      "year": 2033,
      "date": "2033-06-21",
      "model_price": 880850.0880506542,
      "annual_return": 0.26767438602770466
    },
    {
      "year": 2034,
      "date": "2034-06-21",
      "model_price": 1106075.8105875102,
      "annual_return": 0.25569132090942603
    },
    {
      "year": 2035,
      "date": "2035-06-21",
      "model_price": 1376767.5835761002,
      "annual_return": 0.24473166341537445
    },
    {
      "year": 2036,
      "date": "2036-06-21",
      "model_price": 1700817.6772849502,
      "annual_return": 0.2353702233946724
    },
    {
      "year": 2037,
      "date": "2037-06-21",
      "model_price": 2084141.6785385327,
      "annual_return": 0.22537630362914052
    },
    {
      "year": 2038,
      "date": "2038-06-21",
      "model_price": 2536007.0452537443,
      "annual_return": 0.21681125202201912
    },
    {
      "year": 2039,
      "date": "2039-06-21",
      "model_price": 3065707.210494883,
      "annual_return": 0.20887172463992054
    },
    {
      "year": 2040,
      "date": "2040-06-21",
      "model_price": 3685245.188495633,
      "annual_return": 0.2020864797133517
    },
    {
      "year": 2041,
      "date": "2041-06-21",
      "model_price": 4402379.657770413,
      "annual_return": 0.19459613474660653
    }
  ],
  "summary": {
    "avg_annual_return_10y": 0.2937037838590073,
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
    "start_price": 64067.3203125,
    "start_date": "2026-06-21",
    "horizons": {
      "3": {
        "end_price": 228773,
        "total_return": 2.5708,
        "annual_return": 0.5285
      },
      "5": {
        "end_price": 235675,
        "total_return": 2.6786,
        "annual_return": 0.2976
      },
      "10": {
        "end_price": 580605,
        "total_return": 8.0624,
        "annual_return": 0.2466
      },
      "15": {
        "end_price": 981171,
        "total_return": 14.3147,
        "annual_return": 0.1995
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
      "1": 0.4231,
      "2": 0.5019,
      "3": 0.5285,
      "4": 0.3295,
      "5": 0.2976,
      "6": 0.2991,
      "7": 0.3,
      "8": 0.2811,
      "9": 0.2619,
      "10": 0.2466,
      "11": 0.2342,
      "12": 0.2525,
      "13": 0.2376,
      "14": 0.2171,
      "15": 0.1995
    }
  },
  "altcoins": {
    "eth": {
      "label": "イーサリアム (ETH)",
      "ticker": "ETH-USD",
      "color": "#627eea",
      "fit": {
        "t0": "2017-11-09",
        "a": 5.467664749503132,
        "b": 0.0009614542692239153,
        "r2": 0.5922248408015129,
        "sigma_log": 0.7247726612769324,
        "cagr": 0.42038904333223637,
        "rho1": 0.017887529894075382,
        "half_life_years": 0.17226819642695293,
        "fit_start": "2017-11-09",
        "fit_end": "2026-06-21",
        "n_points": 3147
      },
      "expected": {
        "current_price": 1721.9000244140625,
        "trend_price_now": 4878,
        "deviation_log": -1.0412,
        "deviation_sigma": -1.44,
        "annual_by_horizon": {
          "1": 2.9492,
          "2": 1.3913,
          "3": 1.0104,
          "4": 0.8431,
          "5": 0.7496,
          "6": 0.6901,
          "7": 0.6486,
          "8": 0.6182,
          "9": 0.5949,
          "10": 0.5767,
          "11": 0.5618,
          "12": 0.5495,
          "13": 0.5392,
          "14": 0.5305,
          "15": 0.5229
        },
        "paths": [
          {
            "year": 2027,
            "horizon": 1,
            "price": 6800,
            "annual_return": 2.9492
          },
          {
            "year": 2028,
            "horizon": 2,
            "price": 9847,
            "annual_return": 1.3913
          },
          {
            "year": 2029,
            "horizon": 3,
            "price": 13991,
            "annual_return": 1.0104
          },
          {
            "year": 2030,
            "horizon": 4,
            "price": 19872,
            "annual_return": 0.8431
          },
          {
            "year": 2031,
            "horizon": 5,
            "price": 28226,
            "annual_return": 0.7496
          },
          {
            "year": 2032,
            "horizon": 6,
            "price": 40131,
            "annual_return": 0.6901
          },
          {
            "year": 2033,
            "horizon": 7,
            "price": 57002,
            "annual_return": 0.6486
          },
          {
            "year": 2034,
            "horizon": 8,
            "price": 80965,
            "annual_return": 0.6182
          },
          {
            "year": 2035,
            "horizon": 9,
            "price": 115001,
            "annual_return": 0.5949
          },
          {
            "year": 2036,
            "horizon": 10,
            "price": 163504,
            "annual_return": 0.5767
          },
          {
            "year": 2037,
            "horizon": 11,
            "price": 232239,
            "annual_return": 0.5618
          },
          {
            "year": 2038,
            "horizon": 12,
            "price": 329870,
            "annual_return": 0.5495
          },
          {
            "year": 2039,
            "horizon": 13,
            "price": 468544,
            "annual_return": 0.5392
          },
          {
            "year": 2040,
            "horizon": 14,
            "price": 666155,
            "annual_return": 0.5305
          },
          {
            "year": 2041,
            "horizon": 15,
            "price": 946199,
            "annual_return": 0.5229
          }
        ]
      },
      "charts": [
        "crypto_eth_log.png",
        "crypto_eth_deviation.png"
      ],
      "realized_volatility": {
        "full_history": 0.8587886241558057,
        "last_3y": 0.6524786117585529,
        "last_1y": 0.6764591482418307,
        "forward_estimate": 0.6524786117585529,
        "note": "年率換算（暗号資産は年365日取引）。"
      }
    },
    "xrp": {
      "label": "リップル (XRP)",
      "ticker": "XRP-USD",
      "color": "#23292f",
      "fit": {
        "t0": "2017-11-09",
        "a": -1.2913067305511048,
        "b": 0.0005038433645811643,
        "r2": 0.36968352106144364,
        "sigma_log": 0.5976761503907335,
        "cagr": 0.2018990265761984,
        "rho1": -0.18818622450030145,
        "half_life_years": 3.0,
        "fit_start": "2017-11-09",
        "fit_end": "2026-06-21",
        "n_points": 3147
      },
      "expected": {
        "current_price": 1.1411000490188599,
        "trend_price_now": 1,
        "deviation_log": -0.1618,
        "deviation_sigma": -0.27,
        "annual_by_horizon": {
          "1": 0.2427,
          "2": 0.2387,
          "3": 0.235,
          "4": 0.2317,
          "5": 0.229,
          "6": 0.2267,
          "7": 0.2246,
          "8": 0.2227,
          "9": 0.2211,
          "10": 0.2197,
          "11": 0.2185,
          "12": 0.2173,
          "13": 0.2163,
          "14": 0.2155,
          "15": 0.2147
        },
        "paths": [
          {
            "year": 2027,
            "horizon": 1,
            "price": 1,
            "annual_return": 0.2427
          },
          {
            "year": 2028,
            "horizon": 2,
            "price": 2,
            "annual_return": 0.2387
          },
          {
            "year": 2029,
            "horizon": 3,
            "price": 2,
            "annual_return": 0.235
          },
          {
            "year": 2030,
            "horizon": 4,
            "price": 3,
            "annual_return": 0.2317
          },
          {
            "year": 2031,
            "horizon": 5,
            "price": 3,
            "annual_return": 0.229
          },
          {
            "year": 2032,
            "horizon": 6,
            "price": 4,
            "annual_return": 0.2267
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
            "annual_return": 0.2227
          },
          {
            "year": 2035,
            "horizon": 9,
            "price": 7,
            "annual_return": 0.2211
          },
          {
            "year": 2036,
            "horizon": 10,
            "price": 8,
            "annual_return": 0.2197
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
            "annual_return": 0.2173
          },
          {
            "year": 2039,
            "horizon": 13,
            "price": 15,
            "annual_return": 0.2163
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
        "crypto_xrp_deviation.png"
      ],
      "realized_volatility": {
        "full_history": 1.0656153545627045,
        "last_3y": 0.8170586565590614,
        "last_1y": 0.6831302815573284,
        "forward_estimate": 0.8170586565590614,
        "note": "年率換算（暗号資産は年365日取引）。"
      }
    }
  }
};