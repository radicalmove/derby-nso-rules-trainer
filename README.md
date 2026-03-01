# Derby Rules + Officiating Trainer

Single-page training app for Flat Track Roller Derby that covers NSO responsibilities, skater rules, referee signals, and referee positions.

## What it includes

- NSO role training with deep detail:
  - before/during/between jam responsibilities
  - must-know rules for each role
  - edge-case handling (including jammer penalty box interactions)
- Skater rules curriculum modules:
  - game timing and format
  - lineups and role changes
  - pack and engagement zone
  - scoring rules
  - contact and penalty triggers
  - target-zone and blocking-zone visual graphics in contact rules section
  - penalty enforcement
  - timeouts and official reviews
  - foul-outs and misconduct
- Referee hand signal library:
  - penalty signals
  - warning/position signals
  - jammer status signals
  - timing and stoppage signals
  - box communication signals
  - in-app visual signal diagrams for each signal card
  - official WFTDA penalty signal image crops for major penalty calls
- Referee positions reference:
  - Head Referee
  - Jammer Referee
  - Inside Pack Ref
  - Outside Pack Ref
  - staffing notes
- Scenario drills:
  - NSO, Rules, Signals, and Mixed modes
  - per-question explanations
  - quick jump back to missed topics
  - expanded NSO bank with at least 20 targeted drill questions per NSO role
- Step-by-step jam simulations:
  - timeline playback with pause at decision checkpoints
  - manual or auto-play progression
  - scenario scoring and targeted review links
- Progress tracking in `localStorage`:
  - learned NSO roles
  - learned rules modules
  - best drill score

## Content baseline

Training content in this build is aligned to:

- WFTDA Rules (January 1, 2025)
- WFTDA Officiating Procedures (April 2024)
- WFTDA Cues/Codes/Signals (December 2018)

## Run locally

```bash
cd /Users/rcd58/derby-app
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Files

- `index.html`: app layout and training sections
- `styles.css`: styling and responsive behavior
- `app.js`: training data, progression state, and drill logic
- `MAC_MINI_COURSE_SETUP.md`: Mac mini deployment and sharing steps
- `scripts/deploy_to_macmini.sh`: one-command sync + publish helper
