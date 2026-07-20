---
id: 90
version: v1.12.6
date: Released on 22nd April 2026.
---

## Changelog

### Collate Improvements
- improvement: Improve SSRS Connector - Lineage (#27652)
- improvement: Cherry Pick: feat(explore): redesign search export scope to export full tab results with accurate counts (#27354)
- improvement: Add changeSummary API endpoint and UI components (#26533)
- improvement: Feature: burstiq profiler (#26983)
- improvement: Add stopped state support for pipeline status and stop/cancel AI agents (#27098)
- improvement: MINOR: Remove unrelated cross db not supported log message from common lineage source (#27253)

### Collate Fixes

- fix: #27842: Fix unitycataog error when httpPath is missing (#27844)
- fix: databricks SQA 2.0
- fix: Improve ingestion logging for streaming logs (#27213)
- fix: Handle SSRS DataModel Type for Ingestion Patch
- fix: TypeError in Databricks get_columns on non-whitelisted DESCRIBE markers (#27610)
- fix: (ssrs): streamline test connection, stream reports, retry transient failures (#27637)
- fix: (ingestion): release Engine resources on database switch (#27625) (#27627)
- fix: (UI): Send a single, minimal PATCH when updating a Data Product's domain (#27598)
- fix: Chore(deps): Bump org.pac4j:pac4j-core in /openmetadata-service (#27503)
- fix: (applications): fetch plugin list after permissions load to prevent stale route registration (#27537)
- fix: (profiler): SAP HANA CREATE_TIME from SYS.TABLES + uppercase catalog matching (#27483)
- fix: (workflows): skip PipelineServiceClient initialization in migrate context (#27522)
- fix: guard search indexing failure recording against invalid entity IDs
- fix: unaligned metric signature (#27370)
- fix: (search): scope alias lookups to cluster prefix on shared OpenSearch clusters (#27466)
- fix: keep EntityInterface cache value type for 1.12.6 branch
- fix: memory hardening to prevent OOMKill under concurrent load (#27397)
- fix: extend enum in all (#27265)
- fix: Add backticks to table name in mysql median function (#27406)
- fix: page crash for data products with 0 domains (#27230)
- fix: (lineage): service nodes appearing in entity lineage view and empty By Service view (#27258)
- fix: Chore(deps): Bump org.eclipse.jetty:jetty-http in /openmetadata-mcp (#27373)
- fix: Cheery-pick Chore(deps): Bump org.eclipse.jetty:jetty-http from 12.1.6 to 12.1.7 in /openmetadata-service
- fix: (explore): use parent table ID for column changeSummary API call (#27442)
- fix: (ui): unbreak ColumnDetailPanel test suite on 1.12.6 (#27437)
- fix: Chore(deps): Bump dompurify in /openmetadata-ui/src/main/resources/ui (#27412)
- fix: #21953, #23338, #27380: upgrade collate-sqllineage to >=2.1.1 with regression tests (#27413)
- fix: separate storage configuration for OktaAuthProvider to enhance the okta storage (#27228)
- fix: (workflows): make Flowable schema upgrades idempotent to survive partial migrations (#27234)
- fix: (migration): revert webhook authType back to secretKey in v1126 and remove broken v1125 migration (#27427)
- fix: ui: search export fixes (#27407)
- fix: add missing SecurityConfig init in reIndex and reIndexDI CLI commands (#27424) (#27425)
- fix: #24636: use test_metadata.kwargs['model'] to identify primary table for dbt test entity links (#27366)
- fix: payload size issue (#27388)
- fix: Chore(deps): Bump follow-redirects (#27358)
- fix: changed isBeta to false (#27384)
- fix: BurstIQ missing file (#27240)
- fix: #26990: Remove default values for consumesFrom and providesTo in DataProduct schema (#26989)
- fix: (teams): team header layout, heading truncation, hierarchy overflow, and teams tab empty state (#27077)
- fix: PII migrations (#25971)
- fix: (apps): route app logs through streamable log storage when enabled (#27383)
- fix: (deps): Bump axios in /openmetadata-ui/src/main/resources/ui (#27219)
- fix: feat: implement Content Security Policy nonce handling for enhanced security (#27269)
- fix: sqa 2.0 type in 1.12.x (#27367)
- fix: strip nested column children from Data Insights documents (#27160)
- fix: introduce MessageBrandingProvider SPI for rebrandable chat alert notifications (#27196)
- fix: expose full error chain in bulk index sink error messages (#27126)
- fix: #26344: Add iterative bisection on 413 and TaggedOperation refactor in bulk index sinks (#26347)
- fix: the lineage edge hover issue (#27344)
- fix: column description space enter issue (#27356)
- fix: spelling in nifi (#27223)
- fix: k8s operator exit handler pod loop and TTL cleanup, add tolerations (#26971)