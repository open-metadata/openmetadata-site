export const FEATURES_DATA = [
  {
    imageSrc: "/assets/data-discovery.png",
    imageAlt: "feature01",
    heading: "All Data in One Place",
    description: (
      <>
        <p className="mb-4">
          A central store to integrate metadata from different sources in the
          data ecosystem. Uses standardized Schemas and APIs. Brings together
          the power of multiple applications -
          <strong>
            &nbsp;data discovery, quality, observability, profiling, user
            collaboration, lineage,
          </strong>
          and much more.
        </p>
        <p className="mb-4">Helping data engineers win their time back!</p>
      </>
    ),
    learnMoreLink: "https://docs.open-metadata.org/v1.2.x/features",
    imageOnLeft: false,
  },
  {
    imageSrc: "/assets/data-collaboration.png",
    imageAlt: "feature02",
    heading: "Data Collaboration",
    description: (
      <>
        <p className="lead">
          Fosters collaboration among the producers and consumers of data with
          all the data evolution in one place.
        </p>
        <div className="row gx-5">
          <div className="col-md-12 mb-4">
            <h6>
              <strong>Activity Feeds</strong>
            </h6>
            <p className="mb-2 small">
              View a summary of all the metadata change events. Keep track of
              what's going on with your data.
            </p>
          </div>
          <div className="col-md-12 mb-4">
            <h6>
              <strong>Webhooks &amp; Slack Integration</strong>
            </h6>
            <p className="mb-2 small">
              With webhooks, register URLs to receive metadata event
              notifications. Set up Slack notifications to publish metadata
              events.
            </p>
          </div>
        </div>
      </>
    ),
    learnMoreLink:
      "https://docs.open-metadata.org/v1.2.x/features/discovery-collaboration",
    imageOnLeft: true,
  },
  {
    imageSrc: "/assets/data-versioning.png",
    imageAlt: "feature03",
    heading: "Metadata Versioning",
    description: (
      <>
        <p className="mb-4">
          Captures the changes in technical and business metadata as versions of
          an entity. Facilitates
          <strong>
            &nbsp;data governance, people collaboration, and simplifies
            debugging
          </strong>
          &nbsp;and much more.
        </p>
        <p className="mb-4">Serves as an organizational memory of data!</p>
      </>
    ),
    learnMoreLink:
      "https://docs.open-metadata.org/v1.2.x/connectors/ingestion/versioning",
    imageOnLeft: false,
  },
  {
    imageSrc: "/assets/data-lineage.png",
    imageAlt: "feature04",
    heading: "Data Lineage",
    description: (
      <>
        <p>
          Supports a comprehensive lineage for
          <strong>&nbsp;all data assets</strong> by capturing the relation
          between entities. Traces the path of data across tables, pipelines,
          and dashboards.
          <strong>Manual lineage</strong> helps augment the lineage captured
          from machine metadata with user knowledge.
        </p>
        <p>View the lineage at each entity level!</p>
      </>
    ),
    learnMoreLink:
      "https://docs.open-metadata.org/v1.2.x/connectors/ingestion/workflows/lineage",
    imageOnLeft: true,
  },
];
