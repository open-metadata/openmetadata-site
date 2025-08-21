---
id: 84
version: v1.9.2
date: Released on 21st August 2025.
---

## Changelog

#### Enhancements & Features

- Improve Performance (#23025)
- Add healthcheck on System Resource (#22974)
- Add Row Count to Custom SQL Test (#22697)
- fix and add lineage to exasol connector (#21399)
- Execution Time Support for NiFi Connector (#22981)

### Fixes

- Add missing domain migrations for entity version history (#23032)
- Fix UI lag when viewing kafka topics with large nested schemas (#22988)
- Fix Soft Deleted Table don't shows the Columns Data
- Fixes #22112: Snowflake schema tags inheritance (#22979)
- Fix pagination for Persona listing (#22975)
- Remove configuration for APIs for auth or authorizer (#23001)
- Fix incorrect condition in getDomains() method (#22983)
- Fixes #22238: [SAP HANA] Correction of physical schema mapping and column lookup at each layer of calculation view (#22952)
- Fix the panel alignment in lineage edit mode full screen (#22984)
- Fix Bug: Match All Tags giving a NPE with the resource doesn't have tags (#22937)
- Fix the lineage layers not visible upfront (#22958)
- Fix: issue with redirection from logs view page to data quality page (#22973)
