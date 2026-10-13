---
date: '5'
title: 'Senior Software Engineer'
company: 'Roblox'
location: 'San Mateo, CA'
range: 'August 2025 - Present'
url: 'https://www.roblox.com/'
---

- Rebuilt event ingest from scratch as an in-house Kinesis and Firehose, with client libraries in five languages. At over <em>10 trillion events a day</em>, its custom Go gateway performs hard schema validation and writes to Kafka for online consumers, and custom collectors move events from Kafka into the S3 data lake for offline analytics. Cut ingest costs by over two-thirds compared with the legacy system, which saves <em>$10M a year</em>
- Built a typed <em>runtime config service</em> by rebuilding git on a key-value store. Its configs can be code, so teams change sampling logic on game servers live instead of waiting out the engine's three-week release cycle
- Led the cross-org push to bring <em>protobuf and gRPC into the C++ game engine</em> on desktop, mobile and consoles, so any engine code can make typed calls to backend services. Moving stats telemetry from uncompressed query strings to protobuf cut its bandwidth by <em>90%</em>
- Led <em>GDPR compliance</em> for Roblox's event data with Legal and Infosec. Across about 6,000 tables, every schema must declare its PII, and the gateway pseudonymizes it before events reach Kafka
- Designed the successor to Roblox's batch platform, which runs <em>60,000 Spark jobs a day</em> across 17 clusters and 13 Airflow deployments. It is slated to replace them with one platform that gives each team guaranteed capacity and its own cost tracking. All 10,600 pipelines will share one asset graph, with cross-team dependencies, type checks, lineage and SLA alerts