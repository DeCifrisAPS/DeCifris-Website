# CIFRIS registration forms

The [CIFRIS26 form snapshot](cifris26-registration.component.html.txt) preserves the attendee fields, fee table and Angular bindings for a future edition. Hidden payment values are blank. Angular only deploys templates and assets included by its build configuration, so this reference is stored under Necromancer.

The original templates and their companion TypeScript and CSS can be found in these source revisions.

| Edition | Source revision | Registration directory |
| --- | --- | --- |
| CIFRIS26 | [222990d00](https://github.com/DeCifrisAPS/DeCifris-Website/commit/222990d00) | src/app/attivita/eventi/cifris/cifris2026/registration |
| CIFRIS25 | [222990d00](https://github.com/DeCifrisAPS/DeCifris-Website/commit/222990d00) | src/app/attivita/eventi/cifris/cifris2025/registration |
| CIFRIS24 | [60947947e](https://github.com/DeCifrisAPS/DeCifris-Website/commit/60947947e) | src/app/attivita/eventi/cifris/cifris2024/registration |
| CIFRIS23 | [60947947e](https://github.com/DeCifrisAPS/DeCifris-Website/commit/60947947e) | src/app/attivita/eventi/cifris/cifris2023/registration |

For a new edition, start with the snapshot. Confirm the fee categories and needed attendee fields, connect submission to the current payment integration, and test both successful and cancelled transactions in the provider's test environment. The snapshot uses the historical checkAndPay handler and therefore needs an implementation for the new edition. Keep closed registration pages and payment-result URLs accessible for their original editions.
