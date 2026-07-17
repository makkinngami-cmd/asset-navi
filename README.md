# アセットナビ

株/債券/金/REIT/BTCなどの資産配分を、効率的フロンティア・モンテカルロ・過去リプレイで体感できる無料の資産配分シミュレーターです。静的サイト（HTML/JS）としてGitHub Pagesで公開しています。

## 公開URL

- 本体（資産配分シミュレーター）: https://makkinngami-cmd.github.io/asset-navi/
- 暗号資産トレンド解析: https://makkinngami-cmd.github.io/asset-navi/btc_powerlaw.html
- 株価指数トレンド予測: https://makkinngami-cmd.github.io/asset-navi/index_trend.html

## 構成

```
index.html          本体シミュレーター（効率的フロンティア＋CML、モンテカルロ、バックテスト、
                    ドローダウン、資産クイルト、相関ヒートマップ、MVOの罠。11資産）
btc_powerlaw.py     暗号資産トレンド（BTCパワーロー＋ETH/XRP/SOL/DOGE）→ btc_powerlaw_data.js ＋ PNG
btc_powerlaw.html
index_trend.py      株価指数トレンド（S&P500/NASDAQ100/SOX/日経225/全世界株）→ index_trend_data.js ＋ PNG
index_trend.html
backtest_data.py    バックテスト用の週次価格（6資産＋USD/JPY、2015年〜）→ backtest_data.js
main.py             資産配分計算のPythonプロトタイプ（参考）
```

データファイル（`*_data.js` / PNG）は生成物で、静的サイトが読み込みます。`.py` や `requirements.txt` は `.gitignore` で公開対象から除外しています。

## 月次データ更新の手順

価格データは月1回ほど更新します（3スクリプトを実行 → 生成物をコミット＆push）。

```powershell
cd C:\Users\makki\asset-navi
pip install -r requirements.txt   # 初回のみ（yfinance / scipy / matplotlib など）

python btc_powerlaw.py    # 暗号資産: btc_powerlaw_data.js ＋ PNG を更新
python index_trend.py     # 株価指数: index_trend_data.js ＋ PNG を更新（scipy 使用）
python backtest_data.py   # バックテスト: backtest_data.js を更新（週次価格）

git add -A
git commit -m "月次データ更新"
git push                  # push で公開ページに自動反映
```

- `index_trend.py` / `btc_powerlaw.py` は matplotlib を `Agg` バックエンドで使用します（描画ファイル生成用）。
- 本体の共分散行列（11資産）は `index.html` に埋め込み済みで、資産の追加・入れ替え時に再計算します。

## 免責

本ツールはシミュレーションであり投資助言ではありません。将来の結果を保証するものではなく、投資判断は自己責任で行ってください。試算は簡易な近似で、手数料・税金・インフレ等は考慮していません。
