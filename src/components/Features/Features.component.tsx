import React from "react";

const Features = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center mb-5">
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-4">All Data in One Place</h2>
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
          <a
            className="text-primary inline-flex items-center"
            href="https://docs.open-metadata.org/v1.2.x/features"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
        <div className="order-2 md:order-1">
          <img
            className="w-full"
            src="/assets/data-discovery.png"
            alt="feature01"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-5 items-center justify-center mb-5">
        <div className="order-1 md:order-2">
          <div className="mb-4">
            <img
              className="w-full"
              src="/assets/data-collaboration.png"
              alt="feature02"
            />
          </div>
        </div>
        <div className="order-2 md:order-1">
          <h2>Data Collaboration</h2>
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
                what’s going on with your data.
              </p>
            </div>
            <div className="col-md-12 mb-4">
              <h6>
                <strong>Webhooks &amp; Slack Integration</strong>
              </h6>
              <p className="mb-2 small mb-0">
                With webhooks, register URLs to receive metadata event
                notifications. Set up Slack notifications to publish metadata
                events.
              </p>
              <a
                className="text-primary inline-flex items-center"
                href="https://docs.open-metadata.org/v1.2.x/features/discovery-collaboration"
                target="_blank"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center mb-5">
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-4">Metadata Versioning</h2>
          <p className="mb-4">
            Captures the changes in technical and business metadata as versions
            of an entity. Facilitates
            <strong>
              &nbsp;data governance, people collaboration, and simplifies
              debugging
            </strong>
            &nbsp;and much more.
          </p>
          <p className="mb-4">Serves as an organizational memory of data!</p>
          <a
            className="text-primary inline-flex items-center"
            href="https://docs.open-metadata.org/v1.2.x/connectors/ingestion/versioning"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
        <div className="order-2 md:order-1">
          <img
            className="w-full"
            src="/assets/data-versioning.png"
            alt="feature03"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-5 items-center justify-center mb-5">
        <div className="order-1 md:order-2">
          <div className="mb-4">
            <img
              className="w-full"
              src="/assets/data-lineage.png"
              alt="feature04"
            />
          </div>
        </div>
        <div className="order-2 md:order-1">
          <h2>Data Lineage</h2>
          <p>
            Supports a comprehensive lineage for
            <strong>&nbsp;all data assets</strong> by capturing the relation
            between entities. Traces the path of data across tables, pipelines,
            and dashboards.
            <strong>Manual lineage</strong> helps augment the lineage captured
            from machine metadata with user knowledge.
          </p>
          <p>View the lineage at each entity level!</p>
          <div className="row gx-5">
            <div className="col-md-12 mb-4">
              <a
                className="text-primary inline-flex items-center"
                href="https://docs.open-metadata.org/v1.2.x/connectors/ingestion/workflows/lineage"
                target="_blank"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
