# アセットナビ Python Prototype

資産クラス配分の効率的フロンティアを試算する、ローカル実行用の最小プロトタイプです。

```powershell
pip install -r requirements.txt
python main.py
```

実行すると、サンプル価格データを使って以下を出力します。

- 最大シャープ比率のシミュレーション結果
- 最小分散のシミュレーション結果
- BTC期待リターン別の感度分析
- `asset_navi_frontier.png`
- `asset_navi_results.json`

`main.py` 上部の `MONTE_CARLO_RUNS` は軽く動くように80へ設定しています。帯をより滑らかにしたい場合は300〜500へ増やしてください。

## Phase 1 状態

`run_simulation()` が計算結果をまとめ、`python main.py` 実行時にPNGとJSONの両方を生成します。

次のUI実装では、まず `asset_navi_results.json` を読むか、Python側から `run_simulation()` を呼び出して利用します。

免責: 本ツールはシミュレーションであり投資助言ではありません。将来の結果を保証するものではなく、投資判断は自己責任で行ってください。
