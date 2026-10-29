# Social Security Investment

Should I wait until age 70 to start taking Social Security payments?

Sponsored by [The Brookhaven Group, LLC](https://thebrookhavengroup.com/).

Compare the future value of investing monthly Social Security benefits starting
at age 67 versus age 70, with an optional after-tax comparison.

- **[Read the report](20261021SocialSecurity.md)** — equations, assumptions, results, and charts.
- **[Open the interactive calculator](https://thebrookhavengroup.github.io/ssa/web/index.html)** — enter your own PIA, start and end ages, annual return, and tax assumptions.

## Use the calculator

The calculator runs entirely in your browser, with no backend server or account.
It includes before-tax and after-tax results, comparisons at several annual
returns, and four charts showing future values and their differences.

Defaults are a $4,152 monthly primary insurance amount (PIA), benefits starting
at 67 compared with 70, an end age of 90, and a 10.00% effective annual return.
Federal, state, and local tax inputs default to the report's fixed highest-rate
Maryland scenario and can be edited. These are scenario assumptions; the page
does not calculate tax brackets or check tax thresholds.

To use it offline, download or clone this repository and open
[`web/index.html`](web/index.html) in a modern browser. Keep `app.js` and
`style.css` alongside it. The sponsor logo loads directly from The Brookhaven
Group website and requires internet access; calculations work offline. A link to the HTML file on github.com shows its source;
the interactive-calculator link above opens the working GitHub Pages site.

The browser model supports whole-year start ages 67–70, assuming full retirement
age 67, and compares each with claiming at 70. For ages 68–69, constant payments
simplify the actual calendar-year timing of delayed-credit adjustments.

## Model assumptions

Payments arrive at the beginning of each month and are valued at a common end
age. Annual investment returns are effective annual rates, converted to monthly
rates for compounding. Payments and returns stay constant: no COLAs, additional
earnings, fees, or investment volatility are modeled.

In the tax scenario, income tax is deducted from each benefit before investment.
At the endpoint, tax applies to positive accumulated investment growth only;
net contributions are not taxed again and losses receive no tax refund.

The example PIA is illustrative, based on SSA's published 2026 maximum benefit
at full retirement age. It is not a personalized entitlement or a universal PIA
maximum. See the report for the full assumptions, references, and limitations.

## Run the Python simulation

Requires Python 3.9 or later and matplotlib. Install dependencies into an
appropriate environment, then run:

```sh
python -m pip install -r requirements.txt
python sssim.py sssim.cfg --output-dir output
```

Edit [`sssim.cfg`](sssim.cfg) to change the PIA, payment counts, or effective
annual return. The command writes JSON results and four charts to `output/`.
It does not rewrite the report. Further details are in [`README.txt`](README.txt).

## Files

| File | Purpose |
| --- | --- |
| [20261021SocialSecurity.md](20261021SocialSecurity.md) | Analysis and results report |
| [web/index.html](web/index.html) | Browser calculator |
| [sssim.py](sssim.py) | Python simulation and chart generation |
| [sssim.cfg](sssim.cfg) | Editable Python inputs |
| [output/](output/) | Report charts and numerical results |

## Publishing

GitHub Pages serves the static files from the root of the `main` branch.
The calculator is at `web/index.html`; no server application or build step is
needed. Updates pushed to `main` are published automatically by GitHub Pages.

## Disclaimer

Inputs are illustrative and assumptions may not apply to an individual. The
author is not a professional investment advisor and accepts no responsibility
for decisions based on this project. Assess accuracy and applicability for your
own circumstances.
